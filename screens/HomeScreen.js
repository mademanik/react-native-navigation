import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.HomeScreen}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={styles.TouchButton}
      >
        <Text style={styles.TextButton}>Go to Stack Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreen: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
  },
  TouchButton: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  TextButton: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});
