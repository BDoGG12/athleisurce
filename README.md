# Athleisurce Web Application

Welcome to our e-commerce web application! This project aims to provide users with a seamless shopping experience, powered by modern technologies and a user-friendly interface.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in the `frontend` directory for the Next.js frontend and `dotnet restore` in the `backend` directory for the C# backend.
3. Configure your MongoDB database and update the connection string in the backend.
4. Set up your Contentful space and configure the integration in the backend.
5. Run the frontend and backend servers using `npm run dev` in the `frontend` directory and `dotnet run` in the `backend` directory.

## User Requirements

- Users should be able to browse products by category.
- Users should be able to add products to their cart and checkout securely.
- Admins should be able to manage products, categories, and orders through an intuitive interface.

## Architecture Overview

- **Frontend**: Next.js is used for server-side rendering and client-side routing. We leverage React components and stylesheets for building the user interface.
- **Backend**: C# is utilized for the backend logic, providing RESTful APIs for communication with the frontend. We use ASP.NET Core for building robust and scalable backend services.
- **Database**: MongoDB is chosen as the database solution for its flexibility and scalability. We've designed a schema to efficiently store product, category, and order data.

## Contentful Integration

We've integrated Contentful as a headless CMS to manage content such as product descriptions and images. Contentful provides a user-friendly interface for editors to update content dynamically without needing to touch the codebase.

## Usage

Once the application is set up, you can access it through the provided URL. Users can browse products, add them to their cart, and complete the checkout process. Admins can log in to the admin panel to manage products, categories, and orders.

## Testing

We've included unit tests for both the frontend and backend to ensure the reliability and stability of the application. You can run tests using the provided testing frameworks and scripts.

## Deployment

To deploy the application to a production environment, follow the deployment instructions provided in the respective directories. Ensure that all configurations are set up correctly for a smooth deployment process.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow our guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- Frontend developed by Benjamin Do
- Backend developed by Benjamin Do
- Contentful integration by Benjamin Do

## Contact Information

If you have any questions or feedback, feel free to reach out to us at bdo.appworkshop@gmail.com.
