export default (req, res) => {
  res.statusCode = 200
  res.json({ now: Date.now(), file: '/pages/api/precedences-test.js' })
}