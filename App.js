import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LightScreen from './screens/LightScreen.js';
import Control from './screens/Control';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { play: false}
  }
  
  handleActivateTimer= () => {
    console.log("Button clicked ! prevProps: " + this.state.play + " new: " + !this.state.play)
    this.setState({
      play: !this.state.play
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <LightScreen play={this.state.play} />
        <Control activateTimer={this.handleActivateTimer}/>
      </View>
    );
  }
}


