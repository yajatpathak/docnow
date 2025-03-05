import React, { useState } from "react";
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, Platform 
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams } from "expo-router";

const AppointmentPage = () => {
  const { name, speciality, location, rating } = useLocalSearchParams();
  
  const [reason, setReason] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Simulated available slots (To be replaced with API calls)
  const availableSlots = [
    { date: "2025-03-06", time: "10:30 AM" },
    { date: "2025-03-07", time: "2:00 PM" },
    { date: "2025-03-08", time: "4:15 PM" }
  ];

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) setDate(selectedDate);
    setShowDatePicker(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) setTime(selectedTime);
    setShowTimePicker(false);
  };

  const handleCheckAvailableSlot = () => {
    if (availableSlots.length > 0) {
      const firstAvailable = availableSlots[0];
      setDate(new Date(firstAvailable.date));
      setTime(new Date(`${firstAvailable.date} ${firstAvailable.time}`));
      alert(`Available Slot: ${firstAvailable.date} at ${firstAvailable.time}`);
    } else {
      alert("No available slots at the moment.");
    }
  };

  const handleSubmit = () => {
    console.log("Appointment Details:", {
      doctor: name,
      speciality,
      location,
      date: date.toDateString(),
      time: time.toLocaleTimeString(),
      reason
    });
    alert("Appointment Booked Successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book an Appointment</Text>
      <Text style={styles.details}>{name} - {speciality}</Text>
      <Text style={styles.details}>Location: {location}</Text>
      <Text style={styles.details}>Rating: {rating}</Text>

      {/* Reason for Appointment */}
      <TextInput
        style={styles.input}
        placeholder="What is the appointment for?"
        value={reason}
        onChangeText={setReason}
      />

      {/* Check Available Slot Button */}
      <TouchableOpacity onPress={handleCheckAvailableSlot} style={styles.availableButton}>
        <Text style={styles.buttonText}>🔍 Check Available Slot</Text>
      </TouchableOpacity>

      {/* Date Picker */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.picker}>
        <Text style={styles.pickerText}>📅 {date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
      )}

      {/* Time Picker */}
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.picker}>
        <Text style={styles.pickerText}>⏰ {time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker value={time} mode="time" display="default" onChange={handleTimeChange} />
      )}

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>✅ Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#333" },
  details: { fontSize: 18, marginBottom: 5, color: "#555" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 10,
    backgroundColor: "#f9f9f9"
  },
  availableButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: 12,
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  picker: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 25,
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  pickerText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "bold" },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 25,
    alignSelf: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "bold" },
});

export default AppointmentPage;
