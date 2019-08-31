import React, { Component } from "react"
import axios from "axios";


export default class App extends Component {
  state={
    repName:"",
    repUrl:""
  }
  componentDidMount(){
    axios.get("https://api.github.com/search/repositories?q=r&sort=stars").then(
      response=>{
        const result=response.data
        console.log(result)
        const {name,url}=result.items[0]
        this.setState({
          repName:name,
          repUrl:url
        });
        console.log(response)
      }
    )
  }
  render() {
   const {repName,repUrl}=this.state
   if(!repName){
     return <h1>Loading.......</h1>
   }else{
     return (
       <div>
         most repository is
         <a href={repUrl}>{repName}</a>
       </div>
     );
   }
  }
}
