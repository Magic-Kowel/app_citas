import React, {useState} from 'react';


import {
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

const App= () => {
  // definir el state de citas
const [citas, setCitas] = useState([
  {id: "1", paciente: "Hook", propietario:'juan', sintomas: 'no come'},
  {id: "2", paciente: "Redux", propietario:'kowel', sintomas: 'no canta'},
  {id: "3", paciente: "Native", propietario:'Josue', sintomas: 'no baila'}
]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
      Prollecto citas
      </Text>
      <FlatList 
        data={citas}
        renderItem={ ({item}) =>(
          <View>
            <Text>{
              item.paciente
            }</Text>
          </View>
        )
        }
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};
const styles =StyleSheet.create({
  contenedor:{
    backgroundColor: '#AA076B',
    flex:1
  },
  titulo:{
    color:'#FFF',
    marginTop: 40,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
