import Header from "./components/Header.js";
import Areas from "./components/Areas.js";
import AlbumList from "./components/AlbumList.js";
import * as request from "./utils/request.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: [],
            albums: [],
            currentArea: 0
        };
    }
    componentDidMount() {
        this.loadData();
    }
    async loadData() {
        let [areas, albums] = await Promise.all([
            request.get("data/areas.json"),
            request.get("data/albums.json")
        ]);
        this.setState({
            areas,
            albums,
            currentArea: areas[0].id
        });
    }
    switchTAb = (currentArea) => {
        this.setState({ currentArea });
    };
    deleteAlbum = (album) => {
        let index = this.state.albums.indexOf(album);
        this.state.albums.splice(index, 1);
        this.setState({
            albums: this.state.albums
        });
    };
    currentAlbums() {
        return this.state.albums.filter(album => album.area === this.state.currentArea);
    }
    render() {
        const { areas, currentArea } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("main", null,
                React.createElement(Areas, { areas: areas, currentArea: currentArea, switchTab: this.switchTAb }),
                React.createElement(AlbumList, { currentAlbums: this.currentAlbums(), deleteAlbum: this.deleteAlbum }))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=main.js.map