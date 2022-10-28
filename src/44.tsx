import './App.css';
import './index.css';
import axios, {AxiosError} from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
//1
//     import React from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { Route, Routes } from 'react-router-dom'
//
//     const Main = () => {
//         return (
//             <>
//                 <h2>✅ Список тудулистов</h2>
//                 <h2>📜 Список постов</h2>
//             </>
//         )
//     }
// // App
//     const App = () => {
//
//         return (
//             <Routes>
//             <Route path={'/'} element={<Main/>} /> // Внимание
//             {/*    <Route path={'/'} element={<Main/>}/>*/}
//             </Routes>
//         )
//     }
// @ts-ignore
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<App/>)

// Белый экран... Приложение не работает.
// Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: <Route path={'/'} component={<Main/>}/>
//2

    // import React from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'

    // const Main = () => {
    //     return (
    //         <>
    //             <h2>✅ Список тудулистов</h2>
    //             <h2>📜 Список постов</h2>
    //         </>
    //     )
    // }

// App
//     const App = () => {
//         return (
//             <Routes>
//                 {/*<Route path={'/'} element={Main}/>*/}
//                 <Route path={'/'} element={<Main/>}/>//Внимание
//             </Routes>
//         )
//     }
//
// @ts-ignore
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

    // Описание:
// Приложение при старте падает с ошибкой...
// Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: type InitStateType = typeof initState
//3
//     import React from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { BrowserRouter, Route, Routes } from 'react-router-dom'

    // const PageNotFound = () => {
    //     return <h2>⛔ 404. Page not found ⛔</h2>
    // }
    //
    // const Profile = () => {
    //     return <h2>😎 Профиль</h2>
    // }


//     const Main = () => {
//         return (
//             <>
//                 <h2>✅ Список тудулистов</h2>
//                 <h2>📜 Список постов</h2>
//             </>
//         )
//     }
//     // App
//     const App = () => {
//
//         return (
//             <Routes>
//                 {/*<Route path={'/'} element={"Стартовая страница"}/>*/}
//                 <Route path={'/'} element={<Redirect to='profile'/>}/> //Внимание
//                 <Route path={'profile'} element={<Profile/>}/>
//                 <Route path={'*'} element={<PageNotFound/>}/>
//             </Routes>
//         )
//     }
// // @ts-ignore
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// При загрузке приложения вы видите надпись "Стартовая страница".
// Перепишите Route таким образом, чтобы при загрузке приложения нас
// редиректило на страницу Profile.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: <Route path={'/'} element={'to profile page'}/>
//4
//     import { useFormik } from 'formik';
//     import React from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Main
//     export const Login = () => {

        // const formik = useFormik({
        //     initialValues: {
        //         email: '',
        //         password: '',
        //     },
        //     onSubmit: values => {
        //         alert(JSON.stringify(values, null, 2));
        //     },
        // });
        //
        // return (
    // <form  onSubmit={formik.handleSubmit}> //Внимание
        //     <form>
        //         <div>
        //             <input
        //                 name="email"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.email}
        //                 type="text"
        //                 placeholder={'Введите email'}
        //             />
    {/*            </div>*/}
    {/*            <div>*/}
    {/*                <input*/}
    {/*                    name="password"*/}
    {/*                    onChange={formik.handleChange}*/}
    {/*                    value={formik.values.password}*/}
    {/*                    type="password"*/}
    {/*                    placeholder={'Введите пароль'}*/}
    {/*                />*/}
    {/*            </div>*/}
    {/*            <button type="submit">Отправить</button>*/}
    {/*        </form>*/}
    {/*    );*/}
    {/*}*/}

// App
//     export const App = () => {
//         return (
//             <Routes>
//                 <Route path={''} element={<Login/>}/>
//             </Routes>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// При заполнении данных формы и их отправке вы должны увидеть alert c
// введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// Пример ответа: alert(JSON.stringify(values));

    //5
    // import { useFormik } from 'formik';
    // import React from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Main
