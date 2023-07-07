import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import React, { useState, useEffect } from 'react';

const ProfileScreen = ({ navigation, route }) => {
  const { phoneNumber, cnic } = route.params;

  const [bookings, setBookings] = useState([]);

  const fetchProviderBookings = async (cnic) => {
    try {
      const response = await fetch(`http://192.168.18.122:8000/provider/${cnic}/booking`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProviderBookings(cnic);
  }, []);

  const [activeSection, setActiveSection] = useState("All");

  const getFilteredBookings = () => {
    if (activeSection === "All") {
      return bookings;
    } else if (activeSection === "Completed") {
      return bookings.filter((booking) => booking.status === "completed");
    } else if (activeSection === "In Progress") {
      return bookings.filter((booking) => booking.status === "confirmed");
    }
  };

  const renderBookingCards = () => {
    const filteredBookings = getFilteredBookings();

    // Group bookings by status
    const groupedBookings = filteredBookings.reduce((acc, booking) => {
      const status = booking.status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(booking);
      return acc;
    }, {});

    // Render booking cards for each status section
    return Object.entries(groupedBookings).map(([status, bookings]) => (
      <View key={status}>
        {bookings.map((booking) => (
          <Card key={booking.id} containerStyle={styles.card}>
            {/* Card content */}
            <Text>Booking ID: {booking.id}</Text>
            <Text>Booking Time: {booking.booking_time}</Text>
            <Text>Booking Date: {booking.booking_date}</Text>
            <Text>Duration: {booking.duration_hrs} hrs {booking.duration_mins} mins</Text>
            <Text>Status: {booking.status}</Text>
            <Text>Total Amount: {booking.total_amount}</Text>
            <Text>Client Address: {booking.client_address}</Text>
            <Text>Client Location: {booking.client_location}</Text>
          </Card>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Status Filters */}
      <View style={styles.filters}>
        <TouchableOpacity
          style={[styles.filterButton, activeSection === "All" && styles.activeFilterButton]}
          onPress={() => setActiveSection("All")}
        >
          <Text style={[styles.filterButtonText, activeSection === "All" && styles.activeFilterButtonText]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeSection === "Completed" && styles.activeFilterButton]}
          onPress={() => setActiveSection("Completed")}
        >
          <Text style={[styles.filterButtonText, activeSection === "Completed" && styles.activeFilterButtonText]}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeSection === "In Progress" && styles.activeFilterButton]}
          onPress={() => setActiveSection("In Progress")}
        >
          <Text style={[styles.filterButtonText, activeSection === "In Progress" && styles.activeFilterButtonText]}>
            In Progress
          </Text>
        </TouchableOpacity>
      </View>

      {/* Booking Cards */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderBookingCards()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#5f60ba",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  card: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f6f7f9',
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeFilterButton: {
    backgroundColor: "#5f60ba",
  },
  filterButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  activeFilterButtonText: {
    color: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default ProfileScreen;
