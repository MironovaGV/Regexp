export default class Validator {
  static validateUsername(userName) {
    return !!(userName.match(/^[a-zA-Z0-9_-]+$/) && !userName.match(/(^[\d-_]|[0-9]{4,}|[\d-_]$)/));
  }
}
