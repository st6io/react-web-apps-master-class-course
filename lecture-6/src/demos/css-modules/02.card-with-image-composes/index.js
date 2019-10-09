import React from 'react';

import CardWithImageComposes from '../components/CardWithImageComposes';
import nikolayImgSrc from "../images/nikolay.jpg";
import kristinaImgSrc from "../images/kristina.jpg";
import dimitarImgSrc from "../images/dimitar.jpg";

const CardWithImagetDemo = () => (
  <div>
    <CardWithImageComposes
      title="Nikolay Valchev"
      description="Software Craftsman"
      variant="primary"
      imageSrc={nikolayImgSrc}
    >
      Nikolay is an efficiency and speed machine. His
      immense attention to detail shines when he conducts
      code reviews and he is highly driven towards technical
      excellence. A React superstar!
    </CardWithImageComposes>

    <CardWithImageComposes
      title="Kristina Koeva"
      description="Software Craftswoman"
      variant="error"
      imageSrc={kristinaImgSrc}
    >
      Super-smart craftswoman who constantly strives for
      perfection and is never afraid to dig into the depths
      of a technical problem. React Native superstar!
    </CardWithImageComposes>

    <CardWithImageComposes
      title="Dimitar Tsonev"
      description="Software Craftsman"
      variant="success"
      imageSrc={dimitarImgSrc}
    >
      A team player with superior problem-solving skills,
      attention to detail, and customer-focused personality!
      React Native Master Craftsman!
    </CardWithImageComposes>
  </div>
);

export default CardWithImagetDemo;
