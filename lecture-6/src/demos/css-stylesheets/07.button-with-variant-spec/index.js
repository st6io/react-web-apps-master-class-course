import React from 'react';

import ButtonWithVariantSpec from 
  '../components/ButtonWithVariantSpec';

const ButtonWithVariantSpecDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithVariantSpec>Small Button (Default)</ButtonWithVariantSpec>
    <ButtonWithVariantSpec size="medium">
      Medium Button
    </ButtonWithVariantSpec>
    <ButtonWithVariantSpec size="large">
      Large Button
    </ButtonWithVariantSpec>

    <h3>Variants</h3>
    <ButtonWithVariantSpec>
      Secondary Button (Default)
    </ButtonWithVariantSpec>
    <ButtonWithVariantSpec variant="primary">
      Primary Button
    </ButtonWithVariantSpec>
    <ButtonWithVariantSpec variant="error">
      Error Button
    </ButtonWithVariantSpec>
    <ButtonWithVariantSpec variant="success">
      Success Button
    </ButtonWithVariantSpec>

    <h3>Disabled</h3>
    <ButtonWithVariantSpec disabled>
      Disabled Button
    </ButtonWithVariantSpec>
  </div>
);

export default ButtonWithVariantSpecDemo;
