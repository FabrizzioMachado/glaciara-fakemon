<template>
    <div class="cookiesContent" 
        :style="{ top: popUpPosition, '--imgWidth': imgWidth }"
        :class="[dynamicClass, { activated: isActivated }]">
        <div class="cookiePopUp"
                id="cookiesPopup" 
                ref="cookiesPopup"
                @mouseenter="expandCookies" 
                @mouseleave="collapseCookiesTimed">
            <p id="q-mark">?</p>
            <button class="close" @click="collapseCookies"> ✖ </button>
            <div class="img-text">
                <img :src="popUpImg[0]" :alt="popUpImg[1]" />
                <p> {{ sidePopUpText }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sidePopUp',
        props: {
            sidePopUpText: { type: String, required: true },
            popUpImg: { type: Array, required: true },
            popUpPosition: { type : String, required: true },
            imgWidth: { type: String, required: true }
        },
        data() {
            return {
                timeout: null,
                dynamicClass: "",
                isActivated: false
            }
        },

        methods: {
            expandCookies() {
                this.isActivated = true;
                clearTimeout(this.timeout);
            },
            collapseCookies() {
                this.isActivated = false;
            },
            collapseCookiesTimed() {
                this.timeout = setTimeout(this.collapseCookies, 15000);
            }
        },
    };
</script>

<style lang="scss">
    @media screen and (max-width: 768px) {
        .cookiesContent.activated {
            top: 50% !important;
        }
    }

    @media screen and (min-width: 768px) {
        .cookiesContent { 
            &.activated {
                .cookiePopUp {
                    height: auto;
                    transform: translateY(0) !important;
                }
            } 
            .cookiePopUp{
                height: calc(3em + 0.5vw) !important;
            }
        }
        .cookiesContent .img-text {
            flex-direction: row !important; 
            gap: 1em;

            p {
                padding: 0 1em 0 0;
            }
        }
    }

    .cookiesContent {
        width: fit-content;
        position: absolute;
        z-index: 200;
        left: 1vw;  

        &.activated {  
            .cookiePopUp {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #000;
                border-radius: 0.5em;
                padding: calc(1em - 1vw) calc(1.5em + 1.5vw);
                transition: width 0.25s ease-in-out;

                #q-mark {
                    display: none;
                }

                .img-text {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    left: 0;
                    background-color: #fff;
                    transform: translateX(0);

                    img {
                        width: var(--imgWidth);
                        object-fit: cover;
                    }
                    p {
                        font-size: 1.1em;
                        padding: calc(1em - 1vw) 1em 0 0;
                    }
                }

                button.close {
                    display: block;
                    width: 2em;
                    font-size: 1em;
                    color: #c0c5cb;
                    align-self: flex-end;
                    background-color: transparent;
                    border: none;
                    position: absolute;
                    right: 1.25%;
                    top: 1.25%; 
                }
            }
        }

        .cookiePopUp {
            width: calc(3em + 0.5vw);
            min-height: calc(3em + 0.5vw);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 50%;
            background: white;
            transform: none;
            overflow: hidden;
            transition: all 0.25s ease-in-out;

            #q-mark {
                font-size: 2em;
                font-weight: 900;
                color: #000;
            }

            .img-text {
                display: none;
            }

            button.close {
                display: none;
            }
        }
    }
</style>    