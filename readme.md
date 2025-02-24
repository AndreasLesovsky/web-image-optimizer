# Web Image Optimizer

## Projektbeschreibung
Web Image Optimizer ist eine Webanwendung, mit der Benutzer Bilder hochladen, zuschneiden, in mehrere Zielgrößen skalieren und in das WebP-Format konvertieren können. Die Bildbearbeitung erfolgt über die GD-Bibliothek in PHP. Nach der Bearbeitung werden die Bilder für eine Stunde auf dem Server gespeichert und per Cron-Job gelöscht. Nach der Bearbeitung können Benutzer die Bilder herunterladen, wobei mehrere Bilder in eine ZIP-Datei komprimiert werden.

## Live Demo
Eine Live-Demo der Anwendung ist unter folgendem Link erreichbar: [https://web-image-optimizer.andreas-lesovsky-web.dev](https://web-image-optimizer.andreas-lesovsky-web.dev)

## Features
- **Uploadvorschau**: Das hochgeladene Bild wird samt Dateinamen und Abmessungen in Pixel angezeigt.
- **Zuschneiden**: Benutzer können von einem hochgeladenen Bild Pixel von allen vier Seiten wegschneiden.
- **Skalierung**: Die Bilder können in verschiedene Zielgrößen skaliert werden.
- **WebP-Konvertierung**: Bilder werden in das WebP-Format umgewandelt.
- **Speicherung und Löschung**: Bearbeitete Bilder werden für eine Stunde auf dem Server gespeichert und durch einen Cron-Job gelöscht.
- **ZIP-Komprimierung**: Wenn mehrere Bilder zum Download bereit stehen, erfolgt der Download als ZIP-Datei.
- **Responsive Design**: Die Anwendung nutzt **Bootstrap**, um eine anpassungsfähige Benutzeroberfläche zu gewährleisten.
- **Darkmode**: Es gibt einen Button, um den Darkmode ein- und auszuschalten. Der Zustand wird im **localStorage** gespeichert und beim nächsten Besuch wiederhergestellt.
- **Barrierefreiheit**: Die Anwendung berücksichtigt grundlegende Barrierefreiheitsstandards.

## Installation

1. Klone das Repository:
   ```bash
   git clone https://github.com/AndreasLesovsky/web-image-optimizer.git
   ```

2. Installiere die PHP-Abhängigkeiten:
   ```bash
   composer install
   ```

3. Installiere die Node.js-Abhängigkeiten:
   ```bash
   npm install
   ```

4. Die **GD-Bibliothek** muss in der php.ini auf dem Webserver aktiviert sein.

## Technologien
- **HTML**
- **CSS**
- **SCSS**
- **PHP**
- **Bootstrap 5**

## Funktionen im Detail

### Bildbearbeitung
- **Hochladen**: Benutzer können ihre Bilder über ein Formular hochladen.
- **Vorschau**: Benutzer bekommen eine Vorschau angezeigt, bei der das Bild selbst, der Dateiname und die Abmessungen in Pixel dargestellt werden.
- **Zuschneiden**: Benutzer können die Bilder pixelweise an allen vier Seiten zuschneiden.
- **Skalierung**: Die Bilder können in mehrere Zielgrößen skaliert werden.
- **WebP-Konvertierung**: Die Bilder können in das WebP-Format konvertiert werden.

### Speicherung und Löschung
- Bearbeitete Bilder werden für eine Stunde auf dem Server gespeichert.
- Alle Bilder werden durch einen Cron-Job nach einer Stunde automatisch gelöscht.

### ZIP-Komprimierung
- Wenn mehrere Bilder heruntergeladen werden können, erfolgt der Download als ZIP-Datei.

### Darkmode
- Der Darkmode kann durch einen Button umgeschaltet werden.
- Der Zustand des Darkmodes wird im **localStorage** gespeichert, sodass er beim nächsten Laden der Seite wiederhergestellt wird.

### Barrierefreiheit
- Es wurde besonderer Wert auf semantisches HTML, hohe Kontraste und Beschriftungen aller Icons gelegt.

## Lizenz
Dieses Projekt ist unter der [MIT Lizenz] lizenziert.
