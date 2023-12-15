import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';

export function Tela4({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>CONTA</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>
        </View>

        { <Image style={styles.imagemPerfil} source={require('../assets/perfil2.png')}/> }

        <View>
            <Text style={styles.textoInput}>Seu nome</Text>
            <TextInput style={styles.input} placeholder='Nome'></TextInput>
            <Text style={styles.textoInput}>Conta do banco</Text>
            <TextInput style={styles.input} placeholder='Conta do banco'></TextInput>
            <Text style={styles.textoInput}>Email</Text>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <Text style={styles.textoInput}>Senha</Text>
            <TextInput style={styles.input} placeholder='Senha'></TextInput>
            <Text style={styles.textoInput}>Número de telefone</Text>
            <TextInput style={styles.input} placeholder='Número de telefone'></TextInput>
            <Text style={styles.textoInput}>Seu endereço</Text>
            <TextInput style={styles.input2} placeholder='Endereço'></TextInput>
        </View>

        <Button color='#0064A3' title='Salvar alterações' onPress={() => navigation.navigate('Tela5')}></Button>
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
    marginLeft: 110,
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
    marginTop: 40,
    marginLeft: 44,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    marginTop: 20,
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
  input2: {
    width: 280,
    height: 50,
    margin: 6,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  textoInput: {
    marginLeft: 7,
    color: '#0064A3',
  },
})