SHELL := /bin/bash
.DEFAULT_GOAL = help


## ============ HELP ============
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


## ============ SERVER ============
serv: ## Launch Angular local server
	cd pwa && $(MAKE) ang-serv
.PHONY: serv

stop: ## Stop Angular local server
	cd pwa && $(MAKE) ang-stop-serv
.PHONY: stop

cc: ## Clear Angular cache
	cd pwa && $(MAKE) ang-clear-cache
.PHONY: cc