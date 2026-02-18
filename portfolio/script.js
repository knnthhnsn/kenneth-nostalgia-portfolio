/* Minimal XP Sound System */
const XP_CLICK = "https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/button_tiny.mp3";

/* ========================================
   LANGUAGE SYSTEM (OPTION A)
   ======================================== */
window.currentLang = 'en';

const translations = {
    en: {
        // UI Elements
        'start_menu': 'Start',
        'recycle_bin': 'Recycle Bin',
        'my_computer': 'My Computer',
        'win_my-computer': 'My Computer',
        'my_documents': 'My Documents',
        'win_my-documents': 'My Documents',

        // Window Titles
        'win_about': 'About Kenneth - My Computer',
        'win_projects': 'Projects - My Documents',
        'win_skills': 'System Properties',
        'win_contact': 'New Message - Outlook Express',
        'win_resume': 'Resume.txt - Notepad',
        'win_ie': 'Internet Explorer',
        'win_paint': 'untitled - Paint',
        'win_minesweeper': 'Minesweeper',
        'win_pinball': '3D Pinball',
        'win_recycle-bin': 'Recycle Bin',
        'win_games': 'Games',
        'win_tools': 'Tools',

        // Clippy Phrases (Keys match Python script)
        'clippy_startup': "Welcome back, Kenneth! Your desktop is ready.",
        'clippy_shutdown': "Are you sure you want to shut down? I'll miss you!",
        'clippy_error': "Oops! Something went wrong. But don't worry, I'm here to help!",
        'clippy_window_close': "Goodbye, window! See you next time.",
        'clippy_logon': "Hello Kenneth! Ready to show off your portfolio?",
        'clippy_welcome': "It looks like you're browsing a portfolio. Would you like help?",
        'clippy_meme': "Don't forget to check the Recycle Bin for memes!",
        'clippy_double_click': "Double-click an icon to open it.",
        'clippy_aarhus': "Aarhus is a great city. Did you know that?",
        'clippy_else': "Is there anything else I can do for you?",
        'clippy_talent': "Kenneth is an award-winning multimedia creator. Very talented!",
        'clippy_navigation': "Need a hand with navigation? Just click around!",
        'clippy_productivity': "You've been very productive today! Keep it up!",
        'clippy_coffee': "Time for a coffee break? I'll keep an eye on things.",
        'clippy_weekend': "Working on a weekend? Now that's dedication!",
        'clippy_pinball': "Oh, Pinball! Did you know my high score is 1,234,000?",
        'clippy_paint': "Drawing something for the portfolio? I can help you with shapes!",
        'clippy_minesweeper': "Don't click the mines! (I've been there...)",
        'clippy_search': "Rover is a good boy, isn't he?",
        'clippy_ie': "Looking for more projects? Check the favorites sidebar!",
        'clippy_notepad': "Writing something important? Don't forget to save!",
        'clippy_photos': "Nice photos! You have a great eye for composition.",
        'clippy_cmd': "Ooh, the command prompt! You must be a power user.",
        'clippy_winamp': "It really whips the llama's behind! Classic Winamp.",
        'clippy_cat_like': "Meow! The cat seems to like your portfolio.",
        'clippy_cat_recycle': "I think the cat is looking for the Recycle Bin.",
        'clippy_cat_step': "Watch out! Don't let him step on your windows.",
        'clippy_cat_treat': "Does anyone have a digital treat? This cat looks hungry.",
        'clippy_cat_sleep': "Shhh! The cat is taking a nap on your desktop.",
        'clippy_cat_knock': "Oh no! The cat knocked over a window! Classic cat behavior.",
        'clippy_cat_keyboard': "The cat is trying to type! I wonder what it's writing.",
        'clippy_cluttered': "Your desktop is looking a bit cluttered. Let me help you with that!",
        'clippy_updates': "New updates are available for your computer. Check the Control Panel!",
        'clippy_meme_secret': "I found some secret memes in the recycle bin. Don't tell Kenneth I told you!",
        'clippy_keyboard_shortcut': "Pro tip: Press Alt plus F4 to close windows quickly!",
        'clippy_easter_egg': "You found a secret! Kenneth hid easter eggs all over this portfolio.",
        'clippy_hc_on': "Whoa! That's high contrast! Very retro.",
        'clippy_hc_off': "Back to the classic look!",
        'clippy_theme_success': "Applied the new color scheme! Looking good.",
        'clippy_lang_changed': "Language changed! Now we're speaking English.",
        'clippy_photo_nice': "What a beautiful photo! Kenneth has great taste.",
        'clippy_photo_next': "Let me show you the next masterpiece!",
        'clippy_notepad_save': "Your note has been saved! I'll remember it for you.",
        'clippy_notepad_tip': "Did you know? You can save notes and they'll still be here tomorrow!",
        'clippy_minesweeper_win': "You won! You're a minesweeping pro.",
        'clippy_minesweeper_lost': "Kaboom! Better luck next time."
    },
    da: {
        // UI Elements
        'start_menu': 'Start',
        'recycle_bin': 'Papirkurv',
        'my_computer': 'Denne Computer',
        'win_my-computer': 'Denne Computer',
        'my_documents': 'Dokumenter',
        'win_my-documents': 'Dokumenter',

        // Window Titles
        'win_about': 'Om Kenneth - Denne Computer',
        'win_projects': 'Projekter - Dokumenter',
        'win_skills': 'Systemegenskaber',
        'win_contact': 'Ny Besked - Outlook Express',
        'win_resume': 'CV.txt - Notesblok',
        'win_ie': 'Internet Explorer',
        'win_paint': 'uden navn - Paint',
        'win_minesweeper': 'Minestryger',
        'win_pinball': '3D Pinball',
        'win_recycle-bin': 'Papirkurv',
        'win_games': 'Spil',
        'win_tools': 'Værktøjer',

        // Clippy Phrases (Keys match Python script)
        'clippy_startup': "Velkommen tilbage, Kenneth! Dit skrivebord er klar.",
        'clippy_shutdown': "Er du sikker på, at du vil lukke ned? Jeg kommer til at savne dig!",
        'clippy_error': "Ups! Noget gik galt. Men bare rolig, jeg er her for at hjælpe!",
        'clippy_window_close': "Farvel vindue! Vi ses næste gang.",
        'clippy_logon': "Hej Kenneth! Klar til at vise din portfolio frem?",
        'clippy_welcome': "Det ser ud til, at du kigger på en portfolio. Har du brug for hjælp?",
        'clippy_meme': "Glem ikke at tjekke Papirkurven for memes!",
        'clippy_double_click': "Dobbeltklik på et ikon for at åbne det.",
        'clippy_aarhus': "Aarhus er en fantastisk by. Vidste du det?",
        'clippy_else': "Er der andet, jeg kan gøre for dig?",
        'clippy_talent': "Kenneth er en prisvindende multimedie-skaber. Meget talentfuld!",
        'clippy_navigation': "Har du brug for hjælp til navigation? Bare klik omkring!",
        'clippy_productivity': "Du har været meget produktiv i dag! Fortsæt det gode arbejde!",
        'clippy_coffee': "Tid til en kaffepause? Jeg holder øje med tingene.",
        'clippy_weekend': "Arbejder du i weekenden? Det kalder jeg dedikation!",
        'clippy_pinball': "Åh, Pinball! Vidste du, at min highscore er en million...",
        'clippy_paint': "Tegner du noget til portfolioen? Jeg kan hjælpe dig med formerne!",
        'clippy_minesweeper': "Pas på minerne! (Jeg har været der...)",
        'clippy_search': "Rover er en god dreng, er han ikke?",
        'clippy_ie': "Leder du efter flere projekter? Tjek favoritterne i sidepanelet!",
        'clippy_notepad': "Skriver du noget vigtigt? Glem ikke at gemme!",
        'clippy_photos': "Flotte billeder! Du har et godt øje for komposition.",
        'clippy_cmd': "Uuh, kommandoprompten! Du må være en power user.",
        'clippy_winamp': "It really whips the llama's behind! Klassisk Winamp.",
        'clippy_cat_like': "Mjav! Katten ser ud til at kunne lide din portfolio.",
        'clippy_cat_recycle': "Jeg tror, katten leder efter Papirkurven.",
        'clippy_cat_step': "Pas på! Lad den ikke træde på dine vinduer.",
        'clippy_cat_treat': "Er der nogen, der har en digital godbid? Katten ser sulten ud.",
        'clippy_cat_sleep': "Shhh! Katten tager en lur på dit skrivebord.",
        'clippy_cat_knock': "Åh nej! Katten væltede et vindue! Typisk katteadfærd.",
        'clippy_cat_keyboard': "Katten prøver at skrive! Jeg gad vide, hvad den skriver.",
        'clippy_cluttered': "Dit skrivebord ser lidt rodet ud. Lad mig hjælpe dig med det!",
        'clippy_updates': "Der er nye opdateringer til din computer. Tjek Kontrolpanelet!",
        'clippy_meme_secret': "Jeg fandt nogle hemmelige memes i papirkurven. Sig ikke til Kenneth...",
        'clippy_keyboard_shortcut': "Pro tip: Tryk Alt plus F4 for at lukke vinduer hurtigt!",
        'clippy_easter_egg': "Du fandt en hemmelighed! Kenneth har gemt påskeæg over hele denne portfolio.",
        'clippy_hc_on': "Wow! Det er høj kontrast! Meget retro.",
        'clippy_hc_off': "Tilbage til det klassiske look!",
        'clippy_theme_success': "Nyt farvetema anvendt! Det ser godt ud.",
        'clippy_lang_changed': "Sproget er ændret! Nu snakker vi dansk.",
        'clippy_photo_nice': "Sikke et smukt billede! Kenneth har god smag.",
        'clippy_photo_next': "Lad mig vise dig det næste mesterværk!",
        'clippy_notepad_save': "Din note er gemt! Jeg skal nok huske den for dig.",
        'clippy_notepad_tip': "Vidste du det? Du kan gemme noter, og de vil stadig være her i morgen!",
        'clippy_minesweeper_win': "Du vandt! Du er en minestryger-proff.",
        'clippy_minesweeper_lost': "Kaboom! Bedre held næste gang."
    },
    de: {
        // UI Elements
        'start_menu': 'Start',
        'recycle_bin': 'Papierkorb',
        'my_computer': 'Mein Computer',
        'win_my-computer': 'Mein Computer',
        'my_documents': 'Eigene Dateien',
        'win_my-documents': 'Eigene Dateien',

        // Window Titles
        'win_about': 'Über Kenneth - Mein Computer',
        'win_projects': 'Projekte - Eigene Dateien',
        'win_skills': 'Systemeigenschaften',
        'win_contact': 'Neue Nachricht - Outlook Express',
        'win_resume': 'Lebenslauf.txt - Editor',
        'win_ie': 'Internet Explorer',
        'win_paint': 'unbenannt - Paint',
        'win_minesweeper': 'Minesweeper',
        'win_pinball': '3D Pinball',
        'win_recycle-bin': 'Papierkorb',
        'win_games': 'Spiele',
        'win_tools': 'Werkzeuge',

        // Clippy Phrases
        'clippy_startup': "Willkommen zurück, Kenneth! Dein Desktop ist bereit.",
        'clippy_shutdown': "Bist du sicher, dass du herunterfahren möchtest? Ich werde dich vermissen!",
        'clippy_error': "Hoppla! Etwas ist schiefgegangen. Aber keine Sorge, ich bin hier um zu helfen!",
        'clippy_window_close': "Auf Wiedersehen, Fenster! Bis zum nächsten Mal.",
        'clippy_logon': "Hallo Kenneth! Bereit, dein Portfolio zu präsentieren?",
        'clippy_welcome': "Es sieht so aus, als ob du ein Portfolio durchstöberst. Brauchst du Hilfe?",
        'clippy_meme': "Vergiss nicht, im Papierkorb nach Memes zu schauen!",
        'clippy_double_click': "Doppelklicke auf ein Symbol, um es zu öffnen.",
        'clippy_aarhus': "Aarhus ist eine tolle Stadt. Wusstest du das?",
        'clippy_else': "Gibt es noch etwas, das ich für dich tun kann?",
        'clippy_talent': "Kenneth ist ein preisgekrönter Multimedia-Schöpfer. Sehr talentiert!",
        'clippy_navigation': "Brauchst du Hilfe bei der Navigation? Klick einfach herum!",
        'clippy_productivity': "Du warst heute sehr produktiv! Weiter so!",
        'clippy_coffee': "Zeit für eine Kaffeepause? Ich behalte alles im Auge.",
        'clippy_weekend': "Am Wochenende arbeiten? Das nenne ich Hingabe!",
        'clippy_pinball': "Oh, Pinball! Wusstest du, mein Highscore ist 1.234.000?",
        'clippy_paint': "Malst du etwas fürs Portfolio? Ich kann dir mit Formen helfen!",
        'clippy_minesweeper': "Klick nicht auf die Minen! (War ich schon...)",
        'clippy_search': "Rover ist ein guter Junge, oder?",
        'clippy_ie': "Suchst du nach mehr Projekten? Schau in die Favoritenleiste!",
        'clippy_notepad': "Schreibst du etwas Wichtiges? Vergiss nicht zu speichern!",
        'clippy_photos': "Schöne Fotos! Du hast ein gutes Auge für Komposition.",
        'clippy_cmd': "Ooh, die Eingabeaufforderung! Du musst ein Power-User sein.",
        'clippy_winamp': "It really whips the llama's behind! Klassisches Winamp.",
        'clippy_cat_like': "Miau! Die Katze scheint dein Portfolio zu mögen.",
        'clippy_cat_recycle': "Ich glaube, die Katze sucht den Papierkorb.",
        'clippy_cat_step': "Vorsicht! Lass sie nicht auf deine Fenster treten.",
        'clippy_cat_treat': "Hat jemand ein digitales Leckerli? Die Katze sieht hungrig aus.",
        'clippy_cat_sleep': "Psst! Die Katze macht ein Nickerchen auf deinem Desktop.",
        'clippy_cat_knock': "Oh nein! Die Katze hat ein Fenster umgeworfen! Typisches Katzenverhalten.",
        'clippy_cat_keyboard': "Die Katze versucht zu tippen! Was sie wohl schreibt?",
        'clippy_cluttered': "Dein Desktop sieht etwas unordentlich aus. Lass mich dir helfen!",
        'clippy_updates': "Neue Updates sind verfügbar. Prüfe die Systemsteuerung!",
        'clippy_meme_secret': "Ich habe geheime Memes im Papierkorb gefunden. Sag nicht Kenneth, dass ich es dir verraten habe!",
        'clippy_keyboard_shortcut': "Profi-Tipp: Drücke Alt plus F4, um Fenster schnell zu schließen!",
        'clippy_easter_egg': "Du hast ein Geheimnis gefunden! Kenneth hat Ostereier überall in diesem Portfolio versteckt.",
        'clippy_hc_on': "Wow! Das ist hoher Kontrast! Sehr retro.",
        'clippy_hc_off': "Zurück zum klassischen Look!",
        'clippy_theme_success': "Neues Farbschema angewendet! Sieht gut aus.",
        'clippy_lang_changed': "Sprache geändert! Jetzt sprechen wir Deutsch.",
        'clippy_photo_nice': "Was für ein schönes Foto! Kenneth hat guten Geschmack.",
        'clippy_photo_next': "Lass mich dir das nächste Meisterwerk zeigen!",
        'clippy_notepad_save': "Deine Notiz wurde gespeichert! Ich merke sie mir für dich.",
        'clippy_notepad_tip': "Wusstest du? Du kannst Notizen speichern und sie sind morgen noch da!",
        'clippy_minesweeper_win': "Du hast gewonnen! Du bist ein Minesweeper-Profi.",
        'clippy_minesweeper_lost': "Kaboom! Viel Glück beim nächsten Mal."
    }
};

window.setLanguage = function (lang) {
    if (!translations[lang]) return;
    window.currentLang = lang;
    document.documentElement.lang = lang;

    // Update Desktop Icons
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        const winId = icon.getAttribute('data-window');
        if (winId) {
            const key = 'win_' + winId;
            if (translations[lang][key]) {
                const span = icon.querySelector('span');
                if (span) span.textContent = translations[lang][key];
            }
        }
    });

    // Update Start Button
    const startBtn = document.querySelector('.start-btn-text');
    if (startBtn) startBtn.textContent = translations[lang]['start_menu'];

    // Refresh About Me window content if it's open
    if (typeof refreshAboutContent === 'function') refreshAboutContent(lang);

    // Play sound
    if (window.clippySpeak) window.clippySpeak('clippy_lang_changed');

    // Update Tray Icon
    const switchEl = document.querySelector('#language-switch span');
    if (switchEl) switchEl.textContent = lang.toUpperCase();

    // Update Desktop Flag Icons
    document.querySelectorAll('.lang-icon').forEach(icon => {
        icon.classList.remove('active-lang');
    });
    const activeFlag = document.getElementById('icon-lang-' + lang);
    if (activeFlag) activeFlag.classList.add('active-lang');
};

window.toggleLanguage = function () {
    const langs = ['en', 'da', 'de'];
    const idx = langs.indexOf(window.currentLang);
    const newLang = langs[(idx + 1) % langs.length];
    window.setLanguage(newLang);
};

/* ========================================
   ABOUT ME - MULTILINGUAL CONTENT
   ======================================== */
