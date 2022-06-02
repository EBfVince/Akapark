import Prisma from "@prisma/client";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();
console.log("init prisma");

export class UserService {
  async findAll(): Promise<object[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async findById(id: number): Promise<object | null> {
    const user = await prisma.user.findFirst({
      where: { id },
    });
    return user;
  }

  async findWithEmail(email: string): Promise<object | null> {
    return await prisma.user.findFirst({
      where: { email: email },
    });
  }

  async create(user: any): Promise<object> {
    const result = await prisma.user.create({ data: { ...user } });
    return result;
  }

  async removeAll(): Promise<void> {
    await prisma.user.deleteMany();
  }
}
