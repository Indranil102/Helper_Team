# Helper_Team

Bcolor #27272A
color #f8f7ff
hover  #8B008B

  <div
      className="right"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={illustrator} // replace with your image path
        alt="Illustration"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          margin: '0 auto',
          transition: 'transform 0.1s ease-out', // Smooth transition for transformation
          transform: transformStyle, // Apply dynamic transform
        }} />
        </div>