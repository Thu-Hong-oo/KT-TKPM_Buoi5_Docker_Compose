# Sử dụng image Node.js chính thức
FROM node:16

# Cài đặt thư viện và cấu hình môi trường làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Copy mã nguồn vào container
COPY . .

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000

# Chạy ứng dụng Node.js
CMD ["node", "server.js"]
