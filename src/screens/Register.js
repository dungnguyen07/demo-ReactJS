import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otpcode, setotpCode] = useState('');

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

    const onChangeOTP = (ev) => {
        console.log(ev.target.value);// gia tri minh go vao
        setotpCode(ev.target.value);// tra ra thu vua go // hien thi
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
                                Đăng nhập
                            </Link>
                            <Link to={'/register'} className='top-title'>
                                Đăng kí
                            </Link>
                        </div>
                        <div className='center-main'>
                            <div className='login-title'>Số điện thoại/Email</div>
                            <input className='text-box' placeholder='Nhập số điện thoại hoặc Email'
                                value={username}
                                onChange={onChangeUsername} />
                            <div style={{ cursor: 'pointer', color: '#1da5ca', margin: '3px 0 0 310px' }}>Gửi mã OTP</div>

                            <div className='login-title'>Mã OTP</div>
                            <input className='text-box' placeholder='Yêu cầu nhập đủ 6 chữ số!'
                                value={otpcode}
                                onChange={onChangeOTP} />

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


                            <div
                                onClick={onHandleLogin}
                                className='button-regis'>
                                Đăng kí
                            </div>

                            <div className='text-policy'>
                                Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về
                                Điều khoản dịch vụ  và  Chính sách bảo mật
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