
import { combineReducers } from "redux";

const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";
const INCREMENT_AGE = "INCREMENT_AGE";

const CHANGE_NAME = "CHANGE_NAME";

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



 export function changeUser(user) {
   return {
     type: CHANGE_NAME,
     user,
   };
 }

export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  };
}


export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}

export function incrementAge(user) {
  console.log(JSON.stringify(user));
  return {
    type: INCREMENT_AGE,
    user,
  };
}



 const defaultBirds = [
   
     {
       name: "parrot",
       views: 1,
     }
   
    ]
  
  
const defaultUser = {
    name: "unknown",
    age: 35,
  }


function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1,
        },
      ];
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.bird === b.name);
      const birds = state.filter((b) => action.bird !== b.name);
      return [
        ...birds,
        {
          ...bird,
          views: bird.views + 1,
        },
      ];
    default:
      return state;
  }
}


function userReducer(state = defaultUser, action) {

   console.log(action);

  switch (action.type) {
    case CHANGE_NAME:
      
        return {
        name: action.user,
        age: state.age,
      };

    
    case INCREMENT_AGE:
      
      var a = Number(action.user.age);
  console.log(a);
      return {
        name: action.user.name,
        age: action.user.age+1,
      };
    default:
      return state;
  }
}

const birdApp = combineReducers({
  birds,
  user: userReducer,
});

export default  birdApp
