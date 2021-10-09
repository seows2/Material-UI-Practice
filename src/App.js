/* eslint-disable no-unused-vars */
import React from 'react';
import MaterialTable, { MTableHeader, MTableToolbar } from 'material-table';

function App() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Adı', field: 'name' },
          { title: 'Soyadı', field: 'surname' },
          { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          {
            title: 'Doğum Yeri',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        ]}
        title="Demo Title"
        options={{ selection: true }}
        components={{
          Toolbar: (props) => <div>asd</div>,
        }}
        localization={{ pagination: { labelRowsPerPage: '페이지' } }}
      />
    </div>
  );
}
export default App;
