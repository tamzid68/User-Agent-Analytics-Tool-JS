# User-Agent Analytics Tool

A Node.js-based web application that analyzes user-agent data, categorizes it, and displays analytics in a bar chart using Chart.js. The tool also provides functionality to download user-agent data as a CSV file.

## Features

- **User-Agent Analytics**: Categorizes user-agent strings into predefined categories (e.g., Postman, Chrome Browser, etc.).
- **Bar Chart Visualization**: Displays analytics data in a bar chart using Chart.js.
- **CSV Download**: Allows users to download user-agent data as a CSV file.
- **Middleware**: Includes middleware for rate limiting, user-agent validation, and audit logging.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-agent-analytics-tool.git
   cd user-agent-analytics-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

## Usage

- Open your browser and navigate to:
  ```
  http://localhost:3000/analytics
  ```
- Click the "Download CSV" button to download the user-agent data as a CSV file.

## Project Structure

```
User-Agent-Analytics-Tool/
├── controllers/
│   ├── con_user.js          # Handles user-related logic
│   ├── con_analytics.js     # Handles user-agent analytics logic
├── middleware/
│   ├── mid_user.js          # Middleware for user-agent validation
│   ├── mid_auditLogger.js   # Middleware for audit logging
│   ├── mid_rateLimit.js     # Middleware for rate limiting
├── routes/
│   ├── rou_user.js          # Routes for user-related endpoints
│   ├── rou_download.js      # Routes for CSV download and analytics
├── utils/
│   ├── uti_logger.js        # Utility for logging user-agent data
│   ├── uti_download.js      # Utility for generating CSV downloads
├── views/
│   ├── analytics.html       # Frontend for displaying analytics
├── userAgent.json           # Sample user-agent data
├── blockedUser.json         # Sample blocked user-agent data
├── app.js                   # Main application file
├── package.json             # Project metadata and dependencies
```

## API Endpoints

### `/api/user-agent`
- **Method**: `GET`
- **Description**: Returns categorized user-agent analytics data.
- **Response**:
  ```json
  {
    "Postman": 2,
    "Thunder Client": 0,
    "Chrome Browser": 1,
    "Edge Browser": 0,
    "Other": 0,
    "Blocked": 3
  }
  ```

### `/api/download`
- **Method**: `GET`
- **Description**: Downloads user-agent data as a CSV file.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, Chart.js
- **Utilities**: File system (fs) for reading/writing JSON files

## How It Works

1. **User-Agent Validation**:
   - Middleware checks the `user-agent` header of incoming requests.
   - Logs valid and blocked user-agents into separate JSON files.

2. **Analytics**:
   - Reads user-agent data from `userAgent.json` and `blockedUser.json`.
   - Categorizes user-agents into predefined categories.

3. **Visualization**:
   - Displays analytics data in a bar chart using Chart.js.

4. **CSV Download**:
   - Generates a CSV file from user-agent data and allows users to download it.

## Screenshots

### Analytics Page
![image](https://github.com/user-attachments/assets/08927592-a0c0-49d2-8af6-ad7d39efc68e)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
