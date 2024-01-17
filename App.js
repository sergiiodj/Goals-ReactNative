import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';


export default function App() {

  // Declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
    console.log(newGoal);
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal]);
    console.log(myGoals);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          placeholder='Input your Goal: ' />
        <Button
          title='Add Goal'
          onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {myGoals.map(goal => {
          return (
            <Text>{goal}</Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  }
})

