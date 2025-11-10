const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
 const {
    personalInfo: {
        name,
        contact: {email},
    },
} = user;
    return { name, email};
    }
 

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }