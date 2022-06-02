import { UserService } from "../services/user.service";

export default defineEventHandler(async (event) => {
  const service = new UserService();

  // Get the user id from the route parameter
  const userId = Number(event.context.params.id);

  // Check if the userId is effectively a number
  if (Number.isNaN(userId)) {
    return { error: "The id must be a number" };
  }

  // Find the user
  const user = await service.findById(userId);

  // Send error if the user doesnt exist
  if (user == null) {
    return createError({
      statusCode: 404,
      statusMessage: "The user id " + userId + " doesn't exist",
    });
    // sendError(event, error);
  }

  return user;
});
