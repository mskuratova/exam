import './App.css';
import './index.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

function App() {
//1
 // Types
 //    type PhotoType = {
 //        albumId: number
 //        id: number
 //        title: string
 //        url: string
 //        thumbnailUrl: string
 //    }

// Api
//     const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})
//
//     const photosAPI = {
//         async getPhotos() {
//             // Имитация длительного запроса, чтобы была видна крутилка
//             await new Promise(resolve => setTimeout(resolve, 3000));
//             return instance.get<PhotoType[]>('photos?_limit=3')
//         },
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         photos: [] as PhotoType[]
//     }
//
//     type InitStateType = typeof initState
//
//     const photoReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'PHOTO/GET-PHOTOS':
//                 return {...state, photos: action.photos}
//             case 'PHOTO/IS-LOADING':
//                 // return {...state, isLoading: action.isLoading}
//                 return {...state, isLoading: false}
//             default:
//                 return state
//         }
//     }
//
//     const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
//     const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
//     type ActionsType = ReturnType<typeof getPhotosAC> | ReturnType<typeof setLoadingAC>
//
//     const getPhotosTC = (): AppThunk => (dispatch) => {
//         dispatch(setLoadingAC(true))
//         photosAPI.getPhotos()
//             .then((res) => {
//                 dispatch(getPhotosAC(res.data))
//             })
//     }

// Store
//     const rootReducer = combineReducers({
//         photo: photoReducer
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
//     const Loader = () => {
//         return (
//             <h1>Loading ...</h1>
//         )
//     }

// App
//     const App = () => {
//         const dispatch = useAppDispatch()
//         const photos = useAppSelector(state => state.photo.photos)
//         const isLoading = useAppSelector(state => state.photo.isLoading)
//
//         const getPhotosHandler = () => {
//             dispatch(getPhotosTC())
//         };
//
//         return (
//             <>
//                 <h1>📸 Фото</h1>
//                 {isLoading && <Loader/>}
//                 {
//                     photos.map(p => {
//                         return <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <div><img src={p.thumbnailUrl} alt=""/></div>
//                         </div>
//                     })
//                 }
//                 <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//             </>
//         )
//     }


// ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'))
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// и через 3 секунды непосредственно фотографии.
// Но после подгрузки данных Loader не убирается.
// Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// В качестве ответа напишите строку кода.
// Пример ответа: console.log('stop Loader')
//2

    // import React, { useEffect } from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
    // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
    // import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
    // import axios from 'axios';


// Types
//     type TodoDomainType = TodoType & {
//         isDisabled: boolean
//     }
//
//     type TodoType = {
//         id: number
//         title: string
//         completed: boolean
//         userId: number
//     }

// Api
//     const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})
//
//     const todosAPI = {
//         getTodos() {
//             return instance.get('todos?_limit=15')
//         },
//         async deleteTodo(id: number) {
//             // Имитация длительного запроса, чтобы была видна крутилка
//             await new Promise(resolve => setTimeout(resolve, 3000));
//             return instance.delete(`todos/${id}`)
//         }
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         todos: [] as TodoDomainType[]
//     }
//
//     type InitStateType = typeof initState
//
//     const todosReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'TODOS/GET-TODOS':
//                 return {
//                     ...state, todos: action.todos.map(t => {
//                         return {...t, isDisabled: false}
//                     })
//                 }
//
//             case 'TODOS/DELETE-TODO':
//                 return {...state, todos: state.todos.filter(t => t.id !== action.id)}

    //         case 'TODOS/IS-LOADING':
    //             return {...state, isLoading: action.isLoading}
    //
    //         case 'TODOS/IS-DISABLED':
    //             return {
    //                 ...state, todos: state.todos.map((t) => {
    //                     if (t.id === action.id) {
    //                         return {...t, isDisabled: action.isDisabled}
    //                     } else {
    //                         return t
    //                     }
    //                 })
    //             }
    //
    //         default:
    //             return state
    //     }
    // }

    // const getTodosAC = (todos: TodoType[]) => ({type: 'TODOS/GET-TODOS', todos} as const)
    // const deleteTodoAC = (id: number) => ({type: 'TODOS/DELETE-TODO', id} as const)
    // const setLoadingAC = (isLoading: boolean) => ({type: 'TODOS/IS-LOADING', isLoading} as const)
    // const setIsDisabled = (isDisabled: boolean, id: number) => ({type: 'TODOS/IS-DISABLED', isDisabled, id} as const)
    // type ActionsType =
    //     | ReturnType<typeof getTodosAC>
    //     | ReturnType<typeof deleteTodoAC>
    //     | ReturnType<typeof setLoadingAC>
    //     | ReturnType<typeof setIsDisabled>

// Thunk
//     const getTodosTC = (): AppThunk => (dispatch) => {
//         todosAPI.getTodos()
//             .then((res) => {
//                 dispatch(getTodosAC(res.data))
//             })
//     }

    // const deleteTodoTC = (id: number): AppThunk => (dispatch) => {
    //     dispatch(setIsDisabled(true, id))
    //     dispatch(setLoadingAC(true))
    //     todosAPI.deleteTodo(id)
    //         .then((res) => {
    //             dispatch(deleteTodoAC(id))
    //             dispatch(setLoadingAC(false))
    //         })
    // }

// Store
//     const rootReducer = combineReducers({
//         todos: todosReducer,
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
// const Loader = () => {
//         return (
//             <h1>Loading ...</h1>
//         )
//     }

// App
//     const App = () => {
//         const dispatch = useAppDispatch()
//         const todos = useAppSelector(state => state.todos.todos)
//         const isLoading = useAppSelector(state => state.todos.isLoading)
//
//         useEffect(() => {
//             dispatch(getTodosTC())
//         }, [])
//
//         const deleteTodoHandler = (id: number) => {
//             dispatch(deleteTodoTC(id))
//         };
//
//         return (
//             <div>
//                 <div style={{position: 'absolute', top: '0px'}}>
//                     {isLoading && <Loader/>}
//                 </div>
//                 <div style={{marginTop: '100px'}}>
//                     <h2>✅ Список тудулистов</h2>
//                     {
//                         todos.map((t) => {
//                             return (
//                                 <div style={t.completed ? {color: 'grey'} : {}} key={t.id}>
//                                     <input type="checkbox" defaultChecked={t.completed}/>
//                                     <b>Описание</b>: {t.title}
//                                     <button
//                                         style={{marginLeft: '20px'}}
//                                         onClick={() => deleteTodoHandler(t.id)}>
//                                         Удалить тудулист
//                                     </button>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
//
//     const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//     root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// Перед вами список тудулистов.
// Откройте network и нажмите на кнопку удалить тудулист несколько раз подряд.
// Вы увидите как удаляется один и тот же тудулист несколько раз подряд... Нехорошо...
// Т.к. это учебная апишка, ошибки не падают, но в жизни такое допускать нельзя !
// Ваша задача задизаблить кнопку нужного тудулиста при нажатии на кнопку удаления
// Необходимую строку кода для решения этой задачи напишите в качестве ответа.
// Пример ответа: style={{marginRight: '20px'}}


//3
//     import React, { useEffect } from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
//     import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//     import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
//     import axios, { AxiosError } from 'axios';


// Types
//     type PostType = {
//         body: string
//         id: number
//         title: string
//         userId: number
//     }

// Api
//     const instance = axios.create({
//         baseURL: 'https://jsonplaceholder.typicode.com/ '
//     })
//
//     const postsAPI = {
//         getPosts() {
//             return instance.get<PostType[]>('posts')
//         },
//     }

// Reducer
//     const initState = {
//         error: null as string | null,
//         posts: [] as PostType[]
//     }
//
//     type InitStateType = typeof initState
//
//     const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'POSTS/GET-POSTS':
//                 return {...state, posts: action.posts}
//
//             case 'POSTS/SET-ERROR':
//                 return {...state, error: action.error}
//
//             default:
//                 return state
//         }
//     }


    // const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
    // const setError = (error: string | null) => ({type: 'POSTS/SET-ERROR', error} as const)
    // type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof setError>

// Thunk
//     const getPostsTC = (): AppThunk => (dispatch) => {
//         postsAPI.getPosts()
//             .then((res) => {
//                 dispatch(getPostsAC(res.data))
//             })
//             .catch((e: AxiosError) => {
//             })
//     }


// Store
//     const rootReducer = combineReducers({
//         app: appReducer,
//     })

    // const store = createStore(rootReducer, applyMiddleware(thunk))
    // type RootState = ReturnType<typeof store.getState>
    // type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
    // type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
    // const useAppDispatch = () => useDispatch<AppDispatch>()
    // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Components
//     const App = () => {
        //
        // const dispatch = useAppDispatch()
        //
        // const posts = useAppSelector(state => state.app.posts)
        // const error = useAppSelector(state => state.app.error)
        //
        // useEffect(() => {
        //     dispatch(getPostsTC())
        // }, [])

    //     return (
    //         <>
    //             <h1>📜 Список постов</h1>
    //             {
    //                 posts.length
    //                     ?
    //                     posts.map(c => {
    //                         return <div key={c.id}><b>Описание</b>: {c.body} </div>
    //                     })
    //                     :
    //                     <h3>❌ Посты не подгрузились. Произошла какая-то ошибка. Выведите сообщение об ошибке на экран</h3>
    //             }
    //             <h2 style={{color: 'red'}}>{!!error && error}</h2>
    //         </>
    //     )
    // }

    // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    // root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// ❌ Посты не подгрузились. Произошла какая-то ошибка.
// Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// Задача: вывести сообщение об ошибке на экран.
// В качестве ответа указать строку коду, которая позволит это осуществить
// Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))

//4
//
//     import React, { useState } from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//     import axios, { AxiosError } from 'axios';
//     import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
//     import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


// Types
//     type NullableType<T> = null | T
//
//     type LoginFieldsType = {
//         email: string
//         password: string
//     }

// API
//     const instance = axios.create({baseURL: 'https://reqres.in/api/'})
//
//     const reqresAPI = {
//         login(data: LoginFieldsType) {
//             return instance.post('login?delay=2', data)
//         },
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         error: null as NullableType<string>,
//         isLoggedIn: false,
//     }
//
//     type InitStateType = typeof initState
//
//     const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
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
//     const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
//     const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
//     const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
//     type ActionsType = | ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setLoadingAC> | ReturnType<typeof setError>

// Thunk
//     const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
//         dispatch(setLoadingAC(true))
//         reqresAPI.login(values)
//             .then((res) => {
//                 dispatch(setIsLoggedIn(true))
//                 alert('Вы залогинились успешно')
//             })
//             .catch((e) => {
//             })
//             .finally(() => {
//                 dispatch(setLoadingAC(false))
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
//         return <h1>Loading ...</h1>
//     }


// App
//     export const App = () => {
//
//         const dispatch = useAppDispatch()
//
//         const [form, setForm] = useState<LoginFieldsType>({email: '', password: ''})
//
//         const error = useAppSelector(state => state.app.error)
//         const isLoading = useAppSelector(state => state.app.isLoading)

        // const changeFormValuesHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        //     if (field === 'email') {
        //         setForm({...form, email: e.currentTarget.value})
        //     }
        //     if (field === 'password') {
        //         setForm({...form, password: e.currentTarget.value})
        //     }
        // };
        //
        // const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        //     e.preventDefault()
        //     dispatch(loginTC(form))
        // };
        //
        // return (
        //     <div>
        //         {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
        //         {isLoading && <Loader/>}
        //         <form>
        //             <div>
        //                 <input placeholder={'Введите email'}
        //                        value={form.email}
        //                        onChange={(e) => changeFormValuesHandler(e, 'email')}
        //                 />
    {/*                </div>*/}
    {/*                <div>*/}
    {/*                    <input type={'password'}*/}
    {/*                           placeholder={'Введите пароль'}*/}
    {/*                           value={form.password}*/}
    {/*                           onChange={(e) => changeFormValuesHandler(e, 'password')}*/}
    {/*                    />*/}
    {/*                </div>*/}
    {/*                <button type="submit" onClick={submitForm}>Залогиниться</button>*/}
    {/*            </form>*/}
    {/*        </div>*/}
    {/*    );*/}
    {/*}*/}

    {/*const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);*/}
    {/*root.render(<Provider store={store}> <App/></Provider>)*/}

// Описание:
// Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// Откройте Network и проанализируйте запрос.
// Задача:  вывести сообщение об ошибке, которую возвращает сервер (user not found ) на экран.
// В качестве ответа указать строку коду, которая позволит это осуществить.
// Пример ответа: dispatch('Error message')
// ❗ Типизировать ошибку не надо, т.к. там есть много нюансов, о которых вы узнаете позже

    //5

//     import React, { useEffect } from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
//     import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//     import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
//     import axios, { AxiosError } from 'axios';
//
//
// // Types
//     type CommentType = {
//         postId: number
//         id: number
//         name: string
//         email: string
//         body: string
//     }

// Api
//     const instance = axios.create({
//         baseURL: 'https://jsonplaceholder.typicode.com/'
//     })
//
//     const commentsAPI = {
//         getComments() {
//             return instance.get<CommentType[]>('commentaries')
//         }
//     }
//
// // Reducer
//     const initState = {
//         comments: [] as CommentType[]
    // }
    //
    // type InitStateType = typeof initState
    //
    // const appReducer = (state: InitStateType = initState, action: ActionsType) => {
    //     switch (action.type) {
    //         case 'COMMENTS/GET-COMMENTS':
    //             return {...state, comments: action.comments}
    //
    //         default:
    //             return state
    //     }
    // }
    //
    // const getCommentsAC = (comments: CommentType[]) => ({type: 'COMMENTS/GET-COMMENTS', comments} as const)
    // type ActionsType = ReturnType<typeof getCommentsAC>

// Thunk
//     const getCommentsTC = (): AppThunk => (dispatch) => {
//         commentsAPI.getComments()
//             .then((res) => {
//                 dispatch(getCommentsAC(res.data))
//             })
//             .catch((e: AxiosError) => {
//                 alert(`Сообщение об ошибке: ${e.message}`)
//             })
//     }
//
//
// // Store
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


// // Components
//     export const App = () => {
//
//         const comments = useAppSelector(state => state.app.comments)
//         const dispatch = useAppDispatch()
//
//         useEffect(() => {
//             dispatch(getCommentsTC())
//         }, [])

    //     return (
    //         <>
    //             <h1>📝 Список комментариев</h1>
    //             {
    //                 comments.length
    //                     ?
    //                     comments.map(c => {
    //                         return <div key={c.id}><b>Comment</b>: {c.body} </div>
    //                     })
    //                     :
    //                     <h3>❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее</h3>
    //             }
    //         </>
    //     )
    // }
    //
    // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    // root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// В данном задании вам нужно найти ошибку и починить приложение.
// Если сделаете все верно, то увидите комментарии.
// В качестве ответа указать исправленную строку коду
// Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))


    //6

//     import React from 'react'
//     import ReactDOM from 'react-dom/client';
//     import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
//     import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//     import axios, { AxiosError } from 'axios';
//     import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
//
// // Types
//     type PhotoType = {
//         albumId: number
//         id: number
//         title: string
//         url: string
//         thumbnailUrl: string
//     }

// Api
//     const instance = axios.create({
//         baseURL: 'https://jsonplaceholder.typicode.com/'
//     })
//
//     const photosAPI = {
//         async getPhotos() {
//             // Имитация длительного запроса, чтобы была видна крутилка
//             await new Promise(resolve => setTimeout(resolve, 3000));
//             return instance.get<PhotoType[]>('photos1?_limit=3')
//         },
//     }


// Reducer
//     const initState = {
//         isLoading: false,
//         error: null as string | null,
//         photos: [] as PhotoType[]
//     }
//
//     type InitStateType = typeof initState
//
//     const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//         switch (action.type) {
//             case 'PHOTO/GET-PHOTOS':
//                 return {...state, photos: action.photos}
//             case 'PHOTO/IS-LOADING':
//                 return {...state, isLoading: action.isLoading}
//             case 'PHOTO/SET-ERROR':
//                 return {...state, error: action.error}
//             default:
//                 return state
//         }
//     }

    // const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
    // const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
    // const setError = (error: string | null) => ({type: 'PHOTO/SET-ERROR', error} as const)
    // type ActionsType =
    //     | ReturnType<typeof getPhotosAC>
    //     | ReturnType<typeof setLoadingAC>
    //     | ReturnType<typeof setError>
    //
    // const getPhotosTC = (): AppThunk => (dispatch) => {
    //     dispatch(setLoadingAC(true))
    //     photosAPI.getPhotos()
    //         .then((res) => {
    //             dispatch(getPhotosAC(res.data))
    //         })
    //         .catch((e: AxiosError) => {
    //             dispatch(setError(e.message))
    //         })
    // }

// Store
//     const rootReducer = combineReducers({
//         app: appReducer
//     })
//
//     const store = createStore(rootReducer, applyMiddleware(thunk))
//     type RootState = ReturnType<typeof store.getState>
//     type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
//     type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
//     const useAppDispatch = () => useDispatch<AppDispatch>()
//     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // Loader
//     export const Loader = () => {
//         return (
//             <h1>Loading ...</h1>
//         )
//     }

// // App
//     const App = () => {
//         const dispatch = useAppDispatch()
//
//         const photos = useAppSelector(state => state.app.photos)
//         const isLoading = useAppSelector(state => state.app.isLoading)
//         const error = useAppSelector(state => state.app.error)
//
//         const getPhotosHandler = () => {
//             dispatch(getPhotosTC())
//         };
//
//         return (
//             <>
//                 <h1>📸 Фото</h1>
//                 <h2 style={{color: 'red'}}>{!!error && error}</h2>
    {/*            {isLoading && <Loader/>}*/}
    {/*            {*/}
    {/*                photos.map(p => {*/}
    {/*                    return <div key={p.id}>*/}
    {/*                        <b>title</b>: {p.title}*/}
    {/*                        <div><img src={p.thumbnailUrl} alt=""/></div>*/}
    {/*                    </div>*/}
    {/*                })*/}
    {/*            }*/}
    {/*            <button onClick={getPhotosHandler}>Подгрузить фотографии</button>*/}
    {/*        </>*/}
    {/*    )*/}
    {/*}*/}


    {/*const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);*/}
    {/*root.render(<Provider store={store}> <App/></Provider>)*/}


// Описание:
// При нажатии на кнопку "Подгрузить фотографии" появляется Loading... и сообщение об ошибке.
// Ваша задача состоит в том, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// Т.е. если ответ придет успешный - Loader убираем
//      если ответ придет с ошибкой - Loader тоже убираем.
// Напишите код, с помощью которого можно реализовать данную задачу
// В качестве ответа напишите строку кода.
// Пример ответа: .then(() =>  dispatch(getPhotosAC(res.data)))

    //7

    // import React, { useEffect } from 'react'
    // import ReactDOM from 'react-dom/client';
    // import { applyMiddleware, combineReducers, Dispatch, legacy_createStore as createStore } from 'redux'
    // import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
    // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
    // import axios, { AxiosError } from 'axios'

// TYPES
//     type UserType = {
//         avatar: string
//         email: string
//         first_name: string
//         id: 1
    //     last_name: string
    // }
    //
    // type ColorType = {
    //     color: string
    //     id: number
    //     name: string
    //     pantone_value: string
    //     year: number
    // }
    //
    // type CommonResponseType<T> = {
    //     total: number
    //     total_pages: number
    //     page: number
    //     per_page: number
    //     support: {
    //         url: string
    //         text: string
    //     }
    //     data: T
    // }

// API
//     const instance = axios.create({baseURL: 'https://reqres.in/api/'})
//
//     const reqresAPI = {
//         getUsers() {
//             return instance.get<CommonResponseType<UserType[]>>('$/users?delay=2')
//         },
//         getColors() {
//             return instance.get<CommonResponseType<ColorType[]>>('$/colors?delay=2')
//         }
//     }

// Reducer
//     const initState = {
//         isLoading: false,
//         error: null as string | null,
//         users: [] as UserType[],
//         colors: [] as ColorType[],
//     }
//
//     type InitStateType = typeof initState
    //
    // const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    //     switch (action.type) {
    //         case 'APP/GET-USERS':
    //             return {...state, users: action.users}
    //         case 'APP/GET-COLORS':
    //             return {...state, colors: action.colors}
    //         case 'APP/IS-LOADING':
    //             return {...state, isLoading: action.isLoading}
    //         case 'APP/SET-ERROR':
    //             return {...state, error: action.error}
    //         default:
    //             return state
    //     }
    // }
    //
    // const getUsersAC = (users: UserType[]) => ({type: 'APP/GET-USERS', users} as const)
    // const getColorsAC = (colors: ColorType[]) => ({type: 'APP/GET-COLORS', colors} as const)
    // const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
    // const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
    // type ActionsType =
    //     | ReturnType<typeof getUsersAC>
    //     | ReturnType<typeof getColorsAC>
    //     | ReturnType<typeof setLoadingAC>
    //     | ReturnType<typeof setError>

// Utils functions
//     function baseErrorHandler(dispatch: Dispatch, message: string) {
//         dispatch(setError(message))
//         dispatch(setLoadingAC(false))
//     }


// Thunk
//     const getUsersTC = (): AppThunk => (dispatch) => {
//         dispatch(setLoadingAC(true))
//         reqresAPI.getUsers()
//             .then((res) => {
//                 dispatch(getUsersAC(res.data.data))
//                 dispatch(setLoadingAC(false))
//             })
//             .catch((e: AxiosError) => {
//                 // XXX
//             })
//     }

    // const getColorsTC = (): AppThunk => (dispatch) => {
    //     dispatch(setLoadingAC(true))
    //     reqresAPI.getColors()
    //         .then((res) => {
    //             dispatch(getColorsAC(res.data.data))
    //             dispatch(setLoadingAC(false))
    //         })
    //         .catch((e: AxiosError) => {
    //             // XXX
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


// COMPONENTS
// Loader
//     export const Loader = () => {
//         return (
//             <h1>Loading ...</h1>
//         )
//     }
//
//
//     const App = () => {
//         return (
//             <>
//                 <h1>Reqres API</h1>
//                 <Users/>
//                 <Colors/>
//             </>
//         )
//     }

    // const Users = () => {
    //     const dispatch = useAppDispatch()
    //     const users = useAppSelector(state => state.app.users)
    //     const error = useAppSelector(state => state.app.error)
    //     const isLoading = useAppSelector(state => state.app.isLoading)
    //
    //     useEffect(() => {
    //         dispatch(getUsersTC())
    //     }, [])
    //
    //     return (
    //         <div>
    //             <h2>Users</h2>
    //             {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
    {/*            {isLoading && <Loader/>}*/}
    {/*            <div style={{display: 'flex'}}>*/}
    {/*                {*/}
    {/*                    users.map(u => {*/}
    {/*                        return (*/}
    {/*                            <div key={u.id} style={{marginRight: '25px'}}>*/}
    {/*                                <p>{u.first_name}</p>*/}
    {/*                                <img src={u.avatar} alt=""/>*/}
    {/*                            </div>*/}
    {/*                        )*/}
    {/*                    })*/}
    {/*                }</div>*/}
    {/*        </div>*/}
    {/*    )*/}
    {/*}*/}

    // const Colors = () => {
    //     const dispatch = useAppDispatch()
    //     const colors = useAppSelector(state => state.app.colors)
    //     const error = useAppSelector(state => state.app.error)
    //     const isLoading = useAppSelector(state => state.app.isLoading)
    //
    //     useEffect(() => {
    //         dispatch(getColorsTC())
    //     }, [])
    //
    //     return (
    //         <div>
    //             <h2>Colors</h2>
    //             {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
    //             {isLoading && <Loader/>}
    //             <div style={{display: 'flex'}}>
    //                 {
    //                     colors.map(c => {
    //                         return (
    //                             <div key={c.id} style={{marginRight: '25px'}}>
    //                                 <p>{c.name}</p>
    //                                 <div style={{backgroundColor: c.color, width: '128px', height: '30px'}}>
    //                                     <b>{c.color}</b>
    //                                 </div>
    //                             </div>
    //                         )
    //                     })
    //                 }</div>
    //         </div>
    //     )
    // }
    //
    // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    // root.render(<Provider store={store}> <App/></Provider>)


// Описание:
// Перед вами заголовки Users, Colors и Loading ...
// Откройте network и вы увидите что запросы падают с ошибками,
// но в коде этот никак не обрабатывается.
// Для обработки ошибок написана утилитная функция baseErrorHandler.
// Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
// Код чинить не нужно.
// Пример ответа: dispatch(setLoadingAC(false))


    //8

    import React, { useEffect } from 'react'
    import ReactDOM from 'react-dom/client';
    import { applyMiddleware, combineReducers, legacy_createStore as createStore, Dispatch } from 'redux'
    import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
    import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
    import axios, { AxiosError } from 'axios'

// TYPES
    type UserType = {
        avatar: string
        email: string
        first_name: string
        id: 1
        last_name: string
    }

    type ColorType = {
        color: string
        id: number
        name: string
        pantone_value: string
        year: number
    }

    type CommonResponseType<T> = {
        total: number
        total_pages: number
        page: number
        per_page: number
        support: {
            url: string
            text: string
        }
        data: T
    }

// API
    const instance = axios.create({baseURL: 'https://reqres.in/api/'})

    const reqresAPI = {
        getUsers() {
            return instance.get<CommonResponseType<UserType[]>>('users?delay=3')
        },
        getColors() {
            return instance.get<CommonResponseType<ColorType[]>>('colors?delay=3')
        }
    }


// Reducer
    const initState = {
        isLoading: false,
        error: null as string | null,
        users: [] as UserType[],
        colors: [] as ColorType[],
    }

    type InitStateType = typeof initState

    const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
        switch (action.type) {
            case 'APP/GET-USERS':
                return {...state, users: action.users}
            case 'APP/GET-COLORS':
                return {...state, colors: action.colors}
            case 'APP/IS-LOADING':
                return {...state, isLoading: action.isLoading}
            case 'APP/SET-ERROR':
                return {...state, error: action.error}
            default:
                return state
        }
    }

    const getUsersAC = (users: UserType[]) => ({type: 'APP/GET-USERS', users} as const)
    const getColorsAC = (colors: ColorType[]) => ({type: 'APP/GET-COLORS', colors} as const)
    const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
    const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
    type ActionsType =
        | ReturnType<typeof getUsersAC>
        | ReturnType<typeof getColorsAC>
        | ReturnType<typeof setLoadingAC>
        | ReturnType<typeof setError>

