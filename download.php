<?php
if (isset($_GET['unique_id']) && isset($_GET['original_name']) && isset($_GET['edit_type'])) {
    $uniqueId = basename($_GET['unique_id']);
    $originalName = basename($_GET['original_name']);
    $editType = $_GET['edit_type'];

    // Switch-Anweisung zur Bestimmung des Verzeichnispfads und des ZIP-Dateinamens je nachdem ob der User skaliert oder konvertiert hat
    switch ($editType) {
        case 'scale':
            $dir = "./bilder/$uniqueId/{$originalName}_scaled_sizes";
            $zipFileName = "{$originalName}_scaled_sizes.zip";
            break;

        case 'webp':
            $dir = "./bilder/$uniqueId/webp_images";
            $zipFileName = "{$uniqueId}_webp_images.zip";
            break;

        default:
            // Standardverzeichnis oder Fehlerbehandlung, falls der Typ unbekannt ist
            echo "Ungültiger Bearbeitungstyp!";
            exit;
    }

    // Prüfe, ob das Verzeichnis existiert
    if (is_dir($dir)) {
        // Erstelle ein neues ZipArchive-Objekt
        $zip = new ZipArchive();

        // Öffne das Zip-Archiv zur Erstellung im temporären Verzeichnis
        $tempZipFile = tempnam(sys_get_temp_dir(), 'zip');
        if ($zip->open($tempZipFile, ZipArchive::CREATE) !== TRUE) {
            exit("ZIP-Archiv konnte nicht erstellt werden.");
        }

        // Iteriere durch alle Dateien im Verzeichnis und füge sie zum ZIP-Archiv hinzu
        $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir), RecursiveIteratorIterator::LEAVES_ONLY);

        foreach ($files as $file) {
            if (!$file->isDir()) {
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($dir) + 1);
                $zip->addFile($filePath, $relativePath);
            }
        }

        $zip->close();

        header('Content-Type: application/zip');
        header('Content-Disposition: attachment; filename="' . $zipFileName . '"');
        header('Content-Length: ' . filesize($tempZipFile));

        readfile($tempZipFile);

        unlink($tempZipFile);

        exit;
    } else {
        echo "Der angeforderte Ordner existiert nicht.";
    }
} else {
    echo "Unzureichende Parameter.";
}
?>