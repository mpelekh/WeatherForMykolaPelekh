import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {RootState} from 'store';

type ReduxPocProps = {
  greeting: string;
  description: string;
};

const ReduxPoc = ({greeting, description}: ReduxPocProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{greeting}</Text>
      <Text style={styles.sectionDescription}>{description}</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  greeting: state.reduxPoc.greeting,
  description: state.reduxPoc.description,
});

export default connect(mapStateToProps)(ReduxPoc);
