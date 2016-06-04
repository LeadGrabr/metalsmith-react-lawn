var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-react-templates');
var fileMetadata = require('metalsmith-filemetadata');
var dateInFile = require('metalsmith-date-in-filename');
var branch = require('metalsmith-branch');
var assets = require('metalsmith-assets');
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');

var metalsmith = Metalsmith(__dirname)
  .source('./content')
  //.use(function(files, metalsmith, done) {
  //  console.log(files);
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
          rtemplate: 'post.jsx'
        }
      }
    ]))
    .use(templates({
      isStatic: false,
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
  .use(
      watch({
        paths: {
          "${source}/**/*": true,
          "${source}/../templates/**/*": true,
        },
        livereload: true,
      })
  )
  .build(function (err, files) {
    if (err) {
      console.log('Error!');
      console.log(err);
      console.log(files);
      throw err;
    }
  });
