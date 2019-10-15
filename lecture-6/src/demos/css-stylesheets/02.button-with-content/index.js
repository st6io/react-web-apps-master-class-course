import React from 'react';
import { FaReact } from 'react-icons/fa';

import ButtonWithContent from 
  '../components/ButtonWithContent';

const ButtonWithContentDemo = () => (
  <div>
    <ButtonWithContent>Button 1</ButtonWithContent>
    <ButtonWithContent>Button 2</ButtonWithContent>
    <ButtonWithContent>
      <FaReact /> Button 3
    </ButtonWithContent>
  </div>
);

export default ButtonWithContentDemo;
