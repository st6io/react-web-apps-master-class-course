import React from 'react';

import ProgressWithExtend from '../components/ProgressWithExtend';

const ProgressWithExtendDemo = () => (
  <div>
    <h3>Progress bars</h3>
    <ProgressWithExtend />

    <ProgressWithExtend percentage={25} />

    <ProgressWithExtend percentage={50} />

    <ProgressWithExtend percentage={100} />

    <h3>Disabled</h3>
    <ProgressWithExtend percentage={100} disabled />
  </div>
);

export default ProgressWithExtendDemo;
