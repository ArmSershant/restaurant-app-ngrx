/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/food/food/components/addnewfood/addnewfood.component.{html,ts}",
    "./src/app/food/set/components/addnewset/addnewset.component.{html,ts}",
    "./src/app/food/set/pages/showallset/showallset.component.{html,ts}",
    "./src/app/food/food/components/single-food/single-food.component.{html,ts}",
    "./src/app/auth/signin/signin.component.{html,ts}",
    "./src/app/auth/signup/signup.component.{html,ts}",
    "./src/app/user/profile/profile.component.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
