import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenOptions } from "./utils";
import { StyleSheet } from "react-native";
import { theme } from "./src/theme";
import { tabs } from "./src/tabs";

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
                {tabs.map((tab, index) => (
                    <Tab.Screen
                        key={index}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <>
                                    <tab.icon width={24} height={24} color={focused ? theme.colors.activeTintColor : theme.colors.inactiveTintColor} />
                                    {focused && <View style={styles.activeTabIndicator} />}
                                </>
                            ),
                        }}
                    />
                ))}
                {/* <Tab.Screen
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
                /> */}
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