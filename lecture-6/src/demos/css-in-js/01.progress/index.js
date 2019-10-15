import React from 'react';

import Progress from '../components/Progress';

const ProgressDemo = () => (
  <div>
    <h3>Progress bars</h3>
    <Progress />

    <Progress percentage={25} />

    <Progress percentage={50} />

    <Progress percentage={100} />

    <h3>Disabled</h3>
    <Progress percentage={100} disabled />
  </div>
);

export default ProgressDemo;
