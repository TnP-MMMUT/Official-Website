import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data/TableData";
import { useState } from "react";
import "../../style/dataTable.css";

function TrainingTable() {
  const [data, setData] = useState(userRows);

  return (
    <>
      <div className="dataGrid" style={{ display: "flex" }}>
        <div className="tableTitle mx-auto text-center mt-3">
          Training Activities 2022-23
        </div>
        <div
          className="tableStyle"
          style={{ height: 790, width: "95%", flexGrow: 1 }}
        >
          <DataGrid
            disableColumnFilter
            disableSelectionOnClick
            rows={data}
            columns={userColumns}
            pageSize={13}
            rowsPerPageOptions={[13]}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TrainingTable;
