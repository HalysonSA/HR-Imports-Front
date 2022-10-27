const verifyString = (str: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(str)) {
        return true;
    }

    return false;
}
export default verifyString;