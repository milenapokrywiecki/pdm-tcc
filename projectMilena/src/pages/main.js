import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button, Platform
} from 'react-native';



export default class Main extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../images/logo.png')}
                            style={styles.logo}></Image>


                        <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder='insira seu email' ></TextInput>

                        <TextInput secureTextEntry={true} style={styles.input} underlineColorAndroid='transparent' placeholder='insira sua senha' ></TextInput>

                        <Text style={styles.esqueceuSenha} >Esqueceu sua senha?</Text>
                
                        <TouchableOpacity>
                            <Text style={styles.but} onPress={() => {
                                this.props.navigation.navigate('Recuperar')
                            }} > Recuperar Acesso </Text>
                        </TouchableOpacity>
                  
                        <TouchableOpacity style={styles.botao}>
                            <Button
                            onPress={() => {
                                this.props.navigation.navigate('Cozinha')}}
                                title="Login"
                                color='#ADD8E6' />
                        </TouchableOpacity>

                        <Text style={styles.esqueceuSenha}>É novo por aqui?</Text>
                        <TouchableOpacity>
                            <Text style={styles.but} onPress={() => {
                                this.props.navigation.navigate('Cadastro')
                            }} >Cadastre-se</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    logo: {
        alignItems: 'center',
        marginTop: 25
    },
    input: {
        width: 280,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#F0F8FF',
        marginTop: 30,
        margin: 30,
        marginBottom: 10
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90
    },
    esqueceuSenha: {
        color: '#104E8B',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingRight: 15,
        textAlign: 'center',
        marginTop: 20
    },
    but: {
        color: '#104E8B',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingRight: 15,
        textAlign: 'center'
    },
    fundo: {
        backgroundColor: '#87CEEB',
        marginTop: 50,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    }

})