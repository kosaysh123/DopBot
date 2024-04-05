import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MainHome from "../MainHome/MainHome";
import "../MainBotPage/MainBotPage.css";
import Profile from "../../Profile/Profile";
import Servere from "../../Servere/Servere";
import User from "../../User/User";
import GeneralPage from "../GeneralPage/GeneralPage";
import GeneralTowPage from "../GeneralTowPage/GeneralTowPage";
import { useState } from "react";
import GeneralThreePage from "../GeneralThreePage/GeneralThreePage";
import GeneralFourPage from "../GeneralFourPage/GeneralFourPage";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#1d26347d", display: "flex", width: "100%" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="العامة"
          {...a11yProps(0)}
          style={{ fontFamily: "A", fontWeight: "900", fontSize: "21px" }}
        />
        <Tab
          label="خصائص متقدمة "
          {...a11yProps(1)}
          style={{ fontFamily: "A", fontWeight: "900", fontSize: "21px" }}
        />
        <Tab
          label="الترحيب و المغادرة"
          {...a11yProps(2)}
          style={{ fontFamily: "A", fontWeight: "900", fontSize: "21px" }}
        />
        <Tab
          label="الرد التلقائي"
          {...a11yProps(3)}
          style={{ fontFamily: "A", fontWeight: "900", fontSize: "21px" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GeneralPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GeneralTowPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GeneralThreePage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GeneralFourPage/> 
      </TabPanel>
    </Box>
  );
}
