import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
//reuseable component to handle safe area of screens and to handle the touch when you want to get out from textInput


function Screen({children, style, withDissmeser}) {
  if (withDissmeser) {
    return (
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={[styles.screen, style]}>
          <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
  return (
    /* you could pass childern to that component and also redesign it by pass style  
    */ 
    <SafeAreaView style={[styles.screen, style]}>
    
      {children}  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
