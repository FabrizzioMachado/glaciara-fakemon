<template>
    <div id ="appDiv">
        <navbar :titleLogo="titleLogo"
                :slots="slots"
                color="#A8DADC"
                navBackgroundColor="#181818"
        /> 

        <hero3D title1="Introducing" 
                titleSpan="Glaciara"
                :buttonAttributes="buttonAttributes"
                imageUrl="./imgs/glaciara/glaciara-banner.png"
        /> 

        <cardTexted title="Glaciara's Evolution Line"
                    text="To evolve into Glaciara, Froskit must reach level 30 at night while holding an Ice Crystal, a special item that enhances its icy powers. This transformation allows Froskit to become a guardian of winter, capable of communicating with winter spirits and protect lost travelers."
                    :cardImgs="cardImgs"
                    :cardTexts= "cardText"
                    :moveCard="true"
                    id="evolutionLine"
        /> 
        
        <textChunk
            title="What is Glaciara?"
            text="Glaciara is an ice-fairy Pokémon type evolved from Froskit and it's known as the Frost Whisper species, 
                    often found in snowy forests under the light of the moon. Its fur is as white as freshly fallen snow,
                    with striking blue accents that shimmer in the moonlight. <br> <br> Glaciara is said to have the ability to 
                    communicate with the spirits of the winter, guiding lost travelers back to safety."
            :icons="icons"
            textChunkImage="./imgs/glaciara/glaciara-img2.png"
            textChunkBg="'./imgs/glaciara/ice-opacity.png'"
            id="pokedexEntry"
        /> 

        <cards3D :items="slides" 
                :hoverColor="'#A8DADC'"
                titleLogo="Gallery"
                :sidePopUpContent="sidePopUpContent"
                id="gallery"
        />

        <textChunk
            title="Glaciara in Battle?"
            text="Glaciara plays a supportive role while controlling the battlefield. With moves like 
                    <strong> Aurora Veil </strong> and <strong> Reflect</strong>, it boosts team defenses under harsh conditions. 
                    <br><br>
                    <strong> Blizzard </strong> and <strong> Moonblast </strong> 
                    provide powerful STAB options, while <strong> Calm Mind </strong> strengthens its resilience. Glaciara’s 
                    <strong> Snow Cloak </strong> ability boosts its evation in hail, making it harder to hit. In double battles, it excels with hail setters, turning its sourroundings into a winter fortress for its allies."
            reverse="true"
            :icons="icons2"
            textChunkBg="'./imgs/extraIcons/fairy-opacity.png'"
            textChunkImage="../imgs/glaciara/glaciara-img6.png"
            id="competitive"
        />

        <simpleFooter :footerColors="simpleFooterContent[0]"
                        :footerIcons="simpleFooterContent[1]"
                        :footerText="simpleFooterContent[2]"/>
    </div>
</template>

<script>
    import navbar from './navbar1.vue';
    import hero3D from './Hero3D.vue';
    import textChunk from './textChunk.vue';
    import cardTexted from './cardTexted.vue';
    import cards3D from './cardsSHIP.vue';
    import simpleFooter from './simpleFooter.vue';

    export default {
        name: 'App',

        components: {
            navbar,
            hero3D,
            textChunk,
            cardTexted,
            cards3D,
            simpleFooter
        },

        data() {
            return {
                titleLogo: ["Glaciara", "#"],
                slots: [
                    {text: "Evo. Line", link: "#evolutionLine"},
                    {text: "Pokedex Entry", link: "#pokedexEntry"},
                    {text: "Gallery", link: "#gallery"},
                    {text: "Competitive", link: "#competitive"},
                ],
                buttonAttributes: {
                    text: "Get Started",
                    hoverColor: "#A8DADC",
                    backgroundColor: "#272727",
                    link: "#evolutionLine"
                },
                cardImgs: [
                    "./imgs/glaciara/froskit-background.png",
                    "./imgs/glaciara/glaciara-img1.png",
                ],
                cardText: ["Froskit", "Glaciara"],
                icons: [
                    { icon: "./imgs/Icons/ice.svg", iconSpan: "Ice", shadowColor: "#A8DADC", iconBorderRadius: true },
                    { icon: "./imgs/Icons/fairy.svg", iconSpan: "Fairy", shadowColor: "#D685AD", iconBorderRadius: true },
                ],
                icons2: [
                    { icon: "./imgs/extraIcons/weight.svg", iconSpan: "13 kg" },
                    { icon: "./imgs/extraIcons/height.svg", iconSpan: "0.8 m" },
                    { icon: "./imgs/extraIcons/gender.svg", iconSpan: "Ratio 1:1" },
                ],
                slides: [
                    {src: "./imgs/glaciara/glaciara-img5.png"},
                    {src: "./imgs/glaciara/glaciara-img4.png"},
                    {src: "./imgs/glaciara/glaciara-img3.png"},
                ],
                sidePopUpContent : [
                    "Glaciara can freeze the air around it to create an icy shield! The colder the environment, the stronger it is, making it unstoppable in snow-covered mountains!",
                    ['./imgs/Icons/ice.svg', 'Glaciara can freeze!'],
                    "60%",
                    '2.5em'
                ],
                simpleFooterContent: [
                    ["#373737", "aquamarine"],
                    [   {icon: "youtube", link: "https://www.youtube.com/@CipherosX/featured"},
                        {icon: "instagram", link: "https://www.instagram.com/cipherosx/"},
                        {icon:"github", link: "https://github.com/FabrizzioMachado"},
                        {icon: "medium", link: "https://medium.com/@fabrizziomachado10"}
                    ],
                    "2024 Glaciara. All rights reserved.",
                ]
            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
        overflow-y: scroll;        
    }
    #appDiv{
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        background: #181818;        
    }
</style>