import { Box, Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";

const LoginPage = () => {
  const navigate = useNavigate();

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
          minHeight={{ xs: "auto", md: "80vh" }}
          borderRadius={3}
          boxShadow={4}
          overflow="hidden"
        >
          {/* LEFT */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={{ xs: 3, sm: 4, md: 6 }}
            py={{ xs: 2, md: 5 }}
            sx={{
              /* Login button hover */
              "& button[type='submit']": {
                transition: "all 0.25s ease",
              },
              "& button[type='submit']:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              },
              "& button[type='submit']:active": {
                transform: "translateY(0)",
                boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              },

              /* Social icons hover */
              "& .MuiIconButton-root": {
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              },
              "& .MuiIconButton-root:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              },
            }}
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

            <LoginForm onSuccess={() => navigate("/dashboard")} />
            <SocialLogin />

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

          {/* RIGHT */}
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
                style={{
                  width: "100%",
                  maxWidth: 420,
                  transform: "scale(1.3)",
                }}
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




