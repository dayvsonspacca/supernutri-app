import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import Container from '../components/Container';
import Header from '../components/Header';
import Jogo from "../components/Jogo";

import jogos from "../styles/jogos";

export default function Jogos({ navigation }) {

    const jogosArr: Array<JogoProps> = [
        { nome: 'Pinte', bloqueado: false},
        { nome: 'Faça seu prato', bloqueado: false},
        { nome: 'Chuva de comida', bloqueado: false},
        { nome: 'Monstro do Fastfood', bloqueado: true},
        { nome: 'Falta de nutrientes', bloqueado: true},
    ];

    return (
        <ImageBackground source={ require('../assets/images/jogos-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Vamos jogar Enzo!'>
                <TouchableOpacity style={{marginBottom: 20, marginRight: 10}} onPress={() => navigation.navigate('AreaCriancas')}>
                    <Icon name="arrowleft"  size={60} color='black' />
                </TouchableOpacity>
            </Header>
            <Container>
                <ScrollView style={jogos.jogosContainer} contentContainerStyle={{alignItems: 'center'}}>
                    {
                        jogosArr.map((jogo, index) => {
                            return <Jogo key={index} nome={jogo.nome} bloqueado={jogo.bloqueado}></Jogo>
                        })
                    }
                </ScrollView>
            </Container>
        </ImageBackground>
    );
}
