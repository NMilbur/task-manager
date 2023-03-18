import { Divider, ListItem, ListItemButton, Typography } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import { formatDate } from "_utilities/dates";

const Task = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <FlexBox flexDirection="column" flexGrow={1}>
            <FlexBox justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Test Title</Typography>
              <Typography variant="caption">
                {formatDate(new Date(), "MMMM d, y h:mm a")}
              </Typography>
            </FlexBox>

            <Typography variant="caption">Lorem ipsum dolor blah blah blah...</Typography>
          </FlexBox>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default Task;
