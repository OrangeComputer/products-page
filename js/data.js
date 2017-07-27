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
    price: '$345',
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
}

renderData();
