import styled from "styled-components";

import StorageIcon from "./Icons/StorageIcon";
import VisualizationIcon from "./Icons/VisualizationIcon";
import MachineLearningIcon from "./Icons/MachineLearningIcon";

import media from "../lib/mediaQueries";

const CardStyles = styled.div`
  text-align: center;

  width: 70%;

  ${media.tablet} {
    flex: 1;

    width: 100%;
  }

  svg {
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    color: var(--grey400);
  }
`;
export default function FeatureCard({ title, description, icon }) {
  return (
    <CardStyles>
      {icon === 1 && <StorageIcon />}
      {icon === 2 && <VisualizationIcon />}
      {icon === 3 && <MachineLearningIcon />}
      <h4>{title}</h4>
      <p className="body--regular">{description}</p>
    </CardStyles>
  );
}

FeatureCard.defaultProps = {
  title: "",
  description: "",
};
