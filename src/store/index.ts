import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
        userID: '',
        username: '',
        name: '',
        midName: '',
        lastName: '',
        gender: '',
        birthday: '',
        phoneNumber: '',
        emailAdddress: '',
        address: '',
        country: '',
        city: '',
        state: '',
        district: '',
        zipCode: '',
        avatar: '',
        token: '',
        refereshToken: '',
        isAuthenticated: false,
        resetPasswordTimer: 120,
        isDark: true,
    },
    mutations: {
        setUsername(state: any, username: string) {
            state.username = username
        },
        setName(state: any, name: string) {
            state.name = name
        },
        setMidName(state: any, midName: string) {
            state.midName = midName
        },
        setLastName(state: any, lastName: string) {
            state.lastName = lastName
        },
        setGender(state: any, gender: string) {
            state.gender = gender
        },
        setBirthday(state: any, birthday: string) {
            state.birthday = birthday
        },
        setPhone(state: any, phone: string) {
            state.phone = phone
        },
        setAddress(state: any, address: string) {
            state.address = address
        },
        setCountry(state: any, country: string) {
            state.country = country
        },
        setCity(state: any, city: string) {
            state.city = city
        },
        setState(state: any, statePerson: string) {
            state.state = statePerson
        },
        setDistrict(state: any, district: string) {
            state.district = district
        },
        setZipcode(state: any, zipcode: string) {
            state.zipcode = zipcode
        },
        setToken(state: any, token: string) {
            state.token = token
        },
        setRefereshToken(state: any, refereshToken: string) {
            state.refereshToken = refereshToken
        },
        setIsAuthenticated(state: any, isAuthenticated: string) {
            state.isAuthenticated = isAuthenticated
        },
        setTimer(state: any, timer: number) {
            state.resetPasswordTimer = timer
        },
        setAvatar(state: any, avatar: string) {
            state.avatar = avatar
        },
        setUserID(state: any, userID: string) {
            state.userID = userID
        },
        changeTheme(state: any) {
            state.isDark = !state.isDark
        }
    },
    getters: {
        isAuthenticated(state: any) {
            return state.isAuthenticated
        },
        username(state: any) {
            return state.username
        },
        resetPasswordTimer(state: any) {
            return state.resetPasswordTimer;
        },
        name(state: any) {
            return state.name
        },
        midName(state: any) {
            return state.midName
        },
        lastName(state: any) {
            return state.lastName
        },
        gender(state: any) {
            return state.gender
        },
        birthday(state: any) {
            return state.birthday
        },
        phoneNumber(state: any) {
            return state.phoneNumber
        },
        emailAdddress(state: any) {
            return state.emailAdddress
        },
        address(state: any) {
            return state.address
        },
        country(state: any) {
            return state.country
        },
        city(state: any) {
            return state.city
        },
        state(state: any) {
            return state.state
        },
        district(state: any) {
            return state.district
        },
        zipCode(state: any) {
            return state.zipCode
        },
        avatar(state: any) {
            return state.avatar
        },
        getTheme(state: any) {
            return state.isDark
        },
        userID(state: any) {
            return state.userID
        },
        token(state: any) {
            return state.token
        }
    },
    plugins: [createPersistedState({})]
})

export default store
