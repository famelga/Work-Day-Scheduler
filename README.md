# Work-Day-Scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 

## Description 

[Visit the Deployed Site](https://famelga.github.io/Code-Quiz/)

In efforts to guage students' progress of JavaScript fundamentals, I have created a code quiz.

I started by pseudo-coding what I wanted to occur as a user navigating the quiz. From there, I listed which functions were needed, and identified variables that may be needed. I created variables in JavaScript to refernce ids and classes from the html. Since I wanted items such as the timer and questions to appear once the start button was clicked, I added styling in js to hide the start button and instructions by changing the display to "none." The timer was made visible with the display "block" feature. 

Once the "time" text was visible, I began working on the countDown function to display the timer counting down from 60. Additionally, an "if" conditional statement was included so that the timer would stop at "0" rather than continuing into the negatives.

While it was helpful to pseudo-code, applying the actual logical was still challenging. I was able to set up the quiz questions and answers into an object array; however, I was unsuccessful in having them display like the timer had. I attempted "textContent" and "append."

![Code Quiz Page](./assets/images/Code%20Quiz.gif)

## Portfolio Example

Below, my setinterval function was not displaying the timer since the "i" in interval was not capitalized. JavaScript was unable to recognize it with a lowercase letter, thus my code was not communicating with each other.


```function gatherCrit() {
timerId = setinterval(countDown, 1000);
```

Here, the function is formatted correctly with a capitalized "i"  in setInterval.

```
timerId = setInterval(countDown, 1000);
```


## Usage 

Visit website.


![Quiz Homepage](./assets/images/Website%20Homepage.png)

## Learning Points 


By creating this application, I have learned the importance of pseudocoding. Although I experienced some struggles and did not complete the assignment, navigating the code that I completed was easier due to pseudocode. 

I was also reminded of the importance of details and specificity. There were a couple of instances in which my code was not working when I would view the page in a browser. These ended up being sue to s missing character, capitalization, or wrong formatting. 

## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga




## License

MIT License

Copyright (c) 2022 Fayven Amelga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.