import { sendError, createError } from "h3";
import { UserService } from "../services/user.service";

export default defineEventHandler(async (event) => {
  const service = new UserService();
  const query = useQuery(event);
  const email = query.email;
  const name = query.name;

  // Check query parameters
  if (!email || !name) {
    const error = createError({
      statusCode: 400,
      statusMessage: `The email and the name must be set.`,
    });
    return sendError(event, error);
  }

  // TODO Check if the user already exists
  // const userAlreadyExists = await prisma.user.findUnique({
  //   where: { email: email.toString() },
  // });
  // if (userAlreadyExists) {
  //   const error = createError({
  //     statusCode: 400,
  //     statusMessage: `The user with email '${email}' already exists`,
  //   });
  //   return sendError(event, error);
  // }

  // Add the user to the database and return it
  return await service.create({
    name: name.toString(),
    email: email.toString(),
  });
});
