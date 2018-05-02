export const HANDLERS_SUCCESS = "HANDLERS_SUCCESS";
export const HANDLERS_ERROR = "HANDLERS_ERROR";
export const HANDLERS_INFO = "HANDLERS_INFO";
export const HANDLERS_WARNING = "HANDLERS_WARNING";
export const HANDLERS_MESSAGE = "HANDLERS_MESSAGE";
export const HANDLERS_LOADING_START = "HANDLERS_LOADING_START";
export const HANDLERS_LOADING_STOP = "HANDLERS_LOADING_STOP";

export const setMessage = messageText => ({ type: HANDLERS_MESSAGE, message: messageText });
export const setSuccess = messageText => ({ type: HANDLERS_SUCCESS, message: messageText });
export const setInfo = messageText => ({ type: HANDLERS_INFO, message: messageText });
export const setWarnig = messageText => ({ type: HANDLERS_WARNING, message: messageText });
export const setError = messageText => ({ type: HANDLERS_ERROR, message: messageText });
export const loadingStart = () => ({ type: HANDLERS_LOADING_START });
export const loadingStop = () => ({ type: HANDLERS_LOADING_STOP });