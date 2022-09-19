import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDetail, getLogin } from '../services/api';

const initState = {
    // ke hang
    shoes: [],
    electrics: [],
    cart: [],
    wishlist: [],
    productDetail: {},
    login: {},
};


export const fetchProductDetail = createAsyncThunk(
    'products/fetchProductDetail',
    async (productId, thunkAPI) => {
        const response = await getDetail(productId);
        return response.data;
    }
);




const productSlice = createSlice({
    name: 'productSlice',
    initialState: initState,
    reducers: {
        // kiem tra san pham co nam trong gio hang hay khong
        addProduct: (state, action) => {
            const cartproductExist = state.cart.find(item => item.id === action.payload.id);
            if (cartproductExist) {// nếu sp đó đã nằm trong giỏ hàng
                state.cart = state.cart.map(item => { // loop qua các sp trong giỏ hàng
                    if (item.id === action.payload.id) {
                        item.quantity += 1; // giống thì tăng lên 1
                    }
                    return item;
                });
            } else {// nếu chưa có thì đẩy sp đó vào giỏ hàng và gán số lượng quantity = 1
                // console.log('action.payload', action.payload);
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            // if (isExist) {
            //   const pod = { ...action.payload, quantity: isExist.quantity + 1 };
            //   state.cart.push(pod);
            // } else {
            //   state.cart.push({ ...action.payload, quantity: 1 });
            // }
        },
        addWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
        changeQuantity: (state, action) => {
            state.cart = state.cart.map(item => { // lặp qua các item trong list cart
                if (item.id === action.payload.id) { // nếu item mà nó lặp qua = với item mà mình gửi vào
                    item.quantity = action.payload.quantity; // thì update quantity
                }
                return item;
            });
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(e => e.id !== action.payload.id);
        },
    },

    extraReducers: {
        // fetch product detail
        // [fetchProductDetail.pending]: (state, action) => {
        //   state.loading = true;
        // },
        [fetchProductDetail.fulfilled]: (state, action) => {
            state.loading = false;
            state.productDetail = action.payload.data; // action.payload chinh là data trả về từ api dòng 15
        },
        // [fetchProductDetail.rejected]: (state, action) => {
        //   state.productDetail = {};
        // },

    }


});





export const { addProduct, addWishlist, changeQuantity, removeProduct } = productSlice.actions;

export default productSlice.reducer;