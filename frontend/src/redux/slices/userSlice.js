import { createSlice } from '@reduxjs/toolkit';
import userAPI from '../../mocks/user';

const storedUserInfo = localStorage.getItem("userInfo");

const initialState = {
  userDetails: storedUserInfo ? JSON.parse(storedUserInfo) : null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.userDetails = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getUserDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserDetailsSuccess(state, action) {
      state.userDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    createUserSuccess(state, action) {
      state.userDetails = { ...action.payload };
      state.loading = false;
      state.error = null;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    createUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state, action) {
      state.userDetails = { ...state.userDetails, ...action.payload };
      state.loading = false;
      state.error = null;
      localStorage.setItem("userInfo", JSON.stringify(state.userDetails));
    },
    updateUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess(state) {
      state.userDetails = {};
      state.loading = false;
      state.error = null;
      localStorage.removeItem("userInfo");

    },
    deleteUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.userDetails = {};
      state.loading = false;
      state.error = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getUserDetailsFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  logoutSuccess,
} = userSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await userAPI.login(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const fetchUserDetails = (userId) => async (dispatch) => {
  try {
    dispatch(getUserDetailsStart());
    const userDetails = await userAPI.getUserDetails( );
    dispatch(getUserDetailsSuccess(userDetails));
  } catch (error) {
    dispatch(getUserDetailsFailure(error.message));
  }
};

export const createUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch(createUserStart());
    const user = await userAPI.createUser(name, email, password);
    dispatch(createUserSuccess(user));
    dispatch(loginSuccess(user));  
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

export const updateUser = (userId, updateData) => async (dispatch) => {
  try {
    dispatch(updateUserStart());
    const updatedUser = await userAPI.updateUser(userId, updateData);
    dispatch(updateUserSuccess(updatedUser));
  } catch (error) {
    dispatch(updateUserFailure(error.message));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch(deleteUserStart());
    await userAPI.deleteUser(userId);
    dispatch(deleteUserSuccess());
  } catch (error) {
    dispatch(deleteUserFailure(error.message));
  } 

};

export const logout = () => (dispatch) => {
  dispatch(userSlice.actions.logoutSuccess());
};
export const { reducer } = userSlice;
export default userSlice;
