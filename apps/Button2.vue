<template>
    <button class="btn">
        <a :href="link"> 
            <slot>
                <i :class="['bi', 'bi-' + icon]"></i>
            </slot>
            <p>
                {{ text }}
            </p>
            <span></span>
        </a>
    </button>
</template>

<script>
    export default {
        name: 'Button2',
        props: ['text', 'icon', 'hoverColor', 'backgroundColor', 'link']
    }
</script>

<style lang="scss">
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 0.5em;
        width: min(80vw, 15em);
        height: 3em;
        background: white;
        font-size: 1.25em;
        border: none;
        font-weight: bold;
        position: relative;
        cursor: pointer;
        transition: 0.2s ease-in-out !important;

        a {
            display: inherit;
            align-items: inherit;
            justify-content: inherit;
            gap: 0.5em;
            text-decoration: none;
            color: white;
            transition: inherit;
            text-transform: lowercase;

            &::before {
                content: '';
                position: absolute;
                inset: 2.5px;
                transition: 0.2s ease-in-out;
                background: v-bind(backgroundColor);
            }

            p, i{
                position: relative;
                z-index: 12;
            }

            span{
                position: absolute;
                inset: 0;
                display: block;

                &::before, &::after {
                    content: '';
                    position: absolute;
                    height: 4px;
                    background: v-bind(backgroundColor);
                    transition: 0.5s;
                }

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 80%;
                    width: 1em;
                    transform: translateX(-50%) skewX(325deg);
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 70%;
                    width: 1.5em;
                    transform: translateX(-50%) skewX(-325deg);
                }
            }
        }

        &:hover {
            background: v-bind(hoverColor);
            box-shadow: 0 0 35px v-bind(hoverColor);
            transform: scale(1.1);
            a{
                letter-spacing: 0.25em;
                color: v-bind(hoverColor);

                span {
                    &::before{
                        left: 25%;
                        width: 2em
                    }
                    
                    &::after {
                        right: 5%;
                        width: 2em
                    }
                }
            }
        }

        button:hover::before {
            width: 100% !important;
            z-index: 1;
        }
    }
</style>