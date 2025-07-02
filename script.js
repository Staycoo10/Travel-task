function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const btn = document.getElementById("hamburgerBtn");

    const isHidden = menu.classList.contains("hidden");

    // Afișăm sau ascundem meniul
    menu.classList.toggle("hidden");

    // Setăm corect iconul în funcție de starea nouă
    btn.textContent = isHidden ? "✕" : "☰";
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("accommodationDropdown");
    dropdown.classList.toggle("hidden");
  }

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const btn = document.getElementById("hamburgerBtn");

    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    btn.textContent = isHidden ? "✕" : "☰";
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("accommodationDropdown");
    const arrow = document.getElementById("dropdownArrow");

    const isHidden = dropdown.classList.contains("hidden");
    dropdown.classList.toggle("hidden");
    arrow.textContent = isHidden ? "▲" : "▼";
  }