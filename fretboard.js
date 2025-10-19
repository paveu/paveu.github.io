const translations = {
    pl: {
        title: '🎸 Trener dźwięków na gryfie',
        backToHome: '← Powrót',
        fretRange: 'Zakres progów',
        frets12: '12 progów',
        frets15: '15 progów',
        frets22: '22 progi',
        frets24: '24 progi',
        customRange: 'Własny zakres',
        fretFrom: 'Od progu',
        fretTo: 'Do progu',
        noteNotation: 'Notacja dźwięków',
        sharps: 'Krzyżyki (#)',
        flats: 'Bemole (♭)',
        both: 'Oba (# i ♭)',
        stringsToPractice: 'Struny do ćwiczenia',
        string1: '1. (E)',
        string2: '2. (B)',
        string3: '3. (G)',
        string4: '4. (D)',
        string5: '5. (A)',
        string6: '6. (E)',
        theme: 'Motyw',
        lightMinimal: 'Jasny minimalny',
        darkMinimal: 'Ciemny minimalny',
        startPractice: 'ROZPOCZNIJ ĆWICZENIE',
        menu: '← Menu',
        skip: '⏭️ Pomiń',
        score: 'Wynik',
        initialScore: 'Wynik: 0/0',
        question: 'Jaki to dźwięk?',
        clickToSelect: 'Kliknij, aby wybrać dźwięk',
        correct: '✓ Poprawnie!',
        incorrect: '✗ Błąd! Prawidłowa odpowiedź:',
        selectAtLeastOne: 'Proszę wybrać przynajmniej jedną strunę!',
        practiceTimerTitle: 'Timer ćwiczeń i powtórka błędów',
        noTimer: 'Bez timera',
        practiceTime: 'Czas ćwiczenia (minuty):',
        timerInfo: 'ℹ️ Po zakończeniu timera poćwiczysz tylko błędne odpowiedzi',
        reviewMode: 'Tryb powtórki błędów',
        reviewModeDesc: 'Ćwiczysz błędne odpowiedzi',
        noMistakes: '🎉 Brawo! Nie masz błędnych odpowiedzi do powtórki!',
        timeUp: '⏰ Czas minął! Rozpoczynamy powtórkę błędów...',
        validMinutes: 'Proszę podać prawidłową liczbę minut (1-120)',
        invalidFretRange: 'Proszę podać prawidłowy zakres progów (1-24, od ≤ do)',
        showAllNotes: 'Pokaż dźwięki',
        allNotesOnFretboard: 'Wszystkie dźwięki na gryfie',
    },
    en: {
        title: '🎸 Fretboard Notes Trainer',
        backToHome: '← Go back',
        fretRange: 'Fret Range',
        frets12: '12 frets',
        frets15: '15 frets',
        frets22: '22 frets',
        frets24: '24 frets',
        customRange: 'Custom range',
        fretFrom: 'From fret',
        fretTo: 'To fret',
        noteNotation: 'Note Notation',
        sharps: 'Sharps (#)',
        flats: 'Flats (♭)',
        both: 'Both (# and ♭)',
        stringsToPractice: 'Strings to Practice',
        string1: '1st (E)',
        string2: '2nd (B)',
        string3: '3rd (G)',
        string4: '4th (D)',
        string5: '5th (A)',
        string6: '6th (E)',
        theme: 'Theme',
        lightMinimal: 'Light Minimal',
        darkMinimal: 'Dark Minimal',
        startPractice: 'START PRACTICE',
        menu: '← Menu',
        skip: '⏭️ Skip',
        score: 'Score',
        initialScore: 'Score: 0/0',
        question: 'What note is this?',
        clickToSelect: 'Click here to select a note',
        correct: '✓ Correct!',
        incorrect: '✗ Wrong! Correct answer:',
        selectAtLeastOne: 'Please select at least one string!',
        practiceTimerTitle: 'Practice Timer & Mistake Review',
        noTimer: 'No timer',
        practiceTime: 'Practice time (minutes):',
        timerInfo: 'ℹ️ After timer ends, you\'ll practice only the mistakes you made',
        reviewMode: 'Mistake Review Mode',
        reviewModeDesc: 'Practicing mistakes',
        noMistakes: '🎉 Great! You have no mistakes to review!',
        timeUp: '⏰ Time is up! Starting mistake review...',
        validMinutes: 'Please enter a valid number of minutes (1-120)',
        invalidFretRange: 'Please enter a valid fret range (1-24, from ≤ to)',
        showAllNotes: 'Show Notes',
        allNotesOnFretboard: 'All Notes on Fretboard',
    }
};

