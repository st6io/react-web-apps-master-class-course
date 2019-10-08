import React from 'react';

import ButtonWithMorePropsClassnames from 
  '../components/ButtonWithMorePropsClassnames';

const ButtonWithMorePropsClassnamesDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithMorePropsClassnames>
      Small Button (Default)
    </ButtonWithMorePropsClassnames>
    <ButtonWithMorePropsClassnames size="medium">
      Medium Button
    </ButtonWithMorePropsClassnames>
    <ButtonWithMorePropsClassnames size="large">
      Large Button
    </ButtonWithMorePropsClassnames>

    <h3>Variants</h3>
    <ButtonWithMorePropsClassnames>
      Secondary Button (Default)
    </ButtonWithMorePropsClassnames>
    <ButtonWithMorePropsClassnames variant="primary">
      Primary Button
    </ButtonWithMorePropsClassnames>
    <ButtonWithMorePropsClassnames variant="error">
      Error Button
    </ButtonWithMorePropsClassnames>
    <ButtonWithMorePropsClassnames variant="success">
      Success Button
    </ButtonWithMorePropsClassnames>

    <h3>Disabled</h3>
    <ButtonWithMorePropsClassnames disabled>
      Disabled Button
    </ButtonWithMorePropsClassnames>

    <h3>Custom logic</h3>
    <ButtonWithMorePropsClassnames
      size="large"
      variant="error"
    >
      Warning
    </ButtonWithMorePropsClassnames>
  </div>
);

export default ButtonWithMorePropsClassnamesDemo;
