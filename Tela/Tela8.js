import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export function Tela8({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem3} source={require('../assets/setaEsquerda.png')}/> }
            <Text style={styles.textoImagem}>TRANSAÇÃO</Text>
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>

        <View style= {styles.caixas}>
            <View style={styles.caixaAzul}>
              <Text style={styles.textoCaixa} onPress={() => navigation.navigate('Tela9')}>COMPLETO</Text>
            </View>

            <View style={styles.caixaCinza}>
              <Text style={styles.textoCaixa}>EM PROGRESSO</Text>
            </View>
        </View>

      </View>

      <View style={{flexDirection: 'row'}}>

      <View style={styles.circulo}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Lorem Ipsum Company</Text>
              <Text style={{marginLeft: 50}}>$2,030.80</Text>
          </View>
              <Text style={{fontSize: 12}}>Received payment</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo2}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Auctor Elit Ltd.</Text>
              <Text style={{marginLeft: 110}}>-$450.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Transfer money</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo3}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Lectus Sit Amet est</Text>
              <Text style={{marginLeft: 78}}>-$239.50</Text>
          </View>
              <Text style={{fontSize: 12}}>Gas &electricity payment</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>

      <View style={styles.circulo4}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Congue Quisque</Text>
              <Text style={{marginLeft: 86}}>-$1,500.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Withdraw money</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo5}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Auctor Elit Ltd.</Text>
              <Text style={{marginLeft: 110}}>-$450.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Transfer money</Text>
        </View>
    </View>

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo6}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Lectus Sit Amet est</Text>
              <Text style={{marginLeft: 78}}>-$239.50</Text>
          </View>
              <Text style={{fontSize: 12}}>Gas &electricity payment</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>

      <View style={styles.circulo7}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Congue Quisque</Text>
              <Text style={{marginLeft: 86}}>-$1,500.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Withdraw money</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo8}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Auctor Elit Ltd.</Text>
              <Text style={{marginLeft: 110}}>-$450.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Transfer money</Text>
        </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
header: {
    backgroundColor: '#0064A3',
      width: '100%',
      height: 160,
      marginBottom: 20,
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
      caixaAzul: {
        width: 160,
        height: 50,
        borderRadius: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        backgroundColor: '#29cbf4',
        marginRight: 5,
      },
      caixaCinza: {
        width: 160,
        height: 50,
        borderRadius: 18,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#6d737f',
        marginLeft: 5,
      },
      caixas: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
      },
      textoCaixa: {
        color: '#FFFFFF',
        textAlign: 'center',
      },
      circulo:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#0064A3',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo2:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#1cc0f4',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo3:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#008784',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo4:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#fead00',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo5:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#0064A3',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo6:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#008784',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo7:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#ff4a42',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
      circulo8:{
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#1cc0f4',
        flexDirection: 'row',
        left: 30,
        marginTop: 20,
      },
})