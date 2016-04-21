Front-End Exercise:  
Using our Simple API, create an application which parses a JSON response from a Vimeo channel (URL below) and builds an interface from the data that is returned. Pay special consideration to code reusability, semantics, and interactivity.  You are free to make use of a view library (React, Vue, Polymer, etc.), but please refrain from using an entire framework such as Backbone or AngularJS. We want to see that you know how to architect an application
Simple API Documentation: https://developer.vimeo.com/apis/simple
Example Feed: http://vimeo.com/api/v2/channel/staffpicks/videos.json

I chose to code everything in vanilla javascript and css to minimize time
spent configuring react/webpack. I've been pretty swamped with work and also other
interviews so I hope this is a decent showcase of my skill set in regards to
ES6, CSS, etc. without the use of any libraries.

- Was the question/problem clear? Did you feel like something was missing or not explained correctly?
    Problem was pretty clear, one of the URL's is broken though.
    `https://developer.vimeo.com/apis/simple` is redirected to the developer home page.
- How much time did you spend on each part: understanding, designing, coding, testing?
    15 mins understanding, 15 mins designing, 30 mins coding, 10 min testing
- What would you have done differently if you have more time or resources?
    Add an extra panel to show more info about videos, make divs flow better and account for
    all image sizes and length of different text fields
- Are there any bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?
    Inserting elements into the DOM as innerHTML is terribly slow. It's better to
    do createElement and appendChild rather than one long string.
- How would the system scale for more users/visitors?
    The only limit would be the http server.
- How would your solution cope if the api was slow or broke or returned incorrect data?
    I could add a spinning wheel for loading. As of now, it adds an alert box if the
    API broke or data fields are missing.
- Anything else you want to share about your solution or the problem?
    Run this off a local http server i.e. `Python -m SimpleHTTPServer`
