import React from 'react';
import { GluestackUIProvider, Box, Button, Input, InputField, VStack, Text, Heading } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const LoginScreen = () => {
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
          <Text textAlign="center" mt={3} color="blue700">
            Don't have an account? Sign up
          </Text>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default LoginScreen;
