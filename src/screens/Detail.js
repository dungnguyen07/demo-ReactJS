import React from 'react';
import Header from '../components/Header';
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, useLinkClickHandler, Link } from "react-router-dom";
import { getDetail } from '../services/api';

export default function Detail() {

    const params = useParams();
    console.log('param', params);

    const [data, setData] = useState([]);
    useEffect(() => {
        const getAllProductDetail = async () => {
            const rs = await getDetail(params.id);
            console.log('rs', rs);
            setData(rs.data);
        };

        getAllProductDetail();
    }, []);


    return (
        <body>
            <div style={{ background: 'F0F0F0' }}>

                {/**Header*/}
                <Header />

                <div className='login-top'></div>

                {/**Detail SP */}


                <div className='wrapper'>
                    <div className='w-left'>
                        <div className='img-detail'>
                            <img className='img-detail-location' src={data.image} alt='' />
                        </div>
                    </div>
                    <div className='w-center'>
                        <div style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: "monospace", marginTop: '10px' }}>{data.title}</div>
                        <div style={{ display: 'flex', fontSize: '18px', marginTop: '10px' }}>Nhà xuất bản:<div> &nbsp; {data.description}</div></div>
                        <div style={{ display: 'flex', fontSize: '18px', marginTop: '10px' }}>Hình Thức Bìa:<div> &nbsp; {data.type}</div></div>
                        <div style={{ display: 'flex', fontFamily: 'sans-serif', color: 'red', marginTop: '10px', fontSize: '30px', fontWeight: 'bolder' }}>{data.price}</div>
                        <div style={{ display: 'flex', fontSize: '18px', marginTop: '10px' }}>Chính sách đổi trả:<div> &nbsp; Đổi trả sản phẩm trong vòng 30 ngày</div></div>
                        <div style={{ display: 'flex', fontSize: '18px', marginTop: '10px' }}>Số lượng:<div> &nbsp; {data.quantum} </div></div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '200px', height: '35px', border: '0.2px solid red', marginTop: '35px', borderRadius: '10px', display: 'flex', textAlign: 'center', cursor: 'pointer' }}>
                                <span><img className='cart-logo' src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_cart_gray.svg' /></span>
                                <span style={{ marginTop: '5px' }}>Thêm vào giỏ hàng</span>
                            </div>
                            <div style={{ width: '200px', height: '35px', background: 'red', marginTop: '35px', borderRadius: '10px', marginLeft: '20px', cursor: 'pointer', color: 'white', textAlign: 'center', paddingTop: '5px' }}>
                                Mua Ngay
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </body >
    );
}
