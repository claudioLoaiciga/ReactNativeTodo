import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import TodoList from "TodoList/src/components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "TodoList/src/data/todos";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
  addRow: {
    flexDirection: "row",
    width: "80%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  Text: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
});
//el componete View es como el div de html
//el componete Text es como el spam o el p en html
//el atributo style es el que nos permite realizar los estilos en reat js y native
//en reat native no exite los nombres de clase ni id de elementos. este caso se usa el const styles = StyleSheet.create
//ahi distintas props o propiedades para aplicar a los componentes react native

class MainScreen extends Component {
  constructor(props) {
    //aqui pasamos las propiedades a la clase padre
    super(props);

    this.state = {
      todos: [],
      newTodo: null,
    };
  }
  /*componentDidMount() se invoca inmediatamente
   * después de que un componente se monte
   * (se inserte en el árbol).*/
  componentDidMount = () => {
    this.setState({ todos: getTodos() });
  };

  handleAdd = () => {
    const { todos, newTodo } = this.state;
    const newList = addTodo(todos, { Text: newTodo });
    this.setState({ todos: newList, newTodo: null });
  };
  /**
   * La desestructuración (destructuring)
   * es una forma de extraer valores de un array
   * u objeto en distintas variables.
   */
  render() {
    //Destructuracion
    //Vamos a descoponer los todos
    //con el this.state es como accedemos a nuestro estado
    const { todos, newTodo } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text selectable style={styles.title}>
          ToDo List App
        </Text>
        <View style={styles.addRow}>
          <TextInput
            placeholder="Nuevo ToDo"
            value={newTodo}
            onChangeText={(todo) => this.setState({ newTodo: todo })}
            style={styles.Text}
            autoCapitalize="words"
            clearButtonMode="always"
            returnKeyType="done"
          />
          <Button onPress={this.handleAdd} title="Añadir"/>
        </View>
        <TodoList todos={this.state.todos} />
      </SafeAreaView>
    );
  }
}

export default MainScreen;