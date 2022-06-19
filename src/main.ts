import './style.css'
import { isArray } from '../lib/main';

console.log(isArray([]));

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
`
