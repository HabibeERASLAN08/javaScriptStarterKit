export class BaseLogger{
    log(data){
<<<<<<< HEAD
       console.log("Default logger:" +data)
=======
        console.log("Default logger : " + data)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
<<<<<<< HEAD
        console.log("logged to ElasticSearch" +data)
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to MongoDb" +data)
=======
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    }
}

