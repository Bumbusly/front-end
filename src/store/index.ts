import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
        userID: '',
        username: '',
        firstName: '',
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
        authenticationStatus: 'WAIT',
        isAuthenticated: false,
        resetPasswordTimer: 120,
        isDark: true,
        authUrl: ''
    },
    mutations: {
        setUsername(state: any, username: string) {
            state.username = username
        },
        setFirstName(state: any, firstName: string) {
            state.firstName = firstName
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
        setAuthenticationStatus(state: any, authenticationStatus: string) {
            state.authenticationStatus = authenticationStatus
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
        },
        setIsAuthenticated(state: any, isAuthenticated: boolean) {
            state.isAuthenticated = isAuthenticated
        },
        setAuthUrl(state: any, url: string) {
            state.authUrl = url
        }
    },
    getters: {
        authenticationStatus(state: any) {
            return state.authenticationStatus
        },
        username(state: any) {
            return state.username
        },
        resetPasswordTimer(state: any) {
            return state.resetPasswordTimer;
        },
        firstName(state: any) {
            return state.firstName
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
        },
        isAuthenticated(state: any) {
            return state.isAuthenticated
        },
        authUrl(state: any) {
            return state.authUrl
        }
    },
    plugins: [createPersistedState({})]
})

export default store
