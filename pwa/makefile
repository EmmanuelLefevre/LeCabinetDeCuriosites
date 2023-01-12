SHELL := /bin/bash
.DEFAULT_GOAL = help


## ============ HELP ============
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


## ============ SERVER ============
ang-serv: ## Launch Angular local server
	ng serve -o
.PHONY: ang-serv

ang-stop-serv: ## Stop Angular local server
	npx kill-port 4200
.PHONY: stop-ang-serv

ang-clear-cache: ## Clear Angular cache
	npm cache clear --force
.PHONY: ang-clear-cache
