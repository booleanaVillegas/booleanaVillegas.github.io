var config = {
    apiKey: "AIzaSyBUp2bjPmPmPyz3s9IOHJGhpirhyAp9W_E",
    authDomain: "booleana-s-portafolio.firebaseapp.com",
    databaseURL: "https://booleana-s-portafolio.firebaseio.com",
    projectId: "booleana-s-portafolio",
    storageBucket: "booleana-s-portafolio.appspot.com",
    messagingSenderId: "206543034569"
};
firebase.initializeApp(config);

var database = firebase.database();

var getDevSkills= database.ref('english/skills/developer');
var getDesignSkills= database.ref('english/skills/designer');
var getProtoSkills= database.ref('english/skills/prototyping');
var getProjects= database.ref('english/projects');

var developer= [];

getDevSkills.on('value', function (snapshot) {
    developer = snapshot.val()
});/*
getDesignSkills.on('value', function (snapshot) {
    //console.log(snapshot.val())
});
getProtoSkills.on('value', function (snapshot) {
    //console.log(snapshot.val())
});*/
let gottenProjects

getProjects.once('value').then(function(snapshot) {
    projects = snapshot.val();

        carrousel(projects);

});

