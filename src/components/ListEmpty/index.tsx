import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function ListEmpty() {
    return (
        <View style={styles.container}>
            <Image style={styles.imgEmpty} source={require('../../../assets/Clipboard.png')} />

            <Text style={styles.labelLight}> Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.labelDark}> Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}