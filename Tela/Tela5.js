import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';

export function Tela5({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>ADICIONAR CARTÃO</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>
      </View>

      { <Image style={styles.imagemCartao} source={require('../assets/cartaoCredito.png')}/> }

      <View>
            <Text style={styles.textoInput}>Seu nome</Text>
            <TextInput style={styles.input} placeholder='Nome'></TextInput>

            <Text style={styles.textoInput}>Número do cartão</Text>
            <TextInput style={styles.input} placeholder='Inserir o número do seu cartão'></TextInput>
            
            <Text style={styles.textoInput}>Data expirada</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput  style={styles.inputDia} placeholder='Dia'></TextInput>
                <TextInput  style={styles.inputMes} placeholder='Mês'></TextInput>
                <TextInput  style={styles.inputAno} placeholder='Ano'></TextInput>
              </View>

            <Text style={styles.textoInput}>Senha</Text>
            <TextInput style={styles.input} placeholder='Insira sua senha'></TextInput>

          <Text style={styles.textoInput}>Número de telefone</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput  style={styles.inputDDD} placeholder='+55'></TextInput>
                <TextInput  style={styles.inputNumero}></TextInput>
              </View>
            </View>
              
        <Button color='#0064A3' title='Salvar alterações' onPress={() => navigation.navigate('Tela6')}></Button>

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
imagem2: {
  width: 25,
  height: 25,
  marginLeft: 60,
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
  marginLeft: 20,
  fontSize: 15,
  fontWeight: 'bold',
},
imagemCartao: {
  width: 150,
  height: 150,
  marginTop: 4,
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
inputDia: {
  width: 66,
  height: 40,
  margin: 6,
  borderWidth: 1,
  borderColor: '#A9A9A9',
  padding: 10,
  borderRadius: 6,
},
inputMes: {
  width: 100,
  height: 40,
  margin: 6,
  borderWidth: 1,
  borderColor: '#A9A9A9',
  padding: 10,
  borderRadius: 6,
},
inputAno: {
  width: 90,
  height: 40,
  margin: 6,
  borderWidth: 1,
  borderColor: '#A9A9A9',
  padding: 10,
  borderRadius: 6,
},
inputDDD: {
  width: 80,
  height: 40,
  margin: 6,
  borderWidth: 1,
  borderColor: '#A9A9A9',
  padding: 10,
  borderRadius: 6,
},
inputNumero: {
  width: 187,
  height: 40,
  margin: 6,
  borderWidth: 1,
  borderColor: '#A9A9A9',
  padding: 10,
  borderRadius: 6,
  marginBottom: 20,
},
textoInput: {
  marginLeft: 6,
  marginTop: 5,
  color: '#0064A3',
},
})