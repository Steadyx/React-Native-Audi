import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/orderedlist';

import { oraganizeListItems } from '../utils/_DATA';

function RenderCard(props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}> KEY FACT </Text>
        <Text style={styles.cardParagraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.Amet quos
          temporibus enim perferendis itaque aperiam at.
        </Text>
      </View>
    </View>
  );
}

function BorderBottom() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: '95%',
          borderBottomWidth: 2,
          borderColor: '#DF612A'
        }}
      />
    </View>
  );
}

class OrderedList extends Component {
  constructor(props) {
    super();
    state = {};
  }

  componentWillMount() {
    const data = oraganizeListItems();
    this.setState(() => ({
      title: data.map(items => items.title),
      content: data.map(items => items.content)
    }));
  }

  render() {
    const { title, content } = this.state;
    const length = title.length;

    return title.map((title, index) => (
      <Fragment>
        <View style={styles.row} key={index}>
          <View style={[styles.bullet, styles.colBullet]}>
            <Text style={styles.bulletFont}> {index + 1} </Text>
          </View>
          <View style={styles.col}>
            <View
              style={{
                width: '80%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              <Text style={styles.heading}> {title} </Text>
              <Text style={styles.rowParagraph}> {content} </Text>
            </View>
          </View>
        </View>
        {index === 1 ? (
          <View style={styles.cardRow} key={title}>
            <RenderCard />
          </View>
        ) : null}
        {length === index + 1 ? null : <BorderBottom />}
      </Fragment>
    ));
  }
}

export default OrderedList;
