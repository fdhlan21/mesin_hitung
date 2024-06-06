import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { MyGap } from '../../components'

export default function Perjumlahan({navigation}) {
    const Back = () => {
        navigation.goBack()
    }

    
    const SubMenu = () => {
        navigation.navigate('PerjumlahanSubMenu')
    }
  
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* HEADER */}
        <View style={{padding:10, backgroundColor:colors.headerperjumlahan, flexDirection:"row",
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
                <Image source={require('../../assets/headerperjumlahan.png')} style={{
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
                    <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>1. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 0 - 5)</Text>
                    </View>
                </TouchableNativeFeedback>

                <MyGap jarak={16}/>
    
                     {/* 2 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>2. Penjumlahan 2 Bilangan {'\n'}(Hasilnya 6)</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 3 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>3. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 7)</Text>
                    </View>
                </TouchableNativeFeedback>

                  <MyGap jarak={16}/>
    
                     {/* 4 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>4. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 8)</Text>
                    </View>
                </TouchableNativeFeedback>

                 <MyGap jarak={16}/>
    
                     {/* 5 */}
                     <TouchableNativeFeedback onPress={SubMenu}>
                    <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
                        <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>5. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 9)</Text>
                    </View>
                </TouchableNativeFeedback>
                

                <MyGap jarak={16}/>
    
    {/* 6 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>6. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 10)</Text>
   </View>
</TouchableNativeFeedback>


<MyGap jarak={16}/>
    
    {/* 7 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>7. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 6/7/8)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 8 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>8. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 9/10)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 9 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>9. Penjumlahan 2 Bilangan{'\n'}(Hasilnya 1-10)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 10 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>10. 10 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 11 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>11. 9 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 12 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>12. 8 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 13 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>13. 6/7 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 14 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>14. 8/9 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 15 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>15. 6/7/8/9 + Bilangan 1 Angka</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 16 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>16. Penjumlahan Maksimal 2{'\n'}Digit (Tanpa Menyimpan)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 17 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>17. Penjumlahan Maksimal 2{'\n'}Digit (Menyimpan)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 18 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>18. Penjumlahan Maksimal 3{'\n'}Digit (Tanpa Menyimpan)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>
    
    {/* 19 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>19. Penjumlahan Maksimal 3{'\n'}Digit (Menyimpan)</Text>
   </View>
</TouchableNativeFeedback>

<MyGap jarak={16}/>

    {/* 20 */}
    <TouchableNativeFeedback onPress={SubMenu}>
   <View style={{padding:10, backgroundColor:colors.headerperjumlahan, borderRadius:15,}}>
       <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:15}}>20. Penjumlahan Maksimal 4{'\n'}Digit (Campur)</Text>
   </View>
</TouchableNativeFeedback>
                </View>
      </ScrollView>
    </View>
  )
}