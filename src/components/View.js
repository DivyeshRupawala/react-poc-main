
import {useParams} from "react-router-dom";

function View() {
    let { wsName, pName, vName } = useParams();
    if (!pName) {
        pName = "defaultPage";
    }
    if (!vName) {
        vName = "defaultView";
    }
  return (
    <div >
          <h3>Requested Workspace {wsName}, Page {pName}, View {vName }</h3>
    </div>
  );
}

export default View;
