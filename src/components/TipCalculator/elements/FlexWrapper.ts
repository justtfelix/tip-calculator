import styled from "styled-components";

const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const FlexWrapperWithMargin = styled(FlexWrapper)`
  margin: 30px 0;

  @media (max-width: 375px) {
    margin: 22px 0;
  }
`;

export { FlexWrapper, FlexWrapperWithMargin };
