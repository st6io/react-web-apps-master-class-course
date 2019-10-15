import React from 'react';

import CardWithVariant from '../components/CardWithVariant';
import nikolayImgSrc from "../images/nikolay.jpg";
import kristinaImgSrc from "../images/kristina.jpg";
import dimitarImgSrc from "../images/dimitar.jpg";

const CardWithVariantDemo = () => (
  <div>
    <CardWithVariant
      title="Nikolay Valchev"
      description="Software Craftsman"
      variant="primary"
      imageSrc={nikolayImgSrc}
    >
      Nikolay is an efficiency and speed machine. His
      immense attention to detail shines when he conducts
      code reviews and he is highly driven towards technical
      excellence. A React superstar!
    </CardWithVariant>

    <CardWithVariant
      title="Kristina Koeva"
      description="Software Craftswoman"
      variant="error"
      imageSrc={kristinaImgSrc}
    >
      Super-smart craftswoman who constantly strives for
      perfection and is never afraid to dig into the depths
      of a technical problem. React Native superstar!
    </CardWithVariant>

    <CardWithVariant
      title="Dimitar Tsonev"
      description="Software Craftsman"
      variant="success"
      imageSrc={dimitarImgSrc}
    >
      A team player with superior problem-solving skills,
      attention to detail, and customer-focused personality!
      React Native Master Craftsman!
    </CardWithVariant>
  </div>
);

export default CardWithVariantDemo;
