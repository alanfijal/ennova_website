"use client";

export const TechnicalGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
    <div className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    {/* Intermittent "Coordinate" dots at intersections */}
    <div className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,174,239,0.2) 1px, transparent 1px)`,
        backgroundSize: '200px 200px'
      }}
    />
  </div>
);
