import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const StackScreen = () => {
  return (
    <View>
      <Text style={styles.StackScreen}>StackScreen</Text>
    </View>
  );
};

export default StackScreen;

const styles = StyleSheet.create({
  StackScreen: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
  },
});
