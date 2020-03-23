
const elasticSearch = require("elasticsearch")
const elasticFactory = require("../../libs/elasticsearch")
const client = new elasticSearch.Client({
    host:"localhost:9200",
    log: "trace",
    apiVersion: "7.2"
})


const elasticFunctions = elasticFactory(client)

elasticFunctions.createIndex("users", {
    mappings:{
        properties:{
            username:{
                type:"text"
            }
        }
    }
})
