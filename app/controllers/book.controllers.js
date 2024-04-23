const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.utils");
const BookService = require("../services/book.services"); // Import BookService từ tệp BookService.js

exports.create = async (req, res, next) => {
    if(!req.body?.MaSach) {
        console.log("Error: Ma sach khong duoc de trong");
        return next(new ApiError(400, "Ma sach khong duoc de trong"));
    }

    try {
        const bookService = new BookService(MongoDB.client);
        const document = await bookService.create(req.body);
        return res.send(document);
        console.log("Document created:", document); // Ghi log khi tạo document thành công
        
    } catch (error) {
        console.error("Error occurred while creating the contact:", error); // Ghi log khi có lỗi xảy ra
        return next(new ApiError(500, "AN error occurred while creating the contact"));
    }
};

exports.findAll = (req, res) => {
    res.send({message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({message: "findAllFavorite handler" });
};
