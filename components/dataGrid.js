import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DaraGrid ({data, columns, pageSize,checkboxSelection}) {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={data}
        pageSize={pageSize}
        checkboxSelection={checkboxSelection? true : false}
      />
    </div>
  );
}