const aboutTranslations = {
    en: {
        sidebar_education: 'Multimedia Design',
        sidebar_semester: '3rd Semester',
        section1_title: 'Who am I?',
        section1_text: "My name is Kenneth, I'm 24 years old and I live in Aarhus. I'm a creative entrepreneur-type who loves building things from scratch — whether it's websites, apps, games or entirely new concepts. I'm defined by <strong>courage</strong>, <strong>curiosity</strong> and a strong <strong>resilience</strong> — I rarely give up, even when things get tough. My personal ethics and presence make people trust me and enjoy working with me.",
        section2_title: 'What am I passionate about?',
        section2_private: '<strong>Private:</strong> Technology, crypto, gaming, music and experimenting with new ideas. I can spend hours diving into a new concept just because it fascinates me.',
        section2_prof: "<strong>Professional:</strong> Creating interactive digital experiences that surprise people. I'm passionate about combining design and code into something that feels alive — like this portfolio, built as a fully functional Windows XP simulation in the browser.",
        section3_title: 'Why Multimedia Design?',
        section3_text: "I've always built things on the web — from websites as a kid to crypto projects as an adult. The Multimedia Design program gives me the academic foundation I was missing: UX methods, design principles, and a community of like-minded creatives. It's the perfect bridge between my self-taught experience and the professional world.",
        section4_title: 'Favorite study projects',
        section4_text: "The projects where I've had creative freedom have been the best. I love when technology and storytelling meet — like building interactive web experiences or concepts that challenge the norm. This portfolio is a great example: a Windows XP arcade as a portfolio isn't standard, but that's exactly the point.",
        section5_title: 'Strengths & tools',
        section5_items: [
            '<strong>Frontend development:</strong> HTML, CSS, JavaScript — I can build complex interactive interfaces from scratch',
            '<strong>Design:</strong> Figma, UI/UX principles, prototyping',
            '<strong>AI tools:</strong> I use AI as a force-multiplier in my workflow — from ideation to coding',
            '<strong>Blockchain/Web3:</strong> Smart contracts, token design, decentralized apps',
            '<strong>Video & content:</strong> Content creation, social media automation'
        ],
        section5_example: "<strong>Example:</strong> This portfolio illustrates my strengths — it's a complete operating system in the browser with drag-and-drop windows, themes, materials, a cat you can control, Clippy with AI speech, and a full snake game in the command prompt.",
        section6_title: 'What others say about me',
        section6_quotes: [
            '"Kenneth is the type who just sits down and builds it, while everyone else is still talking about it."',
            '"He always thinks in possibilities rather than limitations — and his projects are never boring."'
        ],
        section7_title: 'Relevant experience',
        section7_items: [
            '<strong>Independent web developer:</strong> Built and launched multiple web projects, from interactive sites to crypto platforms',
            '<strong>Crypto entrepreneur:</strong> Created token projects with thousands of users, incl. Pepecoin Arcade with on-chain gameplay',
            '<strong>Content creator:</strong> Automated social media pipelines with AI-generated content'
        ],
        section7_skills: '<strong>Skills gained:</strong> Self-management, rapid prototyping, user empathy, technical problem-solving under pressure, and the ability to go from idea to finished product alone.',
        section8_title: 'The future — in 5 years',
        section8_internship: '<strong>Dream internship:</strong> A creative tech agency or startup where I can build innovative digital experiences — preferably with focus on interactive design, gamification or Web3.',
        section8_job: '<strong>Dream job:</strong> Creative Technologist or Product Designer at a company that dares to think differently. Alternatively: my own creative tech studio where we build the wildest digital experiences.',
        section8_vision: '<strong>In 5 years</strong> I see myself as an experienced digital creator with a portfolio of projects that made a difference — and with a network of collaborators who share my passion for pushing the boundaries of what tech and design can do.'
    },
    da: {
        sidebar_education: 'Multimediedesign',
        sidebar_semester: '3. Semester',
        section1_title: 'Hvem er jeg?',
        section1_text: 'Jeg hedder Kenneth, er 24 år og bor i Aarhus. Jeg er en kreativ iværksætter-type der elsker at bygge ting fra bunden — hvad enten det er websites, apps, spil eller helt nye koncepter. Jeg kendetegnes ved <strong>mod</strong>, <strong>nysgerrighed</strong> og en stærk <strong>modstandskraft</strong> — jeg giver sjældent op, selv når tingene bliver svære. Min personlige etik og nærvær gør, at folk stoler på mig og gerne samarbejder med mig.',
        section2_title: 'Hvad brænder jeg for?',
        section2_private: '<strong>Privat:</strong> Teknologi, krypto, gaming, musik og at eksperimentere med nye idéer. Jeg kan bruge timer på at dykke ned i et nyt koncept bare fordi det fascinerer mig.',
        section2_prof: '<strong>Professionelt:</strong> At skabe interaktive digitale oplevelser der overrasker folk. Jeg brænder for at kombinere design og kode til noget der føles levende — som denne portfolio, der er bygget som en fuldt funktionel Windows XP-simulation i browseren.',
        section3_title: 'Hvorfor Multimediedesign?',
        section3_text: 'Jeg har altid bygget ting på nettet — lige fra hjemmesider som barn til krypto-projekter som voksen. Multimediedesign-uddannelsen giver mig det faglige fundament jeg manglede: UX-metoder, designprincipper, og et fællesskab af ligesindede. Det er den perfekte bro mellem min selvlærte erfaring og den professionelle verden.',
        section4_title: 'Sjoveste projekter på studiet',
        section4_text: 'De projekter hvor jeg har fået frie hænder til at tænke kreativt har været de bedste. Jeg elsker når teknologi og storytelling mødes — f.eks. at bygge interaktive web-oplevelser eller koncepter der udfordrer det normale. Denne portfolio er et godt eksempel: en Windows XP-arkade som portfolio er ikke standard, men det er netop pointen.',
        section5_title: 'Faglige styrker & værktøjer',
        section5_items: [
            '<strong>Frontend-udvikling:</strong> HTML, CSS, JavaScript — jeg kan bygge komplekse interaktive interfaces fra scratch',
            '<strong>Design:</strong> Figma, UI/UX-principper, prototyping',
            '<strong>AI-værktøjer:</strong> Jeg bruger AI som en force-multiplier i mit workflow — fra idéudvikling til kodning',
            '<strong>Blockchain/Web3:</strong> Smart contracts, token-design, decentraliserede apps',
            '<strong>Video & indhold:</strong> Content creation, social media automation'
        ],
        section5_example: '<strong>Eksempel:</strong> Denne portfolio illustrerer mine styrker — den er et komplet operativsystem i browseren med drag-and-drop vinduer, temaer, materialer, en kat du kan styre, Clippy med AI-tale, og et fuldt snake-spil i kommandoprompten.',
        section6_title: 'Hvad siger andre om mig?',
        section6_quotes: [
            '"Kenneth er den type der bare sætter sig ned og bygger det, mens resten stadig snakker om det."',
            '"Han tænker altid i muligheder frem for begrænsninger — og hans projekter er aldrig kedelige."'
        ],
        section7_title: 'Relevante erfaringer',
        section7_items: [
            '<strong>Selvstændig webudvikler:</strong> Bygget og lanceret adskillige webprojekter, fra interaktive sites til crypto-platforme',
            '<strong>Krypto-iværksætter:</strong> Skabt token-projekter med tusindvis af brugere, inkl. Pepecoin Arcade med on-chain gameplay',
            '<strong>Content creator:</strong> Automatiseret social media pipelines med AI-genereret indhold'
        ],
        section7_skills: '<strong>Kompetencer det gav mig:</strong> Selvledelse, hurtig prototyping, brugerforståelse, teknisk problemløsning under pres, og evnen til at gå fra idé til færdigt produkt alene.',
        section8_title: 'Fremtiden — om 5 år',
        section8_internship: '<strong>Drømmepraktik:</strong> Et kreativt tech-bureau eller startup hvor jeg kan bygge innovative digitale oplevelser — gerne med fokus på interaktivt design, gamification eller Web3.',
        section8_job: '<strong>Drømmejob:</strong> Creative Technologist eller Product Designer i en virksomhed der tør tænke anderledes. Alternativt: mit eget kreative tech-studio hvor vi bygger de wildeste digitale oplevelser.',
        section8_vision: '<strong>Om 5 år</strong> ser jeg mig selv som en erfaren digital skaber med en portefølje af projekter der har gjort en forskel — og med et netværk af samarbejdspartnere der deler min passion for at skubbe grænserne for hvad tech og design kan.'
    },
    de: {
        sidebar_education: 'Multimedia Design',
        sidebar_semester: '3. Semester',
        section1_title: 'Wer bin ich?',
        section1_text: 'Ich heiße Kenneth, bin 24 Jahre alt und lebe in Aarhus. Ich bin ein kreativer Unternehmertyp, der es liebt, Dinge von Grund auf zu bauen — ob Websites, Apps, Spiele oder völlig neue Konzepte. Ich zeichne mich durch <strong>Mut</strong>, <strong>Neugier</strong> und eine starke <strong>Widerstandsfähigkeit</strong> aus — ich gebe selten auf, auch wenn es schwierig wird. Meine persönliche Ethik und Präsenz sorgen dafür, dass Menschen mir vertrauen und gerne mit mir zusammenarbeiten.',
        section2_title: 'Wofür brenne ich?',
        section2_private: '<strong>Privat:</strong> Technologie, Krypto, Gaming, Musik und das Experimentieren mit neuen Ideen. Ich kann stundenlang in ein neues Konzept eintauchen, einfach weil es mich fasziniert.',
        section2_prof: '<strong>Beruflich:</strong> Interaktive digitale Erlebnisse zu schaffen, die Menschen überraschen. Ich brenne dafür, Design und Code zu etwas zu verbinden, das sich lebendig anfühlt — wie dieses Portfolio, das als voll funktionsfähige Windows XP-Simulation im Browser gebaut ist.',
        section3_title: 'Warum Multimedia Design?',
        section3_text: 'Ich habe schon immer Dinge im Web gebaut — von Websites als Kind bis zu Krypto-Projekten als Erwachsener. Das Multimedia-Design-Studium gibt mir das akademische Fundament, das mir fehlte: UX-Methoden, Designprinzipien und eine Gemeinschaft Gleichgesinnter. Es ist die perfekte Brücke zwischen meiner selbst erlernten Erfahrung und der professionellen Welt.',
        section4_title: 'Lieblingsprojekte im Studium',
        section4_text: 'Die Projekte, bei denen ich kreative Freiheit hatte, waren die besten. Ich liebe es, wenn Technologie und Storytelling sich treffen — wie interaktive Web-Erlebnisse oder Konzepte, die das Normale herausfordern. Dieses Portfolio ist ein gutes Beispiel: Eine Windows XP-Arcade als Portfolio ist nicht Standard, aber genau das ist der Punkt.',
        section5_title: 'Stärken & Werkzeuge',
        section5_items: [
            '<strong>Frontend-Entwicklung:</strong> HTML, CSS, JavaScript — ich kann komplexe interaktive Interfaces von Grund auf bauen',
            '<strong>Design:</strong> Figma, UI/UX-Prinzipien, Prototyping',
            '<strong>KI-Werkzeuge:</strong> Ich nutze KI als Kraftmultiplikator in meinem Workflow — von der Ideenfindung bis zum Programmieren',
            '<strong>Blockchain/Web3:</strong> Smart Contracts, Token-Design, dezentralisierte Apps',
            '<strong>Video & Inhalt:</strong> Content Creation, Social Media Automatisierung'
        ],
        section5_example: '<strong>Beispiel:</strong> Dieses Portfolio zeigt meine Stärken — es ist ein komplettes Betriebssystem im Browser mit Drag-and-Drop-Fenstern, Themes, Materialien, einer Katze, die man steuern kann, Clippy mit KI-Sprache und einem vollständigen Snake-Spiel in der Eingabeaufforderung.',
        section6_title: 'Was andere über mich sagen',
        section6_quotes: [
            '"Kenneth ist der Typ, der sich einfach hinsetzt und es baut, während alle anderen noch darüber reden."',
            '"Er denkt immer in Möglichkeiten statt in Grenzen — und seine Projekte sind nie langweilig."'
        ],
        section7_title: 'Relevante Erfahrungen',
        section7_items: [
            '<strong>Selbstständiger Webentwickler:</strong> Mehrere Webprojekte gebaut und gelauncht, von interaktiven Seiten bis zu Krypto-Plattformen',
            '<strong>Krypto-Unternehmer:</strong> Token-Projekte mit Tausenden von Nutzern erstellt, inkl. Pepecoin Arcade mit On-Chain-Gameplay',
            '<strong>Content Creator:</strong> Automatisierte Social-Media-Pipelines mit KI-generierten Inhalten'
        ],
        section7_skills: '<strong>Erworbene Kompetenzen:</strong> Selbstmanagement, schnelles Prototyping, Nutzerverständnis, technische Problemlösung unter Druck und die Fähigkeit, allein von der Idee zum fertigen Produkt zu gelangen.',
        section8_title: 'Die Zukunft — in 5 Jahren',
        section8_internship: '<strong>Traumpraktikum:</strong> Eine kreative Tech-Agentur oder ein Startup, wo ich innovative digitale Erlebnisse bauen kann — vorzugsweise mit Fokus auf interaktives Design, Gamification oder Web3.',
        section8_job: '<strong>Traumjob:</strong> Creative Technologist oder Product Designer in einem Unternehmen, das es wagt, anders zu denken. Alternativ: mein eigenes kreatives Tech-Studio, in dem wir die verrücktesten digitalen Erlebnisse bauen.',
        section8_vision: '<strong>In 5 Jahren</strong> sehe ich mich als erfahrenen digitalen Schöpfer mit einem Portfolio von Projekten, die einen Unterschied gemacht haben — und mit einem Netzwerk von Kollaborateuren, die meine Leidenschaft teilen, die Grenzen dessen zu verschieben, was Technik und Design können.'
    }
};

function getAboutContent(lang) {
    const t = aboutTranslations[lang] || aboutTranslations.en;
    const skillTags = ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'UI/UX', 'AI Tools', 'Web3', 'Video'];
    const tagsHtml = skillTags.map(s => `<span class="skill-tag" style="color:#fff; border-color:rgba(255,255,255,0.4);">${s}</span>`).join('\n                        ');

    return `
            <div class="xp-content-wrapper about-win">
                <div class="sidebar">
                    <img src="assets/Me-pixel-smile.jpeg" class="profile-pic" style="object-fit: cover;">
                    <h3>Kenneth</h3>
                    <p>24 Years Old</p>
                    <p>Aarhus, Denmark</p>
                    <p style="margin-top:10px; font-size:10px;">${t.sidebar_education}</p>
                    <p style="font-size:10px;">${t.sidebar_semester}</p>
                    <div style="margin-top:15px;">
                        ${tagsHtml}
                    </div>
                </div>
                <div class="main-content">
                    <div class="about-section">
                        <h3><span class="section-icon">👤</span> ${t.section1_title}</h3>
                        <p>${t.section1_text}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">🔥</span> ${t.section2_title}</h3>
                        <p>${t.section2_private}</p>
                        <p>${t.section2_prof}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">🎓</span> ${t.section3_title}</h3>
                        <p>${t.section3_text}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">⭐</span> ${t.section4_title}</h3>
                        <p>${t.section4_text}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">💪</span> ${t.section5_title}</h3>
                        <ul>${t.section5_items.map(i => '<li>' + i + '</li>').join('')}</ul>
                        <p style="margin-top:8px;">${t.section5_example}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">💬</span> ${t.section6_title}</h3>
                        ${t.section6_quotes.map(q => '<div class="quote-box">' + q + '</div>').join('')}
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">💼</span> ${t.section7_title}</h3>
                        <ul>${t.section7_items.map(i => '<li>' + i + '</li>').join('')}</ul>
                        <p>${t.section7_skills}</p>
                    </div>
                    <div class="about-section">
                        <h3><span class="section-icon">🔮</span> ${t.section8_title}</h3>
                        <p>${t.section8_internship}</p>
                        <p>${t.section8_job}</p>
                        <p>${t.section8_vision}</p>
                    </div>
                </div>
            </div>
        `;
}

window.refreshAboutContent = function (lang) {
    const aboutWindow = document.querySelector('[data-win-id="about"] .window-content');
    if (aboutWindow) {
        aboutWindow.innerHTML = getAboutContent(lang);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Tray icon toggle
    const ls = document.getElementById('language-switch');
    if (ls) ls.onclick = window.toggleLanguage;

    // Desktop flag icons
    document.querySelectorAll('.lang-icon').forEach(icon => {
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const lang = icon.getAttribute('data-lang');
            if (lang) window.setLanguage(lang);
        });
    });
});

// Reuse a single Audio object for click sound to prevent memory leaks
let _clickAudio = null;
window.playSound = function () {
    const vol = document.getElementById('volume-icon');
    if (vol && !vol.classList.contains('active')) return;

    if (window.audioUnlocked) {
        if (!_clickAudio) {
            _clickAudio = new Audio(XP_CLICK);
            _clickAudio.volume = 0.4;
        }
        _clickAudio.currentTime = 0;
        _clickAudio.play().catch(() => { });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.xpInitialized) return;
    initClock();
    initStartMenu();
    initDesktopIcons();
    initWindowSystem();
    window.xpInitialized = true;

    // Unlock audio context on interaction
    const unlockAudio = () => {
        window.audioUnlocked = true;
        document.body.removeEventListener('click', unlockAudio);
        new Audio(XP_CLICK).play().catch(() => { });
    };
    document.body.addEventListener('click', unlockAudio);

    // Global click sound
    document.addEventListener('mousedown', () => window.playSound());

    // Connectivity for Start Menu and Quick Launch
    document.querySelectorAll('.menu-item[data-window]').forEach(item => {
        item.addEventListener('click', () => {
            const winId = item.getAttribute('data-window');
            openWindowById(winId);
            document.getElementById('start-menu').classList.add('hidden');
        });
    });

    document.querySelectorAll('.ql-icon[data-window]').forEach(icon => {
        icon.addEventListener('click', () => {
            const winId = icon.getAttribute('data-window');
            openWindowById(winId);
        });
    });

    document.getElementById('show-desktop').addEventListener('click', () => {
        Object.keys(windows).forEach(id => minimizeWindow(id));
    });

    const volIcon = document.getElementById('volume-icon');
    if (volIcon) {
        volIcon.onclick = () => {
            volIcon.classList.toggle('active');
            const isActive = volIcon.classList.contains('active');
            volIcon.querySelector('img').src = isActive ?
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 6v4h3l4 4V2L5 6H2zM12 8c0-2-1-3-2-4v8c1-1 2-2 2-4z' fill='white'/%3E%3C/svg%3E" :
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 6v4h3l4 4V2L5 6H2z' fill='gray'/%3E%3C/svg%3E";
        };
    }

    const infoIcon = document.getElementById('info-icon');
    if (infoIcon) {
        infoIcon.onclick = () => {
            alert("XP Audio: Click anywhere to unlock sounds. Toggle volume in taskbar.");
        };
    }
});

/* Clock Functionality */
function initClock() {
    const clockElement = document.getElementById('taskbar-clock');
    function updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
        clockElement.textContent = timeStr;
    }
    updateTime();
    setInterval(updateTime, 1000);
}

/* Start Menu Toggle */
function initStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        startMenu.classList.add('hidden');
    });

    startMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.getElementById('shut-down-btn').addEventListener('click', () => {
        document.getElementById('bsod').classList.remove('hidden');
    });
}

/* ========================================
   DESKTOP ICONS & DRAG LOGIC
   ======================================== */
const GRID_SIZE_X = 80;
const GRID_SIZE_Y = 85;

// Global Auto-Arrange Function (Row-Major: Left-to-Right, Top-Down)
// Respects .row-break elements to force new rows
window.arrangeIcons = function () {
    const iconGrid = document.getElementById('icon-grid');
    if (!iconGrid) return;
    const children = Array.from(iconGrid.children);
    const taskbarHeight = 30;
    const offset = 10;

    const availableW = window.innerWidth - (offset * 2);
    const maxCols = Math.floor(availableW / GRID_SIZE_X) || 1;

    let row = 0;
    let col = 0;

    children.forEach((child) => {
        if (child.classList.contains('row-break')) {
            // Force next row
            if (col > 0) {
                row++;
                col = 0;
            }
            return;
        }

        if (!child.classList.contains('desktop-icon')) return;

        child.style.left = (offset + col * GRID_SIZE_X) + 'px';
        child.style.top = (offset + row * GRID_SIZE_Y) + 'px';

        col++;
        if (col >= maxCols) {
            col = 0;
            row++;
        }

        if (window.makeIconDraggable) window.makeIconDraggable(child);
    });
};

// Redundant initDesktopIcons removed to unify with the main function below.

// Redundant makeIconDraggable removed to unify with the main function below.

window.snapToGrid = function (element) {
    const desktop = document.getElementById('desktop');
    const maxX = desktop.clientWidth - 75;
    const maxY = desktop.clientHeight - 75;
    const offset = 10; // Match arrangeIcons

    let left = parseInt(element.style.left || 0);
    let top = parseInt(element.style.top || 0);

    let gridCol = Math.round((left - offset) / GRID_SIZE_X);
    let gridRow = Math.round((top - offset) / GRID_SIZE_Y);

    if (gridCol < 0) gridCol = 0;
    if (gridRow < 0) gridRow = 0;

    let snappedLeft = offset + (gridCol * GRID_SIZE_X);
    let snappedTop = offset + (gridRow * GRID_SIZE_Y);

    snappedLeft = Math.max(offset, Math.min(snappedLeft, maxX));
    snappedTop = Math.max(offset, Math.min(snappedTop, maxY));

    element.style.left = snappedLeft + "px";
    element.style.top = snappedTop + "px";
};

// ==========================================
// FINAL LAYOUT FIX: MUTATION OBSERVER
// ==========================================
// Automatically re-arrange icons if new ones are added
const iconGrid = document.getElementById('icon-grid');
if (iconGrid) {
    const observer = new MutationObserver((mutations) => {
        let shouldArrange = false;
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if added node is an icon or contains one
                mutation.addedNodes.forEach(node => {
                    if (node.classList && node.classList.contains('desktop-icon')) {
                        shouldArrange = true;
                    }
                });
            }
        });

        if (shouldArrange && window.arrangeIcons) {
            if (window.arrangeTimeout) return; // Already scheduled
            window.arrangeTimeout = setTimeout(() => {
                window.arrangeIcons();
                window.arrangeTimeout = null;
            }, 100); // 100ms throttle
        }
    });

    observer.observe(iconGrid, { childList: true });
}

// Ensure initial run
window.addEventListener('load', () => {
    if (window.arrangeIcons) setTimeout(window.arrangeIcons, 500);
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('bsod').classList.add('hidden');
    }
});

/* Window System */
let zIndexCounter = 100;
const windows = {};

