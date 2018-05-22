# Front End Development Code Challenge

`$ git clone git@github.com:daveboehm/target-code-challenge.git`
`cd target-code-challenge && npm install`
`npm run start`

View app locally at: [http://localhost:3000](http://localhost:3000)

Visit heroku app at: [https://ancient-thicket-78095.herokuapp.com/](https://ancient-thicket-78095.herokuapp.com/)

## Tools selected

I went with React.js via create-react-app. This is not a library I am very comfortable with, nor do I have much experience with it, however I thought it might be impressive to show off how quickly I can learn and implement something new. I'm aware this decision may come to haunt me.

For styling, I considered CSS-Modules with Sass, but with not being entirely familiar with the eco-system, I opted for plain boring raw CSS. Each stylesheet is imported with it's associated component, and I used a BEM style methodology. No CSS frameworks were used.

Icons were generated with SVG elements. The paths were created in a web app called icomoon.io, and a few changes to the SVG markup was required to make them work in React.

## What I'm proud of

- My ability to pick up and use React as quickly as I did. I've done a few TodoApp style tutorials in React before, but this is my first attempt at building something with it on my own.
- Hand-written CSS using BEM. I've been a long time believer in BEM and my knowledge of CSS is clearly demonstrated, particularly in the use of floats to 'reorder' the DOM elements visually on desktop.
- SVG icons instead of images. Icon library wasn't provided or discussed, so I found the closest matching icons I could on icomoon.io and generated SVG markup for them.
- Didn't use any 3rd party components or libraries. Considered pulling in a carousel someone else had built, but decided to give it a try on my own. It is far from perfect, but given the time allotted and my current knowledge of the framework, I'm decently happy with what I've produced.

## What I'm not so proud of

- Grossly underestimated the amount of time this was going to take me. This is a rather hefty code challenge, in my experience.
- Carousel is incomplete
- Stars aren't being rendered dynamically
- Didn't finish the assignment on time
- Did not get to unit testing or test coverage. Haven't ever done this in React and I figure it'd probably take me more than a week to be any good at it.
- Number of CSS bugs I didn't have time to correct