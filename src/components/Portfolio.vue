<template>
  <div>
    <!-- Modern Portfolio Content -->
    <section>
      <div class="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col">

        <!-- Enhanced Hero Section with Parallax -->
        <div
          class="flex flex-col items-center justify-center flex-grow text-center bg-cover relative overflow-hidden h-screen"
          :style="{ backgroundImage: `url('/img/mina2.jpg')`, backgroundPosition: 'center top 30%' }">
          <!-- Modern Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
          
          <!-- Dynamic Background Elements -->
          <div class="absolute inset-0 bg-cover bg-center scale-110 animate-zoom-slow"></div>
          
          <!-- Animated Particles Effect (CSS-only) -->
          <div class="particles-container absolute inset-0"></div>
          
          <div class="z-10 max-w-4xl px-4">
            <h1 class="text-white text-xl md:text-2xl uppercase tracking-widest mb-2 animate-fade-in">Taaniel Tiidussalu</h1>
            <h2 class="text-yellow-500 text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-2 animate-fade-in-delay-1">
              Web Designer
            </h2>
            <h3 class="text-yellow-300 text-3xl md:text-5xl mt-2 italic font-light animate-slide-up">
              & Developer
            </h3>
            <div class="w-20 h-1 bg-yellow-500 mx-auto my-6 animate-slide-up-delay-1"></div>
            <p class="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl mx-auto animate-slide-up-delay-2">
              Providing innovative web design, development, and SEO services to elevate your brand in the digital landscape.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-slide-up-delay-3">
              <button class="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30">
                View Portfolio
              </button>
              <button class="px-8 py-3 bg-transparent text-yellow-500 font-semibold rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300 transform hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="mb-12 w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D Box Model Demo Section -->
<section class="bg-black py-20 px-4">
  <div class="flex justify-center items-center">
    <div class="stack">
      <div class="content card">
        <p><b><span id="desktop-prompt">Hover</span><span id="mobile-prompt">Tap</span> me!</b></p>
        <p>See how web elements are constructed with content, padding, border, and background layers.</p>
      </div>
      <div class="padding card"></div>
      <div class="border card"></div>
      <div class="background card"></div>
      <div class="box-shadow card"></div>
    </div>
  </div>
