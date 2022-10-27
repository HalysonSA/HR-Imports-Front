const validatePhone = (phone: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^\([1-9]{2}\) [9]{1}[0-9]{4}\-[0-9]{4}$/;
    
    if (regex.test(phone)) {
        return true;
    }

    return false;
};
export default validatePhone;