import styled from "styled-components";

import StorageIcon from "./Icons/StorageIcon";
import VisualizationIcon from "./Icons/VisualizationIcon";
import MachineLearningIcon from "./Icons/MachineLearningIcon";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div>
      {icon === 1 && <StorageIcon />}
      {icon === 2 && <VisualizationIcon />}
      {icon === 3 && <MachineLearningIcon />}
      <h5>{title}</h5>
      <p className="body--regular">{description}</p>
    </div>
  );
}

FeatureCard.defaultProps = {
  title: "",
  description: "",
};
