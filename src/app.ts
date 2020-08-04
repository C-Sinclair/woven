import { html } from 'lit-html'
import { useState } from 'haunted'
import { add } from '../pkg/woven'

export const App = () => {
    const [count, setCount] = useState(0)

    return html`
        <div>
            <h1>${count}</h1>
            <button @click=${() => {
                const res = add(1,2)
                setCount(count + res)
            }}>
                Increase Count
            </button>
        </div>
    `
}