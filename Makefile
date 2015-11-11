
# Color helpers
C_CYAN=\x1b[34;01m
C_RESET=\x1b[0m
VERSION=`node -e "process.stdout.write(require('./package.json').version)"`
HOMEPAGE=`node -e "process.stdout.write(require('./package.json').homepage)"`

# Install dependencies
deps:
	@echo "$(C_CYAN)> installing dependencies$(C_RESET)"
	@npm install

# Bundle client-side JavaScript
bundle:
	@echo "$(C_CYAN)> bundling client-side JavaScript$(C_RESET)"
	@echo "/*! Chancer $(VERSION) | $(HOMEPAGE) */" > build/chancer.js
	@echo "/*! Chancer $(VERSION) | $(HOMEPAGE) */" > build/chancer.min.js
	@./node_modules/.bin/browserify ./lib/chancer --standalone chancer >> build/chancer.js
	@./node_modules/.bin/browserify ./lib/chancer --standalone chancer | ./node_modules/.bin/uglifyjs >> build/chancer.min.js
