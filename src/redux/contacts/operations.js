import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64b7b8c321b9aa6eb078e60a.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchTasks = createAsyncThunk('contacts/', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const { name, phone } = contact;
    console.log(contact);
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteTask',
  async (contatsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contatsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// // GET @ /tasks
// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/tasks');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /tasks
// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/tasks', { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // DELETE @ /tasks/:id
// export const deleteTask = createAsyncThunk(
//   'tasks/deleteTask',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
