"use client";
import React, { useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { ASSET_KEYS } from "@/app/utils/constants/AssetConstants";
import StudentDialog from "../student/StudentDetailInteraction";
import { paginationStyles } from "./PaginationStyle";

function TableUi({ tableData, role }: { tableData?: any; role: string }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleRowClick = () => {
    switch (role) {
      case "student":
        setOpenDialog(true);
        break;
      default:
    }
  };
  const renderTableBody = () => {
    return tableData?.tableContents.map((rowData: any, rowIndex: number) => (
      <TableRow key={rowIndex} onClick={handleRowClick}>
        {tableData?.tableHeaders.map(
          (headerText: string, columnIndex: number) => (
            <TableCell
              sx={{
                borderBottom: "none",
                fontFamily: "Trebuchet MS",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13.93px",
                textAlign: "left",
                color: "#1E4540",
              }}
              key={columnIndex}
            >
              {rowData[headerText]}
            </TableCell>
          )
        )}
      </TableRow>
    ));
  };
  const getHeaderDesign = () => {
    return (
      <TableRow>
        {tableData?.tableHeaders.map(
          (headerText: string, columnIndex: number) => (
            <TableCell
              sx={{
                backgroundColor: "#F2FCF4",
                fontFamily: "Trebuchet MS",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "16.26px",
                textAlign: "left",
                borderBottom: "none",
              }}
              key={columnIndex}
            >
              <Grid display="flex" alignItems="center">
                <Typography>{headerText}</Typography>
                <TableSortLabel
                  active={true}
                  IconComponent={() => (
                    <Grid mt={1}>
                      <img
                        data-testid="sortIcon"
                        alt="sortIcon"
                        width={"30px"}
                        src={ASSET_KEYS.ascendingIcon}
                      />
                    </Grid>
                  )}
                  // onClick={() => createSortHandler(columnIndex)}
                ></TableSortLabel>
              </Grid>
            </TableCell>
          )
        )}
      </TableRow>
    );
  };

  return (
    <Grid>
      <TableContainer>
        <Table>
          <TableHead>{getHeaderDesign()}</TableHead>
          {/* TableBody and rows rendering logic here */}
          <TableBody>
            {tableData?.tableContents && tableData.tableContents.length > 0 ? (
              renderTableBody()
            ) : (
              <TableRow>
                <TableCell
                  colSpan={tableData?.tableHeaders.length}
                  align="center"
                >
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {role === "student" && (
        <StudentDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
        ></StudentDialog>
      )}
      {!tableData?.isLoading &&
        tableData?.tableContents &&
        tableData?.tableContents?.length > 0 && (
          <div className="pagination-container" data-testid="paginate">
            <div
              style={{
                ...paginationStyles.paginationContainer,
                flexDirection: "row",
                position: "fixed",
                bottom: 0,
                right: 0,
                justifyContent: "flex-end",
                boxShadow: "none",
                height: "30px",
              }}
            >
              <li style={paginationStyles.pageItemButton}>
                <button
                  style={
                    // pagination.currentPage === 1
                    //   ? {
                    //       ...paginationStyles.pageLink,
                    //       ...paginationStyles.disabledPageLink,
                    //     }
                    paginationStyles.pageLink
                  }
                  // onClick={() => handlePageChange(pagination.currentPage - 1)}
                >
                  &lt;
                </button>
              </li>
              <li style={paginationStyles.pageItem}>
                <a style={paginationStyles.pageText}>page</a>
                <FormControl>
                  <Select
                    sx={paginationStyles.pageBoxBorder}
                    // value={pagination.currentPage}
                    // onChange={(e) => handlePageChange(Number(e.target.value))}
                    MenuProps={{
                      PaperProps: {
                        sx: paginationStyles.pageMenuItemScrollBar,
                      },
                    }}
                  >
                    {/* {pageOptions.map((option) => ( */}
                    <MenuItem
                      key={Math.random()}
                      // value={option}
                      sx={paginationStyles.pageMenuItem}
                    >
                      {2}
                    </MenuItem>
                    {/* ))} */}
                  </Select>
                </FormControl>
              </li>
              <li style={paginationStyles.pageItem}>
                <a style={paginationStyles.pageText}>of totalPages</a>
              </li>
              <li style={paginationStyles.pageItem}>
                <button
                  style={
                    //   pagination.currentPage === totalPages
                    //     ? {
                    //         ...paginationStyles.pageLink,
                    //         ...paginationStyles.disabledPageLink,
                    //       }
                    paginationStyles.pageLink
                  }
                  // onClick={() => handlePageChange(pagination.currentPage + 1)}
                  // disabled={pagination.currentPage === totalPages}
                >
                  &gt;
                </button>
              </li>
            </div>
          </div>
        )}
    </Grid>
  );
}

export default TableUi;