</section>

    <!-- Enhanced Services Section with Icons -->
    <section id="services" class="bg-black py-24 px-4">
      <div class="max-w-6xl mx-auto text-center mb-16">
        <h2 class="mt-24 text-yellow-500 text-sm uppercase tracking-widest mb-2">Services</h2>
        <h3 class="text-3xl md:text-4xl font-light text-white mb-6">What I Offer</h3>
        <p class="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to your specific needs, helping your business stand out in the digital world.</p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Web Design Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">01</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">Web Design</h3>
          <p class="text-gray-400 mb-6">
            Visually compelling web designs that resonate with your audience while staying true to your brand identity. Custom UI/UX that drives engagement.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>

        <!-- Development Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">02</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">Development</h3>
          <p class="text-gray-400 mb-6">
            Custom web development solutions that are tailored to your business for a seamless user experience. Performance-optimized code that scales.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>

        <!-- SEO Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">03</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">Content & SEO</h3>
          <p class="text-gray-400 mb-6">
            SEO strategies designed to push your business to the forefront of search results and attract the right traffic. Data-driven content marketing that converts.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>
      </div>
      
      <!-- Additional Services -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <!-- E-Commerce Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">04</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">E-Commerce</h3>
          <p class="text-gray-400 mb-6">
            Complete e-commerce solutions with secure payment integration, inventory management, and customer-focused shopping experiences.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>

        <!-- Maintenance Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">05</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">Maintenance</h3>
          <p class="text-gray-400 mb-6">
            Ongoing website maintenance and support to ensure your site remains secure, up-to-date, and performs optimally at all times.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>

        <!-- Analytics Card -->
        <div class="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-800 hover:border-yellow-500/30 transition duration-500 transform hover:-translate-y-2">
          <div class="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500/10">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <p class="text-yellow-500 font-semibold mb-2">06</p>
          <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition duration-300">Analytics</h3>
          <p class="text-gray-400 mb-6">
            Comprehensive analytics and reporting to track your website's performance and provide data-driven insights for continuous improvement.
          </p>
          <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-500 group-hover:text-yellow-500 transition duration-300">
            <span class="bg-gray-800 text-white rounded-full p-2 group-hover:bg-yellow-500 group-hover:text-black transition duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>

    <!-- Modern Process Section with Timeline -->
    <section id="process" class="text-white bg-gradient-to-b from-black to-gray-900 pt-24 pb-24">
      <div class="justify-center items-center grid grid-cols-1">
        <p class="mb-5 flex flex-col text-center text-yellow-500 uppercase tracking-widest">THE PROCESS</p>
        <h1 class="text-4xl md:text-6xl lg:text-8xl flex flex-col text-center font-light">
          <span class="flex justify-center">
            <span>Your Website</span>
          </span>
          <span class="italic">in 5 steps</span>
        </h1>
        <p class="text-center mt-6 text-gray-400 max-w-2xl mx-auto">
          Proven process ensures that we create a website tailored to your business needs, delivering outstanding results every time.
        </p>
      </div>
      
      <!-- Timeline Component -->
      <div class="max-w-6xl mx-auto mt-24 px-4">
        <div class="relative">
          <!-- Vertical Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500/20"></div>
          
          <!-- Step 1 -->
          <div class="relative mb-24">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <h3 class="text-yellow-500 text-2xl font-bold mb-2">01. Discovery</h3>
                <p class="text-gray-400">I start by understanding your business, goals, and target audience to create a strategic foundation for your website.</p>
              </div>
              
              <div class="mx-auto md:mx-0 my-6 md:my-0 z-10 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              
              <div class="md:w-1/2 md:pl-12">
                <ul class="list-disc text-gray-400 pl-5">
                  <li>Comprehensive business analysis</li>
                  <li>Target audience research</li>
                  <li>Competitor benchmarking</li>
                  <li>Goal setting and KPI definition</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="relative mb-24">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                <ul class="list-disc text-gray-400 pl-5 md:pl-0 md:text-right md:list-none">
                  <li>Information architecture planning</li>
                  <li>Wireframing and prototyping</li>
                  <li>Content strategy development</li>
                  <li>User journey mapping</li>
                </ul>
              </div>
              
              <div class="mx-auto md:mx-0 my-6 md:my-0 z-10 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 order-2 md:order-2">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                </svg>
              </div>
              
              <div class="md:w-1/2 md:pl-12 order-3 md:order-3">
                <h3 class="text-yellow-500 text-2xl font-bold mb-2">02. Planning</h3>
                <p class="text-gray-400">I create a detailed roadmap for your website, outlining structure, features, and content requirements.</p>
              </div>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="relative mb-24">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <h3 class="text-yellow-500 text-2xl font-bold mb-2">03. Design</h3>
                <p class="text-gray-400">I craft a visually stunning, brand-aligned design that creates a powerful first impression for your visitors.</p>
              </div>
              
              <div class="mx-auto md:mx-0 my-6 md:my-0 z-10 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              
              <div class="md:w-1/2 md:pl-12">
                <ul class="list-disc text-gray-400 pl-5">
                  <li>Visual concept development</li>
                  <li>UI/UX design implementation</li>
                  <li>Responsive design for all devices</li>
                  <li>Brand integration and enhancement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Step 4 -->
          <div class="relative mb-24">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                <ul class="list-disc text-gray-400 pl-5 md:pl-0 md:text-right md:list-none">
                  <li>Clean, efficient code development</li>
                  <li>Front-end and back-end development</li>
                  <li>Integration of third-party tools</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              
              <div class="mx-auto md:mx-0 my-6 md:my-0 z-10 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 order-2 md:order-2">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              
              <div class="md:w-1/2 md:pl-12 order-3 md:order-3">
                <h3 class="text-yellow-500 text-2xl font-bold mb-2">04. Development</h3>
                <p class="text-gray-400">I bring your design to life with cutting-edge development practices, ensuring a seamless and responsive user experience.</p>
              </div>
            </div>
          </div>

                    <!-- Step 5 -->
                    <div class="relative mb-24">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-12 md:text-right">
                <h3 class="text-yellow-500 text-2xl font-bold mb-2">05. Launch</h3>
                <p class="text-gray-400">I ensure a smooth launch with thorough testing, optimization, and post-launch support to keep your website running flawlessly.</p>
              </div>
              
              <div class="mx-auto md:mx-0 my-6 md:my-0 z-10 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              
              <div class="md:w-1/2 md:pl-12">
                <ul class="list-disc text-gray-400 pl-5">
                  <li>Comprehensive testing and debugging</li>
                  <li>SEO optimization and analytics setup</li>
                  <li>Performance and security audits</li>
                  <li>Post-launch monitoring and support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Footer -->
        <footer class="bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <div class="text-yellow-500 font-bold text-xl mb-4">TT<span class="text-white">Design</span></div>
        <p class="text-gray-400 mb-6">Innovative web design and development solutions to elevate your digital presence.</p>
        <div class="flex justify-center space-x-6 mb-6">
          <a href="#" class="text-gray-400 hover:text-yellow-500 transition duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-yellow-500 transition duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.67-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-yellow-500 transition duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
        </div>
        <p class="text-gray-400 text-sm">&copy; 2025 TTDesign. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>


