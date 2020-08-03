compile-rs:
	wasm-pack build --out-dir build/pkg

compile-ts:
	yarn build

watch:
	find src/*.rs | entr -p 'make compile-rs'