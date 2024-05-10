import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    coinCard: {
        width: "168px",
        height: "114px",
        backgroundColor: "#FFFFFF",
        padding: "8px",
        borderRadius: "12px",
        justifyContent: "space-between",
    },
    coinCardHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    coinIcon: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    },
    coinNameAbb: {
        fontSize: 16,
        fontWeight: "600",
        color: "#141B29",
    },
    coinName: {
        color: "#70747C",
        marginTop: "4px",
    },
    coinCardName: {
        marginLeft: "16px",
    },
    coinCardBottom: {
        flexDirection: "row",
        paddingBottom: "8px",
        justifyContent: "space-between",
    },
    coinValue: {
        fontSize: 16,
        fontWeight: "600",
        color: "#141B29",
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