function initWindowSystem() {
    const container = document.getElementById('windows-container');
    const taskbarWins = document.getElementById('taskbar-windows');

    window.createWindow = function (id, title, icon, content) {
        if (windows[id]) {
            focusWindow(id);
            return;
        }

        // Translation override for title
        if (translations && window.currentLang && translations[window.currentLang]) {
            const trKey = 'win_' + id;
            if (translations[window.currentLang][trKey]) {
                title = translations[window.currentLang][trKey];
            }
        }

        const win = document.createElement('div');
        win.className = 'window active';
        win.id = `win-${id}`;
        win.style.zIndex = ++zIndexCounter;
        win.style.top = (100 + (Object.keys(windows).length * 20)) + 'px';
        win.style.left = (100 + (Object.keys(windows).length * 20)) + 'px';
        win.style.width = '450px';
        win.style.height = '350px';

        win.innerHTML = `
            <div class="title-bar">
                <div class="title-bar-text">
                    <img src="${icon}">
                    <span>${title}</span>
                </div>
                <div class="title-bar-controls">
                    <div class="control-btn btn-min" onclick="minimizeWindow('${id}')">_</div>
                    <div class="control-btn btn-max" onclick="maximizeWindow('${id}')">□</div>
                    <div class="control-btn btn-close" onclick="closeWindow('${id}')">X</div>
                </div>
            </div>
            <div class="window-content" style="padding:0;">
                ${content}
            </div>
        `;

        container.appendChild(win);
        windows[id] = win;

        const tbBtn = document.createElement('div');
        tbBtn.className = 'taskbar-item active';
        tbBtn.id = `tb-${id}`;
        tbBtn.innerHTML = `<img src="${icon}"> <span>${title}</span>`;
        tbBtn.onclick = () => toggleWindow(id);
        taskbarWins.appendChild(tbBtn);

        makeDraggable(win);
        makeResizable(win);
        focusWindow(id);
        playSound('window-open-sound');

        // Clippy Reactivity
        if (window.clippySpeak) {
            const comments = {
                'pinball': 'clippy_pinball',
                'paint': 'clippy_paint',
                'minesweeper': 'clippy_minesweeper',
                'search': 'clippy_search',
                'ie': 'clippy_ie'
            };
            if (comments[id]) window.clippySpeak(comments[id]);
        }
    };

    window.focusWindow = function (id) {
        Object.values(windows).forEach(w => {
            w.classList.remove('active');
            w.classList.add('inactive');
        });
        const win = windows[id];
        if (win) {
            win.classList.add('active');
            win.classList.remove('inactive');
            win.style.zIndex = ++zIndexCounter;
            win.classList.remove('hidden');

            document.querySelectorAll('.taskbar-item').forEach(b => b.classList.remove('active'));
            const tbBtn = document.getElementById(`tb-${id}`);
            if (tbBtn) tbBtn.classList.add('active');
        }
    };

    window.closeWindow = function (id) {
        const win = windows[id];
        if (win) {
            win.remove();
            delete windows[id];
            const tbBtn = document.getElementById(`tb-${id}`);
            if (tbBtn) tbBtn.remove();
            playSound('window-close-sound');
        }
    };

    window.minimizeWindow = function (id) {
        const win = windows[id];
        if (win) {
            win.classList.add('hidden');
            const tbBtn = document.getElementById(`tb-${id}`);
            if (tbBtn) tbBtn.classList.remove('active');
        }
    };

    window.toggleWindow = function (id) {
        const win = windows[id];
        if (!win) return;
        if (win.classList.contains('hidden') || !win.classList.contains('active')) {
            focusWindow(id);
        } else {
            minimizeWindow(id);
        }
    };
}

function makeDraggable(el) {
    const titleBar = el.querySelector('.title-bar');
    if (!titleBar) return; // Exit if no title bar
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    titleBar.onmousedown = (e) => {
        e = e || window.event;
        e.preventDefault();
        focusWindow(el.id.replace('win-', ''));
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = () => { document.onmouseup = null; document.onmousemove = null; };
        document.onmousemove = (moveE) => {
            moveE = moveE || window.event;
            moveE.preventDefault();
            pos1 = pos3 - moveE.clientX;
            pos2 = pos4 - moveE.clientY;
            pos3 = moveE.clientX;
            pos4 = moveE.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        };
    };
}

function makeResizable(win) {
    const resizers = ['resizer-r', 'resizer-b', 'resizer-rb'];
    resizers.forEach(rc => {
        const div = document.createElement('div');
        div.className = `resizer ${rc}`;
        win.appendChild(div);
        div.onmousedown = (e) => {
            e.preventDefault(); e.stopPropagation();
            focusWindow(win.id.replace('win-', ''));
            const startX = e.clientX; const startY = e.clientY;
            const startW = parseInt(window.getComputedStyle(win).width);
            const startH = parseInt(window.getComputedStyle(win).height);
            function onMove(me) {
                if (rc.includes('r')) win.style.width = (startW + me.clientX - startX) + 'px';
                if (rc.includes('b')) win.style.height = (startH + me.clientY - startY) + 'px';
            }
            function onUp() { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        };
    });
}

window.maximizeWindow = function (id) {
    const win = windows[id];
    if (win) {
        if (win.dataset.maximized === 'true') {
            win.style.top = win.dataset.oldTop; win.style.left = win.dataset.oldLeft;
            win.style.width = win.dataset.oldWidth; win.style.height = win.dataset.oldHeight;
            win.dataset.maximized = 'false';
        } else {
            win.dataset.oldTop = win.style.top; win.dataset.oldLeft = win.style.left;
            win.dataset.oldWidth = win.style.width; win.dataset.oldHeight = win.style.height;
            win.style.top = '0'; win.style.left = '0'; win.style.width = '100vw';
            win.style.height = 'calc(100vh - var(--taskbar-height))';
            win.dataset.maximized = 'true';
        }
    }
};

/* Desktop Icons & Dragging */
function initDesktopIcons() {
    // Initial arrangement using the grid logic
    if (window.arrangeIcons) window.arrangeIcons();

    const iconGrid = document.getElementById('icon-grid');
    if (!iconGrid) return;
    const icons = iconGrid.querySelectorAll('.desktop-icon');

    icons.forEach((icon) => {
        // Double click to open (Standard Mouse Behavior)
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const winId = icon.getAttribute('data-window');
            if (winId) openWindowById(winId);
        });

        // Click logic (Select + Arcade Single Click Support)
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');

            // Arcade enhancement: Single click to open!
            // We only trigger if it's NOT a double-click (though openWindowById handles duplicates)
            const winId = icon.getAttribute('data-window');
            if (winId) openWindowById(winId);
        });
    });

    // Deselect icons when clicking the desktop
    const desktop = document.getElementById('desktop');
    if (desktop) {
        desktop.addEventListener('click', () => {
            document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        });
    }

    // Re-arrange on resize
    window.addEventListener('resize', () => {
        if (window.arrangeIcons) window.arrangeIcons();
    });
}

function makeIconDraggable(icon) {
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    icon.onmousedown = (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        p3 = e.clientX; p4 = e.clientY;
        document.onmouseup = () => {
            document.onmouseup = null; document.onmousemove = null;
            // Snap to grid
            let snappedLeft = Math.round(icon.offsetLeft / GRID_SIZE_X) * GRID_SIZE_X + 10;
            let snappedTop = Math.round(icon.offsetTop / GRID_SIZE_Y) * GRID_SIZE_Y + 10;
            // Constrain to not overlap taskbar (30px height)
            const maxTop = window.innerHeight - 30 - 60; // taskbar height - approximate icon height
            if (snappedTop > maxTop) snappedTop = maxTop;
            if (snappedTop < 10) snappedTop = 10;
            if (snappedLeft < 10) snappedLeft = 10;
            icon.style.left = snappedLeft + 'px';
            icon.style.top = snappedTop + 'px';
        };
        document.onmousemove = (me) => {
            me.preventDefault();
            p1 = p3 - me.clientX; p2 = p4 - me.clientY; p3 = me.clientX; p4 = me.clientY;
            icon.style.top = (icon.offsetTop - p2) + "px";
            icon.style.left = (icon.offsetLeft - p1) + "px";
        };
    };
}

