import { useState } from "react";

function Form1() 
{
    const[name,setName]=useState(null);

    function submitData(e) 
    {
        e.preventDefault();
        setName(inputData);
    }

    var data={name:"",email: "",age: "" };
    const[inputData, setInputData]= useState(data);

    function handleData(e) 
    {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    return(
        <>
            <form onSubmit={submitData}>
                <label>Name:</label>
                <input type="text" name="name" value={inputData.name} onChange={handleData} />
                <br/>
                <label>Email:</label>
                <input type="email" name="email" value={inputData.email} onChange={handleData} />
                <br/>
                <label>Age:</label>
                <input type="number" name="age" value={inputData.age} onChange={handleData} />
                <br/>
                <button type="submit">Submit</button>
            </form>

            {name && (
                <div>
                    <h2>Information is :</h2>
                    <p>Name: {name.name}</p>
                    <p>Email: {name.email}</p>
                    <p>Age: {name.age}</p>
                </div>
            )}
        </>
    );
}

export default Form1;
