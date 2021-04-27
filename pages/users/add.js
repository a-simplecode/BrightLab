import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../components/button';
import Container, { RenderRows } from '../../components/container';
import InputText from '../../components/inputText';
import { toast } from 'react-toastify';

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
  const [userObjErr, setUserObjErr] = React.useState({});

  useEffect(() => {
    //fetch data from api
    let obj = { firstName: "", lastName: "", phoneNumber: "", email: "", age: "" };
    setUserObj(obj);
  }, [])

  const handleChange = (id, value) => {
    setUserObj({ ...userObj, [id]: value });
    if(value) setUserObjErr({ ...userObjErr, [id]: undefined})
  }

  const clear = () => {
    setUserObj({ firstName: "", lastName: "", phoneNumber: "", email: "", age: "" });
    setUserObjErr({});
  }

  const save = () => {
    let tempError ={};

    if(userObj.firstName === "") tempError.firstName = true
    if(userObj.lastName === "") tempError.lastName = true
    if(userObj.phoneNumber === "") tempError.phoneNumber = true
    if(userObj.email === "") tempError.email = true
    
    if(Object.keys(tempError).length > 0){
      setUserObjErr(tempError);
      toast.error("Some Required Fields Cannot be left Empty");
    }else{
      const dataObjToSave = userObj;
      //save data 
      toast.success("Save Successfully");
      goToList();
    }

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
          error={userObjErr.firstName}
          handleChange={handleChange} />}

        right={<InputText
          id="lastName"
          label="Last Name"
          value={userObj.lastName}
          fullWidth
          required
          error={userObjErr.lastName}
          handleChange={handleChange} />}
      />

      <RenderRows
        left={<InputText
          id="phoneNumber"
          label="Phone Number"
          value={userObj.phoneNumber}
          fullWidth
          required
          error={userObjErr.phoneNumber}
          handleChange={handleChange} />}

        right={<InputText
          id="email"
          label="Email"
          value={userObj.email}
          fullWidth
          required
          error={userObjErr.email}
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