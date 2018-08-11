const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
          return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
  });
};

module.exports.mkdir = () => {
  fs.mkdir('mkdir?',function(err){
    if (err) {
      return console.error(err);
      }
      console.log("Directory created successfully!");
  });
};

module.exports.touch = () => {
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};
