import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function EventCard({title,desc,img}) {


  return (
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
  );
}
