Vue.component('intro', {
    template:`<div id="intro">
<div class="content">
<img src="images\\logo.svg" alt="" id="logo" class="noselect">
<h2 class="text-intro">Hello! My name is Juliana Villegas. I am an interactive media designer. I love mobile, web and creative development. <br> <span id="welcome">Welcome to my portafolio!</span></h2> 

</div>
 <a class="text-go-to purple" href="#about-me" rel="relativeanchor"><h3 class="size-18">Do you want to know more about me?<br>V</h3></a>
</div>
`
});

Vue.component('about-me', {
    template: `
     <div id="about-me">


    <div class="desc">
        <h1 class="aboutme noselect">ABOUT<br>ME</h1>
        <p class="about-me-desc">Interactive media design is the perfect combination between design and programming. 
        Every good web, mobile, desktop and even physical platform needs to be centered in how the user feels during the experience
        and how they interact with it. This is the most important thing for me.<br><br>I am very dedicated and responsible in
            every work I do. I love learning new things and experimenting with new programmable technologies. Do you want
            to work together?</p>
         <a href="#contact" rel="relativeanchor"><p class="lilac feel-free" >Feel free to Contact me!</p></a>
    </div>
    <div class="titles-picture noselect">
        <h3 class="lilac">Juliana Villegas<br>Cali, Colombia</h3>
        <img src="images/julianados.png" alt="" id="profile-pic">
        <h3 class="purple">Creative Developer<br>Universidad Icesi</h3>
    </div>
    <div class="skills noselect">
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
/*
Vue.component('project', {

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
                 alt="" class="pic-project noselect">
                 <div v-if='isShowing' class="info-project">
            <div class="info-text"><h3 class="purple title-project noselect">{{title}}</h3>
            <p class="project-desc">{{desc}}</p></div>
             <div class="container-two">
            <div class="links-container noselect" v-for="link in links">
               <a v-bind:href="link.link" target="_blank" class="anchor-link">
                <figure class='link-figure'><img v-bind:src='link.logo' class='link-img'></figure></a>
            </div>
            </div>
            </div>
        </div>
`
});*/


Vue.component('my-projects', {

    template: `
      <div id="projects">
    <h1 class="projects-title noselect">MY PROJECTS</h1>
    <div class="contenedor-projects" id="carrousel">
        <div id="projects-cont">
            <div class="projects-flechas">
                <img id="carrousel-back"
                     src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/arrow-left.svg?alt=media&token=abc76fd7-ade0-4edb-900f-98fba9e197fa">
                <img id="carrousel-next"
                     src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/arrow-right.svg?alt=media&token=9461a378-7b2a-452f-8575-9dc0376edd83">
            </div>

        </div>
        <div class="info-project">

            <div class="cont-texto">
                <h3 class="purple noselect" id="title-project"></h3>

                <p id="project-description" class="project-desc"></p>
                <div class="links-container noselect" id="links-each-project"></div>

            </div>
        </div>
    </div>
</div>
`
});

Vue.component('contact', {
    template: `
     <div id="contact" class="noselect">
    <h1 class="contact-title">CONTACT ME</h1>
    <p class="contact-text">You’ve just read a little bit about me, but there's so much more, if you want to work together or you want me to be bring your ideas to life, contact me and we'll make it happen together!
        <br>This portfolio was made from scratch with lots of love. dedication and using  Vue.js and Firebase.</p>
    <h3 class="purple">You can find me at:</h3>
    <div class="links-container">
        <a href="https://www.linkedin.com/in/jumavipe/" target="_blank"><img class="link-img" src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/linkedin.svg?alt=media&token=68515f7a-00f3-47ad-9642-5144985ef424" alt=""></a>
        <a href="https://github.com/booleanaVillegas" target="_blank"><img class="link-img" src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/github.svg?alt=media&token=83edf83c-cd80-43fa-bedd-a2348ff23b3e" alt=""></a>
        <a href="https://www.behance.net/jumavipe" target="_blank"><img class="link-img" src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/behance.svg?alt=media&token=5509ba74-4821-4fd3-87a2-3704ae06c965" alt=""></a>
        <a href="mailto:juliana.maria.villegas@gmail.com" target="_blank"><img class="link-img" src="https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/mail.svg?alt=media&token=c64fa6a6-4abf-4bd9-bb15-64e5ddd8e540" alt=""></a></div>
</div>
`
});

var valueMenu = false;

Vue.component('menu-desplegable', {
    data: function () {
        return {

        }
    },
    template: `
    
  <div class="menu">
    <a href="#intro" rel="relativeanchor"  v-on:click="closeMenu">
        <h3 class="item-menu white">Home</h3>
    </a>
    <a href="#about-me" rel="relativeanchor" v-on:click="closeMenu">
        <h3 class="item-menu white">About</h3>
    </a>
    <a href="#projects" rel="relativeanchor" v-on:click="closeMenu">
        <h3 class="item-menu white">Projects</h3>
    </a>
    <a href="#contact" rel="relativeanchor" v-on:click="closeMenu">
        <h3 class="item-menu white">Contact</h3>
    </a>
</div>
  
`,
    methods:{
      closeMenu: function () {
          valueMenu = false;
          app.showingMenu=false;

      }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        DevSkills: [],
        showingMenu : valueMenu

    },
    computed:{
        menuImg: function () {
            if (!valueMenu){
                return 'https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/menu.svg?alt=media&token=d68ebf60-6581-4eca-9b36-26e1054f6c42';
            }
                return 'https://firebasestorage.googleapis.com/v0/b/booleana-s-portafolio.appspot.com/o/close.svg?alt=media&token=73b87a3e-c5f8-473d-9404-50a8aefa2c3c';


        }
    },
    methods:{
        showMenu: function(){
            app.showingMenu=!app.showingMenu;
        }
    },
    created: function () {

        getDevSkills.on('value', function (snapshot) {
            this.DevSkills = snapshot.val();
        });
    }
});



