import React from 'react';

import ButtonWithMoreProps from '../components/ButtonWithMoreProps';

const ButtonWithMorePropsDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithMoreProps>Small Button (Default)</ButtonWithMoreProps>
    <ButtonWithMoreProps size="medium">
      Medium Button
    </ButtonWithMoreProps>
    <ButtonWithMoreProps size="large">
      Large Button
    </ButtonWithMoreProps>

    <h3>Variants</h3>
    <ButtonWithMoreProps>
      Secondary Button (Default)
    </ButtonWithMoreProps>
    <ButtonWithMoreProps variant="primary">
      Primary Button
    </ButtonWithMoreProps>
    <ButtonWithMoreProps variant="error">
      Error Button
    </ButtonWithMoreProps>
    <ButtonWithMoreProps variant="success">
      Success Button
    </ButtonWithMoreProps>

    <h3>Disabled</h3>
    <ButtonWithMoreProps disabled>
      Disabled Button
    </ButtonWithMoreProps>

    <h3>Combinations</h3>
    <ButtonWithMoreProps size="large" variant="error">
      Danger Button
    </ButtonWithMoreProps>
  </div>
);

export default ButtonWithMorePropsDemo;
