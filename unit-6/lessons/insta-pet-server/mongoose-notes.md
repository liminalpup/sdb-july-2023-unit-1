## findOne()
`findOne()` is a function that finds one document based on a condition. If multiple documents match the condition then it returns the first document satisfying the  condition.

Good use cases: User Collection finding an email or username.

## find()
`find()` is a function that returns all documents according to conditions you supply.
If you leave the parameter blank, it will return all documents that are in that collection.

## deleteOne()
`deleteOne()` is a function that will delete the first document that satisfies the condition

Ex. `Pet.deleteOne({_id:req.params.id})`

## findOneAndUpdate

`findOneByIdAndUpdate()` is a function that will search the collection and match the id with the document you would like to update. You will supply it with an Object that you would like to alter and return options.