//Para unir los 3 fichero js en un unico fichero y que sea mas omodo de compartir.
//EN package.json
//"build:component":"ng build --prod --output-hashing none && node concat-script.js"

const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/webcomponentspoc/runtime.js',
        './dist/webcomponentspoc/polyfills.js',
        './dist/webcomponentspoc/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/f1-races-results.js');
}
build();