//     export const Login = () => {
//
//         const formik = useFormik({
//             initialValues: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 phone: '',
//             },
//             onSubmit: values => {
//                 alert(JSON.stringify(values, null, 2));
//             },
//         });

        // return (

        //     <form onSubmit={formik.handleSubmit}>
        //         <div>
        //             <input
        //                 name="firstName"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.firstName}
        //                 placeholder={'Введите имя'}
        //             />
        //         </div>
        //         <div>
                {/*    <input*/}
                {/*        name="lastName"*/}
                {/*        onChange={formik.handleChange}*/}
                {/*        value={formik.values.lastName}*/}
                {/*        placeholder={'Введите фамилию'}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input*/}
                {/*        name="email"*/}
                {/*        onChange={formik.handleChange}*/}
                {/*        value={formik.values.email}*/}
                {/*        placeholder={'Введите email'}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
    {/*                <input*/}
    {/*                    name="password"*/}
    {/*                    onChange={formik.handleChange}*/}
    {/*                    value={formik.values.password}*/}
    {/*                    placeholder={'Введите пароль'}*/}
    {/*                    type={'password'}*/}
    {/*                />*/}
    {/*            </div>*/}
    {/*            <div>*/}
    {/*                <input*/}
    {/*                    name="password"*/}
    // name="phone"//Внимание
    {/*                    onChange={formik.handleChange}*/}
    {/*                    value={formik.values.phone}*/}
    {/*                    placeholder={'Введите телефон'}*/}
    {/*                />*/}
    {/*            </div>*/}
    {/*            <button type="submit">Отправить</button>*/}
    {/*        </form>*/}
    {/*    );*/}
    {/*}*/}

// App
//     export const App = () => {
//         return (
//             <Routes>
//                 <Route path={''} element={<Login/>}/>
//             </Routes>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// Форма заполнения данных работает некорректно.
// Пользователи жалуются на поле ввода "Телефона"
// Найдите в коде ошибку. Исправленную версию строки напишите в качестве ответа.
// Пример ответа:  value={formik.values.phone}

    //6
    // import { useFormik } from 'formik';
    // import React from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Types
//     type LoginFieldsType = {
//         firstName?: string
//     }

// Main
//     export const Login = () => {

    //     const formik = useFormik({
    //         initialValues: {
    //             firstName: '',
    //         },
    //         validate: (values) => {
    //             const errors: LoginFieldsType = {};
    // if (values.firstName.length < 5) {errors.firstName = 'Must be 5 characters or more';}// Внимание
    //             return errors
    //         },
    //         onSubmit: values => {
    //             alert(JSON.stringify(values, null, 2));
    //         }
    //     });
    //
    //
    //     return (
    //         <form onSubmit={formik.handleSubmit}>
    //             <div>
    //                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')}/>
    //             </div>
    //             <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Отправить</button>
    //         </form>
    //     );
    // }

// App
//     export const App = () => {
//         return (
//             <Routes>
//                 <Route path={''} element={<Login/>}/>
//             </Routes>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

// Начните вводить в поле firstName символы. После ввода первого символа кнопка "Отправить" раздизаблится.
// Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// Т.е. вам необходимо самостоятельно написать эту валидацию для поля firstName.
// ❗ В качестве текста ошибки напишите 'Must be 5 characters or more'
// ❗ Текст ошибки выводить не нужно (только если для себя поиграться).
// В качестве ответа напишите полностью строку кода с условием.
// Пример ответа: return errors.firstName = 'Must be 5 characters or more'
// ❗ Сторонние библиотеки (например yup) использовать запрещено

    //7
    // import { useFormik } from 'formik';
    // import React from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Types
//     type LoginFieldsType = {
//         firstName: string
//         email: string
//     }

