import { useState } from "react";
import "./FormExample.css"

export function FormExample(){

    const [formInput, setFormInput] = useState({
        textInput:'',
        numberInput:'',
        passwordInput:'',
        textArea:'',
        selectBoxInput:'',
        checkBoxInput:true,
        radioButtonInput:'',
        selectedDate:'2024-07-08',
        
    })

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) =>{
        setSelectedFile(e.target.files[0])
    }

    const [showPassword, setShowPassword] = useState(false);

    const onInputChange = (e) =>{
        const {name, value, checked, type} = e.target;
        // e.target.checked;
        console.log(name,value,checked,type);
        // formInput[name] = value;
        formInput[name] = type=="checkbox"? checked :value;
        console.log(formInput)
        setFormInput({...formInput})
    }

    return <div>
        <h1>Piyush  Form Example</h1>
        <div>
            <label>
                <p>Text Input</p>
                <input name="textInput" type="text" placeholder="Text Input"  value={formInput.textInput} onChange={onInputChange}></input>
            </label>
        </div>
        <div>
            <label>
                <p>Number Input</p>
                <input name="numberInput" type="number" placeholder="Number Input"  value={formInput.numberInput} onChange={onInputChange}></input>
            </label>
        </div>

        <div>
            <label>
                <p>Password Input</p>
                <input name="passwordInput" type={showPassword?"text":"password"} placeholder="Password Input"  value={formInput.passwordInput} onChange={onInputChange}></input>
                {/* <button onClick={()=> setShowPassword(true)}>show Password</button>
                <button onClick={()=> setShowPassword(false)}>Hide Password</button> */}
                {/* Conditional passowrd show and hide button */}
                {showPassword?<button onClick={()=> setShowPassword(false)}>Hide</button>:<button onClick={()=> setShowPassword(true)}>Show</button>}
            </label>
        </div>
        <div>
            <label>
                <p>Text Area input</p>
                <textarea name="textArea" cols={20} rows={3} type={Text} placeholder="Description"  value={formInput.textArea} onChange={onInputChange}></textarea>
            </label>
        </div>
        <div>
            <lable>
                <p>Select BOx:</p>
                <select value={formInput.selectBoxInput} name="selectBoxInput" onChange={onInputChange}>
                    <option value="" disabled>select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </lable>
        </div>
        <div>
            <label>
                <p>CheckBox</p>
                <input type="checkbox" name="checkBoxInput" checked={formInput.checkBoxInput} onChange={onInputChange}></input>I agree
            </label>
        </div>
        <div>
            <label>
                <p>Radio Input</p>
                <input checked={formInput.radioButtonInput=='male'} name="radioButtonInput" type="radio" value="male" onChange={onInputChange}/>Male
                <input checked={formInput.radioButtonInput=='female'} name="radioButtonInput" type ="radio" value="female" onChange={onInputChange}/>Female
            
            </label>
        </div>

        <div>
            <label>
                <p>Date Input</p>
                <input type="date" name="selectedDate" value={formInput.selectedDate} onChange={onInputChange}></input>
                <p>Selected Date : {formInput.selectedDate}</p>
            </label>
        </div>

        <div>
            <label>
                <p>File Input</p>
                <input type="file" name="" value={formInput.fileUpload} onChange={handleFileChange}></input>
                <p>Selected file : {selectedFile?.name}</p>
                {/* This ?. optional chaining using for null handle */}
            </label>
        </div>
    </div>
}