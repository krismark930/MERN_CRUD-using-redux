import React,{useState,useEffect} from 'react'
import { 
    FormGroup,
    Label,
    Input,
    Button
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../actions/memberAction";

const Editcomponent = (props) => {
   const history = useHistory()
   const {id} = useParams()
    const [name,setName]=useState("")

    useEffect(() => {
        fetch(`/member/${id}`,{
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
             setName(result.name)
        })  
    }, [id])

    

    const editUser = () => {
        fetch(`/member/${id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            //dispatch({type:"UPDATE",payload:result})
            console.log("data inserted successfully")
            history.push('/')
           })
           .catch(err=>{
            console.log(err)
        })
    }


    return (
        <>
            <FormGroup className=" p-3 bg shadow">
                <Label><i className="fas fa-smoking mr-2 "></i>Edit Suttebaz</Label>
                <Input type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Input>
            </FormGroup>
            <Button type="submit" className="btn btn-success rounded-pill shadow-lg" onClick={() => editUser()}> <i className="fas fa-plus-circle"></i> Submit</Button>  
            <Link to="/" className="btn btn-danger ml-2 rounded-pill shadow-lg" > <i className="fas fa-times-circle"></i> Cancel</Link>
        </>
    )
}


const mapStateToProps = state => ({
    // list = state name
    //member = reducer name
    MemberList: state.Members.list
})

const mapActionToProps = {
    CreateMember: actions.create,
}


export default connect(mapStateToProps, mapActionToProps)(Editcomponent);
