export const paginationStyles = {
  paginationContainer: {
    width: "100%",
    position: "fixed",
    marginBottom: "0px",
    right: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    backgroundColor: "white",
    padding: "16px",
    marginRight: "16px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    color: "#30261DB2",
  },
  pageMenuItem: {
    fontSize: "10px",
    "& .css-1ko7onh-MuiButtonBase-root-MuiMenuItem-root": {
      fontSize: "0.7rem",
    },
    "& .MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
      height: "100px",
    },
  },
  pageItemButton: {
    marginLeft: "18px",
    listStyle: "none",
  },
  textButton: {
    background: "none",
    border: "none",
    padding: 0,
    fontSize: "inherit",
    borderColor: "#30261D33",
    letterSpacing: "8px",
    cursor: "pointer",
  },
  pageItem: {
    listStyle: "none",
    "&.MuiInputBaseRoot MuiOutlinedInputRoot MuiInputBaseColorPrimary MuiInputBaseFullWidth MuiInputBaseSizeSmall  cssBv82ywMuiInputBaseRootMuiOutlinedInputRootMuiSelectRoot":
      {
        borderColor: "#30261D33",
      },
  },
  pageLink: {
    color: "#30261D",
    textDecoration: "none",
    cursor: "pointer",
    backgroundColor: "#fff",
    border: "#fff",
  },
  pageLinkHover: {
    backgroundColor: "#f8f9fa",
    border: "#fff",
  },
  activePageLink: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  disabledPageLink: {
    cursor: "not-allowed",
    color: "#30261D33",
    pointerEvents: "none",
    backgroundColor: "#fff",
  },
  pageDropDown: {
    m: 1,
  },
  borderOnFocus: {
    "& .MuiOutlinedInput-root": {
      padding: "0rem",
      fontSize: "1rem",
      borderRadius: "6px",
      borderColor: "#30261D33",
    },
    "& .MuiSvgIcon-root": {
      color: "#EB0045",
    },
  },
  labelStyles: {
    paddingLeft: "10px",
  },
  pageBox: {
    paddingTop: "2px",
    paddingBottom: "2px",
    fontSize: "6px",
    height: "34px",
    width: "34px",
    color: "black",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#30261D33",
    },
  },
  pageText: {
    fontSize: "12px",
    fontFamily: "Montserrat",
    padding: "8px",
    bottom: "0",
    right: "0",
    fontWeight: 500,
  },
  rowText: {
    fontSize: "12px",
    fontFamily: "Montserrat",
    padding: "8px",
    marginLeft: "1px",
    marginRight: "1px",
    fontWeight: 500,
    marginBottom: "100px",
  },
  boxText: {
    fontSize: "12px",
    fontFamily: "Montserrat",
    padding: "3px",
    paddingLeft: "4px",
    paddingRight: "4px",
    marginLeft: "4px",
    marginRight: "4px",
    bottom: "0",
    borderColor: "#30261D33",
    right: "0",
    borderRadius: "3px",
    fontWeight: 500,
  },
  pageBoxBorder: {
    paddingTop: "0px",
    fontSize: "10px",
    height: "20px",
    "& .MuiOutlinedInput-root": {
      padding: "1px !important",
      fontSize: "10px",
      borderRadius: "3px",
      borderColor: "#30261D33",
    },

    "& .MuiSvgIcon-root": {
      color: "black",
      fontSize: "1rem",
    },
  },
  rowBoxBorder: {
    paddingTop: "0px",
    fontSize: "10px",
    height: "23px",
    "& .MuiOutlinedInput-root": {
      padding: "1px !important",
      fontSize: "10px",
      borderRadius: "3px",
      borderColor: "#30261D33",
    },
    "& .MuiSvgIcon-root": {
      color: "black",
      fontSize: "1rem",
    },
  },
  pageMenuItemScrollBar: {
    maxHeight: "130px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#007CBA",
      borderRadius: "8px",
      height: "25px !important",
    },
  },
};
