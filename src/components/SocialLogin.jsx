import { Box, Divider, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = result.user.accessToken;

      navigate("/dashboard", { state: { token } });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <>
      <Divider sx={{ my: 3 }}>or continue with</Divider>

      <Box display="flex" justifyContent="center" gap={2}>
        <IconButton
          onClick={handleGoogleLogin}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            width: 44,
            height: 44,
            "&:hover": { backgroundColor: "#111" },
          }}
        >
          <GoogleIcon />
        </IconButton>

        {[AppleIcon, FacebookIcon].map((Icon, index) => (
          <IconButton
            key={index}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              width: 44,
              height: 44,
              transition: "all 0.2s ease",
                "&:hover": {
                backgroundColor: "#111",
                color: "#fff"
                },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default SocialLogin;
