import React from 'react';

import ButtonWithMorePropsScss from 
  '../components/ButtonWithMorePropsScss';

const ButtonWithMorePropsScssDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithMorePropsScss>Small Button (Default)</ButtonWithMorePropsScss>
    <ButtonWithMorePropsScss size="medium">
      Medium Button
    </ButtonWithMorePropsScss>
    <ButtonWithMorePropsScss size="large">
      Large Button
    </ButtonWithMorePropsScss>

    <h3>Variants</h3>
    <ButtonWithMorePropsScss>
      Secondary Button (Default)
    </ButtonWithMorePropsScss>
    <ButtonWithMorePropsScss variant="primary">
      Primary Button
    </ButtonWithMorePropsScss>
    <ButtonWithMorePropsScss variant="error">
      Error Button
    </ButtonWithMorePropsScss>
    <ButtonWithMorePropsScss variant="success">
      Success Button
    </ButtonWithMorePropsScss>

    <h3>Disabled</h3>
    <ButtonWithMorePropsScss disabled>
      Disabled Button
    </ButtonWithMorePropsScss>
  </div>
);

export default ButtonWithMorePropsScssDemo;
