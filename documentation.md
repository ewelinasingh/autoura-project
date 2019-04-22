###### Web Design for Industry SWD600
###### Project Report (Live Brief) & Artefact
# Autoura Project
 By Ewelina Singh
## Background
Autoura is a service designed for sightseeing purposes of autonomous vehicles. Autoura required a user-centric and innovative way of providing self-driving car users with finding the suitable points of interest. As a solution, a web page application for searching food options has been developed.

## Methods

Cloud9 has been used as the development environment for this project because of its convenience in containing a code editor, debugger and a terminal in one place. The Autoura API has been carefully studied as well as other data provided for this project. Based on this data, medium fidelity wire frame designs were created.

Vue.js has been chosen as the JavaScript framework because it is progressive and allows for easy creation of single page applications. Maja Nowak (2018) states that "no prior knowledge of ES2015, TypeScript, JSX, or build systems required" to be able to code using Vue.js which makes it easy to use for beginners. Nowak (2018) also claims that "Vue launches applications faster than Angular and React" which is a big advantage because it will keep the bounce rate low and ensure a higher ranking on Google. This is also confirmed by Arnaud Lewis (2018) who says that "Vue.js offers some really good overall performance".

Vue CLI was then used to build the initial project. The Bootstrap framework has been used as a CSS method because it fitted the needs of the wire frame designs and allows for speedy development due to the pre-built blocks of code as well as the built-in media queries which allow creating responsive web pages and ensures supporting different devices. Although, whenever Bootstrap wasn’t good enough, utility classes were used. Some other advantages are that "Bootstrap can be adjusted exactly as you want it and as your project requires" as well as having "one of the best responsive, mobile grid system" according to Diana Caliman (2015). Syed Fazle Rahman (2018) also agrees on the powerful grid system provided by Bootstrap, but also points out the great browser compatibility by pointing out that "Bootstrap is compatible with the latest, stable releases of all major browsers and platforms." and works even on Internet Explorer versions 10–11 and Microsoft Edge.

Axios was chosen as the HTTP request tool and so used to get the data from the API. The advantage of using Axios is that it supports a range of browsers including older browsers. Jeff Lewis (2018) explores the advantages of using Axios instead of Node-Fetch and states that "Axios performs automatic transformations of JSON data" which means that there is less steps to take which ultimately leads to faster developing. Lewis (2018) also points out that Axios is more secure as well as having better error handling.

A GitHub repository was created to ensure version control and store backups, but by using cloud9, the work is always backed up anyway. At the end of the project, the web page was deployed to Firebase.

The build processes used were Vue CLI which comes with a web-pack. After the project was initialised, ‘npm run serve’ was used to run the web-pack configurations which ensure automatic updates like code checking to ensure that the code is correct as well as automatic updates within the browser so that whenever the code is changed, the browser refreshes automatically. This is convenient because it speeds up the development process.

## Implementation

Medium fidelity wire frames were designed to make the development of the pages easier. These can be seen in **Figure 1**, **2**, **3** and **4** and they present the initial designs for the web app. During development, some changes were made to the designs. At the top of the Home page, another API was used to display the current weather to help the user in choosing a suitable location to dine out. At the bottom of the home page, another API was used to display random quotes. This is to make the home page more interesting. On the Who page, the title tile was removed because the Autoura API provided 6 group options and so a design choice was made to make the page look better. The same was decided on the What page, with 8 food type tiles and 1 back button tile.  The Results page layout stayed the same as the medium fidelity wire frame. In total, data from 3 separate APIs was consumed, processed and displayed within the web app. 

The use of tiles on both the Who and What pages is a pattern, this is done to ensure the web app is modern and flows well. The same font is used throughout the whole web app as well as individual same text elements keeping the same font-size throughout the app.

