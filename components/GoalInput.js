import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

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
                <Image
                    source={require("../assets/img/goal.png")}
                    style={styles.goalImg}
                />
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
                            color="#b496dc"
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
        backgroundColor: "#572364",
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
        backgroundColor: "#b496dc",
        borderColor: "#CCCCCC",
        borderRadius: 15,
        width: "80%",
        padding: 10,
    },
    goalImg: {
        width: 120,
        height: 120,
        margin: 20,
    }
})

