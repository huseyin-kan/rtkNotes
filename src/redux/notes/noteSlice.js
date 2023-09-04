import { createSlice } from "@reduxjs/toolkit";


export const noteSlice = createSlice({
    name:'notes',
    
    initialState:{
        items:[
            {
                id:'1',
                text:'Note 1',
                colour:'green'
            },
            {
                id:'2',
                text:'Note 2',
                colour:'purple'
            },
            {
                id:'3',
                text:'Note 3',
                colour:'blue'
            },
        ],
        searchFilter:"",
        selectedColour:"green"
    },
    reducers:{
        addNote:(state,action)=>{
            state.items.push(action.payload)
        },
        search:(state,action)=>{
            state.searchFilter=action.payload
        },
        changeSelectedColor:(state,action)=>{
            state.selectedColour=action.payload
        }
    },

})

export const {addNote,search,changeSelectedColor} = noteSlice.actions
export default noteSlice.reducer