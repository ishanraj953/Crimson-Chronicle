import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function EventCard({ _id, title, desc, img }) {
  return (
    <Link to={`/events/${_id}`} style={{ textDecoration: "none" }}>
      <Card 
        sx={{ 
          width: 345, 
          height: 420,
          borderRadius: 10, 
          cursor: 'pointer',
          display: "flex",
          flexDirection: "column",
          boxShadow: 12,
          transition: `0.3s ease all`,
          ":hover": {
            transform: "translateY(-8px)scale(1.04)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardMedia
          sx={{ height: 220 }}
          image={img}
          title="Image"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Typography>

          <Typography 
            variant="body2" 
            sx={{
              color: 'text.secondary',
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
            mt={3}
          >
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
