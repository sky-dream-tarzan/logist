import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, Grid, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function Invoice() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [loadingValue, setLoadingValue] = React.useState([null, null]);
  const [unloadingValue, setUnloadingValue] = React.useState([null, null]);
  return (
    <>
      <div>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={desktop ? 3 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Template
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Invoice Number"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <FormControl sx={{ minWidth: 320, mt: desktop ? "0px" : 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Contractor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>{" "}
                <TextField
                  id="outlined-basic"
                  label="Player"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
              </Box>
            </Grid>
            <Grid item xs={desktop ? 3 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="Invoice Issued"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Pay until"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 220 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Without VAT"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
                <TextField
                  id="outlined-basic"
                  label="With VAT"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 220 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
                <TextField
                  id="outlined-basic"
                  label="Orders"
                  variant="outlined"
                  sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
                />
                <FormControl
                  sx={{
                    minWidth: desktop ? 120 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Pricing Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={desktop ? 3 : 12}>
              <Box display={desktop ? "flex" : "block"} gap={2}>
                <FormControl
                  sx={{
                    minWidth: desktop ? 220 : 320,
                    mt: desktop ? "0px" : 2,
                  }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Made
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                  >
                    <MenuItem value={1}>VIP</MenuItem>
                    <MenuItem value={2}>SUper klientas</MenuItem>
                    <MenuItem value={3}>Paprastas klientas</MenuItem>
                    <MenuItem value={4}>NEDIRBTI</MenuItem>
                  </Select>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Additional Information"
                    style={{ width: "100%", marginTop: "20px" }}
                  />
                </FormControl>
              </Box>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Use nonstandard invoice template"
              />
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Without stamps and signature"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
