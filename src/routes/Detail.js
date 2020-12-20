import React from "react"

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;

        if(location.state == undefined){
            history.pust("/");
        }
    }
    
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.summary}</span>;
        }else{
            return <span>hello</span>;
        }
        
    }
}
export default Detail;