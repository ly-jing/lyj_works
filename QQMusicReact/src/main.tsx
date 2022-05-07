import Header from "./components/Header.js";
import Areas from "./components/Areas.js";
import AlbumList from "./components/AlbumList.js";
import { IArea } from "./utils/type.js";
import { IAlbum } from "./utils/type.js";
import * as request from "./utils/request.js";

// 接口
interface IAppState {
  areas: IArea[];
  albums: IAlbum[];
  currentArea: number;
}

class App extends React.Component<{}, IAppState> {
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
      request.get<IArea[]>("data/areas.json"),
      request.get<IAlbum[]>("data/albums.json")
    ]);
    this.setState({
      areas,
      albums,
      currentArea: areas[0].id
    });
  }

  switchTAb = (currentArea: number) => {
    this.setState({ currentArea });
  };

  deleteAlbum = (album: IAlbum) => {
    let index = this.state.albums.indexOf(album);
    this.state.albums.splice(index, 1);
    this.setState({
      albums: this.state.albums
    });
  };
  currentAlbums() {
    return this.state.albums.filter(
      album => album.area === this.state.currentArea
    );
  }

  render() {
    const { areas, currentArea } = this.state;
    return (
      <>
        <Header />
        <main>
          <Areas
            areas={areas}
            currentArea={currentArea}
            switchTab={this.switchTAb}
          />
          <AlbumList
            currentAlbums={this.currentAlbums()}
            deleteAlbum={this.deleteAlbum}
          />
        </main>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
