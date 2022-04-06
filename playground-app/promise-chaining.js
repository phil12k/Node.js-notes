require('../src/db/mongoose')
const todo = require('../src/models/task');

todo.findByIdAndUpdate('624d46e7f54c6d76fecdd206', {
    description: "write crisp and clear callbacks and promises!"
}).then((task) => { 
    console.log(task)
    return todo.countDocuments({completed : "false"})
}).then( (results) => {
    console.log(results)
}).catch( (err) => {
    console.log(err)
}) 
