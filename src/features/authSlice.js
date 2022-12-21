/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialstate = {
    employees: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:""
}

export const LoginEmployees = createAsyncThunk("employees/LoginEmployees", async(user, thunkApi) =>{
    try {
        const response = await axios.post('http:localhost:5000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkApi.rejectWithValue(message);
        }
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialstate,
    reducers:{
        reset: (state) => initialstate
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginEmployees.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginEmployees.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.employees = action.payload;
        });
        builder.addCase(LoginEmployees.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;*/