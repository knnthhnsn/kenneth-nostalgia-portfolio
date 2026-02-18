/**
 * Arcade Controller - Handles physical inputs and communicates with the Portfolio Screen
 */

class ArcadeController {
    constructor() {
        this.iframe = document.getElementById('portfolio-screen');
        this.keys = {};
        this.setupInputs();
        this.setupCabinet();
        this.loop();
    }

    setupInputs() {
        // Keyboard Support (Arrows + WASD)
        // Keyboard Support (Arrows + WASD)
        window.addEventListener('keydown', e => {
            const key = this.mapKey(e.code);
            if (key) {
                // If intro is visible, Enter starts the game
                const introOverlay = document.getElementById('intro-overlay');
                if (key === 'Enter' && introOverlay && !introOverlay.classList.contains('hidden')) {
                    introOverlay.classList.add('hidden');
                }

                this.keys[key] = true;
                this.updateVisuals();
                this.sendInput();
            }
        });
        window.addEventListener('keyup', e => {
            const key = this.mapKey(e.code);
            if (key) {
                this.keys[key] = false;
                this.updateVisuals();
                this.sendInput();
            }
        });

        // Listen for keys forwarded from the iframe (when it has focus)
        window.addEventListener('message', e => {
            if (e.data.type === 'ARCADE_KEY_INTERNAL') {
                const key = this.mapKey(e.data.code);
                if (key) {
                    this.keys[key] = e.data.state;
                    this.updateVisuals();
                    this.sendInput();
                }
            }
        });

        // Joystick & Buttons Visual Feedback & Mapping
        const stick = document.getElementById('joystick');
        const jumpBtn = document.getElementById('btn-jump');
        const shootBtn = document.getElementById('btn-shoot');
        const startBtn = document.getElementById('btn-start-arcade');
        const introOverlay = document.getElementById('intro-overlay');

        if (startBtn && introOverlay) {
            startBtn.onclick = () => {
                introOverlay.classList.add('hidden');
            };
        }

        // Virtual joystick touch handling
        const joystickArea = document.querySelector('.joystick-area');
        if (joystickArea && stick) {
            let active = false;
            const handleMove = (e) => {
                if (!active) return;
                const touch = e.touches ? e.touches[0] : e;
                const rect = joystickArea.getBoundingClientRect();
                const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
                const dx = touch.clientX - center.x;
                const dy = touch.clientY - center.y;
                const deadzone = 15;

                this.keys['ArrowLeft'] = dx < -deadzone;
                this.keys['ArrowRight'] = dx > deadzone;
                this.keys['ArrowUp'] = dy < -deadzone;
                this.keys['ArrowDown'] = dy > deadzone;

                this.updateVisuals();
                this.sendInput();
            };

            joystickArea.addEventListener('touchstart', (e) => { e.preventDefault(); active = true; handleMove(e); });
            joystickArea.addEventListener('touchmove', (e) => { e.preventDefault(); handleMove(e); });
            joystickArea.addEventListener('touchend', (e) => {
                active = false;
                this.keys['ArrowLeft'] = this.keys['ArrowRight'] = this.keys['ArrowUp'] = this.keys['ArrowDown'] = false;
                this.updateVisuals();
                this.sendInput();
            });
        }

        // Action Buttons
        if (jumpBtn) {
            const press = (e) => { e.preventDefault(); this.keys['Enter'] = true; this.updateVisuals(); this.sendInput(); };
            const release = (e) => { e.preventDefault(); this.keys['Enter'] = false; this.updateVisuals(); this.sendInput(); };
            jumpBtn.addEventListener('mousedown', press);
            jumpBtn.addEventListener('mouseup', release);
            jumpBtn.addEventListener('touchstart', press);
            jumpBtn.addEventListener('touchend', release);
        }

        if (shootBtn) {
            const press = (e) => { e.preventDefault(); this.keys['Space'] = true; this.updateVisuals(); this.sendInput(); };
            const release = (e) => { e.preventDefault(); this.keys['Space'] = false; this.updateVisuals(); this.sendInput(); };
            shootBtn.addEventListener('mousedown', press);
            shootBtn.addEventListener('mouseup', release);
            shootBtn.addEventListener('touchstart', press);
            shootBtn.addEventListener('touchend', release);
        }
    }

    updateVisuals() {
        const stick = document.getElementById('joystick');
        const jumpBtn = document.getElementById('btn-jump');
        const shootBtn = document.getElementById('btn-shoot');

        if (stick) {
            stick.className = 'stick-handle';
            if (this.keys['ArrowLeft']) stick.classList.add('stick-left');
            if (this.keys['ArrowRight']) stick.classList.add('stick-right');
            if (this.keys['ArrowUp']) stick.classList.add('stick-up');
            if (this.keys['ArrowDown']) stick.classList.add('stick-down');
        }

        if (jumpBtn) {
            if (this.keys['Enter']) jumpBtn.classList.add('pressed');
            else jumpBtn.classList.remove('pressed');
        }

        if (shootBtn) {
            if (this.keys['Space']) shootBtn.classList.add('pressed');
            else shootBtn.classList.remove('pressed');
        }
    }

    mapKey(code) {
        const maps = {
            'ArrowUp': 'ArrowUp', 'KeyW': 'ArrowUp',
            'ArrowDown': 'ArrowDown', 'KeyS': 'ArrowDown',
            'ArrowLeft': 'ArrowLeft', 'KeyA': 'ArrowLeft',
            'ArrowRight': 'ArrowRight', 'KeyD': 'ArrowRight',
            'Enter': 'Enter',
            'Space': 'Space'
        };
        return maps[code];
    }

    setupCabinet() {
        const pwrSwitch = document.getElementById('cabinet-toggle-switch');
        const cabinet = document.querySelector('.arcade-cabinet');
        if (pwrSwitch && cabinet) {
            pwrSwitch.onclick = () => {
                pwrSwitch.classList.toggle('off');
                cabinet.classList.toggle('power-off');
            };
        }
    }

    sendInput(force = false) {
        if (!this.iframe || !this.iframe.contentWindow) return;

        // Only send if state changed OR forced
        const currentState = JSON.stringify(this.keys);
        if (force || currentState !== this.lastSentState) {
            this.iframe.contentWindow.postMessage({
                type: 'ARCADE_INPUT',
                keys: this.keys
            }, '*');
            this.lastSentState = currentState;
        }
    }

    loop() {
        // Only sync periodically as a fallback, not every frame
        // Primary input is already sent on every key/touch event
        this.sendInput();
        this._loopTimeout = setTimeout(() => this.loop(), 250); // 4fps fallback sync instead of 60fps
    }
}

// Initialize when ready
window.addEventListener('load', () => {
    window.controller = new ArcadeController();
});