/* Window Content Definitions */
const windowContents = {
    'about': {
        title: 'About Kenneth - My Computer',
        icon: "assets/Me-pixel-smile.jpeg",
        get content() { return getAboutContent(window.currentLang); }
    },
    'projects': {
        title: 'Projects - My Documents',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E",
        content: `
            <div class="xp-explorer">
                <div class="explorer-toolbar">
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M10 2L4 8l6 6' stroke='%233a9d23' stroke-width='2' fill='none'/%3E%3C/svg%3E"> Back</button>
                    <div class="divider"></div>
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4v10h12V6H8l-2-2H2z' fill='%23ffcc00'/%3E%3C/svg%3E"> Folders</button>
                </div>
                <div class="explorer-grid">
                    <div class="explorer-item" onclick="openProject('volume-village')" ondblclick="openProject('volume-village')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Volume Village</span></div>
                    <div class="explorer-item" onclick="openProject('black-bible')" ondblclick="openProject('black-bible')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Premium Black Bible</span></div>
                    <div class="explorer-item" onclick="openProject('bitcoin-basics')" ondblclick="openProject('bitcoin-basics')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Bitcoin Basics</span></div>
                    <div class="explorer-item" onclick="openProject('pepecoin-arcade')" ondblclick="openProject('pepecoin-arcade')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Pepecoin Arcade</span></div>
                    <div class="explorer-item" onclick="openProject('museum-guide')" ondblclick="openProject('museum-guide')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Museum Spille Guide</span></div>
                    <div class="explorer-item" onclick="openProject('havblink')" ondblclick="openProject('havblink')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Havblink</span></div>
                    <div class="explorer-item" onclick="openProject('kekspace')" ondblclick="openProject('kekspace')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Kekspace</span></div>
                    <div class="explorer-item" onclick="openProject('basedman')" ondblclick="openProject('basedman')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E"><span>Basedman</span></div>
                </div>
            </div>
        `
    },
    'skills': {
        title: 'System Properties',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect x='10' y='10' width='28' height='28' fill='%23808080'/%3E%3C/svg%3E",
        content: `
            <div class="xp-tabs">
                <div class="tab-list">
                    <button class="tab-btn active" onclick="switchTab(this, 'general')">General</button>
                    <button class="tab-btn" onclick="switchTab(this, 'hardware')">Hardware</button>
                </div>
                <div class="tab-content active" id="tab-general">
                    <p><strong>System:</strong> Microsoft Windows XP Professional</p>
                    <p><strong>Registered to:</strong> Kenneth, Aarhus, Denmark</p>
                </div>
                <div class="tab-content" id="tab-hardware">
                    <ul><li>VS Code</li><li>Figma</li><li>Vercel</li></ul>
                </div>
            </div>
        `
    },
    'contact': {
        title: 'New Message - Outlook Express',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M1 3h14v10H1V3zm2 2v6l5-3.5L3 5zm10 0L8 8.5 3 5h10z' fill='%23666'/%3E%3C/svg%3E",
        content: `
            <div class="outlook-win">
                <div class="outlook-toolbar"><button>Send</button></div>
                <div class="outlook-form">
                    <div class="form-row"><span>To:</span><input type="text" value="kenneth@aarhus.dk" readonly></div>
                    <div class="form-row"><span>Subject:</span><input type="text"></div>
                    <textarea></textarea>
                </div>
            </div>
        `
    },
    'resume': {
        title: 'Resume.txt - Notepad',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 2h12v12H2V2z' fill='white' stroke='black'/%3E%3Cline x1='4' y1='5' x2='10' y2='5' stroke='black'/%3E%3Cline x1='4' y1='8' x2='12' y2='8' stroke='black'/%3E%3C/svg%3E",
        content: `
            <div class="notepad-win"><textarea readonly>KENNETH - MULTIMEDIA CREATOR\nLocation: Aarhus, Denmark\nAge: 24</textarea></div>
        `
    },
    'ie': {
        title: 'Internet Explorer',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='18' fill='%23003399'/%3E%3Ctext x='24' y='32' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3Ee%3C/text%3E%3C/svg%3E",
        content: `
            <div class="ie-layout">
                <div class="ie-sidebar">
                    <h3>Favorites</h3>
                    <a href="#" class="fav-link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='16' fill='%23003399' stroke='%23001F5C' stroke-width='2'/%3E%3Cpath d='M8 24c0-8.8 7.2-16 16-16s16 7.2 16 16' fill='none' stroke='%23FFC000' stroke-width='4'/%3E%3C/svg%3E"> Kenneth's Twitter</a>
                    <a href="#" class="fav-link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='16' fill='%23003399' stroke='%23001F5C' stroke-width='2'/%3E%3Cpath d='M8 24c0-8.8 7.2-16 16-16s16 7.2 16 16' fill='none' stroke='%23FFC000' stroke-width='4'/%3E%3C/svg%3E"> Aarhus Guide</a>
                    <a href="#" class="fav-link"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='16' fill='%23003399' stroke='%23001F5C' stroke-width='2'/%3E%3Cpath d='M8 24c0-8.8 7.2-16 16-16s16 7.2 16 16' fill='none' stroke='%23FFC000' stroke-width='4'/%3E%3C/svg%3E"> Web Dev 2001</a>
                    <div class="divider"></div>
                    <h3>History</h3>
                    <div style="font-size:10px; color:#666; padding:5px;">Today - Aarhus Portfolio</div>
                </div>
                <div style="flex-grow:1; display:flex; flex-direction:column;">
                    <div class="ie-address-bar">
                        <span>Address</span>
                        <input type="text" value="http://www.aarhus-portal.dk" readonly>
                    </div>
                    <div id="dial-up-overlay" style="position:absolute; top:50px; left:0; width:100%; height:calc(100% - 50px); background:#ECE9D8; z-index:10; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect x='2' y='2' width='12' height='12' fill='%23ccc'/%3E%3C/svg%3E" width="48">
                        <p style="margin-top:10px;">Connecting to Aarhus ISP...</p>
                        <button class="xp-btn" onclick="this.parentElement.remove()" style="margin-top:20px;">Cancel</button>
                    </div>
                    <div class="ie-homepage" style="padding:40px; background:white; height:100%; overflow-y:auto; text-align:center;">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Crect width='100' height='30' rx='15' fill='%233a9d23'/%3E%3Ctext x='50' y='20' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3Estart%3C/text%3E%3C/svg%3E" width="150" style="margin-bottom:20px;">
                        <h1 style="color:#003399; font-size:24px;">Aarhus Portal</h1>
                        <p style="margin-bottom:20px;">Welcome to your local gateway to the web.</p>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; text-align:left; max-width:400px; margin:0 auto;">
                            <div>
                                <h4 style="color:#cc6600;">Latest News</h4>
                                <ul style="list-style:none; padding:0; font-size:10px;">
                                    <li>• Aarhus modern art museum opens!</li>
                                    <li>• New Viking exhibit at Moesgaard.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style="color:#4b64b5;">Multimedia</h4>
                                <ul style="list-style:none; padding:0; font-size:10px;">
                                    <li>• Winamp 2.8 released.</li>
                                    <li>• Flash player update available.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'winamp': {
        title: 'Winamp',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23333'/%3E%3C/svg%3E",
        content: `
            <div class="winamp-win">
                <div class="winamp-top">
                    <div>Kenneth - Bass.mp3</div>
                    <div>02:15</div>
                </div>
                <div style="padding:10px;">
                    <div class="winamp-viz-bar">
                        ${Array(15).fill().map(() => `<div class="viz-line" style="height:${Math.random() * 100}%"></div>`).join('')}
                    </div>
                </div>
                <div class="winamp-controls">
                    <button class="winamp-btn-small">PREV</button>
                    <button class="winamp-btn-small" onclick="playSound('startup-sound')">PLAY</button>
                    <button class="winamp-btn-small">PAUSE</button>
                    <button class="winamp-btn-small">STOP</button>
                    <button class="winamp-btn-small">NEXT</button>
                </div>
            </div>
        `
    },
    'error-trigger': {
        title: 'Error',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 1l7 14H1L8 1z' fill='yellow' stroke='black'/%3E%3Ctext x='8' y='13' font-size='10' text-anchor='middle'%3E!%3C/text%3E%3C/svg%3E",
        content: `
            <div style="padding:20px; text-align:center;">
                <p>A fatal exception 0E has occurred at 0028:C0011E36. The current application will be terminated.</p>
                <br>
                <p>Click "Repair" to fix your computer.</p>
                <br>
                <button class="xp-btn" onclick="startErrorAccordion()">Repair</button>
            </div>
        `
    },
    'solitaire': {
        title: 'Solitaire',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='green'/%3E%3C/svg%3E",
        content: `<div style="text-align:center; padding:20px;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='green'/%3E%3C/svg%3E" width="64"><br><br><a href="https://solitaireforfree.com/" target="_blank" class="xp-btn" style="text-decoration:none;">Play Solitaire</a></div>`
    },
    'recycle-bin': {
        title: 'Recycle Bin',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect x='14' y='14' width='20' height='24' fill='%233a6ea5'/%3E%3Crect x='12' y='10' width='24' height='4' fill='%23666'/%3E%3C/svg%3E",
        content: `<div class="explorer-grid"><div class="explorer-item grayed-out"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 4v24h20V10l-6-6H6z' fill='white' stroke='black'/%3E%3C/svg%3E"><span>Failed NFTs.txt</span></div></div>`
    },
    'sound-test': {
        title: 'Sound and Audio Devices',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 6v4h3l4 4V2L5 6H2zM12 8c0-2-1-3-2-4v8c1-1 2-2 2-4z' fill='%23666'/%3E%3C/svg%3E",
        content: `
            <div class="xp-tabs" style="height:100%">
                <div class="tab-list">
                    <button class="tab-btn active">Diagnostics</button>
                    <button class="tab-btn" onclick="alert('Device: Kenneth High Definition Audio')">Hardware</button>
                </div>
                <div class="tab-content active" style="padding: 15px;">
                    <p style="margin-bottom:15px; color:#444;">If you see "NotSupportedError", your browser blocked the connection. Click "Reset Audio" to force a reconnect.</p>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                        <button class="xp-btn" onclick="playSound('startup-sound')">▶ Startup Sound</button>
                        <button class="xp-btn" onclick="playSound('click-sound')">▶ Click Sound</button>
                        <button class="xp-btn" onclick="forceResetAudio()">🔥 Reset Audio</button>
                        <button class="xp-btn" onclick="openWindowById('sound-test')">🔄 Refresh Log</button>
                    </div>
                    <div style="margin-top:20px; padding:10px; background:#fff; border:1px inset #ccc; font-family:monospace; font-size:10px; height:100px; overflow-y:auto;" id="audio-log">
                        -- Sound System Diagnostic --<br>
                        Ready for testing...
                    </div>
                </div>
            </div>
        `
    },
    // ENHANCEMENT PACK: Working Notepad with localStorage
    'notepad-enhanced': {
        title: 'Notepad - Kenneth\'s Notes',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 2h12v12H2V2z' fill='white' stroke='black'/%3E%3Cline x1='4' y1='5' x2='10' y2='5' stroke='black'/%3E%3Cline x1='4' y1='8' x2='12' y2='8' stroke='black'/%3E%3C/svg%3E",
        content: `
            <div class="notepad-enhanced">
                <div class="notepad-toolbar">
                    <button onclick="saveNote()">💾 Save</button>
                    <button onclick="loadNote()">📂 Load</button>
                    <button onclick="clearNote()">🗑️ Clear</button>
                </div>
                <textarea id="notepad-textarea" placeholder="Start typing your notes here..."></textarea>
                <div class="notepad-status" id="notepad-status">Ready | Autosave enabled</div>
            </div>
        `
    },
    // ENHANCEMENT PACK: Photo Viewer
    'photos': {
        title: 'Windows Picture and Fax Viewer',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23333' rx='2'/%3E%3Crect x='6' y='6' width='20' height='16' fill='%23666'/%3E%3Ccircle cx='12' cy='12' r='3' fill='%23ffcc00'/%3E%3Cpath d='M6 18l6-4 4 3 6-5v10H6z' fill='%2300aa00'/%3E%3C/svg%3E",
        content: `
            <div class="photo-viewer">
                <div class="photo-main">
                    <img id="photo-current" src="assets/Me-pixel-smile.jpeg" alt="Portfolio Photo">
                </div>
                <div class="photo-thumbnails" id="photo-thumbs">
                    <img class="photo-thumb active" src="assets/Me-pixel-smile.jpeg" onclick="changePhoto(this, 'assets/Me-pixel-smile.jpeg')">
                    <img class="photo-thumb" src="assets/Me-pixel.jpeg" onclick="changePhoto(this, 'assets/Me-pixel.jpeg')">
                    <img class="photo-thumb" src="assets/sitting-me.png" onclick="changePhoto(this, 'assets/sitting-me.png')">
                    <img class="photo-thumb" src="assets/xp-wallpaper.jpg" onclick="changePhoto(this, 'assets/xp-wallpaper.jpg')">
                </div>
            </div>
        `
    },
    // ENHANCEMENT PACK V2: Working Calculator
    'calculator': {
        title: 'Calculator',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='2' width='24' height='28' fill='%23ECE9D8' stroke='%23716F64'/%3E%3Crect x='6' y='4' width='20' height='8' fill='%2398FF98'/%3E%3Crect x='6' y='14' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3Crect x='12' y='14' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3Crect x='18' y='14' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3Crect x='6' y='20' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3Crect x='12' y='20' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3Crect x='18' y='20' width='4' height='4' fill='%23ddd' stroke='%23888'/%3E%3C/svg%3E",
        content: `
            <div class="calculator-app">
                <div class="calc-display" id="calc-display">0</div>
                <div class="calc-buttons">
                    <button class="calc-btn calc-clear" onclick="calcClear()">C</button>
                    <button class="calc-btn calc-op" onclick="calcOp('/')">÷</button>
                    <button class="calc-btn calc-op" onclick="calcOp('*')">×</button>
                    <button class="calc-btn calc-op" onclick="calcBackspace()">⌫</button>
                    <button class="calc-btn" onclick="calcNum('7')">7</button>
                    <button class="calc-btn" onclick="calcNum('8')">8</button>
                    <button class="calc-btn" onclick="calcNum('9')">9</button>
                    <button class="calc-btn calc-op" onclick="calcOp('-')">−</button>
                    <button class="calc-btn" onclick="calcNum('4')">4</button>
                    <button class="calc-btn" onclick="calcNum('5')">5</button>
                    <button class="calc-btn" onclick="calcNum('6')">6</button>
                    <button class="calc-btn calc-op" onclick="calcOp('+')">+</button>
                    <button class="calc-btn" onclick="calcNum('1')">1</button>
                    <button class="calc-btn" onclick="calcNum('2')">2</button>
                    <button class="calc-btn" onclick="calcNum('3')">3</button>
                    <button class="calc-btn calc-equals" onclick="calcEquals()">=</button>
                    <button class="calc-btn calc-zero" onclick="calcNum('0')">0</button>
                    <button class="calc-btn" onclick="calcNum('.')">.</button>
                </div>
            </div>
        `
    },
    // ENHANCEMENT PACK V2: Snake Game (Easter Egg)
    'snake': {
        title: 'Snake - Easter Egg!',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23000'/%3E%3Crect x='4' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='8' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='12' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='16' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='24' y='8' width='4' height='4' fill='%23ff0000'/%3E%3C/svg%3E",
        content: `
            <div class="snake-game">
                <canvas id="snake-canvas" width="300" height="300"></canvas>
                <div class="snake-info">
                    <span>Score: <span id="snake-score">0</span></span>
                    <button class="xp-btn" onclick="startSnake()">Start Game</button>
                </div>
        `
    },
    // ENHANCEMENT PACK V2: File System Explorer
    'msn': {
        title: 'Windows Messenger',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a7 7 0 0 0-7 7c0 3 2 5 4 6-5 1-9 5-9 11h24c0-6-4-10-9-11 2-1 4-3 4-6a7 7 0 0 0-7-7z' fill='%2366cc00'/%3E%3C/svg%3E",
        content: `
            <div style="padding:40px; text-align:center; background:white; height:100%;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a7 7 0 0 0-7 7c0 3 2 5 4 6-5 1-9 5-9 11h24c0-6-4-10-9-11 2-1 4-3 4-6a7 7 0 0 0-7-7z' fill='%2366cc00'/%3E%3C/svg%3E" width="80">
                <h3 style="color:#003399; margin-top:20px;">Messenger is currently offline</h3>
                <p style="font-size:11px; color:#666;">Trying to connect to .NET Passport Service...</p>
                <button class="xp-btn" style="margin-top:20px;" onclick="alert('Network error: Is your 56k modem plugged in?')">Try Again</button>
            </div>
        `
    },
    'wmp': {
        title: 'Windows Media Player',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23336699'/%3E%3Cpath d='M12 10v12l10-6z' fill='white'/%3E%3C/svg%3E",
        content: `
            <div style="background:#000; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#00ff00; font-family:monospace;">
                <div style="border:2px solid #336699; padding:20px; text-align:center;">
                    <p>NOW PLAYING:</p>
                    <p>Kenneth_Aarhus_Vibe.mp3</p>
                    <div style="display:flex; gap:10px; margin-top:20px;">
                        <button class="xp-btn">◀◀</button>
                        <button class="xp-btn" onclick="playSound()">▶</button>
                        <button class="xp-btn">■</button>
                        <button class="xp-btn">▶▶</button>
                    </div>
                </div>
            </div>
        `
    },
    'paint': {
        title: 'untitled - Paint',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 4h24v24H4z' fill='white' stroke='black'/%3E%3Ccircle cx='10' cy='10' r='3' fill='red'/%3E%3Ccircle cx='22' cy='10' r='3' fill='blue'/%3E%3Ccircle cx='16' cy='22' r='4' fill='yellow'/%3E%3C/svg%3E",
        content: `
            <div style="display:flex; flex-direction:column; height:100%; background:#716F64;">
                <div style="display:flex; background:#ECE9D8; padding:2px; border-bottom:1px solid #716F64;">
                    <div style="width:25px; height:25px; background:white; margin:2px; border:1px solid #716F64;"></div>
                    <div style="width:25px; height:25px; background:black; margin:2px; border:1px solid #716F64;"></div>
                    <div style="width:25px; height:25px; background:red; margin:2px; border:1px solid #716F64;"></div>
                </div>
                <div style="flex-grow:1; background:white; margin:10px; border:2px inset #716F64; cursor:crosshair; position:relative;" onmousedown="const dot=document.createElement('div'); dot.style.position='absolute'; dot.style.width='5px'; dot.style.height='5px'; dot.style.background='black'; dot.style.left=(event.offsetX-2)+'px'; dot.style.top=(event.offsetY-2)+'px'; this.appendChild(dot);">
                </div>
                <div style="background:#ECE9D8; padding:5px; font-size:9px;">For Help, click Help Topics on the Help Menu.</div>
            </div>
        `
    },
    'cmd': {
        title: 'Command Prompt',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='black'/%3E%3Ctext x='2' y='12' font-family='monospace' font-size='10' fill='white'%3EC:_%%3E%3C/text%3E%3C/svg%3E",
        content: `
            <div style="background:black; color:#00ff00; font-family:monospace; height:100%; padding:10px;">
                <p>Microsoft(R) Windows XP [Version 5.1.2600]</p>
                <p>(C) Copyright 1985-2001 Microsoft Corp.</p>
                <br>
                <p>C:\\Documents and Settings\\Kenneth> dir</p>
                <p>Volume in drive C is XP_SYSTEM</p>
                <p>Volume Serial Number is 1337-BEEF</p>
                <br>
                <p>Directory of C:\\Documents and Settings\\Kenneth</p>
                <p>02/05/2026  05:30 PM    &lt;DIR&gt;          Projects</p>
                <p>02/05/2026  05:31 PM    &lt;DIR&gt;          Multimedia</p>
                <p>02/05/2026  05:32 PM             1,024 bio.txt</p>
                <br>
                <p>C:\\Documents and Settings\\Kenneth> <span style="animation: blink 1s infinite;">_</span></p>
            </div>
            <style>@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }</style>
        `
    },
    'control-panel': {
        title: 'Control Panel',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='10' y='10' width='28' height='28' fill='%23ECE9D8' stroke='%23716F64'/%3E%3C/svg%3E",
        content: `
            <div style="padding:20px; background:#fff; height:100%;">
                <h2 style="color:#003399; font-size:16px;">Pick a category</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:20px;">
                    <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="openWindowById('sound-test')">
                        <div style="width:32px; height:32px; background:#ddd;"></div>
                        <div><strong>Sounds and Audio</strong><br><span style="font-size:10px;">Adjust the volume...</span></div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="alert('Display settings locked by Administrator.')">
                        <div style="width:32px; height:32px; background:#ddd;"></div>
                        <div><strong>Appearance and Themes</strong><br><span style="font-size:10px;">Change the desktop background...</span></div>
                    </div>
                </div>
            </div>
        `
    },
    'search': {
        title: 'Search Results',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='6' cy='6' r='5' fill='none' stroke='black'/%3E%3Cline x1='10' y1='10' x2='14' y2='14' stroke='black'/%3E%3C/svg%3E",
        content: `
            <div style="display:flex; height:100%;">
                <div style="width:150px; background:#708FD2; color:white; padding:15px; font-size:11px;">
                    <p><strong>What do you want to search for?</strong></p>
                    <input type="text" style="width:100%; margin-top:10px;">
                    <button class="xp-btn" style="margin-top:10px; width:100%;">Search</button>
                </div>
                <div style="flex-grow:1; background:white; padding:20px; text-align:center;">
                    <p style="color:#666;">Ready to search...</p>
                </div>
            </div>
        `
    },
    'root': {
        title: 'My Computer',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='12' y='12' width='24' height='16' fill='%233a6ea5'/%3E%3C/svg%3E",
        content: `
            <div class="explorer-grid">
                <div class="explorer-item" onclick="navigateFS('documents')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%23ffcc00'/%3E%3C/svg%3E"><span>My Documents</span></div>
                <div class="explorer-item" onclick="navigateFS('pictures')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%2366ccff'/%3E%3C/svg%3E"><span>My Pictures</span></div>
            </div>
        `
    },
    'my-computer-explorer': {
        title: 'My Computer',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='10' y='10' width='28' height='20' fill='%23666'/%3E%3Crect x='12' y='12' width='24' height='16' fill='%233a6ea5'/%3E%3Crect x='18' y='30' width='12' height='4' fill='%23666'/%3E%3C/svg%3E",
        content: `
            <div class="xp-explorer">
                <div class="explorer-toolbar">
                    <button onclick="navigateFS('root')">← Back</button>
                    <span id="fs-path">C:\\</span>
                </div>
                <div class="explorer-grid" id="fs-content">
                    <div class="explorer-item" onclick="navigateFS('documents')">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%23ffcc00'/%3E%3C/svg%3E">
                        <span>My Documents</span>
                    </div>
                    <div class="explorer-item" onclick="navigateFS('pictures')">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%2366ccff'/%3E%3C/svg%3E">
                        <span>My Pictures</span>
                    </div>
                    <div class="explorer-item" onclick="navigateFS('music')">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%23ff9966'/%3E%3C/svg%3E">
                        <span>My Music</span>
                    </div>
                    <div class="explorer-item" onclick="openWindowById('control-panel')">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23808080'/%3E%3Crect x='8' y='8' width='6' height='6' fill='white'/%3E%3Crect x='18' y='8' width='6' height='6' fill='white'/%3E%3C/svg%3E">
                        <span>Control Panel</span>
                    </div>
                </div>
            </div>
        `
    },
    // ENHANCEMENT PACK V2: Skills with Progress Bars
    'skills-enhanced': {
        title: 'Kenneth\'s Skills - System Properties',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23808080'/%3E%3Crect x='8' y='8' width='16' height='3' fill='%2300ff00'/%3E%3Crect x='8' y='14' width='12' height='3' fill='%2300ff00'/%3E%3Crect x='8' y='20' width='14' height='3' fill='%2300ff00'/%3E%3C/svg%3E",
        content: `
            <div class="skills-enhanced">
                <h3>Technical Skills</h3>
                <div class="skill-item">
                    <label>HTML/CSS</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
                    <span>95%</span>
                </div>
                <div class="skill-item">
                    <label>JavaScript</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
                    <span>90%</span>
                </div>
                <div class="skill-item">
                    <label>React/Next.js</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:85%"></div></div>
                    <span>85%</span>
                </div>
                <div class="skill-item">
                    <label>UI/UX Design</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:88%"></div></div>
                    <span>88%</span>
                </div>
                <div class="skill-item">
                    <label>Figma</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:92%"></div></div>
                    <span>92%</span>
                </div>
                <div class="skill-item">
                    <label>Video Editing</label>
                    <div class="skill-bar"><div class="skill-fill" style="width:80%"></div></div>
                    <span>80%</span>
                </div>
            </div>
        `
    },
    // ENHANCEMENT PACK V2: Weather Widget
    'weather': {
        title: 'Aarhus Weather',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='14' r='6' fill='%23FFD700'/%3E%3Cpath d='M16 2v4M16 22v4M4 14h4M24 14h4M7 7l3 3M22 22l3 3M7 21l3-3M22 4l3 3' stroke='%23FFD700' stroke-width='2'/%3E%3C/svg%3E",
        content: `
            <div class="weather-widget">
                <div class="weather-main">
                    <div class="weather-icon">☀️</div>
                    <div class="weather-temp">12°C</div>
                </div>
                <div class="weather-details">
                    <p><strong>Aarhus, Denmark</strong></p>
                    <p>Partly Cloudy</p>
                    <div class="weather-stats">
                        <span>💨 12 km/h</span>
                        <span>💧 65%</span>
                        <span>🌡️ Feels like 10°C</span>
                    </div>
                </div>
                <div class="weather-forecast">
                    <div class="forecast-day"><span>Mon</span><span>☀️</span><span>14°</span></div>
                    <div class="forecast-day"><span>Tue</span><span>⛅</span><span>11°</span></div>
                    <div class="forecast-day"><span>Wed</span><span>🌧️</span><span>9°</span></div>
                    <div class="forecast-day"><span>Thu</span><span>☀️</span><span>13°</span></div>
                    <div class="forecast-day"><span>Fri</span><span>⛅</span><span>12°</span></div>
                </div>
            </div>
        `
    },
    'facebook': {
        title: 'Kenneth on Facebook',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='8' fill='%231877F2'/%3E%3Cpath d='M32 24h-4v16h-6v-16h-4v-5h4v-3c0-4 2.5-6 6-6 1.5 0 3 .1 3 .1v4h-2c-2 0-2.5 1-2.5 2.5v2.4h4.5l-1 5z' fill='white'/%3E%3C/svg%3E",
        external: 'https://www.facebook.com/share/18tAi3FbrU/?mibextid=wwXIfr'
    },
    'instagram': {
        title: 'Kenneth on Instagram',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='url(%23ig-grad)'/%3E%3Cdefs%3E%3ClinearGradient id='ig-grad' x1='0' y1='100%25' x2='100%25' y2='0'%3E%3Cstop offset='0%25' stop-color='%23f09433'/%3E%3Cstop offset='25%25' stop-color='%23e6683c'/%3E%3Cstop offset='50%25' stop-color='%23dc2743'/%3E%3Cstop offset='75%25' stop-color='%23cc2366'/%3E%3Cstop offset='100%25' stop-color='%23bc1888'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='10' y='10' width='28' height='28' rx='7' fill='none' stroke='white' stroke-width='2'/%3E%3Ccircle cx='24' cy='24' r='6' fill='none' stroke='white' stroke-width='2'/%3E%3Ccircle cx='32' cy='16' r='1.5' fill='white'/%3E%3C/svg%3E",
        external: 'https://www.instagram.com/knnthhnsn?igsh=ZnAxY2Z0Yms1ZTQ0'
    },
    'x-social': {
        title: 'Kenneth on X',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='8' fill='black'/%3E%3Cpath d='M30.5 14h3.5L26 23.5 35 34h-7l-5.5-7.5L16.5 34H13l8.5-10.5L13 14h7l5 6.5L30.5 14zm-1.2 18h2L18.5 16h-2l12.8 16z' fill='white'/%3E%3C/svg%3E",
        external: 'https://x.com/knnthhnsn?s=21&t=MX1PGiBHxAKPq3a0DGlwgA'
    },
    'linkedin': {
        title: 'Kenneth on LinkedIn',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='4' fill='%230A66C2'/%3E%3Cpath d='M14 18h4v16h-4V18zm2-6a2.2 2.2 0 1 1-2.2 2.2A2.2 2.2 0 0 1 16 12zm8 6h3.8v2.2h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.8 2.7 4.8 6.2V34h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.7-2.4 3.3V34h-4V18z' fill='white'/%3E%3C/svg%3E",
        external: 'https://de.linkedin.com/in/kenneth-hansen-1163b21b5'
    },
    'github': {
        title: 'Kenneth on GitHub',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.33 13.67 18.97.5.09.68-.22.68-.48v-1.7c-5.56 1.21-6.73-2.68-6.73-2.68-.91-2.31-2.21-2.93-2.21-2.93-1.82-1.24.14-1.2.14-1.2 2.01.14 3.07 2.06 3.07 2.06 1.79 3.06 4.69 2.18 5.83 1.67.18-1.3.7-2.18 1.28-2.68-4.44-.5-9.1-2.22-9.1-9.87 0-2.18.78-3.96 2.06-5.35-.2-.5-.89-2.53.2-5.28 0 0 1.68-.54 5.5 2.05a19.1 19.1 0 0 1 10 0c3.82-2.59 5.5-2.05 5.5-2.05 1.09 2.75.4 4.78.2 5.28 1.28 1.39 2.06 3.17 2.06 5.35 0 7.67-4.67 9.36-9.13 9.86.72.62 1.37 1.83 1.37 3.69v5.48c0 .26.18.57.69.47C38.27 40.33 44 32.84 44 24c0-11.05-8.95-20-20-20z' fill='black'/%3E%3C/svg%3E",
        external: 'https://github.com/knnthhnsn'
    },
    'games': {
        title: 'Games',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E",
        content: `
            <div class="xp-explorer">
                <div class="explorer-toolbar">
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M10 2L4 8l6 6' stroke='%233a9d23' stroke-width='2' fill='none'/%3E%3C/svg%3E"> Back</button>
                    <div class="divider"></div>
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4v10h12V6H8l-2-2H2z' fill='%23ffcc00'/%3E%3C/svg%3E"> Folders</button>
                </div>
                <div class="explorer-grid">
                    <div class="explorer-item" onclick="openWindowById('solitaire')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='green'/%3E%3Crect x='10' y='10' width='28' height='28' rx='2' fill='white'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='20' fill='red' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E"><span>Solitaire</span></div>
                    <div class="explorer-item" onclick="openWindowById('snake')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23000'/%3E%3Crect x='4' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='8' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='12' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='16' y='14' width='4' height='4' fill='%2300ff00'/%3E%3Crect x='24' y='8' width='4' height='4' fill='%23ff0000'/%3E%3C/svg%3E"><span>Snake</span></div>
                    <div class="explorer-item" onclick="openWindowById('minesweeper')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23ccc'/%3E%3Ccircle cx='16' cy='16' r='6' fill='black'/%3E%3C/svg%3E"><span>Minesweeper</span></div>
                    <div class="explorer-item" onclick="openWindowById('pinball')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23003399'/%3E%3Ccircle cx='16' cy='16' r='8' fill='silver'/%3E%3C/svg%3E"><span>Pinball</span></div>
                </div>
            </div>
        `
    },
    'tools': {
        title: 'Tools',
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E",
        content: `
            <div class="xp-explorer">
                <div class="explorer-toolbar">
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M10 2L4 8l6 6' stroke='%233a9d23' stroke-width='2' fill='none'/%3E%3C/svg%3E"> Back</button>
                    <div class="divider"></div>
                    <button><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4v10h12V6H8l-2-2H2z' fill='%23ffcc00'/%3E%3C/svg%3E"> Folders</button>
                </div>
                <div class="explorer-grid">
                    <div class="explorer-item" onclick="openWindowById('ie')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='18' fill='%23003399'/%3E%3Ctext x='24' y='32' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3Ee%3C/text%3E%3C/svg%3E"><span>Internet Explorer</span></div>
                    <div class="explorer-item" onclick="openWindowById('calculator')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='2' width='24' height='28' fill='%23ECE9D8' stroke='%23716F64'/%3E%3C/svg%3E"><span>Calculator</span></div>
                    <div class="explorer-item" onclick="openWindowById('paint')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 4h24v24H4z' fill='white' stroke='black'/%3E%3C/svg%3E"><span>Paint</span></div>
                    <div class="explorer-item" onclick="openWindowById('cmd')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='black'/%3E%3C/svg%3E"><span>Command Prompt</span></div>
                    <div class="explorer-item" onclick="openWindowById('notepad-enhanced')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 2h12v12H2V2z' fill='white' stroke='black'/%3E%3C/svg%3E"><span>Notepad</span></div>
                    <div class="explorer-item" onclick="openWindowById('sound-test')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 6v4h3l4 4V2L5 6H2zM12 8c0-2-1-3-2-4v8c1-1 2-2 2-4z' fill='%23666'/%3E%3C/svg%3E"><span>Sound Check</span></div>
                    <div class="explorer-item" onclick="openWindowById('photos')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23333' rx='2'/%3E%3Crect x='6' y='6' width='20' height='16' fill='%23666'/%3E%3Ccircle cx='12' cy='12' r='3' fill='%23ffcc00'/%3E%3Cpath d='M6 18l6-4 4 3 6-5v10H6z' fill='%2300aa00'/%3E%3C/svg%3E"><span>My Pictures</span></div>
                    <div class="explorer-item" onclick="openWindowById('winamp')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23333'/%3E%3C/svg%3E"><span>Winamp</span></div>
                    <div class="explorer-item" onclick="openWindowById('wmp')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='%23ff6600'/%3E%3Cpath d='M12 10v12l10-6z' fill='white'/%3E%3C/svg%3E"><span>Media Player</span></div>
                    <div class="explorer-item" onclick="openWindowById('weather')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='14' r='6' fill='%23FFD700'/%3E%3C/svg%3E"><span>Weather</span></div>
                    <div class="explorer-item" onclick="openWindowById('skills-enhanced')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23808080'/%3E%3Crect x='8' y='8' width='16' height='3' fill='%2300ff00'/%3E%3C/svg%3E"><span>My Skills</span></div>
                    <div class="explorer-item" onclick="openWindowById('msn')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='%2300cc00'/%3E%3C/svg%3E"><span>Messenger</span></div>
                    <div class="explorer-item" onclick="openWindowById('control-panel')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='10' y='10' width='28' height='28' fill='%23ECE9D8' stroke='%23716F64'/%3E%3C/svg%3E"><span>Control Panel</span></div>
                    <div class="explorer-item" onclick="openWindowById('search')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='6' cy='6' r='5' fill='none' stroke='black'/%3E%3C/svg%3E"><span>Search</span></div>
                    <div class="explorer-item" onclick="openWindowById('error-trigger')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 1l7 14H1L8 1z' fill='yellow' stroke='black'/%3E%3C/svg%3E"><span>System Fix</span></div>
                </div>
            </div>
        `
    }
};

