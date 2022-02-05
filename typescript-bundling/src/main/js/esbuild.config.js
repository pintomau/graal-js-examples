const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['index.ts'],
  outfile: '../resources/js/index.js',
  bundle: true,
  platform: 'browser',
  globalName: 'Mapping',
  target: 'es2021',
  keepNames: true,
  sourcemap: 'inline',
  watch: process.argv.includes('--watch') && {
    onRebuild (error, result) {
      if (error) console.error('watch build failed: ', error)
      else console.log('watch build succeeded: ', result)
    }
  }
})
