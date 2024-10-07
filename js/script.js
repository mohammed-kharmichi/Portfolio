
const menu = document.querySelector(".menu-container");
menu.addEventListener("click", () => {
    var list = document.getElementById("list");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");

    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");

    list.classList.toggle('is-active');
});

function change_list_el_color(a) {
    var homelink = document.getElementById("home-link");
    var projectslink = document.getElementById("projects-link");
    var contactmelink = document.getElementById("contact-me-link");
    var aboutmelink = document.getElementById("about-me-link");

    homelink.classList.remove('active');
    projectslink.classList.remove('active');
    contactmelink.classList.remove('active');
    aboutmelink.classList.remove('active');

    if (a == 'home-link') {
        homelink.classList.add('active');
    } else {
        if (a == 'projects-link') {
            projectslink.classList.add('active');
        } else {
            if (a == 'contact-me-link') {
                contactmelink.classList.add('active');
            } else {
                aboutmelink.classList.add('active');
            }
        }
    }
}

function change_projects_type(li) {

    var all = document.getElementById("all");
    var data = document.getElementById("data");
    var developement = document.getElementById("developement");
    var both = document.getElementById("both");

    all.classList.remove('active-li');
    data.classList.remove('active-li');
    developement.classList.remove('active-li');
    both.classList.remove('active-li');

    var projects = document.getElementsByClassName('project');
    for (var project of projects) {
        project.style.display = "none";
    }

    if (li == "all") {
        all.classList.add('active-li');
        var projects = document.getElementsByClassName('project');
        for (var project of projects) {
            project.style.display = "block";
        }
    } else {
        if (li == "data") {
            data.classList.add('active-li');
            var datas = document.getElementsByClassName('data');
            for (var data of datas) {
                data.style.display = "block";
            }
        } else {
            if (li == "both") {
                both.classList.add('active-li');
                var boths = document.getElementsByClassName('both');
                for (var both of boths) {
                    both.style.display = "block";
                }
            } else {
                developement.classList.add('active-li');
                var developements = document.getElementsByClassName('developement');
                for (var developement of developements) {
                    developement.style.display = "block";
                }
            }
        }
    }
}

const cancel = document.querySelector('.cancel-container');
cancel.addEventListener('click', ()=>{
    var projectView = document.querySelector('.project-details-container');
    projectView.style.display = "none";
});

function show_project_details(order) {
    var projectView = document.querySelector('.project-details-container');
    projectView.style.display = "flex";

    var boths = document.getElementsByClassName('details');
    for (var both of boths) {
        both.style.display = "none";
    }

    var project = document.getElementById(order);
    project.style.display = "flex";
}

