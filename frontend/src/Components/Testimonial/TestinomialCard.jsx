import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function TestinomialCard() {
  return (
    <Card sx={{ maxWidth: 400, p: 2 }}>
      
      {/* User Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Avatar src="https://i.pravatar.cc/150?img=5" alt="User" />
        <Box>
          <Typography variant="h6">Rahul Sharma</Typography>
          <Typography variant="body2" color="text.secondary">
            Web Developer
          </Typography>
        </Box>
      </Box>

      {/* Testimonial Text */}
      <CardContent sx={{ p: 0 }}>
        <Typography variant="body1" color="text.secondary">
          “Loser helped me discover hackathons and internships that boosted my confidence and skills.  
          It truly changed my learning journey.”
        </Typography>
      </CardContent>

    </Card>
  );
}
