/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: Deutsch
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: 'Was ist C2PA?',
    answer: 'Kurze Antwort: C2PA ist ein offener Standard zur Verifizierung der Herkunft und des Bearbeitungsverlaufs digitaler Inhalte durch kryptografisch signierte Metadaten.
Details: Die Coalition for Content Provenance and Authenticity (C2PA) bietet eine technische Spezifikation für die Einbettung manipulationssicherer Herkunftsinformationen in Bilder, Videos, Audio und Dokumente. Sie wurde 2021 durch die Fusion von Adobes Content Authenticity Initiative und Microsofts/BBCs Project Origin gegründet.'
  },
  {
    question: 'Wie es funktioniert',
    answer: 'Kurze Antwort: C2PA bettet ein kryptografisch signiertes "Manifest" (Manifestdatei) in Mediendateien ein, das Informationen über Erstellung, Bearbeitungen und Urheberschaft enthält. Jegliche Manipulation bricht die Signatur.
Technischer Ablauf:
1. Inhalt erstellt → Manifest mit Metadaten generiert
2. Manifest mit privatem Schlüssel signiert (wie HTTPS-Zertifikate)
3. Manifest in Datei eingebettet
4. Inhalt bearbeitet → Vorheriges Manifest wird zur "Zutat"
5. Neues Manifest erstellt, das auf das alte verweist
6. Herkunftskette erhalten
7. Jeder kann Signatur verifizieren und Manipulation erkennen'
  },
  {
    question: 'Welche Probleme löst C2PA?',
    answer: 'C2PA behandelt:
- Desinformation: Nachprüfen, dass Nachrichtenfotos/-videos nicht manipuliert wurden
- KI-Inhaltstransparenz: KI-generierte oder KI-modifizierte Inhalte identifizieren
- Deepfakes: Authentizität echten Materials beweisen
- Namensnennung: Originalurheber würdigen
- Urheberrecht: Eigentum und Lizenzierung nachweisen
- Vertrauenserosion: Vertrauen in digitale Medien wiederherstellen'
  },
  {
    question: 'Ist C2PA dasselbe wie Wasserzeichen?',
    answer: 'Nein. Hauptunterschiede:

C2PA fokussiert auf Transparenz wenn vorhanden, Wasserzeichen auf Persistenz bei Angriffen.'
  },
  {
    question: 'Kann C2PA entfernt werden?',
    answer: 'Kurze Antwort: Ja, C2PA kann durch Entfernen von Metadaten, Screenshots oder Neukodierung entfernt werden. Dies ist beabsichtigt.
Warum das akzeptabel ist:
- C2PA beweist Authentizität wenn vorhanden, verhindert nicht die Entfernung
- Das Fehlen von C2PA ist selbst informativ (mögliche Manipulation)
- Ziel ist Transparenz, nicht DRM
- Plattformen können Inhalte ohne Herkunftsnachweis kennzeichnen
Analogie: Wie ein Siegel auf einer Medizinflasche - leicht zu brechen, aber man weiß, ob sie geöffnet wurde.'
  },
  {
    question: 'Verwendet C2PA Blockchain?',
    answer: 'Nein. C2PA verwendet traditionelle PKI (Public Key Infrastructure) - dieselbe Technologie wie HTTPS/SSL-Zertifikate.
Hauptpunkte:
- Verwendet X.509-Zertifikate und digitale Signaturen
- Keine Kryptowährung, Token oder Transaktionsgebühren
- Funktioniert offline (keine Internetverbindung für Verifizierung nötig)
- Viel schneller und einfacher als Blockchain
- Optional: Einige Implementierungen fügen Blockchain-Zeitstempel als Ergänzung hinzu'
  },
  {
    question: 'Welche Dateiformate unterstützt C2PA?',
    answer: 'Derzeit unterstützt:
- Bilder: JPEG, PNG, WebP, AVIF, HEIC/HEIF, TIFF, DNG, SVG, GIF
- Video: MP4, MOV, AVI
- Audio: WAV, MP3, M4A
- Dokumente: PDF
In Entwicklung: WebM, weitere Formate'
  },
  {
    question: 'Wie verifiziere ich C2PA-Inhalte?',
    answer: 'Einfachste Methode:
- Besuchen Sie https://contentcredentials.org/verify
- Laden Sie Ihre Datei hoch
- Zeigen Sie Herkunftsinformationen an
Kommandozeile:

Browser: Installieren Sie die Content Credentials-Erweiterung (Chrome/Edge)
Programmatisch: Verwenden Sie C2PA SDKs (Rust, JS, Python, Go)'
  },
  {
    question: 'Wie füge ich C2PA zu meinen Inhalten hinzu?',
    answer: 'Mit Software:
- Adobe Photoshop/Lightroom (integriert)
- Kameras: Nikon Z9/Z8, Leica M11-P, Sony Alpha-Serie
- Kommandozeile: c2patool (siehe Dokumentation)
Anforderungen:
- Zertifikat von vertrauenswürdiger CA (DigiCert, GlobalSign usw.)
- Oder selbstsigniertes Zertifikat zum Testen
Siehe: Schnellstartanleitung für Schritt-für-Schritt-Anleitungen'
  },
  {
    question: 'Was ist Nikon C2PA?',
    answer: 'Kurze Antwort: Nikon entwickelt C2PA-Unterstützung für ihre Kameras. Die Z6 III soll 2025 C2PA-Firmware erhalten, die die kamerainterne Signierung von Fotos mit Herkunftsmetadaten ermöglicht.
Funktionen (wenn verfügbar):
- Kamerainterne Signierung (keine Nachbearbeitung nötig)
- Erfasst Kameramodell, Seriennummer, Einstellungen, GPS
- Privater Schlüssel in sicherer Hardware gespeichert
- Verifiziert Authentizität ab dem Moment der Aufnahme
- Ideal für Fotojournalismus und rechtliche Nachweise
Hinweis: Stand November 2025 unterstützen Z9 und Z8 trotz früherer Ankündigungen noch kein C2PA.'
  }
];
