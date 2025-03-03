export const responseObj = (user, message) => {
    return {
        user,
        message,
        time: new Date().toLocaleTimeString()
    }
}