![enter image description here](https://lh3.googleusercontent.com/2gaK-UQf1U1k6mfcq6yMFN96Hm6qFyOYPRiG-7iGVWLwcrtigpqt5Mey3mLwEhVmcOXuM6ct3YzhQA "Figure 1: Medium fidelity wireframe of the Home page.")
##### Figure 1: Medium fidelity wire frame of the Home page.
![enter image description here](https://lh3.googleusercontent.com/89E4g0W69mS2Qbl4demu1D8kavpGha7YbAzQAbdZiPUk3N3mxssR3gKYuwJg1Jc--qt3bPDtj2bjDQ "Figure 2: Medium fidelity wire frame of the Who page.")
##### Figure 2: Medium fidelity wire frame of the Who page.
![enter image description here](https://lh3.googleusercontent.com/nFTgK4N-Rpth5Lz25ySYcDnB_o0BOp7_pWxYIV77iipihK-eoX4Q6cWhemqusybeLi37POzM9ItWdw "Figure 3: Medium fidelity wire frame of the What page.")
##### Figure 3: Medium fidelity wire frame of the What page.
![enter image description here](https://lh3.googleusercontent.com/GFCFCpMoja9vGqQEeei57f3fxpwIjJeEzR4HCNif7NxDnuNwI4r_cDLYAPZRgx24OO3UVMUNEPDgtA "Figure 4: Medium fidelity wire frame of the Results page.")
##### Figure 4: Medium fidelity wire frame of the Results page.
An open-source JavaScript library called Leaflet has been used to implement a map on the Results page to display the restaurant locations to the user as well as Geolocation to track the user’s current position. Once the user chooses the group and food type they desire, the relevant restaurants will show on the map and will be represented using markers. When the user hovers over the different restaurant choices on the list, the relevant marker will increase in size to show the user the location of the restaurant. If the user clicks on a restaurant on the list, information about the chosen place will appear below the map. If the API has provided a website for the place, a button will appear at the bottom of the page.

The project was deployed to Firebase and can be accessed via the below link.
[https://autoura-project.firebaseapp.com/#/](https://autoura-project.firebaseapp.com/#/)

The GitHub repository can be accessed via the following link.
[https://github.com/ewelinasingh/autoura-project](https://github.com/ewelinasingh/autoura-project)

## Evaluation
The website was tested on different sized screens in order to check if the website is responsive and would display correctly on different devices. This testing was successfull and the desktop screens of the finished product can be seen in **Figures 5** to **8**. The mobile screens of the finished product can be seen in **Figures 9** to **12**. 

The website was tested using Google Lighthouse to check the quality of the web pages as well as run audits for performance, accessibility and more. The results of this testing can be seen below in **Figures 13** to **16**. GTmetrix was also used to test the website's page speed and provide page load details as well as other analysis. These results can be seen in **Figures 17** to **20**. PageSpeed Insights was used to carry out additional audits. These were run for the desktop version as well as the mobile. The results for the desktop tests can be seen in **Figures 21** to **24** and the mobile test results in **Figures 25** to **28**. Separate services were used to test the website's speed and performance in order to get the most accurate results.

Overall, the website has performed very well in the tests, although sometimes lacking in page speed, other performance has scored very high.

![enter image description here](https://lh3.googleusercontent.com/927aLHNpIHsydfB0wcYegjGv3efvpDV1D8ftXW0eroiM6ORENsZmHVbE7X3ALxjEUy5sSw4icikTDA "Figure 5: The desktop view of the Home page.")
##### Figure 5: The desktop view of the Home page.
![enter image description here](https://lh3.googleusercontent.com/6nWW7FAV__jq4fI1spi49y7IdKNxo668l6MRtHYTH9q8k_IY7Poa_4y-C9skzDpC-tDMwtsAPsi6qA "Figure 6: The desktop view of the Who page.")
##### Figure 6: The desktop view of the Who page.
![enter image description here](https://lh3.googleusercontent.com/MjocAv0uoqn-vYbW00xQwTG1EbY2PAWJjigY_hYvFMcSet_zdG_sbrbrUkVUBAzp_m4HPs4Rz5kYww "Figure 7: The desktop view of the What page.")
##### Figure 7: The desktop view of the What page.
![enter image description here](https://lh3.googleusercontent.com/tWMTKtS4pemkLXvys3Z1dZk7aVmmdEqFsZMGmJ27HDTBg8HoxBLxT2lP8OkAS09nlS3O6K52UpTdHA "Figure 8: The desktop view of the Results page.")
##### Figure 8: The desktop view of the Results page.
![enter image description here](https://lh3.googleusercontent.com/h6yFPfo9jMezMiWMZsHh2Ya-hU6TToOX8TVb9txYXQxxuX-n6_07WZ3b3WNLOAs8Fn3qxqhdxu9atQ "Figure 9: The mobile view of the Home page.")
##### Figure 9: The mobile view of the Home page.
![enter image description here](https://lh3.googleusercontent.com/7wCXFk4viokJXVelPXi5nSJN5NKVhRonx59YdrDYFnwBN0CeuJffGYOlRyWHzm8x9_rh77vu0rr4cw "Figure 10: The mobile view of the Who page.")
##### Figure 10: The mobile view of the Who page.
![enter image description here](https://lh3.googleusercontent.com/nt_BA27Vqhvn13yxoxGB2FrkCzIE7Q6CTWrfWYxLbHcEG_RqGpFFH6OZpZ-j0E08qT8wdMHNaUTiqQ "Figure 11: The mobile view of the What page.")
##### Figure 11: The mobile view of the What page.
![enter image description here](https://lh3.googleusercontent.com/j5aVn8F0kH1Ae6vPPri7t0HY1AFFFy1lCb0ObLl8fL5j6qWi7y-kakiE3ReFlmo7srpWHYaAr9efWg "Figure 12: The mobile view of the Results page.")
##### Figure 12: The mobile view of the Results page.
![enter image description here](https://lh3.googleusercontent.com/QWHTbADPNpB_DfaqsmpMg67-blpoCCMHwP2a8ClXXygko_Nof1k3xtBnYzbj9VbgUM0t_LrC6zKktQ)
##### Figure 13: Google Lighthouse test results for the Home page.
![enter image description here](https://lh3.googleusercontent.com/cqGJh9mwTDrDwktAjdXuE6hxRw7A8S-wMsezwQkX7SG5tPZ7WEM2QxmnV_mMGZ-weYUCBas8ecwEnA)
##### Figure 14: Google Lighthouse test results for the Who page.
![enter image description here](https://lh3.googleusercontent.com/o2ENG_xkveRAvh1JDCxnxESB867VWp9eH8a_gkK7Fg84JFaz0qk7JiLdogm26D1TGZ2GWQblHM6DGg)
##### Figure 15: Google Lighthouse test results for the What page.
![enter image description here](https://lh3.googleusercontent.com/idd7kRlFOiXGTGfs1nT8dnm68Mp1-LTkS4aC_g_YyKE1V6BKZwpmjLO3PknrluekLJ46HexfuVr4Tw)
##### Figure 16: Google Lighthouse test results for the Results page.
![enter image description here](https://lh3.googleusercontent.com/nWI-Kf4AYtEkCUF9jYZZhNLiR9AtAN5S-Fr_rgLRT9BRQ5f_4UAQkS58BP_fevq99k1An6M81wRM5g)
##### Figure 17: GTmetrix test results for the Home page.
![enter image description here](https://lh3.googleusercontent.com/6gIlda2IrL3LkeXM7sbczD98bYyxiArOKEMqLifXnZ2nvqoYEuJ07Gbgh0aOyQSabhvuO1AiHn5_nQ)
##### Figure 18: GTmetrix test results for the Who page.
![enter image description here](https://lh3.googleusercontent.com/d6dtDSF5H4dfmpmDH_YDJ9eEgr3ukaid1m3BjrSWnz_cE0XfjTpDoqkCUu0LEgmVKy1hbV0NSYcmeg)
##### Figure 19: GTmetrix test results for the What page.
![enter image description here](https://lh3.googleusercontent.com/VarDYc4eIMS8e9g2S9w7k2eQ4zRMDoC6TC_UjGXogzVD9vxuY2z0Xw8vSAl8udKUt_Hpn5wUtplUxw)
##### Figure 20: GTmetrix test results for the Results page.
![enter image description here](https://lh3.googleusercontent.com/vmCSgU_f1l32quxoziaSjOeqoOfhwMiH1dsLUhZSAXd7fIQwiSkShVxhVnmjZtu5nPtJylIReEGY8A)
##### Figure 21: PageSpeed Insights test results for the desktop version of the Home page.
![enter image description here](https://lh3.googleusercontent.com/BRogtkS9mV36KhJaaSYDNVkO4r5QdaNVrJGaPhYN80HJOBSC3xdurQ-U6l5Y4luVKizCFj_kiXqk5g)
##### Figure 22: PageSpeed Insights test results for the desktop version of the Who page.
![enter image description here](https://lh3.googleusercontent.com/6YJKrYAPF2HG65MiKKFyUB_TQVmjZ02MbuZC5LjkFJCjTSlJmCyZbhq5k3m8SRbDznrSAY3bnpgAGw)
##### Figure 23: PageSpeed Insights test results for the desktop version of the What page.
![enter image description here](https://lh3.googleusercontent.com/5ujYwihiHCne6LNdBONRfaNC0ESH-cjY5NFY4Pz4c2mhyxIeVXE3Xi3jliG-2nX6A4faT8RXGKsoDw)
##### Figure 24: PageSpeed Insights test results for the desktop version of the Results page.
![enter image description here](https://lh3.googleusercontent.com/XD6j4q7gd9H774NWf_BNaXvm5kG_VNB_c2MQcKvYgqzAVSRn0KLe0reVeZorkiOitkxMesXttugx4w)
##### Figure 25: PageSpeed Insights test results for the mobile version of the Home page.
![enter image description here](https://lh3.googleusercontent.com/Pvrom_5_PVK-9qXBC9WTpiJZGGSIPqTdQ1cmBvdcZpFHL_L3sHC3AG5s80NUMUp4lNsotsF9hZ0ZFA)
##### Figure 26: PageSpeed Insights test results for the mobile version of the Who page.
![enter image description here](https://lh3.googleusercontent.com/QPDEdxZUkJKw-CftERW8rzS2EjtxbVPJauRpln--LTRHZPR4rgOUUzapgI4seX-UCp6BHKCVCrktnw)
##### Figure 27: PageSpeed Insights test results for the mobile version of the What page.
![enter image description here](https://lh3.googleusercontent.com/_rBlb2mKj_HdYujyTB6O8eThN7a4l_lbedrnT7zyGDeu3GY7Tkjfxpf4mj-UCMumE-FAItRmzjHuZQ)
##### Figure 28: PageSpeed Insights test results for the mobile version of the Results page.


## Reflection

When starting the project, I was worried because I felt that I did not have enough skills to create a  whole project using Vue.js as I had absolutely no knowledge or previous experience with Vue. Throughout the project, I have watched many tutorial videos to grasp the logic of Vue and the other technologies used within the project, as well as read many articles in attempt to get rid of all the errors I came across. 

Now, that the project is completed, I feel much more comfortable with developing using Vue.js. I have previously also struggled with using GitHub but because this project required using it, I gained an understanding of GitHub and its benefits and became quite confident using it. 

Another issue I overcame during this project was using the terminal. I have always felt that it was really difficult and confusing. During this project, I came across many errors which resulted in having to initialise the project from the start. This repetition lead me to become familiarised with using the terminal and somewhat understand how to use it - definitely good enough to create a small project like Autoura. The things I am most confident with doing is initialising a project, installing needed dependencies, linking to GitHub and committing as well as deploying to FireBase. 

Originally, I was planning to deploy to GitHub Pages but could not get it working. I searched through many different tutorials and followed about 3 of them and still came across many different errors which were stopping me from deploying. I then attempted to deploy to FireBase which was successful on the first try. The process seemed much easier with FireBase. 

Throughout the project, I was not very happy with all the new technologies I had to use within the time-frame of the project. I definitely struggled a lot at the start, but now that the product is finished, I am satisfied with the web app I have created and very happy that I gained so many new skills and learned new and modern technologies along the way. 

## References

CALIMAN, D., 2015. To use or not to use Bootstrap Framework? [viewed on 19/04/19]. Available from: [http://blog.creative-tim.com/web-design/use-not-use-bootstrap-framework/](http://blog.creative-tim.com/web-design/use-not-use-bootstrap-framework/)

LEWIS, A., 2018. 3 reasons to use Vue.js in your next web project [viewed on 19/04/19]. Available from: [https://prismic.io/blog/3-reasons-to-use-vuejs-in-your-next-web-project](https://prismic.io/blog/3-reasons-to-use-vuejs-in-your-next-web-project)

LEWIS, J., 2018. HTTP Requests Compared: Why Axios Is Better Than Node-Fetch (Automatic Transformations, More Secure, Can Handle Errors Better, Interceptor Support, And More Browser Friendly) [viewed on 19/04/19]. Available from: [https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6](https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6)

NOWAK, M., 2018. Reasons Why Vue.js Is Getting More Traction Every Month [viewed on 19/04/19]. Available from: [https://www.monterail.com/blog/reasons-why-vuejs-is-popular](https://www.monterail.com/blog/reasons-why-vuejs-is-popular)

RAHMAN, S.F., 2018. Why I Love Bootstrap, and Why You Should Too [viewed on 19/04/19]. Available from: [https://www.sitepoint.com/why-i-love-bootstrap-you-should/](https://www.sitepoint.com/why-i-love-bootstrap-you-should/)

## Bibliography

**Services used for testing:**

Google Lighthouse
[https://developers.google.com/web/tools/lighthouse/](https://developers.google.com/web/tools/lighthouse/)

GTmetrix
[https://gtmetrix.com/](https://gtmetrix.com/)

PageSpeed Insights
[https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/)

**Most useful websites used during the project:**

NPM documentation
[https://www.npmjs.com/](https://www.npmjs.com/)

Bootstrap documentation
[https://getbootstrap.com/docs/4.3/getting-started/introduction/](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

FireBase deployment
[https://firebase.google.com/docs/hosting/deploying](https://firebase.google.com/docs/hosting/deploying)

FlexBox guide
[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Vue.js documentation
[https://vuejs.org/v2/guide/index.html](https://vuejs.org/v2/guide/index.html)

Autoura API
[https://www.autoura.com/docs/api](https://www.autoura.com/docs/api)

Weather API
[https://openweathermap.org/api](https://openweathermap.org/api)

Quotes API
[https://quotesondesign.com/api-v4-0/](https://quotesondesign.com/api-v4-0/)


