import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#9b59b6",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    width: 200
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonImage: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    width: 200
  },
  btnImageText: {
    color: '#9b59b6',
    fontWeight: 'bold',
  }
});