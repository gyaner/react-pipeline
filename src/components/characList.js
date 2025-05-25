import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { addCharacterByid, saveData } from '../actions';
//import axios from 'axios';
import Axios from 'axios';

class CharacterList extends Component {
  constructor() {
    super();
    
  }
  async componentDidMount(){
   // alert("dnjj")
   let data;
   await Axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
   // console.log("hellooo",res.data)
    data=  res.data
  })
  //console.log("?????????????",data)
  this.props.saveApi(data);
  }
  handleClick=(e,id)=>{
   // alert("heloo")
    this.props.addHero(id);
  }
  render() {
    return(
   <>
    {this.props.character.map((item,key)=>{
        return(
            <ul>
                <li><span>{item.name}<butoon onClick={(e)=>this.handleClick(e,item.id)}>+</butoon></span></li>
            </ul>
        )
    })
  }
  
  </>
    )
}
}



function mapStateToProps(state)
{
    console.log("state chaterList",state);
    return {
        character : state.character
    }
}


function mapDispatchToProps (dispatch) {
    console.log("componets-------------------->",dispatch);
    return {
    //     addHero: (id) => {
    //     dispatch(addCharacterByid(id))
    //   },

      
        saveApi: (data) => {
        dispatch(saveData(data))
      }
    
    }
  
  }
export default connect( mapStateToProps,mapDispatchToProps )(CharacterList);