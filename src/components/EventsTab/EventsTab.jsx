import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import "./EventsTab.css";
import { Grid } from "swiper";
import Sponsor from "../Sponsor/Sponsor";
import Register from "../Register/Register";
import Venue from "../Venue/Venue";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GrNote } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

function EventsTab(props) {
  const allData = ["a", "b", "b", "b", "b", "b", "b", "b", "b"];

  useEffect(() => {
    console.log("eventData2: ", props);
  }, []);

  return (
    <Container>
      <Tabs>
        <TabList display={"flex"} flexWrap={"wrap"} width={"100%"}>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
            color={"gray"}
          >
            <Box mx={"2"} as="span">
              <BsFillPersonFill className="tab-icons" />
            </Box>
            Speakers
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
            color={"gray"}
          >
            <Box mx={"2"} as="span">
              <AiFillStar className="tab-icons" />
            </Box>
            Sponsors
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
            color={"gray"}
          >
            <Box mx={"2"} as="span">
              <GrNote className="reg-icon" />
            </Box>
            Register
          </Tab>
          <Tab
            justifyContent={"start"}
            minWidth={"120px"}
            alignItems={"center"}
            width={"25%"}
            color={"gray"}
          >
            <Box mx={"2"} as="span">
              <MdLocationOn className="tab-icons" />
            </Box>
            Venue
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="row gap-5">
              {props?.eventData?.speakers?.map((elem) => {
                return <SpeakerCard elem={elem} />;
              })}
            </div>
          </TabPanel>
          <TabPanel>
            {/* {props?.eventData?.sponsors?.map((elem) => {
              return <Sponsor elem={elem} />;
            })} */}
            <Sponsor elem={props?.eventData?.sponsors} />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
          <TabPanel>
            <Venue
              locationHeader={props?.eventData?.location_header}
              locationDetail={props?.eventData?.location_detail}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default EventsTab;
