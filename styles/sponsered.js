import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 80
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  col: {
    margin: 5
  },
  subText: {
    fontSize: 8,
    color: '#8A8A8A'
  },
  name: {
    fontWeight: '800'
  },
  paragraph: {
    textAlign: 'center'
  }
});

export default styles;
