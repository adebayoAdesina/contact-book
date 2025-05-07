# Contact Book API

This project is a Spring Boot application that provides REST API endpoints for managing a contact book. The application was created using the Roo code AI, and I am just checking the AI out.

## Project Structure

### `contact-book-api` Folder
- **`src/main/java/com/contact/book/`**: Contains the Java source code for the application.
  - `Contact.java`: The entity class for the Contact model.
  - `ContactRepository.java`: The repository interface for the Contact entity.
  - `ContactController.java`: The controller class that handles the REST API endpoints.
  - `ContactBookApiApplication.java`: The main application class.
- **`src/main/resources/`**: Contains configuration files.
  - `application.properties`: Configuration for the database connection and JPA settings.
- **`src/test/java/com/contact/book/`**: Contains test classes for the application.
  - `ContactBookApiApplicationTests.java`: Test class for the main application.

### `contact-book` Folder
- **`src/`**: Contains the frontend code for the contact book application.
  - `App.tsx`: The main application component.
  - `components/`: Contains reusable React components.
    - `ContactForm.tsx`: Form component for adding/editing contacts.
    - `ContactItem.tsx`: Component for displaying individual contacts.
  - `store/`: Contains Redux store and slices.
    - `contactSlice.ts`: Redux slice for managing contact state.

## How to Run the Application

1. **Install Maven**:
   - Ensure Maven is installed on your system. You can download it from [Maven's official website](https://maven.apache.org/download.cgi).

2. **Run the Spring Boot Application**:
   - Navigate to the `contact-book-api` folder.
   - Run the following command to start the application:
     ```sh
     mvn spring-boot:run
     ```

3. **Access the API Endpoints**:
   - The application will be available at `http://localhost:8080`.
   - Use a tool like Postman or curl to test the API endpoints:
     - **POST /contacts**: Add a new contact.
     - **GET /contacts**: Retrieve a list of all contacts.
     - **PUT /contacts/{id}**: Edit an existing contact by ID.
     - **DELETE /contacts/{id}**: Delete a contact by ID.

## Additional Notes
- The database configuration is set to connect to a local MySQL database. Ensure the database is running and accessible.
- The application will create the necessary tables if they do not exist.

This project was created using the Roo code AI, and I am just checking the AI out. Feel free to explore and modify the code as needed.