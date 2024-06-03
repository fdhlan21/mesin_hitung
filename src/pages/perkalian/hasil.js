import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function HasilPerkalian({navigation}) {
    const Back = () => {
        navigation.navigate('Perkalian')
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* HEADER */}
        <View style={{padding:10, backgroundColor:colors.benar, flexDirection:"row",
             borderBottomRightRadius:20, borderBottomLeftRadius:20, height:74
        }}>
            <TouchableNativeFeedback onPress={Back}>
                <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/tombolkembali.png')} style={{
                    width:16, height:16,
                }}/>
                </View>
            </TouchableNativeFeedback>

            <View style={{alignSelf:"center", justifyContent:"center", left:110, top:0}}>
                <Image source={require('../../assets/HASIL.png')} style={{
                    width:85,
                    height:20
                }}/>
            </View>
        </View>
      <ScrollView>
              <View style={{padding:10,}}>
              <View style={{backgroundColor:'white', padding:10, borderRadius:20}}>
                {/* nanti tanggalnya di sesuaiin sama tanggal yang di kerjaakan */}
                <Text style={{fontFamily:fonts.primary[400], fontSize:20, textAlign:"center", color:'#829F00'}}>Senin, 3 Juni 2024</Text>
                <MyGap jarak={22}/>
                <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>WAKTU MULAI :</Text>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>{'\\NANTI MUNCUL WAKTUNYA DISINI\\'}</Text>
                </View>
                <MyGap jarak={11}/>
                <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>WAKTU LAMA MENGERJAKAN :</Text>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>{'\\NANTI MUNCUL WAKTUNYA DISINI\\'}</Text>
                </View>
                <MyGap jarak={11}/>
                <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>JUMLAH SOAL :</Text>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>{'\\NANTI MUNCUL JUMLAH SOAL\\'}</Text>
                </View>
                <MyGap jarak={11}/>
                <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>JUMLAH BENAR :</Text>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>{'\\NANTI MUNCUL JUMLAH BENAR\\'}</Text>
                </View>
                <MyGap jarak={11}/>
                <View>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>JUMLAH SALAH :</Text>
                <Text style={{fontFamily:fonts.primary[400], fontSize:15, color:'#829F00'}}>{'\\NANTI MUNCUL JUMLAH SALAH\\'}</Text>
                </View>
                <MyGap jarak={24}/>
                <TouchableNativeFeedback onPress={() => navigation.navigate('PembahasanPerjumlahan')}>
                    <View style={{padding:10, backgroundColor:colors.benar, borderRadius:15}}>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:15, textAlign:'center', color:'white'}}>Pembahasan</Text>
                    </View>
                </TouchableNativeFeedback>
              </View>
              </View>
      </ScrollView>
    </View>
  )
}