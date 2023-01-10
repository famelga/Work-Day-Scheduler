# Work-Day-Scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 

## Description 

[Visit the Deployed Site](https://famelga.github.io/Work-Day-Scheduler/)

This calendar application follows the 9-5 work schedule, and allows the user to add events. The application is also color-coded based on current hour. 

Most of the html was completed, with the exception of 12pm-5pm. Using the same formatting as the previous time-blocks, I added code to create the missing hours. While the scheduler displays the hours in a 12-hour format, the div ids were labeled using the format of a 24-clock. I did this so that I could use less than, greater than, and equal to in the if/else conditional statements that were used to assign color to the textarea boxes. I also had to remove the "past", "present", "future" classes from the parent div tags so that it would not override JQuery.

I used the for each function instead of a for loop because the for each iterates through every section and passes a callback function. With the time-block class, the function added either a past, present, or future class based on the relationship between the 24-clock div ids and current hour, which was pulled from dayjs. 

Additionally, I was able to pull the current date using dayjs format, and using the text property to display the date from JavaScript to the HTML.

![Scheduler Page](./assets/images/Work%20Day%20Scheduler.gif)

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


![Scheduler Homepage](./assets/images/Work%20Day%20Scheduler.jpeg)

## Learning Points 

The script.js was written using JQuery. 

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