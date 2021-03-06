// const React = require('react'); // 노드의 모듈시스템
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import NumberBaseball from './NumberBaseballClass';

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));
