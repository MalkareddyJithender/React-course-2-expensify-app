//authReducer
const authReducer = (state = {},action) =>
{
    switch(action.type)
    {
        case 'LOGIN':
            return {
                uid:action.uid,
                userName:action.userName,
                userEmail:action.userEmail,
                userPhoto:action.userPhoto,
                userPhone:action.userPhone
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    };
};

export default authReducer;