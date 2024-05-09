import stats from "../components/statsCmp"

/**
 * Creates the Player object
 * @returns The Player object
 */
const createPlayer = () => {
    let player = add([
        sprite("knight"),
        pos(0, 0),
        body(),
        area(),
        stats(10, 4, 5),
        {
            speed: 0.25,
        }
    ])

    return player;
}

export default createPlayer