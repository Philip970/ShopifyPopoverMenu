import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Home from "./app/screens/Home";

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <Home />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
