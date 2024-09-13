document.addEventListener("DOMContentLoaded", function () {
    const projectTrigger = document.getElementById("project-trigger");
    const projectOptions = document.querySelectorAll(".custom-project-option");
    const queryType = document.getElementById("query-type");
    const queryTypeV2 = document.getElementById("query-type-v2");
    const projectDropdown = document.getElementById("project-dropdown");
    const projectDropdownV2 = document.getElementById("project-dropdown-v2");
    const toTopButton = document.querySelector(".arrow-icon");
    const toggleIcon = document.getElementById("toggle-icon");
    const formContent = document.getElementById("form-content");
    let isMenuOpen = false;

    projectTrigger.addEventListener("click", function () {
        this.parentNode.classList.toggle("open");
    });

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

    // queryType.addEventListener("change", handleSelectChange);
    queryTypeV2.addEventListener("change", handleSelectChangeV2);


    projectOptions.forEach((option) => {
        option.addEventListener("click", function () {
            projectOptions.forEach((opt) => opt.classList.remove("selected"));
            this.classList.add("selected");

            projectTrigger.textContent = this.textContent.trim();

            this.closest(".custom-project-select").classList.remove("open");
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
        if (isMenuOpen) {
            toggleIcon.classList.remove("close");
            formContent.style.display = "none";
        } else {
            toggleIcon.classList.add("close");
            formContent.style.display = "block";
        }
        isMenuOpen = !isMenuOpen;
    });

    handleSelectChange();
    handleSelectChangeV2();

});
