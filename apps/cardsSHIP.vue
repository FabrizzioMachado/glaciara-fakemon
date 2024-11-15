<template>
    <div class="cardsContainer">
        <div class="banner">
            <button id = "left-arrow" class="left-arrow"
                    @click="nextCard('prev')">
            </button>
            <div class="slider" id="slider">
                <div v-for="(item, index) in items" :key="index" class="item" ref="sliderItem">
                    <img :src="item.src" :alt="item.alt" class="pic">
                </div>
            </div>
            <button id= "right-arrow" class="right-arrow" 
                    @click="nextCard('next')">
            </button>

            <div class="card-ship-text">
                <h1> 
                    {{titleLogo}}
                </h1>
            </div>>

        <sidePopUp 
            :sidePopUpText="sidePopUpContent[0]"
            :popUpImg="sidePopUpContent[1]"
            :popUpPosition="sidePopUpContent[2]" 
            :imgWidth="sidePopUpContent[3]" 
        />
        </div>
    </div>
</template>

<script>
    import sidePopUp from './sidePopUp.vue';
    export default {
        name: 'cards3D',

        props: {
            titleLogo: { type: String, required: false },
            items: { type: Array, required: true },
            sidePopUpContent: { type: Array, required: false },
        },

        data() {
            return {
                currentIndex: 0, // Track the current image index
            };
        },

        methods: {
            updateRotation() {
                const totalItems = this.items.length;
                const sliderItems = this.$refs.sliderItem; // Access all refs for the slider items

                if (sliderItems && sliderItems.length > 0) {
                    for (let i = 0; i < totalItems; i++) {
                        const rotationAngle = (360 / totalItems) * (i - this.currentIndex); // Rotation based on current index
                        sliderItems[i].style.transform = `rotateY(${rotationAngle}deg) translateZ(min(30vw, 20em))`;
                    }
                }
            },
            nextCard(direction) {
                const totalItems = this.items.length;

                if (direction === "next") {
                    // Incrementa l'indice corrente, cicla di nuovo se arriva alla fine
                    this.currentIndex = (this.currentIndex + 1) % totalItems;
                } else if (direction === "prev") {
                    // Decrementa l'indice corrente, torna all'ultimo elemento se siamo a 0
                    if (this.currentIndex === 0) {
                        this.currentIndex = totalItems - 1;
                    } else {
                        this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
                    }
                }

                this.updateRotation(); // Aggiorna la rotazione interna
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.updateRotation();
            });
        },

        components: {
            sidePopUp
        }
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Roboto:wght@900&display=swap');
    
    .cardsContainer {
        z-index: 10;
        height: auto;
        font-family: "Bebas Neue", sans-serif;
        position: relative;
        background: url('../public/imgs/extraIcons/grido.png') center center / cover;

        .banner{
            width: min(90%, 90em) !important;
            height: 750px; // Initially takes up full viewport height
            text-align: center;
            overflow: hidden;
            position: relative;
            margin: auto;

            button{
                border-radius: 50%;
                width: 2.5em;
                height: 2.5em;
                background: #2224;
                color: white;
                border: none;
                position: absolute;
                overflow: hidden;
                top: calc(50% - 1.25em);
                z-index: 100;

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
            
            .slider {
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                position: absolute;
                transform: perspective(1000px) rotateX(-20deg) translateY(calc(-2em - 1vh));

                .item {
                    position: absolute;
                    top: 25%;
                    left: calc(50% - 5em);
                    width: 10em;
                    aspect-ratio: 2/3;
                    transform-origin: center;
                    overflow: hidden;
                    transition: transform 1s ease-in-out; 

                    .pic {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
    
    .card-ship-text{
        font-family: 'Poppins', sans-serif;
        width: 100%;
        z-index: 10;
        display: flex;
        position: relative;
        flex-direction: column; 
        justify-content: end;
        text-align: center;
        position: absolute;
        bottom: calc(2em + 0.25vh); 
        left: 0;

        h1 {
            font-size: clamp(3em, 5em + 1vh, 7.5em);
            white-space: nowrap;
            position: relative;
            z-index: 1;
            letter-spacing: 0.05em;
            color: transparent;
            -webkit-text-stroke: 1px #e2e2e2;
        }
    }
</style>