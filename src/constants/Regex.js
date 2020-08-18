export const PASSWORD = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,20}$/;
// export const FIRST_NAME = /^[^\s]([^0-9])*[^\s]$/;
export const FIRST_NAME = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){1,}$/;
export const LAST_NAME = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){1,}$/;
export const DATE_OF_BIRTH = /^(?:(?:(?:(?:(?:[1-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:[1-9]\d{3})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[13-9]|1[0-2])\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8])))))$/;
// export const EMAIL = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)((\.([a-zA-Z]{2,5})){1,2})$/;
export const PHONE_NUMBER = /^\d{10,11}$/;
export const EMAIL = /^([a-zA-Z0-9_\-\.]{6,64})@(?=.{5,255}$)([a-zA-Z0-9]{2,})((\.([a-zA-Z]{2,})){1,2})$/;
