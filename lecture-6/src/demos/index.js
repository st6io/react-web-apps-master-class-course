// 2. CSS Stylesheets
import ButtonDemo from './css-stylesheets/01.button';
import ButtonWithContentDemo from './css-stylesheets/02.button-with-content';
import ButtonWithPrimaryDemo from './css-stylesheets/03.button-with-primary';
import ButtonWithVariantDemo from './css-stylesheets/04.button-with-variant';
import ButtonWithVariantCxDemo from './css-stylesheets/05.button-with-variant-cx';
import ButtonWithVariantScssDemo from './css-stylesheets/06.button-with-variant-scss';
import ButtonWithVariantSpecDemo from './css-stylesheets/07.button-with-variant-spec';

// 3. CSS Modules
import CardDemo from './css-modules/01.card';
import CardWithImageDemo from './css-modules/02.card-with-image';
import CardWithImageScssDemo from './css-modules/03.card-with-image-scss';
import CardWithVariantDemo from './css-modules/04.card-with-variant';

// 4. Inline Styling
import AlertDemo from './inline-styling/01.alert';
import AlertWithHoverDemo from './inline-styling/02.alert-with-hover';
import AlertWithVariantDemo from './inline-styling/03.alert-with-variant';

// 5. CSS in JS
import ProgressDemo from './css-in-js/01.progress';
import ProgressWithExtendDemo from './css-in-js/02.progress-with-extend';
import ProgressWithVariantDemo from './css-in-js/03.progress-with-variant';
import ProgressWithVariantThemeDemo from './css-in-js/04.progress-with-variant-theme';
import ProgressWithVariantRadiumDemo from './css-in-js/05.progress-with-variant-radium';

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
        path: '/css-button-with-primary',
        name: '03. Button with Primary',
        component: ButtonWithPrimaryDemo,
      },
      {
        path: '/css-button-with-variant',
        name: '04. Button with Variant',
        component: ButtonWithVariantDemo,
      },
      {
        path: '/css-button-with-variant-cx',
        name: '05. Button with Variant (CX)',
        component: ButtonWithVariantCxDemo,
      },
      {
        path: '/css-button-with-variant-scss',
        name: '06. Button with Variant (SCSS)',
        component: ButtonWithVariantScssDemo,
      },
      {
        path: '/css-button-with-variant-spec',
        name: '07. Button with Variant (CSS Spec)',
        component: ButtonWithVariantSpecDemo,
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
        path: '/cssmodules-card-with-variant',
        name: '03. Card with Variant (Composes)',
        component: CardWithVariantDemo,
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
    items: [
      {
        path: '/cssinjs-progress',
        name: '01. Progress',
        component: ProgressDemo,
      },
      {
        path: '/cssinjs-progress-with-extend',
        name: '03. Progress (extend)',
        component: ProgressWithExtendDemo,
      },
      {
        path: '/cssinjs-progress-with-variant',
        name: '03. Progress with Variant',
        component: ProgressWithVariantDemo,
      },
      {
        path: '/cssinjs-progress-with-variant-theme',
        name: '04. Progress with Variant (theme)',
        component: ProgressWithVariantThemeDemo,
      },
      {
        path: '/cssinjs-progress-with-variant-radium',
        name: '05. Progress with Variant (Radium)',
        component: ProgressWithVariantRadiumDemo,
      },
    ],
  },
];

export default demos;
