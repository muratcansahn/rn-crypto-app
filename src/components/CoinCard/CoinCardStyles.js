import { StyleSheet } from 'react-native';
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    coinCard: {
        width: "168px",
        height: "114px",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: 12,
        justifyContent: "space-between",
    },
    coinCardHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    coinIcon: {
        width: "40px",
        height: "40px",
        borderRadius: 50,
    },
    coinNameAbb: {
        fontSize: 16,
        fontWeight: "600",
        color: theme.colors.black,
    },
    coinName: {
        color: theme.colors.graySecondary,
        marginTop: "4px",
    },
    coinCardName: {
        marginLeft: "16px",
    },
    coinCardBottom: {
        flexDirection: "row",
        paddingBottom: "8px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    coinValue: {
        fontSize: 16,
        fontWeight: "600",
        color: theme.colors.black,
    },
    coinChange: {
        flexDirection: "row",
        alignItems: "center",
    },
    coinChangePercentage: {
        marginLeft: "8px",
        fontSize: 16,
        lineHeight: 28,
    },
});