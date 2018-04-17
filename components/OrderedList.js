import React, { Component, Fragment } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from '../styles/orderedlist';
import { Svg } from 'expo';
import Dash from 'react-native-dash';
import { oraganizeListItems } from '../utils/_DATA';

const { Line, Rect } = Svg;
const { width } = Dimensions;

function RenderCard(props) {
  return (
    <Fragment>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>KEY FACT</Text>
          <Text style={styles.cardParagraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Amet quos
            temporibus enim perferendis itaque aperiam at.
          </Text>
        </View>
      </View>
    </Fragment>
  );
}

function BorderBottom() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Dash
        style={{
          width: '90%',
          height: 1,
          borderRadius: 30
        }}
        dashColor="#DF612A"
        dashLength={18}
        dashGap={5}
      />
    </View>
  );
}

class OrderedList extends Component {
  constructor(props) {
    super();
    state = { loaded: false };
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
                width: '85%',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <Text style={styles.heading}>{title}</Text>
              <Text style={styles.rowParagraph}>{content[index]}</Text>
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
