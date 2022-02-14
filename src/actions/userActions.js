import { urlBase } from "../environments/enviroment";

const startSaveUserIfNotExists = (user) => {
  return async () => {
    try {
      const response = await fetch(`${urlBase}/post/user`, {
        method: "POST",
        body: user,
      });
      if (response.ok) {
        const user = await response.json();
        console.log("****************");
        console.log(user);
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

export default startSaveUserIfNotExists;
