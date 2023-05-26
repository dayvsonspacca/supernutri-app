import { View, ImageBackground, TouchableOpacity, Text, Image } from 'react-native'

import Container from '../components/Container';
import Header from '../components/Header';

import global from '../styles/global';
import theme from '../styles/theme';
import crianca from '../styles/crianca';

export default function AreaCriancas({ navigation }) {
    return(
        <ImageBackground source={ require('../assets/images/area-criancas-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Olá Enzo, me chamo Tomatelo vamos nos divertir?!'>
                <Image source={require('../assets/images/nutrinhos/tomatelo.png')}/>
            </Header>
            <Container>
                <View style={[global.content, { alignItems: 'center', height: '90%' }]}>

                    <TouchableOpacity style={ crianca.btn } onPress={() => navigation.navigate('Jogos')}>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>JOGOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => navigation.navigate('Customizar')}>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>CUSTOMIZAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => navigation.navigate('Quiz')}>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>QUIZ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => navigation.navigate('Nutrinhos')}>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>NUTRINHOS</Text>
                    </TouchableOpacity>

                    <View></View>

                </View>
            </Container>
        </ImageBackground>
    );
}