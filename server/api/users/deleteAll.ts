import { UserService } from "../services/user.service";

export default defineEventHandler(async () => {
  const service = new UserService();

  // Remove all the users from the database
  await service.removeAll();
  return { result: "ok" };
});
