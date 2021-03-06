import React from 'react';
import { connect } from 'react-redux';

export const UserProfilePage = (props) =>
{
    return (
        <div>
            <div className="content-container--profile">
            <div id="profile">
            <img className="img" src={props.auth.userPhoto} />
            <div>
            <h1 className="title">User Profile</h1>
            </div>
            </div>
            </div> 
            <div  className="content-container--About">
            <div className="About__title">
                <img className="i-icon" src="data:image/png;base64,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" />&nbsp;&nbsp;   
                <h5 className="About__title__2">About</h5>
            </div>
                <div className="About__content">
                    <p className="About__content__header">Name</p>                  
                    {
                     props.auth.userName ? 
                        <p className="About__content__body">{props.auth.userName}</p>
                        :
                        <p className="About__content__body">anonymous</p>
                    }  
                </div>
                <div className="About__content">
                    <p className="About__content__header">Email</p>
                    {
                     props.auth.userEmail ? 
                        <p className="About__content__body">{props.auth.userEmail}</p>
                        :
                        <p className="About__content__body">no email</p>
                    }                    
                </div>
                <div className="About__content">
                    <p className="About__content__header">Mobile Phone</p>
                    {props.auth.userPhone? 
                    <p className="About__content__body">{props.auth.userPhone}</p>
                    :
                    <p className="About__content__body">no mobile number</p>
                    }
                </div>
            </div>
        </div>          
    );
};

const mapStateToProps = (state) =>
{
    return {
        auth:state.auth
    }
};

const connectedUserProfilePage = connect(mapStateToProps)(UserProfilePage);
export default connectedUserProfilePage;
