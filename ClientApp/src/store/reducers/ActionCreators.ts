import axios from 'axios';
import { IUser } from './../../models/IUser';
import { AppDispatch } from './../store';
// import { usersFetching, usersFetchingError, usersFetchingSuccess } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 		try{
// 			dispatch(usersFetching())
// 			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
// 			dispatch(usersFetchingSuccess(response.data))
// 		}catch(e){
// 			dispatch(usersFetchingError('Fetching failed'))
// 		}
// 	}

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (_, thunkAPI) => {
		try{
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			return response.data
		}catch{
			return thunkAPI.rejectWithValue('Users fetching error')
		}
	}
)