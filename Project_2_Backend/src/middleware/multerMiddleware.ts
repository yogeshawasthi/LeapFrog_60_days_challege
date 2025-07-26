import multer from 'multer'
import { Request } from 'express'

const storage = multer.diskStorage({
    destination : function(req:Request,file:Express.Multer.File,cb:any){
        const allowedFileTypes = ['image/jpg','image/png','image/jpeg']
        if(!allowedFileTypes.includes(file.mimetype)){
            cb(new Error("This file is not accepted"))
            return
        }
        cb(null,'./src/uploads')
    }
})