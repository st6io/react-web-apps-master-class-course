// 1. Basic Concepts

// 2. CSS Stylesheets
import ButtonDemo from './css-stylesheets/01.button';
import ButtonWithContentDemo from './css-stylesheets/02.button-with-content';
import ButtonWithPropsDemo from './css-stylesheets/03.button-with-props';
import ButtonWithMorePropsDemo from './css-stylesheets/04.button-with-more-props';
import ButtonWithMorePropsClassnamesDemo from './css-stylesheets/05.button-with-more-props-classnames';
import ButtonWithMorePropsScssDemo from './css-stylesheets/06.button-with-more-props-scss';
import ButtonWithMorePropsSpecDemo from './css-stylesheets/07.button-with-more-props-spec';

// 3. CSS Modules
import CardDemo from './css-modules/01.card';
import CardWithImageDemo from './css-modules/02.card-with-image';
import CardWithImageComposesDemo from './css-modules/02.card-with-image-composes';
import CardWithImageScssDemo from './css-modules/04.card-with-image-scss';

// 4. Inline Styling

// 5. CSS in JS

const demos = [
  {
    title: 'Basic Concepts',
    items: [],
  },
  {
    title: 'CSS Stylesheets',
    items: [
      {
        path: '/css-button',
        name: '01. Button',
        component: ButtonDemo,
      },
      {
        path: '/css-button-with-content',
        name: '02. Button With Content',
        component: ButtonWithContentDemo,
      },
      {
        path: '/css-button-with-props',
        name: '03. Button With Props',
        component: ButtonWithPropsDemo,
      },
      {
        path: '/css-button-with-more-props',
        name: '04. Button With More Props',
        component: ButtonWithMorePropsDemo,
      },
      {
        path: '/css-button-with-more-props-classnames',
        name: '05. Button With More Props (CX)',
        component: ButtonWithMorePropsClassnamesDemo,
      },
      {
        path: '/css-button-with-more-props-scss',
        name: '06. Button With More Props (SCSS)',
        component: ButtonWithMorePropsScssDemo,
      },
      {
        path: '/css-button-with-more-props-spec',
        name: '07. Button With More Props (CSS Spec)',
        component: ButtonWithMorePropsSpecDemo,
      },
    ],
  },
  {
    title: 'CSS Modules',
    items: [
      {
        path: '/cssmodules-card',
        name: '01. Card',
        component: CardDemo,
      },
      {
        path: '/cssmodules-card-with-image',
        name: '02. Card With Image',
        component: CardWithImageDemo,
      },
      {
        path: '/cssmodules-card-with-image-composes',
        name: '03. Card With Image (Composes)',
        component: CardWithImageComposesDemo,
      },
      {
        path: '/cssmodules-card-with-image-scss',
        name: '04. Card With Image (SCSS)',
        component: CardWithImageScssDemo,
      },
    ],
  },
  {
    title: 'Inline Styling',
    items: [],
  },
  {
    title: 'CSS In JS',
    items: [],
  },
  {
    title: 'React UI Libraries',
    items: [],
  },
];

export default demos;
