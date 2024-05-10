import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import { screenOptions } from "./utils";
import { HomeIcon, Search, User, CreditCard, PieChart } from "./assets/icons";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet } from "react-native";

function StatisticsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Statistics!</Text>
        </View>
    );
}
function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile!</Text>
        </View>
    );
}
function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Search!</Text>
        </View>
    );
}
function PaymentsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Payments!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: "#00BDB0",
                    showLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <HomeIcon color={focused ? "#00BDB0" : "#B3B4B8"} />
                                {focused && <View style={styles.activeTabIndicator} />}
                            </>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Statistics"
                    component={StatisticsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <PieChart color={focused ? "#00BDB0" : "#B3B4B8"} />
                                {focused && <View style={styles.activeTabIndicator} />}
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <Search color={focused ? "#00BDB0" : "#B3B4B8"} />
                                {focused && <View style={styles.activeTabIndicator} />}
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Payments"
                    component={PaymentsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <CreditCard color={focused ? "#00BDB0" : "#B3B4B8"} />
                                {focused && <View style={styles.activeTabIndicator} />}
                            </>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <User color={focused ? "#00BDB0" : "#B3B4B8"} />
                                {focused && <View style={styles.activeTabIndicator} />}
                            </>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    activeTabIndicator: {
        width: "75%",
        height: 6,
        borderRadius: 3,
        backgroundColor: "#00BDB0",
        position: "absolute",
        bottom: "8px",
        alignSelf: "center",
    },
});