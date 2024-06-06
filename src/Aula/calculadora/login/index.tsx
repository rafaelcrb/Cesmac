import { View, Text, ImageBackground, StyleSheet, Alert } from 'react-native';
import bg from './../../../assets/imgs/bg.png';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

export interface LoginScreenProps {}

export default function LoginScreen(props: LoginScreenProps) {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>APP</Text>

        {/* EMAIL */}
        <Input
          placeholder="Digite seu email"
          inputContainerStyle={styles.inputContainer}
          inputStyle={{ color: 'white' }}
          placeholderTextColor="lightgrey"
          leftIcon={{ name: 'person', color: 'white' }}
        />

        {/* SENHA */}
        <Input
          placeholder="Digite sua senha"
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor="lightgrey"
          inputStyle={{ color: 'white' }}
          leftIcon={{ name: 'lock', color: 'white' }}
          secureTextEntry={true}
        />

        {/* BOTÃO */}
        <Button title="Logar" buttonStyle={styles.btn} />

        {/* OPÇÃO CADASTRAR */}
        <Text style={styles.cadastrar}>
          Não possui conta?
          {'\n'}
          Clique aqui para se cadastrar
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cadastrar: {
    fontSize: 20,
    color: 'white',
    margin: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  background: { width: '100%', height: '100%' },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'stretch',
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255, 255, 0.3)',
    borderRadius: 30,
    paddingLeft: 10,
    marginBottom: -15,
  },
  btn: { borderRadius: 30, marginTop: 10, marginHorizontal: 10 },
  logo: { color: 'white', fontSize: 50, textAlign: 'center' },
});