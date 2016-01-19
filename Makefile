.DEFAULT_GOAL: blog
.PHONE: clean deploy

blog:
	mkdir -p blog
	cp -r assets/* blog/
	 wget -q -O blog/css/fifth-postulate.css https://raw.githubusercontent.com/fifth-postulate/fifth-postulate.github.io/master/css/fifth-postulate.css
	node posts.js
	node index.js

deploy: blog
	./deploy.sh

clean:
	rm -rf blog
