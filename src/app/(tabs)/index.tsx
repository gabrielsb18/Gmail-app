import { Avatar } from '@/components/avatar'
import { Input } from '@/components/input'
import { MenuButtom } from '@/components/menu-button'
import { Text, View } from 'react-native'

export default function (){ 
    return <View className = "flex-1 bg-gray-900 pt-14 p-4">
        <Input>
            <MenuButtom/>
                <Input.Field placeholder = "Pesquisar no e-mail" />
            <Avatar source = {{uri: "http://github.com/gabrielsb18.png"}}
            size = "small"/>
        </Input>
    </View>
}