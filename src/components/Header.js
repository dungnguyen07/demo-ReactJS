import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            {/**Banner-top*/}
            <div className='header-banner'>
                <Link to={'#'} ><img className='header-banner-img' src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/bigsale062022-resize_1263.jpg' alt='' /></Link>
            </div>

            {/**Top-Scroll*/}
            <div className='header-logo'>
                {/**Banner-logo*/}
                <Link to={'/'} className='logo'>
                    <img className='logo-img' src={`${require("../assets/img/fahasa-logo.png")}`} />
                </Link>

                {/**Button-search*/}
                <div className='drop-down-zone'>

                    <div className='drop-down-logo'>
                        <span className='dr-logo-left'><img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg' /></span>
                        <span className='dr-logo-right'><img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/icon_seemore_gray.svg' /></span>
                    </div>
                    {/**Button search*/}
                    <div className='search'>
                        <input className='search-text' placeholder='Tìm kiếm sản phẩm bạn cần!'></input>
                        <button className='search-button'>Tìm kiếm</button>
                    </div>
                </div>

                {/**Account-Logo*/}
                <div className='account-zone'>
                    {/**Thông báo*/}
                    <div className='notification'>
                        <span><img className='notification-logo' src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_noti_gray.svg' /></span>
                        <span style={{ marginLeft: 7 }}>Thông báo</span>
                    </div>
                    {/**Giỏ hàng*/}
                    <Link to={'/cart'} className='cart'>
                        <span><img className='cart-logo' src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_cart_gray.svg' /></span>
                        <span style={{ marginLeft: 14 }}>Giỏ hàng</span>
                    </Link>
                    {/**Tài khoản*/}
                    <Link to={'/login'} className='account'>
                        <span><img className='account-logo' src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_account_gray.svg' /></span>
                        <span style={{ marginLeft: 14 }}>Tài khoản</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;