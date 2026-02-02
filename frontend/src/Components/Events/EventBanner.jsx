import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'

// High-quality banner image from Pexels
const BANNER_IMAGE_URL = 'https://static.vecteezy.com/system/resources/previews/016/249/380/large_2x/hackathon-design-sprint-like-event-banner-challenge-programming-idea-online-strategy-technology-illustration-concept-with-keywords-and-icons-eps-10-vector.jpg'

export default function EventBanner({img}) {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      // Ensure the component takes up the whole view to showcase the banner
      // minHeight: '150vh',
      alignItems: 'flex-start',
      bgcolor: 'background.default',
    }}>
      <Card 
        sx={{ 
          width: 'full', 
          maxWidth: 900, // Constrain width for better reading experience
          height: 300, 
          boxShadow: 8, // Prominent shadow for depth
          borderRadius: 3, 
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 12,
          },
        }}
      >
        <CardMedia
          component="img"
          alt="Abstract neon city banner"
          image={img}
          sx={{ 
            height: '100%', 
            width: 900,
            objectFit: 'cover', // Ensures the image covers the area without distortion
            filter: 'brightness(0.8)', // Subtle dimming for a sophisticated look
            transition: 'filter 0.3s ease-in-out',
            '&:hover': {
              filter: 'brightness(1)',
            },
          }}
        />
      </Card>
    </Box>
  )
}