import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View>
      <Text style={styles.SettingsScreen}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  SettingsScreen: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
  },
});
