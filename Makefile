.DEFAULT_GOAL: blog
.PHONY: clean deploy

blog:
	mkdir -p docs
	cp -r assets/* docs/
	 wget -q -O docs/css/fifth-postulate.css https://raw.githubusercontent.com/fifth-postulate/fifth-postulate.github.io/master/css/fifth-postulate.css
	node posts.js
	node index.js

clean:
	rm -rf docs
