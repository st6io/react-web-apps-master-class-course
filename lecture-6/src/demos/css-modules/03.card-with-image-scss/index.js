import React from 'react';

import CardWithImageScss from '../components/CardWithImageScss';
import nikolayImgSrc from "../images/nikolay.jpg";
import kristinaImgSrc from "../images/kristina.jpg";
import dimitarImgSrc from "../images/dimitar.jpg";

const CardWithImageScssDemo = () => (
  <div>
    <CardWithImageScss
      title="Nikolay Valchev"
      description="Software Craftsman"
      imageSrc={nikolayImgSrc}
    >
      Nikolay is an efficiency and speed machine. His
      immense attention to detail shines when he conducts
      code reviews and he is highly driven towards technical
      excellence. A React superstar!
    </CardWithImageScss>

    <CardWithImageScss
      title="Kristina Koeva"
      description="Software Craftswoman"
      imageSrc={kristinaImgSrc}
    >
      Super-smart craftswoman who constantly strives for
      perfection and is never afraid to dig into the depths
      of a technical problem. React Native superstar!
    </CardWithImageScss>

    <CardWithImageScss
      title="Dimitar Tsonev"
      description="Software Craftsman"
      imageSrc={dimitarImgSrc}
    >
      A team player with superior problem-solving skills,
      attention to detail, and customer-focused personality!
      React Native Master Craftsman!
    </CardWithImageScss>
  </div>
);

export default CardWithImageScssDemo;
