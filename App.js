import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      isEnabled: false
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg });
  }

  render() {
    const { mensagem } = this.state

    return (
      <ImageBackground style={styles.container} source={{uri:'https://mfiles.alphacoders.com/875/thumb-875592.png'}}  resizeMode="cover">
        {Platform.OS === 'android' ? (
          <Text>Android</Text>
        ) : (
          <Text style={styles.text}>InuYasga</Text>
        )}
        <Text style={[styles.text, styles.textColor]}>Logue com Shippo</Text>
        <TextInput
          placeholder='Login'
          style={styles.textInput}
          onChangeText={this.mudouMensagem}
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
        />
       

        <TouchableOpacity onPress={() => alert('Esqueci minha senha')} style={styles.touchableopacity}>
        <Text>Esqueci minha senha</Text>
        </TouchableOpacity>

        <Switch value={this.state.isEnabled}
        onValueChange={() => this.setState({isEnabled: !this.state.isEnabled})}       thumbColor={{false: '#F4A460', true: '#F4A460'}}
        trackColor={{false: '#F5DEB3', true: 'F5DEB3'}}
        >>
        </Switch>
        {this.state.isEnabled ? (
        <ActivityIndicator color='#FFF8DC' size='large' style={{marginTop:10}}/>
         ) : <></> }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor: {
    color: 'black'
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200
  },
  touchableopacity:{
    backgroundColor: '#CD853F',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1 

  },
});
