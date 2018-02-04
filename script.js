var moviesArray = [
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

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function(){
        return (
            React.createElement('li', {key: this.props.movie.id}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MoviePoster, {src: this.props.movie.img})
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function(){
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function(){
        return React.createElement('p', {}, this.props.desc)
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
    },
    render: function(){
        return React.createElement('img', {src: this.props.src})
    }
});

var MoviesList = React.createClass({
    render: function(){
        return (
            React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, movieElement)
            )
        )
    }
});

var movieElement = moviesArray.map(function(movie){
    return React.createElement(Movie, {key: movie.id, movie: movie})
});

var moviesListElement = React.createElement(MoviesList);

ReactDOM.render(moviesListElement, document.getElementById('app'));