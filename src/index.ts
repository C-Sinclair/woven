import { component } from 'haunted';
import init from '../pkg/woven'
import { App } from './app';

const start = async () => {
    await init()
}
start()

customElements.define('app-root', component(App))