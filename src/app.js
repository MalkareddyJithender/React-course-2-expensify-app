import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { Login,Logout } from './actions/auth';
import getVisibleExpenses from './selecters/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();


const jsx = 
<Provider store={store}>
<AppRouter />
</Provider>

ReactDOM.render(<LoadingPage /> ,document.getElementById('app'));

let hasRendered = false;

const renderApp = () =>
{
    if(!hasRendered)
    {
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
};


firebase.auth().onAuthStateChanged((user) =>
{
    if(user)
    {
        console.log('log in');
        console.log(user);
        
        //store.dispatch(Login(user.uid));
        store.dispatch(Login({
            uid:user.uid,
            userName:user.displayName,
            userEmail:user.email,
            userPhoto:user.photoURL,
            userPhone:user.phoneNumber
        }));
        store.dispatch(startSetExpenses()).then(() =>
        {
            renderApp();
            if(history.location.pathname === '/')
            {
                history.push('/dashboard');
            }
        });
    }
    else
     {
       console.log('log out');
       store.dispatch(Logout());
       renderApp();
       history.push('/');
    }
});