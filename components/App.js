const GIPHY_PUB_KEY = 'pEUwe89mZNFj5NHUFaCmDmkMTPNLrWk0';
const GIPHY_API_URL = 'https://api.giphy.com';

App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },

    handleSearch: function(searchingText) { // 1.
        this.setState({
            loading: true  // 2.
        });

        this.getGif(searchingText)  
            .then(response => {
                const data = JSON.parse(response).data; // 4.
                const gif = {  // 5.
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                this.setState({  // 4
                    loading: false,  // a
                    gif: gif,  // b
                    searchingText: searchingText  // c
                });
            })
            .catch(error => console.log('error'));
        
    },

    getGif: function(searchingText, callback) {  
        return new Promise (function (resolve, reject) {
        const url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
        const xhr = new XMLHttpRequest();  

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject (new Error(this.statusText));
            }
            xhr.onerror = function () {
                reject(new Error( 
                    `XMLHttpRequest Error: ${this.statusText}`));
            };
        };
        xhr.open( 'GET', url);
        xhr.send();
        });
    },
    
    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style={styles} className='appcontent'>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciśnij enter, aby pobierać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
            <Gif 
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
            />
          </div>
        );
    }
});