import React from 'react';
import { GluestackUIProvider, Box, Button, Input, InputField, VStack, Text, Heading, Pressable } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useRouter } from 'expo-router';  // Import useRouter for navigation
import {Image} from 'react-native';

const LoginScreen = () => {
  const router = useRouter();  // Initialize router

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} justifyContent="center" alignItems="center" bg="white">
        <Box
          width="90%"
          maxWidth={400}
          p={4}
          borderRadius={10}
          bg="blue100"
          elevation={4} // For Android shadow
          shadowColor="black" // For iOS shadow
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.2}
          shadowRadius={4}
        >
          {/* Logo Image */}
          <Image
            source={require('../assets/images/DocNowLogo.png')}
            style={{
              width: "40%", // Adjust width for responsiveness
              height: "20%", // Adjust height accordingly
              marginBottom: 10,
              alignSelf: "center", // Center the image inside the Box
              resizeMode: "contain", // Ensure proper scaling
            }}
            alt="DocNow Symbol"
          />

          <Heading size="lg" color="blue700" textAlign="center" mb={4}>
            Welcome Back
          </Heading>
          <VStack space="md">
            <Input variant="outline" borderColor="blue500">
              <InputField placeholder="Email" />
            </Input>
            <Input variant="outline" borderColor="blue500">
              <InputField placeholder="Password" secureTextEntry />
            </Input>
            <Button bg="blue600" mt={4}>
              <Text color="white">Login</Text>
            </Button>
          </VStack>

          {/* Clickable Sign-Up Text */}
          <Pressable onPress={() => router.push('/patient-signup')}>
            <Text textAlign="center" mt={3} color="blue700" underline>
              Don't have an account? Sign up
            </Text>
          </Pressable>

        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default LoginScreen;
