import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import git from '../../../Assets/ww.png';
import {Input, Form, FormGroup} from 'reactstrap';
import {axiosInstance} from '../../../util/axiosInstance';
import { useDispatch } from 'react-redux';
import {setRepositories} from '../../../_actions/repositoryActions';
import {setGitName} from '../../../_actions/gitNameActions';
import './input.css'
const InputElement = () => {
    const dispatch = useDispatch();

     const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const gitHubHandle = form['username'].value;
       
        let resp = await axiosInstance.get(`/users/${gitHubHandle}/repos`);
       
        
        //Extract all Repository name and ids and store them in an array
        let allRepos = [];
        for (let r = 0; r < resp.data.length; r++) {
            const repo = {
                id: resp.data[r]['id'],
                name: resp.data[r]['name'],
            }
            allRepos.push(repo);
        }
        dispatch(setRepositories(allRepos));
        dispatch(setGitName(gitHubHandle));

    }
    
    return (
    <Container fluid>
        <Form  onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" className = "mt-3"><img src = {git} alt="GitHub Icon"/></Col>
                <Col lg="2" xs="auto" md="2" className = " mt-5 w-25">
                   <FormGroup>
                        <Input required type = "text" name="username" id="usernameEntry" placeholder="Search by GitHub username" />
                    </FormGroup>
                </Col>
                <Col lg="1" xs="auto" md="2" className = "mt-5 w-25">
                    <FormGroup>
                        <Input type = "submit" className = 'btn btn-dark' name = "search" id = "seach" />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    </Container>
    );
};

export default InputElement;