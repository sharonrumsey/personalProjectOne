var jade = require('jade');
var fn = jade.compile(jadeTemplate);
var htmlOutPut = fn({
	maintainer: {
		name: 'Sharon Rumsey',
		twitter: 'Shazza Dev Academy'
	}
})
