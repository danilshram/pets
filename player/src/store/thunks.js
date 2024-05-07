import api from './graphql';

const loginThunk = api.endpoints.login.initiate;
const getUserByIdThunk = api.endpoints.getUserById.initiate;
const registrationThunk = api.endpoints.userRegistration.initiate;

export {
        loginThunk,
        getUserByIdThunk,
        registrationThunk
    }