import { View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


import Container from '../components/Container';
import Header from '../components/Header';

import global from '../styles/global';
import theme from '../styles/theme';
import crianca from '../styles/crianca';

export default function AreaCriancas() {
    return(
        <ImageBackground source={ require('../assets/images/area-criancas-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='Olá Enzo, me chamo Tomatelo vamos nos divertir!!'/>
            <Container>
                <View style={global.content}>
                    <TouchableOpacity style={ crianca.btn }>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>JOGOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn }>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>CUSTOMIZAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn }>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>QUIZ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ crianca.btn }>
                        <Text style={{fontSize: theme.font.md, fontWeight: 'bold'}}>NUTRINHOS</Text>
                    </TouchableOpacity>

                    <View></View>

                </View>
            </Container>
        </ImageBackground>
    );
}