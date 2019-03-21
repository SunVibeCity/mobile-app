import React from 'react';
import {ScrollView, StyleSheet, View, Text, Platform} from 'react-native';

export default class ActivityItemDetailScreens extends React.Component {
  static navigationOptions = {
    title: 'Activity Item',
    headerTitleStyle: {
      ...Platform.select({
        ios: {fontFamily: 'Arial',},
        android: {fontFamily: 'Roboto'},
      }),
    },
  };


  render() {

    const item = this.props.navigation.state.params.item;


    const items = [];

    for (let key in item) {
      if (key === 'key') continue;
      items.push(
        <Text key={key}>
          {key}: {item[key]}
        </Text>
      );
    }


    return (
      <ScrollView style={styles.container}>
        {/* this screens is not implemented. it works only as template */}
        <View>
          {/*<Text>*/}
            {/*{JSON.stringify(item)}*!/*/}
          {/*</Text>*/}
          {items}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 15,
    // backgroundColor: '#fff',
  },
});
