import React, { useMemo } from "react";
import Checkmark from "./checkmark";

type Props = {
  key: string;
  id: string;
  label: string;
  complete: number;
  incomplete: number;
  state: number;
  won: boolean;
};

const ChallengeItem = ({
  id,
  label,
  incomplete,
  state,
  complete,
  won,
  ...props
}: Props) => (
  <section className="challenge-item" {...props}>
    <div className="partner-icon">
      {/*Replace here <img src={variableHere} /> */}
      <img src="img/fortniteIcon.png" />
    </div>
    <div className="details">
      <div className="item-title">
        <p>{label}</p>
      </div>
      <div className="progress-bg">
        <div
          className="progress-bar"
          style={{
            width: `${incomplete}%`,
          }}
        ></div>
      </div>
    </div>
    <div className="result">
      {won === true ? (
        <Checkmark />
      ) : (
        <p>
          {state}/{complete}
        </p>
      )}
    </div>
  </section>
);

export default ChallengeItem;
