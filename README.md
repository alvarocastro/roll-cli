# roll-cli

[![NPM](https://img.shields.io/npm/v/@alvarocastro/roll-cli.svg)](https://www.npmjs.com/package/@alvarocastro/roll-cli)
[![Build Status](https://travis-ci.com/alvarocastro/roll-cli.svg?branch=master)](https://travis-ci.com/alvarocastro/roll-cli)
[![Maintainability](https://badgen.net/codeclimate/maintainability/alvarocastro/roll-cli)](https://codeclimate.com/github/alvarocastro/roll-cli/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/roll-cli/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/roll-cli?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Roll your dices directly from the command line!

It supports the dice notation in the form of `AdX`, like `1d6` and even simple transforms like `2d10+5`, but it also supports more complex rolls like `1d8-1d6/2`.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [Related](#related)

## Install

```bash
npm install -g @alvarocastro/roll-cli
```

## Usage

```bash
$ roll 2d6
7
```

```bash
$ roll 1d6+1d10
12
```

It can also display detailed information about rolls being made:

```bash
$ roll -d 2d6+1d10+3
Rolls:
- 2d6: 2, 5
- 1d10: 8

Result: 18
```

### roll [-d] \<dice\>

#### dice

A dice notation string. It supports `%` for percentile dices (`1d%` is the same as `1d100`).
It also supports basic math: `+`, `-`, `*` and `/`.

#### Options

##### -d, --details

Used to output detailed information about the roll. Useful to check doubles, critical hits (or failures)

##### -v, --version

Displays the current installed version of this utility.

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)

## Related

* [@alvarocastro/roll](https://github.com/alvarocastro/roll) - JavaScript library used to parse and roll the dices.
