// Layout.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  position: fixed;
  width: 100%;
  height: 5rem;
  background-color: #001529;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: #f0f2f5;
  padding: 1rem;
  font-size: 1rem;
  height: 100%;
  color: rgba(0, 0, 0, 0.45);
`;

const StyledContent = styled(Content)`
  padding: 5rem 0 0 0 ;
  background: #fff;
  min-height: 90vh;
`;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <Layout style={{minHeight: '100%'}}>
    <StyledHeader>
      <Link to="/" style={{ color: "#fff", fontSize: "1.25rem" }}>
        Cadex
      </Link>
      <nav>
        <Link style={{}} to="/contact-us">Contact us</Link>
      </nav>
    </StyledHeader>
    <StyledContent>{children}</StyledContent>

    <StyledFooter>©2024 Cadex Test</StyledFooter>
  </Layout>
);

export default AppLayout;
