import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1=new BaseLogger()
let logger1=new ElasticLogger()//plugandplay ?
let userService = new UserService(logger1)

let user1=new User(1,"Engin","Demiroğ","Ankara")
let user2=new User (2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
userService.getById(2)




let customer = {id:1, firstName:"Engin"}

//prototyping (sonradan ekleyebilme)
customer.lastName ="Demiroğ"

console.log(customer.lastName)

//koddüzenleme ctrl+k ctrl+d