const projectDetails = {
    'volume-village': { title: 'Volume Village', link: 'https://updated-volume-village.vercel.app/', desc: 'Underground culture hub in Aarhus—events, concerts, and raves. A multimedia project showcasing the vibrant local scene.' },
    'black-bible': { title: 'Premium Black Bible', link: 'https://premiumblackbible.com/', desc: 'Minimal scripture-inspired book/ebook promo site with waitlist.' },
    'bitcoin-basics': { title: 'Bitcoin Basics', link: 'https://bitcoin-basics.vercel.app/', desc: 'Beginner-friendly Bitcoin education guide—levels, wallets, freedom vibes.' },
    'pepecoin-arcade': { title: 'Pepecoin Arcade', link: 'https://pepecoin-arcade.vercel.app/', desc: 'Retro arcade hub for the Pepecoin universe—games, vibes, and community.' },
    'museum-guide': { title: 'Museum Spille Guide', link: 'https://interstellar-smoky-psi.vercel.app/', desc: 'Interactive gaming guide for museum exhibits—blending history with play.' },
    'havblink': { title: 'Havblink', link: 'https://havblink.vercel.app/', desc: 'A modern web experience for Havblink—sleek design and smooth performance.' },
    'kekspace': { title: 'Kekspace', link: 'https://kek.space', desc: 'The frontier of internet culture—a community space for explorers of the digital realm.' },
    'basedman': { title: 'Basedman', link: 'https://basedman.io/', desc: 'Meme hero NFT/token site in the Pepecoin universe—based culture protector.' }
};

function openWindowById(id) {
    const win = windowContents[id];
    if (win) {
        if (win.external) {
            window.open(win.external, '_blank');
            return;
        }
        createWindow(id, win.title, win.icon, win.content);
        if (id === 'cmd' && window.initCmdLogic) window.initCmdLogic();
        if (id === 'minesweeper' && window.initMinesweeper) setTimeout(window.initMinesweeper, 50);
        if (id === 'pinball' && window.initPinball) setTimeout(window.initPinball, 50);

        // Play dial-up sound when opening IE
        if (id === 'ie') {
            const dialUp = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Dial+Up+Modem&filename=mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.mp3');
            dialUp.volume = 0.3;
            dialUp.play().catch(() => { });
        }
    }
}

function openProject(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        const content = `
            <div class="project-view" style="padding: 30px; line-height: 1.6;">
                <h1 style="color: #003399; font-size: 18px; margin-bottom: 15px;">${project.title}</h1>
                <p style="font-size: 12px; margin-bottom: 20px;">${project.desc}</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button class="xp-btn" onclick="openInIE('${project.link}')">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23003399'/%3E%3Ctext x='8' y='11' font-size='10' fill='white' text-anchor='middle'%3Ee%3C/text%3E%3C/svg%3E" width="16" style="vertical-align: middle; margin-right: 5px;">
                        Immersive IE View
                    </button>
                    <a href="${project.link}" target="_blank" class="xp-btn" style="text-decoration: none; color: black; line-height: 1.4;">
                        Launch External
                    </a>
                </div>
            </div>
        `;
        createWindow(`proj-${projectId}`, project.title, "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E", content);
    }
}

function openInIE(url) {
    const content = `
        <div class="ie-browser" style="display: flex; flex-direction: column; height: 100%;">
            <div class="ie-address-bar" style="background: #ECE9D8; padding: 5px; border-bottom: 1px solid #ACA899; display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 11px;">Address</span>
                <input type="text" value="${url}" readonly style="flex-grow: 1; border: 1px solid #ACA899; padding: 2px 5px; background: white;">
                <button class="xp-btn" style="padding: 1px 10px;">Go</button>
            </div>
            <iframe src="${url}" style="flex-grow: 1; border: none; background: white;"></iframe>
        </div>
    `;
    createWindow('ie-immersive', 'Internet Explorer', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='18' fill='%23003399'/%3E%3Ctext x='24' y='32' font-family='Arial' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3Ee%3C/text%3E%3C/svg%3E", content);
}

function switchTab(btn, tabId) {
    const tabs = btn.closest('.xp-tabs');
    tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabs.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    tabs.querySelector(`#tab-${tabId}`).classList.add('active');
}

/* Context Menu */
const contextMenu = document.createElement('div');
contextMenu.id = 'context-menu'; contextMenu.className = 'hidden';
contextMenu.innerHTML = `
    <div class="ctx-item" onclick="location.reload()">Refresh</div>
    <div class="divider"></div>
    <div class="ctx-item" onclick="createStickyNote()">New Sticky Note</div>
    <div class="ctx-item" onclick="openWindowById('display-props')">Properties</div>
    <div class="divider"></div>
    <div class="ctx-item" onclick="alert('Shortcut placeholder')">New → Shortcut</div>
`;

window.createStickyNote = function () {
    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.style.left = (200 + Math.random() * 200) + 'px';
    note.style.top = (200 + Math.random() * 200) + 'px';
    note.innerHTML = `<textarea placeholder="Type a note..."></textarea>`;
    document.getElementById('desktop').appendChild(note);

    // Simple drag fix for sticky note (since it doesn't have a title bar)
    note.onmousedown = (e) => {
        // Bring to front
        note.style.zIndex = ++zIndexCounter;

        // If clicking the textarea, only allow dragging if clicking the very edges
        if (e.target.tagName === 'TEXTAREA') {
            // Check if we are clicking near the top/edges to drag
            const rect = note.getBoundingClientRect();
            if (e.clientY - rect.top > 20) return; // Only top 20px is draggable for textarea
        }

        e.preventDefault();
        let p3 = e.clientX;
        let p4 = e.clientY;

        const onMouseMove = (me) => {
            const p1 = p3 - me.clientX;
            const p2 = p4 - me.clientY;
            p3 = me.clientX;
            p4 = me.clientY;
            note.style.top = (note.offsetTop - p2) + "px";
            note.style.left = (note.offsetLeft - p1) + "px";
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
};

// MSN Toast Trigger logic
window.showMsnToast = function (name) {
    // Reuse existing toast element or create one
    let toast = document.getElementById('msn-toast');
    if (toast) toast.remove(); // Remove previous to avoid stacking
    toast = document.createElement('div');
    toast.id = 'msn-toast';
    toast.innerHTML = `
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23ccc'/%3E%3Crect x='15' y='15' width='20' height='20' fill='white' rx='5'/%3E%3C/svg%3E" class="toast-pfp">
        <div class="toast-text">
            <strong>${name}</strong>
            <span>just signed in.</span>
        </div>
    `;
    document.body.appendChild(toast);
    playSound('startup-sound');
    setTimeout(() => {
        toast.style.animation = 'toastSlideUp 0.5s reverse forwards';
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 500);
    }, 4000);
};

// Periodically show toast (reduced frequency)
setInterval(() => {
    if (Math.random() > 0.8) { // 20% chance (was 30%)
        const names = ["John", "Sarah", "Recruiter", "Aarhus Mayor"];
        showMsnToast(names[Math.floor(Math.random() * names.length)]);
    }
}, 45000); // Check every 45s instead of 30s
document.body.appendChild(contextMenu);
document.getElementById('desktop').oncontextmenu = (e) => { e.preventDefault(); contextMenu.style.top = e.clientY + 'px'; contextMenu.style.left = e.clientX + 'px'; contextMenu.classList.remove('hidden'); };
document.addEventListener('click', () => contextMenu.classList.add('hidden'));


/* --- NEW WINDOW XP FEATURES --- */

// 1. Search Companion (Rover)
windowContents['search'] = {
    title: 'Search Results',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='14' cy='14' r='8' stroke='black' stroke-width='2' fill='none'/%3E%3Cline x1='20' y1='20' x2='28' y2='28' stroke='black' stroke-width='3'/%3E%3C/svg%3E",
    content: `
        <div class="search-companion">
            <div class="rover-area">
                <img src="https://winxp.vercel.app/rover.gif" class="rover-gif" alt="Rover" id="rover-companion" style="cursor:pointer;" onclick="if(window.clippySpeak) {
                    const roverPhrases = [
                        { text: 'Did you know Rover used to be a movie star? He\'s very famous in the Windows XP world.', audio: 'sounds/clippy/rover_star.mp3' },
                        { text: 'Who\'s a good search companion? Rover is! Yes he is!', audio: 'sounds/clippy/rover_goodboy.mp3' }
                    ];
                    const p = roverPhrases[Math.floor(Math.random() * roverPhrases.length)];
                    window.clippySpeak(p.text, p.audio);
                }">
                <p>Welcome to Search Companion. Searching for files, people, or web results?</p>
            </div>
            <div class="search-options">
                <p>What do you want to search for?</p>
                <span class="search-link" onclick="alert('Searching for: Projects...')">→ Pictures, music, or video</span>
                <span class="search-link" onclick="alert('Searching for: Skills...')">→ Documents (word processing, spreadsheet, etc.)</span>
                <span class="search-link" onclick="alert('Searching for: Kenneth...')">→ All files and folders</span>
                <span class="search-link" onclick="openWindowById('ie')">→ Search the Internet</span>
            </div>
        </div>
    `
};

// 2. Space Cadet Pinball (Self-contained)
windowContents['pinball'] = {
    title: '3D Pinball for Windows - Space Cadet',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23003399'/%3E%3Ccircle cx='16' cy='16' r='8' fill='silver'/%3E%3C/svg%3E",
    content: `
        <div id="pb-game" style="display:flex;flex-direction:column;align-items:center;background:#1a1a2e;height:100%;overflow:hidden;position:relative;">
            <div style="display:flex;justify-content:space-between;width:100%;padding:6px 12px;background:#0f0f23;color:#0ff;font-family:'Courier New',monospace;font-size:14px;box-sizing:border-box;">
                <span>SCORE: <span id="pb-score">0</span></span>
                <span>BALL: <span id="pb-ball-count">3</span></span>
                <span style="color:#ff0;font-size:11px;">← → Flippers | SPACE Launch</span>
            </div>
            <canvas id="pb-canvas" style="flex:1;"></canvas>
        </div>
    `
};

window.initPinball = function () {
    const canvas = document.getElementById('pb-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('pb-game');
    if (!container) return;

    let W, H, scale;
    function resize() {
        const rect = container.getBoundingClientRect();
        W = Math.floor(rect.width);
        H = Math.floor(rect.height - 30);
        canvas.width = W; canvas.height = H;
        scale = Math.min(W / 320, H / 560);
    }
    resize();

    let score = 0, ballsLeft = 3, launched = false, gameOver = false;
    let ball = { x: W - 22, y: H - 80, vx: 0, vy: 0, r: 7 };
    let plungerPower = 0, plungerHeld = false;
    let leftFlip = 0, rightFlip = 0;
    const keys = {};
    const GRAVITY = 0.15, FRICTION = 0.998, BOUNCE = 0.65;

    // Bumpers
    const bumpers = [];
    function createBumpers() {
        bumpers.length = 0;
        const cx = W / 2;
        const positions = [
            [cx - 50, H * 0.18], [cx, H * 0.15], [cx + 50, H * 0.18],
            [cx - 70, H * 0.28], [cx - 20, H * 0.26], [cx + 20, H * 0.26], [cx + 70, H * 0.28],
            [cx - 50, H * 0.36], [cx, H * 0.34], [cx + 50, H * 0.36],
            [cx - 30, H * 0.44], [cx + 30, H * 0.44],
            [cx - 60, H * 0.52], [cx, H * 0.50], [cx + 60, H * 0.52]
        ];
        positions.forEach(([x, y]) => bumpers.push({ x, y, r: 14, lit: 0, points: 100 }));
    }
    createBumpers();

    function resetBall() {
        ball.x = W - 22; ball.y = H - 80;
        ball.vx = 0; ball.vy = 0;
        launched = false; plungerPower = 0;
    }

    function loseLife() {
        ballsLeft--;
        const el = document.getElementById('pb-ball-count');
        if (el) el.textContent = ballsLeft;
        if (ballsLeft <= 0) {
            gameOver = true;
        } else {
            resetBall();
        }
    }

    document.addEventListener('keydown', (e) => {
        keys[e.code] = true;
        if (e.code === 'Space') { e.preventDefault(); plungerHeld = true; }
    });
    document.addEventListener('keyup', (e) => {
        keys[e.code] = false;
        if (e.code === 'Space' && plungerHeld) {
            plungerHeld = false;
            if (!launched && !gameOver) {
                launched = true;
                ball.vy = -plungerPower * 0.3;
                ball.vx = -1 + Math.random() * 2;
                plungerPower = 0;
            }
        }
    });

    function update() {
        if (gameOver) return;

        // Flippers
        leftFlip += (keys['ArrowLeft'] || keys['KeyZ'] ? 1 : -1) * 0.15;
        rightFlip += (keys['ArrowRight'] || keys['Slash'] ? 1 : -1) * 0.15;
        leftFlip = Math.max(0, Math.min(1, leftFlip));
        rightFlip = Math.max(0, Math.min(1, rightFlip));

        // Plunger
        if (plungerHeld && !launched) {
            plungerPower = Math.min(plungerPower + 1.5, 50);
        }

        if (!launched) return;

        // Physics
        ball.vy += GRAVITY;
        ball.vx *= FRICTION;
        ball.vy *= FRICTION;
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Wall bouncing
        const wallL = 15, wallR = W - 30;
        if (ball.x - ball.r < wallL) { ball.x = wallL + ball.r; ball.vx = Math.abs(ball.vx) * BOUNCE; }
        if (ball.x + ball.r > wallR) { ball.x = wallR - ball.r; ball.vx = -Math.abs(ball.vx) * BOUNCE; }
        if (ball.y - ball.r < 10) { ball.y = 10 + ball.r; ball.vy = Math.abs(ball.vy) * BOUNCE; }

        // Bumper collision
        bumpers.forEach(b => {
            const dx = ball.x - b.x, dy = ball.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < ball.r + b.r) {
                const nx = dx / dist, ny = dy / dist;
                ball.vx = nx * 5; ball.vy = ny * 5;
                ball.x = b.x + nx * (ball.r + b.r + 1);
                ball.y = b.y + ny * (ball.r + b.r + 1);
                b.lit = 10;
                score += b.points;
                const el = document.getElementById('pb-score');
                if (el) el.textContent = score;
            }
            if (b.lit > 0) b.lit--;
        });

        // Flipper collision zones
        const flipY = H - 55, flipLen = 55;
        const lx1 = W * 0.15, ly1 = flipY, lx2 = lx1 + flipLen, ly2 = flipY - leftFlip * 25;
        const rx1 = W * 0.85 - 15, ry1 = flipY, rx2 = rx1 - flipLen, ry2 = flipY - rightFlip * 25;

        // Simple flipper hit detection
        if (ball.y > flipY - 15 && ball.y < flipY + 5) {
            if (ball.x > lx1 && ball.x < lx2 && ball.vy > 0) {
                ball.vy = -Math.abs(ball.vy) * 1.2 - leftFlip * 6;
                ball.vx += leftFlip * 3;
                ball.y = flipY - 16;
            }
            if (ball.x > rx2 && ball.x < rx1 && ball.vy > 0) {
                ball.vy = -Math.abs(ball.vy) * 1.2 - rightFlip * 6;
                ball.vx -= rightFlip * 3;
                ball.y = flipY - 16;
            }
        }

        // Ball lost
        if (ball.y > H + 20) loseLife();
    }

    function draw() {
        // Background
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, '#0a0a2e');
        grad.addColorStop(1, '#1a0a3e');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Table walls
        ctx.strokeStyle = '#334';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(15, 10); ctx.lineTo(15, H); ctx.moveTo(W - 30, 10); ctx.lineTo(W - 30, H);
        ctx.stroke();

        // Side rails (glow)
        ctx.strokeStyle = '#0ff3';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(17, 10); ctx.lineTo(17, H);
        ctx.moveTo(W - 32, 10); ctx.lineTo(W - 32, H);
        ctx.stroke();

        // Bumpers
        bumpers.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            const grd = ctx.createRadialGradient(b.x - 3, b.y - 3, 2, b.x, b.y, b.r);
            if (b.lit > 0) {
                grd.addColorStop(0, '#fff');
                grd.addColorStop(0.5, '#ff0');
                grd.addColorStop(1, '#f80');
            } else {
                grd.addColorStop(0, '#667');
                grd.addColorStop(1, '#334');
            }
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.strokeStyle = b.lit > 0 ? '#ff0' : '#556';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Flippers
        const flipY = H - 55;
        ctx.lineWidth = 8; ctx.lineCap = 'round';
        // Left flipper
        ctx.strokeStyle = '#c0c0c0';
        ctx.beginPath();
        ctx.moveTo(W * 0.15, flipY);
        ctx.lineTo(W * 0.15 + 55, flipY - leftFlip * 25);
        ctx.stroke();
        // Right flipper
        ctx.beginPath();
        ctx.moveTo(W * 0.85 - 15, flipY);
        ctx.lineTo(W * 0.85 - 15 - 55, flipY - rightFlip * 25);
        ctx.stroke();

        // Plunger lane
        ctx.fillStyle = '#222';
        ctx.fillRect(W - 28, H * 0.3, 15, H * 0.7);
        if (!launched) {
            const plY = H - 30 - plungerPower;
            ctx.fillStyle = '#c00';
            ctx.fillRect(W - 26, plY, 11, 15);
            ctx.fillStyle = '#800';
            ctx.fillRect(W - 26, plY + 15, 11, H - plY - 15);
        }

        // Ball
        if (!gameOver) {
            const ballGrad = ctx.createRadialGradient(ball.x - 2, ball.y - 2, 1, ball.x, ball.y, ball.r);
            ballGrad.addColorStop(0, '#fff');
            ballGrad.addColorStop(0.5, '#ddd');
            ballGrad.addColorStop(1, '#999');
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
            ctx.fillStyle = ballGrad;
            ctx.fill();
        }

        // Game over
        if (gameOver) {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, H / 2 - 50, W, 100);
            ctx.fillStyle = '#ff0';
            ctx.font = 'bold 28px "Courier New",monospace';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', W / 2, H / 2 - 10);
            ctx.fillStyle = '#0ff';
            ctx.font = '16px "Courier New",monospace';
            ctx.fillText('Score: ' + score, W / 2, H / 2 + 20);
            ctx.fillStyle = '#888';
            ctx.font = '13px sans-serif';
            ctx.fillText('Press SPACE to restart', W / 2, H / 2 + 45);
        }
    }

    // Restart handler
    document.addEventListener('keydown', function pbRestart(e) {
        if (gameOver && e.code === 'Space') {
            e.preventDefault();
            score = 0; ballsLeft = 3; gameOver = false;
            const sEl = document.getElementById('pb-score');
            const bEl = document.getElementById('pb-ball-count');
            if (sEl) sEl.textContent = '0';
            if (bEl) bEl.textContent = '3';
            createBumpers();
            resetBall();
        }
    });

    let animFrame;
    function loop() {
        update(); draw();
        animFrame = requestAnimationFrame(loop);
    }
    loop();
};

// 3. Windows Media Player
windowContents['wmp'] = {
    title: 'Windows Media Player',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='%23ff6600'/%3E%3Cpath d='M12 10v12l10-6z' fill='white'/%3E%3C/svg%3E",
    content: `
        <div class="wmp-win">
            <div class="wmp-viz">
                <div style="z-index:1; text-align:center;">
                    <p style="font-size:14px; margin-bottom:10px;">Kenneth's Chill Mix</p>
                    <p style="font-size:10px; color:#aaa;">02:45 / 04:20</p>
                </div>
            </div>
            <div class="wmp-controls">
                <div class="wmp-btn">⏮</div>
                <div class="wmp-btn" style="width:40px; height:40px; font-size:18px;" onclick="playSound('startup-sound')">▶</div>
                <div class="wmp-btn">⏭</div>
            </div>
        </div>
    `
};