// Main
//     export const Login = () => {

        // const formik = useFormik({
        //     initialValues: {
        //         firstName: '',
        //         email: '',
        //     },
        //     validate: (values) => {
        //         const errors: Partial<LoginFieldsType> = {};
        //
        //         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //             errors.email = 'Invalid email address';
        //         }
        //         return errors
        //     },
        //     onSubmit: values => {
        //         alert(JSON.stringify(values, null, 2));
        //     }
        // });

        // Функция необходима для того, чтобы вебшторм не ругался на true в JSX
    //     const getTrue = () => {
    //         return true
    //     }
    //
    //     return (
    //         <form onSubmit={formik.handleSubmit}>
    //             <div>
    //                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')}/>
    //             </div>
    //             <div>
    //                 <input placeholder={'Введите email'}{...formik.getFieldProps('email')}/>
    //                 {getTrue() && <div style={{color: 'red'}}>ERROR</div>}
    // {getTrue() && <div style={{color: 'red'}}>{formik.errors.email}</div>} //Внимание
    //             </div>
    //             <button type="submit">Отправить</button>
    //         </form>
    //     );
    // }

// App
//     export const App = () => {
//         return (
//             <Routes>
//                 <Route path={''} element={<Login/>}/>
//             </Routes>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// Исправьте 46 строку кода так, чтобы:
// 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// 3) Сообщение должно показываться только в том случае, когда мы взаимодействовали с полем.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: {true && <div style={{color: 'red'}}>error.email</div>}

    //8
    // import { useFormik } from 'formik';
    // import React, { useEffect } from 'react'
    // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
    // import axios, { AxiosError } from 'axios';
    // import { applyMiddleware, combineReducers, legacy_createStore as createStore, Dispatch } from 'redux';
    // import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


// Types
//     type NullableType<T> = null | T
//     type UndefinedType<T> = undefined | T
//
//     type UserType = {
//         avatar: string
//         email: string
//         first_name: string
//         id: 1
//         last_name: string
//     }
//
//     type LoginFieldsType = {
//         email: string
//         password: string
//     }

// API
//     const instance = axios.create({
//         baseURL: 'https://reqres.in/api/'
//     })
//
//     const reqresAPI = {
//         getUsers() {
//             return instance.get('users?delay=1&per_page=12')
//         },
//         login(data: LoginFieldsType) {
//             return instance.post('login?delay=1', data)
//         },
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         error: null as NullableType<string>,
//         isLoggedIn: false,
//         randomUser: null as NullableType<UserType>
//     }
//
//     type InitStateType = typeof initState
//
//     const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'APP/SET-RANDOM-USER':
//                 return {...state, randomUser: action.user}
//             case 'APP/SET-IS-LOGGED-IN':
//                 return {...state, isLoggedIn: action.isLoggedIn}
//             case 'APP/IS-LOADING':
//                 return {...state, isLoading: action.isLoading}
//             case 'APP/SET-ERROR':
//                 return {...state, error: action.error}
//             default:
//                 return state
//         }
//     }

// Actions
//     const setRandomUserAC = (user: UserType) => ({type: 'APP/SET-RANDOM-USER', user} as const)
//     const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
//     const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
//     const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
//     type ActionsType =
//         | ReturnType<typeof setRandomUserAC>
//         | ReturnType<typeof setIsLoggedIn>
//         | ReturnType<typeof setLoadingAC>
//         | ReturnType<typeof setError>


// Utils
//     const thunkFinallyHandler = (dispatch: Dispatch) => {
//         dispatch(setLoadingAC(false))
//         setTimeout(() => {
//             dispatch(setError(null))
//         }, 3000)
//     }

// Thunk
//     const getUsersTC = (): AppThunk => (dispatch) => {
//         dispatch(setLoadingAC(true))
//
//         const getRandomUser = (users: UserType[]): UndefinedType<UserType> => {
//             const randomUserId = Math.floor(Math.random() * 12) + 1
//             return users.find(u => u.id === randomUserId)
//         }
//
//         reqresAPI.getUsers()
//             .then((res) => {
//                 const user = getRandomUser(res.data.data)
//                 if (user) {
//                     dispatch(setRandomUserAC(user))
//                 }
//             })
//             .catch((e: AxiosError) => {
//                 dispatch(setError(e.message))
//             })
//             .finally(() => {
//                 thunkFinallyHandler(dispatch)
//             })
//     }

    // const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
    //     dispatch(setLoadingAC(true))
    //     reqresAPI.login(values)
    //         .then((res) => {
    //             dispatch(setIsLoggedIn(true))
    //             alert('Вы залогинились успешно')
    //         })
    //         .catch((e) => {
    //             const error = e.response ? (e.response?.data.error || 'Some error') : e.message
    //             dispatch(setError(error))
    //         })
    //         .finally(() => {
    //             thunkFinallyHandler(dispatch)
    //         })
    // }

