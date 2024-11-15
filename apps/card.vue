<template>
    <div class="card-container" :class="{ 'move-card': moveCard }">
        <div class="card">
            <div class="box-of-star1">
                <div class="star star-position1"></div>
                <div class="star star-position2"></div>
                <div class="star star-position3"></div>
                <div class="star star-position4"></div>
                <div class="star star-position5"></div>
                <div class="star star-position6"></div>
                <div class="star star-position7"></div>
            </div>
            <div class="box-of-star2">
                <div class="star star-position1"></div>
                <div class="star star-position2"></div>
                <div class="star star-position3"></div>
                <div class="star star-position4"></div>
                <div class="star star-position5"></div>
                <div class="star star-position6"></div>
                <div class="star star-position7"></div>
            </div>
            <div class="box-of-star3">
                <div class="star star-position1"></div>
                <div class="star star-position2"></div>
                <div class="star star-position3"></div>
                <div class="star star-position4"></div>
                <div class="star star-position5"></div>
                <div class="star star-position6"></div>
                <div class="star star-position7"></div>
            </div>
            <div class="box-of-star4">
                <div class="star star-position1"></div>
                <div class="star star-position2"></div>
                <div class="star star-position3"></div>
                <div class="star star-position4"></div>
                <div class="star star-position5"></div>
                <div class="star star-position6"></div>
                <div class="star star-position7"></div>
            </div>
            <div class="image" :class="{ 'inner-move-card': innerMoveCard}">
                <img :src="cardImg">
            </div>
            <div class="cardContent">
                <div class="cardText" v-if="cardText">
                    <p v-html="cardText"></p>
                </div>
                <div class="socialMedia" v-if="cardIcons">
                    <i v-for="(icon, index) in cardIcons" :key="index" :class="['bi', 'bi-' + icon]"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CardGlow',

        props: {
            cardImg: { type: String, required: true },
            cardText: { type: String, required: false },
            cardIcons: { type: Array, required: false},
            moveCard: { type: Boolean, required: false },
            innerMoveCard: { type: Boolean, required: false }
        }
    }
</script>

<style lang="scss">
    @keyframes snow {
        0% {
            opacity: 0;
            transform: translateY(0em);
        }

        15% {
            opacity: 1;
        }

        100% {
            opacity: 1;
            transform: translateY(40.625em); // 650px à em (en supposant 16px = 1em)
        }
    }

    @keyframes moveAndBlur {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(-15px, -15px) scale(0.95) rotate(-3deg);
            }
            50% {
                transform: translate(-5px, -5px) scale(1) rotate(5deg);
            }
            75% {
                transform: translate(-10px, -10px) scale(0.95) rotate(-3deg);
            }
            100% {
                transform: translate(0, 0) scale(1);
            }
    }

    @keyframes innerMoveAndBlur {
            0% {
                transform: translate(0, 0) scale(1);
            }
            25% {
                transform: translate(-15px, -15px) scale(0.95) rotate(-5deg);
            }
            50% {
                transform: translate(-5px, -5px) scale(1) rotate(7deg);
            }
            75% {
                transform: translate(-10px, -10px) scale(0.95) rotate(-5deg);
            }
            100% {
                transform: translate(0, 0) scale(1);
            }
    }

    @keyframes spaceX {
        0%,
        100% {
            background-position: -100%;
        }
    
        50% {
            background-position: 220%;
        }
    }

    @keyframes sparkle {
        0% {
            transform: scale(1);
        }
    
        50% {
            transform: scale(1.05);
        }
    
        100% {
            transform: scale(1);
        }
    }

    .card-container {
        width: clamp(10em, 10em + 3vw, 25em);
        aspect-ratio: 2/3;
        border-radius: 20px;
        box-shadow:  -50px 50px 100px #1a1a1a,
                    50px -50px 100px #1a1a1a;

        &.move-card {
            animation: moveAndBlur 20s infinite alternate;
        }

        .card {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg,#797EF6, #1c1c1c, #1AA7EC);
            border-radius: 0.5em;
            box-shadow: 
                -10px -10px 10px #797EF6, /* purple foncé pour la gauche et le bas */
                10px -10px 10px #1AA7EC, /* purple clair pour la gauche et le bas */
                10px 10px 10px #1AA7EC, /* bleu pour le haut et le droit */
                -10px 10px 10px #4682B4; /* bleu pour le haut et le droit */
            transition : all 1s ease-in-out;


            .socialMedia {
                position: absolute;
                z-index: 10;
                left: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 1em;
                color: white;
                font-size: 1.5em;
            }

            .image {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;

                &.inner-move-card img {
                    animation: innerMoveAndBlur 20s infinite alternate;
                }
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            
            .cardContent{
                width: 100%;
                position: absolute;
                z-index: 10;
                left: 0;
                bottom: 1vh;

                &, .cardText {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .cardText {
                    width: 90%;
                    background: rgba($color: #000000, $alpha: 0.5);
                }
                    
            }

            &:hover {
                background: radial-gradient(
                            circle,
                            rgba(0, 0, 0, 0.8) 0%,
                            #1AA7EC 15%,
                            rgba(138, 79, 226, 0.75) 35%,
                            rgba(138, 43, 226, 0.5) 50%,
                            transparent 100%
                );
                animation: spaceX 25s infinite alternate, sparkle 5s infinite;
            }
        }
    }

    .box-of-star1,
    .box-of-star2,
    .box-of-star3,
    .box-of-star4 {
        width: 100%;
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        transform: translateY(0em);
        height: 43.75em; // 700px à em

        &.box-of-star1 {
            animation: snow 5s linear infinite;
        }

        &.box-of-star2 {
            animation: snow 5s -1.64s linear infinite;
        }

        &.box-of-star3 {
            animation: snow 5s -2.30s linear infinite;
        }

        &.box-of-star4 {
            animation: snow 5s -3.30s linear infinite;
        }
    }

    .star {
        width: 0.1875em; // 3px à em
        height: 0.1875em; // 3px à em
        background-color: #FFF;
        position: absolute;
        z-index: 10;
        opacity: 0.7;

        &:before {
            content: "";
            width: 0.375em; // 6px à em
            height: 0.375em; // 6px à em
            background-color: #797EF6;
            position: absolute;
            z-index: 10;
            top: 5em; // 80px à em
            left: 4.375em; // 70px à em
            opacity: 0.7;
        }

        &:after {
            content: "";
            width: 0.5em; // 8px à em
            height: 0.5em; // 8px à em
            background-color: #1AA7EC;
            position: absolute;
            z-index: 10;
            top: 0.5em; // 8px à em
            left: 10.625em; // 170px à em
            opacity: 0.9;
        }
    }

    .star-position1 {
        top: 1.875em; // 30px à em
        left: 1.25em; // 20px à em
    }

    .star-position2 {
        top: 6.875em; // 110px à em
        left: 15.625em; // 250px à em
    }

    .star-position3 {
        top: 3.75em; // 60px à em
        left: 35.625em; // 570px à em
    }

    .star-position4 {
        top: 7.5em; // 120px à em
        left: 56.25em; // 900px à em
    }

    .star-position5 {
        top: 1.25em; // 20px à em
        left: 70em; // 1120px à em
    }

    .star-position6 {
        top: 5.625em; // 90px à em
        left: 80em; // 1280px à em
    }

    .star-position7 {
        top: 1.875em; // 30px à em
        left: 92.5em; // 1480px à em
    }
</style>