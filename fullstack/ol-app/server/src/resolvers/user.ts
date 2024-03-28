import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entities/User";
import { RegisterInput } from "../types/Auth/RegisterInput";
import { UserMutationResponse } from "../types/Auth/UserMutationResponse";
import argon2 from "argon2";
import { validateRegisterInput } from "../utils/validateRegisterInput";

@Resolver((_of) => User)
export class UserResolver {
  @Mutation((_return) => UserMutationResponse)
  async register(
    @Arg("registerInput") registerInput: RegisterInput
  ): Promise<UserMutationResponse> {
    try {
      const validateRegisterInputErrors = validateRegisterInput(registerInput);

      if (validateRegisterInputErrors !== null)
        return { code: 400, success: false, ...validateRegisterInputErrors };

      const { username, email, password } = registerInput;

      const existingUser = await User.findOne({
        where: [{ username }, { email }],
      });

      if (existingUser) {
        return {
          code: 400,
          success: false,
          message: "Duplicated username or email",
          errors: [
            {
              field: existingUser.username === username ? "username" : "email",
              message: `${
                existingUser.username === username ? "Username" : "Email"
              } already taken`,
            },
          ],
        };
      }

      const hashedPassword = await argon2.hash(password);

      const newUser = User.create({
        username,
        password: hashedPassword,
        email,
      });

      await newUser.save();

      return {
        code: 200,
        success: true,
        message: "User registration successful",
        user: newUser,
      };
    } catch (error) {
      console.log(error, "error");
      return {
        code: 500,
        success: false,
        message: `Internal server error`,
      };
    }
  }
}
