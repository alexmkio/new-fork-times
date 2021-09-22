![GitHub Actions Workflow](https://github.com/alexmkio/new-fork-times/actions/workflows/testing.js.yml/badge.svg)
# New Fork Times
This application was a Mod 4 solo project in the Front End program at the [Turing School of Software and Design](https://turing.io/) whose purpose was to mimic a take-home assignment given during a hiring process. The maximum amount of time we could spend coding was 8 hours.

Our assigned MVP included the following:
 * A list of articles
 * A “detailed” view for each article (as opposed to summary/list view)
 * Articles in the list must link to the detailed article view you create
 * Some sort of search, filter, OR sort

The project spec can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe).

The project is deployed [here](https://alexmkio.github.io/new-fork-times/).

## Features

![Gif of the homepage and on-hover states in mobile view](./src/assets/mobile.gif)
* Gif of the homepage and on-hover states in mobile view

![Gif demonstrating sorting functionality in tablet view](./src/assets/tablet.gif)
* Gif demonstrating sorting functionality in tablet view

![Gif demonstrating article details page in laptop view](./src/assets/laptop.gif)
* Gif demonstrating article details page in laptop view

## Contributors
This application was built by [Alex Kio](https://github.com/alexmkio/); a Front End Engineering, Mod 4 student at the [Turing School of Software and Design](https://turing.io/).

## Technologies Used
This application was built using the [React](https://reactjs.org/) javascript framework. [Router](https://reactrouter.com/) was used to create a single-page application. [Cypress](https://www.cypress.io/) and [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) were used to test user stories and data typing. GitHub and Git were used for version control and issue tracking. GitHub Actions and GitHub Pages were used for CI/CD.

## The Evolution of the Project
I started this project by creating a [Project Board](https://github.com/alexmkio/new-fork-times/projects/1), turning the MVP user stories into issues, creating a PR template, setting up CI/CD, and tackling the MVP one user story at a time. Lastly, I created a robust testing suite using Cypress (including intercepts, stubs, and custom commands) and PropTypes.

I met with an instructor and received feedback about how I had not implemented sorting functionality by default. I refactored the project and testing suite to accommodate this feedback.

## Reflections
I appreciated the challenge that this project presented: how would I prioritize features in order to efficiently achieve an MVP. I had to make very calculated decisions in order to do this. For example, I chose not to prioritize CSS so that I would have time to create a testing suite.

If time was a less limited resource I'd would have liked to:
 * Fetch articles from pages other than the home page or at least allow users to fetch articles from a page of their selection
 * Implement filter functionality such as filter by section, author, article type, or des_facet
 * Implement find functionality such as find by title
 * Add styling and multimedia
 * Make header sticky
 * Clean Data
 * Render loading

## Local Installation
1. Clone down this repository `git clone https://github.com/alexmkio/new-fork-times`
2. CD into your local clone `cd new-fork-times`
3. Install project dependencies `npm install`
4. Run `npm start`
5. Open `http://localhost:3000/` in your preferred browser