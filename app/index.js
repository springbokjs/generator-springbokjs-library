var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    install: function () {
        this.spawnCommandSync('npm', ['init']);
        this.npmInstall(['springbokjs-library'], { 'saveDev': true });
        this.npmInstall(['babel-runtime'], { 'saveDev': false });
        this.fs.copy(this.templatePath('Makefile'), this.destinationPath('Makefile'));
        this.mkdir('src');
        this.mkdir('lib');
        this.spawnCommandSync('make', ['install-config-files', 'install-scripts']);
    }
});
