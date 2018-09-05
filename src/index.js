import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { HashRouter ,  Route ,  Redirect, Switch } from 'react-router-dom'

import reducers from './reducer'
//import { counter } from './index.redux'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
const reduxDextools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDextools

));

function Boss(){
    return <h2>BOSS</h2>
}
// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props);
//         return <h2>test </h2>
//     }
// }
ReactDOM.render(
(<Provider  store={store} >
    <HashRouter>  
        <div>
                <AuthRoute></AuthRoute>
              
                <Route path='/boss' exact component={Boss}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/register' component={ Register}></Route>  
                <Redirect to='/login'></Redirect>  
               
        </div>     
    </HashRouter>
    
</Provider>),document.getElementById('root')
);

