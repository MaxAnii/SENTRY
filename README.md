# SENTRY
![Screenshot 2024-04-28 125055](https://github.com/MaxAnii/SENTRY/assets/96937469/463003df-6813-41ff-b2a5-55c121b69422)


Sentry is a powerful tool designed for the semantic analysis of content within WhatsApp groups. It provides a comprehensive dashboard for users to manage their WhatsApp groups, set configurations, and monitor activity. With Sentry, users can ensure a conducive environment within their WhatsApp communities by enforcing specific rules and thresholds.

## Features

- **User Authentication**: Secure user authentication system with email verification.
- **WhatsApp Group Management**: Easily add and manage WhatsApp groups from the dashboard.
- **Configuration Customization**: Set tolerance levels for messages and define warning thresholds for users.
- **WhatsApp Number Verification**: Verify WhatsApp numbers before adding groups, ensuring admin access for added numbers.
- **Automated Warning System**: Automatically warn users based on specified thresholds, promoting responsible behavior.
- **Actionable Insights**: Gain insights into group activity and trends through comprehensive analytics.
- **Responsive Design**: Mobile-friendly interface for easy access and management on the go.

## How It Works

Sentry operates through a seamless process designed to ensure efficient management and monitoring of WhatsApp groups. Here's how it works:

1. **User Authentication and Registration**:
   - Users sign up using their email addresses.
   - An email verification process is initiated to confirm user identity and ensure a secure registration process.
   - Once verified, users gain access to the Sentry dashboard.

2. **WhatsApp Group Management**:
   - Users can add their WhatsApp groups to the Sentry dashboard.
   - Before a group is added, the user must verify their WhatsApp number.
   - The system verifies the user's admin status within the added group, ensuring proper access for configuration and monitoring.

3. **Configuration Customization**:
   - Users can customize configurations for each WhatsApp group added.
   - This includes setting tolerance levels for messages and defining the number of warnings per user before actions are taken.

4. **Automated Monitoring and Warning System**:
   - Sentry continuously monitors group activity based on configured thresholds.
   - When a threshold is reached (e.g., excessive violation of message tolerance levels), Sentry automatically warns the respective users.
   - Warning notifications are sent to users, prompting them to adhere to group guidelines and norms.

5. **Actionable Insights and Analytics**:
   - Sentry provides comprehensive analytics and insights into group activity.
   - Users can track trends, identify potential issues, and make informed decisions to maintain a healthy group environment.

6. **Responsive Design and Accessibility**:
   - The Sentry dashboard is designed to be mobile-friendly, ensuring users can manage and monitor their groups from anywhere, at any time.

By following this structured process, Sentry empowers users to effectively manage and maintain positive environments within their WhatsApp groups, promoting meaningful interactions and community engagement.

## Getting Started

To get started with Sentry, follow these steps:

1. **Clone the Repository**: Clone the Sentry repository to your local machine.

    ```bash
    git clone https://github.com/your-username/sentry.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.

    ```bash
    cd sentry
    npm install
    ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and configure environment variables such as database connection details and API keys.

    ```plaintext
   DIRECT_URL
   AUTH_SECRET
   NODEMAILER_AUTH_USER
   NODEMAILER_AUTH_PASS
   TRANSPORTER_FROM 
    ```

4. **Run the Application**: Start the application locally.

    ```bash
    npm start
    ```

5. **Access the Dashboard**: Open your web browser and navigate to `http://localhost:3000` to access the Sentry dashboard.

## Contributing

We welcome contributions from the community to enhance Sentry further. If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of [Express.js](https://expressjs.com/) for providing a robust framework for building web applications.
- Special thanks to the community for their valuable feedback and contributions.
