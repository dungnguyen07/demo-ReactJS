import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Header from '../components/Header';
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from '../services/api';
import { addProduct, addWishlist } from '../reducers/productSlice';

function FlashSale() {


    const [data, setData] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            const result = await getProducts();
            console.log('result', result);
            setData(result.data);

        };

        getAllProducts();

    }, []);


    const navigate = useNavigate();
    const onMoveToDetail = (item) => () => {
        navigate(`/detail/${item.id}`, { replace: true, state: item });
        //console.log(item)
    };


    const dispatch = useDispatch();
    const addToCart = (item) => () => {
        // dispatch({
        //   type: "ADD_PRODUCT",
        //   data: item
        // });
        dispatch(addProduct(item));
        alert('Thêm thành công vào giỏ hàng!');
    };


    return (
        <div id='section' style={{ background: '#F0F0F0', minHeight: 1280 }}>
            {/**Header*/}
            <Header />


            {/**Body_FlashSale*/}
            <div style={{ background: '#F0F0F0' }}>
                <div style={{ display: 'flex', marginLeft: '7%' }}>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>Trang Chủ</Link> /FLASHSALE
                </div>
            </div>


            {/**Banner*/}
            <div style={{ background: 'red', height: 271, display: 'flex', marginLeft: '7%', marginRight: '6%', marginTop: 18 }}>
                <img style={{ width: '100%', height: '100%' }} src='https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/0622bigsale-flashsale_1920.jpg' />
            </div>


            {/**Thong bao*/}
            <div style={{ background: 'green', height: 120, display: 'block', marginLeft: '7%', marginRight: '6%', marginTop: 10 }}>
                <div style={{ display: 'flex', width: '100%', height: 50, background: '#FCDAB0', alignItems: 'center', paddingLeft: 20, color: 'black' }}>
                    <text style={{ fontWeight: 'bold', fontSize: 18 }}>FLASHSALE &nbsp;</text> <text>| Kết thúc trong 00 : 00 : 00</text>
                </div>
                <div style={{ width: '100%', height: 70, background: 'white', display: 'flex' }}>
                    <div style={{ width: '20%', display: 'inline-block', textAlign: 'center', paddingTop: 7 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}>15:00</span>
                        <span style={{ cursor: 'pointer' }}><br />Sắp bán</span>
                    </div>
                    <div style={{ width: '20%', display: 'inline-block', textAlign: 'center', paddingTop: 7 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}>16:00</span>
                        <span style={{ cursor: 'pointer' }}><br />Sắp bán</span>
                    </div>
                    <div style={{ width: '20%', display: 'inline-block', textAlign: 'center', paddingTop: 7 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}>17:00</span>
                        <span style={{ cursor: 'pointer' }}><br />Sắp bán</span>
                    </div>
                    <div style={{ width: '20%', display: 'inline-block', textAlign: 'center', paddingTop: 7 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}>18:00</span>
                        <span style={{ cursor: 'pointer' }}><br />Sắp bán</span>
                    </div>
                    <div style={{ width: '20%', display: 'inline-block', textAlign: 'center', paddingTop: 7 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 18, cursor: 'pointer' }}>19:00</span>
                        <span style={{ cursor: 'pointer' }}><br />Sắp bán</span>
                    </div>
                </div>
            </div>



            {/**MENU*/}

            <div style={{ background: 'white', height: 50, display: 'flex', marginLeft: '7%', marginRight: '6%', marginTop: 10, alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', fontSize: 16 }}>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Tất cả</li>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Nhà sách Minh Thắng</li>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Tân Việt</li>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Đinh Tị</li>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Nhà xuất bản Kim Đồng</li>
                <li style={{ paddingLeft: 20, listStyleType: 'none' }}>Thêm</li>
            </div>


            {/**Danh muc san pham*/}
            <div style={{ display: 'flex', flexWrap: "wrap", width: '87%', marginLeft: '7%', marginRight: '6%', marginTop: '10px' }}>


                {data.map(e => (
                    <div style={{ background: 'blue', width: '18%', height: '320px', marginRight: '2%', marginTop: '2%' }}>
                        <div>
                            <div id='image' style={{ width: '100%', height: '60%', background: 'white' }}>
                                <img onClick={onMoveToDetail(e)} style={{ display: 'block', width: '90%', height: '100%', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }} src={e.image} />
                            </div>
                        </div>
                        <div id='name' style={{ display: 'flex', width: '100%', height: '15%', background: 'white', alignItems: 'center' }}>
                            <span style={{ marginLeft: '10px' }}>{e.title}</span>
                        </div>
                        <div id='price' style={{ display: 'flex', width: '100%', height: '15%', background: 'white', alignItems: 'center', color: '#F7941E', fontWeight: 'bold' }}>{e.price} $</div>
                        <div id='status' style={{ display: 'block', width: '100%', height: '10%', background: 'white', textAlign: 'center' }}>
                            <button onClick={addToCart(e)} style={{ fontWeight: 'bold', background: 'linear-gradient(to right, #ff9800, #F7695D)', borderRadius: 25, color: 'white', border: 'none' }}>Thêm vào giỏ</button>
                        </div>
                    </div>
                ))}




            </div>


        </div>
    );
}
export default FlashSale;