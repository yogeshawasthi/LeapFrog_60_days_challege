const multer = require('multer')

 const storage = multer.diskStorage({
    destination : function(req,file,cb){ //where to store
         cb(null,'./storage')   // cb(error,success) sucess - save to storage folder
    },
    filename : function (req,file,cb){//How to store it
     // what name should be given while storing the data
        cb(null,"Yogesh-"+file.originalname)
    }

})     

module.exports ={
    multer,
    storage
}
