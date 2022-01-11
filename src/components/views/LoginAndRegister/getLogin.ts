export const getLogin = async (email: string, password: string) => {
  const data = await fetch("https://quizzes-appapi.herokuapp.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });

  const token = await data.json();
  const { access_token } = token;
  return access_token;
};
