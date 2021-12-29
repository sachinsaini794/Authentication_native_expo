import React, {useState} from 'react';
import { StyleSheet, View, Image, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import Logo from "../../../assets/images/Lays-Logo.png";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    // validate user

    navigation.navigate("Home");
  };

    const onForgotPasswordPressed = () => {
      navigation.navigate("ForgotPassword");
    };


 const onSignUpPress = () => {
   navigation.navigate("SignUp");
 };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.Logo, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          name="username"
          rules={{ required: "Username is required" }}
          control={control}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
          control={control}
          secureTextEntry
        />

        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          type="PRIMARY"
        />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default SignInScreen

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  Logo: {
    width: '80%',
    maxHeight: 200,
    maxWidth: 300,
  }
});
