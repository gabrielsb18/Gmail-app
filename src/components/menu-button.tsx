import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

export function MenuButtom() {
    return (
        <Pressable>
            <MaterialIcons name = "menu" size={22} color = {colors.white} />
        </Pressable>
    )
}