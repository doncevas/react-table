/**
 *
 * RightSideDrawer
 *
 */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    margin: 10,
    marginLeft: 20,
    marginBottom: 0,
  },
});

export interface DrawerProps {
  isOpen: boolean;
  formTitle: string;
  children?: React.ReactNode;
  onClose(status: boolean);
}

export const RightSideDrawer = (props: DrawerProps) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.isOpen}
        onClose={() => props.onClose(false)}
      >
        <Typography
          className={classes.header}
          variant="overline"
          display="block"
          gutterBottom
        >
          {props.formTitle}
        </Typography>
        <Divider />
        <div>{props.children}</div>
      </Drawer>
    </div>
  );
};

export default RightSideDrawer;
