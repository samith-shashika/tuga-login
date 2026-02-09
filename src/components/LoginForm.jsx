import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = ({ onSuccess }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSuccess();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
        sx={{
            cursor: "pointer",
            "&:hover": {
            textDecoration: "underline",
            },
        }}
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
  );
};

export default LoginForm;


