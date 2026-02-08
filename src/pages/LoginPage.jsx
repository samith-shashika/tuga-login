import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { ShipWheelIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
      return;
    }

    // No backend yet — simulate success
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          boxShadow={4}
          borderRadius={2}
          overflow="hidden"
        >
          {/* FORM SECTION */}
          <Grid item xs={12} md={6} p={5}>
            {/* Logo */}
            <Box display="flex" alignItems="center" mb={3} gap={1}>
              <ShipWheelIcon size={32} />
              <Typography variant="h5" fontWeight="bold">
                Streamify
              </Typography>
            </Box>

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" onSubmit={handleLogin} mt={3}>
              <Typography variant="h6" gutterBottom>
                Welcome Back
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={3}>
                Sign in to your account to continue
              </Typography>

              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>

              <Typography variant="body2" align="center" mt={2}>
                Don’t have an account?{" "}
                <Link to="#" style={{ textDecoration: "none" }}>
                  Create one
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* IMAGE SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            bgcolor="#f5f5f5"
          >
            <Box textAlign="center" p={4}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Login illustration"
                style={{ width: "100%", maxWidth: 300 }}
              />
              <Typography variant="h6" mt={3}>
                Connect with learners worldwide
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn, share, and grow together
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;