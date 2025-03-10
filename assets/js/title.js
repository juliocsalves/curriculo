document.addEventListener("DOMContentLoaded", function () {
    let profileSpan = document.getElementById("profile.name");
    if (profileSpan) {
        let observer = new MutationObserver(() => {
            document.title = profileSpan.textContent;
        });
        observer.observe(profileSpan, { childList: true });
    }
});
