import "@/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Slot} from "expo-router"

export default function layout(){
    return(
        <GestureHandlerRootView style = {{ flex: 1 }}>
            <Slot/>
        </GestureHandlerRootView>
    )
}