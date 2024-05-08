import kaboom from "kaboom";

const gameWidth = 256;
const gameHeight = 240;

kaboom({
    width: gameWidth,
    height: gameHeight,
    font: "sans-serif",
    canvas: document.querySelector("#mycanvas"),
    // background: [0, 0, 0],
    debug: true,
    crisp: true,
    letterbox: true,
    scale: 3
})

export const loadAssets = () => {
    loadSprite("knight", "./assets/sprites/knight.png")
    loadSprite("uiPanel", "./assets/sprites/samplePanel.png", {
        slice9: {
            left: 2,
            right: 2,
            top: 2,
            bottom: 2,
        }
    })

    loadFont("PressStart2P", "./assets/fonts/PressStart2P-Regular.ttf");
}

