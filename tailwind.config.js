/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/food/food/components/addnewfood/addnewfood.component.{html,ts}",
    "./src/app/food/set/components/addnewset/addnewset.component.{html,ts}",
    "./src/app/food/set/pages/showallset/showallset.component.{html,ts}",
    "./src/app/food/set/pages/single-set/single-set.component.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
