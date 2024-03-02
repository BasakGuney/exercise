import { ChakraProvider, Stack } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  LinkBox,
  LinkOverlay,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import MyTreeView from "./treeview";
import { Box } from "@mui/material";
import { useState } from "react";
import Practice from "./practice";

const NavBar = (props) => {
  return (
    <>
      <ChakraProvider>
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Update Inventory</Tab>
            <Tab>Create Inventory</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Tabs defaultIndex={props.index}>
                <TabList>
                  <Tab>Hosts</Tab>
                  <Tab>Host Vars</Tab>
                  <Tab>Group Vars</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel> </TabPanel>
                  <TabPanel>
                    <Practice></Practice>
                  </TabPanel>
                  <TabPanel></TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Practice></Practice>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </>
  );
};

export default NavBar;
