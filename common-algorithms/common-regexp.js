const NumberMatcher = new RegExp(/(^[\-0-9][0-9]*(.[0-9]+)?)$/);
const BooleanMatcher = new RegExp(/^true|false$/);
module.exports = { NumberMatcher, BooleanMatcher };