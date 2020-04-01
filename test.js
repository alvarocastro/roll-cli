const test = require('ava');
const roll = require('@alvarocastro/roll');
const {rollCommand} = require('.');

roll.random = function () {
	return 1;
};

test('Should only show the roll value on simple mode', t => {
	t.is(rollCommand('1d6'), '6');
	t.is(rollCommand('1d6+2d10'), '26');
});

test('Should list the roll values on detailed mode', t => {
	t.is(rollCommand('1d6', true), 'Rolls:\n- 1d6: 6\n\nResult: 6');
	t.is(rollCommand('1d6+2d10', true), 'Rolls:\n- 1d6: 6\n- 2d10: 10, 10\n\nResult: 26');
	t.is(rollCommand('1d6+2d10', true), 'Rolls:\n- 1d6: 6\n- 2d10: 10, 10\n\nResult: 26');
});
