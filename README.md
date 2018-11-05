# Northcoders News React App

Northcoders News is a site I created to demonstrate the skills I have acquired whilst on the Full Stack Developer Pathway at Northcoders.

To create this site, a React app has been created with a range of components and then styled with CSS. The finished site has been hosted on Netlify. This application interacts with a backend RESTful API. The backend GitHub repo can be located here: https://github.com/MrPGLawrence/Northcoders-News-backend

## Setup

To begin, FORK and CLONE the repository from github and run this command in your terminal:

```
git clone https://github.com/MrPGLawrence/Northcoders-News-frontend
```

## Install Node.js

To check if you have Node.js installed, run this command in your terminal:

```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```
npm -v
```

If you need to install either Node.js or npm please follow the links provided which will explain how to do so.

- [node.js](https://nodejs.org/en/download/package-manager/)
- [npm](https://docs.npmjs.com/cli/install)

## npm Packages

A number of npm packages have been installed to help build this React app. These include:

- [React](https://reactjs.org)
- [Reach Router](https://reach.tech/router)
- [axios](https://www.npmjs.com/package/axios)
- [dateformat](https://www.npmjs.com/package/dateformat)

## Home

The home page displays all the articles that have been posted on the app, as well as a Northcoders News header. Clicking on the title of the article will take you to the individual articles page, whilst clicking on the username will take you to the users profile. The individual articles page displays the articles body. It also allows the user to vote up or down on the article, comment on it and to vote on the comments.

## Articles

Like the home page, the articles page displays all the articles. It also gives you the option to post your own article. To post an article you must be logged in to do so. For demonstration purposes, you will be able to sign into the application as user Tom Tickle. Each article is displayed with a title, the user who posted it, how many votes and comments it has and the date and time it was posted.

## Topics

The topics page displays the topics associated with Northcoders News. Clicking on the topics will display the articles sorted by the topic they are connected to.

## Users

The users page displays all the users using Northcoders News. Clicking on the individual user will take you to their profile.

## Errors

Bad routes result in an errors page.

API errors result in the API error status code and message being displayed to the user.

## Hosting

This site is being hosted by Netlify.

[Northcoders News](https://patrick-northcoders-news.netlify.com/) - Follow the link to access the site.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

[Patrick Lawrence](https://github.com/MrPGLawrence)

## Acknowledgments

[Northcoders](https://github.com/northcoders)
