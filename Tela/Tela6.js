import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export function Tela6({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>TRANSAÇÃO</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>

            <View style={{alignItems: 'center'}}>
                <Text style={styles.titulo}>ESCANEINE ESTE QR CODE</Text>
                { <Image style={styles.imagemCode} source={require('../assets/qrCode.png')}/> }
                <Text style={styles.titulo2}>SEU NOME</Text>
                <Text style={styles.textoPequeno}>seu-email@email.com</Text>
            </View>
      </View>

      <Text style={styles.texto}>Tente Código de Barras</Text>
      { <Image style={styles.imagemCodeBarra} source={require('../assets/codigoBarra.png')}/> }
      <Text style={styles.texto2}>Não consegue ler o QR Code?</Text>
      <Text>Tente a <Text style={styles.link} onPress={() => navigation.navigate('Tela7')}>Conta Bancária</Text></Text>

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
          height: 500,
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
      imagemCode: {
        width: 240,
        height: 240,
      },
      imagemCodeBarra: {
        width: 180,
        height: 35,
      },
      titulo: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 50,
      },
      titulo2: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
      },
      textoPequeno: {
        color: '#FFFFFF',
      },
      texto: {
        marginTop: 20,
        marginBottom: 10,
      },
      texto2: {
        marginTop: 30,
      },
      link: {
        color: '#0065A3',
          textDecorationLine: 'underline',
      },
})