import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signUp } from "../../redux/account";
import { Box, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email Address is required"),
  phoneNumber: yup.number().required("Phone Number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function SignupPage() {
  const dispatch = useDispatch();
  const { loadingStatus, user } = useSelector(
    (state) => state.account.loadingStatus
  );
  const router = useRouter();

  // useEffect(() => {
  //   if (loadingStatus === "fulfilled" && user.email) {
  //     router.push("/login");
  //   }
  // }, [loadingStatus, router, user]);

  const handleReg = useCallback(async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      let userDetails = signUp(email.value, password.value);
      // let data =
    } catch (error) {
      alert(error);
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser() {
    dispatch(signUp({ email: "emar@gmail.com", password: "Africa@40" }));
    console.log("data stored");
  }
  // const handleSubmit = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     const { username, email, password, location } = e.target.elements;
  //     try {
  //       let credential = await firebaseSignUp(
  //         username.value,
  //         email.value,
  //         password.value,
  //         location.value
  //       );
  //       let data = await newUser({
  //         id: credential.user.uid,
  //         username: username.value,
  //         email: email.value,
  //         password: password.value,
  //         location: location.value,
  //       });
  //       console.log({ data });
  //       history.push("/account/setup");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history]
  // );
  return (
    <RegistrationLayout
      header="Create a Secure Account"
      subHeader="Explore the secret of saving by contribution"
    >
      <h4>{loadingStatus}</h4>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0"
        paddingY="1.5rem"
        minHeight="min-content"
        onSubmit={handleSubmit(registerUser)}
      >
        <FormControl className="mb-5">
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            {...register("fullName")}
            id="fullName"
            type="text"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          {errors.fullName && (
            <p className="text-sm italic text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          {errors.email && (
            <p className="text-sm italic text-red-500">
              {errors.email.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          {errors.phoneNumber && (
            <p className="text-sm italic text-red-500">
              {errors.phoneNumber.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            {...register("password")}
            id="password"
            type="password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          {errors.password && (
            <p className="text-sm italic text-red-500">
              {errors.password.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="password">Confirm Password</FormLabel>
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          {errors.confirmPassword && (
            <p className="text-sm italic text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </FormControl>
        <AuthBtn caption="CREATE ACCOUNT" />
      </Box>
    </RegistrationLayout>
  );
}