<style>
/* 3D Box Model Animation Styles */
.stack {
  display: grid;
  grid: [stack] / [stack];
  perspective: 5000;
  position: relative;
  width: 40vmin;
  height: 40vmin;
  margin: 0 auto;
}

.stack:before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: background 2s ease;
  pointer-events: none;
  opacity: 0;
  z-index: -1;
}

.stack:hover:before, .stack:active:before {
  opacity: 0.3;
}

.stack:hover .card, .stack:active .card {
  --bg-opacity: 5%;
  transition-duration: 2s;
  transition-timing-function: var(--easeInOutCirc);
  transform: 
    rotateX(45deg) rotate(45deg) 
    translateZ(var(--z-offset)) translateY(20vh) translateX(20vh);
}

.stack:hover .card:nth-child(1), .stack:active .card:nth-child(1) { --z-offset: 75vh; }
.stack:hover .card:nth-child(2), .stack:active .card:nth-child(2) { --z-offset: 50vh; }
.stack:hover .card:nth-child(3), .stack:active .card:nth-child(3) { --z-offset: 25vh; }
.stack:hover .card:nth-child(4), .stack:active .card:nth-child(4) { --z-offset: 0vh; }
.stack:hover .card:nth-child(5), .stack:active .card:nth-child(5) { --z-offset: -25vh; }

.stack:hover .card::after, .stack:active .card::after {
  opacity: 1;
  transform: rotate(-45deg) rotateY(45deg) translateX(0px);
}

.stack:hover .card.content, .stack:active .card.content {
  background: transparent;
  color: beig;
  border-color: transparent;
  transition: 
    border-color 1s var(--easeInOutCirc) 0s,
    background-color 1s var(--easeInOutCirc) 0s,
    color 1s var(--easeInOutCirc) 0s,
    transform 2s var(--easeInOutCirc) 0s;
}

.stack:hover .card.padding, .stack:active .card.padding {
  transition-delay: .1s;
}

.stack:hover .card.border, .stack:active .card.border {
  transition-delay: .2s;
}

.stack:hover .card.background, .stack:active .card.background {
  background: white;
  transition: 
    background-color 2s var(--easeInOutCirc) .3s, 
    transform 2s var(--easeInOutCirc) .2s;
}

.stack:hover .card.box-shadow, .stack:active .card.box-shadow {
  transition-delay: .4s;
  box-shadow:
    0 -1px 25px rgba(0, 0, 0, 0.4),
    0 7.6px 6.1px rgba(0, 0, 0, 0.051),
    0 14.3px 11.5px rgba(0, 0, 0, 0.059),
    0 25.5px 20.5px rgba(0, 0, 0, 0.07),
    0 47.6px 38.4px rgba(0, 0, 0, 0.094),
    0 114px 92px rgba(0, 0, 0, 0.19);
}

