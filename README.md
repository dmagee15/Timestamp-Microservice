# Timestamp microservice project

### User Stories

#### 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

#### 2. If it does, it returns both the Unix timestamp and the natural language form of that date.

#### 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

Natural language dates sent to the server must be successfully parsed by the javascript new Date() constructor.

Unix dates need to be an integer.

Natural language dates will be returned in ISO 8601 format.

### Example Usage

[base url]/1050109200000
[base url]/2003-4-12

### Example Output

{"unix":1050127200000,"natural":"2003-4-12"}