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

export default function Cargo() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div>No orders or trips selected</div>
    </>
  );
}
