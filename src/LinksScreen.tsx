import * as React from 'react';
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import GLOBAL_STYLES from './globalStyles';

class LinksScreen extends React.Component {
  handlePress(url: string) {
    Linking.openURL(url);
  }

  renderFunction = ({ item }) => (
    <Button item={item} onPress={this.handlePress} />
  );

  extractKey = (__, key) => key.toString();

  render() {
    return (
      <View style={GLOBAL_STYLES.mainContainer}>
        <Text style={GLOBAL_STYLES.headerText}> Get well soon</Text>
        <Text
          style={{ color: 'white', alignSelf: 'center', fontStyle: 'italic' }}
        >
          made by simon (The master)
        </Text>
        <FlatList
          data={webpages}
          renderItem={this.renderFunction}
          // @ts-ignore
          keyExtractor={this.extractKey}
        />
      </View>
    );
  }
}

const Button = props => {
  function onPress() {
    props.onPress(props.item.url);
  }

  return (
    <TouchableOpacity style={GLOBAL_STYLES.button} onPress={onPress}>
      <Text style={GLOBAL_STYLES.buttonText}> Open {props.item.name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LinksScreen;

interface ILinks {
  name: string;
  url: string;
}

const webpages: ILinks[] = [
  { name: '9gag', url: 'https://www.9gag.com' },
  { name: 'Imgur', url: 'https://www.imgur.com' },
  { name: 'staggering beauty', url: 'http://www.staggeringbeauty.com/' },
  { name: 'calming brits', url: 'http://calmingbrits.tumblr.com/' },
  { name: 'iwastesomuchtime', url: 'https://iwastesomuchtime.com/' },
  {
    name: 'Get well soon',
    url: 'https://www.wishesgreeting.com/get-well-soon/',
  },
];
