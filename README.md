# DNX Foto / noVNC Toggle (`v1.3.0`)

<!-- DNX-DISCLAIMER-START -->
> **Wichtiger Hinweis / Vollständige Distanzierung (Hobby-Mod-Mode)**
>
> - **Vollständige Distanzierung:** Ich distanziere mich in jeder Hinsicht vollständig vom Projekt **OpenWebRX / OpenWebRX+** sowie dessen Entwicklern und Betreibern. Es besteht keinerlei Verbindung, Zusammenarbeit, Prüfung, Befürwortung oder Partnerschaft.
> - **Keine öffentlichen/offiziellen OpenWebRX-Plugins (nur Mod-Mode):** Bei diesem Projekt handelt es sich ausdrücklich **nicht** um ein öffentliches oder offizielles Plugin von OpenWebRX, sondern ausschließlich um einen privaten, inoffiziellen **Mod-Mode** (Eigenmodifikation).
> - **Warum bewusst kein reines Browser-JavaScript (Mod-Mode-Architektur):** Viele Funktionen (z. B. serverseitige Speicherung, Konten-/Rollenverwaltung, Profil-Synchronisation, VNC-/websockify-Brücken, geschützte Schnittstellen, Docker-/Systemintegration und stabile UI-Anpassungen) lassen sich sauber und sicher nicht allein über simples Client-JavaScript umsetzen, ohne den OpenWebRX-Kern umzubauen oder Browsergrenzen zu umgehen. Deshalb setzt dieses Projekt bewusst auf getrennte Begleitmodule, Shell-Installer und Dienste im **Mod-Mode** statt alles künstlich in reines JavaScript zu pressen.
> - **Kein öffentlicher Support & keine Haftung:** Es gibt **keinen öffentlichen Support**, keine Garantie und keine Haftung. Nutzung, Installation und Anpassung erfolgen vollständig auf eigene Gefahr (immer vorher Backups anlegen und zunächst im eigenen Testsystem prüfen).
> - **Reines Hobbyprojekt – frei nutzbar, änderbar & verbreitbar:** Dieses Projekt entsteht ausschließlich aus reinem Hobby und Interesse am gemeinsamen Funk-/SDR-Hobby. Es steht ausdrücklich frei zur Verfügung und darf frei genutzt, weiterverbreitet, verändert und verbessert werden.
<!-- DNX-DISCLAIMER-END -->

> **Important Notice / Full Disassociation (Hobby Mod-Mode Only)**
>
> - **Full Disassociation:** I completely disassociate myself from **OpenWebRX / OpenWebRX+** and its developers/maintainers. There is no affiliation, endorsement, review, or partnership of any kind.
> - **No Official/Public OpenWebRX Plugins (Mod-Mode Only):** These files are **not** official or public OpenWebRX plugins, but purely unofficial hobby modifications (*mod-mode*).
> - **Why Not Everything in Pure Browser JavaScript:** Many features (server-side persistence, account/role management, profile syncing, VNC/websockify bridges, protected endpoints, and Docker/host integration) cannot be implemented cleanly or reliably in client-side JavaScript alone without modifying the OpenWebRX core or hitting browser/security limits. That is why this project intentionally uses separate companion scripts, services, and *mod-mode* hooks rather than forcing everything into pure JS.
> - **No Public Support & No Warranty:** There is **no public support**, no warranty, and no liability. Use entirely at your own risk (always create backups and verify on a test system first).
> - **Pure Hobby Project — Free to Use, Modify & Redistribute:** Created solely out of personal hobby interest in the radio/SDR hobby; freely available to use, share, modify, and improve.

<!-- DNX-PREVIEW-START -->
## Live-Vorschau & Galerie / Live Preview (`DNX Foto / noVNC Toggle`)

![Live-Vorschau — DNX Foto / noVNC Toggle: Kopfbereich ausgeklappt (`noVNC / Foto aus`)](docs/preview.png)

| Ansicht / View | Beschreibung / Description | Screenshot |
|---|---|---|
| **Kopfbereich ausgeklappt (`noVNC / Foto aus`)** | Aktive Fluss-/noVNC-Kopfgrafik samt eingebettetem `noVNC / Foto aus`-Button im Empfänger-Panel | ![Kopfbereich ausgeklappt (`noVNC / Foto aus`)](docs/preview.png) |
| **Eingeklappter Kopfbereich & abgezogener Button** | Kopfbereich komplett geschlossen (`60 px`), mehr Platz für Spektrum/Wasserfall und Button frei über dem Spektrum platziert (`noVNC / Foto ein`) | ![Eingeklappter Kopfbereich & abgezogener Button](docs/ph-02-closed-drag.png) |
<!-- DNX-PREVIEW-END -->

Schalter `noVNC / Foto aus` / `noVNC / Foto ein` (`v1.3.0`) zum schnellen Ein- und Ausblenden des OpenWebRX-Foto-, Beschreibungs- und optionalen noVNC-Kopfbereichs.

Toggle button (`v1.3.0`) to collapse or expand the OpenWebRX top photo, station description, or embedded noVNC header area — now freely draggable anywhere on screen with double-click reset.

## Neu in v1.3.0 / What's New

- **Frei verschiebbarer Button (`dnx.photo.btn.pos.v1`):** Der Schalter lässt sich direkt per Ziehen an jede beliebige Stelle über dem Spektrum/Wasserfall schieben; ein Doppelklick dockt ihn wieder in der Empfänger-Schalterzeile an.
- **Sauberes Einklappen (`.webrx-top-container`):** Nutzt den OpenWebRX-Header (`close_rx_photo()` / `open_rx_photo()`) plus sauberes Ausblenden, sodass maximaler Platz für Spektrum & Wasserfall entsteht.
- **Universal-Installer (`install.sh`):** Docker (`CONTAINER=...`) & nativ (`TYP=normal PLUGINS=...`), inklusive `status`, `update`, `uninstall`.

## Dateien im Paket / Package Contents

| Datei | Ziel / Target | Zweck / Purpose |
|---|---|---|
| `install.sh` | Host (root) | Universal-Installer (`install`, `update`, `status`, `uninstall`) |
| `files/dnx_photo_novnc_toggle.js` | `…/receiver/dnx_photo_novnc_toggle/` | Haupt-Toggle mit Drag & Persistenz (`v1.3.0`) |
| `files/dnx_photo_row.js` | `…/receiver/dnx_photo_novnc_toggle/` | Receiver-Zeilen-Integration |
| `install-button-colors.sh` / `dnx_tool_button_colors.js` | Optional | Einheitliche Button-Statusfarben |
| `docs/` | — | 2 Funktionsscreenshots (`1600×980`) |

## Installation

```bash
chmod +x install.sh
sudo ./install.sh install
./install.sh status
sudo ./install.sh update
sudo ./install.sh uninstall
```

Backups: `/opt/dnx-photo-novnc-toggle-backups`.

