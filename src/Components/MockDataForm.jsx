import { useState } from "react";
import FormData from "../data/formData";
import mockUserData from "../data/mockUserData";

export default function MockDataForm() {
    const [formState, setFormState] = useState(() => {
        return { ...mockUserData }
    });
    function renderField(key,config){
        if(config.type=="file"){
            return (
                <input type="file" onChange={(e)=>handleChange(key,e.target.files)}/>
            )
        }
        else if(config.type=="textarea"){
            return (
                <textarea id={key} value={formState[key] || ""} onChange={(e) => setFormState((prev) => ({ ...prev, [key]: e.target.value }))} style={{width:"300px", height:"100px"}}></textarea>
            )
        }
        else{
            return (
                <input type={config.type} value={formState[key]||""} onChange={(e) => setFormState((prev) => ({ ...prev, [key]: e.target.value }))}/>
            )
        }
    }
    return (
        <>
            <form>
                <h3>Please fill the form to proceed</h3>
                <p>Basic Info</p>
                {Object.entries(FormData).map(([key, config]) => {
                    if (config.fields) return null;
                    return (
                        <div key={key}>
                            <label htmlFor={key}>{config.label}</label>
                            {renderField(key,config)}
                        </div>
                    )
                })}
                {Object.entries(FormData).map(([key, config]) => {
                    if (!config.fields) return null;
                    return (
                        <div key={key}>
                            <p>{config.label}</p>
                        </div>
                    )
                })}
            </form>
        </>
    )
}