const ReviewPlatforms = () => {
  const platforms = [
    {
      name: "Hostlator",
      icon: "★",
      color: "#3B82F6"
    },
    {
      name: "Trustpilot",
      icon: "★",
      color: "#00B67A"
    },
    {
      name: "REVIEWS.io",
      icon: "○",
      color: "#FFFFFF"
    },
    {
      name: "reddit",
      icon: "◉",
      color: "#FF4500"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-lightning-yellow">We are loved all over the</span>
          <br />
          <span className="text-muted-foreground">internet by many!</span>
        </h2>
        
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:opacity-80 transition-opacity"
            >
              <span style={{ color: platform.color }} className="text-2xl font-bold">
                {platform.icon}
              </span>
              <span className="text-lg font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewPlatforms
