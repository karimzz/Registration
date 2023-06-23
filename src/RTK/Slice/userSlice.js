import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




// For Update User
// export const updateUser = createAsyncThunk("user/updateUser" , async(args , thunkAPI)=>{
//     const {rejectWithValue } = thunkAPI ; 
//     try{
//         const response = await fetch(`http://localhost:3009/users/${args.id}` , {
//             method :"PATCH" ,
//             body : JSON.stringify(args), 
//             headers : {
//                 "Content-type" : "application/json; charset=UTF-8"
//             }

//         })
//     }catch(error)
//     {
//         return rejectWithValue(error.message)
//     }
// })

// For Delete User
export const deleteUser = createAsyncThunk("user/deleteUser" ,async (args , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI ; 
    try{
        const response = fetch(`http://localhost:3009/users/${args}` , {
        method :"DELETE" ,
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    
    })
    return args
    }catch(error)
    {
        return rejectWithValue(error.message) ; 
    }
})

// For Get All User
export const getAllUser = createAsyncThunk("user/getAllUser" ,async (_ , thunkAPI )=>{
    const {rejectWithValue}  = thunkAPI ; 
    try{
        const response = await fetch("http://localhost:3009/users") ; 
        const data = await response.json() ; 
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})

// For Insert User
export const insertUser = createAsyncThunk( "user/insertUser" , async (args , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI ; 
    try{
         await fetch("http://localhost:3009/users" , {
            method :"POST" , 
            body : JSON.stringify(args) , 
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
            
        }) ;
        return args
        
    }catch(error){
        return rejectWithValue(error.message)
    }
})


// For Create User Slice
const userSlice = createSlice({
    name: "user" , 
    initialState : {users:[] , loading :false} ,
    reducers : {
        
    } ,
    extraReducers : {
        // For Insert User
        [insertUser.fulfilled] : (state , action)=>{
            state.loading = false
            state.users.push(action.payload)
        } ,
        // For Get All User
        [getAllUser.fulfilled] : (state ,action)=>{
            state.loading = false ; 
            state.users = action.payload ; 
        } ,
        [getAllUser.pending] : (state , action)=>{
            state.loading = true ;
        } ,
        // For Delete User
        [deleteUser.fulfilled] : (state , action)=>{
            state.users = state.users.filter((item)=>{
                return item.id !== action.payload;
            })
        }
    }
})

export default userSlice.reducer ; 

