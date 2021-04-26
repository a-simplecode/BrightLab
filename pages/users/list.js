import Head from 'next/head';
import MaterialTable from '../../components/MaterialTable';
import Button from '../../components/button';

const columns = [
  {
    field: 'fullName',
    title: 'Full name',
    headerStyle: {
      fontWeight: "bold",
    },
    render: rowData => <span>{rowData.firstName+" "+rowData.lastName}</span>,
  },
  { 
    field: 'phoneNumber', 
    title: 'Phone Number', 
    headerStyle: {
      fontWeight: "bold",
    },
  },
  { 
    field: 'email', 
    title: 'Email', 
    headerStyle: {
      fontWeight: "bold",
    },
  },
  {
    field: 'age',
    title: 'Age',
    type: 'numeric', 
    headerStyle: {
      fontWeight: "bold",
    },
  },
  {
    field: '',
    title: '',
  },
];

const data =[
  { id: 1, lastName: 'Snow', firstName: 'Jon',phoneNumber:"76466341",email:"amineamine@gmail.com", age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',phoneNumber:"7344334",email:"", age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',phoneNumber:"5653345",email:"jambo@gmail.com", age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya',phoneNumber:"",email:"amie@gmail.com", age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',phoneNumber:"3432246",email:"jpe@gmail.com", age: null },
  { id: 6, lastName: 'Melisandre', firstName: null,phoneNumber:"76466341",email:"amie@gmail.com", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',phoneNumber:"7344341",email:"tony@gmail.com", age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',phoneNumber:"56446341",email:"", age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',phoneNumber:"",email:"amie@gmail.com", age: 65 },
]

export default function UserList({addNew}) {
  return (<>
      <Head>
        <title>Users</title>
      </Head>
    <MaterialTable data={data} columns={columns} htmlTitle={<h3>Users List <Button color="primary" name="Add New" onClick={addNew}/></h3>}/>
    </>
  )
}