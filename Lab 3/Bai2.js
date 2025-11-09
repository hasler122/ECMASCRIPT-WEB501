const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
  return {
    name,
    age,
    isAdmin,
  };
};
