import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown"; // Importing the dropdown package
import { useRouter } from "expo-router";


const PatientDashboard = () => {
    const router = useRouter();
    const [rating, setRating] = useState(3);
  const [speciality, setSpeciality] = useState("All");

  const doctors = [
    { name: "Dr. Aditi Sharma", speciality: "Cardiologist", location: "Mumbai", rating: 4.8 },
    { name: "Dr. Rajesh Khanna", speciality: "Dentist", location: "Delhi", rating: 4.6 },
    { name: "Dr. Sneha Verma", speciality: "Dermatologist", location: "Bangalore", rating: 4.7 },
    { name: "Dr. Vivek Patil", speciality: "Orthopedic", location: "Pune", rating: 1.5 },
    { name: "Dr. Anjali Mehta", speciality: "Pediatrician", location: "Kolkata", rating: 4.9 },
    { name: "Dr. Mohan Iyer", speciality: "Neurologist", location: "Chennai", rating: 2.4 },
    { name: "Dr. Priya Nair", speciality: "Gynecologist", location: "Hyderabad", rating: 4.8 },
    { name: "Dr. Ravi Shankar", speciality: "Cardiologist", location: "Ahmedabad", rating: 3.7 },
    { name: "Dr. Kavita Sen", speciality: "Dentist", location: "Jaipur", rating: 4.3 },
    { name: "Dr. Sanjay Gupta", speciality: "Orthopedic", location: "Surat", rating: 4.5 },
    { name: "Dr. Manish Reddy", speciality: "Dermatologist", location: "Lucknow", rating: 4.6 },
    { name: "Dr. Pooja Desai", speciality: "Pediatrician", location: "Bhopal", rating: 4.8 },
    { name: "Dr. Arjun Kapoor", speciality: "Neurologist", location: "Chandigarh", rating: 4.7 },
    { name: "Dr. Swati Joshi", speciality: "Gynecologist", location: "Indore", rating: 4.9 },
    { name: "Dr. Vinay Menon", speciality: "Cardiologist", location: "Nagpur", rating: 5 },
    { name: "Dr. Neha Saxena", speciality: "Dentist", location: "Visakhapatnam", rating: 4.4 },
    { name: "Dr. Ramesh Kumar", speciality: "Orthopedic", location: "Patna", rating: 4.5 },
    { name: "Dr. Suman Das", speciality: "Dermatologist", location: "Vadodara", rating: 4.7 },
    { name: "Dr. Aditya Bhatt", speciality: "Pediatrician", location: "Ludhiana", rating: 4.8 },
    { name: "Dr. Ananya Mishra", speciality: "Neurologist", location: "Coimbatore", rating: 3.6 },
    { name: "Dr. Prakash Chawla", speciality: "Gynecologist", location: "Agra", rating: 4.5 },
    { name: "Dr. Meera Pillai", speciality: "Cardiologist", location: "Thane", rating: 4.7 },
    { name: "Dr. Ashok Verma", speciality: "Dentist", location: "Meerut", rating: 4.3 },
    { name: "Dr. Sunil Rathi", speciality: "Orthopedic", location: "Ranchi", rating: 4.6 },
    { name: "Dr. Rohit Kulkarni", speciality: "Dermatologist", location: "Guwahati", rating: 2.7 }
  ];


  const specialities = ["All", "Cardiologist", "Dentist", "Dermatologist", "Orthopedic", "Pediatrician", "Neurologist"];

//   const handleBookAppointment = (doctor) => {
//     router.push({
//       pathname: "/AppointmentPage",
//       params: { doctor },
//     });
//   };
    const handleBookAppointment = (doctor) => {
        router.push({
        pathname: "/AppointmentPage",
        params: {
            name: doctor.name,
            speciality: doctor.speciality,
            location: doctor.location,
            rating: doctor.rating.toString(), // Convert to string for navigation
        },
        });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter Doctors</Text>

      {/* Dropdown for selecting specialty */}
      <ModalDropdown
        options={specialities}
        defaultValue="Select Speciality"
        onSelect={(index, value) => setSpeciality(value)}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
        style={styles.dropdownContainer}
      />

      {/* Custom Slider Alternative */}
      <View style={styles.sliderContainer}>
        <Text>Rating: {rating}</Text>
        <View style={styles.sliderButtons}>
          <TouchableOpacity onPress={() => setRating(Math.max(1, rating - 1))} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(Math.min(5, rating + 1))} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Doctor List */}
      <FlatList
        data={doctors.filter(
          (doc) =>
            (speciality === "All" || doc.speciality === speciality) &&
            doc.rating >= rating
        )}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.doctorCard}>
            <Text style={styles.doctorName}>{item.name}</Text>
            <Text>{item.speciality} - {item.location} ({item.rating})</Text>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => handleBookAppointment(item)}
            >
              <Text style={styles.bookButtonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
  },
  dropdownText: { fontSize: 16 },
  dropdown: { width: 150, height: "auto" },
  sliderContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  sliderButtons: { flexDirection: "row", marginLeft: 10 },
  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  doctorCard: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  doctorName: { fontWeight: "bold", fontSize: 16 },
  bookButton: {
    marginTop: 5,
    backgroundColor: "#28a745",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  bookButtonText: { color: "#fff", fontWeight: "bold" },
});

export default PatientDashboard;
