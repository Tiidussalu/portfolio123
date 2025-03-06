/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomSlow: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        spinEvery10Sec: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(360deg)" }, /* Spins in the first second */
          "100%": { transform: "rotate(360deg)" }, /* Holds final position */
        },
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        spinLetters: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        bounceConstant: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        "zoom-slow": "zoomSlow 10s ease-in-out infinite alternate",
        "spin-every-10s": "spinEvery10Sec 10s linear infinite",
        "bounce-in": "bounceIn 0.8s ease-out forwards",
        "spin-letters": "spinLetters 3s ease-in-out infinite",
        "bounce-constant": "bounceConstant 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
