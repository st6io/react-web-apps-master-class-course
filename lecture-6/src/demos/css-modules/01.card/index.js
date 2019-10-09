import React from 'react';

import Card from '../components/Card';

const CardDemo = () => (
  <div>
    <Card
      title="Nikolay Valchev"
      description="Software Craftsman"
    >
      Nikolay is an efficiency and speed machine. His
      immense attention to detail shines when he conducts
      code reviews and he is highly driven towards technical
      excellence. A React superstar!
    </Card>

    <Card
      title="Kristina Koeva"
      description="Software Craftswoman"
    >
      Super-smart craftswoman who constantly strives for
      perfection and is never afraid to dig into the depths
      of a technical problem. React Native superstar!
    </Card>

    <Card
      title="Dimitar Tsonev"
      description="Software Craftsman"
    >
      A team player with superior problem-solving skills,
      attention to detail, and customer-focused personality!
      React Native Master Craftsman!
    </Card>
  </div>
);

export default CardDemo;
