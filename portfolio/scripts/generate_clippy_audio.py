import asyncio
import edge_tts
import os

phrases_en = {
    # === SYSTEM SOUNDS ===
    "startup": "Welcome back, Kenneth! Your desktop is ready.",
    "shutdown": "Are you sure you want to shut down? I'll miss you!",
    "error": "Oops! Something went wrong. But don't worry, I'm here to help!",
    "window_close": "Goodbye, window! See you next time.",
    "logon": "Hello Kenneth! Ready to show off your portfolio?",
    
    # === RANDOM IDLE PHRASES ===
    "welcome": "It looks like you're browsing a portfolio. Would you like help?",
    "meme": "Don't forget to check the Recycle Bin for memes!",
    "double_click": "Double-click an icon to open it.",
    "aarhus": "Aarhus is a great city. Did you know that?",
    "else": "Is there anything else I can do for you?",
    "talent": "Kenneth is an award-winning multimedia creator. Very talented!",
    "navigation": "Need a hand with navigation? Just click around!",
    "productivity": "You've been very productive today! Keep it up!",
    "coffee": "Time for a coffee break? I'll keep an eye on things.",
    "weekend": "Working on a weekend? Now that's dedication!",
    
    # === WINDOW-SPECIFIC PHRASES ===
    "pinball": "Oh, Pinball! Did you know my high score is 1,234,000?",
    "paint": "Drawing something for the portfolio? I can help you with shapes!",
    "minesweeper": "Don't click the mines! (I've been there...)",
    "search": "Rover is a good boy, isn't he?",
    "ie": "Looking for more projects? Check the favorites sidebar!",
    "notepad": "Writing something important? Don't forget to save!",
    "photos": "Nice photos! You have a great eye for composition.",
    "cmd": "Ooh, the command prompt! You must be a power user.",
    "winamp": "It really whips the llama's behind! Classic Winamp.",
    
    # === CAT PHRASES ===
    "cat_like": "Meow! The cat seems to like your portfolio.",
    "cat_recycle": "I think the cat is looking for the Recycle Bin.",
    "cat_step": "Watch out! Don't let him step on your windows.",
    "cat_treat": "Does anyone have a digital treat? This cat looks hungry.",
    "cat_sleep": "Shhh! The cat is taking a nap on your desktop.",
    "cat_knock": "Oh no! The cat knocked over a window! Classic cat behavior.",
    "cat_keyboard": "The cat is trying to type! I wonder what it's writing.",
    "cluttered": "Your desktop is looking a bit cluttered. Let me help you with that!",
    "updates": "New updates are available for your computer. Check the Control Panel!",
    "meme_secret": "I found some secret memes in the recycle bin. Don't tell Kenneth I told you!",
    "keyboard_shortcut": "Pro tip: Press Alt plus F4 to close windows quickly!",
    "easter_egg": "You found a secret! Kenneth hid easter eggs all over this portfolio.",
    
    # === THEME/CONTRAST PHRASES ===
    "hc_on": "Whoa! That's high contrast! Very retro.",
    "hc_off": "Back to the classic look!",
    "theme_success": "Applied the new color scheme! Looking good.",
    
    # === PHOTO VIEWER PHRASES ===
    "photo_nice": "What a beautiful photo! Kenneth has great taste.",
    "photo_next": "Let me show you the next masterpiece!",
    
    # === NOTEPAD PHRASES ===
    "notepad_save": "Your note has been saved! I'll remember it for you.",
    "notepad_tip": "Did you know? You can save notes and they'll still be here tomorrow!"
}

