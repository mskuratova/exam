import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {App} from './44';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, redirect, Route, Routes, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import axios, {AxiosError} from "axios";


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//

// console.log = () => {
//     };

// Api
    const instance = axios.create({
        baseURL: 'https://reqres.in/api/'
    })

    const api = {
        getUsers() {
            return instance.get('users?delay=1&per_page=12')
        }
    }


// Reducer
    const initState = {
        isLoading: false,
        users: [] as any[]
    }

    type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-USERS':
            console.log('1')
            /* 1 */
            return {...state, users: action.users}
        case 'APP/IS-LOADING':
            console.log('2')
            /* 2 */
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

// Actions
    const setUsersAC = (users: any[]) => ({type: 'APP/SET-USERS', users} as const)
    const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
    type ActionsType = | ReturnType<typeof setUsersAC> | ReturnType<typeof setLoadingAC>


// Thunk
    const getUsersTC = (): AppThunk => (dispatch) => {
        /* 3 */
        console.log('3')
        dispatch(setLoadingAC(true))
        api.getUsers()
            .then((res) => {
                console.log('4')
                /* 4 */
                dispatch(setLoadingAC(false))
                console.log('5')
                /* 5 */
                dispatch(setUsersAC(res.data.data))
            })
    }

// Store
    const rootReducer = combineReducers({
        app: appReducer,
    })

    const store = createStore(rootReducer, applyMiddleware(thunk))
    type RootState = ReturnType<typeof store.getState>
    type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
    type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
    const useAppDispatch = () => useDispatch<AppDispatch>()
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
    export const Loader = () => {
        console.log('6')
        /* 6 */
        return (
            <h1>Loading ...</h1>
        )
    }


// Login
    export const Login = () => {
        console.log('7')
/* 7 */

    const users = useAppSelector(state => state.app.users)
    const isLoading = useAppSelector(state => state.app.isLoading)

    return (
        <div>
            {isLoading && <Loader/>}
            {users.map((u) => <p key={u.id}>{u.email}</p>)}
            <h1>В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
                расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
                подсказкой. Удачи 🚀
            </h1>
        </div>
    );
}

// App
    export const App = () => {
        console.log('8')
        /* 8 */
        const dispatch = useAppDispatch()

        useEffect(() => {
            /* 9 */
            console.log('9')
            dispatch(getUsersTC())
        }, [])

/* 10 */
        console.log('10')
    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)

// Описание:
// Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// Подсказка: будет 13 чисел.
// Ответ дайте через пробел.
// Пример ответа:    1 2 3 4 5 6 7 8 9 10 1 2 3


