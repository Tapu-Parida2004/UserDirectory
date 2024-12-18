# User Directory App

This is a React Native app that fetches user data from the JSONPlaceholder API and displays it in a clean, user-friendly format.The app includes a User list Screen for browsing users and a User Details Screen for viewing more detailed.

# How to Run the App

Follow these steps to set up and run the app:

# Prerequisites

Ensure you have the following installed: 01. Node.js 02. React Native CLI or Expo CLI 03. Android Studio or Xcode for device simulation

# Steps to Run The App

# 01. Clone the Repository

    Open terminal and run:
    git clone <repository-link>
    cd UserDirectory

# 02. Install Dependencies

    npm install or yarn install

# 03. Start the Metro Bundler

    Before starting the Metro, ensure you have the Expo Go app installed on your mobile device. You can download it from the following links:

    01. Google Play Store (for Android)
    02. Apple App Store (for iOS)

    npx expo start(install expo app)

# 04. Run the App

    For Android:
    npx expo run-android
    For iOS:
    npx expo run-ios

# Features Implemented

# 1. User List Screen

    Fetches a list of users from the JSONPlaceholder API.
    Displays each user’s name and email.
    Implements infinite scrolling to load more users as the user scrolls to the bottom of the list.
    Tapping on a user navigates to the User Details Screen.

# 2. User Details Screen

    Shows the followings details about the tapped user:
       A. Name,
       B. Email,
       C. Address(Street,city,Zip)
       D. and company name
    Allows the users to navigate back to the User List Screen

# 3. API Integration

    Fetches data from the JSONPlaceholder API.
    axios for making API requests.
    Displays a loading spinner while data is being fetched.
    Implements error handling to display a message if the API fails.

# 4. Navigation

    Uses React Navigation for smooth navigation between screens.
    Implements Stack Navigation for managing screen.

# 5. State Management

    Utilizes React hooks (useState, useEffect) to manage application state, data fetching, and loading states.

# Challenges Faced

# 1. Infinite Scrolling

# 2. API Error Handling

    Ensuring proper error messages were displayed when the network request failed or returned no data.

# 3.Navigation Setup

    Configuring React Navigation for seamless  between screens while maintaining state.

# 4. Loading State

    Managing and displaying a loading indicator for API calls to ensure a good user experience.

# 5. UI/UX Design

    Keeping the design clean and responsive while handling various screen sizes.

# Tools and Technologies

1.  React Native: Core framework for the app.
2.  React Navigation: Navigate between Screens
3.  Axios: API
4.  FlatList: Rendering the user list
5.  ActivityIndicator: A loading Spinner while fetching users.


# Submission Date: [18-12-2024]
# Submitted To: Scizers IOT Pvt. Ltd.