# SENTRY
![Screenshot 2024-04-28 125055](https://github.com/MaxAnii/SENTRY/assets/96937469/463003df-6813-41ff-b2a5-55c121b69422)


Sentry is a nodeJS service that moderates content semantically on the social media platform, WhatsApp.
## Features

- **User Authentication**: Secure user authentication system with email verification.
- **WhatsApp Group Management**: Easily add and manage WhatsApp groups from the dashboard.
- **Configuration Customization**: Set tolerance levels for messages and define warning thresholds for users.
- **WhatsApp Number Verification**: Verify WhatsApp numbers before adding groups, ensuring admin access for added numbers.
- **Automated Warning System**: Automatically warn users based on specified thresholds, promoting responsible behavior.


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



## Getting Started

To get started with Sentry, follow these steps:

1. **Clone the Repository**: Clone the Sentry repository to your local machine.

    ```bash
    git clone https://github.com/MaxAnii/sentry.git
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
4. **Set Up Backend**: Set up the backend to moderate the content.
    [click here](https://github.com/MaxAnii/SENTRY-whatsApp-server) to get the backend repo.
   
6. **Run the Application**: Start the application locally.

    ```bash
    npm start
    ```

## Support

By [Ansar](https://github.com/MaxAnii) with ❤️.

Feel free to open an issue or use this as your project!
