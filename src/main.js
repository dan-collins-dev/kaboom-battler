"use strict"
import { loadAssets} from "./init"
import stats from "./components/statsCmp"
import createPlayer from "./entities/player"
import testRoom1 from "./scenes/testingRoom"


loadAssets()
const p = createPlayer()

debug.inspect = true
console.log(`Current Starting Health: ${p.getCurrentHealth()}`)
p.setCurrentHealth(3);
go("test1", {p})

