import { Divider, ListItem, ListItemButton, Typography } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";

const Task = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <FlexBox flexDirection="column">
            <Typography variant="h5">Test Title</Typography>
            <Typography variant="caption">Lorem ipsum dolor blah blah blah...</Typography>
          </FlexBox>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default Task;
