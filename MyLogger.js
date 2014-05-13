//exports
module.exports.Informer = makeInformer;
module.exports.Panic = makePanic;
module.exports.Warning = makeWarning;
module.exports.CusotomLogger = makeCustomLogger;

//end exports

//require
var moment = require('moment');
var util = require('util');
var colors = require('colors');

//end require

//logger
function makeInformer(mainTitle) {
	function informer(title, obj) {
		console.log("=========== INFO ===========");
		console.log("MAIN TITLE: ".green + mainTitle);
		console.log("TIME STAMP: ".green + moment().format("YYYY/MM/DD HH:mm:ss.SS"));
		console.log("START INFO: ".green + title);
		console.log();

		var argumentsToStr = util.inspect(obj, {
			showHidden: false,
			colors: true,
			depth: null,
			customInspect: true
		});

		console.log(argumentsToStr);

		console.log();
		console.log("CLOSE INFO: ".green + title);
		console.log("============================");
		console.log();
	};

	return informer;
}

function makePanic(mainTitle) {
	function panic(title, obj) {
		console.log("=========== FAIL ===========");
		console.log("MAIN TITLE: ".red + mainTitle);
		console.log("TIME STAMP: ".red + moment().format("YYYY/MM/DD HH:mm:ss.SS"));
		console.log("START FAIL: ".red + title);
		console.log();

		var argumentsToStr = util.inspect(obj, {
			showHidden: false,
			colors: true,
			depth: null,
			customInspect: true
		});
		console.log(argumentsToStr);

		console.log();
		console.log("CLOSE FAIL: ".red + title);
		console.log("============================");
		console.log();
	};

	return panic;
}

function makeWarning(mainTitle) {
	function warning(title, obj) {
		console.log("=========== WARN ===========");
		console.log("MAIN TITLE: ".yellow + mainTitle);
		console.log("TIME STAMP: ".yellow + moment().format("YYYY/MM/DD HH:mm:ss.SS"));
		console.log("START WARN: ".yellow + title);
		console.log();

		var argumentsToStr = util.inspect(obj, {
			showHidden: false,
			colors: true,
			depth: null,
			customInspect: true
		});
		console.log(argumentsToStr);

		console.log();
		console.log("CLOSE WARN: ".yellow + title);
		console.log("============================");
		console.log();
	};

	return warning;
}

function makeCustomLogger(mainTitle, capsTitle, transFunc) {
	function warning(title, obj) {
		console.log("=========== %s ===========", capsTitle);
		console.log(transFunc("MAIN TITLE: ") + mainTitle);
		console.log(transFunc("TIME STAMP: ") + moment().format("YYYY/MM/DD HH:mm:ss.SS"));
		console.log(transFunc("START " + capsTitle + ": ") + title);
		console.log();

		var argumentsToStr = util.inspect(obj, {
			showHidden: false,
			colors: true,
			depth: null,
			customInspect: true
		});
		console.log(argumentsToStr);

		console.log();
		console.log(transFunc("CLOSE " + capsTitle + ": ") + title);
		console.log("============================");
		console.log();
	};

	return warning;
}

//end logger


/* best practice
SomeClass.prototype._funcLoggerInit = function() {
	this._funcLoggerInformer = loggerCreate(
		MyLogger.Informer("SomeClass")).bind(this);
	this._funcLoggerPanic = loggerCreate(
		MyLogger.Panic("SomeClass")).bind(this);
	this._funcLoggerWarning = loggerCreate(
		MyLogger.Warning("SomeClass")).bind(this);
	this._funcLoggerWsSend = loggerCreate(
		MyLogger.CusotomLogger("SomeClass", "SEND", colors.cyan)).bind(this);

	function loggerCreate(logger) {
		return function(title, info) {
			if (this._optionIsDebug) {
				logger(title, info);
			}
		};
	}
};*/