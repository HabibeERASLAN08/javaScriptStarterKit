export class BaseLogger{
    log(data){
       console.log("Default logger:" +data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to ElasticSearch" +data)
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to MongoDb" +data)
    }
}

