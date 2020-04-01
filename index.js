const roll = require('@alvarocastro/roll');

const simple = function (dice) {
	return `${roll(dice)}`;
};

const detailed = function (dice) {
	const result = roll.detailed(dice);
	const output = [];

	output.push('Rolls:');
	for (const r of result.rolls) {
		output.push(`- ${r.roll}: ${r.result.join(', ')}`);
	}

	output.push(`\nResult: ${result.result}`);

	return output.join('\n');
};

const rollCommand = function (dice, showDetailed = false) {
	return showDetailed ? detailed(dice) : simple(dice);
};

module.exports = {
	rollCommand
};

