import { firebase,googleAuthProvider,facebookAuthProvider } from '../firebase/firebase';

//startLogin Action Generator
const startLogin = () =>
{
    return () =>
    {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

const startLogin2 = () =>
{
    return () =>
    {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
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

export { startLogin,startLogin2,startLogout };