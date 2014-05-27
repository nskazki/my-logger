MyLogger
=======

Это логгер для удобного вывода логов в stdout.

<h5>Содержит:</h5>
 * Три преднастроенных стиля: <code>Informer</code>, <code>Warning</code>, <code>Panic</code>
 * Метод для создания кастомного стиля: <code>CusotomLogger</code>

<h5>Example:</h5>
```js
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
```

![alt tag](https://raw.githubusercontent.com/nskazki/node-MyLogger/master/testProject/myLogger.PNG)