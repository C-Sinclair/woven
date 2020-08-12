import { html } from 'lit-html'
import { useState, useEffect } from 'haunted'
import init, { Universe } from '../pkg/woven'

export const App = () => {
    const [gameState, setGameState] = useState('')
    
    useEffect(() => {
        const run = async () => {
            await init()
            const universe = Universe.new()
            const render = () => {
                const text = universe.render()
                setGameState(text)
                universe.tick()
                requestAnimationFrame(render)
            }
        }
        run()
    }, [])

    return html`
        <div>
            <h1>Sinclair's Game of Life</h1>
            ${gameState}
        </div>
    `
}