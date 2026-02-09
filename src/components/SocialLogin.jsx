import { Box, Divider, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialLogin = () => {
  return (
    <>
      <Divider sx={{ my: 3 }}>or continue with</Divider>

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
    </>
  );
};

export default SocialLogin;
