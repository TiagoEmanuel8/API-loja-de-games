import * as bcryptjs from 'bcryptjs';

const saltRounds = 10;

const createHashPassword = async(password: string) => {
  const encrypt = await bcryptjs.hash(password, saltRounds);
  return encrypt;
};

const isPasswordEqual = async (password: string, hashPassword: string) => {
  try {
    const result = await bcryptjs.compare(password, hashPassword);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export {
  createHashPassword,
  isPasswordEqual
};
