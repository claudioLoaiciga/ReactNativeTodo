  
import React, { Fragment } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    margin: 5,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    flex: 1,
    padding: 5,
    fontWeight: "bold",
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal",
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18
  }

});

/**
 *  Un patrón común en React es que un componente devuelva múltiples elementos.
 *  Los Fragmentos te permiten agrupar una lista de hijos
 *  sin agregar nodos extra al DOM.
 */

const TodoList = ({ todos, onUpdate, onDelete }) => (
  <Fragment>
    {todos.map((todo) => (
      <TouchableOpacity
        style={styles.listItem}
        key={todo.text}
        onPress={() => onUpdate({ ...todo, done: !todo.done })}
      >
        <Text style={styles.text}>-</Text>
        <Text style={[styles.Text, todo.done && styles.textDone]}>
          {todo.text}
        </Text>
        <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    ))}
  </Fragment>
);

export default TodoList;