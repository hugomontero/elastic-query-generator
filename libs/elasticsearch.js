const createIndex = elasticClient=> async (index, options) =>{
    return await elasticClient.indices.create({
        index,
        body:{...options}
    })
}

const putData  = elasticClient=> async (index, data)=>{

}

const putBulkData  = elasticClient=> async(index, dataArray)=>{

}

const deleteData  = elasticClient=> async(index, id)=>{

}

const search  = elasticClient=> async(index, options)=>{

}

module.exports = elasticClient => {
    return {
        createIndex: createIndex(elasticClient),
        putData:putData(elasticClient),
        putBulkData: putBulkData(elasticClient),
        deleteData: deleteData(elasticClient),
        search: search(elasticClient)
    }

}
