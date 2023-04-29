import { View, ImageBackground, TouchableOpacity, Text, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


import Container from '../components/Container';
import Form from '../components/Form';
import Header from '../components/Header';

import global from '../styles/global';
import theme from '../styles/theme';
import form from '../styles/form';

export default function CadastroPequeno() {
    return(
        <ImageBackground source={ require('../assets/images/criar-perfis-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
            <Header title='CADASTRE SEU PEQUENO'/>
            <Container>
                <Form size="100%">
                    <View style={[form.inputContainer, {marginTop: 30}]}>
                        <Text style={global.label}>Nome</Text>
                        <TextInput keyboardType="default" style={form.input}></TextInput>
                    </View>
                    <View style={form.inputContainer}>
                        <Text style={global.label}>Idade</Text>
                        <TextInput style={form.input}></TextInput>
                    </View>
                    <View style={form.inputContainer}>
                        <Text style={global.label}>Peso</Text>
                        <TextInput style={form.input}></TextInput>
                    </View>
                    <View style={form.inputContainer}>
                        <Text style={global.label}>Altura</Text>
                        <TextInput style={form.input}></TextInput>
                    </View>

                    <Text style={global.label}>Seu pequeno tem alguma compicação de saúde?</Text>

                    <View style={global.line} />

                    <TouchableOpacity style={global.btn}>
                        <Text style={{ fontSize: theme.font.mdl }}>Cadastrar</Text>
                    </TouchableOpacity>

                    <Text style={[form.link, { marginTop: 10 }]}>Por que pedimos esses dados?</Text>

                    <View style={{position: 'relative'}}>
                        <Image source={require('../assets/images/bananoide.png')} style={{ position: 'relative', zIndex: 2, right: 100, bottom: 100}}/> 
                        <Image source={require('../assets/images/laranjita.png')} style={{ position: 'relative', zIndex: 2, left: 100,  bottom: 100}}/> 
                    </View>
                </Form>
            </Container>
        </ImageBackground>
    );
}