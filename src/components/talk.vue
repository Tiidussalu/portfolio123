<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6 relative">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute w-64 h-64 rounded-full bg-[#DAC5A7] opacity-5 blur-3xl -top-10 -left-10"></div>
      <div class="absolute w-96 h-96 rounded-full bg-[#DAC5A7] opacity-5 blur-3xl -bottom-20 -right-20"></div>
    </div>
    
    <!-- Contact Form and Business Card Container -->
    <div class="relative w-full max-w-5xl bg-black bg-opacity-40 backdrop-blur-lg border border-[#DAC5A7] p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
      
      <!-- Contact Form -->
      <div class="w-full md:w-1/2">
        <h1 class="text-[#DAC5A7] text-4xl font-bold text-center mb-8">Contact Us</h1>

        <!-- Contact Form -->
        <form action="https://formspree.io/f/xovqllnb" method="POST" class="space-y-6">
          <label class="block text-[#DAC5A7] text-sm font-medium">
            Your Email:
            <input type="email" name="email" required placeholder="Enter your email" class="input-style"/>
          </label>

          <label class="block text-[#DAC5A7] text-sm font-medium">
            Your Name:
            <input type="text" name="name" required placeholder="Enter your name" class="input-style"/>
          </label>

          <label class="block text-[#DAC5A7] text-sm font-medium">
            Your Message:
            <textarea name="message" required placeholder="Type your message..." rows="5" class="input-style"></textarea>
          </label>

          <div class="flex justify-center mt-8">
            <button type="submit" class="submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- Business Card Mockup -->
      <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div><h1 class="mb-8 text-[24px] text-[#DAC5A7] font-bold">BUSINESS CARD</h1></div>
        <!-- Card Flip Container -->
        <div class="card-container">
          <!-- The Card -->
          <div class="card">
            <!-- Front Side -->
            <div class="card-face front">
              <div class="card-content">
                <!-- Logo placeholder with gold foil effect -->
                <div class="logo-placeholder"></div>
                
                <div class="card-details">
                  <h2 class="card-name">Taaniel Tiidussalu</h2>
                  <p class="card-title">Website Creator</p>
                  
                  <div class="card-contact-info">
                    <p><span>Email:</span> taaniel.tiidussalu@ametikool.ee</p>
                    <p><span>Website:</span> www.taaniel.ee</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Back Side -->
            <div class="card-face back">
              <div class="card-content">
                <div class="card-back-header">Let's Create Something Amazing</div>
                
                <div class="card-social-info">
                  <p><span>LinkedIn:</span> linkedin.com/in/taaniel</p>
                  <p><span>GitHub:</span> github.com/Tiidussalu</p>
                </div>
                
                <!-- Decorative element -->
                <div class="card-back-decoration"></div>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-[#DAC5A7] text-center mt-6 text-sm">Hover over the card to flip it</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // No longer need the mounted hook since we're using CSS hover
}
</script>

<style>
/* Global Styles */
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  /* Removed overflow: hidden */
}

/* Input and Button Styles */
.input-style {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  border: 1px solid #DAC5A7;
  padding: 12px;
  margin-top: 6px;
  border-radius: 8px;
  color: #DAC5A7;
  transition: all 0.3s;
  font-size: 14px;
}

.input-style:focus {
  outline: none;
  border-color: #fff;
  box-shadow: 0 0 8px rgba(218, 197, 167, 0.5);
}

.input-style::placeholder {
  color: rgba(218, 197, 167, 0.4);
}

.submit-button {
  width: 160px;
  background-color: #DAC5A7;
  color: black;
  font-weight: bold;
  padding: 12px;
  border-radius: 30px;
  transition: all 0.3s;
}

.submit-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(218, 197, 167, 0.3);
}

/* Card Container */
.card-container {
  width: 350px;
  height: 200px;
  perspective: 1000px; /* Important for 3D effect */
}

/* The Card */
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d; /* Important for 3D effect */
}

/* Hover effect instead of click */
.card-container:hover .card {
  transform: rotateY(180deg);
}

/* Card Faces (Front and Back) */
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide backface */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Front Styling */
.front {
  background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
  border: 1px solid rgba(218, 197, 167, 0.4);
}

/* Back Styling (flipped) */
.back {
  background: linear-gradient(135deg, #2a2a2a, #1e1e1e);
  border: 1px solid rgba(218, 197, 167, 0.4);
  transform: rotateY(180deg); /* Start rotated */
}

/* Texture Overlay */
.front:before, .back:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIi8+PC9zdmc+');
  opacity: 0.3;
  pointer-events: none;
}

/* Card Content */
.card-content {
  position: relative;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Logo Placeholder */
.logo-placeholder {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #DAC5A7, #f8e8d4, #b39c78);
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Card Details */
.card-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card-name {
  color: #DAC5A7;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.5px;
}

.card-title {
  color: #DAC5A7;
  font-size: 16px;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.card-contact-info {
  margin-top: auto;
  border-top: 1px solid rgba(218, 197, 167, 0.3);
  padding-top: 12px;
}

.card-contact-info p, .card-social-info p {
  color: #DAC5A7;
  margin: 5px 0;
  font-size: 14px;
}

.card-contact-info span, .card-social-info span {
  opacity: 0.8;
}

/* Back Card Styling */
.card-back-header {
  color: #DAC5A7;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.card-social-info {
  margin-top: auto;
}

.card-back-decoration {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0.1;
  background-image: linear-gradient(45deg, #DAC5A7 25%, transparent 25%),
                    linear-gradient(-45deg, #DAC5A7 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #DAC5A7 75%),
                    linear-gradient(-45deg, transparent 75%, #DAC5A7 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
  border-radius: 50%;
  top: 20px;
  right: 20px;
  transform: rotate(-15deg);
}
</style>