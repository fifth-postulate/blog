.DEFAULT_GOAL: blog
.PHONE: clean deploy

blog:
	mkdir -p blog
	node posts.js
	node index.js

deploy: blog
	./deploy.sh

clean:
	rm -rf blog