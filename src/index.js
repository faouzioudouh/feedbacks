import React from "react";
import ReactDOM from "react-dom";

import config from './config';
import setupA11y from './a11y';

const { globalProps, globalConfig} = config.__APP_CONFIG__;

// --- Root component ---
import Usabilla from './components/Usabilla';

// --- Common styles ---
import './scss/common.scss';

// --- Setup A11y ---
globalConfig.a11y && setupA11y();

ReactDOM.render(<Usabilla {...globalProps || {}} />, document.getElementById('root'));
