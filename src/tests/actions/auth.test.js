import { Login,Logout } from '../../actions/auth';

test('should generate Login action object',() =>
{
    const user = 
    {
        uid:'abcd12345',
        userName:'Malkareddy Jithender',
        userEmail:'jithendermalkareddy@gmail.com',
        userPhoto:'photourl@apl',
        userPhone:'+916302696865'
    };

    const action = Login(user);
    expect(action).toEqual({
        type:'LOGIN',
        uid:user.uid,
        userName:user.userName,
        userEmail:user.userEmail,
        userPhoto:user.userPhoto,
        userPhone:user.userPhone
        })
});

test('should generate Logout action object',() =>
{
    const action = Logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});