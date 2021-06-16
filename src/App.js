import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import {changeUser,  incrementBird, incrementAge } from "./store/AppStore";

function App() {
  const birds = useSelector((state) => state.birds);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(event.target[0].value);
     dispatch(changeUser(event.target[0].value));
   };


  return (
    <div className="App">
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <h4>{bird.views}</h4>
            <button onClick={() => dispatch(incrementBird(bird.name))}>
              Increment
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="new_name"  />
      {user.name}
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => dispatch(incrementAge(user))}>
        <span role="img" aria-label="add">
          Age: {user.age}
        </span>
      </button>
    </div>
  );
}

export default App;
