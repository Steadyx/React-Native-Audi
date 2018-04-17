import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  col: {
    margin: 2,
    marginBottom: 10
  },
  subText: {
    fontSize: 10,
    color: '#8A8A8A',
    fontFamily: 'poppins'
  },
  name: {
    fontFamily: 'poppinsExtraBold'
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'poppinsLight',
    fontWeight: '200'
  }
});

export default styles;
