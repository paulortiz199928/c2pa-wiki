/**
 * Deutsch HowTo Daten - Schnellstartanleitung
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: "So verifizieren Sie C2PA-Inhalte",
  description: "Lernen Sie, wie Sie mit C2PA-Tools die Authentizität und Herkunft digitaler Inhalte verifizieren. Diese Anleitung behandelt drei Methoden: Online-Tools, Browser-Erweiterungen und Befehlszeilenverifizierung.",
  totalTime: "PT5M",
  steps: [
    {
      name: "Zugriff auf das Content Credentials Verifizierungstool",
      text: "Öffnen Sie einen Webbrowser und besuchen Sie https://contentcredentials.org/verify. Dies ist Adobes offizielles kostenloses Tool zur Verifizierung von C2PA-Inhalten, ohne Installation oder Kontoerstellung erforderlich.",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "Laden Sie Ihre Inhaltsdatei hoch",
      text: "Ziehen Sie ein Bild, Video oder Dokument per Drag-and-Drop auf die Verifizierungsseite. Unterstützte Formate sind JPEG, PNG, MP4, MOV, PDF und mehr. Die Datei wird lokal im Browser analysiert, um die Privatsphäre zu schützen.",
      url: "https://c2pa.wiki/de/getting-started/quick-start/"
    },
    {
      name: "Überprüfen Sie die Herkunftsinformationen",
      text: "Überprüfen Sie die angezeigten Herkunftsdaten, einschließlich Erstelleridentität, Bearbeitungshistorie, Zeitstempel, verwendeter Tools und Signaturverifizierungsstatus. Ein grünes Häkchen zeigt an, dass der Inhalt seit der Signierung nicht manipuliert wurde.",
      url: "https://c2pa.wiki/de/getting-started/quick-start/"
    },
    {
      name: "Überprüfen Sie den Signaturstatus",
      text: "Überprüfen Sie, dass die Signatur als 'Gültig' angezeigt wird. Wenn die Signatur beschädigt ist oder Warnungen anzeigt, wurde der Inhalt möglicherweise nach der Signierung geändert, oder es gibt ein Problem mit dem Signaturzertifikat. Eine gültige Signatur bestätigt die Integrität des Inhalts.",
      url: "https://c2pa.wiki/de/getting-started/faq/"
    }
  ]
};
