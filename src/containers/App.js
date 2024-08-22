import logo from '../logo.svg';
import './App.css';
import axios from 'axios';
import headerIcon from '../assets/header-icon.svg';

// function selectData(){
//   axios.post('/testData',["가","나","다"])
//       .then(function (res){
//         console.log(res)
//       });
// }

function App() {

  return (
      <div>

          <div>
              <img className="header-icon" alt="" src={require("../assets/header-icon.svg").default}/>
          </div>
          <div>
              <img className="login-image" alt="" src={require("../assets/login-image.svg").default}/>
          </div>

      </div>
  );
}

export default App;