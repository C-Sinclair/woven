import { html } from 'lit-html'
import { useState } from 'haunted'
import { greet } from '../build/pkg/woven'

export const App = () => {
    const [count, setCount] = useState(0)


    return html`
        <div>
            <h1>${count}</h1>
            <button @click=${() => {
                greet()
                setCount(count + 1)
            }}>
                Increase Count
            </button>
        </div>
    `
}