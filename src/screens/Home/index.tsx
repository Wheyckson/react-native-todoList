import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { Header } from '../../components/Header';
import { ListEmpty } from '../../components/ListEmpty';
import { TaskTodo } from '../../components/TaskTodo';
import { styles } from './styles';

interface ITodo {
    id: any;
    name: string;
    checked: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITodo[]>([])
    const [taskName, setTaskName] = useState('')

    const countAllTodo = tasks.length

    const checkedTodo = tasks.reduce(
        (prevValue, currentValue) => prevValue + Number(currentValue.checked),
        0
    );

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, {
            id: uuid.v4(),
            name: taskName,
            checked: false,
        }])
        setTaskName('');
    }

    function changeCheckedTask(task: ITodo) {
        const todoListWithChangeChecked = tasks.map(todo => {
            if (todo.id === task.id) {
                todo.checked = !todo.checked
                return todo
            }

            return todo
        }).sort((a, b) => Number(a.checked) < Number(b.checked) ? - 1 : Number(a.checked) > Number(b.checked) ? 1 : 0);

        setTasks(todoListWithChangeChecked)
    }

    function handleTaskRemove(task: ITodo) {
        console.log(task.name);
        return Alert.alert('Remover', `Remover a tarefa: ${task.name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(todo => todo.id !== task.id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <>
            <Header />

            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        onChangeText={setTaskName}
                        value={taskName}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Text style={styles.buttonText}> + </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoChecked}>
                        <Text style={styles.checkCreated}>Criadas </Text>
                        <Text style={styles.counterCheck}>{countAllTodo}</Text>
                    </View>

                    <View style={styles.infoChecked}>
                        <Text style={styles.checkFinished}>Concluídas </Text>
                        <Text style={styles.counterCheck}> {checkedTodo}</Text>
                    </View>
                </View >

                <View style={styles.separator} />

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskTodo
                            key={item.id}
                            name={item.name}
                            checked={item.checked}
                            onSelect={() => changeCheckedTask(item)}
                            onRemove={() => handleTaskRemove(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <ListEmpty />
                    )}
                />

            </View>
        </>
    )
}
