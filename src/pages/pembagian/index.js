import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function Pembagian({navigation}) {
    const Back = () => {
        navigation.goBack()
    }

    const SubMenu = () => {
        navigation.navigate('PembagianSubMenu')
    }
  
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* HEADER */}
        <View style={{padding:10, backgroundColor:colors.headerpembagian, flexDirection:"row",
             borderBottomRightRadius:20, borderBottomLeftRadius:20
        }}>
            <TouchableNativeFeedback onPress={Back}>
                <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/tombolkembali.png')} style={{
                    width:16, height:16,
                }}/>
                </View>
            </TouchableNativeFeedback>

            <View style={{alignSelf:"center", justifyContent:"center", left:64, top:-8}}>
                <Image source={require('../../assets/headerpembagian.png')} style={{
                    width:178,
                    height:37
                }}/>
            </View>
        </View>
      <ScrollView>
                {/* SUB MENU DARI WEB ADMIN */}
           
                <View style={{padding:10, marginTop:16}}>
                    {/* 1 */}
                <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>1. Persiapan Pembagian</Text>
                    </View>
                </TouchableNativeFeedback>

                <MyGap jarak={16}/>
    
                     {/* 2 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>2. Pembagian 2</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 3 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>3. Pembagian 3</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 4 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>4. Pembagian 4</Text>
                    </View>
                </TouchableNativeFeedback>

                 <MyGap jarak={16}/>
    
                     {/* 5 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>5. Pembagian 5</Text>
                    </View>
                </TouchableNativeFeedback>
                

                <MyGap jarak={16}/>
    
    {/* 6 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>6. Pembagian 6</Text>
   </View>
</TouchableNativeFeedback>


<MyGap jarak={16}/>
    
    {/* 7 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>7. Pembagian 7</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 8 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>8. Pembagian 8</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 9 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>9. Pembagian 9</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 10 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>10. Pembagian 1 Digit (Acak)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 11 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>11. Pembagian Susun Cara Cepat{'\n'}(2 Digit Dan 3 Digit)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 12 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>12. Pembagian Susun Cara Cepat{'\n'}(4 Digit, 5 Digit, 6 Digit)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 13 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpembagian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>13. Pembagian Puluhan, Ratusan, dan Ribuan</Text>
   </View>
</TouchableNativeFeedback>

                </View>
      </ScrollView>
    </View>
  )
}