import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
    const { name, number } = contact;
    console.log(contact);

    try {
      const response = await axios.post('/contacts', { name, number });
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
