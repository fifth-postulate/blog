.PHONE: clean

blog:
	mkdir -p blog
	node index.js

clean:
	rm -rf blog
