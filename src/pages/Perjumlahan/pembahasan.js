import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function PembahasanPerjumlahan({navigation}) {
    const Back = () => {
        navigation.goBack()
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

            <View style={{alignSelf:"center", justifyContent:"center", left:60, top:0}}>
                <Image source={require('../../assets/PEMBAHASAN.png')} style={{
                    width:195,
                    height:20
                }}/>
            </View>
        </View>
      <ScrollView>
              <View style={{padding:10,}}>
                <Text style={{textAlign:"center", fontFamily:fonts.primary[400], fontSize:20, color:'#829F00'}}>PEMBAHASAN{'\n'}JAWABAN SALAH</Text>
              <View style={{backgroundColor:'white', padding:10, borderRadius:20}}>
                <Text>NANTI AKAN MUNCUM PEMBAHASAN JABAWAN SALAH TERGANTUNG DENGAN SOALNYA BERAPA, DI WEB ADMIN AKAN DI TAMBAHKAN DISINI</Text>
              </View>
              </View>
      </ScrollView>
    </View>
  )
}