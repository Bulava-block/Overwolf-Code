import React from "react";
import Ad from "./Ad";

const AdContainer = ({
  isLoadingAd,
  isLoadingWindowName,
  windowName,
}: {
  isLoadingAd: boolean;
  isLoadingWindowName: boolean;
  windowName: string;
}) => (
  <div className="widget ad">
    {/* isLoadingAd && <Fragment>Placeholder for loading ads.</Fragment> */}
    {/* isLoadingAd === false && (
     <Fragment>Placeholder when no ads appearing.</Fragment>
    ) */}
    {isLoadingWindowName === false && (
      <Ad windowName={windowName} width={400} height={300} enabled={true} />
    )}
  </div>
);

export default AdContainer;
