import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

export default function GoalInput({ onNewGoal, visible, onCancel }) {
    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText) {
        setNewGoal(enteredText);
    }

    function onPressHandler() {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("");
    }


    return (
        <Modal
            visible={visible}
            animationType='slice'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={textChangeHandler}
                    style={styles.textInput}
                    value={newGoal}
                    placeholder='Input your Goal: ' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={() => onCancel()} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={onPressHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    button: {
        width: '40%',
        margin: 10,

    },
    textInput: {
        borderColor: "#CCCCCC",
        borderWidth: 1,
        width: "80%",
        padding: 10
    }
})