// 4. JS Paint (MS Paint Clone)
windowContents['paint'] = {
    title: 'untitled - Paint',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='white' stroke='black'/%3E%3Ccircle cx='10' cy='10' r='3' fill='red'/%3E%3Ccircle cx='22' cy='10' r='3' fill='blue'/%3E%3Ccircle cx='16' cy='22' r='4' fill='yellow'/%3E%3C/svg%3E",
    content: `
        <iframe src="https://jspaint.app/" style="width:100%; height:100%; border:none;"></iframe>
    `
};

// 5. Minesweeper (Self-contained)
windowContents['minesweeper'] = {
    title: 'Minesweeper',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23ccc'/%3E%3Ccircle cx='16' cy='16' r='6' fill='black'/%3E%3C/svg%3E",
    content: `
        <div id="ms-game" style="display:flex; flex-direction:column; align-items:center; background:#bdbdbd; padding:10px; border:3px outset #eee; height:100%; box-sizing:border-box; user-select:none;">
            <div style="background:#bdbdbd; border:3px inset #777; padding:5px 10px; margin-bottom:10px; display:flex; justify-content:space-between; width:220px; align-items:center; font-family:'MS Sans Serif', Arial; font-weight:bold;">
                <div id="ms-mines" style="background:black; color:red; padding:2px 5px; font-family:monospace; font-size:24px; border:2px inset #555; width:45px; text-align:right;">010</div>
                <div id="ms-reset" style="width:36px; height:36px; border:3px outset #eee; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:24px; background:#bdbdbd;" onclick="window.initMinesweeper()">😊</div>
                <div id="ms-timer" style="background:black; color:red; padding:2px 5px; font-family:monospace; font-size:24px; border:2px inset #555; width:45px; text-align:right;">000</div>
            </div>
            <div id="ms-grid" style="border:3px inset #777; line-height:0; background:#777;"></div>
        </div>
    `
};

window.initMinesweeper = function () {
    const gridEl = document.getElementById('ms-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';
    const rows = 9, cols = 9, minesCount = 10;
    let revealed = 0, flags = 0, gameOver = false, timer = 0, timerInterval;

    document.getElementById('ms-mines').textContent = '010';
    document.getElementById('ms-timer').textContent = '000';
    document.getElementById('ms-reset').textContent = '😊';

    const tiles = [];
    for (let r = 0; r < rows; r++) {
        tiles[r] = [];
        const rowEl = document.createElement('div'); rowEl.style.display = 'flex';
        for (let c = 0; c < cols; c++) {
            const el = document.createElement('div');
            el.style.width = '24px'; el.style.height = '24px';
            el.style.border = '2px outset #eee';
            el.style.backgroundColor = '#bdbdbd';
            el.style.display = 'flex'; el.style.alignItems = 'center'; el.style.justifyContent = 'center';
            el.style.fontSize = '14px'; el.style.fontWeight = 'bold';

            el.addEventListener('mousedown', (e) => {
                if (gameOver) return;
                if (e.button === 0) reveal(r, c);
                else if (e.button === 2) { e.preventDefault(); flag(r, c); }
            });
            el.addEventListener('contextmenu', e => e.preventDefault());

            const tile = { r, c, mine: false, revealed: false, flagged: false, neighborMines: 0, el };
            tiles[r][c] = tile;
            rowEl.appendChild(el);
        }
        gridEl.appendChild(rowEl);
    }

    let placed = 0;
    while (placed < minesCount) {
        let r = Math.floor(Math.random() * rows), c = Math.floor(Math.random() * cols);
        if (!tiles[r][c].mine) { tiles[r][c].mine = true; placed++; }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (tiles[r][c].mine) continue;
            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (tiles[r + dr] && tiles[r + dr][c + dc] && tiles[r + dr][c + dc].mine) count++;
                }
            }
            tiles[r][c].neighborMines = count;
        }
    }

    function reveal(r, c) {
        const t = tiles[r][c];
        if (gameOver || t.revealed || t.flagged) return;
        if (!timerInterval) timerInterval = setInterval(() => { timer++; document.getElementById('ms-timer').textContent = String(Math.min(timer, 999)).padStart(3, '0'); }, 1000);

        t.revealed = true;
        t.el.style.border = '1px solid #777';
        t.el.style.backgroundColor = '#d1d1d1';

        if (t.mine) { endGame(false); return; }
        revealed++;
        if (t.neighborMines > 0) {
            t.el.textContent = t.neighborMines;
            t.el.style.color = ['', 'blue', 'green', 'red', 'darkblue', 'darkred', 'teal', 'black', 'gray'][t.neighborMines];
        } else {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (tiles[r + dr] && tiles[r + dr][c + dc]) reveal(r + dr, c + dc);
                }
            }
        }
        if (revealed === rows * cols - minesCount) endGame(true);
    }

    function flag(r, c) {
        const t = tiles[r][c];
        if (gameOver || t.revealed) return;
        t.flagged = !t.flagged;
        t.el.textContent = t.flagged ? '🚩' : '';
        flags += t.flagged ? 1 : -1;
        document.getElementById('ms-mines').textContent = String(Math.max(0, minesCount - flags)).padStart(3, '0');
    }

    function endGame(win) {
        gameOver = true; clearInterval(timerInterval);
        document.getElementById('ms-reset').textContent = win ? '😎' : '😵';
        tiles.flat().forEach(t => {
            if (t.mine) {
                t.el.textContent = '💣';
                t.el.style.backgroundColor = win ? '#bdbdbd' : '#ff0000';
            }
        });
        if (window.clippySpeak) window.clippySpeak(win ? "clippy_minesweeper_win" : "clippy_minesweeper_lost");
    }
};

// 6. Display Properties (Theme Switcher)
windowContents['display-props'] = {
    title: 'Display Properties',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='18' fill='%23333'/%3E%3Crect x='6' y='6' width='20' height='14' fill='%233a6ea5'/%3E%3Crect x='12' y='22' width='8' height='4' fill='%23666'/%3E%3C/svg%3E",
    content: `
        <div class="xp-tabs">
            <div class="tab-list">
                <button class="tab-btn active" onclick="switchTab(this, 'desktop-bg')">Desktop</button>
                <button class="tab-btn" onclick="switchTab(this, 'appearance')">Appearance</button>
                <button class="tab-btn" onclick="switchTab(this, 'materials')">Materials</button>
            </div>
            <div class="tab-content active" id="tab-desktop-bg">
                <p style="margin-bottom:10px;">Select a background for your desktop:</p>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <button class="xp-btn" onclick="changeWallpaper('xp-wallpaper.jpg')">Default XP</button>
                    <button class="xp-btn" onclick="changeWallpaper('https://images.unsplash.com/photo-1541411191165-f18b6f5d27a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">Original Bliss</button>
                    <button class="xp-btn" onclick="changeWallpaper('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000')">Aarhus Mountains</button>
                    <button class="xp-btn" onclick="changeWallpaper('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000')">Autumn Lake</button>
                    <button class="xp-btn" onclick="changeWallpaper('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000')">Nature Green</button>
                </div>
            </div>
            <div class="tab-content" id="tab-appearance">
                <p style="margin-bottom:10px;">Windows and buttons color scheme:</p>
                <div class="theme-selection-grid">
                    <button class="xp-btn" onclick="changeTheme('default')">Default (Blue)</button>
                    <button class="xp-btn" onclick="changeTheme('silver')">Silver</button>
                    <button class="xp-btn" onclick="changeTheme('olive')">Olive Green</button>
                    <button class="xp-btn" onclick="changeTheme('royale')">Royale (Energy Blue)</button>
                    <button class="xp-btn" onclick="changeTheme('noir')">Noir / Zune</button>
                    <button class="xp-btn" onclick="changeTheme('crimson')">Crimson (Ruby)</button>
                    <button class="xp-btn" onclick="changeTheme('emerald')">Emerald (Jade)</button>
                    <button class="xp-btn" onclick="changeTheme('amethyst')">Amethyst (Purple)</button>
                    <button class="xp-btn" onclick="changeTheme('amber')">Amber (Gold)</button>
                    <button class="xp-btn" onclick="changeTheme('classic')">Classic (Retro)</button>
                    <button class="xp-btn" onclick="changeTheme('aarhus')" style="background: #0B0E14; color: #FF6B00; font-weight: bold;">Aarhus Midnight (PRO)</button>
                </div>
                <br>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Crect width='100' height='30' rx='15' fill='%233a9d23'/%3E%3Ctext x='50' y='20' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3Estart%3C/text%3E%3C/svg%3E" style="width:100px; opacity:0.5;">
            </div>
            <div class="tab-content" id="tab-materials">
                <p style="margin-bottom:10px;">Apply a material effect to windows:</p>
                <div class="material-options">
                    <label class="material-option">
                        <input type="radio" name="material" value="none" checked onclick="changeMaterial('none')">
                        <div class="material-preview" style="background:#ECE9D8;"></div>
                        <span>None (Default)</span>
                    </label>
                    <label class="material-option">
                        <input type="radio" name="material" value="plastic" onclick="changeMaterial('plastic')">
                        <div class="material-preview" style="background:linear-gradient(135deg,rgba(255,255,255,0.95),rgba(220,220,220,0.6));"></div>
                        <span>Plastic Wrap</span>
                    </label>
                    <label class="material-option">
                        <input type="radio" name="material" value="chrome" onclick="changeMaterial('chrome')">
                        <div class="material-preview" style="background:linear-gradient(135deg,#aaa,#fff,#999);"></div>
                        <span>Liquid Chrome</span>
                    </label>
                    <label class="material-option">
                        <input type="radio" name="material" value="cotton" onclick="changeMaterial('cotton')">
                        <div class="material-preview" style="background:#f5f5f5;border-radius:4px;"></div>
                        <span>Soft Cotton</span>
                    </label>
                </div>
            </div>
        </div>
    `
};

// 8. Windows Messenger (MSN)
windowContents['msn'] = {
    title: 'Windows Messenger',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='%2300cc00'/%3E%3C/svg%3E",
    content: `
        <div class="msn-win">
            <div class="msn-header">
                <img src="assets/Me-pixel-smile.jpeg" class="msn-pfp" style="object-fit: cover;">
                <div>
                    <div style="font-weight:bold;">Kenneth (Online)</div>
                    <div style="font-size:9px; color:#666;">I'm a multimedia creator!</div>
                </div>
            </div>
            <div class="msn-contact-list">
                <div class="msn-group">Online (3)</div>
                <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>John (Aarhus)</span></div>
                <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>Sarah (Client)</span></div>
                <div class="msn-contact" onclick="alert('Starting chat with Recruiter...')"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>Recruiter</span></div>
                <div class="msn-group">Offline (12)</div>
                <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='gray'/%3E%3C/svg%3E" class="msn-status"> <span>Clippy</span></div>
            </div>
            <div class="msn-footer">
                <button class="xp-btn" style="width:100%;">Add a Contact</button>
            </div>
        </div>
    `
};

// 9. Sound Recorder
windowContents['sound-recorder'] = {
    title: 'Sound - Sound Recorder',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='10' y='4' width='12' height='18' rx='6' fill='%23666'/%3E%3Crect x='8' y='22' width='16' height='4' fill='%23333'/%3E%3C/svg%3E",
    content: `
        <div class="sound-recorder-win">
            <div style="font-size:10px; margin-bottom:5px;">Length: 0.0 sec.</div>
            <div class="sr-display">
                <div class="sr-waveform" id="sr-wave"></div>
            </div>
            <div class="sr-controls">
                <div class="sr-btn-circle" onclick="alert('Seeking...')">⏮</div>
                <div class="sr-btn-circle" onclick="alert('Seeking...')">⏭</div>
                <div class="sr-btn-circle play" onclick="playSound('startup-sound')">▶</div>
                <div class="sr-btn-circle stop" onclick="alert('Stopped')">■</div>
                <div class="sr-btn-circle rec" onclick="alert('Recording...')">●</div>
            </div>
        </div>
    `
};

// 10. Control Panel
windowContents['control-panel'] = {
    title: 'Control Panel',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='24' fill='%23808080'/%3E%3Crect x='8' y='8' width='6' height='6' fill='white'/%3E%3Crect x='18' y='8' width='6' height='6' fill='white'/%3E%3Crect x='8' y='18' width='6' height='6' fill='white'/%3E%3Crect x='18' y='18' width='6' height='6' fill='white'/%3E%3C/svg%3E",
    content: `
        <div class="xp-explorer">
            <div class="explorer-toolbar">
                <button onclick="openWindowById('display-props')">Display</button>
                <div class="divider"></div>
                <button onclick="toggleHighContrast()">Accessibility</button>
            </div>
            <div class="explorer-grid">
                <div class="explorer-item" onclick="toggleHighContrast()">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='black'/%3E%3Cpath d='M16 4a12 12 0 010 24z' fill='white'/%3E%3C/svg%3E">
                    <span>High Contrast Mode</span>
                </div>
                <div class="explorer-item" onclick="openWindowById('display-props')">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='4' y='4' width='24' height='18' fill='%23333'/%3E%3Crect x='6' y='6' width='20' height='14' fill='%233a6ea5'/%3E%3Crect x='12' y='22' width='8' height='4' fill='%23666'/%3E%3C/svg%3E">
                    <span>Display Settings</span>
                </div>
                <div class="explorer-item" onclick="openWindowById('sound-recorder')">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='10' y='4' width='12' height='18' rx='6' fill='%23666'/%3E%3Crect x='8' y='22' width='16' height='4' fill='%23333'/%3E%3C/svg%3E">
                    <span>Sounds and Audio</span>
                </div>
                <div class="explorer-item" onclick="openWindowById('windows-update')">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23003399'/%3E%3Cpath d='M4 4l10 2v10H4V4zm14-2l10 2v10H18V2zM4 18h10v10l-10-2V18zm14 10V18h10v8l-10 2z' fill='white'/%3E%3C/svg%3E">
                    <span>Windows Update</span>
                </div>
            </div>
        </div>
    `
};

// 11. Windows Update
windowContents['windows-update'] = {
    title: 'Windows Update',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23003399'/%3E%3Cpath d='M4 4l10 2v10H4V4zm14-2l10 2v10H18V2zM4 18h10v10l-10-2V18zm14 10V18h10v8l-10 2z' fill='white'/%3E%3C/svg%3E",
    content: `
        <div class="xp-explorer" style="background:white;">
            <div style="background:#003399; color:white; padding:20px;">
                <h1 style="font-size:18px;">Windows Update</h1>
            </div>
            <div style="padding:20px; color: black;">
                <p>Checking for latest updates for Kenneth's Portfolio...</p>
                <div style="margin:20px 0; border:1px solid #ACA899; height:15px; background:#eee; position:relative;">
                    <div style="position:absolute; top:0; left:0; height:100%; width:70%; background:linear-gradient(to right, #0055ff, #09adff); animation: progress 3s infinite;"></div>
                </div>
                <ul style="font-size:10px; color:#666;">
                    <li>• Critical Security Update - Aarhus 2001 (KB999999)</li>
                    <li>• Multimedia Pack 2.0 (DirectX 9.0c)</li>
                </ul>
                <br>
                <button class="xp-btn" onclick="alert('System is up to date!')">Install Updates</button>
            </div>
        </div>
    `
};

window.toggleHighContrast = function () {
    document.body.classList.toggle('high-contrast');
    if (window.clippySpeak) {
        const isHC = document.body.classList.contains('high-contrast');
        if (isHC) {
            window.clippySpeak("clippy_hc_on");
        } else {
            window.clippySpeak("clippy_hc_off");
        }
    }
};

window.changeTheme = function (theme) {
    // Dynamically remove all theme-* classes (V18)
    const classList = document.body.classList;
    [...classList].forEach(cls => {
        if (cls.startsWith('theme-')) {
            classList.remove(cls);
        }
    });

    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }

    if (window.clippySpeak) {
        window.clippySpeak('clippy_theme_success');
    }
};

window.changeWallpaper = function (url) {
    const desktop = document.getElementById('desktop');
    if (desktop) {
        desktop.style.backgroundImage = `url('${url}')`;
        const char = document.getElementById('desktop-char');
        if (char) {
            char.style.display = url.includes('xp-wallpaper.jpg') ? 'block' : 'none';
        }
    }
};

window.changeMaterial = function (material) {
    const desktop = document.getElementById('desktop');
    const char = document.getElementById('desktop-char');

    // Reset Taskbar Styles (Prevent Glass Fix persistence)
    const tbRef = document.getElementById('taskbar');
    if (tbRef) {
        tbRef.style.cssText = '';
        Array.from(tbRef.children).forEach(c => c.style.cssText = '');
    }

    // Remove all material classes
    document.body.classList.remove('material-plastic', 'material-chrome', 'material-cotton');

    // Material-specific backgrounds (Atmospheric mood setting for textures)
    const backgrounds = {
        none: 'xp-wallpaper.jpg',
        plastic: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', // Midnight for highlights
        chrome: 'linear-gradient(45deg, #000 0%, #444 45%, #888 50%, #444 55%, #000 100%)',
        cotton: 'linear-gradient(135deg, #fff5f5 0%, #f0f4ff 100%)'
    };

    if (material !== 'none') {
        document.body.classList.add('material-' + material);
        if (desktop) {
            desktop.style.backgroundImage = backgrounds[material];
            desktop.style.backgroundSize = (material === 'chrome' || material === 'plastic') ? '200% 200%' : 'cover';
            desktop.style.animation = (material === 'chrome' || material === 'plastic') ? 'gradientShift 10s ease infinite' : 'none';
        }
        if (char) char.style.display = 'none';


    } else {
        if (desktop) {
            desktop.style.backgroundImage = `url('${backgrounds.none}')`;
            desktop.style.backgroundSize = 'cover';
            desktop.style.animation = 'none';
        }
        if (char) char.style.display = 'block';
    }

    // Play physical sound
    window.playSound();
};

// Redundant Desktop Icons removed for cleaner desktop management
// 7. Windows Movie Maker
windowContents['moviemaker'] = {
    title: 'Windows Movie Maker',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23666'/%3E%3Crect x='4' y='8' width='24' height='16' fill='%23333'/%3E%3Ccircle cx='16' cy='16' r='4' fill='white'/%3E%3C/svg%3E",
    content: `
        <div class="xp-explorer" style="background:#ECE9D8;">
            <div class="explorer-toolbar">
                <button>Tasks</button><button>Collections</button>
            </div>
            <div style="padding:20px; text-align:center;">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23666'/%3E%3Crect x='4' y='8' width='24' height='16' fill='%23333'/%3E%3Ccircle cx='16' cy='16' r='4' fill='white'/%3E%3C/svg%3E" width="64" style="margin-bottom:20px;">
                <h2>Movie Maker</h2>
                <p>Import your multimedia projects into the timeline.</p>
                <div style="margin-top:20px; border:2px inset #716f64; background:black; height:150px; display:flex; align-items:center; justify-content:center; color:white;">
                    [ Preview Window ]
                </div>
            </div>
        </div>
    `
};

