const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //where to store
        // console.log(file)

       
       
        const allowedFileSize = 1024 * 1024
       
        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

        if (!allowedFileTypes.includes(file.mimetype)) {

            cb(new Error("This File type is not supported "))//cb(error)
            return

        }
        
        if( file.size>allowedFileSize){
            cb(new Error("  File size exceeds 1MB  "))
            return
        }
        cb(null, './storage')   // cb(error,success) sucess - save to storage folder


    },
    filename: function (req, file, cb) {//How to store it
        // what name should be given while storing the data
        cb(null, file.originalname)
    }

})

module.exports = {
    multer,
    storage
}
