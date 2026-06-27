"use client";
import LegalTemplate from "./LegalTemplate";

export default function Impressum() {
  return (
    <LegalTemplate title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>CFC Wetzlar<br />Garbenheimer Str. 20A<br />35582 Wetzlar</p>
      
      <h2>Kontakt</h2>
      <p>Telefon: +49 (0) 176 4212513<br />E-Mail: info@cfc-wetzlar.de</p>
      
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE XXX XXX XXX</p>
      
      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      
      <h2>Haftung für Inhalte</h2>
      <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    </LegalTemplate>
  );
}
