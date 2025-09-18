# Customer Relationship Management (CRM)

A React Native application designed to streamline customer management processes, including adding, viewing, and editing customer information.

## Features

* **Customer List**: View a list of all customers with their details.
* **Add Customer**: Add new customers to the database.
* **Edit Customer**: Modify existing customer information.

## Technologies Used

* **React Native**: Framework for building native applications using React.
* **React Navigation**: Navigation library for seamless screen transitions.
* **React Query**: Data fetching and state management.
* **Expo**: Platform for building and deploying React Native applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jamal2134/Customer-Relationship-Management.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Customer-Relationship-Management
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   This will open the Expo developer tools in your browser.

## Usage

* **Add Customer**: Navigate to the "Add Customer" screen to input new customer details.
* **View Customers**: The main screen displays a list of all customers.
* **Edit Customer**: Select a customer from the list to edit their information.

## Folder Structure

```
Customer-Relationship-Management/
├── assets/               # Images and other static assets
├── src/                  # Source code
│   ├── components/       # Reusable components (e.g., Row, List)
│   ├── hooks/            # Custom hooks (e.g., useListCustomers)
│   ├── navigation/       # Navigation configuration
│   ├── screens/          # Screen components
│   └── styles/           # Styling files
├── App.js                # Entry point of the application
├── app.json              # Expo configuration
├── eas.json              # Expo Application Services configuration
├── index.js              # App registry
└── package.json          # Project metadata and dependencies
```


