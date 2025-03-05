import React, { useState } from 'react';
import { 
  GluestackUIProvider, Box, Button, Input, InputField, VStack, Text, Heading, 
  RadioGroup, Radio, RadioIndicator, RadioLabel, 
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useRouter } from 'expo-router';

const handleRegister = async() => {
    
}

const SignUpScreen = () => {
  const router = useRouter();  
  const [role, setRole] = useState("patient"); // Default role

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} justifyContent="center" alignItems="center" bg="white">
        <Box
          width="90%"
          maxWidth={400}
          p={4}
          borderRadius={10}
          bg="blue100"
          elevation={4}
          shadowColor="black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.2}
          shadowRadius={4}
        >
          <Heading size="lg" color="blue700" textAlign="center" mb={4}>
            Create an Account
          </Heading>
          <VStack space="md">
            <Input variant="outline" borderColor="blue500">
              <InputField placeholder="Full Name" />
            </Input>
            <Input variant="outline" borderColor="blue500">
              <InputField placeholder="Email" />
            </Input>
            <Input variant="outline" borderColor="blue500">
              <InputField placeholder="Password" secureTextEntry />
            </Input>

            {/* User Role Selection */}
            <Text color="blue700" fontSize="$md" mt={2} mb={1}>Select Role:</Text>
            <RadioGroup value={role} onChange={setRole} flexDirection="row" space={4}>
              <Radio value="patient">
                <RadioIndicator />
                <RadioLabel ml={2}>Patient</RadioLabel>
              </Radio>
              <Radio value="doctor">
                <RadioIndicator />
                <RadioLabel ml={2}>Doctor</RadioLabel>
              </Radio>
            </RadioGroup>

            <Button bg="blue600" mt={4} onPress={handleRegister}>
              <Text color="white">Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</Text>
            </Button>
          </VStack>

          {/* Navigate back to Login */}
          <Text textAlign="center" mt={3} color="blue700">
            Already have an account?{' '}
            <Text onPress={() => router.push('/LoginScreen')} underline color="blue900">
              Log in
            </Text>
          </Text>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default SignUpScreen;
