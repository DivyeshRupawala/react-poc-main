
import {useParams} from "react-router-dom";
function View(props) {
    let { wsName, pName, vName } = useParams();
   
  return (
    <div class="view">
          <div> View {props.wsName}
          </div>
    </div>
  );
}

export default View;
