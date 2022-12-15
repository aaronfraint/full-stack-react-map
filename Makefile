all:
	@echo full-stack-react-map
	@echo --------------------

local-backend:
	source ./venv/bin/activate && cd ./backend &&  uvicorn app.main:app --reload

local-frontend:
	cd ./frontend && npm start

local: local-frontend local-backend