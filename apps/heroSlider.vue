<template>  
    <div class="carousel" id="carousel">
        <div class="list">
            <div id="item" class="item" v-if="slides.length > 0">
                <img :src="slides[0].src" class="background-image">
                <div class="content">
                    <div class="content-container">
                        <div class="text">
                            <div class="title-sub">
                                <h1 class="title" v-html="highlightedTitle"></h1>
                                <h3 class="type"> {{ slides[0].subtitle }} </h3>
                            </div>
                            <!--<Button1
                                :text="buttonText"
                                :icon="buttonIcon"
                                :hoverColor="buttonHoverColor"
                                :backgroundColor="buttonBackgroundColor"
                            />-->
                        </div>
                        <div class="thrumbnails">
                            <button id = "left-arrow" class="left-arrow"
                                    @click="nextSlide('prev')">
                            </button>
                            <div class="thrumbnail-list">
                                <template v-for="(slide, index) in slides">
                                    <div v-if="index !== 0" :key="index" class="thrumbnail-item">
                                        <img :src="slide.src">
                                    </div>
                                </template>
                            </div>
                            <button id = "right-arrow" class="right-arrow" 
                                    @click="nextSlide('next')">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="time"></div>
    </div>
</template>

<script>
    export default {
        name: 'HeroSlider',
        props: {
            slides : { 
                type: Array, 
                required: true 
            },
            hoverColor: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                prevButton: null,
                nextButton: null,
                carousel: null,
                itemsList: null,
                thumbnails: null,
                background: null,
                runTime: null,
                timeLoad: 1500,
                timeAutoPlay: 10000,
                currentIndex: 0,
            }
        },
        mounted(){
            this.prevButton = document.getElementById("left-arrow");
            this.nextButton = document.getElementById("right-arrow");
            this.carousel = document.getElementById("carousel");
            this.itemsList = document.querySelector(".list");
            this.thrumbnails = document.querySelector(".thrumbnail-list");  
            this.background = document.querySelector(".background-image"); 
            this.runTime = setTimeout(() => {
                this.nextButton.click()
            }, this.timeAutoPlay)
        },
        computed: {
            highlightedTitle() {
                return this.slides[0].title.replace(new RegExp(this.slides[0].hl, 'gi'), `<span class="titleSpan">${this.slides[0].hl}</span>`)
            }
        },
        methods:{
            updateThumbnails() {
                const thumbnails = document.querySelector(".thrumbnail-list");
                thumbnails.innerHTML = '';
                this.slides.slice(1).forEach((image) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.classList.add('thrumbnail-item');
                    const img = document.createElement('img');
                    img.src = image.src;
                    thumbnail.appendChild(img);
                    thumbnails.appendChild(thumbnail);
                })
            },

            nextSlide(type){
                if(type === "next"){
                    this.slides.push(this.slides.shift());
                    this.currentIndex = (this.currentIndex + 1) % (this.slides.length - 1);
                    this.updateThumbnails();
                    this.carousel.classList.add("next");
                    setTimeout(() => {
                        this.carousel.classList.remove("next");
                    }, this.timeLoad);
                    clearTimeout(this.runTime);
                }
                else {
                    this.slides.unshift(this.slides.pop());
                    this.currentIndex = (this.currentIndex - 1 + this.slides.length - 1) % (this.slides.length - 1);
                    this.updateThumbnails();
                    this.carousel.classList.add("prev");
                    setTimeout(() => {
                        this.carousel.classList.remove("prev");
                    }, this.timeLoad);
                    clearTimeout(this.runTime);
                }
                this.runTime = setTimeout(() => {
                    this.nextButton.click()
                }, this.timeAutoPlay)
            },  
        }
    }
