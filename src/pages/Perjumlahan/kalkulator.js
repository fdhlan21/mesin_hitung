import { View, Text, TouchableNativeFeedback, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { colors, fonts } from '../../utils';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MyGap } from '../../components';

export default function PerjumlahanKalkulator({ navigation }) {
    const Back = () => {
        navigation.goBack();
    };

    const [inputValue, setInputValue] = useState('');
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(new Date().getTime());

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const elapsedTimeInSeconds = Math.floor((currentTime - startTimeRef.current) / 1000);
            setElapsedTime(elapsedTimeInSeconds);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const handlePress = (value) => {
        if (value === 'AC') {
            setInputValue('');
        } else if (value === '=') {
            const correctAnswer = 1 + 4;
            if (parseInt(inputValue) === correctAnswer) {
                Alert.alert("Benar", "Jawaban Anda benar!");
            } else {
                Alert.alert("Salah", "Jawaban Anda salah!");
            }
        } else {
            if (inputValue.length < 8) {
                setInputValue(prevValue => prevValue + value);
            }
        }
    };

    const renderButton = (value, style = {}) => (
        <TouchableOpacity
            onPress={() => handlePress(value)}
            style={[{
                width: 80,
                height: 80,
                margin: 5,
                backgroundColor: value === 'AC' ? '#E7274D' : 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
            }, style]}>
            <Text style={{ fontSize: 20, color: value === 'AC' ? 'white' : 'black', fontFamily: fonts.primary[400] }}>{value}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            {/* HEADER */}
            <View style={{
                padding: 10, backgroundColor: colors.headerperjumlahan, flexDirection: "row",
                borderBottomRightRadius: 20, borderBottomLeftRadius: 20
            }}>
                <TouchableNativeFeedback onPress={Back}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../../assets/tombolkembali.png')} style={{
                            width: 16, height: 16,
                        }} />
                    </View>
                </TouchableNativeFeedback>

                <View style={{ alignSelf: "center", justifyContent: "center", left: 56, top: -8 }}>
                    <Image source={require('../../assets/headerperjumlahan.png')} style={{
                        width: 178,
                        height: 37
                    }} />
                </View>
            </View>
            <ScrollView>
                <View style={{ padding: 10,  }}>

    {/* WAKTU */}
    <View style={{padding:10, flexDirection:"row",  justifyContent:"space-around"}}>
        <View>
            <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:"#829F00"}}>SOAL</Text>
            <Text style={{fontFamily:fonts.primary[400], fontSize:15,  color:"#829F00"}}>1/50</Text>
        </View>

        <View style={{padding:1, backgroundColor:'#CBE558'}}/>

        <View>
            <Text style={{fontFamily:fonts.primary[400], fontSize:15,  color:"#829F00"}}>WAKTU</Text>
            <Text style={{fontFamily:fonts.primary[400], fontSize:15,  color:"#829F00"}}>{formatTime(elapsedTime)}</Text>
        </View>
    </View>

<MyGap jarak={10}/>
                    {/* VIEW LAYAR  */}
                    <View style={{padding:10, backgroundColor:"white", borderRadius:20,
                        alignItems:'center', height:208, marginTop:-10
                    }}>
                    
            
                    <View style={{padding:10,  flexDirection:"row", justifyContent:'center', top:50}}>
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                    <View style={{justifyContent:"center"}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:40,}}>1 + 4 = </Text>
                    </View>
                    {/* ISI */}
                    <TextInput 
                        style={{
                            borderRadius:10, 
                            fontFamily:fonts.primary[600],
                            fontSize:25, 
                            paddingRight:10, 
                            paddingLeft:10, 
                            width:120,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'gray',
                            color:"black"
                        }}
                        value={inputValue}
                        editable={false}
                        maxLength={8} // Batasan panjang input
                        numberOfLines={1} // Hanya satu baris
                    />

                        </View>
                    {/* SOAL */}
                    </View>
                    </View>

                    <View style={{padding:10, flexDirection:"row", justifyContent:"space-around"}}>
                        <View style={{padding:10, backgroundColor:colors.benar, borderRadius:10}}>
                            <Text style={{fontFamily:fonts.primary[600], color:'white', fontSize:15}}>Benar: </Text>
                        </View>

                        <View style={{padding:10, backgroundColor:colors.salah, borderRadius:10}}>
                            <Text style={{fontFamily:fonts.primary[600], color:'white', fontSize:15}}>Salah: </Text>
                        </View>


                    </View>

             
                    {/* KALKULATOR BUTTON */}
                    <View style={{ flexDirection: 'row', top:-7}}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                {renderButton('1')}
                                {renderButton('2')}
                                {renderButton('3')}
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {renderButton('4')}
                                {renderButton('5')}
                                {renderButton('6')}
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {renderButton('7')}
                                {renderButton('8')}
                                {renderButton('9')}
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {renderButton('0', { flex: 2 })}
                                {renderButton('AC')}
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('HasilPerjumlahan')}
                            style={{
                                height: 350,
                                margin: 5,
                                backgroundColor: '#2D86C0',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                flexGrow: 1,
                            }}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: fonts.primary[400] }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
