# Web Development Q1 Project

### Final project write-up

- What's the name of your project?
  - North Korean Political Prison Camps

- What problem does it solve?
  - There are a lot of sources online for finding information about North Korea's nuclear program or the crazy quirks of Kim Jong-un and his family but it's a lot harder to find clear, concise information about the human rights abuses and the political prison camp system in particular. The information is usually buried in reports with hundreds of pages from the UN or human rights groups. This site's goal is to provide the same information in a clear and concise way.  

- Who has this problem?
  - Anyone who has heard about North Korea but wants to know more specifically about the political prison camp system.

- How does your project solve this problem?
  - It takes the exact same information from the UN's landmark report on North Korean human rights abuses and presents it in an informative and interactive way.

- What web APIs did it use?
  - A custom-made API presenting data about North Korean political prison camps taken from a major UN report. The API is hosted on Amazon Lambda and was created using Amazon's API Gateway.
  - The Google Maps API

- What technologies did it use?
  - HTML5
  - CSS3
  - JavaScript
  - jQuery
  - Ajax
  - Materialize
  - Amazon Web Services
  - Google Fonts

- What was the most valuable piece of Customer feedback you received?
  - Hien gave me great feedback on the user experience. Specifically, she helped me to see that the main section of my website showing the political prison camps was buried on the page so I moved it up. She also pointed out that the buttons on the site didn't look like buttons and yet I had elements that weren't buttons that did look like buttons.

- What was the biggest challenge you had to overcome?
  - Not being able to find an existing API with the data I wanted to use and having to create my own was a challenge at first. I had to find the data and format it correctly and then read through different documentation and tutorials to figure out a working solution. I ran into a couple of CORS issues as well, but was able to figure it out.
  - I also had problems with certain effects not working on my page. I had a section fading out and fading back in with new content, but the content was changing before it fully faded out. I had to move entire sections of my code into a callback in the jQuery fadeOut function in order to get it to work correctly.
- Create a portfolio on the [Galvanize student portal](http://students.galvanize.com).
- Add a link to your project's production environment.
