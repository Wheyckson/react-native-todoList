import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';

type Props = {
    checked: boolean;
    name: string;
    onSelect: () => void;
    onRemove: () => void;
}

export function TaskTodo(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.taskTodo}>
                <BouncyCheckbox
                    onPress={
                        props.onSelect
                    }
                    fillColor={props.checked ? "#8284FA" : "#4EA8DE"} />

                <Text style={props.checked ? styles.stringTextLine : styles.taskName}>{props.name}</Text>
            </View>

            <TouchableOpacity onPress={props.onRemove}>
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>

        </View>
    )
}