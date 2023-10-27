![Static Badge](https://img.shields.io/badge/Return_to_README-blue?style=flat-plastic&link=https%3A%2F%2Fgithub.com%2Flrchnnng%2Fparrot-quiz%2Fblob%2Fmain%2FREADME.md)

# Testing <!-- omit in toc -->
- [Manual Testing](#manual-testing)
- [Automated Testing](#automated-testing)
- [Known bugs and fixes](#known-bugs-and-fixes)

## Manual Testing
| | Mobile S (320px)| Mobile L (425px)| Tablet (768px) | Desktop (1024px)|
|---|:---:|:---:|:---:|:---:|
|Responsive Images|✓|✓|✓|✓|
|Responsive Elements|✓|✓|✓|✓|
|Responsive Text|✓|✓|✓|✓|

|Quiz Testing|Yes/No|
|---|:---:|
|Quiz question generated when page loads|✓|
|When user selects an answer a new question is generated|✓|
|When user gets correct answer, score increases by 1 point|✓|
|When user gets incorrect answer, no action|✓|
|When quiz finishes, score is stored in URL and user is automatically navigated to Final Score page|✓|

|Final Score Testing|Yes/No|
|---|:---:|
||✓|
||✓|

## Automated Testing

 ### Lighthouse <!-- omit in toc -->

| Page | Test Results | Possible Improvements |
|:---:|---|---|
|Index|||
|How To|||
|Quiz|||
|Final Score|||

- ![How To Lighthouse testing](assets/images/readme-img/how-to-lighthouse.png)
- ![Quiz Lighthouse testing]()
- ![Score Lighthouse testing](assets/images/readme-img/score-lighthouse.png)

### HTML and CSS Validation <!-- omit in toc -->
### HTML <!-- omit in toc -->
![HTML Validation](assets/images/readme-img/html-validation.png)
- All of the HTML pages passed the W3C HTML Validator apart from quiz.html.
![HTML Validation](assets/images/readme-img/html-error.png)
- This error has appeared due to me leaving the img element source blank which is replaced within my quiz.js file. I fixed both of these issues by using a '#' as the source and creating a general, none specific alt text attribute (in this case it will always be a picture of a parrot). 
### CSS <!-- omit in toc -->
![CSS Validation](assets/images/readme-img/html-validation.png)
- All pages passed the W3C CSS Validation.
    
## JavaScript Testing <!-- omit in toc -->
* I ran both quiz.js and score.js through JS Lint to test them for errors and issues. While there were some warnings related to the use of single and double quotes there were no major issues.
 ![JS Lint Testing](assets/images/readme-img/jslint.png)
 ![JS Lint Testing](assets/images/readme-img/jslint-warnings.png)
* I also ran both JS files through JSHint to make sure it was thoroughly tested.
 ![JSHint Testing](assets/images/readme-img/jshint-quiz.png)
 ![JSHint Testing](assets/images/readme-img/jshint-score.png)
* Thoughout development I used console logs to test that the functions worked as intended.
 ![quiz.js console](assets/images/readme-img/quiz-console.png)
 ![score.js console](assets/images/readme-img/score-console.png)

 ## Known bugs and fixes 
  * Had issues with the score being logged once a button was disabled, attempted a multitude of fixes including:
    1. Adding if/else statements to event listener so that the checkAnswer() function is only called if the button is active.
    2. Adding if/else statements to checkAnswer() function so that if the button is disabled it cancels the calling of the function.
    **Solution**: Removed the event listener and the generated 'next' button and added onclick targets to each button within the html. With this fix I have had to sacrifice the fun fact and the correct/incorrect answer message.
