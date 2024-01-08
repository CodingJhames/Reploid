
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'ui',
  //declaracion del estado inicial de las variables
  initialState: {
    isDateModalOpen: false
  },
     //funciones que modifican el estado
  reducers: {
   onOpenDateModal: ( state ) => {
        state.isDateModalOpen = true;
   },
   onCloseDateModal: ( state ) => {
        state.isDateModalOpen = false;
   }
  },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;

