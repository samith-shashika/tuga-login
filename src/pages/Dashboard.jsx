import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={3}
    >
      <Typography variant="h4" mb={2}>
        Login Successful
      </Typography>

      <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
        <strong>Access Token:</strong> {state?.token}
      </Typography>
    </Box>
  );
};

export default Dashboard;

