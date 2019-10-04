import React from 'react';
import { shallow, mount } from 'enzyme';
import MemeGenerator from '../../MemeGenerator';
import MemeInput from '../../MemeInput';
import Meme from '../../Meme';
import { getRandomImage } from '../../../utils';

jest.mock('../../../utils', () => ({
  getRandomImage: jest.fn(),
}));

describe('MemeGenerator Component', () => {
  it('smoke test', () => {
    expect(shallow(<MemeGenerator />)).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<MemeGenerator />);

    expect(wrapper).toMatchSnapshot();
  });

  it('full rendering should match snapshot', () => {
    const wrapper = mount(<MemeGenerator />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when topText changes', () => {
    const wrapper = shallow(<MemeGenerator />);
    const expectedTopText = 'expected top text';

    wrapper
      .find(MemeInput)
      .simulate('inputChange', { topText: expectedTopText });

    const memeWrapper = wrapper.find(Meme);

    expect(memeWrapper).toHaveProp('topText', expectedTopText);
  });

  it('should match snapshot when image changes', () => {
    const wrapper = shallow(<MemeGenerator />);
    const expectedImage = 'https://test.image/png';

    wrapper.find(MemeInput).simulate('imageChange', expectedImage);

    const memeWrapper = wrapper.find(Meme);

    expect(memeWrapper).toHaveProp('image', expectedImage);
  });

  it('test shuffle integration', async () => {
    const wrapper = mount(<MemeGenerator />);
    const expectedImage = 'https://test.img/jpg';

    const resolveExpectedImage = Promise.resolve(expectedImage);
    getRandomImage.mockImplementation(() => resolveExpectedImage);

    wrapper.find('#shuffle').simulate('click');

    await resolveExpectedImage;
    wrapper.update();

    expect(wrapper.find('img')).toHaveProp('src', expectedImage);
  });
});
