import { View, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


import Container from '../components/Container';
import Crianca from '../components/Crianca';
import Header from '../components/Header';

import crianca from '../styles/crianca';
import global from '../styles/global';
import theme from '../styles/theme';

export default function AreaResponsavel({navigation}) {

    const criancas = [{ id: 1, nome: 'Enzo Valentino', img: '../assets/images/enzo.png'}, { id: 2, nome: 'Maria Sofia', img: '../assets/images/maria.png'}];

    return(
        <ImageBackground source={ require('../assets/images/area-responsavel-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='VEJA SEUS PEQUENOS'/>
            <Container>
                <View style={[global.content, { height: '90%', alignItems: 'center' }]}>
                    {criancas.map((crianca) => (
                        <Crianca navigation={navigation} key={crianca.id} nome={crianca.nome} img={crianca.img}/>
                    ))}
                    <TouchableOpacity style={crianca.container} onPress={() => navigation.navigate('CadastroPequeno')}>
                        <View style={crianca.plusContainer}>
                            <View style={{borderRadius: 50, backgroundColor: theme.colors.primary}}>
                                <Icon name="plus" size={80} color={theme.colors.secondary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>
        </ImageBackground>
    );
}