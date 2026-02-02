import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const events = [
  {
    date: '10 Feb',
    time: '09:30 AM',
    title: 'Registration Opens',
    desc: 'Participants can start registering for the event.',
    isLive: false,
  },
  {
    date: '15 Feb',
    time: '11:00 AM',
    title: 'Shortlisting',
    desc: 'Teams will be shortlisted based on submitted ideas.',
    isLive: true,
  },
  {
    date: '20 Feb',
    time: '10:00 AM',
    title: 'Final Presentation',
    desc: 'Selected teams will present their final projects.',
    isLive: false,
  },
];

export default function CustomizedTimeline() {
  return (
    <Timeline
      position="alternate"
      sx={{ width: '100%', maxWidth: '100%' }}
    >
      {events.map((item, index) => (
        <TimelineItem
          key={index}
          sx={{
            '&::before': { flex: 0, padding: 0 },
          }}
        >
          {/* DATE */}
          <TimelineOppositeContent
            sx={{ m: 'auto 0', minWidth: 80 }}
            variant="body2"
            color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>

          {/* CENTER LINE */}
          <TimelineSeparator>
            <TimelineDot color={item.isLive ? 'error' : 'primary'} />
            {index !== events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          {/* CARD */}
          <TimelineContent sx={{ py: 2, px: 2 }}>
            {/* TIME + LIVE */}
            <div style={{ display: 'flex', alignItems: 'start', gap: 8 }}>
              <Typography
                variant="caption"
                color="text.secondary"
              >
                Starts at {item.time}
              </Typography>

              {item.isLive && (
                <Chip
                  label="LIVE"
                  color="error"
                  size="small"
                />
              )}
            </div>

            <Card elevation={6} sx={{ width: '100%', borderRadius: 3, mt: 1 }}>
              <CardContent>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
