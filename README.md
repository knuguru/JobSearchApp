## Expo Router Example

Use [`expo-router`](https://docs.expo.dev/router/introduction/) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://docs.expo.dev/router/introduction/)

## To run the app use 'npm start'


"# JobSearchApp"

This app uses Jsearch API (https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) to perform job search and display the most popular and nearby jobs. 
The results are diplayed in a FlatList to improve the perfomance of rendering. 

The app also provides a search field to allow the user to enter the type of job they are looking for.
Jobs can be filtered by 'Full-time', 'Part-time' and 'Contractor'. 

Each job displayed as a card in the FlatList can be clicked to get the job details. Job details screen has three tabs. 'About', 'Qualifications' and 'Responsibilities'
Each tab can be clicked to get the corresponsing details. The screen also has an 'Apply for Job' button at the button. 
Clicking on that button opens a new browser tab where the user is provided the ability to either apply for that job or save for later. User can also sign up for new job alerts.

Clicking of the 'Full-time', 'Part-time' and 'Contractor' buttons navigates the user to a new screen where job search results are filtered by the selected criteria and are presented to the user in a FlatList that is vertically scrollable. 

Paging controls are available at the botton of this screen allowing users to page through the results.

'React developer' jobs are displayed by default. User can change this by typing in the search input field and clicking the search button. Results are again diplayed in a new screen as a vertically aligned scrollable FlatList.

This project shows us how to create and use custom hooks.

<img width="170" alt="home screen" src="https://github.com/knuguru/JobSearchApp/assets/161977397/41092bae-f9d7-48e3-a6c2-37938c7f12da">
<img width="170" alt="JobDescriptionScreen" src="https://github.com/knuguru/JobSearchApp/assets/161977397/265d517a-3d0d-49ce-ba1e-a58f59cc9d84">
<img width="170" alt="JobDescription-Qualifications" src="https://github.com/knuguru/JobSearchApp/assets/161977397/e3ff11c9-f4bd-4b36-919a-bbfc5d6034fb">
<img width="167" alt="JobDescription-Responsibilities" src="https://github.com/knuguru/JobSearchApp/assets/161977397/fb6de6c2-245b-4cb9-af17-fddac8288778">
<img width="871" alt="ApplyForJob" src="https://github.com/knuguru/JobSearchApp/assets/161977397/3c8a3d4b-ee0d-43f4-9741-9907f3618fa8">
<img width="169" alt="Contractor" src="https://github.com/knuguru/JobSearchApp/assets/161977397/e30778b1-1b1c-4da9-9592-21aa5d545fb3">
<img width="172" alt="search" src="https://github.com/knuguru/JobSearchApp/assets/161977397/c9c7cc60-acaa-489f-b717-b1de0930053b">
<img width="170" alt="searchresults" src="https://github.com/knuguru/JobSearchApp/assets/161977397/097fa173-0d0e-4dd6-bd71-8a2e54098a8e">
