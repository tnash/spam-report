# Spam Reporting App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before starting any of the Javascript services you must start
the Mongodb server. In the root project directory run:

### docker-compose up -d

If this is the first time you are starting MongoDb, you will need to load
the data file using the Node server. Instructions below:

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the Node service only.\
Open [http://localhost:5000/api/reports](http://localhost:5000/api/reports) to view the JSON list of reports in the browser.

### `npm run client`

Launches the React client.

### `npm run dev`

Starts both the Node server and the React client using the concurrently tool.

## Initial launch

After the Node server has launched, navigate to the following URL to load
the data into MongoDb from the JSON file:\

[http://localhost:5000/api/load](http://localhost:5000/api/load)
