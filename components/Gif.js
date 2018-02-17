var GIPHY_LOADER_URL = 'http://www.ifmo.ru/images/loader.gif';

Gif = React.createClass({
    getUrl: function() {
        return this.props.sourceUrl || GIPHY_LOADER_URL;
    },
    render: function() {
        var url = this.props.loading ? GIPHY_LOADER_URL : this.props.url;

        return (
            <div className="appgif">
                <a href={this.getUrl()} title='view this on giphy' target='new'>
                    <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}} />
                </a>
            </div>
        );
    }
});