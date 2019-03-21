import React, {PureComponent} from 'react';
import {
  TouchableHighlight
} from 'react-native';
import { ListItem } from "react-native-elements";

class ActivityListItem extends PureComponent {

  render() {
    const item = this.props.item;
    const itemCreated = new Date(item.created).toISOString();
    const expression = (item.symbol !== undefined ? item.symbol : item.currency) + item.action[0].toUpperCase() + item.action.substring(1);
    let title = (item.symbol !== undefined ? item.symbol : item.currency) + ' ' + item.action + ' - ' + item.status;
    let subtitle = parseFloat(item.amount).toFixed(2);
    switch(expression) {
      case 'SVTBid':
      case 'SVTFokBid':
        subtitle = parseFloat(item.amount).toFixed(2) + 'SVT for ' + parseFloat(item.price).toFixed(2) + 'VND';
        break;
      case 'SVTAsk':
      case 'SVTFokAsk':
        subtitle = parseFloat(item.price).toFixed(2) + 'VND for ' + parseFloat(item.amount).toFixed(2) + 'SVT';
        break;
      case 'VNDAdd':
        subtitle = 'Added ' + parseFloat(item.amount).toFixed(2) + 'VND';
        break;
    }

    return (
      <TouchableHighlight
        onPress={this.props.touched}
      >
        <ListItem
          // rightTitle={itemCreated}
          containerStyle={{ borderBottomWidth: 0 }}
          title={title}
          subtitle={subtitle}
          leftIcon={{
            name:actionIcons[item.action],
            color:'#ccc',
          }}
        />
      </TouchableHighlight>
    )
  }
}

export default ActivityListItem;


const actionIcons = {
  bid: 'unfold-less',
  fokBid: 'unfold-less',
  ask: 'unfold-more',
  fokAsk: 'unfold-more',
  add: 'add',
  send: 'send',
};