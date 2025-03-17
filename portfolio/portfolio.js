function aboutMe() {
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("projects").classList.add("hidden");
}

function projects(){
    document.getElementById("about").classList.add("hidden");
    document.getElementById("projects").classList.remove("hidden");
}