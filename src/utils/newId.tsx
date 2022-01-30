let lastId = 1;

const newId = (prefix ='id') => {
  lastId++
  return `${prefix}-${lastId}`
}

export default newId