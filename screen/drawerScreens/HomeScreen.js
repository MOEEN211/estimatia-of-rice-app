import React from 'react';
import {View, Text,StyleSheet, Image, ImageBackground} from 'react-native';
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";

const leafUrl = "https://t4.ftcdn.net/jpg/02/11/72/45/240_F_211724538_SNUDgT1RxC2vcL1rFHbgk96ho4auhc5z.jpg";
const reportUrl ="https://media.istockphoto.com/id/174628030/photo/report.jpg?b=1&s=612x612&w=0&k=20&c=DBnpXAYYzNEwmA6AHnVYmmUymvROnD8y0QyOWUrN00E=";

const RiceUrl = "https://thumbs.dreamstime.com/b/raw-rice-canvas-sack-39116198.jpg";
const HomeScreen = ({navigation}) => {
  return (

    <View style={{
      backgroundColor:"#FFF",
      flex:1
  }}>
     <View style={{
         backgroundColor:"#00a46c",
         height:"18%",
         justifyContent: 'center',
         alignItems: 'center',
         borderBottomLeftRadius:20,
         borderBottomRightRadius:20,
         paddingHorizontal:20
     }}>
         {/* <Image
              source={require('../images/1.png')}
              style={{
                  height:10,
                  width:20,
                  marginTop:50
              }}
         /> */}

         
         <View style={{
             flexDirection:"row",
             alignItems:"center",
             marginTop:25,
             width:"100%"
         }}>
             <View style={{width:"100%"}}>
                  <Text style={{
                      fontSize:28,
                      color:"#FFF",
                      fontWeight:"bold"
                  }}>Estimatia of Rice and Leaf</Text>
             </View>
             
         </View>
     </View>
    
          {/* <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={true}
              style={{height:400}}
          > */}

          <View   style={{margin:20,} }>
            
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("RiceScreen")}
                  style={{
                   height:160,
                      elevation:2,
                      backgroundColor:"#FFF",
                     
                      borderRadius:15,
                      
                      width:'100%',
                  }}
              >
                    <Image style={{
                      width:'50%',height:'80%',borderRadius:10,margin:10,marginTop:10,
                  }} source={{uri: RiceUrl}} />

                  
                     <View style={styles.align1}>
                
                  <View style={{marginLeft:'60%',top:-110,}}>
                    <View >
                      <Text style={styles.text}>Rice</Text>
                      <Text style={styles.text1}>Dimensions of Rice</Text>
                    </View>

                    </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View   style={{margin:20,} }>
            
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("RiceScreen")}
                  style={{
                   height:160,
                      elevation:2,
                      backgroundColor:"#FFF",
                      borderRadius:15,
                      width:'100%',
                  }}
              >
                    <Image style={{
                      width:'50%',height:'80%',borderRadius:10,margin:15,marginTop:10,
                  }} source={{uri: leafUrl}} />
                    <View style={styles.align1}>   
                  <View style={{marginLeft:'60%',top:-110,}}>
                    <View >
                      <Text style={styles.text}>Leaves</Text>
                      <Text style={styles.text1}>Dimensions of Leaf</Text>
                    </View>
                  </View>
                  </View>
              </TouchableOpacity>
          </View>
          <View   style={{margin:20,} }>
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("RiceScreen")}
                  style={{
                   height:160,
                      elevation:2,
                      backgroundColor:"#FFF",
                     
                      borderRadius:15,
                      
                      width:'100%',
                  }}
              >
                    <Image style={{
                      width:'50%',height:'80%',borderRadius:10,margin:15,marginTop:10,
                  }} source={{uri: reportUrl}} />

                  
                     
                <View style={styles.align1}>
                  <View style={{marginLeft:'60%',top:-110,}}>
                    <View >
                      <Text style={styles.text}>Report</Text>

                      <Text style={styles.text1}>Previous Reports</Text>


                    </View>
                  </View>
                  </View>
              </TouchableOpacity>

          </View>

         
            

          


  </View>


 
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    color: '#ff0000',
  },

  align1:{

    marginTop:-10,


  },
  text:{
    fontSize:25,
    margin:10,
    fontWeight: 'bold',
  },
  text1:{
    fontSize:15,
    margin:0,
  },
});



export default HomeScreen;