import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';


export function Tela2({navigation}) {

  const [isSelected, setSelection] = useState(false);

  return (
    
    <View style={styles.container}>
    
      <View style={styles.header}>  
        <View style={styles.fundo2}>
          { <Image style={styles.imagem} source={require('../assets/banco.png')}/> }
          { <Image style={styles.imagem2} source={require('../assets/url.png')}/> }
          { <Image style={styles.imagem3} source={require('../assets/celular.png')}/> }
        </View>
            <View>
              <Text style={styles.textoImage}>Conete-se à sua conta bancária</Text>
            </View>
      </View>
      
      <View> 
        <TextInput style={styles.input} placeholder='Nome'></TextInput>
        <TextInput style={styles.input} placeholder='Conta do banco'></TextInput>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <TextInput style={styles.input} placeholder='Senha'></TextInput>
        <Text style={styles.textoBottom}>Use 6 caracteres com uma mistura de letras, números e símbolos.</Text>
      </View>
      
      

      <View style={styles.checkFlex}>
        <Text style={styles.textoCheck}>Ao se inscrever, você concorda com o Termo de Uso e Política de Privacidade do Banco.</Text>
      </View>

      <View style={styles.viewButtons}>
        <Button color='#0064A3' title='Inscreva-se' onPress={() => navigation.navigate('Tela3')}></Button>
          <Text style={styles.textoButtons}>ou</Text>
        <Button title='Cancelar' onPress={() => navigation.navigate('Tela1')}></Button>
      </View>

    <View style={styles.texto}>
       <Text>Já se inscreveu? <Text style={styles.link} onPress={() => { Linking.openURL('#');}}> Conecte-se</Text></Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#0064A3',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  fundo2: {
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  imagem: {
    width: 90,
    height: 90,
    marginTop: 20,
  },
  imagem2: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
  imagem3: {
    width: 70,
    height: 70,
    marginTop: 30,
  },
  textoImage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    width: 280,
    height: 50,
    margin: 6,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    borderRadius: 6,
  },
  textoCheck: { //Texto da checkBox
    fontSize: 13,
    marginLeft: 10,
    width: 240,
  },
  textoBottom: {  // texto abaixo do Input
    color: '#76aca9',
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 20,
    width: 280,
  },
  viewButtons: { //Botões da tela
    flexDirection: 'row',
    marginTop: 20,
  },
  textoButtons:{
    marginLeft: 12,
    marginRight: 12,
    marginTop: 4,
  },
  link: {
    color: '#0065A3',
      textDecorationLine: 'underline',
  },
  texto: {
    marginTop: 30,
  },
})