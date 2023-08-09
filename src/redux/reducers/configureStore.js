import {legacy_createStore as createStore} from "redux"
import reducers from "./index"

// const configureStore = () => {
//     const store = createStore(reducers);
//     return store;
//   };
   
// export default configureStore; 

export default function configureStore(){
    return createStore(reducers);
}