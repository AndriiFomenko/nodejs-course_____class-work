function getType(data) {
  return typeof data;
}

function createUser(name) {
  return {
    id: Math.floor(Math.random() * 1000),
    name: name,
    createdAt: new Date(),
  };
}

module.exports = {
  getType,
  createUser,
};
