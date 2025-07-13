# YC Directory

[![Project Banner](https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99)](https://youtu.be/Zq5fmkH0T78?feature=shared)

A **minimalistic, dynamic startup pitch directory platform** built with React 19, Next.js 15, and Sanity, enabling founders to **share and browse startup ideas seamlessly** with GitHub login and a clean design.

![typescript](https://img.shields.io/badge/-Typescript-black?style=for-the-badge\&logoColor=white\&logo=react\&color=3178C6) ![nextdotjs](https://img.shields.io/badge/-Next_JS-black?style=for-the-badge\&logoColor=white\&logo=nextdotjs\&color=000000) ![tailwindcss](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge\&logoColor=white\&logo=tailwindcss\&color=06B6D4) ![sanity](https://img.shields.io/badge/-Sanity-black?style=for-the-badge\&logoColor=white\&logo=sanity\&color=F03E2F)

[🚀 **View Live**](https://yc-directory-self-one.vercel.app/) | [🎥 **Tutorial Walkthrough**](https://youtu.be/Zq5fmkH0T78?feature=shared)

---
### Startup Directory Platform

Build this project step by step with our detailed tutorial on [**JavaScript Mastery**](https://www.youtube.com/@javascriptmastery/videos) YouTube. Join the JSM family!

## 📋 Table of Contents

1.  ⚙️ [Tech Stack](#tech-stack)
2.  🔋 [Features](#features)
3.  🤸 [Quick Start](#quick-start)
4.  🔗 [Assets](#links)


## ⚙️ Tech Stack

*   React 19
*   Next.js 15
*   Sanity
*   TailwindCSS
*   ShadCN
*   TypeScript

## 🔋 Features

👉 **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account.

👉 **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (  
image or video).

👉 **View Pitches**: Browse through submitted ideas with filtering options by category.

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.

👉 **Profile Page**: Users can view the list of pitches they've submitted.

👉 **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

and many more, including the latest **React 19**, **Next.js 15** and **Sanity** features alongside code architecture and  
reusability

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

*   [Git](https://git-scm.com/)
*   [Node.js](https://nodejs.org/en)
*   [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```
git clone https://github.com/harivansh-b/yc_directory.git
cd yc_directory
```

**Installation**

Install the project dependencies using npm:

```
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &  
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🔗 Assets

* [🚀 Live Deployment](https://yc-directory-self-one.vercel.app/)
* [📂 Fonts and Design Assets](https://drive.google.com/file/d/1OEFHnEq5pQFP86u8FOBLBBNxKPsbjjqU/view?usp=sharing)
