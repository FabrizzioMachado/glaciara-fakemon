<template>
    <nav class="navbar">
        <div class="container-nav">
            <div class="logo">
                <a :href="titleLogo[1]" id="logoLink">
                    {{ titleLogo[0] }}
                </a>
            </div>
            <ul class="nav-links">
                <li v-for="(slot, index) in slots" :key="index" :class="{ 'active': currentSection === index }">
                    <a :href="slot.link">{{ slot.text }}</a>
                </li>
            </ul>
            <div class="burguer">
                <i  id="burguerIcon" 
                    class="bi bi-list"
                    @click="burguerClick()" 
                ></i>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            titleLogo: { type: Array, required: true },
            slots: { type: Array, required: true },
            color: { type: String, required: true },
            navBackgroundColor: { type: String, required: true },
        },
        data() {
            return {
                currentSection: 0, // Tracks the currently active section
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('scroll', this.updateCurrentSection);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('scroll', this.updateCurrentSection);
        },
        methods: {
            handleScroll() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > window.innerHeight) {
                    navbar.style.backgroundColor = this.navBackgroundColor;
                } else {
                    navbar.style.backgroundColor = 'transparent';
                }
            },
            updateCurrentSection() {
                this.slots.forEach((slot, index) => {
                    const section = document.querySelector(slot.link);
                    const rect = section.getBoundingClientRect();
                    const isInViewport = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

                    if (isInViewport) {
                        this.currentSection = index;
                    }
                });
            },
            burguerClick(){
                const burguerIcon = document.querySelector('#burguerIcon');
                burguerIcon.classList.toggle('bi-x');
                burguerIcon.classList.toggle('bi-list');

                if(burguerIcon.classList.contains('bi-x')){
                    document.querySelector('.nav-links').style.height = '100vh';
                }
                else{
                    document.querySelector('.nav-links').style.height = '0';
                }
            },
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    $font-family: "Josefin Sans";

    .navbar {
        *{
            transition: all 0.3s ease-in-out;
        }

        width: 100vw;
        height: 3.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        font-family: $font-family;

        .container-nav {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .logo, .nav-links, .burguer {
                font-weight: bold;
                a, i{
                    text-decoration: none;
                    color: white;

                    &:hover {
                        color: v-bind(color) !important;
                        cursor: pointer;
                    }
                } 
            }

            .logo {
                font-size: 1.5em;
                position: absolute;
                left: calc(1.25em + 0.25vw);
                top: 0.7em;
                z-index: 10;
            }


            .nav-links {
                width: 100vw;
                height: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(10em);
                position: absolute;
                top: 0;
                left: 0;
                align-items: center;
                justify-content: center;
                gap: clamp(1.5em, 5vw - 5em, 3em);
                list-style: none;
                padding: 0;
                margin: 0;
                font-size: clamp(1.25em, 7.5vw - 2.5em, 1em);

                li {
                    margin: 0 25px;

                    &.active a {
                        color: v-bind(color);
                    }
                }
            }

            .burguer {
                position: absolute;
                top: 1.25em;
                right: calc(2.5em + 5vw);
                height: 100%;
                transform: translateY(-0.5em);
                z-index: 10;
                
                i {
                    font-size: 2em; 
                    cursor: pointer;
                    position: absolute;
                    top: 0;
                }
            }
        }
    }

    @media only screen and (min-width: 992px) {
        .navbar {
            .container-nav{
                width: min(90%, 90em) !important;

                .logo {
                    left: 0 !important;
                }
            }

            .nav-links {
                flex-direction: row !important;
                justify-content: right !important;
                width: 100% !important;
                height: 100% !important;
                background: none !important;
                gap: 0 !important;
                backdrop-filter: none !important;
            }
            .burguer {
                display: none;
            }
        }
    }
</style>