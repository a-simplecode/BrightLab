import Head from 'next/head';
import MaterialTable from '../../components/MaterialTable';

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
    field: 'email', 
    title: 'Email', 
    headerStyle: {
      fontWeight: "bold",
    },
  },{ 
    field: 'invoiceNo', 
    title: 'Invoice NO', 
    headerStyle: {
      fontWeight: "bold",
    },
  },{ 
    field: 'total', 
    title: 'Total', 
    headerStyle: {
      fontWeight: "bold",
    },
    render: rowData => <span>{rowData.total+" "+rowData.currency}</span>,
  },{ 
    field: 'VAT', 
    title: 'VAT', 
    headerStyle: {
      fontWeight: "bold",
    },
  },
]; 

  const data =[
    { id: 1, lastName: 'Snow', firstName: 'Jon',email:"amineamine@gmail.com", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:"fjhrt@gmail.com", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',email:"drger@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya',email:"efer@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 12, lastName: 'Snow', firstName: 'Jon', email:"34t3g@gmail.com", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 22, lastName: 'Lannister', firstName: 'Cersei',email:"sefsdfsd@gmail.com", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 32, lastName: 'Lannister', firstName: 'Jaime',email:"34fvsf@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 42, lastName: 'Stark', firstName: 'Arya',email:"dfs@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 13, lastName: 'Snow', firstName: 'Jon',email:"amineamine@gmail.com", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 23, lastName: 'Lannister', firstName: 'Cersei',email:"amineamine@gmail.com", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 33, lastName: 'Lannister', firstName: 'Jaime',email:"amineamine@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 43, lastName: 'Stark', firstName: 'Arya',email:"amineamine@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon',email:"amineamine@gmail.com", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:"amineamine@gmail.com", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',email:"amineamine@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya',email:"amineamine@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon',email:"", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:"amineamine@gmail.com", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',email:"amineamine@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya',email:"amineamine@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon',email:"amineamine@gmail.com", invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:"", invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',email:"amineamine@gmail.com", invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya',email:"amineamine@gmail.com", invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
    { id: 1, lastName: 'Snow', firstName: 'Jon', invoiceNo:"1234",total:45662,currency:"LL" ,VAT:"12%" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', invoiceNo:"5678",total: 55677,currency:"LL",VAT:"12%"  },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', invoiceNo:"8654" , total:12455,currency:"LL",VAT:"12%" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', invoiceNo: "343443" ,total:77,currency:"$",VAT:"12%" },
  ]

export default function SalesList() {
  return (<>
      <Head>
        <title>Sales</title>
      </Head>
    <MaterialTable data={data} columns={columns} htmlTitle={<h3>Sales List</h3>}/>
    </>
  )
}