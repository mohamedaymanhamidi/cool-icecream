import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Beach Bash Block Party',
      date: 'May 15, 2026',
      time: '2:00 PM - 6:00 PM',
      location: 'Sunny Shores Park, Bikini Bay',
      description: 'Join us for the biggest beach party of the year! Live music, games, and unlimited ice cream fun!',
      icon: '🏖️',
      color: '#00c6ff',
      featured: true,
    },
    {
      id: 2,
      title: 'School Carnival Day',
      date: 'May 22, 2026',
      time: '10:00 AM - 3:00 PM',
      location: 'Oceanview Elementary School',
      description: 'Special school pricing for students and teachers. Come try our new Mermaid Magic flavor!',
      icon: '🎡',
      color: '#ffd93d',
      featured: false,
    },
    {
      id: 3,
      title: 'Summer Kickoff Festival',
      date: 'June 1, 2026',
      time: '12:00 PM - 8:00 PM',
      location: 'Downtown Waterfront Plaza',
      description: 'The official start of summer! Free samples for the first 100 customers.',
      icon: '☀️',
      color: '#ff6b9d',
      featured: true,
    },
    {
      id: 4,
      title: 'Community Movie Night',
      date: 'June 10, 2026',
      time: '7:00 PM - 10:00 PM',
      location: 'Coral Park Amphitheater',
      description: 'Watch "Finding Nemo" under the stars with our special movie-night ice cream bundles!',
      icon: '🎬',
      color: '#c77dff',
      featured: false,
    },
    {
      id: 5,
      title: 'Birthday Bash at the Bay',
      date: 'June 18, 2026',
      time: '1:00 PM - 5:00 PM',
      location: 'Bikini Bay Community Center',
      description: 'Celebrating our 5th anniversary! Cake-flavored ice cream and party favors for everyone!',
      icon: '🎂',
      color: '#00f5ff',
      featured: true,
    },
    {
      id: 6,
      title: 'Fourth of July Spectacular',
      date: 'July 4, 2026',
      time: '11:00 AM - 9:00 PM',
      location: 'Liberty Beach Boardwalk',
      description: 'Red, white, and blue ice cream specials all day! Stay for the fireworks!',
      icon: '🎆',
      color: '#ff6b9d',
      featured: true,
    },
  ]

  const weeklySchedule = [
    { day: 'Monday', location: 'Oceanview Park', time: '2PM - 7PM', emoji: '🌳' },
    { day: 'Tuesday', location: 'Downtown Square', time: '11AM - 6PM', emoji: '🏙️' },
    { day: 'Wednesday', location: 'Sunny Shores Beach', time: '12PM - 8PM', emoji: '🏖️' },
    { day: 'Thursday', location: 'Coral Heights Mall', time: '10AM - 5PM', emoji: '🛍️' },
    { day: 'Friday', location: 'Bikini Bay Pier', time: '3PM - 9PM', emoji: '🎣' },
    { day: 'Saturday', location: 'Community Market', time: '9AM - 4PM', emoji: '🛒' },
    { day: 'Sunday', location: 'Family Fun Zone', time: '12PM - 6PM', emoji: '🎪' },
  ]

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-title">Upcoming Events</h1>
          <p className="events-subtitle">Find us at these awesome locations and special events!</p>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="schedule-section section">
        <h2 className="section-title">Weekly Schedule</h2>
        <p className="section-subtitle">Where to find us every day of the week</p>
        <div className="schedule-grid">
          {weeklySchedule.map((day, i) => (
            <div
              key={i}
              className="schedule-card glass"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="schedule-day">{day.day}</div>
              <div className="schedule-emoji">{day.emoji}</div>
              <div className="schedule-location">{day.location}</div>
              <div className="schedule-time">{day.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Events */}
      <section className="special-events-section section">
        <h2 className="section-title">Special Events</h2>
        <p className="section-subtitle">Don't miss these exciting upcoming celebrations!</p>
        <div className="events-grid">
          {upcomingEvents.map((event, i) => (
            <div
              key={event.id}
              className={`event-card ${event.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {event.featured && (
                <div className="event-featured-badge">⭐ Featured</div>
              )}
              <div
                className="event-icon"
                style={{ background: `${event.color}15` }}
              >
                <span>{event.icon}</span>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span className="event-date">📅 {event.date}</span>
                  <span className="event-time">🕐 {event.time}</span>
                </div>
                <div className="event-location">
                  <span>📍 {event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="event-rsvp-btn">
                  🎉 I'm Interested
                </button>
              </div>
              <div
                className="event-glow"
                style={{ background: event.color }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="events-cta section">
        <div className="cta-content glass-strong">
          <h2>Want Us at Your Event?</h2>
          <p>We bring the magic to birthdays, corporate events, weddings, and more!</p>
          <a href="/contact" className="btn-primary">📅 Book Our Truck</a>
        </div>
      </section>
    </div>
  )
}

export default Events