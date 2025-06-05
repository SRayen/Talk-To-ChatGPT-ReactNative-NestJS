import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 30 }}>
        Talk GPT 123
      </Text>
      <Text style={{ textAlign: "center" }}>
        Press and hold this button to record your voice.Release the button to
        send the recording, and you'll hear a response.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
