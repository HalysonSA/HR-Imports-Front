

export function checkEmail(field: string) {
    const user = field.substring(0, field.indexOf('@'))

    const domain = field.substring(field.indexOf('@') + 1, field.length)

    if (
        user.length >= 3 &&
        domain.length >= 5 &&
        user.search('@') == -1 &&
        domain.search('@') == -1 &&
        user.search(' ') == -1 &&
        domain.search(' ') == -1 &&
        domain.search('.') != -1 &&
        domain.indexOf('.') >= 3 &&
        domain.lastIndexOf('.') < domain.length - 1
    ) {
        return true
    } else {
        return false
    }
}
