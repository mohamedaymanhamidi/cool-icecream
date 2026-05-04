import './Events.css'

const Events = () => {
const events = [
  {
    id: 1,
    title: 'Festivals & Fairs',
    description: `Bring the crowd to your event! Our eye-catching truck and efficient service keep festival-goers happy and coming back for more.

High-volume capacity
Quick-serve system`,
    icon: '🎪',
    color: '#00c6ff',
  },
  {
    id: 2,
    title: 'Events',
    description: `Make your special day unforgettable with our Dream Cream truck! We bring artisanal ice cream, fun flavors, and delightful treats directly to your event.

Flexible scheduling
Serving large groups efficiently`,
    icon: '🏢',
    color: '#ffd93d',
  },
  {
    id: 3,
    title: 'School Functions',
    description: `From field days to graduation parties, we make school events extra special. Safe, fun, and memorable for students of all ages.

Allergen-friendly options
Nut-free flavors available
Background-checked staff`,
    icon: '🎓',
    color: '#ff6b9d',
  },
  {
    id: 4,
    title: 'Birthday Parties',
    description: `Make your little one's special day unforgettable! Our colorful truck and delicious treats bring pure joy to birthday celebrations of all ages.

Custom flavor selection
Birthday-themed decorations
Special birthday sundae for the guest of honor`,
    icon: '🎂',
    color: '#c77dff',
  },
]

  return (
    <div className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <h1 className="events-title">
          Upcoming <span>Events</span>
        </h1>
        <p className="events-subtitle">
          Find us at special locations and unforgettable celebrations
        </p>
      </section>

      {/* EVENTS GRID */}
      <section className="events-section">
        <div className="events-grid-dream">

          {events.map((event, i) => (
            <div
              key={event.id}
              className="event-card-dream"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="event-top">
                <div
                  className="event-icon"
                  style={{ background: `${event.color}20` }}
                >
                  {event.icon}
                </div>
              </div>

              <div className="event-content">
                <h3>{event.title}</h3>

                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>🕐 {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>

                <p>{event.description}</p>


              </div>

              <div
                className="event-glow"
                style={{ background: event.color }}
              />
            </div>
          ))}

        </div>
      </section>


    </div>
  )
}

export default Events