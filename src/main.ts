import './style.css'
import { isArray } from '../package/main';

console.log(isArray([]));

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
`
