var sass = new Sass();
var options = {
    // Format output: nested, expanded, compact, compressed
    style: Sass.style.nested,
    // Decimal point precision for outputting fractional numbers
    // (-1 will use the libsass default, which currently is 5)
    precision: -1,
    // If you want inline source comments
    comments: false,
    // String to be used for indentation
    indent: '  ',
    // String to be used to for line feeds
    linefeed: '\n',
  };

// var scss = '$someVar: 123px; .some-selector { width: $someVar; }';
var url = 'http://127.0.0.1:8080/test.scss';

// HTTP requests are made relative to worker
var base = '../';
// equals 'http://127.0.0.1:8080/'

// the directory files should be made available in
var directory = '';

// the files to load (relative to both base and directory)
var files = [
// From PHP side the file that needs to be compiled needs to resolve all the paths 
// or deliver the concatenated content of all the files (eg `regex @import "/bla/bla"` with the actual scss content, recursively)
//   'administrator/templates/atum/scss/bootstrap.scss',
//   'media/vendor/bootstrap/scss/functions.scss'
"media/vendor/bootstrap/scss/_functions.scss",
"administrator/templates/atum/scss/_variables.scss",
"media/vendor/bootstrap/scss/_variables.scss",
"media/vendor/bootstrap/scss/mixins/_alert.scss",
"media/vendor/bootstrap/scss/mixins/_background-variant.scss",
"media/vendor/bootstrap/scss/mixins/_badge.scss",
"media/vendor/bootstrap/scss/mixins/_border-radius.scss",
"media/vendor/bootstrap/scss/mixins/_box-shadow.scss",
"media/vendor/bootstrap/scss/mixins/_breakpoints.scss",
"media/vendor/bootstrap/scss/mixins/_buttons.scss",
"media/vendor/bootstrap/scss/mixins/_caret.scss",
"media/vendor/bootstrap/scss/mixins/_clearfix.scss",
"media/vendor/bootstrap/scss/mixins/_float.scss",
"media/vendor/bootstrap/scss/mixins/_forms.scss",
"media/vendor/bootstrap/scss/mixins/_gradients.scss",
"media/vendor/bootstrap/scss/mixins/_grid-framework.scss",
"media/vendor/bootstrap/scss/mixins/_grid.scss",
"media/vendor/bootstrap/scss/mixins/_hover.scss",
"media/vendor/bootstrap/scss/mixins/_image.scss",
"media/vendor/bootstrap/scss/mixins/_list-group.scss",
"media/vendor/bootstrap/scss/mixins/_lists.scss",
"media/vendor/bootstrap/scss/mixins/_nav-divider.scss",
"media/vendor/bootstrap/scss/mixins/_pagination.scss",
"media/vendor/bootstrap/scss/mixins/_reset-text.scss",
"media/vendor/bootstrap/scss/mixins/_resize.scss",
"media/vendor/bootstrap/scss/mixins/_screen-reader.scss",
"media/vendor/bootstrap/scss/mixins/_size.scss",
"media/vendor/bootstrap/scss/mixins/_table-row.scss",
"media/vendor/bootstrap/scss/mixins/_text-emphasis.scss",
"media/vendor/bootstrap/scss/mixins/_text-hide.scss",
"media/vendor/bootstrap/scss/mixins/_text-truncate.scss",
"media/vendor/bootstrap/scss/mixins/_transition.scss",
"media/vendor/bootstrap/scss/mixins/_visibility.scss",
"media/vendor/bootstrap/scss/_root.scss",
"media/vendor/bootstrap/scss/_print.scss",
"media/vendor/bootstrap/scss/_reboot.scss",
"media/vendor/bootstrap/scss/_type.scss",
"media/vendor/bootstrap/scss/_images.scss",
"media/vendor/bootstrap/scss/_code.scss",
"media/vendor/bootstrap/scss/_grid.scss",
"media/vendor/bootstrap/scss/_tables.scss",
"media/vendor/bootstrap/scss/_forms.scss",
"media/vendor/bootstrap/scss/_buttons.scss",
"media/vendor/bootstrap/scss/_transitions.scss",
"media/vendor/bootstrap/scss/_dropdown.scss",
"media/vendor/bootstrap/scss/_button-group.scss",
"media/vendor/bootstrap/scss/_input-group.scss",
"media/vendor/bootstrap/scss/_custom-forms.scss",
"media/vendor/bootstrap/scss/_nav.scss",
"media/vendor/bootstrap/scss/_navbar.scss",
"media/vendor/bootstrap/scss/_card.scss",
"media/vendor/bootstrap/scss/_breadcrumb.scss",
"media/vendor/bootstrap/scss/_pagination.scss",
"media/vendor/bootstrap/scss/_badge.scss",
"media/vendor/bootstrap/scss/_jumbotron.scss",
"media/vendor/bootstrap/scss/_alert.scss",
"media/vendor/bootstrap/scss/_progress.scss",
"media/vendor/bootstrap/scss/_media.scss",
"media/vendor/bootstrap/scss/_list-group.scss",
"media/vendor/bootstrap/scss/_close.scss",
"media/vendor/bootstrap/scss/_modal.scss",
"media/vendor/bootstrap/scss/_tooltip.scss",
"media/vendor/bootstrap/scss/_popover.scss",
"media/vendor/bootstrap/scss/_carousel.scss",
// "media/vendor/bootstrap/scss/_utilities.scss"
];

// preload a set of files
sass.preloadFiles(base, directory, files, function callback() {
    console.log('yea')
    sass.listFiles(function callback(list) {
        var FinalCont = '';
        console.log(list)
        list.forEach(function(file, index) {
            sass.readFile(file, function callback(content) {
                // (string) content is the file's content,
                FinalCont += content
                console.log(list.length === index + 1)
                if (list.length === index + 1) {
                    var x = document.createElement('textarea')
                    x.innerText = FinalCont

                    document.body.appendChild(x)
                    // (array) list contains the paths of all registered files
                    sass.compile(FinalCont, options, function callback(result) {
                        console.log(result)
                        var y = document.createElement('div')
                        y.innerText = result.text
    
                        document.body.appendChild(y)
                    });
                }
              });
        })
      });
  });
