import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  const jwtSecret = process.env.JWT_SECRET || 'dev-secret-key'

  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '30d',
  })
}

export default generateToken
