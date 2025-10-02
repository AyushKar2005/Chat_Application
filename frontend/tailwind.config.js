/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  // no plugins: [daisyui]
  daisyui: { themes: true }, // optional; keep if you want all built-ins
};
