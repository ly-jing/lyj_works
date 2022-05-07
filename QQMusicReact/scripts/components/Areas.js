class Areas extends React.Component {
    render() {
        const { areas, currentArea, switchTab } = this.props;
        return (React.createElement("ul", { className: "tabs" }, areas.map(area => {
            let className = "tab-item";
            if (area.id === currentArea) {
                className += " tab-active";
            }
            return (React.createElement("li", { key: area.id, className: className, onClick: () => switchTab(area.id) }, area.name));
        })));
    }
}
export default Areas;
//# sourceMappingURL=Areas.js.map