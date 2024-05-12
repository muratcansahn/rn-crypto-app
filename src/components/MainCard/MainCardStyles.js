import { StyleSheet } from "react-native";
import { theme } from "../../theme";
export const styles = StyleSheet.create({
    mainCard: {
        width: "286px",
        height: "218px",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "space-between",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: theme.colors.gray,
    },
    cardValue: {
        fontSize: 24,
        fontWeight: "600",
        color: "white",
        lineHeight: 34,
        letterSpacing: "%-1.9",
        marginTop: 8,
    },
    coinChange: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    coinChangePercentage: {
        marginLeft: "8px",
        fontSize: 16,
        lineHeight: 28,
    },
});
