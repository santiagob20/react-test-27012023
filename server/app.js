/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:3030',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Content-Type': 'application/json'
      };
    if (req.url.includes('/get_data') && req.method == 'GET') {
        res.writeHead(200, headers);
        // If the url has query params
        if (req.url.includes('?')) {
            let params = req.url.split('?')[1].split('&&').map(function(el) {
                return {
                    id: el.split("=")[0] || '',
                    value: el.split("=")[1] || ''
                }
            });
            let findQueryValue = params.find(el => el.id == 'search').value;
            let response = data.filter(el => el.name.toLowerCase().includes(findQueryValue.toLowerCase()));
            res.write(JSON.stringify(response));
        } else {
            res.write(JSON.stringify(data));
        }
    } else defaultAnswer(res);
    res.end(); //end the response
}).listen( port );


console.log(`[Server running on ${hostname}:${port}]`);

function defaultAnswer (res) {
    res.write("URL not defined");
}