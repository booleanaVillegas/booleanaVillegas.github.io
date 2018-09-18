
let carrousel = function (projects) {

    let indexBase = 0;

    let indexBaseProject = [];
    for (let i = 0; i < projects.length; i++) {
        indexBaseProject.push(i);
    }

    for (let i = 0; i < projects.length; i++) {
        $("#projects-cont").append('<div class="project"></div>');
        $($('.project')[i]).css({"background-image": 'url(' + projects[indexBase].cover + ')'});
        indexBase++;
    }

    for (let i in projects[projects.length > 1 ? 1 : 0].links) {
        let thisLink = projects[indexBaseProject[projects.length > 1 ? 1 : 0]].links[i];

        var linkProject = "<a href="+thisLink.link+" target=\"_blank\" class='anchor-link'><img src="+thisLink.logo+" class='link-img'></a>";
        $('#links-each-project').append(linkProject);
    }

    $('#title-project').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].title);

    $('#project-description').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].description)
    indexBase = 0;
    $("#carrousel-back").click(function () {
        $('#links-each-project').empty();
        for (let i in indexBaseProject) {
            indexBaseProject[i]--;
            if (indexBaseProject[i] < 0) {
                indexBaseProject[i] = projects.length - 1;
            }
            $($('.project')[i]).css({"background-image": 'url(' + projects[indexBaseProject[i]].cover + ')'});
        }

        $('#project-description').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].description)
        $('#title-project').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].title)

        for (let i in projects[indexBaseProject[projects.length > 1 ? 1 : 0]].links) {
            let thisLink = projects[indexBaseProject[projects.length > 1 ? 1 : 0]].links[i];

            var linkProject = "<a href="+thisLink.link+" target=\"_blank\" class='anchor-link'><img src="+thisLink.logo+" class='link-img'></a>";
            $('#links-each-project').append(linkProject);
        }


    })
    $("#carrousel-next").click(function () {
        $('#links-each-project').empty();
        for (let i in indexBaseProject) {
            indexBaseProject[i]++;
            if (indexBaseProject[i] > projects.length - 1) {
                indexBaseProject[i] = 0;
            }
            $($('.project')[i]).css({"background-image": 'url(' + projects[indexBaseProject[i]].cover + ')'});
        }

        $('#project-description').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].description)
        $('#title-project').text(projects[indexBaseProject[projects.length > 1 ? 1 : 0]].title)

        for (let i in projects[indexBaseProject[projects.length > 1 ? 1 : 0]].links) {
            let thisLink = projects[indexBaseProject[projects.length > 1 ? 1 : 0]].links[i];

            var linkProject = "<a href="+thisLink.link+" target=\"_blank\" class='anchor-link'><img src="+thisLink.logo+" class='link-img'></a>";
            $('#links-each-project').append(linkProject);
        }

    })
}


