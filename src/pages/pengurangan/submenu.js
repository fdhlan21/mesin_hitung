import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function PenguranganSubMenu({navigation}) {
    const Back = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* HEADER */}
        <View style={{padding:10, backgroundColor:colors.headerpengurangan, flexDirection:"row",
             borderBottomRightRadius:20, borderBottomLeftRadius:20
        }}>
            <TouchableNativeFeedback onPress={Back}>
                <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/tombolkembali.png')} style={{
                    width:16, height:16,
                }}/>
                </View>
            </TouchableNativeFeedback>

            <View style={{alignSelf:"center", justifyContent:"center", left:56, top:-8}}>
                <Image source={require('../../assets/headerpengurangan.png')} style={{
                    width:178,
                    height:37
                }}/>
            </View>
        </View>
      <ScrollView>
              <View style={{padding:10,}}>
                {/* 10 */}
                <TouchableNativeFeedback>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600],
                            textAlign:"center", fontSize:96
                        }}>10</Text>
                    </View>
                </TouchableNativeFeedback>
                <MyGap jarak={16}/>
                   {/* 50 */}
                   <TouchableNativeFeedback onPress={() => navigation.navigate('PenguranganKalkulator')}>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600],
                            textAlign:"center", fontSize:96
                        }}>50</Text>
                    </View>
                </TouchableNativeFeedback>
                <MyGap jarak={16}/>
                   {/* 100 */}
                   <TouchableNativeFeedback>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600],
                            textAlign:"center", fontSize:96
                        }}>100</Text>
                    </View>
                </TouchableNativeFeedback>
              </View>
      </ScrollView>
    </View>
  )
}