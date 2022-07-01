import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import BinButton from "../../../Buttons/BinButton";
import {useState} from "react";

function createData(
    id: number,
    name: string,
    email: string,
    score: number,
    league_id: number,
    progress_id: number,
    allow_emails: number,
) {
    return {
        id,
        name,
        email,
        score,
        league_id,
        progress_id,
        allow_emails,
        review: [
            {
                message: 'Really fun and interesting, love the community and the game in general. country streak mode is super fun and the learning world map is great too :)',
                date: '2022-07-01',
                rating: 4,
            },
            // {
            //     date: '2020-01-02',
            //     customerId: 'Anonymous',
            //     amount: 1,
            // },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {

    const { row, deleteUser, deleteReview } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                            color={"warning"}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {"⦿ " + row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                    <TableCell align="right">{row.league_id}</TableCell>
                    <TableCell align="right">{row.allow_emails === true ? "Yes" : "No" }</TableCell>
                    <TableCell align="right"><BinButton display={true} onClick={() => deleteUser(row)}/> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Reviews
                                </Typography>
                                <Table size="small" aria-label="reviews">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{color: "orange"}}>Date</TableCell>
                                            <TableCell style={{color: "orange"}}>Message</TableCell>
                                            <TableCell align="right" style={{color: "orange"}}>Rating</TableCell>
                                            <TableCell align="right" style={{color: "orange"}}>Publishable</TableCell>
                                            <TableCell align="right" style={{color: "orange"}}>Delete Review</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.review.map((reviewRow) => (
                                            <TableRow key={reviewRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {reviewRow.date}
                                                </TableCell>
                                                <TableCell>{reviewRow.message}</TableCell>
                                                <TableCell align="right">{reviewRow.rating}</TableCell>
                                                <TableCell align="right">
                                                    {reviewRow.rating > 3 ? "Yes" : "No"}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <BinButton
                                                        display={true}
                                                        onClick={() => deleteReview(row)}/>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        </>
    );
}

export default function UsersTable( {theme} ) {

    const [rows, setRows] = useState([
        createData(1,'John Doe', "john.doe@mail.com", 6.0, 3, 3, true),
        createData(2,'George Bush', "bush@mail.com", 9.0, 3, 3, false),
        createData(3,'Steve Jobs', "jobs@mail.com", 16.0, 3, 5, true),
        createData(4,'Cupcake', "305", 3.7, 1, 2, false),
        createData(5,'Gingerbread', "356", 16.0, 2, 1, false),
    ]);

    const deleteUser = (row) => {
        console.log(row)
        let indexToDelete = rows.indexOf(row)
        rows.splice(indexToDelete, 1)
        console.log(rows)
        setRows(rows, ...rows)
    }

    const deleteReview = (review) => {
        console.log(review.review)
    }

    return (
        <TableContainer component={Paper} style={theme}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow >
                        <TableCell />
                        <TableCell style={{color: "orange"}}>ID</TableCell>
                        <TableCell style={{color: "orange"}}>Full Name</TableCell>
                        <TableCell style={{color: "orange"}} align="right">Email</TableCell>
                        <TableCell style={{color: "orange"}} align="right">Score</TableCell>
                        <TableCell style={{color: "orange"}} align="right">League ID</TableCell>
                        <TableCell style={{color: "orange"}} align="right">Allow Emails</TableCell>
                        <TableCell style={{color: "orange"}} align="right">Remove User</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.id} row={row} deleteUser={deleteUser} deleteReview={deleteReview}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
