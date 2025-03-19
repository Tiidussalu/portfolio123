<template>
  <div class="min-h-screen bg-black p-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-5xl font-extrabold mb-6 flex justify-center text-[#DAC5A7]">
        My Work
      </h2>
      <h2 class="flex justify-center text-[#DAC5A7] text-xl font-semibold opacity-75">
        Here is a selection of my projects
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div class="project-box animate-slide-up">
          <h3 class="text-lg font-semibold mb-2 text-center text-[#DAC5A7]">
            Kukerpillid website
          </h3>
          <p class="text-sm mb-4 text-center text-[#DAC5A7] opacity-50">An Instruductive website for a band called Kukerpillid.</p>
          <div class="flex justify-center">
            <a
              href="https://github.com/elerikp/Kukerpillid.git"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-slide-up">
          <h3 class="text-lg font-semibold mb-2 text-center text-[#DAC5A7]">
            Avatar website
          </h3>
          <p class="text-sm mb-4 text-center text-[#DAC5A7] opacity-50">A movie themed website</p>
          <div class="flex justify-center">
            <a
              href="https://github.com/germovaa/grupp-9.git"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-slide-up">
          <h3 class="text-lg font-semibold mb-2 text-center text-[#DAC5A7]">
            Matrix website
          </h3>
          <p class="text-sm mb-4 text-center text-[#DAC5A7] opacity-50">A movie themed project</p>
          <div class="flex justify-center">
            <a
              href="https://github.com/Tiidussalu/matrix-veeb.git"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-slide-up">
          <h3 class="text-lg font-semibold mb-2 text-center text-[#DAC5A7]">
            Rental system
          </h3>
          <p class="text-sm mb-4 text-center text-[#DAC5A7] opacity-50">Rental system for Kuressaare Regional Training Centre design lighthouse cameras and their equipment.</p>
          <div class="flex justify-center">
            <a
              href="https://github.com/araamat/Londid.git"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style scoped>
/* Container for individual project boxes */
.project-box {
  background-color: #1f1f1f;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.75rem;
  padding: 2.5rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #333;
}

/* Hover effect for project boxes */
.project-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* Project link button styling */
.project-link {
  padding: 0.75rem 2rem;
  background-color: #DAC5A7;
  color: black;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
}

.project-link:hover {
  background-color: #c9b08f;
  transform: scale(1.05);
}

/* Animation for project boxes */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply the animation */
.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

h2 {
  font-family: 'Poppins', sans-serif;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
</style>