</script> 

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');
    $font-family: "Squada One";

    @keyframes showContent {
        from {
            opacity: 0;
            filter: blur(1em);
            transform: translateY(10em);
        }
        to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
        }
    }

    @keyframes contentOut {
        0%,100%{
            transform: translateY(0);
            filter: blur(0);
            opacity: 1;
        }
        50%{
            transform: translateY(10em);
            filter: blur(1.5em);
            opacity: 0;
        }
    }

    @keyframes showImage {
        0%, 100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }

    @keyframes showThrumbnail{
        from{ 
            width: 0;
        }
        to{
            width: clamp(4.5em, 10vw + 2.5em, 5em);
        }
    }

    @keyframes BTransformThrumbnail{
        from{
            transform: translate(calc(-1 * (1.5vw + 2.5em)), 0);
        }
        to{
            transform: translate(0, 0);
        }
    }

    @keyframes FTransformThrumbnail{
        from{
            transform: translate(calc(1.5vw + 2.5em), 0);
        }
        to{
            transform: translate(0,0);
        }
    }

    @keyframes timeCounter{
        from{
            width: 100%;
        }
        to{
            width: 0;
        }
    }

    .carousel{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        font-family: $font-family;

        *{
            transition: all 0.3s ease-in-out;
        }

        .item{
            width: 100vw;
            height: 100vh;
            position: absolute;
            color: white;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            & .background-image{
                filter: brightness(0.75) saturate(1.25);
            }

            &:nth-child(1){
                z-index: 100;
                & .title,
                & .type,
                & .description {
                    transform: translateY(10em);
                    opacity: 0;
                    filter: blur(1em);
                    animation: showContent 1s 1s linear forwards;
                }

                & .title{
                    animation-delay: 1s;
                }
                & .type{
                    animation-delay: 1.25s;
                }
            }

            .content {
                position: absolute;
                inset: 50% 50%;
                transform: translate(-50%, -50%);
                z-index: 10;
                width: min(90%, 90em) !important;
                height: 100%;
                display: flex;
                align-items: end;
                justify-content: center;

                .content-container{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;
                    text-align: center;
                    padding: clamp(1em, 0.5em + 0.5vw, 5em) 0;

                    .text{
                        h1{
                            font-size: clamp(2em, 5vw + 2em, 5em);

                            .titleSpan{
                                color: v-bind(hoverColor) !important;
                            }
                        }
                        h3{
                            margin-block: calc(0.5em - 0.25vw);
                            font-size: clamp(1.25em, 1.75vw + 0.25em, 5em);
                            font-weight: 100;
                        }
                    }
                }
                .content-container .text, .thrumbnails{
                    padding-bottom: clamp(0.5em, 1em - 1vw, 5em);
                }

                .thrumbnails{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1em;

                    button{
                        border-radius: 50%;
                        width: 2.5em;
                        height: 2.5em;
                        background: #2224;
                        color: inherit;
                        border: none;
                        position: absolute;
                        overflow: hidden;

                        &#left-arrow{
                            left: calc(1em + 0.5vw);
                        }

                        &#right-arrow{
                            right: calc(1em + 0.5vw);
                        }
                        
                        &#left-arrow::before,
                        &#right-arrow::before {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                        }

                        &#left-arrow::before{
                            content: "<"; 
                        }

                        &#right-arrow::before {
                            content: ">"; 
                        }
                    }
                    
                    .thrumbnail-list{   
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1em;
                        .thrumbnail-item{
                            width: clamp(4.5em, 10vw + 2.5em, 5em);
                            height: clamp(4.5em, 10vw + 2.5em, 5em);
                            border-radius: 1em;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                            &:nth-child(n + 4){
                                display: none;
                            }
                            &:hover{
                                box-shadow: 0 0 0.5em v-bind(hoverColor);
                                &:nth-of-type(odd) {
                                    transform: scale(1.1) rotate(calc(-3deg));
                                }
                                &:nth-of-type(even) {
                                    transform: scale(1.1) rotate(calc(3deg));
                                }
                            }
                        }
                    }
                }
            }
        }

        .time {
            width: 0%;
            height: 0.25em;
            background-color: v-bind(hoverColor);
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
        }

        &.next, &.prev{
            animation: showImage 0.5s linear forwards;
            .item .content .text{
                animation: contentOut 0.5s linear forwards;
            }
            .time {
                width: 100%;
                animation: timeCounter 0.75s linear 1 forwards;
            }
            #left-arrow, #right-arrow{
                pointer-events: none;
            }
        }
        
        &.prev{
            .list {
                .item:nth-last-child(1){
                    z-index: 100;
                }
                .thrumbnails{
                    animation: BTransformThrumbnail 0.5s linear forwards;
                    .thrumbnail-item:first-child{
                        width: 0;
                        animation: showThrumbnail 0.5s linear forwards;
                    }
                }
            }
        }

        &.next{
            .list {
                .item:nth-child(2){
                    z-index: 100;
                }
                .thrumbnails{
                    animation: FTransformThrumbnail 0.5s linear forwards;
                    .thrumbnail-item:nth-last-child(2){
                        width: 0;
                        animation: showThrumbnail 0.5s linear forwards;
                    }
                }
            }
        }

        @media screen and (min-width: 576px) {
            .thrumbnails {
                button{ 
                    position: relative !important
                }
                .thrumbnail-list .thrumbnail-item{
                    &:nth-child(n + 4){
                        display: block !important;
                    }
                    &:nth-last-child(1){
                        display: none !important;
                    }
                }     
            } 
        }
        @media screen and (min-width: 992px) { 
            .content{
                flex-direction: column !important;
                .content-container{
                    width: 100% !important;
                }
            }
        }
    }  
</style>