export const addKey = keyName => (item, index) => ({
  ...item, key: item[keyName] + index
})
