const {program} = require('commander');
const {version} = require('./package.json');
const {rollCommand} = require('.');

program
	.version(version, '-v, --version', 'Output the current version')
	.option('-d, --details', 'output detailed information of each roll')
	.option('-h, --help', 'display help')
	.arguments('<dice>')
	.action(dice => {
		console.log(rollCommand(dice, program.details));
	})
	.parse(process.argv);
