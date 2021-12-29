import React, {useState} from 'react';
import { StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignUpScreen = () => {

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch
  } = useForm();

  const pwd = watch("password");
  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          rules={{ required: "Username is required" }}
          control={control}
        />
        <CustomInput
          placeholder="Email"
          name="email"
          rules={{ required: "Email is required" }}
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
        <CustomInput
          placeholder="Repeat Password"
          name="repeat-password"
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
          control={control}
          secureTextEntry
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY"
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="already have an account? Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C68",
    margin: 10,
  },
  text: {
    color: '#808080',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  }
});
