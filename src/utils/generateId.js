function generateId(min = 2, max = 8)  {
  return Math.random().toString(36).substr(min, max)
}

export default generateId;
