/**
 *
 * TabsPanel
 *
 */
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface Props {
  tabsContent: { content: any; label: string }[];
}

function TabsPanel(props: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {!!props.tabsContent.length &&
            props.tabsContent.map((item, index) => (
              <Tab key={index.toString()} label={item.label} />
            ))}
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {!!props.tabsContent.length &&
          props.tabsContent.map((item, index) => (
            <TabPanel key={index.toString()} value={value} index={index}>
              {item.content}
            </TabPanel>
          ))}
      </SwipeableViews>
    </div>
  );
}

export default TabsPanel;
