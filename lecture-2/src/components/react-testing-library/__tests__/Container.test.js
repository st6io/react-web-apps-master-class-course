import React from 'react';
import { render } from '@testing-library/react';

import Container from '../../Container';

describe('Container Component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Container />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with className', () => {
    const { container } = render(<Container className={'new-class-name'} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="container new-class-name"
        />
      </div>
    `);
  });
});