// Clippy Logic
(function initClippy() {
    const clippy = document.createElement('div');
    clippy.id = 'clippy-companion';
    clippy.innerHTML = `
        <div id="clippy-bubble" class="hidden">It looks like you're browsing a portfolio. Would you like help finding Kenneth's skills?</div>
        <img id="clippy-agent" src="assets/clippy.png" alt="Clippy" style="width:65px; height:auto; cursor:grab;">
    `;
    document.body.appendChild(clippy);

    const bubble = clippy.querySelector('#clippy-bubble');
    const agent = clippy.querySelector('#clippy-agent');
    let clippyVoice = null;

    // Pro-Max Disney Sidekick Voice Hunting
    const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();

        // Priority: Natural/Premium MALE voices
        const maleNames = [
            "Microsoft Guy Online (Natural)", // Best on Windows
            "Google US English Male",         // Best on Chrome
            "Google UK English Male",
            "Microsoft David",                // Standard Male
            "Daniel",                         // Apple Male
            "Oliver"                          // Apple Male
        ];

        let selected = null;
        for (const name of maleNames) {
            selected = voices.find(v => v.name.includes(name));
            if (selected) break;
        }

        // If no name match, hunt by generic "Male" + "Natural"
        if (!selected) {
            selected = voices.find(v => (v.name.includes('Natural') || v.name.includes('Premium')) && v.name.toLowerCase().includes('male'));
        }

        // Final fallback: First male voice found, or just the first voice
        clippyVoice = selected || voices.find(v => v.name.toLowerCase().includes('male')) || voices[0];
        console.log("Clippy Sidekick Mode [Activated]:", clippyVoice?.name);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    // Track current audio to prevent overlap
    let currentClippyAudio = null;

    window.stopClippyAudio = () => {
        if (currentClippyAudio) {
            currentClippyAudio.pause();
            currentClippyAudio.onended = null;
            currentClippyAudio.currentTime = 0;
            currentClippyAudio = null;
            clippy.classList.remove('talking');
        }
        bubble.classList.add('hidden');
    };

    window.clippySpeak = (keyOrText, audioPath) => {
        let textToSpeak = keyOrText;
        let finalAudioPath = audioPath;

        // CHECK: Is this a translation key?
        // We check if the key exists in our 'en' dictionary
        if (translations && translations.en && translations.en[keyOrText]) {
            const lang = window.currentLang || 'en';
            // 1. Get Text
            textToSpeak = translations[lang][keyOrText] || translations['en'][keyOrText];

            // 2. Resolve Audio Path
            // The translation keys are like 'clippy_welcome', but files are 'welcome.mp3'
            const fileKey = keyOrText.replace('clippy_', '');
            finalAudioPath = `sounds/clippy/${lang}/${fileKey}.mp3`;
        } else {
            // Legacy/Direct Text Mode
            // If specific audioPath wasn't provided, we might have issues, 
            // but the original logic handled some of this via the 'phrases' array below.
        }

        if (!textToSpeak) return;
        console.log(`Clippy (${window.currentLang}): ${textToSpeak} [${finalAudioPath}]`);

        window.stopClippyAudio(); // Stop previous
        bubble.classList.remove('hidden'); // Show bubble after stop hides it
        bubble.textContent = textToSpeak;

        // Function to handle the "talking" animation and cleanup
        const handleAudio = (audioObj) => {
            currentClippyAudio = audioObj;
            audioObj.onplay = () => clippy.classList.add('talking');
            audioObj.onended = () => {
                // Ensure this is still the active audio
                if (currentClippyAudio === audioObj) {
                    clippy.classList.remove('talking');
                    currentClippyAudio = null;
                    setTimeout(() => {
                        if (!clippy.classList.contains('talking')) {
                            bubble.classList.add('hidden');
                        }
                    }, 6000);
                }
            };
            audioObj.play().catch(e => {
                console.warn("Local audio playback blocked, falling back to legacy TTS...", e);
                // Clean up failed audio to prevent leak
                audioObj.src = '';
                currentClippyAudio = null;
                legacySpeak(textToSpeak);
            });
        };

        // Priority 1: High-Quality Local AI File
        if (finalAudioPath) {
            // Clean up previous audio element
            if (currentClippyAudio) {
                currentClippyAudio.src = '';
            }
            const audio = new Audio(finalAudioPath);
            handleAudio(audio);
        } else {
            legacySpeak(textToSpeak);
        }

        // Legacy Fallback (Old Neural AI logic) if file is missing
        function legacySpeak(text) {
            const encodedText = encodeURIComponent(text);
            const voice = (window.currentLang === 'da') ? "da-DK-JeppeNeural" : "en-US-BrianMultilingualNeural";
            const proxyUrl = `https://api.vve.me/api/tts?voice=${voice}&text=${encodedText}`;
            // Clean up previous audio element
            if (currentClippyAudio) {
                currentClippyAudio.src = '';
            }
            const audio = new Audio(proxyUrl);
            handleAudio(audio);
        }
    };

    const phrases = [
        'clippy_welcome',
        'clippy_meme',
        'clippy_double_click',
        'clippy_aarhus',
        'clippy_else',
        'clippy_talent',
        'clippy_navigation',
        'clippy_meme_secret'
    ];

    agent.addEventListener('click', () => {
        const key = phrases[Math.floor(Math.random() * phrases.length)];
        window.clippySpeak(key);
    });

    // Drag Logic
    let isDragging = false;
    let startX, startY;

    agent.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX - clippy.offsetLeft;
        startY = e.clientY - clippy.offsetTop;
        agent.style.cursor = 'grabbing';

        const onMouseMove = (ev) => {
            if (!isDragging) return;
            clippy.style.left = (ev.clientX - startX) + 'px';
            clippy.style.top = (ev.clientY - startY) + 'px';
            clippy.style.bottom = 'auto';
            clippy.style.right = 'auto';
        };

        const onMouseUp = () => {
            isDragging = false;
            agent.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // Proactive Idle Logic
    let idleCounter = 0;
    setInterval(() => {
        idleCounter += 10000;
        if (idleCounter >= 60000) { // 60 seconds of relative idle (was 45s/5s)
            const key = phrases[Math.floor(Math.random() * phrases.length)];
            window.clippySpeak(key);
            idleCounter = 0;
        }
    }, 10000); // Check every 10s instead of 5s
    document.addEventListener('mousedown', () => idleCounter = 0);
})();

// Starfield Screensaver Logic
(function initScreensaver() {
    const ss = document.createElement('div');
    ss.id = 'screensaver';
    ss.innerHTML = '<canvas></canvas>';
    document.body.appendChild(ss);

    const canvas = ss.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const starCount = 400;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width
        });
    }

    let ssAnimId = null;
    function draw() {
        // Only render when screensaver is actually visible
        if (ss.style.display === 'none' || ss.style.display === '') {
            ssAnimId = null;
            return; // Stop the loop when hidden
        }
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';

        stars.forEach(star => {
            star.z -= 5;
            if (star.z <= 0) star.z = canvas.width;

            const sx = (star.x / star.z) * canvas.width + canvas.width / 2;
            const sy = (star.y / star.z) * canvas.width + canvas.height / 2;
            const size = (1 - star.z / canvas.width) * 3;

            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();
        });
        ssAnimId = requestAnimationFrame(draw);
    }
    // Don't start draw() immediately — only start when screensaver activates

    let idleTime = 0;
    function resetIdle() {
        idleTime = 0;
        ss.style.display = 'none';
    }

    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('mousedown', resetIdle);

    setInterval(() => {
        idleTime++;
        if (idleTime > 60) { // 60 seconds idle → activate screensaver
            if (ss.style.display !== 'block') {
                ss.style.display = 'block';
                if (!ssAnimId) draw(); // Start rendering only now
            }
        }
    }, 1000);
})();

// Error Accordion Logic
window.startErrorAccordion = function () {
    playSound('error-sound');
    let count = 0;
    const max = 20;
    const interval = setInterval(() => {
        const x = 100 + (count * 20);
        const y = 100 + (count * 20);
        const clone = document.createElement('div');
        clone.className = 'window error-clone';
        clone.style.top = y + 'px';
        clone.style.left = x + 'px';
        clone.style.width = '300px';
        clone.style.height = '150px';
        clone.style.zIndex = zIndexCounter + count;
        clone.innerHTML = `
            <div class="title-bar"><div class="title-bar-text"><span>Error</span></div></div>
            <div class="window-content"><p>An error has occurred. Memory leak detected.</p></div>
        `;
        document.getElementById('windows-container').appendChild(clone);
        count++;
        if (count >= max) {
            clearInterval(interval);
            setTimeout(() => {
                document.querySelectorAll('.error-clone').forEach(e => e.remove());
            }, 3000);
        }
    }, 100);
};

// Welcome Screen Logic
(function initWelcomeScreen() {
    const login = document.createElement('div');
    login.id = 'login-screen';
    login.innerHTML = `
        <div id="login-top"></div>
        <div id="login-center">
            <div class="login-user-card" onclick="document.getElementById('login-screen').remove()">
                <img src="assets/Me-pixel.jpeg" class="login-pfp" style="object-fit: cover; border-radius: 5px;">
                <div class="login-text">
                    <h2>Kenneth</h2>
                    <p>Multimedia Creator</p>
                </div>
            </div>
        </div>
        <div id="login-bottom">
            <div class="login-footer-btn">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect x='2' y='2' width='12' height='12' fill='%23cc0000'/%3E%3C/svg%3E">
                <span>Turn off computer</span>
            </div>
            <div style="opacity:0.6;">After you log on, you can start working.</div>
        </div>
    `;
    document.body.appendChild(login);
})();

// 12. Recycle Bin
windowContents['recycle-bin'] = {
    title: 'Recycle Bin',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M10 12h28v28H10V12z' fill='%233A6EA5' stroke='%23003399' stroke-width='2'/%3E%3Cpath d='M8 12h32M24 12V6M16 6h16' stroke='%23003399' stroke-width='2'/%3E%3C/svg%3E",
    content: `
        <div class="xp-explorer" style="background:white;">
            <div style="padding:10px; border-bottom:1px solid #ACA899; background:#eee; font-size:10px;">1 objects in Recycle Bin</div>
            <div class="explorer-grid">
                <div class="explorer-item" onclick="alert('Recovering system32... just kidding!')">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 4v24h20V10l-6-6H6z' fill='white' stroke='black'/%3E%3C/svg%3E">
                    <span>secret_memes.txt</span>
                </div>
            </div>
        </div>
    `
};

// Redundant Desktop Icons removed for cleaner desktop management

// 13. Desktop Cleanup Wizard
windowContents['cleanup-wizard'] = {
    title: 'Desktop Cleanup Wizard',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='20' cy='20' r='10' stroke='black' stroke-width='2'/%3E%3Cline x1='28' y1='28' x2='40' y2='40' stroke='black' stroke-width='4'/%3E%3C/svg%3E", // Or a wizard icon
    content: `
        <div class="xp-wizard">
            <div class="wizard-side">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='20' cy='20' r='10' stroke='black' stroke-width='2'/%3E%3Cline x1='28' y1='28' x2='40' y2='40' stroke='black' stroke-width='4'/%3E%3C/svg%3E" width="48">
            </div>
            <div class="wizard-main">
                <h2 style="font-size:16px; margin-bottom:10px;">Welcome to the Desktop Cleanup Wizard</h2>
                <p>This wizard helps you clean up your desktop by moving unused icons to a folder called Unused Desktop Icons.</p>
                <br>
                <p>The following icons have not been used in the last 60 days:</p>
                <div style="border:1px solid #ACA899; background:white; height:100px; padding:5px; margin-top:10px;">
                    <div style="display:flex; align-items:center; gap:5px; font-size:11px;">
                        <input type="checkbox" checked disabled> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M6 4v24h20V10l-6-6H6z' fill='white' stroke='black'/%3E%3C/svg%3E" width="16"> secret_memes.txt
                    </div>
                </div>
                <div class="wizard-footer">
                    <button class="xp-btn" onclick="alert('Desktop Cleaned!'); closeWindow('cleanup-wizard'); openWindowById('unused-icons')">Finish</button>
                    <button class="xp-btn" onclick="closeWindow('cleanup-wizard')">Cancel</button>
                </div>
            </div>
        </div>
    `
};

// 14. Unused Icons Folder
windowContents['unused-icons'] = {
    title: 'Unused Desktop Icons',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M4 12v24h40V16H24l-4-4H4z' fill='%23FFC000' stroke='%23D49B00' stroke-width='2'/%3E%3C/svg%3E",
    content: '<p style="padding:20px; color:black;">Your unused icons have been successfully moved here!</p>'
};

// Desktop Cleanup Wizard Simulation
setTimeout(() => {
    openWindowById('cleanup-wizard');
    if (window.clippySpeak) window.clippySpeak("clippy_cluttered");
}, 120000); // 2 minutes

// Windows Update Notification Simulation
setTimeout(() => {
    if (window.clippySpeak) window.clippySpeak("clippy_updates");
}, 45000); // 45 seconds

// Desktop Pet (Wandering Cat)
// --- ARCADE INTEGRATION ---
window.arcadeKeys = {};
window.addEventListener('message', (e) => {
    if (e.data.type === 'ARCADE_INPUT') {
        window.arcadeKeys = e.data.keys;
    }
});

// Relay keyboard events to parent (for cabinet visual feedback when iframe has focus)
window.addEventListener('keydown', (e) => {
    window.parent.postMessage({ type: 'ARCADE_KEY_INTERNAL', code: e.code, state: true }, '*');
});
window.addEventListener('keyup', (e) => {
    window.parent.postMessage({ type: 'ARCADE_KEY_INTERNAL', code: e.code, state: false }, '*');
});

// Desktop Pet (Arcade-Controlled Cat)
(function initDesktopPet() {
    const pet = document.createElement('img');
    pet.id = 'desktop-pet';
    pet.src = 'assets/cat.gif';
    pet.title = "Kenneth's Desktop Cat - Controlled by Joystick";
    pet.style.display = 'block';
    pet.style.position = 'fixed'; // Ensure it's above everything
    pet.style.zIndex = '999999';
    pet.style.pointerEvents = 'none'; // So it doesn't block clicks
    document.body.appendChild(pet);

    let x = 100, y = 100;
    let wanderTimer = 0;
    let isManual = false;
    let lastClick = false;
    let lastEnter = false;

    let lastUpdateTime = 0;
    const CAT_IDLE_INTERVAL = 50; // ~20fps when idle

    function update(timestamp) {
        const keys = window.arcadeKeys || {};
        const isActive = keys['ArrowLeft'] || keys['KeyA'] || keys['ArrowRight'] || keys['KeyD'] ||
            keys['ArrowUp'] || keys['KeyW'] || keys['ArrowDown'] || keys['KeyS'] ||
            keys['Space'] || keys['Enter'];

        // Full 60fps when actively controlled, throttle to ~20fps when idle
        if (!isActive && timestamp - lastUpdateTime < CAT_IDLE_INTERVAL) {
            requestAnimationFrame(update);
            return;
        }
        lastUpdateTime = timestamp;

        const speed = 4; // Reduced from 7 for better control with joystick
        let dx = 0, dy = 0;

        // Arrows or WASD
        if (keys['ArrowLeft'] || keys['KeyA']) dx -= speed;
        if (keys['ArrowRight'] || keys['KeyD']) dx += speed;
        if (keys['ArrowUp'] || keys['KeyW']) dy -= speed;
        if (keys['ArrowDown'] || keys['KeyS']) dy += speed;

        if (dx !== 0 || dy !== 0) {
            isManual = true;
            wanderTimer = 180;
            x += dx;
            y += dy;
            pet.style.transform = dx > 0 ? 'scaleX(-1)' : 'scaleX(1)';
            pet.style.transition = 'none'; // Instant movement during manual
        } else if (wanderTimer > 0) {
            wanderTimer--;
        } else {
            isManual = false;
        }

        // Simplified Bounds Logic: Let the cat's center reach the absolute edges
        const half = 30; // Center offset

        x = Math.max(-half, Math.min(x, window.innerWidth - half));
        y = Math.max(-half, Math.min(y, window.innerHeight - half));

        pet.style.left = x + 'px';
        pet.style.top = y + 'px';

        // Interaction Logic: Space or Enter
        const isInteracting = keys['Space'] || keys['Enter'];

        if (isInteracting && !lastClick) {
            // Find element at cat's center (the click point)
            pet.style.display = 'none';
            const target = document.elementFromPoint(x + half, y + half);
            pet.style.display = 'block';

            if (target) {
                pet.classList.add('knocking');
                setTimeout(() => pet.classList.remove('knocking'), 200);

                // Standard click
                target.click();

                // Focus element if it's an input
                if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                    target.focus();
                }

                // XP Icon double-click support
                if (target.closest('.desktop-icon')) {
                    const winId = target.closest('.desktop-icon').getAttribute('data-window');
                    if (winId && typeof openWindowById === 'function') openWindowById(winId);
                }
            }
        }
        lastClick = isInteracting;

        requestAnimationFrame(update);
    }

    // Default autonomous wander (simplified)
    function wander() {
        if (!isManual && wanderTimer <= 0) {
            const tx = Math.random() * (window.innerWidth - 60);
            const ty = Math.random() * (window.innerHeight - 60);
            const dist = Math.sqrt(Math.pow(tx - x, 2) + Math.pow(ty - y, 2));
            const duration = dist * 10;

            pet.style.transition = `left ${duration}ms linear, top ${duration}ms linear`;
            pet.style.transform = tx > x ? 'scaleX(-1)' : 'scaleX(1)';
            x = tx; y = ty;
            pet.style.left = x + 'px';
            pet.style.top = y + 'px';
        }
        setTimeout(wander, 10000 + Math.random() * 5000);
    }

    // Start with a small jump
    pet.style.left = x + 'px';
    pet.style.top = y + 'px';
    requestAnimationFrame(update);
    wander();

    // Still allow standard dragging but don't break arcade control
    pet.style.pointerEvents = 'auto';
    pet.onmousedown = (e) => {
        if (e.button !== 0) return;
        isManual = true; wanderTimer = 300;
        let p3 = e.clientX; let p4 = e.clientY;
        pet.style.transition = 'none';
        const onUp = () => { document.onmouseup = null; document.onmousemove = null; };
        const onMove = (me) => {
            const p1 = p3 - me.clientX; const p2 = p4 - me.clientY;
            p3 = me.clientX; p4 = me.clientY;
            y -= p2; x -= p1;
            pet.style.top = y + "px"; pet.style.left = x + "px";
        };
        document.onmouseup = onUp;
        document.onmousemove = onMove;
    };
})();


/* --- COMMAND PROMPT --- */
windowContents['cmd'] = {
    title: 'C:\\WINDOWS\\system32\\cmd.exe',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='black'/%3E%3Cpath d='M4 8l6 6-6 6h4l6-6-6-6H4zM16 26h12v-4H16v4z' fill='white'/%3E%3C/svg%3E",
    content: `
        <div id="cmd-container" onclick="document.getElementById('cmd-input').focus()">
            <div id="cmd-output">
                <p>Microsoft Windows XP [Version 5.1.2600]</p>
                <p>(C) Copyright 1985-2001 Microsoft Corp.</p>
                <br>
                <p>C:\\Documents and Settings\\Kenneth></p>
            </div>
            <div class="cmd-line">
                <span>C:\\Documents and Settings\\Kenneth></span>
                <input type="text" id="cmd-input" autocomplete="off" spellcheck="false">
            </div>
        </div>
    `
};

window.initCmdLogic = function () {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('cmd-output');
    if (!input || !output) return;

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim();
            this.value = '';
            output.innerHTML += `<p>C:\\Documents and Settings\\Kenneth> ${cmd}</p>`;

            const args = cmd.toLowerCase().split(' ');
            const command = args[0];
            let response = '';

            switch (command) {
                case 'help':
                    response = `<p>Available commands:<br>HELP, DIR, CLS, EXIT, WHOAMI, START [app]</p>`;
                    break;
                case 'dir':
                    response = `<p>Volume in drive C has no label.<br>Directory of C:\\Documents and Settings\\Kenneth<br><br>01/01/2001 <DIR> .<br>01/01/2001 <DIR> ..<br>15/05/2023 <DIR> My Documents<br>10/10/2023 1,337 resume.txt<br><br>1 File(s) 1,337 bytes</p>`;
                    break;
                case 'del':
                case 'rd':
                case 'format':
                    if (cmd.includes('system32') || cmd.includes('/s') || cmd.includes('c:')) {
                        triggerBSOD();
                        return;
                    }
                    response = '<p>Access is denied.</p>';
                    break;
                case 'cls':
                    output.innerHTML = '';
                    break;
                case 'exit':
                    const win = input.closest('.window');
                    if (win) win.remove();
                    return;
                case 'whoami':
                    response = '<p>kenneth\\admin</p>';
                    break;
                case 'start':
                    if (args[1] && windowContents[args[1]]) {
                        openWindowById(args[1]);
                        response = `<p>Starting ${args[1]}...</p>`;
                    } else response = '<p>Usage: start [app name]</p>';
                    break;
                case 'snake':
                    response = '<p>🐍 Launching Snake Easter Egg...</p>';
                    openWindowById('snake');
                    break;
                case '': break;
                default:
                    response = `<p>'${cmd}' is not recognized.</p>`;
            }

            if (command !== 'cls' && response) output.innerHTML += response;
            const container = document.getElementById('cmd-container');
            container.scrollTop = container.scrollHeight;
        }
    });
    input.focus();
};

function triggerBSOD() {
    const bsod = document.createElement('div');
    bsod.id = 'bsod';
    bsod.innerHTML = `
        <div class="bsod-text">
            <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
            <br>
            <p>DRIVER_IRQL_NOT_LESS_OR_EQUAL</p>
            <br>
            <p>If this is the first time you've seen this Stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
            <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>
            <br>
            <p>Technical information:</p>
            <p>*** STOP: 0x000000D1 (0x00000040, 0x00000002, 0x00000000, 0xF73120AE)</p>
            <br>
            <p>***  gv3.sys - Address F73120AE base at F7300000, DateStamp 3dd991eb</p>
            <br><br>
            <p>Beginning dump of physical memory</p>
            <p>Physical memory dump complete.</p>
            <p>Contact your system administrator or technical support group for further assistance.</p>
        </div>
    `;
    document.body.appendChild(bsod);
    bsod.style.display = 'block';
    document.getElementById('desktop').style.display = 'none';
    document.getElementById('taskbar').style.display = 'none';

    // Restart on interaction
    setTimeout(() => {
        document.body.onclick = () => location.reload();
        document.body.onkeydown = () => location.reload();
    }, 1000);
}


