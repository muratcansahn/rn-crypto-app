import { Text, View } from "react-native";
import React from "react";
import { styles } from "./HomeStyles";
import * as coinData from "../../../data.json";
import { FlatList } from "react-native";
import CoinCard from "../../components/CoinCard/CoinCard";
import { MainCard } from "../../components/MainCard/MainCard";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerText}>Trade Now and Get Your Life</Text>
            </View>
            <View style={styles.mainCardWrapper}>
                <MainCard coinData={coinData} />
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
                        keyExtractor={(item) => item.abbreviation}
                    />
                </View>
                <Text style={styles.viewMore}>View More</Text>
            </View>
        </View>
    );
};

export default Home;
