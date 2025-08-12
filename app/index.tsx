import LogoAndTitleBlob from "@/assets/svgs/logo-and-name.svg";
import { View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={["#1DB954", "#1E8D45"]}
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <LogoAndTitleBlob />
    </View>
  );
}
