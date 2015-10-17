var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    configuring: function() {
        this.spawnCommandSync('npm', ['init']);
        this.fs.copy(this.templatePath('Makefile'), this.destinationPath('Makefile'));
        this.fs.copy(this.templatePath('LICENSE'), this.destinationPath('LICENSE'));
        this.mkdir('src');
        this.mkdir('lib');
    },

    install: function () {
        this.npmInstall(['springbokjs-library'], { 'saveDev': true });
        this.npmInstall(['babel-runtime'], { 'saveDev': false });
    },

    end: function() {
        this.spawnCommandSync('make', ['install-config-files', 'install-scripts']);
    }
});
