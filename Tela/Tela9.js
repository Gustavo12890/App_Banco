import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export function Tela9({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>PAGAMENTO</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>

          <View style={styles.perfil}>
                { <Image style={styles.imagemPerfil} source={require('../assets/perfil3.png')}/> }
                <View style={styles.viewPerfil}>
                    <Text style={styles.textoPerfil}>SALDO</Text>
                    <Text style={styles.valorPerfil}>$4,180.20</Text>
                </View>
          </View>
      </View>

    <View style={styles.viewCirculos}>
      <View style={styles.circuloAgua}>
        { <Image style={styles.imagemGota} source={require('../assets/gotaBranca.png')}/> }
      </View>

      <View style={styles.circuloLampada}>
        { <Image style={styles.imagemLampada} source={require('../assets/lampada.png')}/> }
      </View>
      
      <View style={styles.circuloGas}>
        { <Image style={styles.imagemGas} source={require('../assets/fogo.png')}/> }
      </View>
    </View>

    {/* FINAL DA VIEW */}

    <View style={styles.viewCirculos}>
      <View style={styles.circuloBolsa}>
        { <Image style={styles.imagemBolsa} source={require('../assets/bolsa.png')}/> }
      </View>

      <View style={styles.circuloCelular}>
        { <Image style={styles.imagemCelular} source={require('../assets/iphone.png')}/> }
      </View>
      
      <View style={styles.circuloCartao}>
        { <Image style={styles.imagemCartao} source={require('../assets/cartao.png')}/> }
      </View>
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
          height: 200,
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
        imagemPerfil: {
            width: 80,
            height: 80,
        },
        perfil: {
            flexDirection: 'row',
            marginLeft: 40,
            marginTop: 30,
        },
        viewPerfil: {
            marginLeft: 20,
            marginTop: 10,
        },
        textoPerfil: {
            color: '#258bb7',
            fontWeight: 'bold',
            fontSize: 16,
        },
        valorPerfil: {
            fontWeight: '500',
            color: '#FFFFFF',
            fontSize: 22,
        },
        viewCirculos: {
            flexDirection: 'row',
            marginTop: 20,
        },
        circuloAgua: {
            width: 90,
            height: 90,
            backgroundColor: '#24c1ea',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
        },
        imagemGota: {
            width: 50,
            height: 50,
        },
        circuloLampada: {
            width: 90,
            height: 90,
            backgroundColor: '#ff9f00',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imagemLampada: {
            width: 50,
            height: 50,
        },
        circuloGas: {
            width: 90,
            height: 90,
            backgroundColor: '#fd473b',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
        },
        imagemGas: {
            width: 50,
            height: 50,
        },
        circuloBolsa: {
            width: 90,
            height: 90,
            backgroundColor: '#ed557b',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
        },
        imagemBolsa: {
            width: 50,
            height: 50,
        },
        circuloCelular: {
            width: 90,
            height: 90,
            backgroundColor: '#13467b',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imagemCelular: {
            width: 50,
            height: 50,
        },
        circuloCartao: {
            width: 90,
            height: 90,
            backgroundColor: '#0d8364',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
        },
        imagemCartao: {
            width: 50,
            height: 50,
        },
})