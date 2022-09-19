// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getLogin } from '../services/api';

// const initState = {
//     // ke hang
//     users: null,

// };

// export const fetchLogin = createAsyncThunk(
//     'login/fetchLogin',
//     async (account, thunkAPI) => {
//         const response = await getLogin(account);
//         return response.data.token;
//     }
// );


// const authSlice = createSlice({
//     name: 'authSlice',
//     initialState: initState,
//     reducers: {
//         login: (state, action) => {
//             state.Users = action.payload;// action.payload: cai minh day vao
//             console.log("authSlice", action.payload);
//         },
//         deleteLogin: (state, action) => {
//             state.users = null;
//             // console.log("deleteuser:", state.Users);
//         }
//     },
//     extraReducers: {
//         // fetch product detail
//         // [fetchProductDetail.pending]: (state, action) => {
//         //   state.loading = true;
//         // },
//         [fetchLogin.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.users = action.payload; // action.payload chinh là data trả về từ api dòng 15
//         },

//         // [fetchProductDetail.rejected]: (state, action) => {
//         //   state.productDetail = {};
//         // },

//     }
// });


// export const { login, deleteLogin } = authSlice.actions;

// export default authSlice.reducer;