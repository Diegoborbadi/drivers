import{Route,Switch}from "react-router-dom"
import Landing from "./views/landing/landing";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";
import Navbar from "./components/navbar/navbar";
import "./App.css"

const App = () => {
    return (
        <div className="App-page">
                <Route exact path= {"*"} component={Navbar}/>
            <Switch>
                <Route exact path={"/"} component={Landing}/>
                <Route path={"/home"} component={Home}/>
                <Route path={"/drivers/:id"} component={Detail}/>
                <Route path={"/create"} component={Create}/>
            </Switch>
        </div>
    );
};

export default App;