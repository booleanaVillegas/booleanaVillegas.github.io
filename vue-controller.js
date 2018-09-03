Vue.component('intro', {
    template: '<div id="intro">\n' +
    '<div class="content">\n' +
    '    <img src="images\\logo.svg" alt="" id="logo">\n' +
    '<h2>Hello! My name is Juliana Villegas. I am an interactive media designer. I love mobile, web and creative development. <br> <span id="welcome">Welcome to my portafolio!</span></h2>\n' +
    '</div>\n' +
    '</div>'
});

Vue.component('about-me', {
    template: `
     <div id="about-me">


    <div class="desc">
        <h1 class="aboutme">ABOUT<br>ME</h1>
        <p class="about-me-desc">Interactive media design is the perfect combination between design and programming. 
        Every good web, mobile, desktop and even platform needs to be centered in how the user feels during the experience
        and how they interact with it. This is the most important thing for me.<br><br>I am very dedicate and responsible in
            every work I do. I love to learn new things and experiment with new programmable technologies. Do you want
            to work together? Feel free to Contact me!</p>
    </div>
    <div class="titles-picture">
        <h3 class="lilac">Juliana María Villegas<br>Cali, Colombia</h3>
        <img src="images/julianados.png" alt="" id="profile-pic">
        <h3 class="purple">Creative Developer<br>Universidad Icesi</h3>
    </div>
    <div class="skills">
        <h1 class="skills-title">MY<br>SKILLS</h1>
       <skills-container skill="DEVELOPMENT" cosita='DEVELOPER'></skills-container>
    <skills-container skill="DESIGN" cosita='DESIGNER'></skills-container>
    <skills-container skill="PROTOTYPING" cosita='PROTOTYPING'></skills-container>
    </div>

</div>
`
});

