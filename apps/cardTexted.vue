<template>
    <div class="card-texted">
        <div class="card-texted-container">
            <div class="card-texted-text">
                <h2> {{ title }} </h2>
                <p> {{ text }} </p>
            </div>
            <div class="card-list">
                <div class="card-of-list-container" v-for="(cardImg, index) in cardImgs" :key="index">
                    <card :cardImg="cardImg" :moveCard="moveCard" :cardText="cardTexts[index]"/>
                    <div v-if="index < cardImgs.length - 1" class="arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import card from './card.vue';
    export default {
        name: 'cardTexted',

        props: {
            title: { type: String, required: true },
            text: { type: String, required: true },
            imgPath: { type: String, required: true },
            cardImgs: { type: Array, default: () => [], required: true },
            cardTexts: { type: Array, default: () => [], required: false },
            moveCard: { type: Boolean, default: false, required: false }
        },

        components: {
            card
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .card-texted {
        height: auto;
        position: relative;
        overflow: visible;
        margin: 0 auto;
        color: white;
        background: url('../public/imgs/extraIcons/grido.png') center center / cover;

        &, & * {
                font-family: "Poppins", serif;
                font-weight: 500;
        }

        // *{ border: 1px solid red}

        .card-texted-container {
            width: min(90%, 90em);
            margin: auto;
            display: grid;
            grid-template-columns: 1fr; 
            justify-content: center;
            text-align: center;
            padding: clamp(1em, 0.25em + 5vw, 5em);

            h2 {
                font-size: clamp(1.5em, 2.5vw + 1.5em, 5em);
                font-family: "Josefin Sans";
                font-weight: bold;
                margin-bottom: 0.5em;
            }

            p{
                font-size: clamp(1em, 2.5vw + 0.5em, 1.5em);
            }

            .card-texted-text, .card-of-list-container{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }

            .card-texted-text {
                padding: clamp(1em, 0.5em + 0.5vw, 5em);
                flex-direction: column;
            }
            
            .card-list {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                justify-content: center;
                gap: calc(5.5em - 2.5vw);
                padding: clamp(1em, 2em + 1vw, 1.5em) 0;

                .arrow {
                    position: absolute;
                    bottom: calc(-1.25em - 1vw);
                    font-size: calc(2em + 2vh);
                    color: white;

                    &::after{
                        content: "↓";
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .card-list .arrow { 
            bottom: auto !important;
            right: calc(-0.25em - 0.5vw) !important;

            &::after{
                content: "→" !important;
            }
        }
    }
</style>