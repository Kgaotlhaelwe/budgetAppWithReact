import React from 'react' ;

function Form (props){
    return (
        <div className="formConatiner">
            <form  onSubmit={props.add}>
                
            <select name ="expense">
                <option   value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>

            <input type="text"  name ="description" placeholder="Add description" ></input>
            <input type="text"  name="amount" placeholder="Enter the Amount" ></input>
           
            <button>Add </button>
           
                
            </form>
        </div>
    )
}

export default Form