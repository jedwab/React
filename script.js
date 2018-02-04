var movies = [
  {
  	id: 1,
    title: 'Vikings',
    desc: 'Historyczno-przygodowy',
    img: 'images/vikings.jpg'
  },
  {
  	id: 2,
    title: 'Sherlock Holmes',
    desc: 'Historyczno-przygodowy',
    img: 'images/sherlock.jpg'
  },
  {
  	id: 3,
  	title: 'Interstellar',
  	desc: 'Science-Fiction',
  	img: 'images/interstellar.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'))