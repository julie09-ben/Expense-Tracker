document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("register-page").classList.remove("hidden");
});
document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
});
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("register-page").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
});
