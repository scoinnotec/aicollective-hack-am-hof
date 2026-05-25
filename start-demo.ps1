$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Dist = Join-Path $Root "apps\web\dist"
$Index = Join-Path $Dist "index.html"
$Port = 8088
$Url = "http://127.0.0.1:$Port/"

if (-not (Test-Path $Index)) {
  Write-Host ""
  Write-Host "Die fertige Demo wurde noch nicht gefunden:" -ForegroundColor Yellow
  Write-Host $Index
  Write-Host ""
  Write-Host "Bitte zuerst im Projektordner ausführen:"
  Write-Host "  npm install"
  Write-Host "  npm run build"
  Write-Host ""
  Read-Host "Enter drücken zum Beenden"
  exit 1
}

$PythonCommand = $null
$PythonArgs = $null

if (Get-Command py -ErrorAction SilentlyContinue) {
  $PythonCommand = "py"
  $PythonArgs = @("-3", "-m", "http.server", "$Port", "--bind", "127.0.0.1")
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  $PythonCommand = "python"
  $PythonArgs = @("-m", "http.server", "$Port", "--bind", "127.0.0.1")
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
  $PythonCommand = "python3"
  $PythonArgs = @("-m", "http.server", "$Port", "--bind", "127.0.0.1")
}

if (-not $PythonCommand) {
  Write-Host ""
  Write-Host "Python wurde nicht gefunden." -ForegroundColor Yellow
  Write-Host "Installiere Python oder öffne die Online-Version über GitHub Pages."
  Write-Host ""
  Read-Host "Enter drücken zum Beenden"
  exit 1
}

Write-Host ""
Write-Host "Hack am Hof Demo startet lokal:"
Write-Host "  $Url"
Write-Host ""
Write-Host "Dieses Fenster offen lassen. Zum Beenden Strg+C drücken."
Write-Host ""

Start-Process $Url
Push-Location $Dist
try {
  & $PythonCommand @PythonArgs
} finally {
  Pop-Location
}
