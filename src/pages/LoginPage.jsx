import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // 🔐 Validation Logic
  const validateForm = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!loginData.username) {
      newErrors.username = "Email is required";
      valid = false;
    } else if (!emailRegex.test(loginData.username)) {
      newErrors.username = "Enter a valid email address";
      valid = false;
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (loginData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
        <Grid
          container
          minHeight="80vh"
          borderRadius={3}
          boxShadow={4}
          overflow="hidden"
        >
          {/* LEFT SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={6}
          >
            <Typography variant="h4" fontWeight="bold" mb={1} textAlign="center">
              Welcome back!
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={4}
              textAlign="center"
            >
              Simplify your workflow and boost your productivity <br />
              with <strong>Tuga’s App</strong>. Get started for free.
            </Typography>

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                placeholder="Username"
                margin="normal"
                value={loginData.username}
                error={Boolean(errors.username)}
                helperText={errors.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "30px" } }}
              />

              <TextField
                fullWidth
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                value={loginData.password}
                error={Boolean(errors.password)}
                helperText={errors.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "30px" } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="body2"
                textAlign="right"
                color="text.secondary"
                mt={1}
              >
                Forgot Password?
              </Typography>

              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: "30px",
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                Login
              </Button>
            </Box>

            <Divider sx={{ my: 3 }}>or continue with</Divider>

            {/* SOCIAL LOGIN ICONS */}
            <Box display="flex" justifyContent="center" gap={2}>
              {[GoogleIcon, AppleIcon, FacebookIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    width: 44,
                    height: 44,
                    "&:hover": { backgroundColor: "#111" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>

            <Typography variant="body2" textAlign="center" mt={3}>
              Not a member?{" "}
              <Typography
                component={Link}
                to="#"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Register now
              </Typography>
            </Typography>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            bgcolor="#F5FAF4"
          >
            <Box textAlign="center" px={4}>
              <img
                src="/i.png"
                alt="illustration"
                style={{ width: "100%", maxWidth: 360 }}
              />

              <Typography variant="h6">
                Make your work easier and organized
              </Typography>

              <Typography variant="h6">
                with <strong>Tuga’s App</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;


