# imgNation
https://eaimgnation.netlify.app/

## Project Overview

imgNation is an MongoDB and React build social media platform where the user is able to make an account, sign in and start posting photos to share on the site. From the homepage, the user is able to view all posts on the platform and have the ability to like others photos. Clicking on or searching a users name will bring you to their profile page and you will be able to view all posts by that user.

## Team Expectations

https://docs.google.com/document/d/12Fyt2f0gGayo98UrFe_HYiu-wy9dhZ9IIOL-pEve3-U/edit

## Project Board

https://github.com/users/evankaine/projects/1

## Wireframes

Sign In / Sign Up

![imageAlt](https://i.imgur.com/5Wbjpzd.png)

Home Page

![imageAlt](https://imgur.com/MmJToW7.png)

Profile Page

![imageAlt](https://imgur.com/ZnQ0ZNC.png)

Mobile Home Page

![imageAlt](https://imgur.com/5TAjfjc.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/FyDV8Df.png)

## Schemas

```
const postSchema = new Schema ({
    username: { type: String, required: true },
    imgURL: { type: String, required: true },
    caption: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Post", postSchema) 

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema) 
```

### MVP/PostMVP

#### MVP

- Create Account
- Make posts
- Sign out
- Profile Page

#### PostMVP

- Like Button 
- Messaging 
- Add Friend
- Interest Lists

## Project Schedule

| Day      | Deliverable                                | Status     |
| -------- | ------------------------------------------ | ---------- |
| Aug 2    | Proposal Approval / Backend Setup          | Complete |
| Aug 3    | Backend / Create, Read, Update, and Delete | Complete |
| Aug 4    | React Logic                                | Complete |
| Aug 5    | CSS Styling / MVP                          | Complete |
| Aug 6    | Advanced CSS / Post-MVP                    | Complete |
| Aug 9    | Presentations                              | Complete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Backend setup             |    H     |      3hrs      |     3hrs      |    3hrs     |
| Authentication            |    H     |      2hrs      |     3hrs      |    3hrs     |
| React Logic               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Landing Screen            |    H     |      2hrs      |     3hrs      |    3hrs     |
| Lisitng Screen            |    H     |      2hrs      |     3hrs      |    3hrs     | 
| Detail Screen             |    H     |      2hrs      |     3hrs      |    3hrs     |
| Form/post creation        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Data/update(edit post)    |    H     |      2hrs      |     3hrs      |    3hrs     |
| Componenet Home Page      |    H     |      2hrs      |     3hrs      |    3hrs     |
| Componenet Profile Page   |    H     |      3hrs      |     3hrs      |    3hrs     |
| Component CSS Home        |    H     |      3hrs      |     2hrs      |    2hrs     |
| Component CSS Profile     |    H     |      3hrs      |     2hrs      |    2hrs     |
| Like Button Function      |    H     |      2hrs      |     -----     |    -----    |
| Friends Page              |    H     |      3hrs      |     -----     |    -----    |
| Messages                  |    H     |      3hrs      |     -----     |    -----    |
| UI / UX                   |    H     |      3hrs      |     3hrs      |    3hrs     |
| Total                     |    H     |      42hrs     |     -----     |    41hrs    |

## SWOT Analysis

### Strengths:

Evan - Styling / React UI 
Chris - React / CSS styling / JavaScript
Diego - CSS/React
Henry - React/JS/Css/Layouts

### Weaknesses:

Evan - Authentication / Backend 
Chris - Backend / Authentication
Diego - DB general 
Henry - Authentication / DB / Backend

### Opportunities:

Growth on our backend skills

### Threats:

not letting the backend eat up to much of our time
