import { IAlbum } from "../utils/type";
import Album from "../components/Album.js";

interface IAlbumsProps {
  currentAlbums: IAlbum[];
  deleteAlbum: (album: IAlbum) => void;
}
class AlbumList extends React.Component<IAlbumsProps> {
  render() {
    const { currentAlbums, deleteAlbum } = this.props;
    // console.log(currentAlbums);
    // console.log(deleteAlbum(currentAlbums[0]));
    return (
      <section className="list">
        {currentAlbums.map(album => (
          <Album
            key={album.id}
            album={album}
            onDelete={() => deleteAlbum(album)}
          />
        ))}
      </section>
    );
  }
}

export default AlbumList;
