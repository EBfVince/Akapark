import { UserService } from "../services/user.service";

export default defineEventHandler(async () => {
  const service = new UserService();

  // Return all the users of the database
  return await service.findAll();
});