phrases_da = {
    # === SYSTEM SOUNDS ===
    "startup": "Velkommen tilbage, Kenneth! Dit skrivebord er klar.",
    "shutdown": "Er du sikker på, at du vil lukke ned? Jeg kommer til at savne dig!",
    "error": "Ups! Noget gik galt. Men bare rolig, jeg er her for at hjælpe!",
    "window_close": "Farvel vindue! Vi ses næste gang.",
    "logon": "Hej Kenneth! Klar til at vise din portfolio frem?",
    
    # === RANDOM IDLE PHRASES ===
    "welcome": "Det ser ud til, at du kigger på en portfolio. Har du brug for hjælp?",
    "meme": "Glem ikke at tjekke Papirkurven for memes!",
    "double_click": "Dobbeltklik på et ikon for at åbne det.",
    "aarhus": "Aarhus er en fantastisk by. Vidste du det?",
    "else": "Er der andet, jeg kan gøre for dig?",
    "talent": "Kenneth er en prisvindende multimedie-skaber. Meget talentfuld!",
    "navigation": "Har du brug for hjælp til navigation? Bare klik omkring!",
    "productivity": "Du har været meget produktiv i dag! Fortsæt det gode arbejde!",
    "coffee": "Tid til en kaffepause? Jeg holder øje med tingene.",
    "weekend": "Arbejder du i weekenden? Det kalder jeg dedikation!",
    
    # === WINDOW-SPECIFIC PHRASES ===
    "pinball": "Åh, Pinball! Vidste du, at min highscore er en million, tohundrede og fireogtredive tusind?",
    "paint": "Tegner du noget til portfolioen? Jeg kan hjælpe dig med formerne!",
    "minesweeper": "Pas på minerne! (Jeg har været der...)",
    "search": "Rover er en god dreng, er han ikke?",
    "ie": "Leder du efter flere projekter? Tjek favoritterne i sidepanelet!",
    "notepad": "Skriver du noget vigtigt? Glem ikke at gemme!",
    "photos": "Flotte billeder! Du har et godt øje for komposition.",
    "cmd": "Uuh, kommandoprompten! Du må være en power user.",
    "winamp": "It really whips the llama's behind! Klassisk Winamp.",
    
    # === CAT PHRASES ===
    "cat_like": "Mjav! Katten ser ud til at kunne lide din portfolio.",
    "cat_recycle": "Jeg tror, katten leder efter Papirkurven.",
    "cat_step": "Pas på! Lad den ikke træde på dine vinduer.",
    "cat_treat": "Er der nogen, der har en digital godbid? Katten ser sulten ud.",
    "cat_sleep": "Shhh! Katten tager en lur på dit skrivebord.",
    "cat_knock": "Åh nej! Katten væltede et vindue! Typisk katteadfærd.",
    "cat_keyboard": "Katten prøver at skrive! Jeg gad vide, hvad den skriver.",
    "cluttered": "Dit skrivebord ser lidt rodet ud. Lad mig hjælpe dig med det!",
    "updates": "Der er nye opdateringer til din computer. Tjek Kontrolpanelet!",
    "meme_secret": "Jeg fandt nogle hemmelige memes i papirkurven. Sig ikke til Kenneth, at jeg sagde det!",
    "keyboard_shortcut": "Pro tip: Tryk Alt plus F4 for at lukke vinduer hurtigt!",
    "easter_egg": "Du fandt en hemmelighed! Kenneth har gemt påskeæg over hele denne portfolio.",
    
    # === THEME/CONTRAST PHRASES ===
    "hc_on": "Wow! Det er høj kontrast! Meget retro.",
    "hc_off": "Tilbage til det klassiske look!",
    "theme_success": "Nyt farvetema anvendt! Det ser godt ud.",
    
    # === PHOTO VIEWER PHRASES ===
    "photo_nice": "Sikke et smukt billede! Kenneth har god smag.",
    "photo_next": "Lad mig vise dig det næste mesterværk!",
    
    # === NOTEPAD PHRASES ===
    "notepad_save": "Din note er gemt! Jeg skal nok huske den for dig.",
    "notepad_tip": "Vidste du det? Du kan gemme noter, og de vil stadig være her i morgen!"
}

VOICE_EN = "en-US-BrianMultilingualNeural"
VOICE_DA = "da-DK-JeppeNeural"

async def generate_clippy_audio():
    base_dir = "sounds/clippy"
    
    # Ensure directories exist
    os.makedirs(os.path.join(base_dir, "en"), exist_ok=True)
    os.makedirs(os.path.join(base_dir, "da"), exist_ok=True)

    # Generate English
    print("Generating English audio...")
    for key, text in phrases_en.items():
        output_path = os.path.join(base_dir, "en", f"{key}.mp3")
        if not os.path.exists(output_path): # Optional: Skip if exists to save time? No, let's overwrite for updates
             pass
        print(f"  EN -> {key}")
        communicate = edge_tts.Communicate(text, VOICE_EN) 
        await communicate.save(output_path)
    
    # Generate Danish
    print("Generating Danish audio...")
    for key, text in phrases_da.items():
        output_path = os.path.join(base_dir, "da", f"{key}.mp3")
        print(f"  DA -> {key}")
        communicate = edge_tts.Communicate(text, VOICE_DA) 
        await communicate.save(output_path)
    
    print("All audio files generated successfully!")

if __name__ == "__main__":
    asyncio.run(generate_clippy_audio())
