import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export function Tela1({navigation}) {
    return (
<View style={styles.container}>

    <View style={styles.fundo}>
        <Text style={styles.textoImage}>Bem-vindo!</Text>
        { <Image style={styles.imagem} source={require('../assets/banco.png')}/> }
    </View>

      <TextInput style={styles.input} placeholder='Digite seu Email'></TextInput>
      <TextInput style={styles.input} placeholder='Digite sua Senha'></TextInput>
      <StatusBar style="auto" />
      <View>
        <Button color='#0064A3' title='LOGAR' onPress={() => navigation.navigate('Tela2')}></Button>
      </View>

  <View> 
      <Text style={styles.link}onPress={() => { 
            navigation.navigate('Tela9')
          }}>  Esqueceu sua senha? 
      </Text> 
        
    <Text> 
      Novo em aplicativos de banco?{' '} 
    <Text 
        style={styles.link2} onPress={() => { 
          navigation.navigate('Tela2')
        }}> 
        Inscrever-se 
    </Text> 
  </Text>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 215,
      textAlign: 'center',
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#A9A9A9',
      padding: 10,
      borderRadius: 6,
    },
    link: {
      textAlign: 'center',
      color: '#0065A3',
      textDecorationLine: 'underline',
      padding: 6,
    },
    link2: {
      color: '#0065A3',
      textDecorationLine: 'underline',
    },
    fundo: {
        backgroundColor: '#0064A3',
        width: '100%',
        alignItems: 'center',
    },
    textoImage: {
        fontSize: 32,
        marginBottom: 30,
        marginTop: 30, //Definindo a margen superior
        color: '#FFFFFF',
        textAlign: 'center',
    },
    imagem: {
      width: 250,
      height: 250,
      marginBottom: 30, // Definindo a margen inferior 
    },
  });