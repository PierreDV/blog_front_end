function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Webpack is working';

  return element;
}

document.body.appendChild(component());