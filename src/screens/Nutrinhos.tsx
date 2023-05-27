import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

import Container from '../components/Container';
import Nutrinho from '../components/Nutrinho';
import Header from '../components/Header';

import global from '../styles/global';
import theme from '../styles/theme';

export default function Nutrinhos({ navigation }) {
    
    const nutrinhos: Array<NutrinhoProps> = [
        { 
            nome: 'Tomatelo', 
            desc: 'Hahaha, eu sou o Nutrinho Tomatelo, muitos pensam que eu sou um vegetal, mas na verdade sou uma fruta, minha missão é te ajudar a enxergar melhor e vencer todos obstáculos. Vamos?',
            image: 'tomatelo'
        },
        { 
            nome: 'Laranjita', 
            desc: 'Oi meus pimpolhos, eu sou a Nutrinha Laranjita e eu vou ajudar sua imunidade a ficar fortinha, minha maior ameaça é a gripe, simbora combate-la juntos?',
            image: 'laranjita'
        },
        { 
            nome: 'Bananoide', 
            desc: 'Iai galera, eu sou o Nutrinho Bananoide, morô? Vou ajudar vocês a ficar com muita força e energia durante o dia todo, quem vem comigo nessa?',
            image: 'bananoide'
        },
        { 
            nome: 'Moranguita', 
            desc: 'Olá criançada, tudo bom com vocês? Eu sou a Nutrinha Moranguita e vou impedir que vocês fiquem com feridinhas inflamadas,bora lá, xô inflamação.',
            image: 'moranguita'
        },
        { 
            nome: 'Limãozord', 
            desc: 'Oi crianças, eu sou o Nutrinho Limãozord, eu vou combater muitas bactérias que tentarão atacar vocês, mas confiem em mim para ajudá-los. Venham comigo porque juntos somos mais fortes!',
            image: 'limaozord'
        },
        { 
            nome: 'Alhinho', 
            desc: 'Oi eu sou Nutrinho Alhinho, nem sou fruta nem vegetal, sou apenas parte de uma plantinha, também me chamam de dentinho e vou te ajudar a ter um bom crescimento!',
            image: 'alhinho'
        },
        { 
            nome: 'Pimentel', 
            desc: 'Faaaaaaaala Nutrinheiros, eu sou o Nutrinho Pimentel, da família pimentão, eu vou ajudar seus ossinhos a ficarem bem firmes e ajudar no crescimento dos músculos de vocês. Vamo junto sô?',
            image: 'pimentel'
        },
    ]

    return(
        <ImageBackground source={ require('../assets/images/nutrinhos-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Conheça os Nutrinhos seus amiguinhos'>
                <TouchableOpacity style={{marginBottom: 20}} onPress={() => navigation.navigate('AreaCriancas')}>
                    <Icon name="arrowleft"  size={60} color='black' />
                </TouchableOpacity>
            </Header>
            <Container>
                <ScrollView style={[global.content, { overflow: 'hidden'}]} contentContainerStyle={{ alignItems: 'center' }}>
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