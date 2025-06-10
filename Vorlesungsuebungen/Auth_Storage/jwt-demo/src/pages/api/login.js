import jwt from 'jsonwebtoken';

const users = [
  { id: 1, username: 'alice', password: '123456' },
  { id: 2, username: 'bob', password: 'abcdef' }
];

export default function handler(req, res) {
  // Logic which handels the login
  // check for username password match
  // create JWT
  // send jwt back
}