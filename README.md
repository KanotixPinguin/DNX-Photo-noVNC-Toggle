# DNX Foto / noVNC Toggle

Originaler Schalter `noVNC / Foto aus` aus der laufenden Installation.

## Funktion

Der fest positionierte Schalter blendet den OpenWebRX-Beschreibungs-/Fotobereich ein oder aus. Wenn in diesem Bereich noVNC-Ansichten, Fotos, Statusanzeigen oder weitere Inhalte eingebettet sind, werden sie gemeinsam ein- beziehungsweise ausgeblendet. Der normale Receiver und Wasserfall bleiben sichtbar.

## Installation

```bash
chmod +x install.sh
sudo ./install.sh install
```

## Status / Update / Entfernen

```bash
./install.sh status
sudo ./install.sh update
sudo ./install.sh uninstall
```

Backups: `/opt/dnx-photo-novnc-toggle-backups`.

## Hinweis

Rein privates, unabhängiges Hobbyprojekt. Kein offizielles OpenWebRX-/OpenWebRX+-Projekt oder Plugin. Keine Verbindung, Unterstützung, Prüfung oder Empfehlung durch deren Entwickler. Nutzung vollständig auf eigene Gefahr; soweit gesetzlich zulässig keine Haftung. Vorher Backups erstellen und zuerst auf einem Testsystem prüfen.

## Gemeinsame Schalterzeile

Version 1.1.0 verschiebt den vorhandenen Schalter `noVNC / Foto aus` in dieselbe Receiver-Zeile wie Gelb Hover, Gruen Tuning, DNX Status und 3D Tool. Seine ursprüngliche Ein-/Ausblendfunktion bleibt unverändert.

## Farbige Aktivzustände

Status blau, 3D Tool violett, noVNC/Foto dunkelblau und Remote VIEW türkis. Verborgene/inaktive Tools werden grau angezeigt. Der Zustand wird regelmäßig anhand des tatsächlich sichtbaren Fensters geprüft.
