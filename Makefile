all:
	ender refresh
	ender compile `find ./lib -iname \*.js -mindepth 2` ./lib/init.js --output app.js