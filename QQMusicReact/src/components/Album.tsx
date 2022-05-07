import { IAlbum } from "../utils/type";

interface Props {
  album: IAlbum;
  onDelete: () => void;
}
class Album extends React.Component<Props> {
  render() {
    // const { album, onDelete } = this.props;
    // console.log(this.props.onDelete);
    return (
      <div className="album">
        <div className="cover">
          <img src={this.props.album.cover} />
          <div className="mask">
            <img src="imgs/delete.png" onClick={this.props.onDelete} />
          </div>
        </div>
        <a className="title nowrap" href="#">
          {this.props.album.name}
        </a>
        <a href="#">{this.props.album.singer}</a>
        <div>{this.props.album.release_time}</div>
      </div>
    );
  }
}
export default Album;
