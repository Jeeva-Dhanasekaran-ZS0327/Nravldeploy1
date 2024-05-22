import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Divider, Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }: any) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    borderRadius: "24px",
  },
}));

export default function StudentDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontFamily: "Trebuchet MS",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.22px",
            textAlign: "left",
            color: "#25A53B",
          }}
          id="customized-dialog-title"
        >
          Detail Interactie
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <DialogContent dividers> */}
        {/* <DialogContent> */}
        <Grid pl={3} pb={2}>
          <Grid>
            <Typography>Schooljaar</Typography>
            <Typography>Datum gesprek</Typography>
            <Typography>Uur gesprek</Typography>
            <Typography>Initiatiefnemer</Typography>
            <Typography>Initiatiefnemer andere</Typography>
            <Typography>Reden</Typography>
            <Typography>Reden ander</Typography>
            <Typography>Verslag</Typography>
          </Grid>
        </Grid>
        {/* </DialogContent> */}
        <Divider />
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontFamily: "Trebuchet MS",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.22px",
            textAlign: "left",
            color: "#25A53B",
          }}
          id="customized-dialog-title"
        >
          Maatregelen
        </DialogTitle>
        <DialogContent>
          <Card sx={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography>1135 - Aangepaste kledij</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography>1135 - Aangepaste kledij</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography>1135 - Aangepaste kledij</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          {/* <Typography>Maatregelen</Typography> */}
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
