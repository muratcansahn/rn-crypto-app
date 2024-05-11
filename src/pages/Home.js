import { Text, View } from "react-native";
import React from "react";
import { styles } from "./HomeStyles";
import { LinearGradient } from "expo-linear-gradient";
import * as coinData from "../../data.json";
import { FlatList } from "react-native-web";
import CoinCard from "../components/CoinCard/CoinCard";
import { formatNumber } from "../../utils";
import { ChevronUp, ChevronDown } from "../../assets/icons";
import { theme } from "../theme";

const Home = () => {
    console.log(coinData);
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerText}>Trade Now and Get Your Life</Text>
            </View>
            <View style={styles.mainCardWrapper}>
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
                            {" "}
                            <View style={styles.coinChange}>
                                {coinData.profitPercentage < 0 ? <ChevronDown color={theme.colors.error} /> : <ChevronUp color={theme.colors.success} />}
                                <Text
                                    style={[styles.coinChangePercentage, { color: coinData.profitPercentage < 0 ? theme.colors.error : theme.colors.success }]}
                                >
                                    {coinData.profitPercentage}%
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.coinsSection}>
                <Text style={styles.coinsSectionTitle}>My Coins</Text>
                <View style={styles.coinsSectionWrapper}>
                    <FlatList
                        style={{
                            width: "100%",
                            marginTop: 16,
                        }}
                        numColumns={2}
                        data={coinData.coins}
                        columnWrapperStyle={{
                            gap: 16,
                        }}
                        contentContainerStyle={{
                            gap: 24,
                        }}
                        renderItem={({ item }) => {
                            return <CoinCard coin={item} />;
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Text style={styles.viewMore}>View More</Text>
            </View>
        </View>
    );
};

export default Home;
