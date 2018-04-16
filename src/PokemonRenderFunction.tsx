import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import GLOBAL_STYLES from './globalStyles';
import { IPokemon } from './pokemon';

const RenderFunction = props => (
  <View style={styles.typeStyle}>
    <Text style={styles.typeFontStyle}>{props.type.type.name}</Text>
  </View>
);

export default class extends React.Component<IPokemon> {
  componentDidUpdate() {
    console.log(this.props.types.length);
  }
  renderFunction = ({ item }) => <RenderFunction type={item} />;
  extract = (__, index) => index.toString();
  render() {
    return (
      <View style={styles.innerContainer}>
        <Text style={[GLOBAL_STYLES.headerText, { fontSize: 17 }]}>
          Nr: {this.props.id}
        </Text>
        <Text style={[GLOBAL_STYLES.headerText, { fontSize: 17 }]}>
          Name: {this.props.name}
        </Text>
        <Text style={[GLOBAL_STYLES.headerText, { fontSize: 17 }]}>
          Height: {this.props.height}
        </Text>
        <Text style={[GLOBAL_STYLES.headerText, { fontSize: 17 }]}>
          Base Exp: {this.props.base_experience}
        </Text>
        <Text style={[GLOBAL_STYLES.headerText, { fontSize: 17 }]}>Types:</Text>
        <FlatList
          contentContainerStyle={{ flex: 1 }}
          numColumns={2}
          data={this.props.types}
          renderItem={this.renderFunction}
          keyExtractor={this.extract}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  innerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  typeStyle: {
    margin: 10,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#757de8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f51b5',
  },
  typeFontStyle: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 25,
  },
});
