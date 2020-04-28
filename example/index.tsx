import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Reveal } from 'react-genie';
import { Animation, ReactGenieAnimations } from '../.';

const App = () => {
  return (
    <div>
      <ReactGenieAnimations />
      <Reveal animation={Animation.FadeInUp}>Hello</Reveal>
      <Reveal animation={Animation.FadeInLeft}>World</Reveal>
      <Reveal animation={Animation.FadeInRight}>Alrighty</Reveal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
