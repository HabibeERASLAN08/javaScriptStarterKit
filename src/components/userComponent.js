<<<<<<< HEAD
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1=new BaseLogger()
let logger1=new ElasticLogger()//plugandplay ?
let userService = new UserService(logger1)

let user1=new User(1,"Engin","Demiroğ","Ankara")
let user2=new User (2,"Baran","Gökçekli","Muğla")
=======
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
userService.add(user1)
userService.add(user2)

console.log(userService.list())
<<<<<<< HEAD
userService.getById(2)
=======
console.log(userService.getById(2))
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25




let customer = {id:1, firstName:"Engin"}

<<<<<<< HEAD
//prototyping (sonradan ekleyebilme)
customer.lastName ="Demiroğ"

console.log(customer.lastName)

//koddüzenleme ctrl+k ctrl+d
=======
//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
