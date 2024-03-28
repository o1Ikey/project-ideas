"use client";

import React from "react";
import Wrapper from "../components/Wrapper";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import { Box, Button } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { registerMutation } from "../graphql/mutations/registerMutation";

interface UserMutationResponse {
  code: number;
  success: boolean;
  message: string;
  user: string;
  error: string;
}

interface UserInput {
  username: string;
  email: string;
  password: string;
}

const initialValues = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [registerUser, { data, error }] = useMutation<
    { register: UserMutationResponse },
    { registerInput: UserInput }
  >(registerMutation);

  const onRegisterSubmit = (values: UserInput) => {
    console.log(values, "values");
    return registerUser({
      variables: {
        registerInput: values,
      },
    });
  };

  return (
    <Wrapper size="small">
      {error && <>Failed to register</>}
      {data && data.register.success && (
        <p>Registered successfully {JSON.stringify(data)}</p>
      )}
      <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Username"
              label="Username"
              type="text"
            />
            <Box mt={4}>
              <InputField
                name="email"
                placeholder="Email"
                label="Email"
                type="text"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              colorScheme="teal"
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Register;
