export const LOG_IN = 'user/LOG_IN'
export const logIn = data => {
    return {
        type: LOG_IN,
        payload: data
    }
}