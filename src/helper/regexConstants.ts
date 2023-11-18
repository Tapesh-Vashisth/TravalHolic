export const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
// first digit cannot be 0, not all digits can have same number, 10 digits only
export const mobileRegex = new RegExp(/^(?!(\d)\1+$)[1-9]\d{9}$/);
