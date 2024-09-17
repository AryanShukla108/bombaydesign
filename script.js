document.addEventListener("DOMContentLoaded", function () {
  const projectTrigger = document.getElementById("project-trigger");
  const projectTriggerV2 = document.getElementById("project-trigger-v2");
  const projectOptions = document.querySelectorAll(".custom-project-option");
  const projectOptionsV2 = document.querySelectorAll(
    ".custom-project-option-v2"
  );
  const queryType = document.getElementById("query-type");
  const queryTypeV2 = document.getElementById("query-type-v2");
  const projectDropdown = document.getElementById("project-dropdown");
  const projectDropdownV2 = document.getElementById("project-dropdown-v2");
  const toTopButton = document.querySelector(".arrow-icon");
  const toggleIcon = document.getElementById("toggle-icon");
  const formContent2 = document.getElementById("form-content");
  const formContent = document.getElementById("form111");
  const btnEnquire = document.querySelector(".mobile-enq-btn");
  const closeModalBtn = document.querySelector(".close-small-modal img");

  let isMenuOpen = false;
  let isMenuOpen2 = false;

  projectTrigger?.addEventListener("click", function () {
    this.parentNode.classList.toggle("open");
  });

  if (projectTriggerV2) {
    projectTriggerV2?.addEventListener("click", function () {
      this.parentNode.classList.toggle("open");
    });
  }

  function handleSelectChange() {
    // Show the project dropdown if 'Projects' is selected
    if (queryType.value === "projects") {
      projectDropdown.style.display = "block";
    } else {
      projectDropdown.style.display = "none";
    }
  }

  function handleSelectChangeV2() {
    if (queryTypeV2.value === "projectsv2") {
      projectDropdownV2.style.display = "block";
    } else {
      projectDropdownV2.style.display = "none";
    }
  }

  queryType.addEventListener("change", handleSelectChange);
  if (queryTypeV2) {
    queryTypeV2.addEventListener("change", handleSelectChangeV2);
  }

  projectOptions.forEach((option) => {
    option.addEventListener("click", function () {
      projectOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      projectTrigger.textContent = this.textContent.trim();

      this.closest(".custom-project-select").classList.remove("open");
    });
  });

  projectOptionsV2.forEach((option) => {
    option.addEventListener("click", function () {
      projectOptionsV2.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      projectTriggerV2.textContent = this.textContent.trim();

      this.closest(".custom-project-select-v2").classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    const isClickInside = projectTrigger.parentElement.contains(e.target);
    if (!isClickInside) {
      projectTrigger.parentNode.classList.remove("open");
    }
  });

  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  toggleIcon.addEventListener("click", function () {
    console.log("111111");

    if (isMenuOpen) {
      toggleIcon.classList.remove("close");
      formContent.style.display = "none";
    } else {
      toggleIcon.classList.add("close");
      formContent.style.display = "block";
    }

    console.log(formContent, "formContent", "toggleIcon");
    isMenuOpen = !isMenuOpen;
  });

  btnEnquire.addEventListener("click", function () {
    console.log("2222222");
    if (isMenuOpen2) {
      //    toggleIcon.classList.remove("close");
      formContent2.style.display = "none";
    } else {
      //    toggleIcon.classList.add("close");
      formContent2.style.display = "block";
    }

    console.log(formContent, "formContent", "toggleIcon");
    isMenuOpen2 = !isMenuOpen2;
  });

  closeModalBtn.addEventListener("click", function () {
    formContent2.style.display = "none";
    isMenuOpen2 = false;
  });


  handleSelectChange();
  handleSelectChangeV2();
});
