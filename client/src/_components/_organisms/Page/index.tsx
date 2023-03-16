import { Breakpoint, Container } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  fullWidth?: boolean;
  maxWidth?: Breakpoint | false;
}

const Page = ({ children, fullWidth = false, maxWidth = "xl", ...props }: PageProps) => {
  return (
    <Container maxWidth={fullWidth ? false : maxWidth} {...props}>
      <FlexBox m={4}>{children}</FlexBox>
    </Container>
  );
};

export default Page;
