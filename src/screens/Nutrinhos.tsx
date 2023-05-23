import { ImageBackground, ScrollView } from 'react-native'

import Container from '../components/Container';
import Nutrinho from '../components/Nutrinho';
import Header from '../components/Header';

import global from '../styles/global';

export default function Nutrinhos() {
    
    const nutrinhos: Array<NutrinhoProps> = [
        { 
            nome: 'Tomatelo', 
            desc: 'Hahaha, eu sou o Nutrinho Tomatelo, muitos pensam que eu sou um vegetal, mas na verdade sou uma fruta, minha missão é te ajudar a enxergar melhor e vencer todos obstáculos. Vamos?',
            image: 'tomatelo'
        }
    ]

    return(
        <ImageBackground source={ require('../assets/images/nutrinhos-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Conheça os Nutrinhos seus amiguinhos'/>
            <Container>
                <ScrollView style={global.content} contentContainerStyle={{ justifyContent: 'center' }}>
                    {
                        nutrinhos.map((nutrinho, index) => {
                            return <Nutrinho key={index} nome={nutrinho.nome} desc={nutrinho.desc} image={nutrinho.image}></Nutrinho>
                        })
                    }
                </ScrollView>
            </Container>
        </ImageBackground>
    );
}