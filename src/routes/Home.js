import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component{
  state ={
    isLoading:true,
    movies:[]
  };

  add = () => {
    //this.state.count =1;
    //alert(this.state.count);
  
    this.setState(current =>({count:current.count+1}));
  }
  
  minus = () => {
    //this.state.count =-1;
    //alert(this.state.count);
    this.setState({count:this.state.count-1});
  }

  getMovies = async () =>{
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false})
    
    console.log(movies);
    this.setState({movies,isLoading:false})
  }
 componentDidMount(){
    this.getMovies();
    //setTimeout(()=>{this.setState({isLoading:false});},6000);
    //alert("sksksk");
    console.log('componentDidMount');


 }
 componentDidUpdate(){
  console.log('I just');
}
componentWillUnmount(){
  console.log('GoodBye');
}
  render(){
    console.log('lendering'); 
    
    const {isLoading,movies} = this.state;
    
    <div>
    <h1>Im Component{this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>minus</button>
    </div> 
    return (
      <section className ="container">
      {isLoading ?(
      <div className ="loader">
        <span className ="loader__text">Loading...</span>  
      </div>):(
        <div className="movies">
          {movies.map(movie =>(
            <Movie
              key ={movie.id}
              id ={movie.id}
              year ={movie.year}
              title ={movie.title}
              summary ={movie.summary}
              poster ={movie.medium_cover_image}
              genres ={movie.genres}
              />
            ))}

        </div>
        ) 
      }
      </section>
    );
  }
}

export default Home;
