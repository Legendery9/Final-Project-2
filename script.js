function initializeGallery() {
  const images = document.querySelectorAll("#gallery img");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    // Thêm tabindex
    img.setAttribute("tabindex", "0");

    // Thêm sự kiện khi di chuột vào
    img.addEventListener("mouseover", () => {
      img.style.borderColor = "green";
      console.log("mouseover triggered");
    });

    // Thêm sự kiện khi chuột rời ảnh
    img.addEventListener("mouseleave", () => {
      img.style.borderColor = "transparent";
      console.log("mouseleave triggered");
    });

    // Thêm sự kiện khi focus (dùng bàn phím Tab)
    img.addEventListener("focus", () => {
      img.style.borderColor = "blue";
      console.log("focus triggered");
    });

    // Thêm sự kiện khi mất focus
    img.addEventListener("blur", () => {
      img.style.borderColor = "transparent";
      console.log("blur triggered");
    });
  }

  console.log("Gallery initialized and event listeners added.");
}
