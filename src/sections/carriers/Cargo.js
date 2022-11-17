import * as React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Divider, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";

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
export default function Cargo() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div>
        <Box mt={2}>
          <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
            <TextField
              id="outlined-basic"
              label="Vehicle empty Weight"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Vehicle Full Weight"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Vehicle axels"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Length"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>
          <Box display={desktop ? "flex" : "block"} gap={2} mt={1}>
            <TextField
              id="outlined-basic"
              label="Wdith"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Height"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="MAx Weight"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Max Euro pallets"
              variant="outlined"
              sx={{ width: desktop ? 200 : 320, mt: desktop ? "0px" : 2 }}
            />
          </Box>
        </Box>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Additional Information"
          style={{ width: "100%", marginTop: "20px" }}
        />
      </div>
    </>
  );
}
