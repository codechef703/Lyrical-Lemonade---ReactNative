import React, { useState, useEffect } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { SimpleAnimation } from 'react-native-simple-animations';
import SidebarComponent from './components/SidebarComponent';
import CarouselComponent from './components/CarouselComponent';
import { StackView } from 'react-navigation-stack';
import ImageOverlay from 'react-native-image-overlay';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

// You can then use your `FadeInView` in place of a `View` in your components:
class BlogFirst extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebar: false,
      videoList: [],
    }
  }

  componentDidMount() {
    
  }

  _animationView() {
    return (
      <SimpleAnimation delay={0} duration={1000} direction="right" style={{flex: 4}}>
        <SidebarComponent navigation={this.props.navigation} pageName="Home" hideAgain={() => this._hideSidebar()}></SidebarComponent>
      </SimpleAnimation>
    );
  }

  _hideSidebar() {
    this.setState(prev => ({
      isSidebar: false
    }));
  }

  _showSidebar() {
    this.setState(prev => ({
      isSidebar: true
    }));
  }

  render(){
    const isSidebar = this.state.isSidebar;
    
    const additionalStyle = isSidebar ? StyleSheet.create({
      sidebarStyle: {
        
      }
    }) : StyleSheet.create({
      sidebarStyle: {
        opacity: 1
      }
    });

    return (
      <View style={styles.container}>
        {isSidebar ? this._animationView() : null}
        {/* <TouchableWithoutFeedback onPress={() => this._hideSidebar()}> */}
        <View style={[styles.contentContainer, additionalStyle.sidebarStyle]}>
          <View style={styles.content}>
            <View style={styles.headerContainer}>

              <View style={styles.sidebarMenu}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image resizeMode="contain" style={styles.sidebarMenuImage} source={require('../images/arrow.png')} />
                </TouchableOpacity>
              </View>

              <View style={styles.homeLogo}>
                <TouchableOpacity>
                  <Image resizeMode="contain" style={styles.homeLogoImage} source={require('../images/homeLogo.png')} />
                </TouchableOpacity>
              </View>

              <View style={styles.tvIcon}>
                <TouchableOpacity>
                  <Image resizeMode="contain" style={styles.tvIconImage} source={require('../images/tvIcon.png')} />
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.bodyContainer}>
              <ScrollView style={styles.scrollContainer}>
                <View style={styles.productContainer}>

                </View>
                <View style={styles.descContainer}>
                  <Text style={styles.descText}>The Lyrical Lemonade</Text>
                  <Text style={styles.descText}>X Jordan Aerospace</Text>
                  <Text style={styles.descText}>720</Text>
                  <Text style={styles.prodPriceText}>$220.00</Text>
                  <View style={styles.shipping}>
                    <Text style={styles.shipText1}>Shipping</Text>
                    <Text style={styles.shipText2}>calculated at checkout</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BlogFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  contentContainer: {
    flex: 21,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
    content: {
      position: 'absolute',
      height: '100%',
      width: '100%'
    },
      headerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 0.5,
      },
        sidebarMenu: {
          flex: 1,
          // marginTop: '20%'
          marginTop: hp('8%')
        },
          sidebarMenuImage: {
            width: 20,
            height: 15
          },
          homeLogoImage: {
            width: 110,
            height: 35
          },
          tvIconImage: {
            width: 17,
            height: 17
          },
        homeLogo: {
          flex: 1,
          alignItems: 'center',
          marginTop: hp('6%')
        },
        tvIcon: {
          flex: 1,
          alignItems: 'flex-end',          
          marginTop: hp('7%')
        },

      bodyContainer: {
        flex: 7,
        paddingLeft: '3%',
        paddingRight: '3%',
        backgroundColor: '#222323'        
      },

      scrollContainer: {
        
      },
      productContainer: {
        height: 500
      },
      descContainer: {
        alignItems: 'center'
      },
      descText: {
        color: '#fafc00',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 50
      },
      prodPriceText: {
        color: '#fafc00',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 35,
        marginTop: '5%'
      },
      shipping: {
        flexDirection: 'row',
        marginTop: '8%'
      },
      shipText1: {
        color: '#000',
        fontSize: 18,
        textDecorationLine: 'underline'
      },
      shipText2: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 18
      }
});