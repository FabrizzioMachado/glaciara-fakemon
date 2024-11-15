<template>
    <div class="text-chunk" 
        :style="{
            backgroundImage: `url(${textChunkBg})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundColor: '#181818'
        }" 
        :class="{ 'reverse': reverse }"
    >
        <div class="text-chunk-container">
            <div class="text-chunk-content">
                <h2> {{ title }}</h2>
                <p v-html="text"></p>

                <div class="text-chunk-custom-icons">
                    <div v-for="(icon, iconIndex) in  icons" :key="iconIndex" 
                            class="text-chunk-custom-icon" 
                            :class="`text-chunk-custom-icon-${iconIndex + 1}`"
                            :style="{ '--shadowColor': icon.shadowColor || 'transparent' }">
                            <img :style="{ 'border-radius': icon.iconBorderRadius ? '50%' : '0' }" :src="icon.icon" :alt="icon.iconSpan">
                        <span> {{ icon.iconSpan }} </span>
                    </div>
                </div>
            </div>
            <div class="image">
                <img :src="textChunkImage" alt=""  v-if="textChunkImage">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextChunk',

        props: {
            title:{ type: String, required: true },
            text: { type: String, required: true },
            textChunkImage: { type: String, required: true },
            textChunkBg: { type: String, required: true },
            icons: { type: Array, required: false },
            reverse: { type: Boolean , default: false },
        },

        mounted() {
            console.log("Icons array:", this.icons);
        },

        watch: {
            icons(newVal) {
                console.log("Icons prop updated in textChunk.vue:", newVal);
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .text-chunk {
        height: 750px;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        color: hsl(214, 30%, 90%);

            &, & * {
                font-family: "Poppins", serif;
                font-weight: 500;
            }

            .text-chunk-container {
                width: min(90%, 90em);
                height: 100%;
                margin: auto;
                display: grid;
                grid-template-columns: 1fr; 
                text-align: justify;
                padding: clamp(1em, 0.5em + 0.5vw, 5em);
                gap: 1em;

                .text-chunk-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding-left: calc(1.5vw);
                    padding-top:  calc(0.25vw);

                    h2 {
                        font-size: clamp(1em, 2vw + 1.25em, 3.25em);
                        font-family: "Josefin Sans";
                        font-weight: bold;
                        word-wrap: break-word;
                        margin-bottom: 0.5em;
                    }

                    p {
                        font-size: clamp(1em, 1vw + 0.45em, calc(1.75em - 0.1vh));
                        z-index: 10;
                    }

                    .text-chunk-custom-icons {
                        width: 100%;
                        display: flex;
                        padding: calc(2em  - 0.25vw) calc(1em + 1vw);
                        justify-content: space-around;
                        overflow: visible;

                        .text-chunk-custom-icon {
                            width: 100%;        
                            display: grid;
                            text-align: center;
                            justify-content: center;
                            position: relative;
                            gap: 0.5em;


                            img {
                                width: clamp(2em, 2.5vw + 2em, 5em);
                                position: relative;
                                object-fit: contain;
                                background: transparent;
                                box-shadow: 0 0 2.5em 0.25em var(--shadowColor); // Usa box-shadow per l'effetto
                            }

                            span {
                                z-index: 10;
                            }
                        }
                    }
                }
                
                .image {
                    width: 100%;
                    object-fit: cover;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    img {
                        width: clamp(20em, 50vw, 90%);
                        border-radius: 8px;
                    }
                }
            }
    }

    @media screen and (min-width: 1200px) {
        .text-chunk-content {
            text-align: left !important;
            align-items: start !important;
            margin-left: 1.5em;

            .text-chunk-custom-icons {
                transform: translateX(-1em);
            }
        }

        .text-chunk.reverse {
            .text-chunk-content {
                order: 2;
                align-items: end !important;
                text-align: right !important;
                padding-left: 0 !important;
                padding-right: calc(1.5vw);

                .text-chunk-custom-icons {
                    transform: translateX(1em);
                }
            }
        }
        .text-chunk.reverse, .text-chunk{
            .text-chunk-container {
                grid-template-columns: 1fr 1fr !important;
            }
        }   
    }
</style>