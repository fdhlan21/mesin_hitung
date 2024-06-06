import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'
MyGap
export default function Pengurangan({navigation}) {
    const Back = () => {
        navigation.goBack()
    }

    const SubMenu = () => {
        navigation.navigate('PenguranganSubMenu')
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

            <View style={{alignSelf:"center", justifyContent:"center", left:53, top:-8}}>
                <Image source={require('../../assets/headerpengurangan.png')} style={{
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
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>1. Pengurangan Bilangan{'\n'}Kurang Dari 5</Text>
                    </View>
                </TouchableNativeFeedback>

                <MyGap jarak={16}/>
    
                     {/* 2 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>2. Pengurangan Bilangan 6 & 7</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 3 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>3. Penurangan Bilangan 8 & 9</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 4 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>4. Pengurangan Bilangan 6,7,8,9</Text>
                    </View>
                </TouchableNativeFeedback>

                 <MyGap jarak={16}/>
    
                     {/* 5 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>5. Pengurangan Bilangan 10</Text>
                    </View>
                </TouchableNativeFeedback>
                

                <MyGap jarak={16}/>
    
    {/* 6 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>6. Pengurangan Kurang Dari{'\n'}20 (Tanpa Coret)</Text>
   </View>
</TouchableNativeFeedback>


<MyGap jarak={16}/>
    
    {/* 7 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>7. Pengurangan Kurang Dari{'\n'}20 (Sistem Coret)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 8 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>8. Pengurangan Kurang Dari{'\n'}100 (Tanpa Coret)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 9 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>9. Pengurangan Bilangan{'\n'}2 Digit (Campur)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 10 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerpengurangan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>10. Pengurangan Bilangan{'\n'}3 Digit (Campur)</Text>
   </View>
</TouchableNativeFeedback>



                </View>
      </ScrollView>
    </View>
  )
}