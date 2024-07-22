import "bootstrap/dist/css/bootstrap.min.css";

import CurrentTime from "./Components/CurrentTime";
import Heading from "./Components/Heading";
import Description from "./Components/description";


function App(){
return <center className="lh-lg">
<Heading/>
<Description/>
<CurrentTime/>
</center>
}
export default App;