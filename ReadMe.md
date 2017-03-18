[Khan Academy](https://www.khanacademy.org/) Guardian Bookmarklets
==================================================================
A list of bookmarklets to be used by Khan Academy Guardians.

![Khan Academy](https://d3q6qq2zt8nhwv.cloudfront.net/platform/ad4b22b3481f4f0fa379bbde3f82c9bb.png)

Table Of Contents
-----------------

  1. General
  
  2. Community Discussion
  
      - [KAID Link Inserter](#kaid-link-inserter)
  
  3. Project Evaluations
  
      - [Project Evaluation History Browser](#project-evaluation-history-browser)
  
  4. Hot List
  
      - [Hot List Flag Browser](#hot-list-flag-browser)
 
## KAID Link Inserter

### The Issue

Because users can change their usernames on a whim, a link to a user’s profile of the form (https://www.khanacademy.org/profile/username) can wind up defunct, sometimes quickly. Guardians have to be on their toes and remember to find a KAID instead of a username when sharing links to user profiles, as we’ve lost track of users in the past from not doing so. 

### The Old Way

Finding a KAID from a username requires a trip to the browser’s dev tools, or inspecting the page source, or other time-consuming and tricky actions.

### The New Way

Activate this bookmarklet, and any profile links on a page will get a second link appended immediately afterwards that uses the KAID instead of the username. Guardians can copy and paste this link with a quick click and save some work searching for that info!

#### Author

Josh

**[Back to top](#table-of-contents)**


## Project Evaluation History Browser

### The Issue

When viewing a Project Evaluation, information about the author isn’t surfaced to Guardians (or anyone else). Also, there may be several evaluations and evaluators of a Project, as an evaluator may have not passed it, or an evaluation might be flagged or deleted (as happens with discussion banned users, or users that delete their account). This makes investigating certain moderation and technical issues very difficult.

### The Old Way

Information about Project Evaluations is passed down to the client, even to basic, non-authenticated users, but this info is never surfaced. It can be retrieved by a visit to browser developer tools or digging through the response of an [in-browser API call](https://www.khanacademy.org/api/internal/discussions/scratchpad/6382664161689600/projectfeedback), for example, but these are tricky and time consuming procedures.

### The New Way

Activate this bookmarklet, and you can now see the author of the evaluation, and visit their profile with a single click on their profile link! If a Project has had multiple evaluations, the “Prev” and “Next” buttons can be used to move through them.

#### Author

Evan (Eytukan)

**[Back to top](#table-of-contents)**


## Hot List Flag Browser

### The Issue



### The Old Way



### The New Way



#### Authors

Evan (Eytukan), Blaze

**[Back to top](#table-of-contents)**
