import React, { Component,Fragment } from 'react'
import axios from 'axios'
import StripeCheckuot from 'react-stripe-checkout'
export default class description extends Component {
    constructor(props) {
        super(props);
        this.state = {      
          events:[],
          event_id:this.props.location.state.event_id,
          college:[],
          view:false,
        };  
    }
        async componentDidMount() {
            const token = sessionStorage.getItem("token");
        const config1 = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const res = await axios.get(`http://localhost:3000/api/v1/events/${this.state.event_id}`, config1);
        this.setState({
          events: res.data.data,
          college:res.data.data.college,
        });
        console.log(this.state.events)
            }
            onClick=async(id,e)=>{
                e.preventDefault();
                this.setState({
                    view:true,
                    event_id:id,    
                })
            }
    render() {
        const {
            user,
            name,
            college,
            description,
            file,
            deadline_for_reg,
            fees,
            no_of_participant,
            event_date,
          } = this.state.events;
          console.log(this.state.college.name); 
        return (
            <div id="backcontact">
            <div class="container" >
            <div class="card " id="backabout">
            
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            
                            <div class=" card "  >
                              <div class="card"   ><img src={`${file}`} style={{height:"300px"}}/></div>
                             
                            </div>
                            
                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title" style={{color:"#000"}}>{name}</h3>
                           
                            <p class="product-description">{description}</p>
                            <h4 class="price"><b> Fees: </b><span>{fees} &#8377;</span></h4>
                          
                            
    
                            <h5><b>Event Date:</b> {event_date}</h5>
                            <div>
                                <h5><b>No_of_Participants:</b> {no_of_participant}</h5>
                            </div>
                            <div>
                                <h5><b>Deadline for Registration:</b> {deadline_for_reg}</h5>
                            </div>
                            <div >
                            <h5><b>College:</b> {this.state.college.name}</h5>
                            </div>
                            <div >
                            <h5><b>College Address:</b> {this.state.college.address}</h5>
                            </div>
                            {/* <div class="action">
                                <button class=" btn btn-success mb-5 mt-5" type="button" name="button"
                                >Register</button>
                               
                            </div> */}
                            <StripeCheckuot
                                stripeKey="pk_test_CWFaPpZElvIVXkW5TNUFZ3Mp00GUODPUxR"
                                token=""
                                name="Pay"
                                // amount={this.props.product.price*100}
                                >
                                    <button className="btn btn-info mb-2 mt-2">
                                        Register
                                    </button>
                                </StripeCheckuot>

                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>




        // <div className="card" style={{width:"100px"}}>
        //     <div className="row">
        //         <div className="col-md-6">
        //             <img src={`${file}`}>
        //             </img>
        //         </div>
        //         <div className="col-md-6">
                    
        //         </div>
        //     </div>
        // </div>

        )
    }
}
