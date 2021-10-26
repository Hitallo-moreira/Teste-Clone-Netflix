import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../App";
import Form from "../components/Form/form";

function AppRouter(){
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/register" exact component={Form} />
        </Router>
    )
}

export default AppRouter;