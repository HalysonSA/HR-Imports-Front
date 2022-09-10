


export function passwordMatch(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
        return true
    } else {
        return false
    }
}