// Store
//     const rootReducer = combineReducers({
//         app: appReducer,
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
//     export const Loader = () => {
//         return <h1>Loading ...</h1>
//     }

// Profile
//     export const Profile = () => {
//         return <h2>😎 Profile</h2>
//     }

// Login
//     export const Login = () => {
//
//         const dispatch = useAppDispatch()
//         const navigate = useNavigate()
//
//         const randomUser = useAppSelector(state => state.app.randomUser)
//         const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//         const error = useAppSelector(state => state.app.error)
//         const isLoading = useAppSelector(state => state.app.isLoading)
//
//         useEffect(() => {
//             dispatch(getUsersTC())
//         }, [])

        // const formik = useFormik({
        //     initialValues: {
        //         email: randomUser?.email ?? '',
        //         password: '',
        //     },
        //     enableReinitialize: true,
        //     onSubmit: values => {
        //         dispatch(loginTC(values))
    // navigate('profile')//Внимание
        //     }
        // });
    //
    //     return (
    //         <div>
    //             {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
    //             {isLoading && <Loader/>}
    //             <form onSubmit={formik.handleSubmit}>
    //                 <div>
    //                     <input placeholder={'Введите email'}
    //                            {...formik.getFieldProps('email')}/>
    //                 </div>
    //                 <div>
    //                     <input type={'password'}
    //                            placeholder={'Введите пароль'}
    //                            {...formik.getFieldProps('password')}/>
    //                 </div>
    //                 <button type="submit">Залогиниться</button>
    //             </form>
    //         </div>
    //     );
    // }

// App
//     export const App = () => {
//         return (
//             <Routes>
//                 <Route path={''} element={<Login/>}/>
//                 <Route path={'profile'} element={<Profile/>}/>
//             </Routes>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)


// Описание:
// ❗ Логин вводить не нужно (из-за Api можно вводить только определенные email).
// Введите любой пароль и попробуйте залогиниться.
// Если вы увидели alert с успешным сообщением -
// это значит, что запрос успешно прошел.
// Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.
// Напишите правильную строку кода
// Пример ответа:  console.log('If login => redirect to profile')

    //9

    // import React, { useEffect } from 'react'
    // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'
    // import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
    // import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
    // import axios from 'axios';

// Utils
//     console.log = () => {
//     };

// Api
//     const instance = axios.create({
//         baseURL: 'xxx'
//     })
//
//     const api = {
//         getUsers() {
//             /* 1 */
//             return instance.get('xxx')
//         }
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         users: [] as any[]
//     }
//
//     type InitStateType = typeof initState
//
//     const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'APP/SET-USERS':
//                 /* 2 */
//                 return {...state, users: action.users}
//             default:
//                 return state
//         }
//     }

// Actions
//     const setUsersAC = (users: any[]) => ({type: 'APP/SET-USERS', users} as const)
//     type ActionsType = ReturnType<typeof setUsersAC>


// Thunk
//     const getUsersTC = (): AppThunk => (dispatch) => {
//         /* 3 */
//         api.getUsers()
//             .then((res) => {
//                 /* 4 */
//                 dispatch(setUsersAC(res.data.data))
//             })
//     }

// Store
//     const rootReducer = combineReducers({
//         app: appReducer,
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Login
//     export const Login = () => {
//
//         const users = useAppSelector(state => state.app.users)
//         /* 5 */
//
//         return (
//             <div>
//                 {/* 6 */}
//                 {users.map((u) => <p key={u.id}>{u.email}</p>)}
//                 <h1>В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
//                     расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
//                     подсказкой. Удачи 🚀
//                 </h1>
//             </div>
//         );
//     }