var arreglo = {android: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/08294c69262895.5b835a94e2978.png'};

var skill = "";

var skillsContainer = Vue.component('skills-container', {
    data: function () {
        return {
            arraySkills: []
        }
    },
    props: {
        skill: String,
        cosita: {
            validator: function (value) {
                // The value must match one of these strings
                skill = value;

                return true;
            }
        }
    },
    template: `
    <div class="skills-container" isDroppedDown="false">
        <div class="upper-text">
            <h4 class="skills-text">{{skill}}</h4><h4 class="skills-plus">▾</h4>
        </div>

        <div class="bottom-icons"><div skillsimg="' " v-for="(val, key) in arraySkills">
            <img class="icons-skills" :src="val" :alt="key"  :title="key" >
        </div>

        </div>
    </div>
    `,
    created: function () {
        var self = this;

        switch (skill) {
            case 'DEVELOPER':
                getDevSkills.on('value', function (snapshot) {
                    self.$nextTick(function () {
                        self.arraySkills = snapshot.val()
                    })
                });
                break;
            case 'DESIGNER':
                getDesignSkills.on('value', function (snapshot) {
                    self.$nextTick(function () {
                        self.arraySkills = snapshot.val()
                    })
                });
                break;
            case 'PROTOTYPING':
                getProtoSkills.on('value', function (snapshot) {
                    self.$nextTick(function () {
                        self.arraySkills = snapshot.val()
                    })
                });
                break;
        }

    },
    methods: {
        getSkills: function (skill) {
            // this.DevSkills = 'updated'
            var self = this;

            switch (skill) {
                case 'DEVELOPER':
                    getDevSkills.on('value', function (snapshot) {
                        self.$nextTick(function () {
                            self.arraySkills = snapshot.val()
                        })
                    });
                    break;
                case 'DESIGNER':
                    getDesignSkills.on('value', function (snapshot) {
                        self.$nextTick(function () {
                            self.arraySkills = snapshot.val()
                        })
                    });
                    break;
                case 'PROTOTYPING':
                    getProtoSkills.on('value', function (snapshot) {
                        self.$nextTick(function () {
                            self.arraySkills = snapshot.val()
                        })
                    });
                    break;
            }


        }
    }
});

Vue.component('project', {
   /* data: function () {
        return {
            title: "Sketch",
            desc: "Zoe Beauty is an online store web application that sells different tipes of makeup from many brands in " +
            "the market. It works with a nodeJs server and Handlebars templating to create the front end.",
            links: {
                github: {
                    "link": "https://github.com/booleanaVillegas/juliana-villegas-taller-uno",
                    "logo": "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/github.svg?alt=media&token=83edf83c-cd80-43fa-bedd-a2348ff23b3e"
                },
                web: {
                    "link": "https://enigmatic-shelf-33047.herokuapp.com/",
                    "logo": "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/web.svg?alt=media&token=b5e092a2-beb3-4c72-a329-8e402e82032f"
                }
            }
            ,
            img: "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/projects%2Fzoe.png?alt=media&token=b0255dda-51f9-4958-8f7b-af978cc9b790"
        }
    },*/
    props: {
           title: String,
            desc: String,
            links: {},
            img: String,
        isShowing: Boolean,
    },
    template: `
      <div class="each-project">
            <img src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/projects%2Fzoe.png?alt=media&token=b0255dda-51f9-4958-8f7b-af978cc9b790"
                 alt="" class="pic-project">
                 <div v-if='isShowing' class="info-project">
            <div class="info-text"><h3 class="purple title-project">{{title}}</h3>
            <p class="project-desc">{{desc}}</p></div>
             <div class="container-two">
            <div class="links-container" v-for="link in links">
               <a v-bind:href="link.link" target="_blank" class="anchor-link">
                <figure class='link-figure'><img v-bind:src='link.logo' class='link-img'></figure></a>
            </div>
            </div>
            </div>
        </div>
`
});

Vue.component('my-projects', {
    data: function () {
        return {
            show: true,
            title: "Zoe Beauty",
            desc: "Zoe Beauty is an online store web application that sells different tipes of makeup from many brands in " +
            "the market. It works with a nodeJs server and Handlebars templating to create the front end.",
            links: {
                github: {
                    "link": "https://github.com/booleanaVillegas/juliana-villegas-taller-uno",
                    "logo": "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/github.svg?alt=media&token=83edf83c-cd80-43fa-bedd-a2348ff23b3e"
                },
                web: {
                    "link": "https://enigmatic-shelf-33047.herokuapp.com/",
                    "logo": "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/web.svg?alt=media&token=b5e092a2-beb3-4c72-a329-8e402e82032f"
                }
            }
            ,
            img: "https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/projects%2Fzoe.png?alt=media&token=b0255dda-51f9-4958-8f7b-af978cc9b790"
        }
    },
    template: `
      <div class="projects">
        <h1 class="projects-title">MY PROJECTS</h1>
        <div class="contenedor-projects">
<!--            <project :title='title' :desc='desc' :links='links' :img='img'></project>
            <project :title='title' :desc='desc' :links='links' :img='img'></project>
            <project :title='title' :desc='desc' :links='links' :img='img'></project>-->
             <project :isShowing='!show' :title="title" :desc="desc" :links="links" img="img"></project>
             <project :isShowing='show' :title="title" :desc="desc" :links="links" img="img"></project>
             <project :isShowing='!show' :title="title" :desc="desc" :links="links" img="img"></project>

             
           
            
            <div class="flechas"> <h1> < </h1> <h1> > </h1> </div>
          
        </div>
    </div>
`
});


var app = new Vue({
    el: '#app',
    data: {
        DevSkills: []
    },
    created: function () {

        getDevSkills.on('value', function (snapshot) {
            this.DevSkills = snapshot.val();
        });

    }
    /*,
   data: {
        DevSkills: []
    },
    methods: {
        DevSkillsStart: function () {
            getDevSkills.on('value', function (snapshot) {
                app.DevSkills=snapshot.val();
            });
        },
    }
*/

});


