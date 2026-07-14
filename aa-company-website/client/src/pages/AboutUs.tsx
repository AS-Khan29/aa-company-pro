import { useState } from "react";

/**
 * About Us Page - Industrial Heritage Modernism
 * Vintage timeline with animations showing company history from 1993 to present
 * Design: Vertical timeline with alternating content, vintage badges, nostalgic aesthetic
 */
export default function AboutUs() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: 1993,
      title: "Company Founded",
      description:
        "A & A Company established as a trusted general order supplies partner, beginning operations with the Central Ordnance Depot (COD) Karachi.",
      details:
        "Initial focus on providing essential ordnance-related items to the defense sector, establishing a foundation of reliability and precision.",
    },
    {
      year: 1998,
      title: "Diversification Begins",
      description:
        "Expanded portfolio to include supplies for Pakistan International Airlines (PIA), marking entry into the aviation sector.",
      details:
        "Successfully managed complex procurement requirements for one of the nation's largest public enterprises.",
    },
    {
      year: 2005,
      title: "Spare Parts Specialization",
      description:
        "Transitioned to become a specialist in defense vehicle spare parts, focusing on HINO, Defender, and Isuzu components.",
      details:
        "Developed deep expertise in supply chain management for military vehicle maintenance and operations.",
    },
    {
      year: 2012,
      title: "Logistics Support Program",
      description:
        "Successfully executed the Logistics Support Program (LSP) at the 305 Spare Depot in Karachi.",
      details:
        "Demonstrated capability to manage large-scale, time-sensitive defense logistics projects with precision and reliability.",
    },
    {
      year: 2015,
      title: "International Projects",
      description:
        "Contributed to global efforts through complex UN projects managed from the 602 Regionals Workshop Karachi.",
      details:
        "Expanded operational scope to include international supply chain management and coordination.",
    },
    {
      year: 2018,
      title: "DHA Partnership",
      description:
        "Began supplying auto parts and general order supplies to DHA Karachi, expanding into the private sector.",
      details:
        "Successfully adapted expertise to serve both government and private sector clients with equal precision.",
    },
    {
      year: 2020,
      title: "Industrial Supply Expansion",
      description:
        "Started supplying steel buckets to SCIPA Printing Press for ink storage, diversifying product portfolio.",
      details:
        "Demonstrated adaptability and capability to serve specialized industrial requirements.",
    },
    {
      year: 2024,
      title: "Digital Transformation",
      description:
        "Launched modern digital presence and enhanced supply chain visibility for clients.",
      details:
        "Committed to leveraging technology while maintaining the reliability and precision that defines A & A Company.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-concrete overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-timeline-vintage.jpg"
            alt="Company heritage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
            Our Heritage
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up">
            Three decades of excellence, reliability, and precision in defense logistics and supply chain management.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 animate-fade-in-up"></div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Content Container */}
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                        index % 2 === 0 ? "md:direction-rtl" : ""
                      }`}
                    >
                      {/* Left Content (alternating) */}
                      <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                        <div className="bg-white p-8 border-2 border-steel/20 hover:border-primary transition-all duration-300 cursor-pointer group">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
                              <span className="text-primary-foreground font-bold text-lg">
                                {event.year % 100}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="text-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-foreground/70 mb-3">{event.description}</p>

                          {/* Expandable Details */}
                          <button
                            onClick={() =>
                              setExpandedYear(expandedYear === event.year ? null : event.year)
                            }
                            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            {expandedYear === event.year ? "Show Less" : "Learn More"}
                          </button>

                          {expandedYear === event.year && (
                            <div className="mt-4 pt-4 border-t-2 border-steel/10 animate-fade-in-up">
                              <p className="text-sm text-foreground/60 leading-relaxed">
                                {event.details}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className={`flex justify-center ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-accent border-4 border-background rounded-full shadow-lg"></div>
                          <div className="absolute inset-0 w-6 h-6 bg-accent rounded-full animate-pulse opacity-50"></div>
                        </div>
                      </div>

                      {/* Right Content (empty on alternating) */}
                      <div className={index % 2 === 0 ? "md:order-3" : "md:order-4 hidden md:block"}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-foreground text-primary-foreground clip-diagonal-reverse">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Experience",
                description: "30+ years serving high-security defense and public sector organizations",
              },
              {
                title: "Reliability",
                description: "Proven track record executing large-scale, time-sensitive projects",
              },
              {
                title: "Specialization",
                description: "Deep expertise in defense vehicle logistics and spare parts supply",
              },
              {
                title: "Quality",
                description: "Strict adherence to supply standards mandated by COD and PIA",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 border-b-4 border-accent hover:border-primary-foreground transition-colors duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-display text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-primary-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-display text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 animate-fade-in-up">
              To ensure the continuous readiness and operational efficiency of our clients by delivering
              authenticated, high-quality supplies and specialized spare parts. We are committed to building
              lasting partnerships through reliability, precision, and unwavering dedication to excellence.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto animate-fade-in-up"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
