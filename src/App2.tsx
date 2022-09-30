import './App.css';
import './index.css';
import React  from 'react'
import { createStore } from 'redux'
import { combineReducers } from 'redux'



function App() {

//1

    let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
    const usersReducer = (state = initialState, action: any) => {
        return state
    }

    let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
    const authReducer = (state = authInitialState, action: any) => {
        return state
    }

    const store = createStore(combineReducers({users: usersReducer,
         auth: authReducer
        // xxx
    }))

    store.subscribe(() => {
        const login = store.getState().auth.login
        console.log(login)
    })

    store.dispatch({type: 'ANY'})
    // export default store;

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?

//2

    // const reducer = (state: any, action: any) => {
    //     switch (action.type) {
    //         case 'TRACK-ADDED':
    //             return {
    //                 ...state,
    //                 [action.trackId]: {
    //                     id: action.trackId, likesCount: 0
    //                 }
    //             }
    //         default:
    //             return state
    //     }
    // }
    //
    // const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
    //
    // const state = {
    //     12: {id: 12, likesCount: 10},
    //     14: {id: 14, likesCount: 2},
    //     100: {id: 100, likesCount: 0},
    // }
    // const newState = reducer(state, addTrackAC(300)) //const newState = reducer(state, XXX)
    //
    // console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
//3
//     const reducer = (state: any, action: any) => {
//         switch (action.type) {
//             case 'TRACK-DELETED':
//                 return state.filter((track: any) => track.id !== action.trackId)
//             default:
//                 return state
//         }
//     }
//
//     const deleteTrackAC =(trackId: number) =>({type: 'TRACK-DELETED', trackId}) //const deleteTrackAC =(trackId: number) =>(XXX)
//
//
//     const state = [
//         {id: 12, likesCount: 10},
//         {id: 14, likesCount: 2},
//         {id: 100, likesCount: 0}
//     ]
//
//     const newState = reducer(state, deleteTrackAC(14))
//     console.log(newState.length === 2)

// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?

//4
// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'USER-NAME-UPDATED':
//             return {...state, user: { name: action.name}}
//         // xxx
//
//         default:
//             return state
//     }
// }
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
// const state = {
//     count: 10,
//     user: {
//                name: 'Dimych',
//                age: 18,
//                isMarried: true,
//                status: "offline"
//    },
//     books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

//
// //Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?




    return <div>Hi</div>




}
export default App;
