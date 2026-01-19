import { Card, CardContent, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

export default function IconCard({bgcolor, icon, title, desc,link}) {
  return (
   <Link to={link}>
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Card
        sx={{
          width: 300,
          textAlign: "center",
          pt: 5,
          position: "relative",
          borderRadius: 10,
          border: `4px solid ${bgcolor}`,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          ":hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 6,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: bgcolor,
            color: "white",
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
          }}
        >
          {icon}
        </Box>

        <CardContent>
          <Typography variant="h6" sx={{ color: bgcolor }} mt={4} fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={2}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Link>
  );
}
