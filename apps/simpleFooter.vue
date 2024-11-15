<template>
    <footer :style="{ '--footer-bg-color': footerColors[0], '--footer-hover-color': footerColors[1] }">
        <div class="footer__Container">
            <div class="social-media">
                <a v-for="(icon, index) in footerIcons" :key="index" :href="icon.link" target="_blank">
                    <i :class="['bi', 'bi-' + icon.icon]"></i>
                </a>
            </div>
            <p>&copy; {{  footerText }} </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'simpleFooter',
        props: {
            footerColors: { type: Array, required: true },
            footerIcons: { type: Array, required: true },
            footerText: { type: String, required: true }
        }
    }
</script>

<style lang="scss">
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
    footer {
        width: 100%;
        background: var(--footer-bg-color);
        padding: 0.75rem 0;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: white;
        bottom: 0;
        transform: translateY(calc(-1.25em + 0.5vh));

        .footer__Container {
            display: flex;
            justify-content: center;
            width: min(90%, 90em);
            
            .social-media a {
                color: white;
                
                &:hover {
                    color: var(--footer-hover-color);
                }
                margin: 0 0.5rem;
                font-size: 1rem;
            }
            p {
                display: none;
            }

            @media screen and (min-width: 768px) {
                justify-content: space-between;
                p {
                    display: block;
                }
            }
        }
    }    
</style>
