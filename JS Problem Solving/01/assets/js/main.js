   const container = document.querySelector(".container");

      container.addEventListener("click", (e) => {
        const arrowDiv = e.target.closest(".arrow");
        if (!arrowDiv) return;

        const part = arrowDiv.closest(".part");
        const p = part.querySelector("p");
        const isOpen = p.style.display === "block";

        p.style.display = isOpen ? "none" : "block";
        arrowDiv.classList.toggle("reverse-Arrow", !isOpen);
        part.classList.toggle("open", !isOpen);
      });