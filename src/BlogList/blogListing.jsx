import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import EditBlog from '../edit-Blog/editBlog';
import './BlogList.css'

class BlogList extends React.Component {
    render() {
        function edited(val){
            alert()
        }
        const items = this.props.items;
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>BlogUSer</th>
                        <th>Title</th>
                        <th>Blog</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr>
                                <td>{item.BlogUser}</td>
                                <td>{item.Title}</td>
                                <td><div  id = "wrapup">{item.BlogContent}</div></td>
                                <td>
                                <Button  variant="warning" type="submit" onClick={() => edited(item)}>edit</Button>
                                <EditBlog item={item}></EditBlog>
                                </td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </Table>

        );
    }
}

export default BlogList;
