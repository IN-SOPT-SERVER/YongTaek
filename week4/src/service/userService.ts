import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

// create user
const createUser = async (name: string, email: string, age: number) => {
    const data = await prisma.user.create({
      data: {
        userName: name,
        email,
        age
      }
    });

    return data;
};

// get all user info
const getAllUser = async () => {
    const data = await prisma.user.findMany();

    return data;
}

// update user
const updateUser = async (userId: number, name: string) => {
    const data = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            userName: name
        }
    })
}

// delete user
const deleteUser = async (userId: number) => {
    await prisma.user.delete({
        where: {
          id: userId
        }
    })
}

const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser
};

export default userService;
