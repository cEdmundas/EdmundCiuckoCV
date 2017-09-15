<template>
<div class="wrapper">
    <div class="bannerWrapper">
        <div class="greeting">
            <h1> {{banner.greeting}}</h1>
            <h2 class="message">{{banner.message}}</h2>
        </div>
    </div>
    
    <vue-progress-bar></vue-progress-bar>
    <div class="about">
        <div
            name="title">
            <span><h1>About Me</h1></span>
        </div>

        <transition 
                name="fade"
        >
        <div 
            name="about"
            v-if="aboutMe">
            Skilled in administration of Linux and UNIX-like machines and computer environments, 
            experienced with Dockers' container technology as well as clusterization and state management 
            of containers using Googles Kubernetes and various tools based on it (<span class="highlight">{{skills.kubernetesTools}}</span>). 
            <br/><br/>
            Can speak <span class="highlight">{{skills.languages}}</span>. 
            Currently on his way at mastering <span class="highlight">{{skills.newLanguage}}</span>.
            <br/><br/>
            Knows basic and advanced networking and is strict on who and when can access 
            networks while using any kind of physical or virtual firewalls (<span class="highlight">{{skills.firewalls}}</span>). 
            Can set up monitoring services for whole infrastructure - <span class="highlight">{{skills.monitoring}}</span>, and is 
            able to configure <span class="highlight">{{skills.helpdesk}}</span> helpdesk services.
            <br/><br/>
            Hates to waste time, and feels uncomfortable when no new thing, technology or framework was 
            not learnt during the day.
            <br/><br/>
            Bonus - has 4 year experience as sushi chef, is able to create wonderful dishes from most random ingredients ;)
            <br/>
        </div>
        </transition> 
        
        </div>
</div>
</template>

<script>
    export default {
        name: 'CV',
        data() {
            return {
                aboutMe: false,
                banner: {
                    greeting: 'hello!',
                    message: 'press <ENTER> or <SCROLL DOWN> to begin'
                },
                skills: {
                    kubernetesTools: 'kubectl, kubelet, kops, terraform',
                    languages: 'JavaScript ( Vue.JS, React.JS, Node.JS, Angular.JS, Sails.JS ), HTML, CSS, PHP, Python, C++, C#, AWK, SNMP, SHELL',
                    newLanguage: 'react-native',
                    firewalls: 'iptables, ufw',
                    monitoring: 'Zabbix, ELK or Grafana',
                    helpdesk: 'Zendesk, Ivanti'
                },
                programObject: {
                    color: '#17152b',
                    background: '#e8fcfb',
                    padding: '3px 5px',
                    margin: '-3px -5px',
                    display: 'inline-block',
                    opacity: '0.8'     
                }
            }
        },
        beforeMount: function() {
            this.aboutMe= false;
        },
        mounted: function() {
            this.$Progress.finish()
                       this.aboutMe = true;
        },
        created: function() {
            this.$Progress.start();
 
            window.addEventListener('keydown', function(e) {
                if (e.keyCode === 13) {
                    window.scrollTo(0, 900);
                    this.aboutMe = true;
                }
            }) 
        }
    }
        


    
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: 6s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    
    .highlight {
        line-height: 0.9;
        color: #17152b;
        background: #e8fcfb;
        padding: 3px 5px;
        margin: -3px -5px;
        display: inline-block;
        opacity: 0.8; 
    }
    .about {
        display: block;
        position: absolute;
        top: 100%;
        left: 9%;
        width: 80%;
        margin: 0 auto;
        padding-bottom: 10%;
        text-align: justify-content;
        font-size: 20pt;
    }
    .bannerWrapper {
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
    }
    .greeting {
        position: absolute;
        width: 100%;
        display: block;
        float: center;
        padding-top: 15%;
        margin: 0px auto;
    }
    .message {
        position: absolute;
        display: block;
        width: 100%;
        top: 88%;
    }
    h1 {
        text-transform: uppercase;
        font-family: 'Press Start 2P', cursive;
        font-size: 100px;
        text-shadow: 3px 4px 0px #fc0a0a,
                     -3px 4px 0px #39cc00;
    }
    h2 {
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
    }
    @media(max-width: 980px) {
        h1 {
            font-size: 60px;
            max-width: 100%;
            text-align: center;
        }
        h2 {
            font-size: 6px;
            max-width: 100%;
            text-align: center;
        }
        .about {
            font-size: 12pt;
        }
        .highlight {
            line-height: 0.9;
        }
    }
    @media(max-width: 400px) {
        h1 {
            font-size: 50px;
        }
        h2 {
            font-size: 7px;
            max-width: 100%;
            text-align: center;
            left: -2%;
        }
    }
    @media(max-width: 280px) {
        h1 {
            font-size: 40px;
        }
        h2 {
        font-size: 5px;
        }
    }
    
</style>
