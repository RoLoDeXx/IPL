# Load time

## Calculation
I used inbuilt chrome network waterfall and a extension for calculation
Page load time tested on deployed instance was 
![Capture](https://user-images.githubusercontent.com/35224521/101164824-a26e6600-365b-11eb-8dcc-ec22b234d14e.JPG)

## Optimization

- Simple client side pagination was added to reduce the overall component renders
- Plugins on Netlify that priortize use of inline css on build to reduce load times
- To add in custom fonts use of <link> was preffered over @import statements
- Use of minified css and js frameworks
- Smaller images.etc

# Demo of project 
Live deployement can be found [here](https://pedantic-hamilton-d7bc45.netlify.app/)
