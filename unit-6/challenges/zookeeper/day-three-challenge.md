## BRONZE CHALLENGE:

Implement a validate-session.js. Use the validateSession to protect every
route in the animal.controller.js. They should block any request that does
not have an authorization header that bears a token.
This token should be one returned from the login or sign up methods.

## SILVER CHALLENGE:

Add a new column named 'userId' to the animal model.
This column should take Object ID. Take advantage of this new field fix the view-all to display the user information only not the password.
Adjust the post request to now add the user's id to the animal document.

## GOLD CHALLENGE:
Taking advantage of the new userId column that links the row of the
animal collection to the user that posted it from the Silver level challenge,
modify the delete and update endpoints. To only allow users to delete only their own
animals  or modify their own animals from the database.