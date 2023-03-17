import { Breakpoint, Container, Toolbar } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import TopNav from "_components/_molecules/TopNav";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  fullWidth?: boolean;
  maxWidth?: Breakpoint | false;
  showNav?: boolean;
}

const Page = ({
  children,
  fullWidth = false,
  maxWidth = "xl",
  showNav = false,
  ...props
}: PageProps) => {
  return (
    <Container maxWidth={fullWidth ? false : maxWidth} {...props}>
      {showNav && <TopNav />}
      <Toolbar />
      <FlexBox m={4}>{children}</FlexBox>
    </Container>
  );
};

export default Page;
