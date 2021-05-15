const { useState } = require("react")

const useScrollHeader = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return [value, setValue]
}