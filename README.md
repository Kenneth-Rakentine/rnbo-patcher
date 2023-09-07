# RNBO Patcher

**a web based patch management system for max msp rnbo projects**

![Logo](https://i.ibb.co/wNhBf16/ideogram-8.jpg)

### Live Deployment:
https://rnbo-patcher.onrender.com

---
## Diagram
![Draw.io](https://i.ibb.co/KyqzdTg/Rnbo-Patcher-DRAWIO-Diagram-TWO.png)

## Trello Board
![Mod 3 Project](https://i.ibb.co/gdjt14J/Trello-Board-Screenshot.png)

---
# Concept
To solve the problem of integrating Javascript Exported RNBO(for Max Msp) to REACT, this web application allows a user to externally import their javascript rnbo project to their browser and provides them a single library in which to save the state of their imported patches to a collection which can subsequently be edited, deleted, & re-opened for further exploration 

Max MSP is a visual programming language for music and multimedia. Rnbo is a library and toolchain that can take Max patches, export them as portable code, and directly compile that code to targets like a VST, a Max External, or a Raspberry Pi.

---
### Instructions

- Sign up/Log in as a new user
- Enter the Url of your hosted Rnbo Patcher/Project
- Click "Save" button to store imported url, patch state into a new "Collection"
- Add a patch collection title
- Edit button edits the patch
- Delete button deletes the patch 
***Example rnbo patch urls you can enter to test the functionality:***
1. [RNBO Granular Web Synth](https://sllewmas.github.io/rnbo/) - **Credit:** [Sam Wells](https://sllewm.as/)
2. [Multi-Touch Granular Sampler](http://zya.github.io/granular/) **Credit:** [ZYA](https://github.com/zya/granular)
3. [RNBO Web Granulator](https://codesandbox.io/embed/rec-3-ui-fhczyi?fontsize=14&hidenavigation=1&theme=dark) **Credit:** [Sarunas Kilius](https://projekter.aau.dk/projekter/files/535868106/Master_Thesis__1_.pdf)
4. [React UI Demo](https://lttcmd.site/build/index.html) **Credit:** [lttcmd](https://lttcmd.site/)
5. [Synth Playground](https://gth80g.csb.app/) **Credit:** [Cody Carlton](https://codesandbox.io/u/cody-carlton)
6. [kvlutu](https://kvlutu.csb.app/)
7. [Granulator.maxpat (v1.1.0)](https://pm1unr.csb.app/) **Credit:** [Sarunas Kilius](https://codesandbox.io/u/sharunas11)

---

### Screenshots


![Early Screenshot](https://i.ibb.co/YbYkMXb/rnbo-patcher-screenshot-1.png)

![Second Screenshot](https://i.ibb.co/9n35P8w/screenshot-2.png)

---
### Assignment:

Per Scholas MOD 3 Final Project

https://perscholas.instructure.com/courses/1464/assignments/291071?module_item_id=930418


DUE: september 7th


### Approach

---

*Create a patch librarian/management sysntem and audio production enviornment for Rnbo (for max-msp) users in the browser 

*the goal is to give the user a tool in which they can import their pacthes to their own library of patch collections, work on the patch within the web environment to manipulate and create audio, and save, edit, & curate their progress*


CRUD:
- Create new patch including imported rnbo js url & title
- Read patch saved to colection
- Edit patch & patch title
- Delete patchproject

---

<br>

### Resources

[RNBO & JS TUTORIAL](https://www.youtube.com/watch?v=fzfGYsIsAKg&ab_channel=lttcmd) *

[Max Msp Wiki](https://en.wikipedia.org/wiki/Max_(software))

[@rnbo/js](https://socket.dev/npm/package/@rnbo/js) 
```npm install @rnbo/js```
*JavaScript runtime for using exported RNBO Patchers in a Web Browser*

[Spline 3d](https://spline.design/)```@splinetool/react-spline```

[RNBO Javascript API reference](https://rnbo.cycling74.com/js)

[Js Web Template Github](https://github.com/Cycling74/rnbo.example.webpage)
 & 
 [Js Webpage Template Guide](https://rnbo.cycling74.com/explore/javascript-webpage-template)

Web Audio API & AUDIOWORKLET

[Web Integration of a granular synthesizer using RNBO in Max/MSP PDF](https://projekter.aau.dk/projekter/files/535868106/Master_Thesis__1_.pdf)

[RNBO web granulator js codesandbox ](https://codesandbox.io/s/fhczyi) 

[Learning Synths w/RNBO](https://rnbo.cycling74.com/explore/learning-synths-and-rnbo)
*alternatives: Gibber, PureData & WebPD*

[Exploring RNBO By Ottavio Sostero](https://www.ottaviosc.uk/blog/jhbmir5jraacik9yqyt8j6wzqwej8p)

[Processing.js](https://processing.org/tutorials/gettingstarted)

[Using React / NextJs to pull in a patch](https://www.saintsalo.com/rnbo)

[Bela Forums: RNBO - Cycling 74 Max -> C++](https://forum.bela.io/d/2632-rnbo-cycling-74-max-c/6)

[Zeal.co - Making a plugin with RNBO](https://zeal.co/notebook/rnbo-plugins/)

[Saint Salo Rnbo Device for Next.js/tsx GITHUB Repo](https://github.com/saintsalo/saintsalo-site/blob/main/web/app/rnbo/page.tsx)

**Including the RNBO patch using JavaScript:**
In order to actually include the audio processing, a JavaScript (JS) application was
created. First of all, AudioContext - a Web Audio API interface, where all audio
processing is happening - was initiated. AduioContext was responsible not only for
sound processing but also outputting audio on a website. Stopping and resuming
the AudioContext will do the same to the audio output

[RNBO BUFFER GRANULATOR Object](https://docs.cycling74.com/max8/refpages/rnbo_granulator~)

[AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)

[Learn the Web Export Target](https://rnbo.cycling74.com/learn/the-web-export-target)

[WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

[Reddit FM Synth REACT RNBO Github](https://github.com/StuartMellor/Max-MSP-RNBO-Web-React-Simple-FM/tree/main/Node%20App)

[RNBO GRanular Web Synth](https://sllewmas.github.io/rnbo/)

[HTML5 multi-touch Granular SYNTH github](https://github.com/zya/granular)

[Nebula Project Github](https://github.com/nthe/nebula)

[Grainflow Max Msp App](https://github.com/composingcap/grainflow-basic-granulator-app?fbclid=IwAR3Q4sDQwuSJlqS6YVShAlIeL6GlTZERZ-8FMvEeoAhBtRVngusOznSQPmU)

[RNBO EXPORT TUTORIAL](https://www.youtube.com/watch?v=Q3S3BD1LnCY&ab_channel=MelodyLoveless)

[Export Js Code Tutorial for RNBO](https://www.youtube.com/watch?v=1HVT1hsuKsA&ab_channel=lttcmd)

[Philip Meyer github patches](https://github.com/pdmeyer/philip-meyer-max-tutorials/blob/main/patchers/sampler/sample-switching.maxpat)

[CodePen of the abl LFO Animation w/html-css-js](https://codepen.io/team/cycling74/pen/BaxOzmL/320ebc13dfe1a5a20484858f2266e90a)

[CodeSandbox @rnbo/js Examples and Templates](https://codesandbox.io/examples/package/@rnbo/js)


**Knobs/Fader Icons:** 
- [Vue round Slider:](https://www.npmjs.com/package/vue-round-slider)
- [React Rotary Knob:](https://www.npmjs.com/package/react-rotary-knob)
- [React Dial Knob:](https://www.npmjs.com/package/react-dial-knob)
- [React Community Slider:](https://www.npmjs.com/package/@react-native-community/slider)
- [React red Slider:](https://www.npmjs.com/package/react-slider)

---
### Tech/Framework

**_Built With:_**
```
<
-Rnbo.js
-Max Msp  
-Javascript
-CSS
-HTML5
-REACT
-Express 
-Node.js
-MongoDB
-Mongoose
-Spline
/>
```
#### Credits:
- [Trello Board](https://trello.com/invite/b/ErKkj91p/ATTI276dffaac2774f9400eff6fbe187aaa7C7ACA64B/mod-3-project)
- [Ideogram AI](https://ideogram.ai/): image generation for logo
- [Draw.io](https://app.diagrams.net/): Diagram
- [Trello](https://trello.com/): Workspace Board
- [Cycling '74](https://rnbo.cycling74.com/learn/welcome-to-rnbo)
- [Icons8](https://icons8.com/): Icon PNGs
- [Spline 3d Objects](https://app.spline.design/file/9ade1277-e07a-4527-8ef9-f7ea6a91669c)
- [Realtime Colors](https://realtimecolors.com/): Visualizing & Choosing Color Palette for All Design Elements
- [Cycling '74 Github](https://github.com/Cycling74/rnbo.example.webpage): Rnbo Example Webpage Template for JS

*special thanks*: *jenna c. (for her troubleshooting wisdom and guidance)*

---
#### Future Enhancements:

- [ ]  Audio capture (start/stop) button which saves audio to the local storage buffer with AUDIOCONTEXT and save that audio file to the patch in collections
- [ ] Replace iframe with better external import functionality/actual react Rnbo integration
- [ ] Sample Import - drag and drop
- [ ] Scrubber start position lfo 
- [ ] Share project feature
- [ ] Max Granular Sampler tool refactored from js to react from max msp via rnbo

---

###### Unsolved/To Be Accomplished Roadmap:

- [ ] Create more unqiue working Rnbo Patches to be expoted and saved to the patch catalogue. The main project idea being a granular sampler including the following PARAMS: 
 - LFO for scrub playback start position, 
 - window shape/env, 
 - scatter/spread, 
 - grain size, 
 - pitch(?), 
 - grain density/amount/num, 
 - pan/width, 
 - playback speed, 
- grain rate(?)
 - play button/mute-stop button
 - sample import/drop box (in waveform display window? also list of imported?)

---
## Assigment Requirements/Instructions:
Minimum Requirements:

3) Application Technical Requirements/Deliverables
A functioning full-stack, single-page application for (Express) and a CDN service for (React).
Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node
Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
Implement token-based authentication - "...a user can sign-up, log in & log out".
Implement authorization by restricting functionality to authenticated users.
Navigation should respond to the login status of the user.
One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
Have a comprehensive feature-set.

Full CRUD distributed across all Data Entities

Or

One of the following features instead:

(Easy) - Consume a third-party API and display API data in components.
(Moderate) - Include an admin interface w/features.
(Hard) - Utilize multi-user, real-time communications (difficult and time consuming)

- authentication for user login must be working and demonstrated during presentation


to supplement: look up "mongoose hooks"

........

---
## TOOLS


[Trello](https://trello.com/b/ErKkj91p/mod-3-project)

[DBDiagram](https://dbdiagram.io/home)

[Wireframe.cc](https://wireframe.cc/)

[StableDiffusion:](https://stablediffusionweb.com/#demo)

[Figma](https://www.figma.com/) 

[Socket.io](https://socket.io/)

[Swagger Readme](https://swagger.io/docs/open-source-tools/swagger-codegen/)


---
### Mod 3: A MERN Stack Application & TribleByte:

~~~~~~~~~
Overview


🚨 ensure that project:

✅   Meets the minimum requirements

✅   Is reasonably scoped

Necessary Deliverables
1) Project Planning
A project consists of more than just code.

This project requires planning organized within a Trello board with the following lists:

Icebox: Holds user stories that have yet to be moved to the Current/MVP list. All user stories are originally put into the Icebox, including both MVP and wish list stories.
Current/MVP: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved from the Icebox.
Completed: Hold completed user stories.
Wireframes: Sketches of each screens's user interface for the major functionality of the application.
Entity-Relationship-Diagram (ERD): A diagram of the app's models (one per data entity) and the relationships between them.
User stories need to be formed properly using this template:
As a <role>, I want <feature> so that <reason>. The reason is optional if it's patently obvious.

2 Project Source Control & README
The project's source code for both your Express Backend and React Frontend must be hosted on a personal GitHub repository.

The repo is to contain frequent commits dated from the beginning of the project through its completion.

The project must include a README.mdfile with the following sections:

Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
Getting Started: Links to the project's planning (Trello board) and the deployed app.
Unsolved Problems: List any unsolved issues.
Future Enhancements: Identify future features and enhancements planned for the project.

3) Application Technical Requirements/Deliverables
A functioning full-stack, single-page application for (Express) and a CDN service for (React).
Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node
Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
Implement token-based authentication - "...a user can sign-up, log in & log out".
Implement authorization by restricting functionality to authenticated users.
Navigation should respond to the login status of the user.
One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
Have a comprehensive feature-set.

Full CRUD distributed across all Data Entities

Or

One of the following features instead:

(Easy) - Consume a third-party API and display API data in components.
(Moderate) - Include an admin interface w/features.
(Hard) - Utilize multi-user, real-time communications (difficult and time consuming)

4) Project Presentation
You will have 7 minutes to present and demonstrate the following:

Introduce your project by paraphrasing its README.
Click the link in the README to open the deployed app.
Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.
Demonstrate your app's main features.
Share/discuss the following code (not line-by-line):

The main/central Mongoose model
Your "favorite" Express controller method
Your "favorite" React component
The client-side routing
Share the experience by answering the following:

What was your biggest challenge?
What are your key learnings/takeaways?
Following your presentation, there will be a brief Q & A period and optional instructor feedback.

Project Assistance
At this stage of SEIR, being able to find the the answers to your development issues is of paramount importance.
Feel free to use all resources available and collaborate with others.
If you do seek assistance in Slack, explain the issue, include screenshots, and explain what you've done to solve the issue on your own.

Suggestions to Get Started
Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.
Implement the Usermodel and authentication first. Then implement the "As a visitor, when I browse to the app, I want..." user story.
Prioritize user stories and code them accordingly.
When implementing a feature, think through the steps that it takes in plain language first. If necessary, write and/or diagram the steps to help guide your coding.
Follow the steps we've done in class to implement features, beginning with the user's interaction, identifying the proper route, etc.
Read the docs for whatever technologies / frameworks / API’s you use.

Best Practices
Write DRY code.
In a SPA, communication with the backend is via AJAX. Build RESTful APIs to CRUD your data entities (resources) and perform other functionality via AJAX. In a React app, those AJAX calls should be made from "service" modules, not components.
Be consistent with your code style.
Clearly name variables and functions - remember, variables are usually named as nouns and functions as verbs.
Write well-formatted HTML/CSS/JS. Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.
Comment your code where it makes sense. Most code is self-documenting, however, comments help explain complicated code.
If you have any questions regarding these requirements, please feel free to contact your instructional team!


*SKIP TRIPLEBYTE

