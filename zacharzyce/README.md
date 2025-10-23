# Strona Stowarzyszenia Nabywców Lokali - Apartamenty Kościuszki

Profesjonalna strona internetowa stowarzyszenia zgodna z RODO i wymogami bezpieczeństwa danych.

## 📁 Pliki strony

- `index.html` - Strona główna
- `kontakt.html` - Strona kontaktowa (osobna podstrona)
- `styles.css` - Arkusz stylów CSS
- `script.js` - Skrypty JavaScript
- `logo.jpg` - Logo stowarzyszenia

## 🚀 Uruchomienie strony

1. Wszystkie pliki umieść w jednym folderze
2. Otwórz plik `index.html` w przeglądarce
3. Strona działa bez potrzeby serwera (statyczna)

## ✨ Funkcjonalności

### Strona główna (index.html)
- Sekcja hero z hasłem przewodnim
- Historia i przedstawienie stowarzyszenia
- Misja i cele działania
- Sekcja o regulaminie
- Pełna informacja RODO
- Sposoby pomocy stowarzyszeniu
- Podstawa prawna działania

### Strona kontaktowa (kontakt.html)
- Pełne dane kontaktowe
- Interaktywny formularz kontaktowy
- FAQ (najczęściej zadawane pytania)
- Informacje RODO w formularzu

### Zgodność z RODO
✅ Banner informacyjny o cookies
✅ Pełna sekcja polityki prywatności
✅ Zgoda na przetwarzanie danych w formularzu
✅ Informacja o prawach użytkownika
✅ Dane kontaktowe w sprawach RODO
✅ Transparentny administrator danych

### Bezpieczeństwo
✅ Brak zewnętrznych skryptów śledzących
✅ Lokalne przechowywanie zgód (localStorage)
✅ Walidacja formularzy po stronie klienta
✅ Dostępność (WCAG)
✅ Responsywność (mobile-first)

## 🎨 Wygląd i UX

- **Kolory firmowe**: 
  - Główny: #1a5f7a (niebieski)
  - Akcent: #f27329 (pomarańczowy)
  - Dodatkowy: #57a773 (zielony)

- **Responsywność**: Pełna obsługa urządzeń mobilnych
- **Nawigacja**: Sticky navbar z hamburger menu na mobile
- **Animacje**: Subtelne efekty przy scrollowaniu
- **Ikony**: Emoji dla lepszej czytelności

## 📱 Funkcje JavaScript

1. **Zarządzanie cookies**
   - Banner informacyjny
   - Przechowywanie zgody w localStorage
   - Automatyczne ukrywanie po akceptacji

2. **Nawigacja mobilna**
   - Hamburger menu
   - Smooth scrolling
   - Automatyczne zamykanie po kliknięciu

3. **Formularz kontaktowy**
   - Walidacja pól w czasie rzeczywistym
   - Sprawdzanie formatu email
   - Wymagana zgoda RODO
   - Komunikaty sukcesu/błędu

4. **Dodatkowe funkcje**
   - Przycisk "wróć na górę"
   - Podświetlanie aktywnej sekcji w menu
   - Animacje elementów przy scrollowaniu

## 🔧 Dostosowanie

### Zmiana kolorów
Edytuj zmienne CSS w pliku `styles.css`:
```css
:root {
    --primary-color: #1a5f7a;
    --secondary-color: #f27329;
    --accent-color: #57a773;
}
```

### Zmiana treści
- Edytuj pliki HTML w edytorze tekstu
- Zachowaj strukturę sekcji
- Pamiętaj o aktualizacji linków

### Dodanie plików PDF
W sekcjach "Regulamin" i "RODO" dodaj linki do plików PDF:
```html
<a href="regulamin.pdf" class="btn-secondary">Pobierz regulamin</a>
```

## 📧 Konfiguracja formularza

Aktualnie formularz zapisuje dane lokalnie (demo). 
Aby wysyłać emaile:

1. Potrzebujesz backend (PHP, Node.js, Python)
2. Lub użyj usługi: Formspree, EmailJS, Web3Forms
3. Przykład z EmailJS w `script.js` (zakomentowany)

## 🌐 Publikacja strony

### Hosting darmowy:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Hosting płatny:
- home.pl
- OVH
- Nazwa.pl

### Kroki publikacji:
1. Zapakuj wszystkie pliki
2. Wgraj na serwer FTP lub użyj git
3. Skonfiguruj domenę
4. Dodaj certyfikat SSL (HTTPS)

## 📋 Checklistа przed publikacją

- [ ] Sprawdź wszystkie linki
- [ ] Dodaj pliki PDF (regulamin, polityka)
- [ ] Skonfiguruj formularz email
- [ ] Przetestuj na urządzeniach mobilnych
- [ ] Sprawdź czas ładowania
- [ ] Dodaj Google Analytics (opcjonalnie)
- [ ] Skonfiguruj domyślną stronę błędu 404
- [ ] Dodaj plik robots.txt i sitemap.xml

## 🔐 RODO - Co jest zaimplementowane

1. ✅ Informacja o administratorze danych
2. ✅ Cel przetwarzania danych
3. ✅ Prawa użytkownika (dostęp, sprostowanie, usunięcie)
4. ✅ Zgoda na przetwarzanie w formularzu
5. ✅ Kontakt w sprawach RODO
6. ✅ Informacja o cookies
7. ✅ Link do pełnej polityki prywatności
8. ✅ Informacja o prawie wniesienia skargi do UODO

## 📞 Wsparcie

W razie pytań lub problemów:
- Email: stowarzyszeniekosciuszki@gmail.com
- Sprawy RODO: rodo@apartamentykosciuszki.pl

## 📄 Licencja

Strona stworzona dla Stowarzyszenia Nabywców Lokali "Apartamenty Kościuszki Wrocław – Zacharzyce"
© 2025 Wszelkie prawa zastrzeżone

---

**Uwaga**: Przed publikacją strony koniecznie skonsultuj pełną treść polityki prywatności z prawnikiem lub specjalistą RODO, aby upewnić się, że spełnia wszystkie wymagania prawne dla Twojej organizacji.