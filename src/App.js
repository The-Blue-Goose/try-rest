import './App.css';
import Axios from 'axios';

const App = () =>{
    const getJoke = () => {
        Axios.get("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json",
          }
        }
        ).then(
            (response) => {
                console.log(response);
                }
            );
        };
 return (
<div className="container"><button onClick={getJoke}>dad joke</button>
<br/><p>Hi!</p>
</div>
 );
};
export default App;
