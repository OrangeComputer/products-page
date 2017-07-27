var data = {
  x220: {
    price: '$295',
    screenSize: '12'
  },
  t420: {
    price: '$295',
    screenSize: '14'
  },
  t520: {
    price: '$355',
    screenSize: '15.6'
  },
  x230: {
    price: '$395',
    screenSize: '12'
  },
  t430: {
    price: '$395',
    screenSize: '14'
  },
  t530: {
    price: '$435',
    screenSize: '15.6'
  }
}

var renderData = function() {
  x220 = document.getElementById('x220');
  x220.innerHTML = data.x220.price;

  t420 = document.getElementById('t420');
  t420.innerHTML = data.t420.price;

  t520 = document.getElementById('t520');
  t520.innerHTML = data.t520.price;

  x230 = document.getElementById('x230');
  x230.innerHTML = data.x230.price;

  t430 = document.getElementById('t430');
  t430.innerHTML = data.t430.price;

  t530 = document.getElementById('t530');
  t530.innerHTML = data.t530.price;
}

renderData();
