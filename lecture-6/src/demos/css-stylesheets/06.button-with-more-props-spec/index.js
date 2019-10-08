import React from 'react';

import ButtonWithMorePropsSpec from '../components/ButtonWithMorePropsSpec';

const ButtonWithMorePropsSpecDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithMorePropsSpec>Small Button (Default)</ButtonWithMorePropsSpec>
    <ButtonWithMorePropsSpec size="medium">
      Medium Button
    </ButtonWithMorePropsSpec>
    <ButtonWithMorePropsSpec size="large">
      Large Button
    </ButtonWithMorePropsSpec>

    <h3>Variants</h3>
    <ButtonWithMorePropsSpec>
      Secondary Button (Default)
    </ButtonWithMorePropsSpec>
    <ButtonWithMorePropsSpec variant="primary">
      Primary Button
    </ButtonWithMorePropsSpec>
    <ButtonWithMorePropsSpec variant="error">
      Error Button
    </ButtonWithMorePropsSpec>
    <ButtonWithMorePropsSpec variant="success">
      Success Button
    </ButtonWithMorePropsSpec>

    <h3>Disabled</h3>
    <ButtonWithMorePropsSpec disabled>
      Disabled Button
    </ButtonWithMorePropsSpec>
  </div>
);

export default ButtonWithMorePropsSpecDemo;
