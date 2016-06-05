import Metalsmith from 'metalsmith'
import markdown from 'metalsmith-markdown'
import permalinks from 'metalsmith-permalinks'
import templates from 'metalsmith-react-templates'
import fileMetadata from 'metalsmith-filemetadata'
import dateInFile from 'metalsmith-date-in-filename'
import branch from 'metalsmith-branch'
import assets from 'metalsmith-assets'
import serve from 'metalsmith-serve'
import fs from 'fs'
import browserify from 'browserify'
import babelify from 'babelify'
import metadata from 'metalsmith-metadata-directory'

const metalsmith = Metalsmith(__dirname)
  .use(metadata({
    directory: './src/data/**/*.json'
  }))
  .source('./content')
  //.use(function(files, metalsmith, done) {
  //  console.log(files)
  //})
  .clean(true)
  .destination('./public')
  .use(branch('**/*.md')
    .use(markdown())
  )
  .use(branch('**/*.{md,html}')
    .use(dateInFile())
    //.use(permalinks({
    //  pattern: ':date/:title',
    //  date: 'YYYY'
    //}))
    .use(fileMetadata([
      {
        pattern: '**/*.{md,html}',
        preserve: true,
        metadata: {
          section: 'blog',
          rtemplate: 'post.js'
        }
      }
    ]))
    .use(templates({
      isStatic: false,
      baseFile: 'base.html',
      directory: './src/templates',
      babel: true
    }))
  )
  .use(assets({
      source: './assets', // relative to the working directory
      destination: './' // relative to the build directory
  }))
  .use(serve({
        port: 8081
  }))
  .build((err, files) => {
    if (err) {
      console.log('Error!')
      console.log(err)
      console.log(files)
      throw err
    }
    browserify({ debug: true })
            .transform(babelify)
            .bundle()
            .on("error", err => {
                console.log(`Error: ${err.message}`)
            })
            .pipe(fs.createWriteStream('./public/bundle.js'))
  })
