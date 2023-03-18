import { Button, Card, CardContent, Typography } from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import { formatDate } from "_utilities/dates";

const TaskDetail = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <FlexBox flexDirection="column" rowGap={2} p={2}>
          <FlexBox justifyContent="space-between">
            <Typography variant="h3">Test Title</Typography>
            <FlexBox alignItems="flex-start" columnGap={1}>
              <Button variant="contained" color="success">
                Complete
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </FlexBox>
          </FlexBox>
          <Typography variant="caption">
            Due: {formatDate(new Date())}
          </Typography>
          <Typography variant="body1">
            Did you hear that? They've shut down the main reactor. We'll be
            destroyed for sure. This is madness! We're doomed! There'll be no
            escape for the Princess this time. What's that? Artoo! Artoo-Detoo,
            where are you? At last! Where have you been? They're heading in this
            direction. I must go alone. Whatever you say. I've done more that I
            bargained for on this trip already. Be patient, Luke. Stay and watch
            over the droids. It's an energy field created by all living things.
            It surrounds us and penetrates us. It binds the galaxy together.
            Now, let's see if we can't figure out what you are, my little
            friend.{" "}
          </Typography>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default TaskDetail;
