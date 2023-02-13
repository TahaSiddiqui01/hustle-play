import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import "./EventsTab.css";
import { Grid } from "swiper";
import Sponsor from "../Sponsor/Sponsor";
import Register from "../Register/Register";
import Venue from "../Venue/Venue";
import SpeakerCard from "../SpeakerCard/SpeakerCard";

function EventsTab() {
  const allData = ["a", "b", "b", "b", "b", "b", "b", "b", "b"];

  return (
    <Container>
      <Tabs>
        <TabList display={"flex"} flexWrap={"wrap"} width={"100%"}>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
          >
            <Box mx={"2"} as="span">
              😚
            </Box>
            Speakers
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
          >
            <Box mx={"2"} as="span">
              😚
            </Box>
            Sponsors
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
          >
            <Box mx={"2"} as="span">
              😚
            </Box>
            Register
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
          >
            <Box mx={"2"} as="span">
              😚
            </Box>
            Venue
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="row gap-5">
              {allData?.map((elem) => {
                return <SpeakerCard/>
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <Sponsor />
            <Sponsor />
            <Sponsor />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
          <TabPanel>
            <Venue />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default EventsTab;
