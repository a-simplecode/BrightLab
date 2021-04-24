import Head from 'next/head';
import Button from '../../components/button';

export default function UserList({goToList}) {
  return (<>
      <Head>
        <title>Add User</title>
      </Head>
      <h3>
        Add User <Button color="primary" name="Back" onClick={goToList}/>
      </h3>
      
    </>
  )
}