class Album extends React.Component {
    render() {
        // const { album, onDelete } = this.props;
        // console.log(this.props.onDelete);
        return (React.createElement("div", { className: "album" },
            React.createElement("div", { className: "cover" },
                React.createElement("img", { src: this.props.album.cover }),
                React.createElement("div", { className: "mask" },
                    React.createElement("img", { src: "imgs/delete.png", onClick: this.props.onDelete }))),
            React.createElement("a", { className: "title nowrap", href: "#" }, this.props.album.name),
            React.createElement("a", { href: "#" }, this.props.album.singer),
            React.createElement("div", null, this.props.album.release_time)));
    }
}
export default Album;
//# sourceMappingURL=Album.js.map