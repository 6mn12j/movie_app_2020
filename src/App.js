import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading : true,
    movie: []
  };

  getMovies = async () =>{
    const getMovies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  };
  async componentDidMount(){
   this.getMovies();
  }
    
   
  
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading...." : "we are ready"}</div>;
  } 
}

export default App;