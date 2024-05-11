import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./CoinCardStyles";
import { ChevronUp, ChevronDown } from "../../../assets/icons";
import { theme } from "../../theme";

const CoinCard = ({ coin }) => {
    return (
        <View style={styles.coinCard}>
            <View style={styles.coinCardHeader}>
                <Image source={{ uri: coin.iconUrl }} style={styles.coinIcon} />
                <View style={styles.coinCardName}>
                    <Text style={styles.coinNameAbb}>{coin.abbreviation}</Text>
                    <Text style={styles.coinName}>{coin.name}</Text>
                </View>
            </View>
            <View style={styles.coinCardBottom}>
                <Text style={styles.coinValue}>${coin.value}</Text>
                <View style={styles.coinChange}>
                    {coin.changePercentage < 0 ? <ChevronDown color={theme.colors.error} /> : <ChevronUp color={theme.colors.success} />}
                    <Text style={[styles.coinChangePercentage, { color: coin.changePercentage < 0 ? theme.colors.error : theme.colors.success }]}>
                        {coin.changePercentage}%
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CoinCard;
