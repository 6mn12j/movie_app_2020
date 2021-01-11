import React from "react";


class Detail extends React.Component{
        componentDidMount(){
            console.log(this.props);

            const {location, history} = this.props;
            if(location.state === undefined){
                history.push("/");
            }
        }
    render(){
            const {location} = this.props;
       if(location.state){
           return(
           <div className="detail">
               <div className="detail__container">
                <img alt={location.state.title} src={location.state.poster}></img>
                    <div className="detail__data">
                    <h3>{location.state.title}</h3>
                    <h4> {location.state.year}</h4>
                    <p>{location.state.summary}</p>
                    </div>
               </div>
           </div> 
           );
       }    else{
           return null;
       }
    }
}

export default Detail;