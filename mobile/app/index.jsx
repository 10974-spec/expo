import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "red"}}>My very first react native application</Text>
      <Link href="/about">
        <Text>About</Text>
      </Link>
    </View>
  );
}
