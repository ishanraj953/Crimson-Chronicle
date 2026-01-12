import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function EventCard({_id,title,desc,img}) {


  return (
    <Link to={`/events/${_id}`}>
    <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: 'pointer' }}>
      <CardMedia
        sx={{ height: 250 }}
        image= {img}
        title= "Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
