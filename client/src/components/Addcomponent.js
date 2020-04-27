import React, { useState } from "react";
import {
    FormGroup,
    Label,
    Input,
    Button,
 } from 'reactstrap';
 import * as actions from "../actions/memberAction";
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


const Addcomponent = (props) => {
    const history = useHistory()
    const [name,setName] = useState("")

    
    const AddUser = () => {

        // props.CreateMember(name)

        fetch('/member',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            console.log("data inserted successfully")
            history.push('/')
           })
           .catch(err=>{
            console.log(err)
        })
  }


    return (
        <  >
            <FormGroup className=" p-3 bg shadow">
                <Label><i className="fas fa-smoking mr-2 "></i>Add Suttebaz</Label>
                <Input type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Input>
            </FormGroup>
            <Button type="submit" className="btn btn-success rounded-pill shadow-lg" onClick={() => AddUser()} > <i className="fas fa-plus-circle"></i> Submit</Button>  
            <Link to="/" className="btn btn-danger ml-2 rounded-pill shadow-lg" > <i className="fas fa-times-circle"></i> Cancel</Link>
  </>
    )
}


const mapActionToProps = {
    CreateMember: actions.create,
}


export default connect("", mapActionToProps)(Addcomponent);

