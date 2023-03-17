import { Box, Drawer, List, Toolbar } from "@mui/material";
import Task from "_components/_molecules/Task";

const drawerWidth = "25%";

const SideNav = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[1, 2, 3, 4].map((num) => (
            <Task key={num} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
