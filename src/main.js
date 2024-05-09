"use strict"
import { loadAssets } from "./init.js"
import stats from "./components/statsCmp.js"
import createPlayer from "./entities/player.js"

loadAssets()

debug.inspect = true

const slime1 = add([
    sprite("slime"),
    pos(16*5, 0),
    // body(),
    area(),
    stats(3, 1, 1)
])
const player = createPlayer()
let pressed = false
onKeyDown("w", async () => {
    if (!pressed) {
        pressed = true
        await tween(player.pos.y, player.pos.y - 16, player.speed, (p) => player.pos.y = p, easings.linear)
        pressed = false
    }
})

onKeyDown("s", async () => {
    if (!pressed) {
        pressed = true
        await tween(player.pos.y, player.pos.y + 16, player.speed, (p) => player.pos.y = p, easings.linear)
        pressed = false
    }
})

onKeyDown("d", async () => {
    if (!pressed) {
        pressed = true
        await tween(player.pos.x, player.pos.x + 16, player.speed, (p) => player.pos.x = p, easings.linear)
        pressed = false
    }
})

onKeyDown("a", async () => {
    if (!pressed) {
        pressed = true
        await tween(player.pos.x, player.pos.x - 16, player.speed, (p) => player.pos.x = p, easings.linear)
        pressed = false
    }
})
