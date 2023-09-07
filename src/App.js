import './App.css';
import {  CartProvider } from './routerstr/header/navbarmenu/cartcontext';
import Routerservises from './routerstr/routerserver';


const App = () => {
  
  return (
    <div>

      
       <CartProvider>
      
        <Routerservises />
     
       </CartProvider>
    </div>
  );
}

export default App;
