import React from 'react';

import ButtonWithVariantScss from 
  '../components/ButtonWithVariantScss';

const ButtonWithVariantScssDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithVariantScss>Small Button (Default)</ButtonWithVariantScss>
    <ButtonWithVariantScss size="medium">
      Medium Button
    </ButtonWithVariantScss>
    <ButtonWithVariantScss size="large">
      Large Button
    </ButtonWithVariantScss>

    <h3>Variants</h3>
    <ButtonWithVariantScss>
      Secondary Button (Default)
    </ButtonWithVariantScss>
    <ButtonWithVariantScss variant="primary">
      Primary Button
    </ButtonWithVariantScss>
    <ButtonWithVariantScss variant="error">
      Error Button
    </ButtonWithVariantScss>
    <ButtonWithVariantScss variant="success">
      Success Button
    </ButtonWithVariantScss>

    <h3>Disabled</h3>
    <ButtonWithVariantScss disabled>
      Disabled Button
    </ButtonWithVariantScss>
  </div>
);

export default ButtonWithVariantScssDemo;
