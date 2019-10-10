import React from 'react';

import ButtonWithVariant from 
  '../components/ButtonWithVariant';

const ButtonWithVariantDemo = () => (
  <div>
    <h3>Sizes</h3>
    <ButtonWithVariant>
      Small Button (Default)
    </ButtonWithVariant>
    <ButtonWithVariant size="medium">
      Medium Button
    </ButtonWithVariant>
    <ButtonWithVariant size="large">
      Large Button
    </ButtonWithVariant>

    <h3>Variants</h3>
    <ButtonWithVariant>
      Secondary Button (Default)
    </ButtonWithVariant>
    <ButtonWithVariant variant="primary">
      Primary Button
    </ButtonWithVariant>
    <ButtonWithVariant variant="error">
      Error Button
    </ButtonWithVariant>
    <ButtonWithVariant variant="success">
      Success Button
    </ButtonWithVariant>

    <h3>Disabled</h3>
    <ButtonWithVariant disabled>
      Disabled Button
    </ButtonWithVariant>

    <h3>Combinations</h3>
    <ButtonWithVariant size="medium" variant="success">
      Medium Success Button
    </ButtonWithVariant>
  </div>
);

export default ButtonWithVariantDemo;
