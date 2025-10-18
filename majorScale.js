// Translations
const translations = {
    en: {
        title: '🎵 The Major Key Chords Chart',
        backToHome: '← Back to paveu.pl',
        exerciseMode: 'Exercise Mode',
        allScales: 'All scales (15 scales)',
        selectScales: 'Select scales to practice',
        practiceMode: 'Practice Mode',
        freePractice: 'Free Practice - Fill any cells',
        quizMode: 'Quiz Mode - Fill one random cell at a time',
        difficultyLevel: 'Difficulty Level',
        allChords: 'All chords',
        onlySelectedChords: 'Only chords from selected scales',
        validationMode: 'Validation Mode',
        instantValidation: 'Instant validation',
        manualValidation: 'Manual validation',
        practiceTimer: 'Practice Timer',
        noTimer: 'No timer',
        numberOfMinutes: 'Number of minutes:',
        theme: 'Theme',
        lightMinimal: 'Light Minimal',
        darkMinimal: 'Dark Minimal',
        start: 'START',
        features: '✨ Features',
        feature1: '<strong>15 Major Scales</strong> - Practice all major scales from C to Cb',
        feature2: '<strong>Drag & Drop</strong> - Drag chords from the bank or click cells to select',
        feature3: '<strong>Keyboard Navigation</strong> - Press letter keys to jump to chords in dropdown',
        feature4: '<strong>Custom Practice</strong> - Choose specific scales or practice all at once',
        feature5: '<strong>Smart Validation</strong> - Instant feedback or manual checking',
        feature6: '<strong>Color-Coded Columns</strong> - I/IV/V (red), II/III/VI (blue), VII (green)',
        feature7: '<strong>Quick Reset</strong> - Clear individual cells, entire scales, or all at once',
        feature8: '<strong>Two Themes</strong> - Light and dark minimal modes',
        menu: '← Menu',
        reset: '🔄 Reset',
        check: '✓ Check',
        chordBank: 'Chord Bank (Drag & Drop)',
        scale: 'Scale',
        scaleShort: 'S',
        numAccidentals: 'Num #/b',
        tonic: 'Tonic',
        tonicShort: 'To',
        supertonic: 'Supertonic',
        supertonicShort: 'Su',
        mediant: 'Mediant',
        mediantShort: 'Me',
        subdominant: 'Subdominant',
        subdominantShort: 'Sd',
        dominant: 'Dominant',
        dominantShort: 'Do',
        submediant: 'Submediant',
        submediantShort: 'Sm',
        leadingTone: 'Leading Tone',
        leadingToneShort: 'LT',
        unison: 'Unison',
        unisonShort: 'U',
        octave: 'Octave S',
        octaveShort: 'OS',
        major: 'Major',
        majorShort: 'Ma',
        minor: 'Minor',
        minorShort: 'Mi',
        diminished: 'Dim',
        diminishedShort: 'Di',
        filled: 'Filled',
        correct: 'Correct',
        congratulations: '🎉 Congratulations! All answers are correct!',
        selectAtLeastOne: 'Please select at least one scale!',
        validMinutes: 'Please enter a valid number of minutes (1-120)',
        timeUp: '⏰ Time is up! Practice session completed.',
        resetConfirm: 'Reset will restart the timer. Continue?',
        clearRowTitle: 'Clear all chords in this scale'
    },
    pl: {
        title: '🎵 Tabela Akordów w Tonacji Durowej',
        backToHome: '← Powrót do paveu.pl',
        exerciseMode: 'Tryb ćwiczenia',
        allScales: 'Wszystkie gamy (15 gam)',
        selectScales: 'Wybierz gamy do ćwiczenia',
        practiceMode: 'Tryb praktyki',
        freePractice: 'Swobodne ćwiczenie - Wypełnij dowolne komórki',
        quizMode: 'Tryb quiz - Wypełniaj po jednej losowej komórce',
        difficultyLevel: 'Poziom trudności',
        allChords: 'Wszystkie akordy',
        onlySelectedChords: 'Tylko akordy z wybranych gam',
        validationMode: 'Tryb walidacji',
        instantValidation: 'Walidacja natychmiastowa',
        manualValidation: 'Walidacja manualna',
        practiceTimer: 'Timer ćwiczeń',
        noTimer: 'Bez timera',
        numberOfMinutes: 'Liczba minut:',
        theme: 'Motyw',
        lightMinimal: 'Jasny minimalny',
        darkMinimal: 'Ciemny minimalny',
        start: 'START',
        features: '✨ Funkcje',
        feature1: '<strong>15 Gam Durowych</strong> - Ćwicz wszystkie gamy durowe od C do Cb',
        feature2: '<strong>Przeciągnij i upuść</strong> - Przeciągaj akordy z banku lub klikaj komórki',
        feature3: '<strong>Nawigacja klawiaturą</strong> - Naciśnij klawisz literowy, aby przejść do akordu',
        feature4: '<strong>Własne ćwiczenia</strong> - Wybierz konkretne gamy lub ćwicz wszystkie naraz',
        feature5: '<strong>Inteligentna walidacja</strong> - Natychmiastowa informacja zwrotna lub sprawdzanie manualne',
        feature6: '<strong>Kolorowe kolumny</strong> - I/IV/V (czerwony), II/III/VI (niebieski), VII (zielony)',
        feature7: '<strong>Szybki reset</strong> - Wyczyść pojedyncze komórki, całe gamy lub wszystkie naraz',
        feature8: '<strong>Dwa motywy</strong> - Jasny i ciemny tryb minimalny',
        menu: '← Menu',
        reset: '🔄 Reset',
        check: '✓ Sprawdź',
        chordBank: 'Bank akordów (Przeciągnij i upuść)',
        scale: 'Gama',
        scaleShort: 'G',
        numAccidentals: 'Liczba #/b',
        tonic: 'Tonika',
        tonicShort: 'To',
        supertonic: 'Supertonika',
        supertonicShort: 'Su',
        mediant: 'Medianta',
        mediantShort: 'Me',
        subdominant: 'Subdominanta',
        subdominantShort: 'Sd',
        dominant: 'Dominanta',
        dominantShort: 'Do',
        submediant: 'Submedianta',
        submediantShort: 'Sm',
        leadingTone: 'Dźwięk prowadzący',
        leadingToneShort: 'DP',
        unison: 'Pryma',
        unisonShort: 'P',
        octave: 'Oktawa P',
        octaveShort: 'OP',
        major: 'Durowy',
        majorShort: 'Dur',
        minor: 'Molowy',
        minorShort: 'Mol',
        diminished: 'Zmniejszony',
        diminishedShort: 'Zm',
        filled: 'Wypełnione',
        correct: 'Poprawne',
        congratulations: '🎉 Gratulacje! Wszystkie odpowiedzi są poprawne!',
        selectAtLeastOne: 'Proszę wybrać przynajmniej jedną gamę!',
        validMinutes: 'Proszę podać prawidłową liczbę minut (1-120)',
        timeUp: '⏰ Czas minął! Sesja ćwiczeń zakończona.',
        resetConfirm: 'Reset zrestartuje timer. Kontynuować?',
        clearRowTitle: 'Wyczyść wszystkie akordy w tej gamie'
    }
};

