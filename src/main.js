
import kaboom from "kaboom";

const gameWidth = 256;
const gameHeight = 240;

kaboom({
    width: gameWidth,
    height: gameHeight,
    font: "sans-serif",
    canvas: document.querySelector("#mycanvas"),
    background: [0, 0, 0],
    debug: true,
    crisp: true,
    // letterbox: true,
    scale: 3
})

// loadSprite("knight", "./assets/sprites/knight.png")
loadSprite("uiPanel", "./assets/sprites/samplePanel.png", {
    slice9: {
        left: 2,
		right: 2,
		top: 2,
		bottom: 2,
    }
})

// const player = add([
//     sprite("knight"),
//     pos(120, 120),
//     scale(5),
// ])

// const uiPanel = add([])

const panel = add([
	// sprite("uiPanel"),
    pos(10, 10)
])

// onMouseMove(() => {
// 	const mpos = mousePos()
// 	// Scaling the image will keep the aspect ratio of the sliced frames
// 	panel.width = mpos.x
// 	panel.height = mpos.y
// })