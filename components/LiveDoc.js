import * as React from "react"
import {View, Text ,TextInput, StyleSheet} from 'react-native'

import fire from '../fire'
import { getDatabase , ref,  set ,onValue} from "firebase/database";

const database = getDatabase(fire);

export default class LiveDoc extends React.Component{
  state={
    text:'',
  }

  componentDidMount(){
    const starCountRef = ref(database , 'text');
    onValue(starCountRef, (snapshot) => {
      const newText = snapshot.val();
    this.setState({text:newText})  

});
  }

  _sendChange(newText){
    set(ref(database), {
      text:newText,
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
        style={styles.text}
         placeholder ={"Type hear"}
         multiline = {true}
         value={this.state.text}
         onChangeText={newText=>this._sendChange(newText)}
        />
        
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    flex:1,
    textAlignVertical:"top",
    padding:15,
    fontSize: 24,
  }
})