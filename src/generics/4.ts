type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>): User1 {
  const firstData: User1 = {
    name: "",
    surname: "",
    email: "default@mail.com",
    password: "defaultPassword",
  };

  return { ...firstData, ...initialValues };
}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(newUser);
