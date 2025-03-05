import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {registerCustomer} from "../services/api.js"

const PatientSignUp = () => {
  const router = useRouter(); // ✅ Use useRouter for navigation
  const [username, setusername]= useState("")
  const [password, setpassword]= useState("")
  const handleRegister = async () => {
    try {
      const customerData =  {
        user: {
        username: username.trim(),
        password: password.trim()
      }
    }
      const response = await registerCustomer(customerData);
    }
    catch(error){
      console.log(error)
    }
    finally{
      router.push("/patientDashboard")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patient Sign Up</Text>

      <TextInput style={styles.input} placeholder="Username" onChangeText={setusername}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry  onChangeText={setpassword} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default PatientSignUp;
