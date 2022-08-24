import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex)

const userStore = {
    state: {
        user: {
            id: '',
            email: '',
            name: '',
            token: '',
            isLoggedIn: false,

        }
    },
    getters: {

    },
    mutations: {

        updateUser(state, body) {
            state.user.id = body.id
            state.user.email = body.email
            state.user.name = body.name
            state.user.token = body.token
            state.user.isLoggedIn = body.isLoggedIn

        },
        setLocalStorage(body) {
            localStorage.setItem('user', JSON.stringify(body))
        },
        updateUserIfLocalStorageExits(state) {
            if (localStorage.getItem('user') !== null) {
                const body = JSON.parse(localStorage.getItem('user'))
                // console.log(body.user)
                state.user.id = body.user.id
                state.user.email = body.user.email
                state.user.name = body.user.name
                state.user.token = body.user.token

                state.user.isLoggedIn = body.user.isLoggedIn
            }
        },
        signOut(state) {
            localStorage.removeItem('user')
            state.user.id = ''
            state.user.email = ''
            state.user.name = ''
            state.user.token = ''
            state.user.isLoggedIn = false
        }
    },
    actions: {
        updateUser(context, body) {
            context.commit('updateUser', body)
        },
        setLocalStorage(context, body) {
            context.commit('setLocalStorage', body)
        },
        updateUserIfLocalStorageExits(context) {
            context.commit('updateUserIfLocalStorageExits')
        }

    },
    modules: {
    }
}



export default userStore