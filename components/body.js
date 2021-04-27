import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styles from './body.module.css'
import UserList from '../pages/users/list';
import UserAdd from '../pages/users/add';
import Dashboard from '../pages/dashboard';
import { Website_Name } from '../globals';
import SalesList from '../pages/sales/list';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Body() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [usersList, setUsersList] = React.useState(true);

  const handleChange = (event, newValue) => setValue(newValue);

  const AddNewUsers = () => setUsersList(false);
  const ListUsers = () => setUsersList(true);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label={Website_Name} className={styles.title} {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} onClick={!usersList ? ListUsers: null}/>
          <Tab label="Sales" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}><Dashboard /></TabPanel>
      <TabPanel value={value} index={1}>{usersList ? <UserList addNew={AddNewUsers} /> : <UserAdd goToList={ListUsers} />}</TabPanel>
      <TabPanel value={value} index={2}><SalesList /></TabPanel>
    </div>
  );
}
