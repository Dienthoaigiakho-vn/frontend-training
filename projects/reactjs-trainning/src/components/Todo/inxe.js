const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];// Tìm vị trí của đối tượng cần cập nhật trong mảng
const index = users.findIndex(user => user.id === 2);

// Truy cập đối tượng cần cập nhật trong mảng
const userToUpdate = users[index];

// Cập nhật thuộc tính của đối tượng cần cập nhật
userToUpdate.age = 32;

console.log(users)