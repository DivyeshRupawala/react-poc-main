
import { useParams } from "react-router-dom";
import ViewC from './ViewC';

function View() {
    let { wsName, pName, vName } = useParams();
    
    return (
        <ViewC wsName={wsName} pName={pName} vName={vName} />
  );
}

export default View;
