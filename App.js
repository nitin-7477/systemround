import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItem from "./screens/AddItem";
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="AddItem" component={AddItem} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
