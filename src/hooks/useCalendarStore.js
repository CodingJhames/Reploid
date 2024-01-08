import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from '../store'



export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(  state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // llegar la backend

        // Todo bien
        if( calendarEvent._id ){
            // Actualizando
            dispatch(  onUpdateEvent( {...calendarEvent } ) );
        } else {
            dispatch( onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ) );
        }
    }

    const startDeletingEvent = () => {
        // llegar al backend 
        dispatch(  onDeleteEvent() );

    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
    

}


