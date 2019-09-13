import {GET_SMURFS_DATA, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE} from '../action/smurfsAction'


const initialState = {
    chars: [], 
    test: 'Its working', 
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
console.log(initialState.chars, 'chars')
    switch(action.type){
        case 'GET_SMURFS_DATA':
            return{
                ...state,
                isLoading: true,
                error: ''
            };
        case 'GET_SMURFS_SUCCESS':
            return{
                ...state,
                isLoading: false,
                chars: action.payload,
                error: ''
            };
            
        default:
            return state;
    }
}