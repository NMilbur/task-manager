import { Breakpoint, Container, Toolbar } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import SideNav from "_components/_organisms/SideNav";
import TopNav from "_components/_molecules/TopNav";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  fullWidth?: boolean;
  maxWidth?: Breakpoint | false;
  showSideNav?: boolean;
  showTopNav?: boolean;
}

const Page = ({
  children,
  fullWidth = false,
  maxWidth = "xl",
  showSideNav = false,
  showTopNav = false,
  ...props
}: PageProps) => {
  return (
    <Container maxWidth={fullWidth ? false : maxWidth} {...props}>
      {showTopNav && <TopNav />}
      {showSideNav && <SideNav />}

      <Toolbar />
      <FlexBox mt={2} flexGrow={1} sx={{ marginLeft: showSideNav ? "25%" : undefined }}>
        {children}
      </FlexBox>
    </Container>
  );
};

export default Page;
