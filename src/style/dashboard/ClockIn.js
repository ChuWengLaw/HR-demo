import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Moment from 'react-moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function preventDefault(event) {
  event.preventDefault();
}

// Generate Order Data
function createData(id, ClockIn, ClockOut) {
  return { id, ClockIn, ClockOut};
}

const rows = [
  createData(
    0,
    '8:00 A.M.',
    '6:00 P.M.'
  ),
  createData(
    1,
    '8:00 A.M.',
    '6:00 P.M.'
  ),
];

export default function ClockIn(props) {
  return (
    <React.Fragment>
      <Title>Clock In</Title>
      <Typography component="p" variant="h4">
        <Moment interval={1000} format={"hh:mm:ss A"}>{props.cTime}</Moment>
      </Typography>
      <Table size="tiny">
        <TableHead>
          <TableRow>
            <TableCell>Clock In</TableCell>
            <TableCell>Clock Out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.ClockIn}</TableCell>
              <TableCell>{row.ClockOut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all clock in data
        </Link>
      </div>
    </React.Fragment>
  );
}
