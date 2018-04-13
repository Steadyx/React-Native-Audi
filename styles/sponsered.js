import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 60
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  col: {
    margin: 5
  },
  subText: {
    fontSize: 8
  }
});

export default styles;
