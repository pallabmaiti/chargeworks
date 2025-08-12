import AuthGate from "@/components/routing/AuthGate";
import { ROUTES } from "@/resources/routes";
import { Stack } from "expo-router";

const App = () => {
  return (
    <AuthGate>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.welcome} options={{ headerShown: false }} />
      </Stack>
    </AuthGate>
  );
};

export default function RootStack() {
  return <App />;
}
