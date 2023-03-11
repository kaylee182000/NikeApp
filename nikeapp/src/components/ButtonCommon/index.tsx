import React, { EventHandler } from "react";
import { View,Text,Pressable, } from "react-native";

import styles from "./styles";

interface ButtonProps {
    buttonText: string;
    onPressButton?: () => void
}

const ButtonCommon = ({buttonText,onPressButton} : ButtonProps) => {
    return (
        <Pressable onPress={onPressButton} style={[styles.button,{width: "90%" }]}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    )
}

export default ButtonCommon