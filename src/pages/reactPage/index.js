// react单页面的入口文件

import React from 'react';
import ReactDom from 'react-dom';

const jsx = (
  <div>
    <h1>react单页面</h1>
    <p>这是使用了react框架的单页面应用</p>
  </div>
);

ReactDom.render(jsx,document.getElementById('root'));

