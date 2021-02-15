
let $hotButton = document.querySelector('.hot-button');
let $hotContent = document.querySelector('.hot-content');
$hotButton.addEventListener('click',function(){
  let p = document.createElement('div');
  p.setAttribute('class','hot-p');
  $hotContent.appendChild(p);
})

import webpackImg from '@assets/images/webpack.png';
let $buttonLoader = document.querySelector('.button-loader');
let $buttonLoaderParent = $buttonLoader.parentNode;
$buttonLoader.addEventListener('click',function(e){
  let img = new Image();
  img.setAttribute('src',webpackImg);
  $buttonLoaderParent.appendChild(img);
})

// es6

new Promise(function(resolve){
  resolve('es6 promise成功')
}).then(function(res){
  console.log(res);
})