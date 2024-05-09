import stats from "../components/statsCmp"

export const testRoom1 = scene("test1", ({p}) => {
    p.pos.x = 32
    p.pos.y = 32
    const player = add(p)
    console.log(`Health after reducing it and passing it into the first scene: ${p.getCurrentHealth()}`)
    // use(p)
    const slime1 = add([
        sprite("slime"),
        pos(16*5, 0),
        body({isStatic: false, mass: 99999999999}),
        area(),
        stats(3, 1, 1),
        "npc"
    ])
    // const player
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

    
})

export default testRoom1