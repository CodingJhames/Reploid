

import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumple parchita',
    notes: 'Comprar purina',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Parchita'
    }
  }

export const calendarSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'calendar',
  //declaracion del estado inicial de las variables
  initialState: {
    events: [
        tempEvent,
    ],
    activeEvent: null
  },
     //funciones que modifican el estado
  reducers: {
    onSetActiveEvent: ( state, { payload } ) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: ( state, { payload } ) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    onUpdateEvent: ( state, { payload } ) => {
      state.events = state.events.map( event => {
        if( event._id === payload._id  ){
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: ( state ) => {
      if ( state.activeEvent  ){
        state.events = state.events.filter(  event => event._id !== state.activeEvent._id )
        state.activeEvent = null
      }
    }
  }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
