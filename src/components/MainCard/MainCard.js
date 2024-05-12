import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { formatNumber } from "../../../utils";
import { ChevronUp, ChevronDown } from "../../../assets/icons";
import { styles } from "./MainCardStyles";
import { theme } from "../../theme";

export const MainCard = ({ coinData }) => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={["#900271", "#00BFB2"]}
            style={styles.mainCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View>
                <Text style={styles.cardTitle}>Total Coins</Text>
                <Text style={styles.cardValue}>${formatNumber(coinData.totalValue)}</Text>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View>
                    <Text style={styles.cardTitle}>Today’s Profit</Text>
                    <Text style={styles.cardValue}>${coinData.todayProfit}</Text>
                </View>
                <View
                    style={{
                        width: 90,
                        height: 36,
                        backgroundColor: theme.colors.trendBg,
                        borderRadius: 20,
                    }}
                >
                    <View style={styles.coinChange}>
                        {coinData.profitPercentage < 0 ? <ChevronDown color={theme.colors.error} /> : <ChevronUp color={theme.colors.success} />}
                        <Text style={[styles.coinChangePercentage, { color: coinData.profitPercentage < 0 ? theme.colors.error : theme.colors.success }]}>
                            {coinData.profitPercentage.toString()}%
                        </Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};
