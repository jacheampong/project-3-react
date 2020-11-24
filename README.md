
# Project 3. <span style="color:red">🎤 Musix 🎶 Match 🎧 <span style="color:blue">The Music Search Application

## 1. Technologies used

* HTML, CSS, JavaScript, Google Chrome
* Materialize framework for styling (based on Google Material Design) with [react-materialize](https://github.com/react-materialize/react-materialize) and [materializecss](https://materializecss.com/)
* AJAX and AXIOS for API Access
* Postman Application for API Testing (accessing data available on musixmatch.com) 
* Heroku cloud application platform for deployment
* React JavaScript library was used for the front end development
* Deployed at https://**<== Project ==>**.herokuapp.com/

## 2. Development Team

 

* Jonathan Acheampong (Lead)
* David Lane
* Mohan Palat

## 3. Technical Requirements

### 3.1 Problem to be resolved: 

Many music lovers were looking for an application which allows them wild card search allowing them to look up details about their favorite artists, tracks, albums and lyrics. 

### 3.2 Solution and who would use it

It will be used by the many music lovers craving for information. The data is available on musixmatch.com. We needed to provide the search and results on the web formatted in a way to make it a pleasant experience.

#### 3.2.1 UI Solutioning
Used HTML, CSS, JavaScript, Google Chrome and Materialize Framework with [react-materialize](https://github.com/react-materialize/react-materialize) and [materializecss](https://materializecss.com/) for styling.

#### 3.2.2 API Solutioning
Provider of choice was musixmatch.com. 
The following list of operations were used from list of calls provided. 
<table>
<thead>
<tr>
<th>Component #</th>
<th>Component</th>
<th>API Call</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Artist</td>
<td>GET /artist.search</td>
<td>List details of artist user is searching for as a wild card </td>
</tr>
<tr>
<td>2</td>
<td>Track</td>
<td>GET /track.search</td>
<td>List details of a track user is searching for as a wild card </td>
</tr>
<tr>
<td>3</td>
<td>Album</td>
<td>GET /track.search</td>
<td>List details of an album user is searching for as a wild card </td>
</tr>
<tr>
<td>4</td>
<td>Lyric</td>
<td>GET /lyric.search</td>
<td>List details of lyric user is searching for as a wild card </td>
</tr>
</tbody>
</table>

#### 3.2.3 Solutioning Cloud Deployment to AWS
Heroku Cloud Application Platform for Deployment.

## 4. Learning Experience

* API Library used to access [Musix Match](https://www.musixmatch.com/) to fetch the data required for Musix Match Application. We could not work work with the API the site provided and had to use a wrapper library node-fetch JavaScript Library and it is a challenge getting everything to work.
* Experience with [react-materialize](https://github.com/react-materialize/react-materialize) and [materializecss](https://materializecss.com/). Ability to render beautiful pages developed without the struggle with just base css.
* Git Workflow. Effectively using the branching and merging for collaboration. Multiple branches like artists, tracks, lyrics and albums which confined issues and quirks to each member of the team until ready and then merged.
* React Library and JavaScript XML(JSX) which makes it easy for us to write HTML in React. 

## 5. Approach & Design Components - Wireframe, API

### 5.1 Wireframes

#### 5.1.1 Wireframe - Main Page
![Wireframe - Main](./images/REACT_JS_MUSIXMATCH_MAIN.png) 
#### 5.1.2 Wireframe - Details Page
![Wireframe - Detail](./images/REACT_JS_MUSIXMATCH_DETAIL.png) 
### 5.2 API Details

node-fetch JavaScript Library was used to access the data. Sample calls are as below
```JavaScript
// Artists
  getArtistsChart(query) {
    return this.request(
      '/chart.artists.get',
      query
    )
  }
// Tracks
  getAlbumTracks(query) {
    return this.request(
      '/album.tracks.get',
      query
    )
  }
```

## 6. User Stories and their implementation status

1. As a user, I should be able to search for list of artists by name **Status: Completed**
2. As a user, I should be able to select one of artist from list **Status: Completed**
3. Once an artist is selected, I should be able to see artist details  **Status: Completed**
4. As a user, I should be able to search for list of track by name **Status: Completed**
5. As a user, I should be able to select one track from list **Statu:s Completed**
6. As a user, I should be able to select one of artist from track **Status: Completed**
7. As a user, I should be able to search for lyrics by embedded keyword **Status: Completed**
8. As a user, I should be able to be flagged above the lyrics if it has explicit content **Status: Completed**
9. As a user, I should be able to see the top 10 songs on the chart in the homepage **Status: Complete**
10. As a user, I should be able to search for albums **Status: Future Enhancement**

## 7. Compliance to MVP (Minimum Viable Product) Requirement 🔴 

### 7.1 Base Requirement

* A GitHub repo with your React app **Status: Complete**
* You must use React and leverage the API in the above requirements. **Status: Complete**
* You must communicate with the API and render the UI accordingly with the information received (using AXIOS). **Status: Complete**

### 7.2 Collaboration
* Every team member must have roughly the same number of individual commits in the commit history for your app (dividing responsibilities between different parts of the app is fine, but every team member must have commits in the project). **The team worked very well by dividing and synchronizing the available work as chunks**
* Every team must follow a Git Workflow **leveraging the GIT branches - main, track, artist, album and lyric and finally merging them efficiently** 

### 7.3 Deployment
Your React app must be deployed to Heroku, GitHub Pages, or Surge. Applications that are not deployed will be considered incomplete. **Our application was deployed to production using Heroku**

## 8. Unsolved Issues and Future Enhancements

* We had an issue implementing albums which for some reason was not allowed to be searched directly unlike the other components. We need to search using tracks and we ran out of time to implemented without jeopardizing project completion and deployment. This will be taken up in the future. 
* In the Artist display cards, we were not able to render the picture of the artist using the data receieved back from the current API. In future we are looking forward to use a third party API to do this.


