var MyLogger = require('../MyLogger');
var colors = require('colors');

var infoLogger = MyLogger.Informer("permitLogServer");
var errorLogger = MyLogger.Panic("permitLogServer");
var warnLogger = MyLogger.Warning("permitLogServer");
var debugLogger = MyLogger.CusotomLogger("permitLogServer", "DEBG", colors.cyan);

infoLogger('main - info', {
	desc: 'hi, I\'m friendly information line.',
	isAllOk: true,
	isImFine: true,
	bestDay: new Date()
});

warnLogger('main - warn', {
	desc: 'Houston, we\'ve had a problem.',
	isWeDieRightNow: false,
	isDebugTime: true,
	encouragingKitten: ':3'
});

errorLogger('main - error', {
	desc: 'Panic, pls somebody halp.',
	isAllBad: true
});

debugLogger('main - debug', {
	desc: 'nonessential information for debugging.',
	commandArg: {
		line: 'hello world',
		startIndex: 0,
		endIndex: 3
	},
	callback: 'hello',
	error: null
});