// Scale data with chords (triads) and accidentals
const scalesData = {
    'C': {chords: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'], accidentals: '0'},
    'G': {chords: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'], accidentals: '1#'},
    'D': {chords: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'], accidentals: '2#'},
    'A': {chords: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'], accidentals: '3#'},
    'E': {chords: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'], accidentals: '4#'},
    'B': {chords: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'], accidentals: '5#'},
    'F#': {chords: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'], accidentals: '6#'},
    'C#': {chords: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'], accidentals: '7#'},
    'F': {chords: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'], accidentals: '1b'},
    'Bb': {chords: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'], accidentals: '2b'},
    'Eb': {chords: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'], accidentals: '3b'},
    'Ab': {chords: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'], accidentals: '4b'},
    'Db': {chords: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'], accidentals: '5b'},
    'Gb': {chords: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'], accidentals: '6b'},
    'Cb': {chords: ['Cb', 'Dbm', 'Ebm', 'Fb', 'Gb', 'Abm', 'Bdim'], accidentals: '7b'}
};

// CSS Classes constants
const CSS_CLASSES = {
    FILLED: 'filled',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    DRAGGING: 'dragging',
    DRAG_OVER: 'drag-over',
    KEYBOARD_FOCUSED: 'keyboard-focused',
    HAS_CHORDS: 'has-chords',
    ACTIVE: 'active'
};

// Main application class
class MusicTheoryApp {
    constructor() {
        // Constants
        this.MODAL_HEIGHT = 350;
        this.MODAL_CLOSE_BTN_HEIGHT = 40;
        this.TIMER_WARNING_THRESHOLD = 180; // 3 minutes
        this.TIMER_DANGER_THRESHOLD = 60; // 1 minute
        this.MARGIN = 10;

        this.config = {
            mode: 'all',
            selectedScales: [],
            difficulty: 'all',
            validation: 'instant',
            theme: 'dark-minimal',
            timer: 0,
            language: 'en',
            practiceMode: 'free'
        };

        this.userAnswers = {};
        this.draggedChord = null;
        this.currentDropZone = null;
        this.timerInterval = null;
        this.timerSeconds = 0;

        // Quiz mode properties
        this.quizMode = {
            active: false,
            currentCell: null,
            availableCells: []
        };

        // Bound event handlers for modal
        this.boundModalClickHandler = null;
        this.boundModalKeyHandler = null;

        // DOM elements
        this.elements = {
            startScreen: document.getElementById('startScreen'),
            mainScreen: document.getElementById('mainScreen'),
            chordBank: document.getElementById('chordBank'),
            scalesTable: document.getElementById('scalesTable'),
            scaleCheckboxes: document.getElementById('scaleCheckboxes'),
            timerDisplay: document.getElementById('timerDisplay'),
            timerText: document.getElementById('timerText'),
            chordModal: document.getElementById('chordModal'),
            progress: document.getElementById('progress'),
            checkBtn: document.getElementById('checkBtn')
        };

        this.init();
    }

    // Get current translation
    t(key) {
        return translations[this.config.language][key] || key;
    }

    // Set language
    setLanguage(lang) {
        this.config.language = lang;

        // Update language buttons
        document.getElementById('langEN').classList.toggle('active', lang === 'en');
        document.getElementById('langPL').classList.toggle('active', lang === 'pl');

        // Update all text on the page
        this.updateTranslations();
    }

    // Update all translations on the page
    updateTranslations() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            element.innerHTML = this.t(key);
        });

        // Rebuild table if it exists (to update headers)
        if (this.elements.mainScreen.style.display === 'block') {
            this.buildTable();
            this.updateProgress();
        }
    }

    // Initialize the application
    init() {
        try {
            // Load saved theme from localStorage
            const savedTheme = localStorage.getItem('majorscale-theme') || 'dark-minimal';
            this.config.theme = savedTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);

            // Check the correct theme radio button
            const themeRadio = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
            if (themeRadio) {
                themeRadio.checked = true;
            }

            this.populateScaleCheckboxes();
            this.setupStartScreenListeners();
            this.setupEventDelegation();

            // Initialize with English language
            this.setLanguage('en');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // Populate scale checkboxes in the start screen
    populateScaleCheckboxes() {
        const container = this.elements.scaleCheckboxes.querySelector('div');
        Object.keys(scalesData).forEach(scale => {
            const wrapper = document.createElement('div');
            wrapper.className = 'scale-checkbox';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'scale-' + scale;
            checkbox.value = scale;

            const label = document.createElement('label');
            label.htmlFor = 'scale-' + scale;
            label.textContent = scale;

            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);
            wrapper.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
            });

            container.appendChild(wrapper);
        });
    }

    // Setup event listeners for the start screen
    setupStartScreenListeners() {
        document.querySelectorAll('input[name="mode"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.elements.scaleCheckboxes.style.display = e.target.value === 'custom' ? 'block' : 'none';
            });
        });

        document.querySelectorAll('input[name="theme"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                document.documentElement.setAttribute('data-theme', e.target.value);
                this.config.theme = e.target.value;
                // Save theme to localStorage
                localStorage.setItem('majorscale-theme', e.target.value);
            });
        });

        // Handle practice mode changes
        document.querySelectorAll('input[name="practice-mode"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const isQuizMode = e.target.value === 'quiz';
                const manualValidationRadio = document.querySelector('input[name="validation"][value="manual"]');
                const manualValidationOption = manualValidationRadio?.closest('.radio-option');

                if (isQuizMode) {
                    // Disable manual validation in quiz mode
                    if (manualValidationRadio) {
                        manualValidationRadio.disabled = true;
                    }
                    if (manualValidationOption) {
                        manualValidationOption.style.opacity = '0.5';
                        manualValidationOption.style.cursor = 'not-allowed';
                        manualValidationOption.style.pointerEvents = 'none';
                    }

                    // Switch to instant validation
                    const instantValidationRadio = document.querySelector('input[name="validation"][value="instant"]');
                    if (instantValidationRadio) {
                        instantValidationRadio.checked = true;
                    }
                } else {
                    // Enable manual validation in free mode
                    if (manualValidationRadio) {
                        manualValidationRadio.disabled = false;
                    }
                    if (manualValidationOption) {
                        manualValidationOption.style.opacity = '1';
                        manualValidationOption.style.cursor = 'pointer';
                        manualValidationOption.style.pointerEvents = 'auto';
                    }
                }
            });
        });
    }

    // Setup event delegation for better performance
    setupEventDelegation() {
        // Event delegation for radio options
        document.addEventListener('click', (e) => {
            const radioOption = e.target.closest('.radio-option');
            if (radioOption) {
                const radio = radioOption.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change'));
                }
            }
        });
    }

    // Start the application based on user configuration
    startApp() {
        try {
            // Get configuration from UI
            this.config.mode = document.querySelector('input[name="mode"]:checked').value;

            if (this.config.mode === 'custom') {
                const checkboxes = document.querySelectorAll('#scaleCheckboxes input[type="checkbox"]:checked');
                this.config.selectedScales = Array.from(checkboxes).map(cb => cb.value);

                if (this.config.selectedScales.length === 0) {
                    alert(this.t('selectAtLeastOne'));
                    return;
                }
            } else {
                this.config.selectedScales = Object.keys(scalesData);
            }

            this.config.difficulty = document.querySelector('input[name="difficulty"]:checked').value;
            this.config.validation = document.querySelector('input[name="validation"]:checked').value;
            this.config.theme = document.querySelector('input[name="theme"]:checked').value;
            this.config.practiceMode = document.querySelector('input[name="practice-mode"]:checked').value;

            // Get timer configuration
            const timerMode = document.querySelector('input[name="timer-mode"]:checked').value;
            if (timerMode === 'custom') {
                const timerMinutes = parseInt(document.getElementById('timerMinutes').value);
                if (isNaN(timerMinutes) || timerMinutes < 1 || timerMinutes > 120) {
                    alert(this.t('validMinutes'));
                    return;
                }
                this.config.timer = timerMinutes;
            } else {
                this.config.timer = 0;
            }

            // Set theme
            document.documentElement.setAttribute('data-theme', this.config.theme);

            // Configure check button visibility
            this.elements.checkBtn.style.display = this.config.validation === 'manual' ? 'inline-block' : 'none';

            // Setup timer if selected
            if (this.config.timer > 0) {
                this.elements.timerDisplay.style.display = 'inline-flex';
                this.startTimer(this.config.timer);
            } else {
                this.elements.timerDisplay.style.display = 'none';
            }

            // Switch to main screen
            this.elements.startScreen.style.display = 'none';
            this.elements.mainScreen.style.display = 'block';

            // Build the application interface
            this.buildChordBank();
            this.buildTable();
            this.updateProgress();

            // Initialize quiz mode if selected
            if (this.config.practiceMode === 'quiz') {
                this.initQuizMode();
            }
        } catch (error) {
            console.error('Error starting app:', error);
            alert('An error occurred while starting the application. Please try again.');
        }
    }

    // Start the timer
    startTimer(minutes) {
        try {
            this.timerSeconds = minutes * 60;
            this.updateTimerDisplay();

            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }

            this.timerInterval = setInterval(() => {
                this.timerSeconds--;
                this.updateTimerDisplay();

                if (this.timerSeconds <= 0) {
                    this.stopTimer();
                    alert(this.t('timeUp'));
                }
            }, 1000);
        } catch (error) {
            console.error('Error starting timer:', error);
        }
    }

    // Stop the timer
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    // Update the timer display
    updateTimerDisplay() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        const timeText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        this.elements.timerText.textContent = timeText;

        // Change color based on remaining time
        this.elements.timerDisplay.classList.remove('warning', 'danger');
        if (this.timerSeconds <= this.TIMER_DANGER_THRESHOLD) {
            this.elements.timerDisplay.classList.add('danger');
        } else if (this.timerSeconds <= this.TIMER_WARNING_THRESHOLD) {
            this.elements.timerDisplay.classList.add('warning');
        }
    }

    // Show the start screen
    showStartScreen() {
        this.stopTimer();
        this.quizMode.active = false;
        this.quizMode.currentCell = null;
        this.quizMode.availableCells = [];
        this.elements.mainScreen.style.display = 'none';
        this.elements.startScreen.style.display = 'block';
        this.resetApp();
    }

    // Group chords by note
    groupChordsByNote(chords) {
        const groups = {
            'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': []
        };

        chords.forEach(chord => {
            const baseNote = chord.charAt(0);
            if (groups[baseNote]) {
                groups[baseNote].push(chord);
            }
        });

        return groups;
    }

    // Create chord element
    createChordElement(chord) {
        const chordEl = document.createElement('div');
        chordEl.className = 'chord';
        chordEl.textContent = chord;
        chordEl.draggable = true;
        chordEl.dataset.chord = chord;

        chordEl.addEventListener('dragstart', this.handleDragStart.bind(this));
        chordEl.addEventListener('dragend', this.handleDragEnd.bind(this));

        return chordEl;
    }

    // Build the chord bank
    buildChordBank() {
        try {
            this.elements.chordBank.innerHTML = '';
            let chords = [];

            if (this.config.difficulty === 'all') {
                Object.values(scalesData).forEach(scale => {
                    chords = chords.concat(scale.chords);
                });
                chords = [...new Set(chords)];
            } else {
                this.config.selectedScales.forEach(scaleName => {
                    chords = chords.concat(scalesData[scaleName].chords);
                });
                chords = [...new Set(chords)];
            }

            const chordGroups = this.groupChordsByNote(chords);

            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(note => {
                if (chordGroups[note].length > 0) {
                    chordGroups[note].sort();

                    const groupDiv = document.createElement('div');
                    groupDiv.className = 'chord-group';

                    const label = document.createElement('div');
                    label.className = 'chord-group-label';
                    label.textContent = note + ':';
                    groupDiv.appendChild(label);

                    const rowDiv = document.createElement('div');
                    rowDiv.className = 'chord-row';

                    chordGroups[note].forEach(chord => {
                        rowDiv.appendChild(this.createChordElement(chord));
                    });

                    groupDiv.appendChild(rowDiv);
                    this.elements.chordBank.appendChild(groupDiv);
                }
            });
        } catch (error) {
            console.error('Error building chord bank:', error);
        }
    }

    // Build the scales table
    buildTable() {
        try {
            this.elements.scalesTable.innerHTML = '';

            const thead = document.createElement('thead');

            // Build header rows with translations
            const translatedHeaderRows = [
                ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', this.t('numAccidentals')],
                [
                    { full: this.t('tonic'), short: this.t('tonicShort') },
                    { full: this.t('supertonic'), short: this.t('supertonicShort') },
                    { full: this.t('mediant'), short: this.t('mediantShort') },
                    { full: this.t('subdominant'), short: this.t('subdominantShort') },
                    { full: this.t('dominant'), short: this.t('dominantShort') },
                    { full: this.t('submediant'), short: this.t('submediantShort') },
                    { full: this.t('leadingTone'), short: this.t('leadingToneShort') },
                    ''
                ],
                [
                    { full: this.t('unison'), short: this.t('unisonShort') },
                    'T',
                    'T',
                    'S',
                    'T',
                    'T',
                    'T',
                    { full: this.t('octave'), short: this.t('octaveShort') }
                ],
                [
                    { full: this.t('major'), short: this.t('majorShort') },
                    { full: this.t('minor'), short: this.t('minorShort') },
                    { full: this.t('minor'), short: this.t('minorShort') },
                    { full: this.t('major'), short: this.t('majorShort') },
                    { full: this.t('major'), short: this.t('majorShort') },
                    { full: this.t('minor'), short: this.t('minorShort') },
                    { full: this.t('diminished'), short: this.t('diminishedShort') },
                    ''
                ]
            ];

            translatedHeaderRows.forEach((row, index) => {
                const headerRow = document.createElement('tr');
                headerRow.className = 'header-row-' + (index + 1);

                const scaleHeader = document.createElement('th');
                scaleHeader.rowSpan = index === 0 ? 4 : 1;
                if (index === 0) {
                    const fullSpan = document.createElement('span');
                    fullSpan.className = 'full-text';
                    fullSpan.textContent = this.t('scale');

                    const shortSpan = document.createElement('span');
                    shortSpan.className = 'mobile-short';
                    shortSpan.textContent = this.t('scaleShort');
                    shortSpan.dataset.fullText = this.t('scale');
                    shortSpan.addEventListener('click', this.showTooltip.bind(this));

                    scaleHeader.appendChild(fullSpan);
                    scaleHeader.appendChild(shortSpan);
                    headerRow.appendChild(scaleHeader);
                } else if (index > 0) {
                    scaleHeader.textContent = '';
                }

                row.forEach((header, i) => {
                    const th = document.createElement('th');

                    if (typeof header === 'object' && header.full) {
                        const fullSpan = document.createElement('span');
                        fullSpan.className = 'full-text';
                        fullSpan.textContent = header.full;

                        const shortSpan = document.createElement('span');
                        shortSpan.className = 'mobile-short';
                        shortSpan.textContent = header.short;
                        shortSpan.dataset.fullText = header.full;
                        shortSpan.addEventListener('click', this.showTooltip.bind(this));

                        th.appendChild(fullSpan);
                        th.appendChild(shortSpan);
                    } else {
                        th.textContent = header;
                    }

                    if (index === 0 && i < 7) {
                        th.className = 'degree-' + (i + 1);

                        if (i === 0 || i === 3 || i === 4) {
                            th.classList.add('col-primary');
                        } else if (i === 1 || i === 2 || i === 5) {
                            th.classList.add('col-secondary');
                        } else if (i === 6) {
                            th.classList.add('col-diminished');
                        }
                    }

                    headerRow.appendChild(th);
                });

                thead.appendChild(headerRow);
            });

            this.elements.scalesTable.appendChild(thead);

            const tbody = document.createElement('tbody');

            this.config.selectedScales.forEach(scale => {
                const row = document.createElement('tr');
                row.dataset.scale = scale;

                const scaleCell = document.createElement('td');
                scaleCell.className = 'scale-cell';

                const scaleName = document.createElement('span');
                scaleName.textContent = scale;
                scaleCell.appendChild(scaleName);

                const clearRowBtn = document.createElement('button');
                clearRowBtn.className = 'clear-row-btn';
                clearRowBtn.textContent = '×';
                clearRowBtn.title = this.t('clearRowTitle');
                clearRowBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.clearScaleRow(row);
                };
                scaleCell.appendChild(clearRowBtn);

                row.appendChild(scaleCell);

                for (let degree = 0; degree < 7; degree++) {
                    const cell = document.createElement('td');

                    if (degree === 0 || degree === 3 || degree === 4) {
                        cell.classList.add('cell-primary');
                    } else if (degree === 1 || degree === 2 || degree === 5) {
                        cell.classList.add('cell-secondary');
                    } else if (degree === 6) {
                        cell.classList.add('cell-diminished');
                    }

                    const dropZone = document.createElement('div');
                    dropZone.className = 'drop-zone';
                    dropZone.dataset.scale = scale;
                    dropZone.dataset.degree = degree;

                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-btn';
                    removeBtn.textContent = '×';
                    removeBtn.onclick = (e) => {
                        e.stopPropagation();
                        this.removeChordFromCell(dropZone);
                    };

                    dropZone.appendChild(removeBtn);

                    dropZone.addEventListener('dragover', this.handleDragOver.bind(this));
                    dropZone.addEventListener('dragleave', this.handleDragLeave.bind(this));
                    dropZone.addEventListener('drop', this.handleDrop.bind(this));

                    dropZone.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (!dropZone.classList.contains(CSS_CLASSES.FILLED)) {
                            // In quiz mode, only allow clicking the active cell
                            if (this.quizMode.active && this.quizMode.currentCell !== dropZone) {
                                return;
                            }
                            this.showChordDropdown(dropZone);
                        }
                    });

                    cell.appendChild(dropZone);
                    row.appendChild(cell);
                }

                const infoCell = document.createElement('td');
                infoCell.textContent = scalesData[scale].accidentals;
                infoCell.className = 'info-cell';
                row.appendChild(infoCell);

                tbody.appendChild(row);
            });

            this.elements.scalesTable.appendChild(tbody);

            this.userAnswers = {};
        } catch (error) {
            console.error('Error building table:', error);
        }
    }

    // Handle drag start
    handleDragStart(e) {
        try {
            this.draggedChord = e.target.dataset.chord;
            e.target.classList.add(CSS_CLASSES.DRAGGING);
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', e.target.innerHTML);
        } catch (error) {
            console.error('Error handling drag start:', error);
        }
    }

    // Handle drag end
    handleDragEnd(e) {
        try {
            e.target.classList.remove(CSS_CLASSES.DRAGGING);
        } catch (error) {
            console.error('Error handling drag end:', error);
        }
    }

    // Handle drag over
    handleDragOver(e) {
        try {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            e.target.classList.add(CSS_CLASSES.DRAG_OVER);
        } catch (error) {
            console.error('Error handling drag over:', error);
        }
    }

    // Handle drag leave
    handleDragLeave(e) {
        try {
            e.target.classList.remove(CSS_CLASSES.DRAG_OVER);
        } catch (error) {
            console.error('Error handling drag leave:', error);
        }
    }

    // Handle drop
    handleDrop(e) {
        try {
            e.preventDefault();
            e.target.classList.remove(CSS_CLASSES.DRAG_OVER);

            let dropZone = e.target;

            if (dropZone.classList.contains('remove-btn')) {
                dropZone = dropZone.parentElement;
            }

            // In quiz mode, only allow dropping on the active cell
            if (this.quizMode.active && this.quizMode.currentCell !== dropZone) {
                return;
            }

            const scale = dropZone.dataset.scale;
            const degree = parseInt(dropZone.dataset.degree);

            const existingChord = dropZone.querySelector('.chord-text');
            if (existingChord) {
                existingChord.remove();
            }

            const chordText = document.createElement('span');
            chordText.className = 'chord-text';
            chordText.textContent = this.draggedChord;
            dropZone.appendChild(chordText);

            dropZone.classList.add(CSS_CLASSES.FILLED);
            dropZone.classList.remove(CSS_CLASSES.CORRECT, CSS_CLASSES.INCORRECT);

            const key = scale + '-' + degree;
            this.userAnswers[key] = this.draggedChord;

            if (this.config.validation === 'instant') {
                this.validateCell(dropZone, scale, degree);
            }

            this.updateProgress();
            this.updateScaleClearButtons();

            // In quiz mode, check if answer is correct and move to next
            if (this.quizMode.active) {
                this.checkQuizAnswer(dropZone, scale, degree);
            }
        } catch (error) {
            console.error('Error handling drop:', error);
        }
    }

    // Remove chord from cell
    removeChordFromCell(dropZone) {
        try {
            const chordText = dropZone.querySelector('.chord-text');
            if (!chordText) return;

            const scale = dropZone.dataset.scale;
            const degree = parseInt(dropZone.dataset.degree);
            const key = scale + '-' + degree;

            delete this.userAnswers[key];

            chordText.remove();
            dropZone.classList.remove(CSS_CLASSES.FILLED, CSS_CLASSES.CORRECT, CSS_CLASSES.INCORRECT);

            this.updateProgress();
            this.updateScaleClearButtons();
        } catch (error) {
            console.error('Error removing chord from cell:', error);
        }
    }

    // Clear a scale row
    clearScaleRow(row) {
        try {
            const scale = row.dataset.scale;
            const dropZones = row.querySelectorAll('.drop-zone');

            dropZones.forEach(dropZone => {
                const chordText = dropZone.querySelector('.chord-text');
                if (chordText) {
                    const degree = parseInt(dropZone.dataset.degree);
                    const key = scale + '-' + degree;

                    delete this.userAnswers[key];

                    chordText.remove();
                    dropZone.classList.remove(CSS_CLASSES.FILLED, CSS_CLASSES.CORRECT, CSS_CLASSES.INCORRECT);
                }
            });

            this.updateProgress();
            this.updateScaleClearButtons();
        } catch (error) {
            console.error('Error clearing scale row:', error);
        }
    }

    // Update scale clear buttons visibility
    updateScaleClearButtons() {
        try {
            const rows = this.elements.scalesTable.querySelectorAll('tbody tr');

            rows.forEach(row => {
                const scaleCell = row.querySelector('.scale-cell');
                if (!scaleCell) return;

                const dropZones = row.querySelectorAll('.drop-zone');
                const hasAnyChord = Array.from(dropZones).some(zone =>
                    zone.querySelector('.chord-text')
                );

                if (hasAnyChord) {
                    scaleCell.classList.add(CSS_CLASSES.HAS_CHORDS);
                } else {
                    scaleCell.classList.remove(CSS_CLASSES.HAS_CHORDS);
                }
            });
        } catch (error) {
            console.error('Error updating scale clear buttons:', error);
        }
    }

    // Calculate modal position
    calculateModalPosition(cellRect, modalRect) {
        const modalHeight = this.MODAL_HEIGHT;

        const spaceBelow = window.innerHeight - cellRect.bottom;
        const spaceAbove = cellRect.top;

        let top, left;

        // Vertical positioning
        if (spaceBelow >= modalHeight + this.MARGIN) {
            top = cellRect.bottom + 5;
        } else if (spaceAbove >= modalHeight + this.MARGIN) {
            top = cellRect.top - modalHeight - 5;
        } else {
            top = spaceAbove > spaceBelow
                ? Math.max(this.MARGIN, cellRect.top - modalHeight - 5)
                : Math.min(window.innerHeight - modalHeight - this.MARGIN, cellRect.bottom + 5);
        }

        // Horizontal positioning
        left = Math.max(this.MARGIN,
            Math.min(cellRect.left, window.innerWidth - modalRect.width - this.MARGIN)
        );

        return { top, left };
    }

    // Show chord dropdown
    showChordDropdown(dropZone) {
        try {
            // Close any existing modal first
            this.closeChordModal();

            let availableChords = [];
            const chordElements = document.querySelectorAll('#chordBank .chord:not(.used)');
            chordElements.forEach(el => {
                availableChords.push(el.dataset.chord);
            });

            if (availableChords.length === 0) {
                return;
            }

            availableChords.sort();

            this.currentDropZone = dropZone;

            const rect = dropZone.getBoundingClientRect();
            const modal = this.elements.chordModal;

            modal.innerHTML = '';

            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5c6bc0';
            const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim() || '#ffffff';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-modal-btn';
            closeBtn.textContent = '×';
            closeBtn.onclick = (e) => {
                e.stopPropagation();
                this.closeChordModal();
            };
            modal.appendChild(closeBtn);

            availableChords.forEach(chord => {
                const option = document.createElement('div');
                option.className = 'modal-option';
                option.textContent = chord;
                option.dataset.chord = chord;

                option.addEventListener('mouseenter', function() {
                    const allOptions = modal.querySelectorAll('.modal-option');
                    allOptions.forEach(opt => opt.classList.remove(CSS_CLASSES.KEYBOARD_FOCUSED));

                    this.style.backgroundColor = accentColor;
                    this.style.color = 'white';
                });

                option.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                    this.style.color = '';
                });

                option.onclick = (e) => {
                    e.stopPropagation();
                    const chordToAdd = option.dataset.chord;
                    const zone = this.currentDropZone;
                    this.closeChordModal();
                    if (zone) {
                        this.addChordToCell(zone, chordToAdd);
                    }
                };
                modal.appendChild(option);
            });

            // Position modal
            modal.style.position = 'fixed';
            modal.style.zIndex = '10000';
            modal.style.height = this.MODAL_HEIGHT + 'px';
            modal.style.maxHeight = this.MODAL_HEIGHT + 'px';
            modal.style.overflowY = 'scroll';
            modal.style.display = 'block';
            modal.style.visibility = 'hidden';
            modal.style.left = '0px';
            modal.style.top = '0px';

            const modalRect = modal.getBoundingClientRect();
            const position = this.calculateModalPosition(rect, modalRect);

            modal.style.left = position.left + 'px';
            modal.style.top = position.top + 'px';
            modal.style.visibility = 'visible';
            modal.style.backgroundColor = bgColor;
            modal.style.border = '2px solid #000000';
            modal.style.padding = '6px';
            modal.style.borderRadius = '8px';
            modal.style.width = '200px';

            modal.classList.add(CSS_CLASSES.ACTIVE);

            modal.onclick = (e) => {
                e.stopPropagation();
            };

            // Setup modal event listeners
            this.setupModalEventListeners();
        } catch (error) {
            console.error('Error showing chord dropdown:', error);
        }
    }

    // Setup modal event listeners
    setupModalEventListeners() {
        this.boundModalClickHandler = this.handleClickOutsideModal.bind(this);
        this.boundModalKeyHandler = this.handleModalKeyPress.bind(this);

        document.addEventListener('click', this.boundModalClickHandler, true);
        document.addEventListener('keydown', this.boundModalKeyHandler, true);
    }

    // Handle modal key press
    handleModalKeyPress(e) {
        try {
            const modal = this.elements.chordModal;
            if (!modal.classList.contains(CSS_CLASSES.ACTIVE)) return;

            const key = e.key.toUpperCase();

            if (key >= 'A' && key <= 'G') {
                e.preventDefault();

                const options = Array.from(modal.querySelectorAll('.modal-option'));
                const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5c6bc0';

                // Reset all options
                options.forEach(opt => {
                    opt.classList.remove(CSS_CLASSES.KEYBOARD_FOCUSED);
                    opt.style.backgroundColor = 'transparent';
                    opt.style.color = '';
                });

                // Find all options that start with the pressed key
                const matchingOptions = options.filter(option => {
                    const chordName = option.dataset.chord;
                    return chordName && chordName.charAt(0).toUpperCase() === key;
                });

                // Find all options that don't start with the pressed key
                const nonMatchingOptions = options.filter(option => {
                    const chordName = option.dataset.chord;
                    return chordName && chordName.charAt(0).toUpperCase() !== key;
                });

                if (matchingOptions.length > 0) {
                    // Reorder: matching options first, then non-matching
                    const reorderedOptions = [...matchingOptions, ...nonMatchingOptions];

                    // Clear modal content except close button
                    options.forEach(opt => opt.remove());

                    // Re-append in new order
                    reorderedOptions.forEach(opt => modal.appendChild(opt));

                    // Apply focus styling to the first match
                    const firstMatch = matchingOptions[0];
                    firstMatch.classList.add(CSS_CLASSES.KEYBOARD_FOCUSED);
                    firstMatch.style.backgroundColor = accentColor;
                    firstMatch.style.color = 'white';

                    // Scroll to top to show the first matching option
                    modal.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        } catch (error) {
            console.error('Error handling modal key press:', error);
        }
    }

    // Handle click outside modal
    handleClickOutsideModal(e) {
        try {
            const modal = this.elements.chordModal;

            if (!modal.contains(e.target) && modal.classList.contains(CSS_CLASSES.ACTIVE)) {
                this.closeChordModal();
            }
        } catch (error) {
            console.error('Error handling click outside modal:', error);
        }
    }

    // Close chord modal
    closeChordModal() {
        try {
            const modal = this.elements.chordModal;
            modal.classList.remove(CSS_CLASSES.ACTIVE);
            modal.style.display = 'none';

            // Remove event listeners if they exist
            if (this.boundModalClickHandler) {
                document.removeEventListener('click', this.boundModalClickHandler, true);
                this.boundModalClickHandler = null;
            }
            if (this.boundModalKeyHandler) {
                document.removeEventListener('keydown', this.boundModalKeyHandler, true);
                this.boundModalKeyHandler = null;
            }
        } catch (error) {
            console.error('Error closing chord modal:', error);
        }
    }

    // Show tooltip
    showTooltip(e) {
        try {
            e.stopPropagation();

            const fullText = e.target.dataset.fullText;
            if (!fullText) return;

            const existingTooltip = document.querySelector('.tooltip');
            if (existingTooltip) {
                existingTooltip.remove();
            }

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip active';
            tooltip.textContent = fullText;
            document.body.appendChild(tooltip);

            const rect = e.target.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            let top = rect.bottom + 5;
            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }

            if (top + tooltipRect.height > window.innerHeight - 10) {
                top = rect.top - tooltipRect.height - 5;
            }

            tooltip.style.top = top + 'px';
            tooltip.style.left = left + 'px';

            setTimeout(() => {
                if (tooltip && tooltip.parentNode) {
                    tooltip.remove();
                }
            }, 2000);

            const removeTooltip = () => {
                if (tooltip && tooltip.parentNode) {
                    tooltip.remove();
                }
                document.removeEventListener('click', removeTooltip);
            };

            setTimeout(() => {
                document.addEventListener('click', removeTooltip);
            }, 100);
        } catch (error) {
            console.error('Error showing tooltip:', error);
        }
    }

    // Add chord to cell
    addChordToCell(dropZone, chord) {
        try {
            const scale = dropZone.dataset.scale;
            const degree = parseInt(dropZone.dataset.degree);

            const existingText = dropZone.querySelector('.chord-text');
            if (existingText) {
                existingText.remove();
            }

            const chordText = document.createElement('span');
            chordText.className = 'chord-text';
            chordText.textContent = chord;
            dropZone.appendChild(chordText);

            dropZone.classList.add(CSS_CLASSES.FILLED);
            dropZone.classList.remove(CSS_CLASSES.CORRECT, CSS_CLASSES.INCORRECT);

            const key = scale + '-' + degree;
            this.userAnswers[key] = chord;

            if (this.config.validation === 'instant') {
                this.validateCell(dropZone, scale, degree);
            }

            this.updateProgress();

            this.currentDropZone = null;
            this.updateScaleClearButtons();

            // In quiz mode, check if answer is correct and move to next
            if (this.quizMode.active) {
                this.checkQuizAnswer(dropZone, scale, degree);
            }
        } catch (error) {
            console.error('Error adding chord to cell:', error);
        }
    }

    // Validate a cell
    validateCell(dropZone, scale, degree) {
        try {
            const chordText = dropZone.querySelector('.chord-text');
            if (!chordText) return;

            const userChord = chordText.textContent.replace(' ✓', '').replace(' ✗', '');
            const correctChord = scalesData[scale].chords[degree];

            if (userChord === correctChord) {
                dropZone.classList.add(CSS_CLASSES.CORRECT);
                dropZone.classList.remove(CSS_CLASSES.INCORRECT);
            } else {
                dropZone.classList.add(CSS_CLASSES.INCORRECT);
                dropZone.classList.remove(CSS_CLASSES.CORRECT);
            }
        } catch (error) {
            console.error('Error validating cell:', error);
        }
    }

    // Check all answers
    checkAllAnswers() {
        try {
            const dropZones = this.elements.scalesTable.querySelectorAll('.drop-zone');
            dropZones.forEach(zone => {
                const chordText = zone.querySelector('.chord-text');
                if (chordText) {
                    const scale = zone.dataset.scale;
                    const degree = parseInt(zone.dataset.degree);
                    this.validateCell(zone, scale, degree);
                }
            });
            this.updateProgress();
        } catch (error) {
            console.error('Error checking all answers:', error);
        }
    }

    // Reset the application
    resetApp() {
        try {
            if (this.config.timer > 0) {
                if (confirm(this.t('resetConfirm'))) {
                    this.stopTimer();
                    this.startTimer(this.config.timer);
                } else {
                    return;
                }
            }
            this.buildChordBank();
            this.buildTable();
            this.updateProgress();

            // Reinitialize quiz mode if active
            if (this.config.practiceMode === 'quiz') {
                this.initQuizMode();
            }
        } catch (error) {
            console.error('Error resetting app:', error);
        }
    }

    // Initialize quiz mode
    initQuizMode() {
        try {
            this.quizMode.active = true;
            this.quizMode.availableCells = [];

            // Collect all empty cells from selected scales
            this.config.selectedScales.forEach(scale => {
                for (let degree = 0; degree < 7; degree++) {
                    this.quizMode.availableCells.push({ scale, degree });
                }
            });

            // Pick first random cell
            this.pickNextQuizCell();
        } catch (error) {
            console.error('Error initializing quiz mode:', error);
        }
    }

    // Pick next random cell for quiz mode
    pickNextQuizCell() {
        try {
            if (this.quizMode.availableCells.length === 0) {
                // Quiz completed!
                this.quizMode.active = false;
                this.updateProgress();
                return;
            }

            // Remove previous cell highlighting
            const allDropZones = this.elements.scalesTable.querySelectorAll('.drop-zone');
            allDropZones.forEach(zone => {
                zone.classList.remove('quiz-active', 'quiz-disabled');
            });

            // Pick random cell
            const randomIndex = Math.floor(Math.random() * this.quizMode.availableCells.length);
            const { scale, degree } = this.quizMode.availableCells[randomIndex];

            // Find the corresponding drop zone
            const targetRow = this.elements.scalesTable.querySelector(`tr[data-scale="${scale}"]`);
            if (!targetRow) return;

            const dropZones = targetRow.querySelectorAll('.drop-zone');
            const targetDropZone = dropZones[degree];

            if (targetDropZone) {
                this.quizMode.currentCell = targetDropZone;
                targetDropZone.classList.add('quiz-active');

                // Disable all other cells
                allDropZones.forEach(zone => {
                    if (zone !== targetDropZone && !zone.classList.contains(CSS_CLASSES.FILLED)) {
                        zone.classList.add('quiz-disabled');
                    }
                });

                // Scroll to the active cell
                targetDropZone.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } catch (error) {
            console.error('Error picking next quiz cell:', error);
        }
    }

    // Check quiz answer
    checkQuizAnswer(dropZone, scale, degree) {
        try {
            // Always validate in quiz mode
            this.validateCell(dropZone, scale, degree);

            const chordText = dropZone.querySelector('.chord-text');
            if (!chordText) return;

            const userChord = chordText.textContent;
            const correctChord = scalesData[scale].chords[degree];

            if (userChord === correctChord) {
                // Correct! Remove quiz-active class
                dropZone.classList.remove('quiz-active');

                // Remove from available cells and pick next
                this.quizMode.availableCells = this.quizMode.availableCells.filter(
                    cell => !(cell.scale === scale && cell.degree === degree)
                );

                // Small delay before moving to next cell
                setTimeout(() => {
                    this.pickNextQuizCell();
                }, 500);
            }
        } catch (error) {
            console.error('Error checking quiz answer:', error);
        }
    }

    // Update progress display
    updateProgress() {
        try {
            const totalCells = this.config.selectedScales.length * 7;
            const filled = Object.keys(this.userAnswers).length;

            let correct = 0;
            if (this.config.validation === 'instant' || this.elements.scalesTable.querySelectorAll('.correct').length > 0) {
                correct = this.elements.scalesTable.querySelectorAll('.correct').length;
            }

            this.elements.progress.innerHTML = `${this.t('filled')}: ${filled}/${totalCells}`;

            if (correct > 0) {
                this.elements.progress.innerHTML += ` | ${this.t('correct')}: ${correct}/${filled}`;
            }

            if (filled === totalCells && correct === totalCells) {
                this.elements.progress.innerHTML += ` | ${this.t('congratulations')}`;
                this.stopTimer();
            } else if (filled === totalCells) {
                this.stopTimer();
            }
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    }
}

// Initialize the application
const App = new MusicTheoryApp();