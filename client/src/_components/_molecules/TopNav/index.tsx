import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import { formatDate } from "_utilities/dates";

const TopNav = () => {
  return (
    <AppBar style={{ alignItems: "center" }}>
      <Toolbar>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          columnGap={3}
          style={{ color: "white" }}
        >
          <IconButton>
            <ChevronLeft fontSize="large" />
          </IconButton>

          <Typography variant="h4">{formatDate(new Date())}</Typography>

          <IconButton>
            <ChevronRight fontSize="large" />
          </IconButton>
        </FlexBox>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
