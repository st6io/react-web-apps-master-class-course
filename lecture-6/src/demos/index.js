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
import AlertDemo from './inline-styling/01.alert';
import AlertWithHoverDemo from './inline-styling/02.alert-with-hover';
import AlertWithVariantDemo from './inline-styling/03.alert-with-variant';

// 5. CSS in JS

const demos = [
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
        name: '02. Button with Content',
        component: ButtonWithContentDemo,
      },
      {
        path: '/css-button-with-props',
        name: '03. Button with Props',
        component: ButtonWithPropsDemo,
      },
      {
        path: '/css-button-with-more-props',
        name: '04. Button with More Props',
        component: ButtonWithMorePropsDemo,
      },
      {
        path: '/css-button-with-more-props-classnames',
        name: '05. Button with More Props (CX)',
        component: ButtonWithMorePropsClassnamesDemo,
      },
      {
        path: '/css-button-with-more-props-scss',
        name: '06. Button with More Props (SCSS)',
        component: ButtonWithMorePropsScssDemo,
      },
      {
        path: '/css-button-with-more-props-spec',
        name: '07. Button with More Props (CSS Spec)',
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
        name: '02. Card with Image',
        component: CardWithImageDemo,
      },
      {
        path: '/cssmodules-card-with-image-composes',
        name: '03. Card with Image (Composes)',
        component: CardWithImageComposesDemo,
      },
      {
        path: '/cssmodules-card-with-image-scss',
        name: '04. Card with Image (SCSS)',
        component: CardWithImageScssDemo,
      },
    ],
  },
  {
    title: 'Inline Styling',
    items: [
      {
        path: '/inline-alert',
        name: '01. Alert',
        component: AlertDemo,
      },
      {
        path: '/inline-alert-with-hover',
        name: '02. Alert with Hover',
        component: AlertWithHoverDemo,
      },
      {
        path: '/inline-alert-with-variant',
        name: '03. Alert with Variant',
        component: AlertWithVariantDemo,
      },
    ],
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
