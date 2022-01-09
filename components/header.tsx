import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import styled from "styled-components";
import {
  MdHome,
  MdChat,
  MdFavorite,
  MdInsertPhoto,
  MdEventAvailable,
  MdMessage,
} from "react-icons/md";

const Tabs = styled(Navbar)`
  box-shadow: 0 -6px 10px -5px hsl(0deg 0% 44% / 30%);
  padding: 0;
`;

const TabLink = styled(Nav.Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 0;
`;

const TabHref = styled.span`
  font-weight: 600;
`;

const menu = [
  {
    icon: <MdHome />,
    label: "Home",
    href: "#home",
  },
  {
    icon: <MdChat />,
    label: "Story",
    href: "#story",
  },
  {
    icon: <MdFavorite />,
    label: "Couple",
    href: "#couple",
  },
  {
    icon: <MdEventAvailable />,
    label: "Event",
    href: "#event",
  },
  {
    icon: <MdInsertPhoto />,
    label: "Gallery",
    href: "#gallery",
  },
  {
    icon: <MdMessage />,
    label: "Guest Book",
    href: "#guest-book",
  }
];

const Header = () => (
  <Tabs bg="light" expand="lg" fixed="bottom" className="mx-auto">
    <Container className="justify-content-center">
      <Nav variant="pills" defaultActiveKey="/" className="mx-auto">
        {menu.map((item, index) => (
          <Nav.Item key={index}>
            <TabLink href={item.href}>
              <Stack className="align-items-center">
                {item.icon}
                <TabHref className="d-none d-lg-block">{item.label}</TabHref>
              </Stack>
            </TabLink>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  </Tabs>
);

export default Header;
