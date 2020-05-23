  
import React, {Fragment} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem:{
        borderWidth: 1,
        margin: 5,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{
        padding: 5,
        fontWeight: 'bold'
    },
    textDone:{
        color: '#aaa',
        textDecorationLine: "line-through",
        fontWeight: 'normal'    }
  });

/**
 *  Un patrón común en React es que un componente devuelva múltiples elementos. 
 *  Los Fragmentos te permiten agrupar una lista de hijos 
 *  sin agregar nodos extra al DOM. 
 */

const TodoList = ({ todos }) => (
  <Fragment>
    {todos.map(
      (todo) =>
        (
          <View style={styles.listItem}  key={todo.Text}>
              <Text style={styles.text}>-</Text>
            <Text
              style={[styles.text, todo.done && styles.textDone]}
             
            >
              {todo.Text}
            </Text>
          </View>
        )
    )}
  </Fragment>
);

export default TodoList;