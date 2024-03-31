<?php
include_once "part/header.php";
?>

<body>
  <div class="wrapper">
    <section class="form signup">
      <header>Thông tin khách hàng</header>
      <form action="#">
        <div class="error-text"></div>

        <!-- name row -->
        <div class="name-details">
          <div class="field input">
            <label for="">Họ</label>
            <input type="text" name="lname" placeholder="Họ" required>
          </div>
          <div class="field input">
            <label for="">Tên</label>
            <input type="text" name="fname" placeholder="Tên" required>
          </div>
        </div>

        <div class="field input">
          <label for="">Email</label>
          <input type="text" name="email" placeholder="Nhập Email" required>
        </div>

        <div class="field input">
          <label for="">Mật khẩu</label>
          <input type="password" name="password" placeholder="Nhập mật khẩu" required>
          <i class="fas fa-eye"></i>
        </div>

        <div class="field file">
          <label for="image" class="drop-container">Chọn ảnh đại diện
            <span class="drop-title">Drop files here</span>
            or
            <input type="file" id="image" name="image" class="file-input" accept="image/x-png,image/jpeg,image/jpg" required>
            <span class="file-custom"></span>
          </label>
        </div>

        <div class="field button">
          <input type="submit" value="Bắt đầu chat">
        </div>

      </form>
      <div class="link">Bạn có tài khoản? <a href="login.php">Đăng nhập ngay</a></div>
    </section>
  </div>

  <script src="assets/password-event.js"></script>
  <script src="assets/signup.js"></script>
</body>

</html>


<style>
  .drop-container {
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #555;
    color: #444;
    cursor: pointer;
    /* transition: background .2s ease-in-out, border .2s ease-in-out; */
  }

  .drop-container:hover {
    background: #eee;
    border-color: #111;
  }

  .drop-container:hover .drop-title {
    color: #222;
  }

  .drop-title {
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in-out;
  }
</style>