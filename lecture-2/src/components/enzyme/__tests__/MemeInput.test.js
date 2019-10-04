import React from 'react';
import { shallow } from 'enzyme';
import { getRandomImage } from '../../../utils';

import MemeInput from '../../MemeInput';

jest.mock('../../../utils', () => ({
  getRandomImage: jest.fn(),
}));

describe('MemeInput Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<MemeInput />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <MemeInput
        className="new-class-name"
        topText="Your excuses"
        bottomText="are lies!"
        onTextChange={() => {}}
        shuffleImage={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when url toggled', () => {
    const wrapper = shallow(
      <MemeInput
        className="new-class-name"
        topText="Your excuses"
        bottomText="are lies!"
        onTextChange={() => {}}
        shuffleImage={() => {}}
      />,
    );

    const toggleUrlButton = wrapper.findWhere(
      el => el.text() === 'Via Url' && el.type() === 'button',
    );
    toggleUrlButton.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should render url input when Via Url clicked', () => {
    const wrapper = shallow(
      <MemeInput
        className="new-class-name"
        topText="Your excuses"
        bottomText="are lies!"
        onTextChange={() => {}}
        shuffleImage={() => {}}
      />,
    );

    const toggleUrlButton = wrapper.findWhere(
      el => el.text() === 'Via Url' && el.type() === 'button',
    );

    toggleUrlButton.simulate('click');

    expect(wrapper.find('input[name="url"]')).toExist();
  });

  it('should propagate topText change', () => {
    const onInputChangeMock = jest.fn();
    const wrapper = shallow(
      <MemeInput
        className="new-class-name"
        topText="Your excuses"
        bottomText="are lies!"
        onInputChange={onInputChangeMock}
        shuffleImage={() => {}}
      />,
    );

    expect(onInputChangeMock).not.toHaveBeenCalled();

    const topTextInput = wrapper.find('input[name="topText"]');
    topTextInput.simulate('change', {
      target: { name: 'topText', value: 'test test test' },
    });

    expect(onInputChangeMock).toHaveBeenCalledWith({
      topText: 'test test test',
    });
  });

  it('should propagate image change', async () => {
    const expectedImage = 'https://some.test.img/png';

    const resolveExpectedImage = Promise.resolve(expectedImage);
    getRandomImage.mockImplementation(() => resolveExpectedImage);

    const onImageChangeMock = jest.fn();
    const wrapper = shallow(
      <MemeInput
        className="new-class-name"
        topText="Your excuses"
        bottomText="are lies!"
        onImageChange={onImageChangeMock}
      />,
    );

    expect(onImageChangeMock).not.toHaveBeenCalled();

    const shuffleButton = wrapper.findWhere(
      el => el.text() === 'Shuffle' && el.type() === 'button',
    );

    shuffleButton.simulate('click');

    await resolveExpectedImage;

    expect(onImageChangeMock).toHaveBeenCalledWith(expectedImage);
  });
});
