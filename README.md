# Todoers

This is a website created as a project to practice some web design principles. Also, I've been trying out new frameworks and tools to help me be more productive while maintaining a clean looking design.

## Demo

The page supports both light and dark mode. This website is still under development, so please keep up an eye on the different commits to catch up with the progress.

#### LIGHT

![](https://cdn.discordapp.com/attachments/1150521661825744996/1168988696230506597/Screenshot_2023-10-31_140255.png)

#### DARK

![](https://cdn.discordapp.com/attachments/1150521661825744996/1168988716275081287/Screenshot_2023-10-31_140309.png)

## Updates

The development of this website has been stopped. I'm currently focusing on other projects, however, I'll migrate this whole app to React so that I can continue developing, since making the whole page on JS is not really worth it for several reasons. I'll update this whole repo once I have the new website done.

As of now, I'm not updating the build anymore, so if you want to run any tests please clone the repo and run the instructions on the Deployment section. Also, I'm encapsulating the Firebase variables now so I can work properly on the development of the app. Check the [Testing](#testing) section to learn how to run the project locally on your machine.

- User account creation and login functions are supported as of the current version. Check the [Testing](#testing) section to learn how to properly configure your own Firebase keys to make the project work.

## Testing

The website is still under development, however, if you wish to run a local version of this project you can do it by following a series of steps.

Clone the repo locally by running `clone` on the directory you want:

```bash
git clone https://github.com/kagunecode/todo-page.git
```

Once you've cloned te project make sure you have node.js installed in order to use `npm`. Once you've checked that you can use `npm`, install all the dependencies by running:

```bash
  npm install
```

This will install all the dev and public dependencies needed to make the project work. All modules and loaders have been configured already, however, you will need to add your own Firebase keys inside some sort of enviroment variables. To do this create a file called .env at the root folder of the project and add the values like this:

```
FIREBASE_API_KEY = your_api_key
FIREBASE_AUTH_DOMAIN = your_auth_domain
FIREBASE_PROJECT_ID = your_project_id
FIREBASE_STORAGE_BUCKET = your_storage_bucket
FIREBASE_SENDER_ID = your_sender_id
FIREBASE_APP_ID = your_app_id
```

Notice that not a single one of those variables contain quotes or commas at the end. If you want more info on how to obtain those keys please refer to the [Firebase docs](https://firebase.google.com/docs/guides) and select the platform you want to configure. For this project you should select the web documentation and follow the [Firebase tutorial for web](https://firebase.google.com/docs/web/setup) all the way to step 4 if needed. Once you've setted up all the variables correctly the page should work as intended.

### Running a development copy locally

To run a development version of the project use:

```bash
  npm run dev
```

This will run a local copy of the website. This will allow you to see a live version of the website locally and any changes you make whenever you save the project. However, this won't allow you to update any Tailwind styles, so for that please run the following command as well:

```bash
  npm run watch
```

`watch` will keep track of the changes made to any file that has tailwind classes. In this case, you need to run 2 consoles at the same time since `run dev` and `run watch` will run all the time on the background.

### Webpack Build

Once you want to update the dist version of the project just run:

```bash
  npm run build
```

This should be used only when you have a working version of the project that you consider is prepared for distribution. If you're still working on something please keep everything on the local side of things by using the dev version mentioned on the previous section.

## Tech Stack

**Client:** JS, TailwindCSS

**Server:** JS, Firebase

## Support

For support, email cesar.acb98@gmail.com, I'll be glad to help with anything I can.
