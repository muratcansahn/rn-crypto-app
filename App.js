import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import { screenOptions } from "./utils";
import { HomeIcon, Search, User, CreditCard, PieChart } from "./assets/icons";
import { StyleSheet } from "react-native";
import { theme } from "./src/theme";

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
                    activeTintColor: theme.colors.activeTintColor,
                    showLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <HomeIcon color={focused ? theme.colors.activeTintColor : theme.colors.passiveTintColor} />
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
                                <PieChart color={focused ? theme.colors.activeTintColor : theme.colors.passiveTintColor} />
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
                                <Search color={focused ? theme.colors.activeTintColor : theme.colors.passiveTintColor} />
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
                                <CreditCard color={focused ? theme.colors.activeTintColor : theme.colors.passiveTintColor} />
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
                                <User color={focused ? theme.colors.activeTintColor : theme.colors.passiveTintColor} />
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
        backgroundColor: theme.colors.activeTintColor,
        position: "absolute",
        bottom: "8px",
        alignSelf: "center",
    },
});