import React, { Component } from "react";
import { AppRegistry, TextInput,View } from 'react-native';
import { Button,Image } from 'react-native';

export default class AccordionExample extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Enter The Tracking Numner' };
  }
  onPressLearnMore=()=>{
    console.warn('hey brother')
  }
  render() {
    return (
      <View>
         <Image
          style={{marginLeft:60,marginRight:60}}
          source={{uri:'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0d/La_Poste_logo.svg/1200px-La_Poste_logo.svg.png'}}
        />
      <TextInput
      style={{height: 40, margin:30, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
      <View  style={{width:200,paddingLeft:50}}>
      <Button
        onPress={this.onPressLearnMore}
        title="Track"
        color="#FFFFFF"
        accessibilityLabel="Learn more about this purple button"
      />  
      </View>
      
      </View>
    );
  }
}