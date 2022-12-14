import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState, AppDispatch } from '../../store'
import { User } from "./UserSlice";

type loginResponse = {
    token: string,
    userData: User
}


const loginRequest = createAsyncThunk('loginRequest',
    async (loginPayload: LoginPayload) => {
        const response: any = await axios.post<LoginPayload>('http://localhost:3001/users', loginPayload)
        return response.data;
    }
)



export default loginRequest;

export type LoginPayload = {
    email: string,
    password: string
}