import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBNavLink, MDBCardFooter, MDBIcon, MDBCardTitle, MDBBtn} from 'mdbreact';
import {withRouter} from 'react-router-dom';
import "./Styles/Group.css";

const GroupCard = props => {
    // console.log('group', props.group.groupMembers)
    console.log("GROUP => ", props.group);
    {/*<MDBIcon icon="edit" style={{cursor: "pointer"}} onClick={() => props.updateGroup(props.group.id, props.group.name)} /> <MDBIcon icon="trash" onClick={() => props.removeGroup(props.group.id, props.group.name)} style={{cursor: "pointer"}} />*/}
    return(
        <div className = 'group-card'>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
                <MDBCardHeader color="primary-color" tag="h3">
                    {props.group.name}
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle></MDBCardTitle>
                    <MDBCardText>
                        {
                            props.group.members !== null ? props.group.members.map((usr, index) => (
                                <span key={index}>{usr.name}</span>
                            )) : null
                        }
                    </MDBCardText>
                    <MDBNavLink key = {props.key} to={`/groups/${props.group.id}`}>
                        <MDBBtn color="success">Enter</MDBBtn>
                    </MDBNavLink>
                </MDBCardBody>
                <MDBCardFooter color="success-color">
                    <MDBIcon icon="edit" style={{cursor: "pointer"}} onClick={() => props.updateGroup(props.group.id, props.group.name)} >
                        &nbsp;Update Name</MDBIcon> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <MDBIcon icon="trash" onClick={() => props.removeGroup(props.group.id, props.group.name)} style={{cursor: "pointer"}} >
                    &nbsp;Delete Group</MDBIcon>
                </MDBCardFooter>
            </MDBCard>
        </div>

    )
}

export default withRouter(GroupCard);