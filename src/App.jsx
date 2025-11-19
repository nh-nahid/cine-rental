import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./contexts";
import Pages from "./Pages";
import { cartReducer, initialState } from "./reducers/cartReducer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


function App() {

const [darkMode, setDarkMode] = useState(true);
const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{state, dispatch}}>
        <Pages />
        <ToastContainer />
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
