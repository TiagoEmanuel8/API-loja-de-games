import * as bcryptjs from 'bcryptjs';

const saltRounds = 10;

const createHashPassword = async(password: string) => {
  const encrypt = await bcryptjs.hash(password, saltRounds);
  return encrypt;
};

export {
  createHashPassword,
};
