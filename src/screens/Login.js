import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isViewPass, setIsViewPass] = useState(false);

    const onChangeViewPass = () => setIsViewPass(!isViewPass);

    const onChangeUsername = (ev) => {
        console.log(ev.target.value);
        setUsername(ev.target.value);
    };

    const onChangePass = (ev) => {
        console.log(ev.target.value);// gia tri minh go vao
        setPassword(ev.target.value);// tra ra thu vua go // hien thi
    };

    const onHandleLogin = () => {

    };


    return (
        <body>
            <div style={{}}>

                {/**Header*/}
                <Header />

                <div className='login-top'></div>


                <div className='body-login'>
                    {/**Login-Body*/}
                    <div className='left'></div>

                    <div className='center'>
                        <div className='center-title'>
                            <Link to={'/login'} className='top-title'>
                                <span>Đăng nhập</span>
                            </Link>
                            <Link to={'/register'} className='top-title'>
                                <span>Đăng kí</span>
                            </Link>
                        </div>
                        <div className='center-main'>
                            <div className='login-title'>Số điện thoại/Email</div>
                            <input className='text-box' placeholder='Nhập số điện thoại hoặc Email'
                                value={username}
                                onChange={onChangeUsername} />

                            <div className='login-title'>Mật khẩu</div>
                            <div style={{ display: 'flex' }}>
                                <input
                                    placeholder='Nhập mật khẩu'
                                    className='text-box'
                                    type={isViewPass ? 'text' : 'password'}
                                    value={password}
                                    onChange={onChangePass}
                                />
                                <span onClick={onChangeViewPass} className='view-pass'> {isViewPass ? <div>Ẩn</div> : <div>Hiện</div>}</span>
                            </div>

                            <div className='forget-pass'>Quên mật khẩu?</div>

                            <div
                                onClick={onHandleLogin}
                                className='button-login'>
                                Đăng nhập
                            </div>

                            <div
                                onClick
                                className='button-login-fb'>
                                Đăng nhập bằng Facebook
                            </div>
                        </div>
                    </div>

                    <div className='right'></div>
                </div>






            </div>
        </body>
    );
}
export default Login;