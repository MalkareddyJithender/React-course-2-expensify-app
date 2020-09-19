import React from 'react';
import { shallow } from 'enzyme';
import { UserProfilePage } from '../../components/UserProfilePage';

test('should render UserProfilePage component correctly',() =>
{
    const auth =
    {
        uid:'abc123',
        userName:'Malkareddy Jithender',
        userEmail:'jithendermalkareddy@gmail.com',
        userPhoto:'sbxjkbjkbsadckcnkncknjnjjjkl',
        userPhone:'+916302696865'
    };
    const wrapper = shallow(<UserProfilePage auth={auth} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render UserProfilePage component with no values',() =>
{
    const auth =
    {
        uid:'abc123',
        userName:'',
        userEmail:'',
        userPhoto:'',
        userPhone:''
    };
    const wrapper = shallow(<UserProfilePage auth={auth} />);
    expect(wrapper).toMatchSnapshot();
});

