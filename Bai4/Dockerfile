# Sử dụng node:16 làm base image
FROM node:16

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies, bao gồm nodemon nếu cần
RUN npm install -g nodemon && npm install

# Sao chép tất cả các tệp mã nguồn vào container
COPY . .

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000

# Chạy ứng dụng Node.js khi container khởi động
CMD ["nodemon", "server.js"]
