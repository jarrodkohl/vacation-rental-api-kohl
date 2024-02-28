#Jarrod Kohl Vacation Home Rental API Project 

##Overview
This Vacation Home Rental API allows users to reserve vacation homes for specific dates. It supports checking for availability, ensuring reservations do not overlap, and allows booking of homes based on type and availability.

## Features

- Reserve a vacation home of a specified type at desired dates.
- Ensure that reservations do not overlap to maintain booking integrity.
- Allow reservations for multiple, non-overlapping time frames.
- Simple in-memory data storage to simulate database interactions.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic knowledge of TypeScript and Node.js

### Installation

1. Clone the repository:
   git clone <link>

2. Go to project directory:
  cd your-file-name

4. Install Dependencies
   npm install

5. Test APIs
    to test the APIs, simply run:
   npm test

6. Future Plan:
    If I were to continue with this project, I would start by creating a front end UI so that a user could more easily interact with this project.

Video Walkthrough:

https://www.loom.com/share/e8fbf84a30784e8ea791ed1f19dcdc34



    ## API Endpoints

The API provides the following endpoints to manage reservations for vacation homes:

### POST /reservations

- **Description**: Create a reservation for a vacation home.
- **Request Body**:
  - `homeId`: Integer, required (ID of the home to reserve)
  - `startDate`: Date string, required (start date of the reservation in YYYY-MM-DD format)
  - `endDate`: Date string, required (end date of the reservation in YYYY-MM-DD format)
- **Response**: JSON object of the created reservation.
- **Status Codes**:
  - `201 Created`: Successfully created a reservation.
  - `400 Bad Request`: Invalid request data (e.g., overlapping dates, invalid date range).
  - `404 Not Found`: Requested home does not exist.




      
