const { ObjectId } = require("mongodb");
class BookService {
    constructor(client) {
        this.Book = client.db().collection("Sach");
    }
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API

extractBookData(payload) {
    const book = {
      MaSach: payload.MaSach,
      TenSach: payload.TenSach,
      DonGia: payload.DonGia,
      SoQuyen: payload.SoQuyen,
      NamXuatBan: payload.NamXuatBan,
      MaNXB: payload.MaNXB,
      TacGia: payload.TacGia, // Thêm trường TacGia cho nguồn gốc hoặc tác giả của sách
    };
  
    return book;
  }
  
  async create(payload) {
    const book = this.extractBookData(payload);
    const result = await this.Book.findOneAndUpdate(
      { MaSach: book.MaSach }, // Tìm sách dựa trên mã sách
      { $set: book }, // Cập nhật thông tin sách
      { returnDocument: "after", upsert: true } // Trả về sách sau khi cập nhật hoặc tạo mới nếu không tồn tại
    );
    return result.value;
  }
  
}
module.exports = BookService;