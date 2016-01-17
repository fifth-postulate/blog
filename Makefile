.DEFAULT_GOAL: blog
.PHONE: clean deploy

blog:
	mkdir -p blog
	node posts.js

deploy: blog
	./deploy.sh

clean:
	rm -rf blog
