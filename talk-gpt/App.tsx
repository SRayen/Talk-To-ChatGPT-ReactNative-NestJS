import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">(
    "lightgray"
  );
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 30 }}>
        Talk GPT 123
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#333333",
          marginBottom: 5,
          fontSize: 12,
        }}
      >
        Press and hold this button to record your voice.Release the button to
        send the recording, and you'll hear a response.
      </Text>
      <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 17 }}>
        Your message
      </Text>

      <Pressable
        onPressIn={() => setBorderColor("lightgreen")}
        onPressOut={() => setBorderColor("lightgray")}
        style={{
          width: "90%",
          padding: 30,
          gap: 10,
          borderWidth: 3,
          alignItems: "center",
          borderRadius: 10,
          borderColor: borderColor,
          marginBottom: 15,
        }}
      >
        <Text>Hold to Speak</Text>
      </Pressable>

      <Button title="Reply last message" onPress={() => {}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
