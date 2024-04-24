/**
 * -------------------------
 * MongoDB connection
 * -------------------------- 
 * 1. Creat a account
 * 2. Creat an user with password
 * 3. Whitelist IP address
 * 4. database> connect> driver> node> view full code
 * 5. change the password in the URI
 * ---------------------------------------------------------
 * 
 * 1. CREAT --- POST
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access the data from the body : const user = req.body
 * 6. const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 * 
 * 
 * CLIENT
 * --------------
 * 1. Creat fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add header : {'content-type' : 'application/json'}
 * 5. add body: JSON.Stringfy(user)
 * 
 * 
 * 
 * --------------------------
 * READ MANY
 * --------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * --------------------------
 * DELETE
 * ---------------------------
 * 1. create app.delete('/users/:id', async(req, res) => {})
 * 2. Specify the unique objectId to remove the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * CLIENT
 * 1. create dynamic URL with id
 * 2.  make sure mention the  DELETE method
 * 
 * 
 */