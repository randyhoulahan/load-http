const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = { output: { dir: './dist/browser' } }
const ssr    = { output: { dir: './dist/esm' } }


const browserEsmPackages = {
  'ky-universal': 'https://unpkg.com/ky@~0.23'
}

export default {
  legacy, modern, ssr, browserEsmPackages
}