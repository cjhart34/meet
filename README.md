# Meet App

<img src=./img/meet-app.png>

## Description

This app provides a list of upcoming events for any given city. The app works offline using cached data from the last time it was used online. The user can search for events in a specific city or browse all events, customize how many events are shown on screen, click an event for more details, and see how many events are upcoming in those cities.

## Dependencies

* HTML
* CSS
* JavaScript
* React
* Google Calendar API
* Recharts
* AWS Lambda
* Jest/Enzyme
* Jest-Cucumber
* Puppeteer

## Features

### Filter events by city

#### As a user, I would like to be able to filter events by city so that I can see the list of events that take plae in that city.

#### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.

**Given** user hasn't searched for any city <br>
**When** user opens the app <br>
**Then** the user should see a list of all upcoming events <br>

#### Scenario 2: User should see a list of suggestions when they search for a city.

**Given** the main page is open <br>
**When** user starts typing in the city textbox <br>
**Then** user should see a list of cities (suggestions) that match what they've typed <br>

#### Scenario 3: User can select a city from the suggested list.

**Given** the user was typing "Berlin" in the city textbox <br>
**When** the user selects a city (e.g., "Berlin, Germany") from the list <br>
**Then** Their city should be changed to that city and the user should receive a list of upcoming events in that city <br>

### Show/Hide an event's details

#### As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

#### Scenario 1: An event element is collapsed by default

**Given** the user is on the homepage <br>
**When** no events have been selected <br>
**Then** the event details will not be shown and will instead be "collapsed" <br>

#### Scenario 2: User can expand an event to see its details

**Given** an event's details are not shown <br>
**When** a user clicks on a given event <br>
**Then** the event's details will be revealed <br>

#### Scenario 3: User can collapse an event to hide its details

**Given** the user has expanded the details on an event <br>
**When** the user clicks again on the expanded details <br>
**Then** the details of this event shall be hidden <br>

### Specify number of events

#### As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

#### Scenario 1: When user hasn't specified a number, 32 is the default number

**Given** the number of events hasn't been specified by the user <br>
**When** the user opens the app <br>
**Then** the user will see 32 events by default <br>

#### Scenario 2: User can change the number of events they want to see

**Given** the list of events is being shown <br>
**When** the user changes the number of events to display <br>
**Then** the app will display the number of events specified by the user <br>

### Use the app when offline

#### As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

#### Scenario 1: Show cached data when there's no internet connection

**Given** the user is not connected to the internet <br>
**When** previous data has been cached <br>
**Then** cached data will be shown to the user <br>

#### Scenario 2: Show error when user changes the settings (city, time range)

**Given** the user is not connected to the internet <br>
**When** the user updates settings like location or the time <br>
**Then** an error message will display <br>

### Data Visualization

#### As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

#### Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user wants to know how many upcoming events are happening in each city <br>
**When** the user clicks on a link for displaying this data <br>
**Then** the chart will be shown so the user can see what events are happening in each city <br>

## Live Link:

https://cjhart34.github.io/meet/

## Repository Link:

https://github.com/cjhart34/meet

