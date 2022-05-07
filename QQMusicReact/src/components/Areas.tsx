import { IArea } from "../utils/type";

interface IAreasProps {
  areas: IArea[];
  currentArea: number;
  switchTab: (currentArea: number) => void;
}
class Areas extends React.Component<IAreasProps> {
  render() {
    const { areas, currentArea, switchTab } = this.props;
    return (
      <ul className="tabs">
        {areas.map(area => {
          let className = "tab-item";
          if (area.id === currentArea) {
            className += " tab-active";
          }
          return (
            <li
              key={area.id}
              className={className}
              onClick={() => switchTab(area.id)}
            >
              {area.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Areas;
