# CitizenEcho Backend

CitizenEcho is a whistleblower reporting system that allows individuals to report societal malpractices and injustices anonymously or as registered users. The backend is built using Node.js and Express, with MySQL as the database.

## Features
- User authentication (registration, login, JWT-based authentication)
- Anonymous and registered reporting
- Case management
- Inquiry system
- Role-based access control
- API endpoints for frontend integration

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (managed using SQLAlchemy)
- **Authentication:** JWT, bcrypt
- **Deployment:** Nginx, PM2
- **Logging & Monitoring:** Datadog, PM2 logs

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MySQL
- PM2 (for process management)
- Nginx (for reverse proxy setup)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/CitizenEchoBE.git
   cd CitizenEchoBE
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add:
   ```sh
   PORT=3000
   DB_HOST=your-mysql-host
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=citizen_echo
   JWT_SECRET=your-secret-key
   ```

4. Set up the database:
   ```sh
   npx sequelize-cli db:migrate
   ```

5. Start the server:
   ```sh
   npm start
   ```
   Or using PM2:
   ```sh
   pm2 start server.js --name whistleblower-backend
   ```

## API Endpoints
| Method | Endpoint                         | Description                     |
|--------|----------------------------------|---------------------------------|
| POST   | `/api/auth/register`            | Register a new user            |
| POST   | `/api/auth/login`               | Login and get a JWT token      |
| GET    | `/api/users`                    | Get all users (Admin only)     |
| POST   | `/api/reports/anonymous`        | Submit an anonymous report     |
| POST   | `/api/reports/registered`       | Submit a report as a user      |
| GET    | `/api/inquiries`                | Fetch all inquiries            |

## Deployment
1. Ensure the backend is running with PM2:
   ```sh
   pm2 start server.js --name whistleblower-backend
   pm2 save
   ```
2. Configure Nginx as a reverse proxy:
   ```sh
   sudo nano /etc/nginx/sites-available/default
   ```
   Add the following:
   ```nginx
   server {
       listen 80;
       server_name your_domain_or_ip;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Restart Nginx:
   ```sh
   sudo systemctl restart nginx
   ```

## Troubleshooting
- Check logs for errors:
  ```sh
  pm2 logs whistleblower-backend
  ```
- Restart the backend:
  ```sh
  pm2 restart whistleblower-backend
  ```
- Verify Nginx configuration:
  ```sh
  sudo nginx -t
  ```

## License
This project is licensed under the MIT License.

## Author
Developed by Joash Mabinda

