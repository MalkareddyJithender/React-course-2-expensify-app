import authReducer from '../../reducers/auth';

test('should set up default state',() =>
{
    const action = {
        type:'@@INIT'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({});
});

test('should set user for Login',() =>
{
    const action = {
        type:'LOGIN',
        uid:'abcd1234',
        userName:'Malkareddy Jithender',
        userEmail:'jithendermalkareddy@gmail.com',
        userPhoto:'photourl@apl',
        userPhone:'+916302696865'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({
        uid:'abcd1234',
        userName:'Malkareddy Jithender',
        userEmail:'jithendermalkareddy@gmail.com',
        userPhoto:'photourl@apl',
        userPhone:'+916302696865'
    });
});

test('should clear user for Logout',() =>
{
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer({uid:'abc123'},action);
    expect(state).toEqual({});
});