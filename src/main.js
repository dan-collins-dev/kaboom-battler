"use strict"
import { loadAssets } from "./init.js"
import stats from "./components/statsCmp.js"

loadAssets()

debug.inspect = true

const player = add([
    sprite("knight"),
    pos(100, 100),
    body(),
    area(),
    stats(10, 4, 5)
])