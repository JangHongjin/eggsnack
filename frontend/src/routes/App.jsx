import React from 'react';
import styled from 'styled-components';

const propTypes = {};

const defaultProps = {};

// ====

const Root = styled.div`
`;

const App = () => {
  const a = 1;
  return (
    <Root>
      App!
      {a}
    </Root>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
