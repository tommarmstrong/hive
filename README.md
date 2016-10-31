# Hive

## About
A Swarm like prototype app that encourages sustainability within UTS Building 11 built for one of my classes at UTS.

 Hive encourages users to be more sustainable by gamifying sustainable practices within UTS Building 11. The examples shown in this prototype encourage users to take the stairs instead of lifts and use reusable cups when getting coffee instead of paper cups. In addition it shows the impact the user is having on the building’s Phosphorous extraction plant which collects valuable Phosphorous from people’s pee.

### Why Hive?
Hive encourages users to be more sustainable by gamifying sustainable practices within UTS Building 11. The examples shown in this prototype encourage users to take the stairs instead of lifts and use reusable cups when getting coffee instead of paper cups. In addition it shows the impact the user is having on the building’s Phosphorous extraction plant which collects valuable Phosphorous from people’s pee.

### Building Hive
When thinking about how to encourage sustainability within UTS Building 11, my first thought was to use a Twitter bot that you could ask sustainability related questions of. Inspired by [Games for Cities](http://gamesforcities.com/) I then thought about games and how I could turn sustainability within the building into a game. I found Twitter based text adventure games and decided I could do something similar however, I found the idea a little limiting especially when thinking about how I could incorporate an aspect of competition between users.

As a [Swarm](https://www.swarmapp.com/) user, I saw similarities between it and what I was wanting to build and so framed my idea in the context of making a Swarm adaptation that encourages sustainability within UTS. The gamification aspect of accruing points and competing on a leaderboard were borrowed but instead of checking in at cafes or shops, users would be able to check in sustainable activities.

As well as seeing the model that Swarm uses, I was encouraged to make an app instead of a bot after reading, [No to No UI](http://www.elasticspace.com/2013/03/no-to-no-ui) which makes a compelling case for visual and tangible interfaces over invisible ones. By making an app and having a visible UI instead of the invisible UI a Twitter bot would’ve provided, the user can track their activity and see the leaderboard or building stats without actively asking, all they need to do is open the app. This also makes the interactions to add items, such as a reusable cup use, much smoother as the user doesn’t need to conversationally tell Hive what they have done, they can just press two buttons and immediately see their place on the leaderboard increase. As a bonus apps can access a users activity data from their phone which enables the counting of flights of stairs climbed.

Note: While the metrics used in the app could probably be improved if this were built, they were picked as they provide an idea about Hive could be used.

## Install
1. ```$ npm install```
1. ```$ npm run-script build```
1. Host files outputted to ```dist```
