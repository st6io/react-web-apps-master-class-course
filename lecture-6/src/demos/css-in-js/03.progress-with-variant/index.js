import React from 'react';

import ProgressWithVariant from '../components/ProgressWithVariant';

const ProgressWithVariantDemo = () => (
  <div>
    <h3>Progress bars</h3>
    <ProgressWithVariant />

    <ProgressWithVariant percentage={25} variant="primary" />

    <ProgressWithVariant percentage={50} variant="error" />

    <ProgressWithVariant percentage={100} variant="success" />
  </div>
);

export default ProgressWithVariantDemo;