/* ========================================
   ENHANCEMENT PACK - NOTEPAD FUNCTIONS
   ======================================== */
window.saveNote = function () {
    const textarea = document.getElementById('notepad-textarea');
    const status = document.getElementById('notepad-status');
    if (textarea) {
        localStorage.setItem('xp-notepad-content', textarea.value);
        status.textContent = 'Saved! | ' + new Date().toLocaleTimeString();
        if (window.clippySpeak) {
            window.clippySpeak("clippy_notepad_save");
        }
    }
};

window.loadNote = function () {
    const textarea = document.getElementById('notepad-textarea');
    const status = document.getElementById('notepad-status');
    const saved = localStorage.getItem('xp-notepad-content');
    if (textarea && saved) {
        textarea.value = saved;
        status.textContent = 'Loaded! | ' + saved.length + ' characters';
    } else {
        status.textContent = 'No saved notes found';
    }
};

window.clearNote = function () {
    const textarea = document.getElementById('notepad-textarea');
    const status = document.getElementById('notepad-status');
    if (textarea) {
        textarea.value = '';
        localStorage.removeItem('xp-notepad-content');
        status.textContent = 'Cleared!';
    }
};

// Auto-load notes when notepad opens
const originalOpenWindowById = window.openWindowById || openWindowById;
window.openWindowById = function (id) {
    originalOpenWindowById(id);
    if (id === 'notepad-enhanced') {
        setTimeout(() => {
            const saved = localStorage.getItem('xp-notepad-content');
            const textarea = document.getElementById('notepad-textarea');
            if (saved && textarea) {
                textarea.value = saved;
            }
            // Auto-save on typing
            if (textarea) {
                textarea.addEventListener('input', () => {
                    localStorage.setItem('xp-notepad-content', textarea.value);
                    document.getElementById('notepad-status').textContent = 'Autosaved | ' + new Date().toLocaleTimeString();
                });
            }
        }, 100);
    }
    // Clippy comments on specific windows
    if (window.clippySpeak) {
        const windowComments = {
            'notepad-enhanced': 'clippy_notepad',
            'photos': 'clippy_photos',
            'winamp': 'clippy_winamp',
            'cmd': 'clippy_cmd',
            // Legacy/Missing Keys (Use direct object if needed, but here we just map known ones)
            'solitaire': { text: "Classic Solitaire! I bet you can win.", audio: "sounds/clippy/solitaire.mp3" },
            'snake': { text: "Ssssnake! Don't hit the walls.", audio: "sounds/clippy/snake.mp3" },
            'calculator': { text: "Let's crunch some numbers.", audio: "sounds/clippy/calc.mp3" },
            'paint': 'clippy_paint',
            'sound-test': { text: "Testing, 1, 2, 3... Can you hear me?", audio: "sounds/clippy/sound_check.mp3" },
            'control-panel': { text: "Careful with those settings!", audio: "sounds/clippy/control_panel.mp3" },
            'search': 'clippy_search',
            'weather': { text: "How's the weather in Aarhus today?", audio: "sounds/clippy/weather.mp3" },
            'games': { text: "Want to play a game? Kenneth has some classics here!", audio: "sounds/clippy/games.mp3" },
            'tools': { text: "Need some utilities? Here are Kenneth's favorite tools.", audio: "sounds/clippy/tools.mp3" }
        };
        if (windowComments[id]) {
            setTimeout(() => {
                if (typeof windowComments[id] === 'string') {
                    window.clippySpeak(windowComments[id]);
                } else {
                    // Legacy fallback
                    window.clippySpeak(windowComments[id].text, windowComments[id].audio);
                }
            }, 500);
        }
    }
};

/* ========================================
   ENHANCEMENT PACK - PHOTO VIEWER
   ======================================== */
window.changePhoto = function (thumb, src) {
    const main = document.getElementById('photo-current');
    const thumbs = document.querySelectorAll('.photo-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    if (main) {
        main.style.opacity = 0;
        setTimeout(() => {
            main.src = src;
            main.style.opacity = 1;
        }, 150);
    }
    if (window.clippySpeak && Math.random() > 0.7) {
        window.clippySpeak("clippy_photo_nice");
    }
};

/* ========================================
   ENHANCEMENT PACK - KEYBOARD SHORTCUTS
   ======================================== */
document.addEventListener('keydown', (e) => {
    // Alt+F4 - Close active window
    if (e.altKey && e.key === 'F4') {
        e.preventDefault();
        const activeWin = document.querySelector('.window.active');
        if (activeWin) {
            const id = activeWin.id.replace('win-', '');
            closeWindow(id);
        }
    }

    // Ctrl+W - Close active window (alternative)
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        const activeWin = document.querySelector('.window.active');
        if (activeWin) {
            const id = activeWin.id.replace('win-', '');
            closeWindow(id);
        }
    }


    // Ctrl+S - Save in notepad
    if (e.ctrlKey && e.key === 's') {
        const notepad = document.getElementById('notepad-textarea');
        if (notepad && document.activeElement === notepad) {
            e.preventDefault();
            saveNote();
        }
    }
});

/* ========================================
   ENHANCEMENT PACK - BOOT SCREEN LOGIC
   ======================================== */
// Play the authentic old PC booting sound immediately
(function initBootSound() {
    const bootSound = new Audio('old-desktop-pc-booting.mp3');
    bootSound.volume = 0.6;

    // Try to play immediately (may be blocked by browser)
    bootSound.play().catch(() => {
        // If blocked, play on first interaction
        const playOnce = () => {
            bootSound.play().catch(() => { });
            document.removeEventListener('click', playOnce);
        };
        document.addEventListener('click', playOnce);
    });
})();

// Hide boot screen after loading completes
setTimeout(() => {
    const bootScreen = document.getElementById('boot-screen');
    if (bootScreen) {
        bootScreen.style.display = 'none';
    }
}, 3000);

/* ========================================
   ENHANCEMENT PACK - CAT WINDOW INTERACTION
   ======================================== */
(function enhanceCatBehavior() {
    const checkCatOnWindow = () => {
        const pet = document.getElementById('desktop-pet');
        if (!pet) return;

        const petRect = pet.getBoundingClientRect();
        const petCenter = {
            x: petRect.left + petRect.width / 2,
            y: petRect.top + petRect.height / 2
        };

        let onWindow = false;
        const winValues = Object.values(windows);
        for (let i = 0; i < winValues.length; i++) {
            const win = winValues[i];
            if (win.classList.contains('hidden')) continue;
            const winRect = win.getBoundingClientRect();
            if (petCenter.x >= winRect.left && petCenter.x <= winRect.right &&
                petCenter.y >= winRect.top && petCenter.y <= winRect.bottom) {
                onWindow = true;
                break; // Early exit — no need to check all windows
            }
        }

        pet.classList.toggle('on-window', onWindow);
    };

    // Check every 3 seconds instead of 1
    setInterval(checkCatOnWindow, 3000);

    // Occasionally make cat knock over a window (every 30s instead of 15s)
    setInterval(() => {
        if (Math.random() > 0.95) {
            const pet = document.getElementById('desktop-pet');
            if (!pet) return; // Early bail
            const openWindows = Object.values(windows).filter(w => !w.classList.contains('hidden'));

            if (openWindows.length > 0 && pet.classList.contains('on-window')) {
                const randomWin = openWindows[Math.floor(Math.random() * openWindows.length)];
                pet.classList.add('knocking');
                setTimeout(() => pet.classList.remove('knocking'), 500);

                randomWin.classList.add('shaking');
                setTimeout(() => randomWin.classList.remove('shaking'), 400);

                if (window.clippySpeak) {
                    window.clippySpeak("clippy_cat_knock");
                }
            }
        }
    }, 30000);
})();

// Redundant Desktop Icons removed for cleaner desktop management

/* ========================================
   ENHANCEMENT PACK - WINDOW CLOSE ANIMATION
   ======================================== */
const originalCloseWindow = window.closeWindow;
window.closeWindow = function (id) {
    // Stop any ongoing Clippy narration when a window closes
    if (window.stopClippyAudio) window.stopClippyAudio();

    // Extra cleanup for Snake if closed via window controls
    if (id === 'snake' && window.snakeKeyHandler) {
        window.removeEventListener('keydown', window.snakeKeyHandler);
    }

    const win = windows[id];
    if (win) {
        win.classList.add('closing');
        // Clippy sometimes says goodbye
        if (window.clippySpeak && Math.random() > 0.8) {
            window.clippySpeak("clippy_window_close");
        }
        setTimeout(() => {
            originalCloseWindow(id);
        }, 150);
    } else {
        originalCloseWindow(id);
    }
};

/* ========================================
   ENHANCEMENT PACK V2 - CALCULATOR LOGIC
   ======================================== */
let calcDisplay = '0';
let calcOperator = null;
let calcPrevValue = null;
let calcNewNumber = true;

window.calcNum = function (num) {
    if (calcNewNumber) {
        calcDisplay = num;
        calcNewNumber = false;
    } else {
        calcDisplay = calcDisplay === '0' ? num : calcDisplay + num;
    }
    updateCalcDisplay();
};

window.calcOp = function (op) {
    if (calcPrevValue === null) {
        calcPrevValue = parseFloat(calcDisplay);
    } else if (!calcNewNumber) {
        calcEquals();
        calcPrevValue = parseFloat(calcDisplay);
    }
    calcOperator = op;
    calcNewNumber = true;
};

window.calcEquals = function () {
    if (calcOperator && calcPrevValue !== null) {
        const current = parseFloat(calcDisplay);
        let result;
        switch (calcOperator) {
            case '+': result = calcPrevValue + current; break;
            case '-': result = calcPrevValue - current; break;
            case '*': result = calcPrevValue * current; break;
            case '/': result = current !== 0 ? calcPrevValue / current : 'Error'; break;
        }
        calcDisplay = String(result);
        calcPrevValue = null;
        calcOperator = null;
        calcNewNumber = true;
        updateCalcDisplay();
    }
};

window.calcClear = function () {
    calcDisplay = '0';
    calcOperator = null;
    calcPrevValue = null;
    calcNewNumber = true;
    updateCalcDisplay();
};

window.calcBackspace = function () {
    calcDisplay = calcDisplay.length > 1 ? calcDisplay.slice(0, -1) : '0';
    updateCalcDisplay();
};

function updateCalcDisplay() {
    const display = document.getElementById('calc-display');
    if (display) display.textContent = calcDisplay;
}

/* ========================================
   ENHANCEMENT PACK V2 - SNAKE GAME LOGIC
   ======================================== */
let snakeGame = null;

window.startSnake = function () {
    const canvas = document.getElementById('snake-canvas');
    if (!canvas) return;

    // Ensure focus for key events
    canvas.setAttribute('tabindex', '0');
    canvas.focus();

    const ctx = canvas.getContext('2d');

    const gridSize = 15;
    const tileCount = canvas.width / gridSize;

    let snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let dx = 0, dy = 0;
    let score = 0;

    if (snakeGame) clearInterval(snakeGame);

    // Remove old listener if exists to prevent duplicates
    if (window.snakeKeyHandler) {
        window.removeEventListener('keydown', window.snakeKeyHandler);
    }

    // New named handler
    window.snakeKeyHandler = (e) => {
        // Prevent default scrolling for arrow keys
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }

        switch (e.key) {
            case 'ArrowUp': if (dy !== 1) { dx = 0; dy = -1; } break;
            case 'ArrowDown': if (dy !== -1) { dx = 0; dy = 1; } break;
            case 'ArrowLeft': if (dx !== 1) { dx = -1; dy = 0; } break;
            case 'ArrowRight': if (dx !== -1) { dx = 1; dy = 0; } break;
        }
    };

    window.addEventListener('keydown', window.snakeKeyHandler);

    // Clean up on window close (mutation observer or robust checking)
    // For now, checks inside loop

    snakeGame = setInterval(() => {
        // Check if canvas still exists (window closed?)
        if (!document.getElementById('snake-canvas')) {
            clearInterval(snakeGame);
            window.removeEventListener('keydown', window.snakeKeyHandler);
            return;
        }

        // Move snake
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            clearInterval(snakeGame);
            window.removeEventListener('keydown', window.snakeKeyHandler);
            if (window.clippySpeak) window.clippySpeak("Game Over! You hit a wall. Your score: " + score);
            return;
        }

        // Self collision
        for (let segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                clearInterval(snakeGame);
                window.removeEventListener('keydown', window.snakeKeyHandler);
                if (window.clippySpeak) window.clippySpeak("Oops! You ate yourself. Score: " + score);
                return;
            }
        }

        snake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
            score++;
            const scoreEl = document.getElementById('snake-score');
            if (scoreEl) scoreEl.textContent = score;
            food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
        } else {
            snake.pop();
        }

        // Draw
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        ctx.fillStyle = '#00ff00';
        for (let segment of snake) {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
        }

        // Draw food
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);

    }, 100);

    if (window.clippySpeak) {
        window.clippySpeak("clippy_easter_egg");
    }
};

/* ========================================
   ENHANCEMENT PACK V2 - FILE SYSTEM NAV
   ======================================== */
const fileSystem = {
    root: [
        { name: 'My Documents', type: 'folder', id: 'documents' },
        { name: 'My Pictures', type: 'folder', id: 'pictures' },
        { name: 'My Music', type: 'folder', id: 'music' },
        { name: 'Control Panel', type: 'window', id: 'control-panel' }
    ],
    documents: [
        { name: 'Resume.txt', type: 'file' },
        { name: 'Cover Letter.doc', type: 'file' },
        { name: 'Projects', type: 'folder', id: 'projects' }
    ],
    pictures: [
        { name: 'Me-pixel.jpeg', type: 'image', path: 'assets/Me-pixel.jpeg' },
        { name: 'Me-pixel-smile.jpeg', type: 'image', path: 'assets/Me-pixel-smile.jpeg' },
        { name: 'sitting-me.png', type: 'image', path: 'assets/sitting-me.png' }
    ],
    music: [
        { name: 'Kenneth - Bass.mp3', type: 'audio' },
        { name: 'Chill Mix.mp3', type: 'audio' }
    ]
};

window.navigateFS = function (folder) {
    const content = document.getElementById('fs-content');
    const path = document.getElementById('fs-path');
    if (!content || !fileSystem[folder]) return;

    path.textContent = folder === 'root' ? 'C:\\' : 'C:\\' + folder.charAt(0).toUpperCase() + folder.slice(1);

    content.innerHTML = fileSystem[folder].map(item => {
        const pathPrefix = item.path ? '' : 'assets/';
        const itemPath = item.path || (item.type === 'image' ? 'assets/' + item.name : '');
        const action = item.type === 'folder' ? `navigateFS('${item.id}')` :
            item.type === 'window' ? `openWindowById('${item.id}')` :
                item.type === 'image' ? `window.open('${itemPath}', '_blank')` :
                    `alert('Opening ${item.name}...')`;
        return `
            <div class="explorer-item" onclick="${action}" ondblclick="${action}">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E${item.type === 'folder' ? "%3Cpath d='M4 8v16h24V10H16l-2-2H4z' fill='%23ffcc00'/%3E" :
                item.type === 'image' ? "%3Crect x='4' y='4' width='24' height='24' fill='%23fff' stroke='%23666'/%3E%3Ccircle cx='12' cy='12' r='4' fill='%23ffcc00'/%3E%3Cpath d='M4 20l8-6 6 4 10-6v12H4z' fill='%2300aa00'/%3E" :
                    "%3Cpath d='M6 4v24h20V10l-6-6H6z' fill='white' stroke='black'/%3E"
            }%3C/svg%3E">
                <span>${item.name}</span>
            </div>
        `;
    }).join('');
};



/* ========================================
   ENHANCEMENT PACK V2 - DIAL-UP SOUND FOR IE
   ======================================== */
// Dial-up logic moved to main openWindowById

// Redundant Desktop Icons removed for cleaner desktop management

/* ========================================
   ENHANCEMENT PACK V2 - SNAKE EASTER EGG IN CMD
   ======================================== */
const originalCmdLogic = window.initCmdLogic;
window.initCmdLogic = function () {
    if (originalCmdLogic) originalCmdLogic();

    const input = document.getElementById('cmd-input');
    const output = document.getElementById('cmd-output');
    if (!input || !output) return;

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim().toLowerCase();
            if (cmd === 'snake') {
                output.innerHTML += `<p>C:\\> ${cmd}</p><p>🐍 Launching Snake Easter Egg...</p>`;
                openWindowById('snake');
            }
        }
    });
};

/* ========================================
   ENHANCEMENT PACK V2 - UPDATE MSN WITH SOCIALS
   ======================================== */
// Enhance MSN window with social links
windowContents['msn'].content = `
    <div class="msn-win">
        <div class="msn-header">
            <img src="assets/Me-pixel-smile.jpeg" class="msn-pfp" style="object-fit: cover;">
            <div>
                <div style="font-weight:bold;">Kenneth (Online)</div>
                <div style="font-size:9px; color:#666;">I'm a multimedia creator!</div>
            </div>
        </div>
        <div class="msn-contact-list">
            <div class="msn-group">Social Links</div>
            <div class="msn-contact" onclick="window.open('https://linkedin.com/in/kenneth', '_blank')">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' rx='2' fill='%230077B5'/%3E%3Cpath d='M4 6v6h2V6H4zm1-3a1 1 0 100 2 1 1 0 000-2zM7 6v6h2V9c0-1 .5-1.5 1.2-1.5.8 0 .8.7.8 1.5v3h2V8.5c0-2-1-2.5-2-2.5-1 0-1.5.5-2 1V6H7z' fill='white'/%3E%3C/svg%3E" class="msn-status"> 
                <span>LinkedIn</span>
            </div>
            <div class="msn-contact" onclick="window.open('https://github.com/kenneth', '_blank')">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='8' fill='%23333'/%3E%3Cpath d='M8 1C4.1 1 1 4.1 1 8c0 3.1 2 5.7 4.8 6.6.4.1.5-.2.5-.4v-1.4c-2 .4-2.4-1-2.4-1-.3-.9-.8-1.1-.8-1.1-.7-.5.1-.5.1-.5.7.1 1.1.8 1.1.8.6 1.1 1.7.8 2.1.6.1-.5.3-.8.5-.9-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.8-2-.1-.2-.4-1 .1-2 0 0 .6-.2 2 .8.6-.2 1.2-.3 1.8-.3s1.2.1 1.8.3c1.4-1 2-.8 2-.8.4 1 .2 1.8.1 2 .5.5.8 1.2.8 2 0 2.8-1.7 3.4-3.3 3.6.3.2.5.7.5 1.4v2.1c0 .2.1.5.5.4C13 13.7 15 11.1 15 8c0-3.9-3.1-7-7-7z' fill='white'/%3E%3C/svg%3E" class="msn-status">
                <span>GitHub</span>
            </div>
            <div class="msn-contact" onclick="window.open('https://twitter.com/kenneth', '_blank')">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='8' fill='%231DA1F2'/%3E%3Cpath d='M12 5.5c-.4.2-.8.3-1.2.4.4-.3.8-.7.9-1.2-.4.2-.9.4-1.4.5-.4-.4-1-.7-1.6-.7-1.2 0-2.2 1-2.2 2.2 0 .2 0 .3.1.5-1.8-.1-3.4-1-4.5-2.3-.2.3-.3.7-.3 1.1 0 .8.4 1.4 1 1.8-.4 0-.7-.1-1-.3 0 1 .7 1.8 1.6 2-.2 0-.3.1-.5.1-.1 0-.3 0-.4-.1.3.9 1.1 1.5 2.1 1.5-.8.6-1.7 1-2.8 1h-.5c1 .6 2.2 1 3.4 1 4.1 0 6.3-3.4 6.3-6.3v-.3c.4-.3.8-.7 1-1.2z' fill='white'/%3E%3C/svg%3E" class="msn-status">
                <span>Twitter</span>
            </div>
            <div class="msn-group">Online (3)</div>
            <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>John (Aarhus)</span></div>
            <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>Sarah (Client)</span></div>
            <div class="msn-contact"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%2300cc00'/%3E%3C/svg%3E" class="msn-status"> <span>Recruiter</span></div>
        </div>
        <div class="msn-footer">
            <button class="xp-btn" style="width:100%;">Add a Contact</button>
        </div>
    </div>
`;

console.log("🚀 Enhancement Pack V3 Loaded!");

// Safety init for icons in case DOMContentLoaded fired early
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (window.initDesktopIcons) window.initDesktopIcons();

        // Force Start Menu CSS check
        const cssCheck = document.createElement('style');
        cssCheck.innerHTML = '.menu-item { min-height: 48px !important; }';
        document.head.appendChild(cssCheck);
    }, 100);
}



// ==========================================
// FINAL LAYOUT FIX: DONE
// ==========================================
// Layout order is now controlled by HTML + .row-break elements in #icon-grid
