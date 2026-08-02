import styled from "styled-components";

export const List = styled.ul `
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
list-style: none
;
`

export const Top = styled.span`
  color: ${({ $priority }) => {
    switch ($priority) {
      case "high":
        return "red";

      case "medium":
        return "orange";

      case "low":
        return "green";

      default:
        return "black";
    }
  }};
`;