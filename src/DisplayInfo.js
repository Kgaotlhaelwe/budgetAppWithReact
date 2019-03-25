import React from "react";


function Display (props){
    return (

        <div>
        {

            
        props.budgetType =="Income" ? 
            <div className="income">
            
            <div class="container">
            <div className ="block" class="row">
              <div  class="col-sm">
              {props.description}
              </div>
              <div class="col-sm">
              {props.amount}
              </div>
              <div class="col-sm">
               
              {props.budgetType }
              </div>
            </div>
          </div>
            
             </div> :
           <div>
              {
                   props.budgetType =="Expense" ? 

            <div className="expense"> 
            
            <div class="container">
            <div className ="block" class="row">
              <div  class="col-sm">
              {props.description}
              </div>
              <div class="col-sm">
              {props.amount}
              </div>
              <div class="col-sm">
               
              {props.budgetType }
              </div>
            </div>
          </div>
         
        </div>:
         <div> </div>
              } 
               
         </div>

        
        


        }

        </div>

        
           
      
    )
}

export default  Display