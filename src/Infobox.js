import React from 'react';
import './Infobox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

const Infobox = ({ title, cases, total }) => {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>

          <h2 className="infoBox__cases">{cases}</h2>

          <Typography className="total" color="textSecondary">
            {total}
            Total{' '}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Infobox;
