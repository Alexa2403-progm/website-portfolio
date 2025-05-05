export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidName = (username: string): boolean => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(username);
};
// export const isValidMessage = (message: string): boolean => {
//   const messageRegex = /^[a-zA-Z0-9\s.,!?]+$/;
//   return messageRegex.test(message);
// };
//revisar si es necesario el regex de message y ver la condicion
