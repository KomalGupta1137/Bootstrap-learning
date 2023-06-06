import { Grid } from "@material-ui/core";
import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  
  return(
    <Router>
      <Home/>
      

    </Router>
   
  )

}
export default App

