import React from 'react';

import CardWithImage from '../components/CardWithImage';
import nikolayImgSrc from "../images/nikolay.jpg";
import kristinaImgSrc from "../images/kristina.jpg";
import dimitarImgSrc from "../images/dimitar.jpg";

const CardWithImagetDemo = () => (
  <div>
    <CardWithImage
      title="Nikolay Valchev"
      description="Software Craftsman"
      imageSrc={nikolayImgSrc}
    >
      Nikolay is an efficiency and speed machine. His
      immense attention to detail shines when he conducts
      code reviews and he is highly driven towards technical
      excellence. A React superstar!
    </CardWithImage>

    <CardWithImage
      title="Kristina Koeva"
      description="Software Craftswoman"
      imageSrc={kristinaImgSrc}
    >
      Super-smart craftswoman who constantly strives for
      perfection and is never afraid to dig into the depths
      of a technical problem. React Native superstar!
    </CardWithImage>

    <CardWithImage
      title="Dimitar Tsonev"
      description="Software Craftsman"
      imageSrc={dimitarImgSrc}
    >
      A team player with superior problem-solving skills,
      attention to detail, and customer-focused personality!
      React Native Master Craftsman!
    </CardWithImage>
  </div>
);

export default CardWithImagetDemo;
