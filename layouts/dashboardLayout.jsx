import React from "react";
import { Header, SideBar } from "../components/dashboard";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <SideBar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        // size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody />
          <SideBar onClose={onClose} />
          <DrawerFooter display="flex" justifyContent="center">
            <Button
              color="white"
              variant="dash"
              mr={3}
              fontSize="xl"
              onClick={onClose}
            >
              <RiLogoutCircleLine />
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} />
      <Box as="main" ml={{ base: 0, md: 60 }} p="4">
        <Box as="main" bg="white">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
