const ReviewPlatforms = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-primary bg-clip-text text-transparent">We are loved all over the</span>
          <br />
          <span className="text-foreground">internet by many!</span>
        </h2>
        
        <div className="flex justify-center items-center">
          <img 
            src="https://res.cloudinary.com/djecn7fxz/image/upload/v1759390429/Group_1321317133_1_dlgwiz.png" 
            alt="Review platforms - Hostlator, Trustpilot, REVIEWS.io, and Reddit"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default ReviewPlatforms
