.PHONE: clean deploy

blog:
	mkdir -p blog
	node index.js

deploy: blog
	./deploy.sh

clean:
	rm -rf blog
