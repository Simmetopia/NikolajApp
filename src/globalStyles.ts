import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#002984',
};

const GLOBAL_STYLES = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 40,
  },
  mainContainer: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 20,
  },
  button: {
    marginTop: 20,
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#757de8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f51b5',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GLOBAL_STYLES;
