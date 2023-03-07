import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function OffDays() {
  return (
    <React.Fragment>
      <Title>Upcoming Leave</Title>
      <Typography component="p" variant="h4">
        Christmas
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 31 December, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all upcoming leaves
        </Link>
      </div>
    </React.Fragment>
  );
}
