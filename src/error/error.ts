// @ts-ignore
class Error {
  message: string;
  name: string;
  constructor(message) {
    this.message = message;
    this.name = 'Error';
  }
}

module.exports = Error;
