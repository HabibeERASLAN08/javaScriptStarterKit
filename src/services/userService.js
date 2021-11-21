<<<<<<< HEAD
export default class UserService{ //extends Services//sen bir servis classan {
    constructor(loggerService){
        this.users=[]
        this.loggerService=loggerService
    }
    add(user){
        this.users.push(user)
        this.loggerService.log(user)
       
=======
export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService =loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    }

    list(){
        return this.users
    }
<<<<<<< HEAD
    getById(id){
        return this.users.find(u=>u.id===id)
    }
} 
=======

    getById(id){
        return this.users.find(u=>u.id ===id)
    }

}
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
