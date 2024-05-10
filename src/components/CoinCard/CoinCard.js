import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./CoinCardStyles";

const CoinCard = ({ coin }) => {
    return (
        <View style={styles.coinCard}>
            <Image source={{ uri: coin.iconUrl }} style={styles.coinIcon} /> <Text>{coin.name}</Text>
        </View>
    );
};

export default CoinCard;
