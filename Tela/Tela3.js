import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';


export function Tela3({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <View style={styles.fullImages}>
            { <Image style={styles.imagem} source={require('../assets/tresBarras.png')}/> }
            { <Image style={styles.imagem2} source={require('../assets/configuracao.png')}/> }
          </View>
          
            { <Image style={styles.imagem3} source={require('../assets/perfil.png')}/> }
            <Text style={styles.textoImage}>SEU NOME</Text>
            <Text style={styles.textoImage2}>seu-email@email.com</Text>

            <View style={styles.caixaBranca}>
                <Text style={styles.textoCaixaSaldo}>SALDO</Text>
                <Text style={styles.textoCaixaValor}>$4,180.20</Text>
                <Button color='#0064A3' title='TRANSFERIR'></Button>
            </View>
      </View>

    <Text style={styles.titulo}>Últimas transações</Text>
    
    <View style={{flexDirection: 'row'}}>

      <View style={styles.circulo}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Lorem Ipsum Company</Text>
              <Text style={{marginLeft: 30}}>$2,030.80</Text>
          </View>
              <Text style={{fontSize: 12}}>Received payment</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Auctor Elit Ltd.</Text>
              <Text style={{marginLeft: 92}}>-$450.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Transfer money</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>
      <View style={styles.circulo}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Lectus Sit Amet est</Text>
              <Text style={{marginLeft: 60}}>-$239.50</Text>
          </View>
              <Text style={{fontSize: 12}}>Gas &electricity payment</Text>
        </View>
    </View> 

    <View style={{flexDirection: 'row'}}>

      <View style={styles.circulo}></View>
        <View style={{marginLeft: 40, top: 17}}>
          <View style={{flexDirection:'row'}}>
              <Text>Congue Quisque</Text>
              <Text style={{marginLeft: 69}}>-$1,500.00</Text>
          </View>
              <Text style={{fontSize: 12}}>Withdraw money</Text>
        </View>
    </View> 

      <View>
        <Text style={styles.textoMais} onPress={() => navigation.navigate('Tela4')}>mais</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#0064A3',
    height: 360,
    width: '100%',
  },
  fullImages: {
    flexDirection: 'row',
  },
  imagem: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 40,
  },
  imagem2: {
    width: 25,
    height: 25,
    marginLeft: 270,
    marginTop: 36,
  },
  imagem3: {
    width: 110,
    height: 110,
  },
  caixaBranca: {
    width: 220,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  textoCaixaSaldo: {
    textAlign: 'center',
    color: '#3dbada',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
  },
  textoCaixaValor: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#056199',
    marginBottom: 5,
  },
  textoImage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 10,
  },
  textoImage2: {
    color: 'white',
    marginBottom: 10,
    fontSize: 16,
  },
  titulo: {
    fontSize: 17,
    color: '#3dbada',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
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
  textoMais: {
    color: '#3dbada',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
    marginLeft: 274,
  },
})