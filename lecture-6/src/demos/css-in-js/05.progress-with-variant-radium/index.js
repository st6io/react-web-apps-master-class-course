import React from 'react';

import ProgressWithVariantRadium from '../components/ProgressWithVariantRadium';

const ProgressWithVariantRadiumDemo = () => (
  <div>
    <h3>Progress bars</h3>
    <ProgressWithVariantRadium />

    <ProgressWithVariantRadium percentage={25} variant="primary" />

    <ProgressWithVariantRadium percentage={50} variant="error" />

    <ProgressWithVariantRadium percentage={100} variant="success" />
  </div>
);

export default ProgressWithVariantRadiumDemo;
