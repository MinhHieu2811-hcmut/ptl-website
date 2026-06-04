const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const need = document.getElementById("need").value.trim();

    if (!fullname || !phone || !email || !need) {
      formNote.textContent = "Vui lòng nhập đầy đủ Họ tên, Số điện thoại, Email và Nhu cầu khách hàng.";
      return;
    }

    formNote.textContent = "Thông tin đã được ghi nhận. Bước tiếp theo mình có thể giúp bạn kết nối form này để gửi về email công ty.";
    contactForm.reset();
  });
}

const productSearchInput = document.getElementById("productSearchInput");

if (productSearchInput) {
  productSearchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    const productCards = document.querySelectorAll(".product-item-card");

    productCards.forEach(function (card) {
      const productText = card.innerText.toLowerCase();

      if (productText.includes(keyword)) {
        card.classList.remove("product-hidden");
      } else {
        card.classList.add("product-hidden");
      }
    });
  });
}