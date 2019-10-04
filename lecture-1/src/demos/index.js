import * as GenericComponents from './06.Generic-Components';
import * as SpecialComponents from './07.Special-Components';
import * as PresentationalComponents from './08.Presentational-Components';
import * as ContainerComponents from './09.Container-Components';
import * as WhatAreRefs from './10.What-Are-Refs';
import * as RefDemo from './11.Ref-Demo';
import * as FormComponents from './12.Form-Components';
import * as ControlledForm from './13.Controlled-Form';
import * as LiftStateUp from './14.Lift-State-Up';
import * as WithoutHOCs from './15.Without-HOCs';
import * as WithHOCs from './16.With-HOCs';
import * as ConventionsHOCs from './17.Conventions-HOCs';
import * as CaveatsHOCs from './18.Caveats-HOCs';
import * as RenderProps from './19.RenderProps';
import * as PropsTopToBottom from './20.Props-All-The-Way-Down';
import * as InversionOfControl from './21.Inversion-of-Control';
import * as ContextApi from './22.Context-API';
import * as ContextDemo from './23.Context-Demo';
import * as ThinkingInReact from './24.Thinking-In-React';

const pages = [
  {
    path: '/generic',
    name: 'Generic Components',
    component: GenericComponents.ShowChildren,
  },
  {
    path: '/generic-multiple',
    name: 'Generic Components (Multiple Children)',
    component: GenericComponents.ShowMultiple,
  },
  {
    path: '/Special',
    name: 'Special Components',
    component: SpecialComponents.BlackBox,
  },
  {
    path: '/presentational',
    name: 'Presentational Components',
    component: PresentationalComponents.PresentListView,
  },
  {
    path: '/containers',
    name: 'Container Components',
    component: ContainerComponents.StarWarsListView,
  },
  {
    path: '/what-are-refs',
    name: 'What Are Refs',
    component: WhatAreRefs.FocusExample,
  },
  {
    path: '/refs',
    name: 'Refs Demo',
    component: RefDemo.AutoFocusPasswordInput,
  },
  {
    path: '/uncontrolled',
    name: 'Uncontrolled Form',
    component: FormComponents.LoginForm,
  },
  {
    path: '/controlled',
    name: 'Controlled Form',
    component: ControlledForm.LoginForm,
  },
  {
    path: '/lift-state-up',
    name: 'Lift State Up',
    component: LiftStateUp.Account,
  },
  { path: '/no-hocs', name: 'Without-HOCs', component: WithoutHOCs.Account },
  {
    path: '/hocs',
    name: 'Higher-Order Component',
    component: WithHOCs.Account,
  },
  {
    path: '/hocs-conventions',
    name: 'HOCs Conventions',
    component: ConventionsHOCs.Account,
  },
  {
    path: '/hocs-caveates',
    name: 'HOCs Caveates',
    component: CaveatsHOCs.DemoHOCsCaveats,
  },
  {
    path: '/render-props',
    name: 'Render Props',
    component: RenderProps.DemoRenderProps,
  },
  {
    path: '/props-top-to-bottom',
    name: 'Props Top to Bttom',
    component: PropsTopToBottom.Account,
  },
  {
    path: '/component-composition',
    name: 'Inversion of Control',
    component: InversionOfControl.Account,
  },
  {
    path: '/context-api/no-provider',
    name: 'Context API (default value)',
    component: ContextApi.AccountWithoutProvider,
  },
  {
    path: '/context-api',
    name: 'Context API',
    component: ContextApi.AccountWithProvider,
  },
  {
    path: '/context-demo',
    name: 'Context Demo',
    component: ContextDemo.Account,
  },
  {
    path: '/thinking-in-react',
    name: 'Thinking in React',
    component: ThinkingInReact.MemeGenerator,
  },
];

export default pages;
