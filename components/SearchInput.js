import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';


/**  
 * simple TextInput with Search Icon you could use it anywhere by passing props to it 
 * you could check colors in config to handle the color of it anywhere in the app by one change and you overwrite it in specific place
 */
function SearchInput({...otherProps}) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={'search'}
        size={22}
        color={colors.medium}
        style={styles.icon}
      />

      <TextInput
        style={{flex: 1}}
        placeholder="Search"
        placeholderTextColor={colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '93%',
    backgroundColor: colors.light,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 2,
    margin: 20,
    alignItems: 'center',
  },
});

export default SearchInput;
