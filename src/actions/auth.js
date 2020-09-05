import { firebase,googleAuthProvider } from '../firebase/firebase';

//startLogin Action Generator
const startLogin = () =>
{
    return () =>
    {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

//Login action generator
export const Login = (uid) =>({
    type:'LOGIN',
    uid
});

//startLogout Action Generator
const startLogout = () =>
{
    return () =>
    {
       return firebase.auth().signOut();
    };
};

//Logout action generator
export const Logout = () =>({
    type:'LOGOUT'
});

export { startLogin,startLogout };