import React from "react";
import styled from "styled-components";

const StyledSection = styled("section")`
  text-align: center;

  h2 {
    font-size: 2rem;
    padding: 2rem 0;
  }
`;

const StyledGrid = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 3rem;
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const GridElement = styled("article")`
  display: flex;
  flex-direction: column;
`;

const GridSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      id: 2,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      id: 3,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      id: 4,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      id: 5,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      id: 6,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
  ];

  return (
    <StyledSection>
      <h2>Very important grid</h2>
      <StyledGrid>
        {cards.map((card) => (
          <GridElement key={card.id}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
          </GridElement>
        ))}
      </StyledGrid>
    </StyledSection>
  );
};

export default GridSection;
