import React, { useEffect } from "react";
import {
    ListGroup,
    ListGroupItem,
    Button,
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from "../actions/memberAction";
import { connect } from "react-redux";


 const Userlist = (props) => {   

    useEffect(() => {
        props.fetchAllMember()
    }, [])//DidMount

    const onDelete = id => {
        const onSuccess = () => {
           console.log("Member deleted successfully");
            
        }
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteMember(id,onSuccess)
    }

    return (
        <>
    <ListGroup className="mt-3 shadow ">

                    {
                       props.MemberList.map((record, index) => {
                       return(
                 <ListGroupItem className="d-flex bg2" key={index} >
                     <p className="font"> <i className="fas fa-star text-warning"></i> {record.name}</p>
                      <div className="ml-auto">
                          <Link to={`/edit/${record._id}`} className="btn btn-success rounded-circle shadow mr-1"> <i className="fas fa-pencil-alt "></i> </Link>
                           <Button className="btn btn-danger rounded-circle shadow mr-1 shadow" onClick={() => onDelete(record._id)}><i className="fas fa-trash "></i></Button>
                     </div>
                 </ListGroupItem>
                       )})
                    }
        </ListGroup>
        </>
    )
}

 
const mapStateToProps = state => ({
    // list = state name
    //member = reducer name
    MemberList: state.Members.list
})

const mapActionToProps = {
    fetchAllMember: actions.fetchAll,
    deleteMember: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Userlist);