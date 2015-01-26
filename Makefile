builddir:
	mkdir -p ./build

node_modules:
	npm install

clean:
	rm -rf ./components ./node_modules ./build

build: node_modules builddir
	./node_modules/.bin/duo index.js > build/index.js
	./node_modules/.bin/duo --stdout test/index.js > build/test.js

test: node_modules build
	./node_modules/.bin/duo-test -c "make build" --build build/test.js browser -R spec

phony: build test clean build-test