// Utils functions
    function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
        dispatch(actionCreator(data))
        dispatch(setLoadingAC(false))
    }

// Thunk
    const getUsersTC = (): AppThunk => (dispatch) => {
        dispatch(setLoadingAC(true))
        reqresAPI.getUsers()
            .then((res) => {
                // XXX
            })
            .catch((e: AxiosError) => {
                dispatch(setError(e.message))
                dispatch(setLoadingAC(false))
            })
    }

    const getColorsTC = (): AppThunk => (dispatch) => {
        dispatch(setLoadingAC(true))
        reqresAPI.getColors()
            .then((res) => {
                // YYY
            })
            .catch((e: AxiosError) => {
                dispatch(setError(e.message))
                dispatch(setLoadingAC(false))
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


// COMPONENTS
// Loader
    export const Loader = () => {
        return (
            <h1>Loading ...</h1>
        )
    }


    const App = () => {
        return (
            <>
                <h1>Reqres API</h1>
                <Users/>
                <Colors/>
            </>
        )
    }

    const Users = () => {
        const dispatch = useAppDispatch()
        const users = useAppSelector(state => state.app.users)
        const error = useAppSelector(state => state.app.error)
        const isLoading = useAppSelector(state => state.app.isLoading)

        useEffect(() => {
            dispatch(getUsersTC())
        }, [])

        return (
            <div>
                <h2>Users</h2>
                {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
                {isLoading && <Loader/>}
                <div style={{display: 'flex'}}>
                    {
                        users.map(u => {
                            return (
                                <div key={u.id} style={{marginRight: '25px'}}>
                                    <p>{u.first_name}</p>
                                    <img src={u.avatar} alt=""/>
                                </div>
                            )
                        })
                    }</div>
            </div>
        )
    }

    const Colors = () => {
        const dispatch = useAppDispatch()
        const colors = useAppSelector(state => state.app.colors)
        const error = useAppSelector(state => state.app.error)
        const isLoading = useAppSelector(state => state.app.isLoading)

        useEffect(() => {
            dispatch(getColorsTC())
        }, [])

        return (
            <div>
                <h2>Colors</h2>
                {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
                {isLoading && <Loader/>}
                <div style={{display: 'flex'}}>
                    {
                        colors.map(c => {
                            return (
                                <div key={c.id} style={{marginRight: '25px'}}>
                                    <p>{c.name}</p>
                                    <div style={{backgroundColor: c.color, width: '128px', height: '30px'}}>
                                        <b>{c.color}</b>
                                    </div>
                                </div>
                            )
                        })
                    }</div>
            </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(<Provider store={store}> <App/></Provider>)


// Описание:
// Перед вами список Users, список Colors и Loading ...
// Откройте network и вы увидите что запросы на сервер уходят и возвращаются с данными,
// но вместо этого пользователь видит на экране Loader.
// Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// Ваша задача воспользоваться этой функцией отобразить Users и Colors
// Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// Ответ дайте через пробел.
// Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1)

    return <div>Hi</div>


}
export default App;