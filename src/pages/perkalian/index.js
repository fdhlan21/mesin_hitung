import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function Perkalian({navigation}) {
    const Back = () => {
        navigation.goBack()
    }

    const SubMenu = () => {
        navigation.navigate('PerkalianSubMenu')
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* HEADER */}
        <View style={{padding:10, backgroundColor:colors.headerperkalian, flexDirection:"row", 
             borderBottomRightRadius:20, borderBottomLeftRadius:20
        }}>
            <TouchableNativeFeedback onPress={Back}>
                <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/tombolkembali.png')} style={{
                    width:16, height:16,
                }}/>
                </View>
            </TouchableNativeFeedback>

            <View style={{alignSelf:"center", justifyContent:"center", left:63, top:-3}}>
                <Image source={require('../../assets/headerperkalian.png')} style={{
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
                    <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>1. Perkalian Bilangan 1</Text>
                    </View>
                </TouchableNativeFeedback>

                <MyGap jarak={16}/>
    
                     {/* 2 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>2. Perkalian Bilangan 10</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 3 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>3. Perkalian Bilangan 2</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 4 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>4. Perkalian Bilangan 9</Text>
                    </View>
                </TouchableNativeFeedback>

                 <MyGap jarak={16}/>
    
                     {/* 5 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>5. Perkalian Bilangan 5</Text>
                    </View>
                </TouchableNativeFeedback>
                

                <MyGap jarak={16}/>
    
    {/* 6 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>6. Perkalian Bilangan 5 Khusus{'\n'}(6x5, 7x5, 8x5)</Text>
   </View>
</TouchableNativeFeedback>


<MyGap jarak={16}/>
    
    {/* 7 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>7. Perkalian Bilangan Sama - Kuadrat</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 8 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>8. Perkalian Bilangan 3 Khusus{'\n'}(4x3, 5x3, 6x3, 7x3, 8x3)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 9 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>9. Perkalian Bilangan 4 Khusus{'\n'}(6x4, 7x4, 8x4)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 10 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>10. Perkalian Bilangan 3 dan 4 Acak</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 11 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>11. Perkalian Bilangan 6,7,8{'\n'}(Fokus 6x7, 6x8, 7x8)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 12 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>12. Perkalian Bilangan 6, 7, 8 (Acak)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 13 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>13. Perkalian Bilangan 1 - 10 (Acak)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 14 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>14. Perkalian Susun Bilangan 2 Digit (Acak)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 15 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperkalian, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>15. Perkalian Susun Bilangan 3 Digit (Acak)</Text>
   </View>
</TouchableNativeFeedback>
                </View>
      </ScrollView>
    </View>
  )
}