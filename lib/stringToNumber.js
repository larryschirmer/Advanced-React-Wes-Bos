/**
 * Takes a string of numbers and returns the float version of the number.
 * Returns 0, if arg is an empty string
 *
 * @param {String} stringNumber - A string of numbers
 * @return {Number} The float number coorisponding to the string
 */
const stringToNumber = stringNumber => parseFloat(stringNumber === '' ? 0 : stringNumber);
export default stringToNumber;