.card {
  grid-area: stack;
  --z-offset: 0;
  --easeInOutCirc: cubic-bezier(0.85, 0, 0.15, 1);
  --bg-opacity: 0%;
  transition: transform 4s ease;
  width: 40vmin;
  height: 40vmin;
  box-sizing: border-box;
  color: white;
  background: rgba(255, 255, 254, 0.05);
  position: relative;
}

@media (orientation: landscape) {
  .card {
    width: 40vh;
    height: 40vh;
  }
}

@media (max-width: 540px) {
  .card {
    width: 60vw;
    height: 60vw;
  }
}

.card:nth-child(1) {
  z-index: 3;
}

.card:nth-child(2) {
  z-index: 2;
}

.card::after {
  content: "Box";
  position: absolute;
  left: -45%;
  top: 110%;
  font-size: 1.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.75);
  white-space: nowrap;
  padding: 1ch 2ch;
  border-radius: 4ch;
  opacity: 0;
  transition: opacity .5s ease 0s, transform .5s ease;
  transform: rotate(-45deg) rotateY(45deg) translateX(20px);
  background: rgba(0, 0, 0, 0.7);
}

@media (max-width: 540px) {
  .card::after {
    left: -20%;
    top: 70%;
  }
}

.card.content {
  z-index: 5;
  transition: 
    border-color 4s ease,
    background-color 5s ease 2s,
    color 4s ease 0s,
    transform 4s ease 0s;
  padding: 5vmin;
  font-size: max(2.5vmin, .9rem);
  line-height: 1.5;
  background: rgb(255, 255, 254);
  border: 5px solid #DAC5A7;
  color: black;
}

.card.content::after { 
  content: "Content Box"; 
  left: -50%;
}

@media (max-width: 540px) {
  .card.content::after {
    left: -23%;
  }
}

.card.padding {
  background: transparent;
  z-index: 4;
  transition-delay: .1s;
}

.card.padding::after { content: "Padding Box"; }

.card.padding::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(
    0% 0%, 0% 100%, 
    5vmin 100%, 5vmin 5vmin, 
    calc(100% - 5vmin) 5vmin, 
    calc(100% - 5vmin) calc(100% - 5vmin), 
    5vmin calc(100% - 5vmin), 5vmin 100%, 
    100% 100%, 100% 0%
  );
  background: repeating-linear-gradient(
    -45deg, 
    #DAC5A7, #DAC5A7 1px, 
    rgba(255, 255, 254, 0.05) 1px, rgba(255, 255, 254, 0.05) 10px
  );
}

.card.border {
  z-index: 3;
  background: transparent;
  transition-delay: .2s;
}

.card.border::after { content: "Border Box"; }

.card.border::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(
    0% 0%, 0% 100%, 
    5px 100%, 5px 5px, 
    calc(100% - 5px) 5px, 
    calc(100% - 5px) calc(100% - 5px), 
    5px calc(100% - 5px), 5px 100%, 
    100% 100%, 100% 0%
  );
  background: linear-gradient(#DAC5A7, #DAC5A7);
}

.card.background {
  z-index: 2;
  transition: 
    background-color 4s ease .3s,
    transform 4s ease .3s;
}

.card.background::after { content: "Background Box"; }

.card.box-shadow {
  z-index: 1;
  background: transparent;
  transition: 
    box-shadow 4s ease .4s,
    transform 4s ease .4s; 
  
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
}

.card.box-shadow::after { content: "Shadow Box"; }

@media (hover:hover) {
  #mobile-prompt {
    display: none;
  }
} 

@media (hover:none) {
  #desktop-prompt {
    display: none;
  }
}

/* Add these to your existing animations */
.animate-fade-in {
  animation: fadeIn 2s ease-in-out forwards;
}

.animate-zoom-slow {
  animation: zoomSlow 20s ease-in-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomSlow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>