// Standard tuning from 1st string (high E) to 6th string (low E)
const standardTuning = ['E', 'B', 'G', 'D', 'A', 'E'];
const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const chromaticScaleFlats = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭','A', 'B♭', 'B'];

class FretboardTrainer {
    constructor() {
        this.config = {
            fretFrom: 1,
            fretTo: 12,
            notation: 'both',
            strings: [1, 2, 3, 4, 5, 6],
            theme: 'dark-minimal',
            language: 'en'
        };

        this.currentQuestion = null;
        this.score = { correct: 0, total: 0 };
        this.selectedNote = null;
        this.timerInterval = null;
        this.timerSeconds = 0;
        this.timerMode = false;
        this.mistakes = [];
        this.reviewMode = false;
        this.reviewMistakes = [];
        this.boundModalClickHandler = null;
        this.boundModalKeyHandler = null;
        this.isShowingError = false;
        this.isShowingCorrect = false;

        this.init();
    }

    t(key) {
        return translations[this.config.language][key] || key;
    }

    setLanguage(lang) {
        this.config.language = lang;
        document.getElementById('langPL').classList.toggle('active', lang === 'pl');
        document.getElementById('langEN').classList.toggle('active', lang === 'en');
        this.updateTranslations();
    }

    updateTranslations() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update score if main screen is visible
        if (document.getElementById('mainScreen').style.display === 'block') {
            this.updateScore();
        }
    }

    init() {
        // Wczytaj zapisany theme z localStorage
        const savedTheme = localStorage.getItem('fretboard-theme') || 'dark-minimal';
        this.config.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Zaznacz odpowiedni radio button
        const themeRadio = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
        if (themeRadio) {
            themeRadio.checked = true;
        }

        document.querySelectorAll('input[name="theme"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                document.documentElement.setAttribute('data-theme', e.target.value);
                this.config.theme = e.target.value;
                // Zapisz theme do localStorage
                localStorage.setItem('fretboard-theme', e.target.value);
            });
        });

        document.querySelectorAll('.checkbox-option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                }
            });
        });

        // Handle custom fret range visibility
        document.querySelectorAll('input[name="frets"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const fretRangeInputs = document.getElementById('fretRangeInputs');
                if (e.target.value === 'custom') {
                    fretRangeInputs.style.display = 'grid';
                } else {
                    fretRangeInputs.style.display = 'none';
                }
            });
        });

        // Set initial language to English
        this.setLanguage('en');
    }

    startApp() {
        const fretMode = document.querySelector('input[name="frets"]:checked').value;

        if (fretMode === 'custom') {
            const fretFrom = parseInt(document.getElementById('fretFrom').value);
            const fretTo = parseInt(document.getElementById('fretTo').value);

            if (isNaN(fretFrom) || isNaN(fretTo) || fretFrom < 1 || fretTo > 24 || fretFrom > fretTo) {
                alert(this.t('invalidFretRange'));
                return;
            }

            this.config.fretFrom = fretFrom;
            this.config.fretTo = fretTo;
        } else {
            const fretCount = parseInt(fretMode.split('-')[1]);
            this.config.fretFrom = 1;
            this.config.fretTo = fretCount;
        }

        this.config.notation = document.querySelector('input[name="notation"]:checked').value;
        this.config.theme = document.querySelector('input[name="theme"]:checked').value;

        const selectedStrings = [];
        document.querySelectorAll('.string-checkboxes input[type="checkbox"]:checked').forEach(cb => {
            selectedStrings.push(parseInt(cb.value));
        });

        if (selectedStrings.length === 0) {
            alert(this.t('selectAtLeastOne'));
            return;
        }

        this.config.strings = selectedStrings;

        const timerMode = document.querySelector('input[name="timer-mode"]:checked').value;
        if (timerMode === 'custom') {
            const timerMinutes = parseInt(document.getElementById('timerMinutes').value);
            if (isNaN(timerMinutes) || timerMinutes < 1 || timerMinutes > 120) {
                alert(this.t('validMinutes'));
                return;
            }
            this.timerMode = true;
            this.startTimer(timerMinutes);
        } else {
            this.timerMode = false;
        }

        this.score = { correct: 0, total: 0 };
        this.mistakes = [];
        this.reviewMode = false;
        this.reviewMistakes = [];

        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('mainScreen').style.display = 'block';

        this.drawFretboard();
        this.setupNoteSelector();
        this.nextQuestion();
    }

    showStartScreen() {
        this.closeNoteModal();
        this.stopTimer();
        document.getElementById('mainScreen').style.display = 'none';
        document.getElementById('startScreen').style.display = 'block';
    }

    startTimer(minutes) {
        this.timerSeconds = minutes * 60;
        this.updateTimerDisplay();
        document.getElementById('timerDisplay').style.display = 'inline-flex';

        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            this.timerSeconds--;
            this.updateTimerDisplay();
            if (this.timerSeconds <= 0) {
                this.stopTimer();
                this.startReviewMode();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) timerDisplay.style.display = 'none';
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        const timeText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        document.getElementById('timerText').textContent = timeText;
        const timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.classList.remove('warning', 'danger');
        if (this.timerSeconds <= 60) {
            timerDisplay.classList.add('danger');
        } else if (this.timerSeconds <= 180) {
            timerDisplay.classList.add('warning');
        }
    }

    startReviewMode() {
        if (this.mistakes.length === 0) {
            alert(this.t('noMistakes'));
            this.showStartScreen();
            return;
        }

        alert(this.t('timeUp'));
        this.reviewMode = true;
        this.reviewMistakes = [...this.mistakes];
        this.mistakes = [];
        this.score = { correct: 0, total: 0 };
        this.updateScore();
        this.nextQuestion();
    }

    drawFretboard() {
        const svg = document.getElementById('fretboard');
        svg.innerHTML = '';

        const fretCount = this.config.fretTo;
        const fretWidth = 80;
        const stringSpacing = 40;
        const svgWidth = (fretCount + 1) * fretWidth + 100;
        const svgHeight = 6 * stringSpacing + 40;

        svg.setAttribute('width', svgWidth);
        svg.setAttribute('height', svgHeight);
        svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

        const woodColor = getComputedStyle(document.documentElement).getPropertyValue('--fretboard-wood').trim();
        const fretColor = getComputedStyle(document.documentElement).getPropertyValue('--fret-wire').trim();
        const stringColor = getComputedStyle(document.documentElement).getPropertyValue('--string-color').trim();
        const dotColor = getComputedStyle(document.documentElement).getPropertyValue('--dot-color').trim();

        const fretboard = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        fretboard.setAttribute('x', '50');
        fretboard.setAttribute('y', '20');
        fretboard.setAttribute('width', fretCount * fretWidth);
        fretboard.setAttribute('height', 5 * stringSpacing);
        fretboard.setAttribute('fill', woodColor);
        fretboard.setAttribute('rx', '5');
        svg.appendChild(fretboard);

        for (let i = 0; i <= fretCount; i++) {
            const x = 50 + i * fretWidth;
            const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            fret.setAttribute('x1', x);
            fret.setAttribute('y1', '20');
            fret.setAttribute('x2', x);
            fret.setAttribute('y2', 20 + 5 * stringSpacing);
            fret.setAttribute('stroke', fretColor);
            fret.setAttribute('stroke-width', i === 0 ? '6' : '3');
            svg.appendChild(fret);

            if (i > 0) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x - fretWidth / 2);
                text.setAttribute('y', 5 * stringSpacing + 50);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', 'var(--text-secondary)');
                text.setAttribute('font-size', '14');
                text.textContent = i;
                svg.appendChild(text);
            }
        }

        const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
        const doubleDotFrets = [12, 24];

        dotFrets.forEach(fret => {
            if (fret <= fretCount) {
                const x = 50 + (fret - 0.5) * fretWidth;
                if (doubleDotFrets.includes(fret)) {
                    [1.5, 3.5].forEach(yPos => {
                        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        dot.setAttribute('cx', x);
                        dot.setAttribute('cy', 20 + yPos * stringSpacing);
                        dot.setAttribute('r', '8');
                        dot.setAttribute('fill', dotColor);
                        svg.appendChild(dot);
                    });
                } else {
                    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    dot.setAttribute('cx', x);
                    dot.setAttribute('cy', 20 + 2.5 * stringSpacing);
                    dot.setAttribute('r', '8');
                    dot.setAttribute('fill', dotColor);
                    svg.appendChild(dot);
                }
            }
        });

        // Draw strings from top to bottom (1st to 6th)
        for (let i = 0; i < 6; i++) {
            const y = 20 + i * stringSpacing;
            const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            string.setAttribute('x1', '50');
            string.setAttribute('y1', y);
            string.setAttribute('x2', 50 + fretCount * fretWidth);
            string.setAttribute('y2', y);
            string.setAttribute('stroke', stringColor);
            string.setAttribute('stroke-width', 1.5 + (5 - i) * 0.5);
            string.setAttribute('data-string-index', i);
            string.classList.add('fretboard-string');
            svg.appendChild(string);

            const stringLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            stringLabel.setAttribute('x', '30');
            stringLabel.setAttribute('y', y + 5);
            stringLabel.setAttribute('text-anchor', 'middle');
            stringLabel.setAttribute('fill', 'var(--text-primary)');
            stringLabel.setAttribute('font-size', '16');
            stringLabel.setAttribute('font-weight', 'bold');
            stringLabel.textContent = standardTuning[i];
            svg.appendChild(stringLabel);
        }
    }

    setupNoteSelector() {
        document.getElementById('noteSelector').onclick = () => this.showNoteModal();
    }

    showNoteModal() {
        // Don't open modal if showing error OR if answer is correct and waiting for next question
        if (this.isShowingError || this.isShowingCorrect) {
            return;
        }

        this.closeNoteModal();
        const modal = document.getElementById('noteModal');
        modal.innerHTML = '';

        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5c6bc0';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-modal-btn';
        closeBtn.textContent = '×';
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            this.closeNoteModal();
        };
        modal.appendChild(closeBtn);

        let noteList = [];
        if (this.config.notation === 'sharps') {
            noteList = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        } else if (this.config.notation === 'flats') {
            noteList = ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭'];
        } else {
            // Both notation - show combined format
            noteList = ['A', 'A#/B♭', 'B', 'C', 'C#/D♭', 'D', 'D#/E♭', 'E', 'F', 'F#/G♭', 'G', 'G#/A♭'];
        }

        noteList.forEach(note => {
            const option = document.createElement('div');
            option.className = 'modal-option';
            option.textContent = note;
            option.dataset.note = note;

            option.addEventListener('mouseenter', function() {
                modal.querySelectorAll('.modal-option').forEach(opt => opt.classList.remove('keyboard-focused'));
                this.style.backgroundColor = accentColor;
                this.style.color = 'white';
            });

            option.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.color = '';
            });

            option.onclick = (e) => {
                e.stopPropagation();
                this.selectNote(note);
                this.closeNoteModal();
            };

            modal.appendChild(option);
        });

        const fretboard = document.getElementById('fretboard');
        const rect = fretboard.getBoundingClientRect();

        modal.style.position = 'fixed';
        modal.style.left = '50%';
        modal.style.transform = 'translateX(-50%)';
        modal.style.top = `${rect.bottom + 20}px`;

        modal.classList.add('active');
        modal.onclick = (e) => e.stopPropagation();
        this.setupModalEventListeners();
    }

    setupModalEventListeners() {
        this.boundModalClickHandler = this.handleClickOutsideModal.bind(this);
        this.boundModalKeyHandler = this.handleModalKeyPress.bind(this);
        document.addEventListener('click', this.boundModalClickHandler, true);
        document.addEventListener('keydown', this.boundModalKeyHandler, true);
    }

    handleModalKeyPress(e) {
        const modal = document.getElementById('noteModal');
        if (!modal.classList.contains('active')) return;

        const key = e.key.toUpperCase();

        if (key >= 'A' && key <= 'G') {
            e.preventDefault();
            const options = Array.from(modal.querySelectorAll('.modal-option'));
            const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5c6bc0';

            options.forEach(opt => {
                opt.classList.remove('keyboard-focused');
                opt.style.backgroundColor = 'transparent';
                opt.style.color = '';
            });

            const matchingOptions = options.filter(option => {
                const noteName = option.dataset.note;
                return noteName && noteName.charAt(0).toUpperCase() === key;
            });

            const nonMatchingOptions = options.filter(option => {
                const noteName = option.dataset.note;
                return noteName && noteName.charAt(0).toUpperCase() !== key;
            });

            if (matchingOptions.length > 0) {
                const reorderedOptions = [...matchingOptions, ...nonMatchingOptions];
                options.forEach(opt => opt.remove());
                reorderedOptions.forEach(opt => modal.appendChild(opt));

                const firstMatch = matchingOptions[0];
                firstMatch.classList.add('keyboard-focused');
                firstMatch.style.backgroundColor = accentColor;
                firstMatch.style.color = 'white';

                modal.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const focused = modal.querySelector('.keyboard-focused');
            if (focused) {
                this.selectNote(focused.dataset.note);
                this.closeNoteModal();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.closeNoteModal();
        }
    }

    handleClickOutsideModal(e) {
        const modal = document.getElementById('noteModal');
        if (!modal.contains(e.target) && modal.classList.contains('active')) {
            this.closeNoteModal();
        }
    }

    closeNoteModal() {
        const modal = document.getElementById('noteModal');
        modal.classList.remove('active');
        modal.style.display = 'none';

        if (this.boundModalClickHandler) {
            document.removeEventListener('click', this.boundModalClickHandler, true);
            this.boundModalClickHandler = null;
        }
        if (this.boundModalKeyHandler) {
            document.removeEventListener('keydown', this.boundModalKeyHandler, true);
            this.boundModalKeyHandler = null;
        }
    }

    selectNote(note) {
        // Prevent selecting a new note if we're showing an error message OR showing correct answer
        if (this.isShowingError || this.isShowingCorrect) {
            return;
        }

        this.selectedNote = note;
        const selector = document.getElementById('noteSelector');
        selector.textContent = note;
        selector.classList.add('has-selection');
        selector.classList.remove('correct', 'incorrect');
        this.checkAnswer();
    }

    nextQuestion() {
        const selector = document.getElementById('noteSelector');
        selector.textContent = this.t('clickToSelect');
        selector.classList.remove('has-selection', 'correct', 'incorrect');
        document.getElementById('result').textContent = '';
        document.getElementById('result').className = 'result-message';
        this.selectedNote = null;
        this.isShowingError = false;
        this.isShowingCorrect = false;

        const svg = document.getElementById('fretboard');
        const oldHighlight = svg.querySelector('.highlight-circle');
        if (oldHighlight) oldHighlight.remove();

        // Remove previous string highlight
        const strings = svg.querySelectorAll('.fretboard-string');
        strings.forEach(string => {
            string.classList.remove('string-highlighted');
        });

        let stringIndex, fret, note;

        if (this.reviewMode && this.reviewMistakes.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.reviewMistakes.length);
            const mistake = this.reviewMistakes[randomIndex];
            stringIndex = mistake.stringIndex;
            fret = mistake.fret;
            note = mistake.note;
        } else if (this.reviewMode && this.reviewMistakes.length === 0) {
            alert(this.t('noMistakes'));
            this.reviewMode = false;
            this.showStartScreen();
            return;
        } else {
            // Generate random question from fretFrom to fretTo (no open strings)
            stringIndex = this.config.strings[Math.floor(Math.random() * this.config.strings.length)] - 1;
            fret = Math.floor(Math.random() * (this.config.fretTo - this.config.fretFrom + 1)) + this.config.fretFrom;

            const openString = standardTuning[stringIndex];
            note = this.getNoteAtFret(openString, fret);
        }

        this.currentQuestion = { string: stringIndex + 1, fret: fret, note: note, stringIndex: stringIndex };

        // Highlight the string
        const targetString = svg.querySelector(`.fretboard-string[data-string-index="${stringIndex}"]`);
        if (targetString) {
            targetString.classList.add('string-highlighted');
        }

        const fretWidth = 80;
        const stringSpacing = 40;
        const x = 50 + (fret - 0.5) * fretWidth;
        const y = 20 + stringIndex * stringSpacing;

        const highlight = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        highlight.setAttribute('cx', x);
        highlight.setAttribute('cy', y);
        highlight.setAttribute('r', '20');
        highlight.setAttribute('fill', 'var(--accent)');
        highlight.setAttribute('opacity', '0.7');
        highlight.setAttribute('stroke', '#ffffff');
        highlight.setAttribute('stroke-width', '3');
        highlight.setAttribute('class', 'highlight-circle');

        // Add SVG animation for pulsing radius
        const animateRadius = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animateRadius.setAttribute('attributeName', 'r');
        animateRadius.setAttribute('values', '20;24;20');
        animateRadius.setAttribute('dur', '2s');
        animateRadius.setAttribute('repeatCount', 'indefinite');
        highlight.appendChild(animateRadius);

        svg.appendChild(highlight);

        // Scroll to the highlighted note
        const container = document.getElementById('fretboardContainer');
        const circleLeft = x - 50;
        const scrollPosition = circleLeft - container.clientWidth / 2;
        container.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });

        document.getElementById('question').textContent = this.t('question');
    }

    getNoteAtFret(startNote, fret) {
        const noteIndex = chromaticScale.findIndex(n => n === startNote);
        const targetIndex = (noteIndex + fret) % 12;
        return chromaticScale[targetIndex];
    }

    checkAnswer() {
        if (!this.selectedNote) return;

        const userAnswer = this.selectedNote;
        const correctNote = this.currentQuestion.note;
        const resultDiv = document.getElementById('result');
        const selector = document.getElementById('noteSelector');

        const isCorrect = this.isEnharmonicMatch(userAnswer, correctNote);
        this.score.total++;

        if (isCorrect) {
            this.score.correct++;
            resultDiv.textContent = this.t('correct');
            resultDiv.className = 'result-message correct';
            selector.classList.remove('incorrect');
            selector.classList.add('correct');

            // Block further selections while showing correct answer
            this.isShowingCorrect = true;

            if (this.reviewMode) {
                this.reviewMistakes = this.reviewMistakes.filter(m =>
                    !(m.stringIndex === this.currentQuestion.stringIndex && m.fret === this.currentQuestion.fret)
                );
            }

            setTimeout(() => {
                this.isShowingCorrect = false;
                this.nextQuestion();
            }, 1500);
        } else {
            resultDiv.textContent = `${this.t('incorrect')} ${this.formatNote(correctNote)}`;
            resultDiv.className = 'result-message incorrect';
            selector.classList.remove('correct');
            selector.classList.add('incorrect');

            // Block further selections while showing error
            this.isShowingError = true;

            if (!this.reviewMode && this.timerMode) {
                const mistakeExists = this.mistakes.some(m =>
                    m.stringIndex === this.currentQuestion.stringIndex && m.fret === this.currentQuestion.fret
                );
                if (!mistakeExists) {
                    this.mistakes.push({
                        stringIndex: this.currentQuestion.stringIndex,
                        fret: this.currentQuestion.fret,
                        note: this.currentQuestion.note
                    });
                }
            }

            // In "no timer" mode, show correct answer for 2 seconds and move to next question
            this.selectedNote = null;
            setTimeout(() => {
                this.isShowingError = false;
                this.nextQuestion();
            }, 2000);
        }

        this.updateScore();
    }

    isEnharmonicMatch(userAnswer, correctNote) {
        // Extract base notes from combined format like "C#/D♭"
        const extractNotes = (note) => {
            if (note.includes('/')) {
                return note.split('/');
            }
            return [note];
        };

        const userNotes = extractNotes(userAnswer);
        const correctNotes = extractNotes(correctNote);

        // Check if any combination matches
        for (const un of userNotes) {
            for (const cn of correctNotes) {
                if (un === cn) return true;
            }
        }

        // Additional enharmonic check
        const enharmonicMap = {
            'C#': ['C#', 'D♭'], 'D♭': ['C#', 'D♭'],
            'D#': ['D#', 'E♭'], 'E♭': ['D#', 'E♭'],
            'F#': ['F#', 'G♭'], 'G♭': ['F#', 'G♭'],
            'G#': ['G#', 'A♭'], 'A♭': ['G#', 'A♭'],
            'A#': ['A#', 'B♭'], 'B♭': ['A#', 'B♭']
        };

        for (const un of userNotes) {
            for (const cn of correctNotes) {
                if (enharmonicMap[un] && enharmonicMap[un].includes(cn)) {
                    return true;
                }
                if (enharmonicMap[cn] && enharmonicMap[cn].includes(un)) {
                    return true;
                }
            }
        }

        return false;
    }

    formatNote(note) {
        if (this.config.notation === 'sharps') {
            const sharpMap = { 'D♭': 'C#', 'E♭': 'D#', 'G♭': 'F#', 'A♭': 'G#', 'B♭': 'A#' };
            return sharpMap[note] || note;
        } else if (this.config.notation === 'flats') {
            const flatMap = { 'C#': 'D♭', 'D#': 'E♭', 'F#': 'G♭', 'G#': 'A♭', 'A#': 'B♭' };
            return flatMap[note] || note;
        } else {
            // Both notation - show combined format
            const bothMap = {
                'C#': 'C#/D♭', 'D♭': 'C#/D♭',
                'D#': 'D#/E♭', 'E♭': 'D#/E♭',
                'F#': 'F#/G♭', 'G♭': 'F#/G♭',
                'G#': 'G#/A♭', 'A♭': 'G#/A♭',
                'A#': 'A#/B♭', 'B♭': 'A#/B♭'
            };
            return bothMap[note] || note;
        }
    }

    updateScore() {
        const progress = document.getElementById('progress');
        const percentage = this.score.total > 0 ? Math.round((this.score.correct / this.score.total) * 100) : 0;
        let scoreText = `${this.t('score')}: ${this.score.correct}/${this.score.total} (${percentage}%)`;

        if (this.reviewMode) {
            scoreText = `🔄 ${this.t('reviewMode')}: ${scoreText} | ${this.t('reviewModeDesc')} (${this.reviewMistakes.length})`;
        } else if (this.timerMode && this.mistakes.length > 0) {
            scoreText += ` | ❌ ${this.mistakes.length}`;
        }

        progress.textContent = scoreText;
    }
    showFretboardNotesModal() {
        const modal = document.getElementById('fretboardNotesModal');
        modal.style.display = 'flex';
        this.drawFretboardWithAllNotes();

        // Add click handler for closing modal when clicking outside
        modal.onclick = (e) => {
            if (e.target === modal) {
                this.closeFretboardNotesModal();
            }
        };
    }

    closeFretboardNotesModal() {
        const modal = document.getElementById('fretboardNotesModal');
        modal.style.display = 'none';
    }

    drawFretboardWithAllNotes() {
        const svg = document.getElementById('fretboardWithNotes');
        svg.innerHTML = '';

        const fretCount = this.config.fretTo;
        const fretWidth = 80;
        const stringSpacing = 40;
        const svgWidth = (fretCount + 1) * fretWidth + 100;
        const svgHeight = 6 * stringSpacing + 40;

        svg.setAttribute('width', svgWidth);
        svg.setAttribute('height', svgHeight);
        svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

        const woodColor = getComputedStyle(document.documentElement).getPropertyValue('--fretboard-wood').trim();
        const fretColor = getComputedStyle(document.documentElement).getPropertyValue('--fret-wire').trim();
        const stringColor = getComputedStyle(document.documentElement).getPropertyValue('--string-color').trim();
        const dotColor = getComputedStyle(document.documentElement).getPropertyValue('--dot-color').trim();

        const fretboard = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        fretboard.setAttribute('x', '50');
        fretboard.setAttribute('y', '20');
        fretboard.setAttribute('width', fretCount * fretWidth);
        fretboard.setAttribute('height', 5 * stringSpacing);
        fretboard.setAttribute('fill', woodColor);
        fretboard.setAttribute('rx', '5');
        svg.appendChild(fretboard);

        for (let i = 0; i <= fretCount; i++) {
            const x = 50 + i * fretWidth;
            const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            fret.setAttribute('x1', x);
            fret.setAttribute('y1', '20');
            fret.setAttribute('x2', x);
            fret.setAttribute('y2', 20 + 5 * stringSpacing);
            fret.setAttribute('stroke', fretColor);
            fret.setAttribute('stroke-width', i === 0 ? '6' : '3');
            svg.appendChild(fret);

            if (i > 0) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x - fretWidth / 2);
                text.setAttribute('y', 5 * stringSpacing + 50);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', 'var(--text-secondary)');
                text.setAttribute('font-size', '14');
                text.textContent = i;
                svg.appendChild(text);
            }
        }

        const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
        const doubleDotFrets = [12, 24];

        dotFrets.forEach(fret => {
            if (fret <= fretCount) {
                const x = 50 + (fret - 0.5) * fretWidth;
                if (doubleDotFrets.includes(fret)) {
                    [1.5, 3.5].forEach(yPos => {
                        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        dot.setAttribute('cx', x);
                        dot.setAttribute('cy', 20 + yPos * stringSpacing);
                        dot.setAttribute('r', '8');
                        dot.setAttribute('fill', dotColor);
                        svg.appendChild(dot);
                    });
                } else {
                    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    dot.setAttribute('cx', x);
                    dot.setAttribute('cy', 20 + 2.5 * stringSpacing);
                    dot.setAttribute('r', '8');
                    dot.setAttribute('fill', dotColor);
                    svg.appendChild(dot);
                }
            }
        });

        for (let i = 0; i < 6; i++) {
            const y = 20 + i * stringSpacing;
            const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            string.setAttribute('x1', '50');
            string.setAttribute('y1', y);
            string.setAttribute('x2', 50 + fretCount * fretWidth);
            string.setAttribute('y2', y);
            string.setAttribute('stroke', stringColor);
            string.setAttribute('stroke-width', 1.5 + (5 - i) * 0.5);
            svg.appendChild(string);

            const stringLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            stringLabel.setAttribute('x', '30');
            stringLabel.setAttribute('y', y + 5);
            stringLabel.setAttribute('text-anchor', 'middle');
            stringLabel.setAttribute('fill', 'var(--text-primary)');
            stringLabel.setAttribute('font-size', '16');
            stringLabel.setAttribute('font-weight', 'bold');
            stringLabel.textContent = standardTuning[i];
            svg.appendChild(stringLabel);
        }

        // Color map for notes
        const noteColors = {
            'A': '#FF8C00',      // orange
            'B': '#DC143C',      // red
            'C': '#8B00FF',      // purple
            'D': '#1E90FF',      // blue
            'E': '#8B4513',      // brown
            'F': '#00CED1',      // light blue
            'G': '#32CD32'       // green
        };

        // Add all notes to the fretboard
        for (let stringIndex = 0; stringIndex < 6; stringIndex++) {
            for (let fret = this.config.fretFrom; fret <= this.config.fretTo; fret++) {
                const openString = standardTuning[stringIndex];
                const note = this.getNoteAtFret(openString, fret);
                const displayNote = this.formatNote(note);

                const x = 50 + (fret - 0.5) * fretWidth;
                const y = 20 + stringIndex * stringSpacing;

                // Check if it's a sharp/flat
                const isAccidental = displayNote.includes('#') || displayNote.includes('b') || displayNote.includes('/');

                // Extract base note (first letter)
                const baseNote = displayNote.charAt(0);

                // Select color
                let noteColor;
                if (isAccidental) {
                    noteColor = '#2a2a2a';  // black for sharp/flat
                } else {
                    noteColor = noteColors[baseNote] || '#4caf50';
                }

                // Background circle for the note
                const noteCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                noteCircle.setAttribute('cx', x);
                noteCircle.setAttribute('cy', y);
                noteCircle.setAttribute('r', '18');
                noteCircle.setAttribute('fill', noteColor);
                noteCircle.setAttribute('opacity', '0.9');
                svg.appendChild(noteCircle);

                const noteText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                noteText.setAttribute('x', x);
                noteText.setAttribute('y', y);
                noteText.setAttribute('text-anchor', 'middle');
                noteText.setAttribute('dominant-baseline', 'central');
                noteText.setAttribute('fill', 'white');
                noteText.setAttribute('font-size', displayNote.length > 2 ? '11' : '14');
                noteText.setAttribute('font-weight', 'bold');
                noteText.textContent = displayNote;
                svg.appendChild(noteText);
            }
        }
    }
}

const App = new FretboardTrainer();