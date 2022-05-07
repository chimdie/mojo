import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";
import { createSubCol } from "../../redux/group";

export default function GroupCard({ title, description, amount, id }) {
  const dispatch = useDispatch();

  const handleGroupRegister = (groupDocId) => {
    dispatch(createSubCol(groupDocId));
  };
  return (
    <Box className="shadow-md rounded-md bg-slate-50 overflow-hidden max-w-md">
      <Flex justifyContent="space-between">
        <Box className="p-3 flex flex-col justify-around w-full">
          <Text className="text-2xl font-semibold">{title}</Text>
          <Text className="text-2xl font-semibold">{amount}</Text>
          <Box className="py-4 text-center w-full">
            <Text color="#fff" bg="whatsapp.600" className="py-2">
              Registered
            </Text>
          </Box>
        </Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<GoKebabVertical />}
            className="bg-white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            fontSize="18px"
          />
          <MenuList>
            <MenuItem>Transaction History</MenuItem>
            <MenuItem>Opt out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box className="p-3">
        <Text>{description}</Text>
      </Box>
      <Image src="/header.jpeg" alt="" className="object-cover block w-full" />
      <Button
        width="100%"
        color="#fff"
        bg="whatsapp.600"
        borderRadius="0"
        _hover={{ bg: "whatsapp.500" }}
        onClick={() => handleGroupRegister(id)}
      >
        Register
      </Button>
    </Box>
  );
}
