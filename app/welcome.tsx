import { Text, View } from "react-native";

export default function Welcome() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1DB954",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>Welcome to the app!</Text>
    </View>
  );
}
