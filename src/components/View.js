
import { useParams } from "react-router-dom";
import { Dashboard } from ".././pages/Dashboard";
import { Tables } from ".././pages/Tables";
import { Pivot } from ".././pages/Pivot";
import { Profile } from ".././pages/Profile";
import LineChart from "./LineChart";
import { MultiWidget } from "../pages/MultiWidget";

function SelectView(props) {
  let component = props.componentName;
  switch(component){
    case "Dashboard":
      return <Dashboard/>;
      case "Pivot":
      return <Pivot/>;
      case "Tables":
      return <Tables/>;
      case "Profile":
      return <Profile/>;
      case "Linechart":
      return <LineChart/>;
      case "MultiWidget":
        return <MultiWidget />;
  }
}

function View(props) {
    let { wsName, pName } = useParams();
    let component = pName;
    return (
      <div className="View">
        <SelectView componentName={component}/>
        </div>
  );
}

export default View;
