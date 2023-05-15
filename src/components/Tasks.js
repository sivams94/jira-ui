import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

const Tasks=({tasks, onDelete})=> {  
  const [get, setGet] = useState([]);

  useEffect(() => {
    setGet(tasks)
  }, [tasks]);

  return (
    <div>
      <h2>Task List</h2>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Issue Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid={`tasks-list`}>
            {get?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.issueType}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>
                  &nbsp;<a onClick={() => onDelete(row.id)} style={{ cursor: 'pointer' }}>Delete</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tasks;