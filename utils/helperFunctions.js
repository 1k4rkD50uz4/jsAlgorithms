export const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
export const inc = i => ++i;
export const log = (msg, format=undefined) => {
    if (format) {
        msg = '%c' + msg;
    }
    console.log(msg, format);
};
