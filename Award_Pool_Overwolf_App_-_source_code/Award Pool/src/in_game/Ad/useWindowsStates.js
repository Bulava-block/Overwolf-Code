import { useState, useEffect } from 'react';

export default function useWindowsStates() {
  const [states, setStates] = useState({});

  const getWindowsStates = () =>
    new Promise((resolve) => window.overwolf.windows.getWindowsStates(resolve));

  useEffect(() => {
    getWindowsStates().then((results) => {
      if (results.success) {
        setStates(results.resultV2);
      }
    });
  }, []);

  useEffect(() => {
    function onStateChanged(e) {
      const newStates = JSON.parse(JSON.stringify(states));

      newStates[e.window_name] = e.window_state_ex;

      setStates(newStates);
    }

    window.overwolf.windows.onStateChanged.addListener(onStateChanged);

    return () => {
      window.overwolf.windows.onStateChanged.removeListener(onStateChanged);
    };
  }, [states]);

  return states;
}
