import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    // marginTop: StatusBar.currentHeight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
