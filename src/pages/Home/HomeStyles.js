// styles.js

import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        height: "100%",
    },
    headerBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 48,
        backgroundColor: theme.colors.primary,
        width: "228px",
        textAlign: "center",
    },

    mainCardWrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 40,
    },

    coinsSection: {
        margin: "18px",
        display: "flex",
    },
    coinsSectionWrapper: {
        display: "flex",
        marginTop: 8,
    },
    coinsSectionTitle: {
        fontWeight: "500",
        fontSize: 16,
    },
    coinCardWrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
    },
    viewMore: {
        marginTop: "20px",
        textAlign: "center",
        fontWeight: "bold",
    },
});
