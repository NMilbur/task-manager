import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import FlexBox from "_components/_atoms/FlexBox";
import Page from "_components/_templates/Page";
import { COLORS } from "_constants/styles";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Page maxWidth="sm">
      <Card style={{ width: "100%" }}>
        <CardHeader
          title="Welcome to your task manager!"
          subheader="Log in or sign up to start"
        />
        <CardContent>
          <FlexBox flexDirection="column">
            <Box
              display="flex"
              flexDirection="column"
              rowGap={2}
              component="form"
              noValidate
            >
              <TextField label="Username" id="username" required />
              <FormControl variant="outlined">
                <InputLabel htmlFor="password">Password *</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  required
                />
              </FormControl>

              <Divider>
                <Typography variant="body2">
                  If signing up, please fill out the below information
                </Typography>
              </Divider>

              <TextField label="First Name" id="first-name" />
              <TextField label="Last Name" id="last-name" />
              <TextField label="Email" id="email" />

              <Button variant="contained">Submit</Button>
            </Box>
          </FlexBox>
        </CardContent>
      </Card>
    </Page>
  );
};

export default Login;
