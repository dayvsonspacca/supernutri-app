import { View, Text, ImageBackground, ScrollView } from "react-native";

import Container from '../components/Container';
import Header from '../components/Header';
import Jogo from "../components/Jogo";

import jogos from "../styles/jogos";

export default function Jogos() {

    const jogosArr: Array<JogoProps> = [
        { nome: 'Pinte', bloqueado: false},
        { nome: 'Faça seu prato', bloqueado: false},
        { nome: 'Chuva de comida', bloqueado: false},
        { nome: 'Monstro do Fastfood', bloqueado: true},
        { nome: 'Falta de nutrientes', bloqueado: true},
    ];

    return (
        <ImageBackground source={ require('../assets/images/jogos-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Vamos jogar Enzo!'/>
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
