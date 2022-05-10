# Quno Frontend Code Challenge


## Introduction

Hey there! Welcome to Qunomedical's Frontend code challenge. We are happy you are interested in our company and are taking your time to solve this challenge.

The primary goal of this challenge is to assess, without using too much of your time, how comfortable you are with base aspects of Frontend Software development and Software development in general, especially within the context of Qunomedical's tech stack.

We also want to use this challenge as an opportunity to get you in touch with a little bit of our tech stack and the problems we try to solve here.

Feel free to give your opinion and suggestions about it.

## Deadline

You have a week to return this challenge to our HR department, however this challenge was designed not to take much more than a few hours (hopefully). We are mindful of your time.

In order to deliver the challenge, simply send it zipped to our HR representative.

## Objectives

As mentioned, we want to assess your expertise as a Javascript developer and give you a small taste of what we do here at Quno.

Here is what you need to deliver:

1. A Frontend application that follows both product, design and technical requirements.
2. A document briefly explaining your decisions, especially if you deviated from any specific point on the specs.

This is how we will be grading your challenge:

1. Did you follow the specs? If not, did you have a good reason for it?
2. How did you fill the gaps in the specs?
3. How easy is to follow your code (clean, documented, good commit messages, etc)
4. Is your code tested? **PS: You don't need to test everything. We just want to make sure you are comfortable writing tests.**
5. How you communicate difficulties or feedback back to the Product team.

## Specs

Here you find the specs of the project.

### Product requirements

Here at Quno, we want to connect the best doctors with our patients so they can have high-quality, affordable treatments. So the customers must know the doctors as best as they can. For this, we want to create a page with a list of doctors and a detailed page for each doctor.

The URL is expected to be the following:

1. `/doctors`, which is the list of all doctors
2. `/{slug}`, which is the details page for a given doctor, where `slug` is the slug of the doctor

The design specs can be found at `doctor-details.pdf` and `doctor-list.pdf`. These mockups are not complete **on purpose**. You are expected to fill the gaps as you seem fit. The only thing we ask is that you write a small text explaining the decisions you made (either to fill in design gaps or to replace design decisions). Also, you are not obliged to implement any breakpoint other than mobile. So for tablet and desktop, just expand the viewport. Honestly, we won't even check how the page looks on any other viewport.

In terms of functionality, we expect the user to be able to order the results of the list of doctors by:

1. Best Qunoscore
2. Best Average Review
3. Lowest price

### Technical requirements

1. You are expected to use React.
2. You are free to use any styling frameworks you prefer (please refer to the [suggestions](#suggestions) we have below)
3. You are free to use any testing framework you want. You don't need to test everything in your code. **The minimum we expect is a complete unit test of at least one component.**
4. Since one of the main pillars of our website is to be SEO strong, you are required to use **server-side rendering** for this website. This means we expect the page to fully render without Javascript enabled (we don't expect the filtering capabilities to work without Javascript enabled though). It is up to you to decide how to achieve this (please refer to the [suggestions](#suggestions) we have below).
5. **(Optional) BONUS: Implement things in Typescript**

The data for the pages are retrieved from the backend that is shipped within this challenge. You have two endpoints:

1. `/`, which returns the list of all doctors with its reviews
2. `/{slug}`, which returns information about one specific doctor, represented by the slug `slug`

**We don't expect these endpoints to be hit at runtime**, but you can request data during runtime if you feel it is necessary.

## Getting started

This challenge is divided into `backend` and `frontend`. You are not expected to do anything on the `backend` folder. To run the backend code, you just need to:

1. `cd backend/`
2. `yarn install`
3. `yarn dev`

The `frontend` folder has been initialized with the default NextJS template for Typescript and with TailwindCSS. Feel free to completely change this folder to what you prefer.

If you want to use this setup, all you have to do is:

1. `cd frontend/`
2. `yarn install`
3. `yarn dev`

Also, in the `frontend` folder you find all the assets you need for the frontend (icons and images) on the `public` folder.


## Suggestions

Here at Quno we work with [NextJS](https://nextjs.org) and we love it. We believe it is very good for the problems we are trying to solve.

Given that this challenge tries to touch upon a few of these problems, we would suggest you use it. **However, it is not mandatory. Please feel free to use whatever tools/frameworks you feel like are the best ones for the job and the ones you are most comfortable with.**

## Contact us

In case you have any doubts, please do not hesitate to contact our HR team, which will forward your message to us.

We wish you the best of luck!
