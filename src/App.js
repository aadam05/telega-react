// Deps ↓
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route} from "react-router-dom";

// Components ↓
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

// Styles ↓
import './App.css';


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={ <ProductList /> }/>
            <Route path={'form'} element={ <Form /> }/>
        </Routes>
    </div>
  );
}

export default App;
