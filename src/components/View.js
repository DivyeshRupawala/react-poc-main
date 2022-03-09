
import { useParams } from "react-router-dom";
import { Dashboard } from ".././pages/Dashboard";
import { Tables } from ".././pages/Tables";
import { Profile } from ".././pages/Profile";



function SelectView(props) {
  let component = props.componentName;
  switch(component){
    case "Dashboard":
      return <Dashboard/>;
      case "Tables":
      return <Tables/>;
      case "Profile":
      return <Profile/>;
  }
}

function View(props) {
    let { wsName, pName } = useParams();
    let component = pName;
    return (
      <div>
        <SelectView componentName={component}/>
        </div>
  );
}

export default View;
