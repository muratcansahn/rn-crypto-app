export const screenOptions = {
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        left: 36,
        right: 36,
        elevation: 0,
        backgroundColor: "#fff",
        borderRadius: 100,
        height: 68,
        borderTopColor: "transparent",
    },
};
export const formatNumber = (number) => {
    // Convert the number to a string to manipulate it
    let numberStr = number.toString();
    let newNumber = "";

    // Add a dot every three digits from the end
    for (let i = numberStr.length - 1; i >= 0; i--) {
        newNumber = numberStr[i] + newNumber;
        if ((numberStr.length - i) % 3 === 0 && i !== 0) {
            newNumber = "." + newNumber;
        }
    }

    return newNumber;
};

