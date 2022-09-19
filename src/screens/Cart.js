import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeProduct } from '../reducers/productSlice';


export default function Detail() {


    const dispatch = useDispatch(); // dùng để gửi item vào reducer

    const cartData = useSelector(store => store.productSlice.cart);// lấy cart từ store ra
    //console.log('dulieucantim', cartData);

    const onChangeInput = (item) => (ev) => {
        // gửi item đã thay đổi quantity vào reducer (quantity là ev.target.value)
        dispatch(changeQuantity({ ...item, quantity: ev.target.value })); // item mới đã thay đổi quantity
    };

    const onChangeQuantity = (type, item) => () => {
        console.log('type', type);
        if (type === 'increase') {
            dispatch(changeQuantity({ ...item, quantity: Number(item?.quantity) + 1 }));//ép kiểu, đưa về kiểu số
        } else {
            dispatch(changeQuantity({ ...item, quantity: item?.quantity >= 1 ? Number(item?.quantity) - 1 : 0 }));
        }
    };

    const onRemoveProduct = (item) => () => {
        dispatch(removeProduct(item));
        alert('Xóa sản phẩm thành công!');
    };




    return (
        <body>
            <div style={{ background: '#F0F0F0' }}>

                {/**Header*/}
                <Header />

                <div style={{ height: '10px' }}></div>

                {/**Cart  */}
                <div className='cart-wrapper'>

                    <div className='cart-title'>
                        GIỎ HÀNG : {cartData?.length} SẢN PHẨM
                    </div>

                    <div className='cart-content'>
                        <div className='cart-left'>
                            <div className='top-option'>

                                <input className='top-option-checkbox'
                                    type="checkbox"
                                    id=''
                                    name=''
                                // checked={'nike'}
                                // onChange={() => {}}
                                />
                                <div className='top-option-name'>Chọn tất cả sản phẩm ( 1 sản phẩm )</div>
                                <div className='top-option-count'>Số lượng</div>
                                <div className='top-option-price'>Thành tiền</div>

                            </div>


                            {cartData.map((item) => (
                                <div className='cart-product'>
                                    <input className='top-option-checkbox'
                                        type="checkbox"
                                        id=''
                                        name=''
                                    // checked={'nike'}
                                    // onChange={() => {}}
                                    />
                                    <div className='cart-prd-img'>
                                        <img className='info-prd-img' src={item?.image} alt='' />
                                    </div>
                                    <div className='cart-prd-info'>
                                        <div className='info-prd-name'>{item.title}</div>
                                        <div className='info-prd-price'>{item.price}</div>
                                    </div>
                                    <div className='cart-prd-count'>
                                        <button onClick={onChangeQuantity('decrease', item)} className='button-count'>-</button>
                                        <div className='count-value'>
                                            <input
                                                value={item?.quantity}
                                                onChange={onChangeInput(item)}
                                            />

                                        </div>
                                        <button onClick={onChangeQuantity('increase', item)} className='button-count'>+</button>
                                    </div>
                                    <div className='cart-prd-price'>{item.price}</div>
                                    <button onClick={onRemoveProduct(item)} className='button-remove'>Xóa</button>
                                </div>
                            ))}

                        </div>

                        <div className='cart-right'>
                            <div className='cart-checkout'>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>Thành tiền</div>
                                    <div style={{ marginLeft: '120px' }}>15.000 VNĐ</div>
                                </div>

                                <hr style={{ margin: '10px 10px 10px 10px' }} />

                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>Tổng Số Tiền (Gồm VAT)</div>
                                    <div style={{ marginLeft: '120px', color: 'red', fontWeight: 'bold' }}>15.000 VNĐ</div>
                                </div>

                                <button className='button-checkout'>THANH TOÁN</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </body >
    );
}
