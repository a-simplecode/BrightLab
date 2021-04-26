import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../components/button';
import Container, { RenderRows } from '../../components/container';
import InputText from '../../components/inputText';

const useStyles = makeStyles((theme) => ({
  buttonLeft: {
    padding: '8px 80px',
    textAlign: 'center',
    float: 'right'
  },
  buttonRight: {
    padding: '8px 80px',
    textAlign: 'center',
    float: 'left'
  },
}));

export default function UserAdd({ goToList }) {
  const classes = useStyles();

  const [userObj, setUserObj] = React.useState({ firstName: "", lastName: "", phoneNumber: "", email: "", age: "" });

  useEffect(() => {
    //fetch data from api
    let obj = { firstName: "", lastName: "", phoneNumber: "", email: "", age: "" };
    setUserObj(obj);
  }, [])

  const handleChange = (id, value) => setUserObj({ ...userObj, [id]: value });
  const clear = () => setUserObj({ firstName: "", lastName: "", phoneNumber: "", email: "", age: "" });
  const save = () => {
    const dataObjToSave = userObj;
    //save data 
  };

  return (<>
    <Head>
      <title>Add User</title>
    </Head>
    <h3>
      Add User <Button color="primary" name="Back" onClick={goToList} />
    </h3>
    <Container>
      <RenderRows
        left={<InputText
          id="firstName"
          label="First Name"
          value={userObj.firstName}
          fullWidth
          required
          handleChange={handleChange} />}

        right={<InputText
          id="lastName"
          label="Last Name"
          value={userObj.lastName}
          fullWidth
          required
          handleChange={handleChange} />}
      />

      <RenderRows
        left={<InputText
          id="phoneNumber"
          label="Phone Number"
          value={userObj.phoneNumber}
          fullWidth
          required
          handleChange={handleChange} />}

        right={<InputText
          id="email"
          label="Email"
          value={userObj.email}
          fullWidth
          required
          handleChange={handleChange} />}
      />
      <RenderRows
        left={<InputText
          type="number"
          id="age"
          label="Age"
          value={userObj.age}
          fullWidth
          handleChange={handleChange} />}
      />
    </Container>
    <RenderRows
      left={<Button color="secondary" name="Clear" onClick={clear} className={classes.buttonLeft} />}
      right={<Button color="primary" name="save" onClick={save} className={classes.buttonRight} />}
    />
  </>
  )
}