import React, { useState, useEffect, useRef, useMemo } from "react";
import useGameInFocus from "./useGameInFocus";
import useWindowsStates from "./useWindowsStates";
import { windowNames } from "../../consts";
import eventEmitter from "../emitter";

//localStorage.owAdsForceAdUnit = "Ad_test";

const kAdWindowsPriority = [windowNames.inGame];

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

type Props = {
  windowName: string;
  width: undefined | number;
  height: undefined | number;
  enabled: undefined | boolean;
};

const Ad = ({
  windowName,
  width = 400,
  height = 300,
  enabled = true,
}: Props) => {
  const ingameWindow = windowName === windowNames.inGame;
  const gameInFocus = useGameInFocus(false);
  const windowStates = useWindowsStates(null);

  const adRef = useRef(null);

  const [adInstance, setAdInstance] = useState(null);

  const [windowIsVisible, setWindowIsVisible] = useState(false);

  const [updateVisibilityInterval, setUpdateVisibilityInterval] =
    useState(null);

  const openAndFirstPriority = useMemo(() => {
    if (!windowStates || !windowStates[windowName]) {
      return false;
    }

    var openWindows = kAdWindowsPriority.filter((name) => {
      return isOpenWindow(windowStates[name]);
    });

    console.info(
      `[OWAD] Ad openAndFirstPriority: ${JSON.stringify({
        windowName,
        openWindows,
      })}`
    );

    // Current window is either open and first in priority, or closed and
    // not in this array
    return openWindows.indexOf(windowName) === 0;
  }, [windowName, windowStates]);

  const [show, setShow] = useState(
    Boolean(
      enabled &&
        openAndFirstPriority &&
        (!ingameWindow || (ingameWindow && gameInFocus))
    )
  );

  const wasShown = usePrevious(show);

  function isOpenWindow(windowState) {
    return windowState === "normal" || windowState === "maximized";
  }

  function loadAdScript() {
    return new Promise((resolve, reject) => {
      console.info("[OWAD] Ad loadAdScript()");

      const el = document.createElement("script");

      el.src = "https://content.overwolf.com/libs/ads/latest/owads.min.js";
      el.async = true;
      el.onload = resolve;
      el.onerror = reject;

      document.body.appendChild(el);
    });
  }

  async function getWindowIsVisible() {
    const state: overwolf.windows.IsWindowVisibleToUserResult =
      await new Promise((resolve) => {
        window.overwolf.windows.isWindowVisibleToUser(resolve);
      });
    return state && state.success && state.visible !== "hidden";
  }

  useEffect(() => {
    setShow(
      Boolean(
        enabled &&
          openAndFirstPriority &&
          ((!ingameWindow && windowIsVisible) || (ingameWindow && gameInFocus))
      )
    );
  }, [
    enabled,
    gameInFocus,
    ingameWindow,
    openAndFirstPriority,
    windowIsVisible,
  ]);

  useEffect(() => {
    console.info("[OWAD] Ad show:", show);
  }, [show]);

  useEffect(() => {
    console.info("[OWAD] Ad enabled:", enabled);
  }, [enabled]);

  useEffect(() => {
    console.info("[OWAD] Ad gameInFocus:", gameInFocus);
  }, [gameInFocus]);

  useEffect(() => {
    console.info("[OWAD] Ad windowIsVisible:", windowIsVisible);
  }, [windowIsVisible]);

  useEffect(() => {
    console.info("[OWAD] Ad ingameWindow:", ingameWindow);
  }, [ingameWindow]);

  useEffect(() => {
    // do not check overwolf.windows.isWindowVisibleToUser() for ingame windows
    // because it returns incorrect results
    if (ingameWindow) {
      return;
    }

    getWindowIsVisible().then(setWindowIsVisible);

    const handle = setInterval(() => {
      getWindowIsVisible().then(setWindowIsVisible);
    }, 1000);

    setUpdateVisibilityInterval(handle);
  }, [ingameWindow]);

  useEffect(() => {
    return () => {
      if (updateVisibilityInterval !== null) {
        clearInterval(updateVisibilityInterval);
      }
    };
  }, [updateVisibilityInterval]);

  useEffect(() => {
    async function createAd() {
      if (!adRef || !adRef.current) {
        console.info("[OWAD] No AdRef");
        return;
      }

      console.info("[OWAD] Ad createAd()");

      if (!window.OwAd) {
        console.info("[OWAD] OwAd not defined, loading remote scripts");
        await loadAdScript();
        eventEmitter.emit("update-is-loading-ad", false);
      }

      const inst = new window.OwAd(adRef.current, { size: { width, height } });

      inst.addEventListener("player_loaded", () => {
        console.info("[OWAD] Ad adInstance: player_loaded");
      });
      inst.addEventListener("display_ad_loaded", () => {
        console.info("[OWAD] Ad adInstance: display_ad_loaded");
      });
      inst.addEventListener("play", () => {
        console.info("[OWAD] Ad adInstance: play");
      });
      inst.addEventListener("impression", () => {
        console.info("[OWAD] Ad adInstance: impression");
      });
      inst.addEventListener("complete", () => {
        console.info("[OWAD] Ad adInstance: complete");
      });
      inst.addEventListener("ow_internal_rendered", () => {
        console.info("[OWAD] Ad adInstance: ow_internal_rendered");
      });
      inst.addEventListener("error", (e) => {
        console.info(
          `[OWAD] Ad adInstance: instance error: ${JSON.stringify(e)}`
        );
      });

      setAdInstance(inst);
    }

    if (show !== wasShown) {
      if (show) {
        if (adInstance) {
          console.info("[OWAD] Ad adInstance.refreshAd()");
          try {
            adInstance.refreshAd();
          } catch (e) {}
        } else {
          createAd();
        }
      } else if (adInstance) {
        console.info("[OWAD] Ad adInstance.removeAd()");
        try {
          adInstance.removeAd();
        } catch (error) {
          console.info("[OWAD] Caught error: ", error);
        }
      }
    }
  }, [adInstance, show, wasShown, width, height]);

  useEffect(() => {
    return () => {
      if (adInstance) {
        try {
          adInstance.removeAd();
        } catch (error) {
          console.info("[OWAD] Caught error: ", error);
        }
      }
    };
  }, [adInstance]);

  return <div className="ow-ad" ref={adRef}></div>;
};

export default Ad;
