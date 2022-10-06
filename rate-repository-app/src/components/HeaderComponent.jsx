import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const HeaderComponent = ({ setOrder, selectedOrder, onChangeSearch, searchQuery }) => {
    const pickerRef = React.useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

  return (
    <View style={{ padding: 20 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Picker
          ref={pickerRef}
          selectedValue={selectedOrder}
          onValueChange={(itemValue, itemIndex) =>
            setOrder(itemValue)
            }>
            <Picker.Item label="Latest repository" value="ls" />
            <Picker.Item label="Highest rated repositories" value="hrr" />
            <Picker.Item label="Lowest rated repositories" value="lrr" />
        </Picker>
    </View>
  )
}

export default HeaderComponent