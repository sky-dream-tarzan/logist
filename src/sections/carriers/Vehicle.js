import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import Basic from "./Basic";
import Cargo from "./Cargo";
const style = {
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const columns = [
  { field: "id", headerName: "Order Number", width: 120 },
  { field: "date", headerName: "Order Date" },
  { field: "status", headerName: "Order Status", width: 150 },
  { field: "cient", headerName: "Client" },
  { field: "carriers", headerName: "Carriers", width: 120 },
  { field: "trip", headerName: "Trip Number", width: 150 },
  { field: "routes", headerName: "Routes", width: 100 },
  { field: "cargo", headerName: "Cargo parameters", width: 150 },
  { field: "freight", headerName: "Freight", width: 100 },
  { field: "additional", headerName: "Additional expenses", width: 150 },
  { field: "profit", headerName: "Profit" },
  { field: "document", headerName: "Documents" },
];

const rows = [
  {
    id: 1,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 2,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
  {
    id: 3,
    date: "Snow",
    status: "Jon",
    carriers: "",
    trip: "",
    routes: "",
    cargo: "IE",
    freight: "AM",
    additional: "",
    udate: "",
    profit: "UAB",
    document: "Darius",
  },
];
export default function Vehicle() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [filterTransport, setFilterTransport] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Delete = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterTransport(false);
        break;
    }
  };
  const Display = (filterItem) => {
    switch (filterItem) {
      case 1:
        setFilterTransport(!filterTransport);
        break;
    }
  };
  return (
    <>
      <div>
        <Box p={1}>
          <Box className="filterBox" gap={3}>
            <Typography sx={{ position: "absolute" }}>
              Show Filters:{" "}
            </Typography>
            <Button
              variant={filterTransport === false ? "outlined" : "contained"}
              sx={{ ml: "180px" }}
              onClick={() => Display(1)}
            >
              Transport
            </Button>
          </Box>

          <Box
            className="filterBox"
            gap={3}
            mt="30px"
            display={
              desktop
                ? filterTransport == true
                  ? "flex"
                  : "none"
                : filterTransport == true
                ? "block"
                : "none"
            }
          >
            <Typography sx={{ position: "absolute" }}>Transport: </Typography>
            <Button
              variant="contained"
              color="warning"
              startIcon={<ClearIcon />}
              sx={{ ml: "120px" }}
              onClick={() => Delete(1)}
            >
              Del
            </Button>
            <TextField
              id="outlined-basic"
              label="Vehicle Number"
              variant="outlined"
              sx={{
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
            <FormControl sx={{ m: 1, minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Transport Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320, mt: desktop ? "0px" : 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Group
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Age"
              >
                <MenuItem value={1}>VIP</MenuItem>
                <MenuItem value={2}>SUper klientas</MenuItem>
                <MenuItem value={3}>Paprastas klientas</MenuItem>
                <MenuItem value={4}>NEDIRBTI</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Carrier"
              variant="outlined"
              sx={{
                width: desktop ? "200" : 320,
                mt: desktop ? "0px" : 2,
                ml: desktop ? "60px" : "0px",
              }}
            />
          </Box>
          <Divider
            sx={{ mt: 1, display: filterTransport === true ? "flex" : "none" }}
          />
        </Box>
        <Box
          display={desktop ? "flex" : "block"}
          justifyContent="space-between"
          mt={2}
        >
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              sx={{ borderRadius: "20px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<FilterAltIcon />}
              sx={{ borderRadius: "20px" }}
            >
              To Filter
            </Button>
          </Box>
          <Box display={desktop ? "flex" : "block"} gap={3} alignItems="center">
            <Button
              variant="outlined"
              color="success"
              startIcon={<AddIcon />}
              sx={{ borderRadius: "20px" }}
              onClick={handleOpen}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Box mt={2}>
          <div style={{ height: 400, width: "auto" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            height: desktop ? "" : "100%",
            overflow: desktop ? "hidden" : "scroll",
          }}
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              fontWeight="700"
              component="h2"
            >
              New request
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleTabChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    icon={<span className="active" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>
                          Basic Information
                        </span>
                      </Box>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<span className="archive" />}
                    label={
                      <Box className="tabBtn">
                        <span style={{ color: "white" }}>
                          Cargo Information
                        </span>
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Basic />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Cargo />
              </TabPanel>
            </Box>

            <Box display="flex" justifyContent="end" m={2}>
              <Button variant="contained" color="success" onClick={handleClose}>
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}