// App
//     export const App = () => {
//
//         /* 7 */
//         const dispatch = useAppDispatch()

    //     useEffect(() => {
    //         /* 8 */
    //         dispatch(getUsersTC())
    //     }, [])
    //
    //     /* 9 */
    //     return (
    //         <Routes>
    //             <Route path={''} element={<Login/>}/>
    //         </Routes>
    //     )
    // }
    //
    // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    // root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)

// Описание:
// Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// Подсказка: будет 11 чисел.
// Ответ дайте через пробел.
// Пример ответа:    1 2 3 4 5 6 7 8 9 1 2     7 9 8 3 1 7 9 4 2 4 2

    //10

    // import React, { useEffect } from 'react'
    // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
    // import ReactDOM from 'react-dom/client';
    // import { BrowserRouter, Route, Routes } from 'react-router-dom'
    // import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
    // import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
    // import axios from 'axios';


// Utils
//     console.log = () => {
//     };

// Api
//     const instance = axios.create({
//         baseURL: 'xxx'
//     })
//
//     const api = {
//         getUsers() {
//             return instance.get('xxx')
//         }
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         users: [] as any[]
//     }
//
//     type InitStateType = typeof initState

    // const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    //     switch (action.type) {
    //         case 'APP/SET-USERS':
    //             /* 1 */
    //             return {...state, users: action.users}
    //         case 'APP/IS-LOADING':
    //             /* 2 */
    //             return {...state, isLoading: action.isLoading}
    //         default:
    //             return state
    //     }
    // }

// Actions
//     const setUsersAC = (users: any[]) => ({type: 'APP/SET-USERS', users} as const)
//     const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
//     type ActionsType = | ReturnType<typeof setUsersAC> | ReturnType<typeof setLoadingAC>


// Thunk
//     const getUsersTC = (): AppThunk => (dispatch) => {
//         /* 3 */
//         dispatch(setLoadingAC(true))
//         api.getUsers()
//             .then((res) => {
//                 /* 4 */
//                 dispatch(setLoadingAC(false))
//                 /* 5 */
//                 dispatch(setUsersAC(res.data.data))
//             })
//     }

// Store
//     const rootReducer = combineReducers({
//         app: appReducer,
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
//     export const Loader = () => {
//         /* 6 */
//         return (
//             <h1>Loading ...</h1>
//         )
//     }


// Login
//     export const Login = () => {
        /* 7 */

    //     const users = useAppSelector(state => state.app.users)
    //     const isLoading = useAppSelector(state => state.app.isLoading)
    //
    //     return (
    //         <div>
    //             {isLoading && <Loader/>}
    //             {users.map((u) => <p key={u.id}>{u.email}</p>)}
    //             <h1>В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
    //                 расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
    //                 подсказкой. Удачи 🚀
    //             </h1>
    //         </div>
    //     );
    // }

// App
//     export const App = () => {
//         /* 8 */
//         const dispatch = useAppDispatch()
//
//         useEffect(() => {
//             /* 9 */
//             dispatch(getUsersTC())
//         }, [])

        /* 10 */
    //     return (
    //         <Routes>
    //             <Route path={''} element={<Login/>}/>
    //         </Routes>
    //     )
    // }
    //
    // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    // root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)

// Описание:
// Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// Подсказка: будет 13 чисел.
// Ответ дайте через пробел.
// Пример ответа:    1 2 3 4 5 6 7 8 9 10 1 2 3    8 10 9 3 2 4 2 5 1
    return <div>Hi</div>


}
export default App;

// 3
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const PageNotFound = () => {
    return <h2>⛔ 404. Page not found ⛔</h2>
}

export const Profile = () => {
    return <h2>😎 Профиль</h2>
}


export const Main = () => {
    return (
        <>
            <h2>✅ Список тудулистов</h2>
            <h2>📜 Список постов</h2>
        </>
    )
}

// App
export const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={"Стартовая страница"}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)