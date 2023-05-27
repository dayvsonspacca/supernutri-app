import { View, ImageBackground, TouchableOpacity, Text, Image } from 'react-native'
import SvgUri from 'react-native-svg';

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
                        <ImageBackground source={ require('../assets/images/bg-jogos.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>JOGOS</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => {}}>
                        <ImageBackground source={ require('../assets/images/bg-customizar.png') } resizeMode='cover' style={{ width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>CUSTOMIZAR</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => {}}>
                        <ImageBackground source={ require('../assets/images/bg-quiz.png') } resizeMode='cover' style={{ width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>QUIZ</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn } onPress={() => navigation.navigate('Nutrinhos')}>
                        <ImageBackground source={ require('../assets/images/bg-nutrinhos.png') } resizeMode='cover' style={{ width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>NUTRINHOS</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                    <View style={{position: 'relative'}}>
                        <Image source={require('../assets/images/nutrinhos/bananoide.png')}    style={{ position: 'relative', zIndex: 2, bottom: 0, right: '30%'}}/> 
                    </View>

                </View>
            </Container>
        </ImageBackground>
    );
}