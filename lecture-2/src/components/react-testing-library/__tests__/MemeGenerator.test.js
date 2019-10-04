import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getRandomImage } from '../../../utils';

import MemeGenerator from '../../MemeGenerator';

jest.mock('../../../utils', () => ({
  getRandomImage: jest.fn(),
}));

describe('MemeGenerator Component', () => {
  beforeEach(() => {
    getRandomImage.mockClear();
  });

  it('should match snapshot', () => {
    const { container } = render(<MemeGenerator />);
    expect(container).toMatchSnapshot();
  });

  it('test shuffle integration', async () => {
    const { getByText, container } = render(<MemeGenerator />);
    const expectedImage = 'https://test.img/jpg';

    getRandomImage.mockResolvedValueOnce(expectedImage);

    fireEvent.click(getByText('Shuffle'));

    await wait(getRandomImage);

    expect(container.getElementsByTagName('img')[0]).toHaveAttribute(
      'src',
      expectedImage,
    );
  });
});
