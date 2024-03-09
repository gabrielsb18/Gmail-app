import { View, TextInput, TextInputProps } from "react-native";
import { ReactNode } from "react";
import { colors } from "@/styles/colors";

type InputProps = {
    children: ReactNode
}

export function Input({children}: InputProps){
    return (
    <View className = "w-full h14 bg-gray-700 rounded-lg p-4 flex-row items-center gap-4">
        {children}
    </View>
    )
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 font-normal text-base text-white"
      placeholderTextColor={colors.gray[400]}
      cursorColor = {colors.blue[600]}
      {...rest} 
      />
  );
}

Input.Field = InputField

export { Input };