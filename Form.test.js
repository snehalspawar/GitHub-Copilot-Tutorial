const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('Form.html', 'utf8');

// Verify form structure
assert(html.includes('<form action="#" method="post">'), 'Form tag with action/method missing');
assert(html.includes('placeholder="Enter User Name"'), 'User name input placeholder missing');
assert(html.includes('placeholder="Enter Password"'), 'Password input placeholder missing');
assert(html.includes('<input type="submit" value="Submit">'), 'Submit input missing or malformed');

// Verify table structure
assert(html.includes('<h2>User List</h2>'), 'User list heading missing');
assert(html.includes('<th>Name</th>'), 'Name column header missing');
assert(html.includes('<th>Email</th>'), 'Email column header missing');
assert(html.includes('<th>Status</th>'), 'Status column header missing');
assert(html.includes('<td>Alice Johnson</td>'), 'Alice Johnson row missing');
assert(html.includes('<td>bob@example.com</td>'), 'Bob Smith email row missing');
assert(html.includes('<td>Inactive</td>'), 'Charlie Lee status row missing');

console.log('Form.html unit test passed.');
