import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';


export function Tela7({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>TRANSAÇÃO</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>
      </View>

    <View style={{flexDirection: 'row'}}> 
      { <Image style={styles.imagemDinheiro} source={require('../assets/dinheiro.png')}/> }
      { <Image style={styles.imagemSetas} source={require('../assets/duasSetas.png')}/> }
    </View>

    <View>
        <Text style={styles.textoInput}>Da conta bancária</Text>
        <TextInput style={styles.input} placeholder='00 123 456'></TextInput>

        <Text style={styles.textoInput}>Para conta bancária</Text>
        <TextInput style={styles.input} placeholder='Selecionar'></TextInput>
        
        <Text style={styles.textoInput}>Quantidade</Text>
        <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputCifrao} placeholder='$'></TextInput>
            <TextInput style={styles.inputValor} placeholder='2,195.00'></TextInput>
        </View>

        <Text style={styles.textoInput}>Mensagens</Text>
        <TextInput style={styles.input}></TextInput>
    </View>    

    <View style={styles.viewButtons}>
        <Button color='#0064A3' title='ENVIAR' onPress={() => navigation.navigate('Tela8')}></Button>
          <Text style={styles.textoButtons}>ou</Text>
        <Button title='CANCELAR' onPress={() => navigation.navigate('Tela6')}></Button>
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
  backgroundColor: '#0064A3',
    width: '100%',
    height: 80,
},
fullImages: {
  flexDirection: 'row',
},
imagem: {
  width: 25,
  height: 25,
  marginLeft: 20,
  marginTop: 45,
},
imagem: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 45,
  },
  imagem2: {
    width: 25,
    height: 25,
    marginLeft: 96,
    marginTop: 40,
  },
  imagem3: {
    width: 24,
    height: 24,
    marginTop: 43,
    marginLeft: 40,
  },
  textoImagem: {
    color: 'white',
    marginTop: 43,
    marginLeft: 33,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imagemDinheiro: {
    width: 170,
    height: 170,
  },
  imagemSetas: {
    width: 100,
    height: 100,
    marginTop: 40,
    marginLeft: 10,
  },
  textoInput: {
    marginLeft: 6,
    marginTop: 5,
    color: '#0064A3',
  },
  input: {
    width: 280,
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    borderRadius: 6,
  },
  inputCifrao: {
    width: 60,
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    borderRadius: 6,
  },
  inputValor: {
    width: 208,
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    borderRadius: 6,
    textAlign: 'right',
  },
  viewButtons: { //Botões da tela
    flexDirection: 'row',
    marginTop: 40,
  },
  textoButtons:{
    marginLeft: 12,
    marginRight: 12,
    marginTop: 4,
  },
})