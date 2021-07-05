import { points } from '../../src/points'

export default (req, res) => {
  res.status(200).json(points)
}