import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PlaygroundProps {}

const StyledPlayground = styled.div`
  color: pink;
`;

export function Playground(props: PlaygroundProps) {
  return (
    <StyledPlayground>
      <h1>Welcome to playground!</h1>

    </StyledPlayground>
  );
}

export default Playground;
