import React from 'react';

import AlertWithVariant from '../components/AlertWithVariant';

const AlertWithVariantDemo = () => (
  <div>
    <AlertWithVariant>
      Secondary message!
    </AlertWithVariant>

    <AlertWithVariant variant="primary">
      Primary message!
    </AlertWithVariant>

    <AlertWithVariant variant="error">
      Error message!
    </AlertWithVariant>

    <AlertWithVariant variant="success">
      Success message!
    </AlertWithVariant>
  </div>
);

export default AlertWithVariantDemo;