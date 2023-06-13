import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../../mocks/order';

const initialState = {
  listorder: [],
  orderDetails: {},
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrderDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getOrderDetailsSuccess(state, action) {
      state.orderDetails = action.payload;
      state.loading = false;
      state.error = null;
      console.log(action.payload)
    },
    getOrderDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createOrderStart(state) {
      console.log(state)
      state.loading = true;
      state.error = null;
    },
    createOrderSuccess(state, action) {
      state.listorder.push(action.payload);
      state.orderDetails = action.payload;
      state.loading = false;
      state.error = null;
      console.log(state, action)

    },
    createOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log(state, action)

    },
    payOrderStart(state) {
      state.loading = true;
      state.error = null;
    },
    payOrderSuccess(state, action) {
      if (action.payload === 'Order was paid') {
        state.orderDetails.isPaid = true; // Update the 'isPaid' property of 'orderDetails'
      }
    
      state.loading = false;
      state.error = null;
      console.log(action.payload);
      console.log(state.orderDetails);
      
      return state; // Return the updated state
    },
    
    payOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    listMyOrdersStart(state) {
      state.loading = true;
      state.error = null;
    },
    listMyOrdersSuccess(state, action) {
      state.listorder = action.payload;
      state.loading = false;
      state.error = null;
    },
    listMyOrdersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    listOrdersStart(state) {
      state.loading = true;
      state.error = null;
    },
    listOrdersSuccess(state, action) {
      state.listorder = action.payload;
      state.loading = false;
      state.error = null;
    },
    listOrdersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deliverOrderStart(state) {
      state.loading = true;
      state.error = null;
    },
    deliverOrderSuccess(state, action) {
      const updatedOrder = action.payload;
      const index = state.listorder.findIndex((order) => order._id === updatedOrder._id);
      if (index !== -1) {
        state.listorder[index] = updatedOrder;
      }
      state.loading = false;
      state.error = null;
    },
    deliverOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOrderDetailsStart,
  getOrderDetailsSuccess,
  getOrderDetailsFailure,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
  payOrderStart,
  payOrderSuccess,
  payOrderFailure,
  listMyOrdersStart,
  listMyOrdersSuccess,
  listMyOrdersFailure,
  listOrdersStart,
  listOrdersSuccess,
  listOrdersFailure,
  deliverOrderStart,
  deliverOrderSuccess,
  deliverOrderFailure,
} = orderSlice.actions;

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch(createOrderStart());
    const createdOrder = await orderAPI.createOrder(order);
    dispatch(createOrderSuccess(createdOrder));
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch(createOrderFailure(error.message));
  }
};

export const getOrderDetails = (orderId) => async (dispatch) => {
  try {
    dispatch(getOrderDetailsStart());
    const orderDetails = await orderAPI.getOrderDetails(orderId);
    console.log(orderId)
    dispatch(getOrderDetailsSuccess(orderDetails));
  } catch (error) {
    dispatch(getOrderDetailsFailure(error.message));
  }
};

export const payOrder = (orderId, paymentResult) => async (dispatch) => {
  try {
    dispatch(payOrderStart());
    const updatedOrder = await orderAPI.payOrder(orderId, paymentResult);
    dispatch(payOrderSuccess(updatedOrder));
  } catch (error) {
    dispatch(payOrderFailure(error.message));
  }
};

export const listMyOrders = () => async (dispatch) => {
  try {
    dispatch(listMyOrdersStart());
    const myOrders = await orderAPI.listMyOrders();
    dispatch(listMyOrdersSuccess(myOrders));
  } catch (error) {
    dispatch(listMyOrdersFailure(error.message));
  }
};

export const listOrders = () => async (dispatch) => {
  try {
    dispatch(listOrdersStart());
    const allOrders = await orderAPI.listOrders();
    dispatch(listOrdersSuccess(allOrders));
  } catch (error) {
    dispatch(listOrdersFailure(error.message));
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  try {
    dispatch(deliverOrderStart());
    const updatedOrder = await orderAPI.deliverOrder(orderId);
    dispatch(deliverOrderSuccess(updatedOrder));
  } catch (error) {
    dispatch(deliverOrderFailure(error.message));
  }
};

export const { reducer } = orderSlice;
export default orderSlice;
