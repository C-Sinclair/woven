compile-rs:
	wasm-pack build --target web

compile-ts:
	yarn build

watch:
	find src/*.rs | entr -p 'make compile-rs'

clean:
	rm -rf build dist