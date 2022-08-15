import "./ad.css";
import Ad from "./Ad";

const AdContainer = ({
  isLoadingAd,
  isLoadingWindowName,
  windowName,
  isSubscribed,
}) => (
  <div className="widget ad">
    {/* isLoadingAd && <Fragment>Placeholder for loading ads.</Fragment> */}
    {/* isLoadingAd === false && (
     <Fragment>Placeholder when no ads appearing.</Fragment>
    ) */}
    {isLoadingWindowName === false && (
      <Ad
        windowName={windowName}
        width={400}
        height={300}
        enabled={isSubscribed}
      />
    )}
  </div>
);

export default AdContainer;
