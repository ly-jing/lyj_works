import Album from "../components/Album.js";
class AlbumList extends React.Component {
    render() {
        const { currentAlbums, deleteAlbum } = this.props;
        // console.log(currentAlbums);
        // console.log(deleteAlbum(currentAlbums[0]));
        return (React.createElement("section", { className: "list" }, currentAlbums.map(album => (React.createElement(Album, { key: album.id, album: album, onDelete: () => deleteAlbum(album) })))));
    }
}
export default AlbumList;
//# sourceMappingURL=AlbumList.js.map