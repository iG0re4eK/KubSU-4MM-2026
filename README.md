# KubSU-4MM-2026

`Hello, World!`

## Установка браузерного расширения

1. Откройте Google Chrome и перейдите в `chrome://extensions/`.
2. Включите **Режим разработчика**.
3. Нажмите **Загрузить распакованное расширение** и выберите папку `extension`.
4. Нажмите `Отладка страниц service worker` для просмотра логов и отладки расширения.

---

# PYTHON

```bash
$ python -m venv .venv

# LINUX/MACOS
$ source .venv/bin/activate
# WINDOWS
$ .venv\Scripts\activate

$ where python
$ where pip

$ python -m pip install --upgrade pip
$ python main.py
```

```bash
$ pip install "fastapi[standard]"

$ fastapi dev main.py

$ curl -X 'GET' \
  'http://127.0.0.1:8000/' \
  -H 'accept: application/json'

$ curl -X 'GET' \
  'http://127.0.0.1:8000/items/123?q=python' \
  -H 'accept: application/json'
```

- [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

```bash
$ pip install ruff
$ ruff check
$ ruff format
```

```bash
$ pip install pre-commit
$ pre-commit install
```

```bash
$ pip install mypy
$ mypy .
```

```bash
$ pip install pytest
$ pytest
```

```bash
$ pip install requests
```

```bash
$ pip freeze > requirements.txt
```

# если у вас кирилица в пути, добавте ( -p ollama-local )

```bash
docker compose -p ollama-local -f docker-compose.ollama.yml up -d
```

# скачать и запустить модель

```bash
docker exec -it ollama ollama run deepseek-r1:1.5b
docker exec -it ollama ollama run gemma3:4b
docker exec -it ollama ollama run qwen2.5-coder:7b
```

# посмотреть список моделей в контейнере ollama (первое название)

```bash
docker exec -it ollama ollama list
```

# удалить модель в контейнере ollama (первое название)

```bash
docker exec -it ollama ollama rm gemma3:12b
```
