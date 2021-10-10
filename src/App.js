/* eslint-disable no-unused-vars */
import React from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Button, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  MuiTable: {
    '& .MuiTablePagination-caption': {
      display: 'block !important',
    },
    '& .MTableToolbar-root-6': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    '& .button-wraaper': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.MuiTable}>
      <MaterialTable
        columns={[{ title: 'Class', field: 'class' }]}
        data={[
          { class: 'test1' },
          { class: 'test2' },
          { class: 'test3' },
          { class: 'test4' },
          { class: 'test5' },
          { class: 'test6' },
          { class: 'test7' },
          { class: 'test8' },
          { class: 'test9' },
          { class: 'test10' },
        ]}
        title="sidebar2"
        options={{ selection: true, showTextRowsSelected: false }}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div className="button-wraaper">
                <div style={{ padding: '0px 10px' }}>
                  <Button variant="outlined">생성</Button>
                </div>
                <div style={{ padding: '0px 10px' }}>
                  <Button variant="outlined">삭제</Button>
                </div>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}
export default App;
