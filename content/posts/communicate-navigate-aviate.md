---
title: Communicate, Navigate, Aviate
date: 2022-10-24 01:18:58+07:00
featuredImage: ../images/beautiful-quote.jpg
tags:
  - Technology
author: Fathan Fisabilillah
featured: false
published: true
---
Hi Humans!

Recently I got myself inside a hole that I dug with my own feet, leading me to some hours of an struggling that I could have avoided, and would like to share with you a reflection that this experience brought me.

**TLDR**

* it’s more important for us to be working on the right problem than anything else;
* sharing a *position check* with your team few times during the day could steer you clear of some problems.

## The scenario

Drupal to WP migration project. Big site, client-specific huge codebase, massive content to migrate, intense traffic, many pages with different layouts, a lot of money involved. What we can call a big deal. Client putting the champagne in the freezer for the project launch in the next day. Many client areas and people involved.

![T-minus 24 hours and counting](https://hmn.md/tachyon/sites/9/2022/04/151022224102-nasa-space-launch-system-rocket-mars-vstan-orig-cws-00003329-scaled.jpg?fit=1024%2C1024)

*T-minus 24 hours and counting*

On our side, we were all totally focused on making this launch as smooth as possible. Dreaming of this launch actually, after 5 months of hard work, when we reinforced the strong reputation which HM had with this biggest – and probably most profitable – Americas’ client.

I had just delivered a challenging one-work-week ticket, and was still feeling sparks of the personal celebration that it got quickly approved and passed – as flat as a pancake – through the client’s QA process.

My feature branch just needed a rebase for joining some more late-included code, to land again in a testing environment. Initially, not even a new QA process was needed.

## The hole

After 5 minutes of work merging my feature branch with the testing environment branch, this chore started to look not as easy as I expected.

Client pressure increased a lot after half an hour of rebasing my branch. I was very concerned about my feature not making the launch, and in the middle of a tornado I made a wrong assumption which misled me. My code, interacting with some new code, made the article date disappear in the particular page I was working on. Simple problem to solve.

But instead of looking to this particular page, I put my head down coding a solution for fixing all the articles’ datetimes, which led me to an over engineered solution that touched more than 20 files.

At the end of the late night, hell stressed, after receiving great support from the team in this difficult situation, I took a deep breath, started over, understood the wrong assumption and changed my approach, so things started moving to the track again.

![](https://hmn.md/tachyon/sites/9/2022/04/5d963eded6d2ef00267cb03c.jpeg?fit=1024%2C600)

Kola Superdeep Borehole

## The wrong assumption

Having the article date gone in the specific page I was working on, I had a quick look in many other website pages, and the article dates disappeared too.

That could be explained because we were formatting the article date in a particular format inside the view files. These view template parts were initially prepared for just one type of date formatting, which would justify formatting the dates inside the view files, but as new features needed to be added it included different date formats.

My wrong assumption was that my code broke the displaying of all the article dates, site wide, each one in a different format, and that triggered me into a cold sweat, part of the fight/flight response.

## What should I have done

**First,** I should have checked if this problem was happening site-wide on the testing branch, or if it happened after fixing a conflict related to my merge. I ignored this possibility, as I had pulled the – in theory – code ready for QA, and they would have complained if this problem was happening.

**Or either,** I should have shared this assumption with other team members before the *fight* response. A *position check* (which I suggested myself in another post and I’m very used to do) would help:

*– Position check: I found that merging my code with the testing branch broke all the articles’ datetimes, and I’m engineering a solution to make site-wide article datetimes to arrive formatted, ready to be displayed, to the view files.*

## These guys rocks!

KAdam and Ben gave me – as usual I might add – amazing support on this, and the next morning the feature landed smoothly on the testing environment, being approved by the client, not holding the launch. Phew!

## Now the reflection

In aviation, to keep a safe flight, and specially for handling emergencies, pilots should remember something written in stone: “**no matter what happens, fly the airplane**“.

For pilots, the priorities are, in this order:

1. **Aviate**, i.e., fly the airplane, then
2. **Navigate**, and only
3. **Communicate** once the situation is under control.

**ANC – Aviate. Navigate. Communicate.**

You know you’re crushing it when you are having time to communicate well.

![Accessories, Accessory, Jewelry](https://hmn.md/tachyon/sites/9/2022/04/pasted-image-0-1.png)

In a flight, where death is a possible result, *life-or-death* mode could save lives, but this does not work for software engineering teams – in our context, communication is the paramount piece, since it’s more important for us to be working on the right problem than anything else. So, I would adapt it for:

**Communicate. Navigate. Aviate.**

That may be a good mantra for us.\
\
And that’s it. By the way, it’s on my radar writing, in the near future, another post compiling some concrete examples and results of sharing often *position checks* with your team, from the last project I was allocated to.

Enjoy the flight, Humans!