// 1. Basic Concepts

// 2. CSS Stylesheets
import Button from './css-stylesheets/01.button';
import ButtonWithContent from './css-stylesheets/02.button-with-content';
import ButtonWithProps from './css-stylesheets/03.button-with-props';
import ButtonWithMoreProps from './css-stylesheets/04.button-with-more-props';
import ButtonWithMorePropsClassnames from './css-stylesheets/05.button-with-more-props-classnames';
import ButtonWithMorePropsScss from './css-stylesheets/06.button-with-more-props-scss';
import ButtonWithMorePropsSpec from './css-stylesheets/07.button-with-more-props-spec';

// 3. CSS Modules

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
        component: Button,
      },
      {
        path: '/css-button-with-content',
        name: '02. Button With Content',
        component: ButtonWithContent,
      },
      {
        path: '/css-button-with-props',
        name: '03. Button With Props',
        component: ButtonWithProps,
      },
      {
        path: '/css-button-with-more-props',
        name: '04. Button With More Props',
        component: ButtonWithMoreProps,
      },
      {
        path: '/css-button-with-more-props-classnames',
        name: '05. Button With More Props (CX)',
        component: ButtonWithMorePropsClassnames,
      },
      {
        path: '/css-button-with-more-props-scss',
        name: '06. Button With More Props (SCSS)',
        component: ButtonWithMorePropsScss,
      },
      {
        path: '/css-button-with-more-props-spec',
        name: '07. Button With More Props (CSS Spec)',
        component: ButtonWithMorePropsSpec,
      },
    ],
  },
  {
    title: 'CSS Modules',
    items: [],
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
