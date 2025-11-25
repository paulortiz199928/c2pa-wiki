/**
 * Deutsch FAQ Daten (Kurzversion)
 *
 * Enthält 5 wichtigste Fragen, optimiert für deutsche Suche
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "Was ist C2PA?",
    answer: "C2PA (Coalition for Content Provenance and Authenticity) ist ein offener Standard zur Verifizierung der Herkunft und des Bearbeitungsverlaufs digitaler Inhalte durch kryptografisch signierte Metadaten. Sie wurde 2021 durch die Fusion von Adobes Content Authenticity Initiative und Microsofts/BBCs Project Origin gegründet. C2PA bietet eine technische Spezifikation für die Einbettung manipulationssicherer Herkunftsinformationen in Bilder, Videos, Audio und Dokumente."
  },
  {
    question: "Wie funktioniert es?",
    answer: "C2PA bettet ein kryptografisch signiertes 'Manifest' (Manifestdatei) in Mediendateien ein, das Informationen über Erstellung, Bearbeitungen und Urheberschaft enthält. Jegliche Manipulation bricht die Signatur. Technischer Ablauf: 1) Inhalt erstellt → Manifest mit Metadaten generiert; 2) Manifest mit privatem Schlüssel signiert (wie HTTPS-Zertifikate); 3) Manifest in Datei eingebettet; 4) Inhalt bearbeitet → Vorheriges Manifest wird zur 'Zutat'; 5) Neues Manifest erstellt, das auf das alte verweist; 6) Herkunftskette erhalten; 7) Jeder kann Signatur verifizieren und Manipulation erkennen."
  },
  {
    question: "Kann C2PA entfernt werden?",
    answer: "Ja, C2PA kann durch Entfernen der Metadaten, Screenshots oder Neucodierung entfernt werden. Dies ist beabsichtigt. C2PA beweist Authentizität wenn vorhanden, verhindert aber nicht das Entfernen. Das Fehlen von C2PA ist selbst eine Information (mögliche Manipulation). Das Ziel ist Transparenz, nicht DRM. Plattformen können Inhalte ohne Herkunft kennzeichnen."
  },
  {
    question: "Verwendet C2PA Blockchain?",
    answer: "Nein. C2PA verwendet traditionelle PKI (Public Key Infrastructure) - die gleiche Technologie wie HTTPS/SSL-Zertifikate. Wichtige Punkte: Verwendet X.509-Zertifikate und digitale Signaturen; Keine Kryptowährungen, Token oder Transaktionsgebühren; Funktioniert offline (Verifizierung erfordert kein Internet); Viel schneller und einfacher als Blockchain; Optional: Einige Implementierungen fügen Blockchain-Zeitstempel als Ergänzung hinzu."
  },
  {
    question: "Was kostet C2PA?",
    answer: "Spezifikation: Kostenlos und offen (keine Lizenzgebühren). Implementierungskosten: Open-Source-SDKs kostenlos; CA-Zertifikate ca. 200-500 $/Jahr (S/MIME-Zertifikate 200-300 $/Jahr, Dokumentsignaturzertifikate 300-500 $/Jahr); HSM für Schlüsselspeicherung 500-5000+ $ (optional); Entwicklungszeit variiert je nach Situation. Kostenlose Tools: c2patool, SDKs, Web-Verifizierung - alles kostenlos."
  }
];
