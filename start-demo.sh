#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
DIST_DIR="$ROOT_DIR/apps/web/dist"
INDEX_FILE="$DIST_DIR/index.html"
PORT=8088
URL="http://127.0.0.1:$PORT/"

if [ ! -f "$INDEX_FILE" ]; then
  echo ""
  echo "Die fertige Demo wurde noch nicht gefunden:"
  echo "$INDEX_FILE"
  echo ""
  echo "Bitte zuerst im Projektordner ausführen:"
  echo "  npm install"
  echo "  npm run build"
  echo ""
  exit 1
fi

if command -v python3 >/dev/null 2>&1; then
  PYTHON_CMD="python3"
elif command -v python >/dev/null 2>&1; then
  PYTHON_CMD="python"
else
  echo ""
  echo "Python wurde nicht gefunden."
  echo "Installiere Python oder öffne die Online-Version über GitHub Pages."
  echo ""
  exit 1
fi

echo ""
echo "Hack am Hof Demo startet lokal:"
echo "  $URL"
echo ""
echo "Dieses Terminal offen lassen. Zum Beenden Strg+C drücken."
echo ""

if command -v open >/dev/null 2>&1; then
  open "$URL" >/dev/null 2>&1 || true
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL" >/dev/null 2>&1 || true
fi

cd "$DIST_DIR"
"$PYTHON_CMD" -m http.server "$PORT" --bind 127.0.0.1
