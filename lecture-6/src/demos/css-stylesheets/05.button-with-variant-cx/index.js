import React from 'react';

import ButtonWithVariantCx from 
  '../components/ButtonWithVariantCx';

const ButtonWithVariantCxDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithVariantCx>
      Small Button (Default)
    </ButtonWithVariantCx>
    <ButtonWithVariantCx size="medium">
      Medium Button
    </ButtonWithVariantCx>
    <ButtonWithVariantCx size="large">
      Large Button
    </ButtonWithVariantCx>

    <h3>Variants</h3>
    <ButtonWithVariantCx>
      Secondary Button (Default)
    </ButtonWithVariantCx>
    <ButtonWithVariantCx variant="primary">
      Primary Button
    </ButtonWithVariantCx>
    <ButtonWithVariantCx variant="error">
      Error Button
    </ButtonWithVariantCx>
    <ButtonWithVariantCx variant="success">
      Success Button
    </ButtonWithVariantCx>

    <h3>Disabled</h3>
    <ButtonWithVariantCx disabled>
      Disabled Button
    </ButtonWithVariantCx>

    <h3>Custom logic</h3>
    <ButtonWithVariantCx
      size="large"
      variant="error"
    >
      Warning
    </ButtonWithVariantCx>
  </div>
);

export default ButtonWithVariantCxDemo;
