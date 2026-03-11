/* =========================================================
   Matchmaking Attributes Dashboard — Application Logic
   ========================================================= */

// ── Dropdown Options for each attribute ──
const ATTRIBUTE_OPTIONS = {
    // Top Level
    gender: ['Male', 'Female', 'Non_binary'],
    age_group: ['Adult', 'Teenager', 'Child', 'Senior'],
    age_range: ['18-24', '25-30', '31-39', '40-45', '46-55', '56+'],
    ethnicity: ['Asian', 'Caucasian', 'African', 'Hispanic', 'Middle_Eastern', 'Mixed'],
    emotion: ['Neutral', 'Happy', 'Sad', 'Angry', 'Surprised', 'Fearful'],
    skin_color: ['Fair', 'Medium', 'Olive', 'Brown', 'Dark'],

    // Hair
    'hair.hair_height': ['Above neck', 'Below neck but above shoulders', 'Shoulder length', 'Long'],
    'hair.hair_color': ['Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White', 'Auburn'],
    'hair.hair_style': ['Straight', 'Curly', 'Wavy', 'Braided', 'Ponytail', 'Bun'],
    'hair.hair_length': ['Short', 'Medium', 'Long'],
    'hair.hair_part': ['None', 'Middle', 'Left', 'Right'],
    'hair.hair_volume': ['Low', 'Medium', 'High'],
    'hair.head_hair': ['Present', 'Absent'],
    'hair.balding': ['None', 'Frontal', 'Crown', 'Full'],

    // Eye
    'eye.eye_color': ['Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Amber'],
    'eye.eye_size': ['Small', 'Normal', 'Large'],
    'eye.eye_direction': ['Forward', 'Left', 'Right', 'Up', 'Down'],
    'eye.pupil_visibility': ['Fully visible', 'Partially visible', 'Not visible'],

    // Face Geometry
    'face_geometry.forehead_height': ['Low', 'Medium', 'High'],
    'face_geometry.jawline': ['Soft', 'Medium', 'Sharp'],
    'face_geometry.prominent_cheekbones': ['Yes', 'No'],

    // Facial Features
    'facial_features.face_structure': ['Symmetric', 'Asymmetric'],
    'facial_features.face_shape': ['Oval', 'Square', 'Round', 'Heart', 'Oblong', 'Diamond'],
    'facial_features.face_size': ['Small', 'Medium', 'Large'],
    'facial_features.nose_size': ['Small', 'Medium', 'Large'],
    'facial_features.nose_shape': ['Straight', 'Pointy', 'Hooked', 'Flat'],
    'facial_features.eyebrow_thickness': ['Thin', 'Medium', 'Thick'],
    'facial_features.mouth_state': ['Open', 'Closed'],
    'facial_features.teeth_visible': ['Yes', 'No'],
    'facial_features.lip_stick': ['None', 'Light', 'Dark', 'Bold'],
    'facial_features.beard': ['None', 'Stubble', 'Short', 'Medium', 'Long', 'Full'],
    'facial_features.mustache': ['None', 'Thin', 'Thick', 'Handlebar'],

    // Accessories
    'accessories.eyewear': ['None', 'PrescriptionGlasses', 'Sunglasses'],
    'accessories.headwear': ['None', 'Cap', 'Hat', 'Turban', 'Helmet'],
    'accessories.earrings': ['None', 'Studs', 'Hoops', 'Dangles'],
    'accessories.visible_piercings': ['None', 'Present'],
    'accessories.tattoo': ['None', 'Present'],

    // Body
    'body.body_shape': ['Slim', 'Average', 'Athletic', 'Heavy'],
    'body.height_estimate': ['Short', 'Average', 'Tall'],
    'body.pose': ['Standing', 'Sitting', 'Lying'],
    'body.body_orientation': ['Front', 'Side', 'Back'],
    'body.arm_position': ['Down', 'Up', 'Crossed'],

    // Clothing
    'clothing.attire_style': ['Casual', 'Formal', 'Traditional', 'Sporty'],
    'clothing.upper_garment': ['Shirt', 'T-shirt', 'Sweater', 'Jacket'],
    'clothing.lower_garment': ['Trousers', 'Jeans', 'Shorts', 'Skirt'],
    'clothing.full_dress': ['None', 'Sari', 'Gown'],
    'clothing.clothing_color': ['Black', 'White', 'Blue', 'Red', 'Green'],
    'clothing.clothing_pattern': ['Solid', 'Striped', 'Checkered', 'Floral'],
    'clothing.sleeve_length': ['Short', 'Long', 'Sleeveless'],

    // Environment
    'environment.location_type': ['Indoor', 'Outdoor'],
    'environment.background_type': ['Plain', 'Detailed', 'Blurred'],
};

// Human-readable labels with emojis
const ATTRIBUTE_LABELS = {
    gender: 'Gender',
    attributeGender: 'Gender',
    age_group: 'Age Group',
    ageGroup: 'Age Group',
    age_range: 'Age Range',
    ageRange: 'Age Range',
    ethnicity: 'Ethnicity',
    emotion: 'Emotion',
    skin_color: 'Skin Color',
    skinColor: 'Skin Color',
    'hair.hair_height': 'Hair Height',
    hairHeight: 'Hair Height',
    'hair.hair_color': 'Hair Color',
    hairColor: 'Hair Color',
    'hair.hair_style': 'Hair Style',
    hairStyle: 'Hair Style',
    'hair.hair_length': 'Hair Length',
    hairLength: 'Hair Length',
    'hair.hair_part': 'Hair Part',
    hairPart: 'Hair Part',
    'hair.hair_volume': 'Hair Volume',
    hairVolume: 'Hair Volume',
    'hair.head_hair': 'Head Hair',
    headHair: 'Head Hair',
    'hair.balding': 'Balding',
    balding: 'Balding',
    'eye.eye_color': 'Eye Color',
    eyeColor: 'Eye Color',
    'eye.eye_size': 'Eye Size',
    eyeSize: 'Eye Size',
    'eye.eye_direction': 'Eye Direction',
    eyeDirection: 'Eye Direction',
    'eye.pupil_visibility': 'Pupil Visibility',
    pupilVisibility: 'Pupil Visibility',
    'face_geometry.forehead_height': 'Forehead Height',
    foreHeadHeight: 'Forehead Height',
    'face_geometry.jawline': 'Jawline',
    jawline: 'Jawline',
    'face_geometry.prominent_cheekbones': 'Prominent Cheekbones',
    prominentCheekbones: 'Prominent Cheekbones',
    'facial_features.face_structure': 'Face Structure',
    faceStructure: 'Face Structure',
    'facial_features.face_shape': 'Face Shape',
    faceShape: 'Face Shape',
    'facial_features.face_size': 'Face Size',
    faceSize: 'Face Size',
    'facial_features.nose_size': 'Nose Size',
    noseSize: 'Nose Size',
    'facial_features.nose_shape': 'Nose Shape',
    noseShape: 'Nose Shape',
    'facial_features.eyebrow_thickness': 'Eyebrow Thickness',
    eyebrowThickness: 'Eyebrow Thickness',
    'facial_features.mouth_state': 'Mouth State',
    mouthState: 'Mouth State',
    'facial_features.teeth_visible': 'Teeth Visible',
    teethVisible: 'Teeth Visible',
    'facial_features.lip_stick': 'Lip Stick',
    lipStick: 'Lip Stick',
    'facial_features.beard': 'Beard',
    beard: 'Beard',
    'facial_features.mustache': 'Mustache',
    mustache: 'Mustache',
    'accessories.eyewear': 'Eyewear',
    eyewear: 'Eyewear',
    'accessories.headwear': 'Headwear',
    headwear: 'Headwear',
    'accessories.earrings': 'Earrings',
    earrings: 'Earrings',
    'accessories.visible_piercings': 'Visible Piercings',
    visiblePiercings: 'Visible Piercings',
    'accessories.tattoo': 'Tattoo',
    tattoo: 'Tattoo',
    'body.body_shape': 'Body Shape',
    bodyShape: 'Body Shape',
    'body.height_estimate': 'Height Estimate',
    heightEstimate: 'Height Estimate',
    'body.pose': 'Pose',
    pose: 'Pose',
    'body.body_orientation': 'Body Orientation',
    bodyOrientation: 'Body Orientation',
    'body.arm_position': 'Arm Position',
    armPosition: 'Arm Position',
    'clothing.attire_style': 'Attire Style',
    attireStyle: 'Attire Style',
    'clothing.upper_garment': 'Upper Garment',
    upperGarment: 'Upper Garment',
    'clothing.lower_garment': 'Lower Garment',
    lowerGarment: 'Lower Garment',
    'clothing.full_dress': 'Full Dress',
    fullDress: 'Full Dress',
    'clothing.clothing_color': 'Clothing Color',
    clothingColor: 'Clothing Color',
    'clothing.clothing_pattern': 'Clothing Pattern',
    clothingPattern: 'Clothing Pattern',
    'clothing.sleeve_length': 'Sleeve Length',
    sleeveLength: 'Sleeve Length',
    'environment.location_type': 'Location Type',
    locationType: 'Location Type',
    'environment.background_type': 'Background Type',
    backgroundType: 'Background Type',
};

// All attribute keys in display order
const ATTRIBUTE_KEYS = Object.keys(ATTRIBUTE_OPTIONS);

// Identity fields (not editable via dropdown — display only)
const IDENTITY_FIELDS = ['personId', 'name', 'image_url'];

// ── Helpers ──
function getNested(obj, path) {
    if (!obj) return undefined;

    // Handle the mmEvent wrapper inside the object if it exists
    const target = obj.mmEvent || obj;

    // 1. Try exact path match (handles flat structures with dots or simple keys)
    if (target[path] !== undefined) return target[path];

    // 2. Try traditional nested access (a.b.c)
    let parts = path.split('.');
    if (parts.length > 1) {
        let current = target;
        for (const part of parts) {
            current = (current && current[part] !== undefined) ? current[part] : undefined;
        }
        if (current !== undefined) return current;
    }

    // 3. Try leaf key directly for flat structures (hair.hair_color -> hair_color)
    if (parts.length > 1) {
        const leafKey = parts[parts.length - 1];
        if (target[leafKey] !== undefined) return target[leafKey];
    }

    // 4. Try camelCase fallback (hair_color -> hairColor)
    const camelPath = path.includes('.') ? parts[parts.length - 1] : path;
    const camelKey = camelPath.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    if (target[camelKey] !== undefined) return target[camelKey];

    // 5. Specific known aliases
    const aliases = {
        'gender': ['attributeGender'],
        'age_group': ['ageGroup'],
        'age_range': ['ageRange'],
        'skin_color': ['skinColor', 'skin_color'],
        'face_geometry.forehead_height': ['foreHeadHeight'],
    };
    if (aliases[path]) {
        for (const alias of aliases[path]) {
            if (target[alias] !== undefined) return target[alias];
        }
    }

    return undefined;
}

function setNested(obj, path, value) {
    if (!obj) return;
    const target = obj.mmEvent || obj;

    // 1. If key exists as flat key, update it
    if (target[path] !== undefined) {
        target[path] = value;
        return;
    }

    // 2. If it's a simple key, set it
    if (!path.includes('.')) {
        // Check for camelCase version
        const camelKey = path.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
        if (target[camelKey] !== undefined) {
            target[camelKey] = value;
        } else {
            target[path] = value;
        }
        return;
    }

    // 3. For dotted paths, check if the leaf key exists as a flat key first
    let parts = path.split('.');
    const leafKey = parts[parts.length - 1];
    if (target[leafKey] !== undefined) {
        target[leafKey] = value;
        return;
    }

    // 4. Check if flat camelCase key exists (hair.hair_color -> hairColor)
    const camelKey = leafKey.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    if (target[camelKey] !== undefined) {
        target[camelKey] = value;
        return;
    }

    // 5. Standard nested setting
    const lastKey = parts.pop();
    const lastObj = parts.reduce((prev, curr) => {
        if (!prev[curr]) prev[curr] = {};
        return prev[curr];
    }, target);
    lastObj[lastKey] = value;
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// ── State ──
let eventCards = {}; // keyed by personId
let ws = null;
let wsReconnectDelay = 1000; // ms, doubles on each failure (max 16 s)
let wsReconnectTimer = null;
let heartbeatInterval = null;
let eventQueue = [];

// ── DOM refs ──
const cardsGrid = document.getElementById('cardsGrid');
const emptyState = document.getElementById('emptyState');
const connectionStatus = document.getElementById('connectionStatus');
const loadSampleBtn = document.getElementById('loadSampleBtn');
const toastContainer = document.getElementById('toastContainer');
const sidebarList = document.getElementById('sidebarList');
const batchCount = document.getElementById('batchCount');
const sidebar = document.getElementById('sidebar');

// ── WebSocket Connection ──
function startHeartbeat() {
    stopHeartbeat();
    heartbeatInterval = setInterval(() => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'ping' }));
        }
    }, 30000); // Send ping every 30 seconds
}

function stopHeartbeat() {
    if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }
}

function connectWebSocket() {
    if (ws) {
        stopHeartbeat();
        ws.onopen = null;
        ws.onmessage = null;
        ws.onerror = null;
        ws.onclose = null;
        ws.close();
        ws = null;
    }
    clearTimeout(wsReconnectTimer);

    try {
        ws = new WebSocket(CONFIG.WS_ENDPOINT);

        ws.onopen = () => {
            setConnectionStatus(true);
            showToast('Connected to WebSocket', 'success');
            wsReconnectDelay = 1000; // reset backoff on successful connect
            startHeartbeat();
        };

        ws.onmessage = (e) => {
            try {
                const raw = JSON.parse(e.data);
                console.log('Raw WS message:', raw);

                // Backend sends: { profile_id, name, image_url, image_attributes }
                // Normalise into the flat structure the rest of the app expects
                let mmEvent;
                if (raw.image_attributes) {
                    mmEvent = { ...raw.image_attributes };
                    // Ensure personId is set (backend uses profile_id)
                    if (!mmEvent.personId && !mmEvent.person_id) {
                        mmEvent.personId = raw.profile_id;
                    }
                    // Pull image_url and name from the top-level message
                    if (!mmEvent.image_url && raw.image_url) {
                        mmEvent.image_url = raw.image_url;
                    }
                    if (!mmEvent.name && raw.name) {
                        mmEvent.name = raw.name;
                    }
                } else {
                    mmEvent = raw.mmEvent || raw; // Fallback for other formats
                }

                console.log('Processed mmEvent (queued):', mmEvent);
                enqueueEvent(mmEvent);
            } catch (err) {
                console.error('Failed to parse WebSocket message:', err);
                showToast('Failed to parse event data', 'error');
            }
        };

        ws.onerror = (err) => {
            console.error('WebSocket error:', err);
        };

        ws.onclose = () => {
            setConnectionStatus(false);
            stopHeartbeat();

            // Auto-reconnect with exponential backoff (max 16 s)
            wsReconnectDelay = Math.min(wsReconnectDelay * 2, 16000);
            console.log(`WebSocket closed. Reconnecting in ${wsReconnectDelay / 1000}s…`);
            wsReconnectTimer = setTimeout(connectWebSocket, wsReconnectDelay);
        };
    } catch (err) {
        console.error('WebSocket connection failed:', err);
        setConnectionStatus(false);
    }
}

function setConnectionStatus(connected) {
    const statusText = connectionStatus.querySelector('.status-text');
    if (connected) {
        connectionStatus.classList.add('connected');
        statusText.textContent = 'Connected';
    } else {
        connectionStatus.classList.remove('connected');
        statusText.textContent = 'Disconnected';
    }
}

// ── Queue Management ──
function enqueueEvent(mmEvent) {
    // Filter out events without a valid personId (e.g. raw attribute blobs with no identity)
    const person = mmEvent.mmEvent || mmEvent;
    const id = person.personId || person.person_id;

    if (!id) {
        console.log('Skipping event without personId');
        return;
    }

    eventQueue.push(mmEvent);
    updateQueueUI();
    showToast(`New profile received (Queue: ${eventQueue.length})`, 'info');
}

function processNextInQueue() {
    if (eventQueue.length === 0) return;

    const nextEvent = eventQueue[0]; // peek
    loadProfileFromSidebar(nextEvent.personId);
}

function updateQueueUI() {
    batchCount.textContent = eventQueue.length;

    // Sort queue by some criteria if needed, or just render
    sidebarList.innerHTML = eventQueue.map(event => {
        const name = (event.name && event.name.trim()) ? event.name : (event.person_name || 'Unknown');
        const id = event.personId || event.person_id || 'ID Unknown';

        return `
            <div class="sidebar-item" id="sidebar-item-${id}" onclick="loadProfileFromSidebar('${id}')">
                <img class="sidebar-profile-img" src="${event.image_url || 'https://via.placeholder.com/100/1e293b/94a3b8?text=?'}" alt="${name}">
                <div class="sidebar-profile-info">
                    <div class="sidebar-profile-name">${escapeHtml(name)}</div>
                    <div class="sidebar-profile-id">${escapeHtml(id)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function loadProfileFromSidebar(personId) {
    const eventIndex = eventQueue.findIndex(ev => ev.personId === personId);
    if (eventIndex === -1) return;

    const mmEvent = eventQueue[eventIndex];

    // Add to editor
    addOrUpdateCard(mmEvent);

    // Remove from queue/sidebar once loaded or keep? 
    // Usually "process one by one" means it moves from queue to editor.
    eventQueue.splice(eventIndex, 1);
    updateQueueUI();

    // Highlight active in sidebar is not possible if we remove it, 
    // but if we keep it, we could. User says "complete one by one"
    // so removing it from sidebar once loaded into editor seems correct for a "queue".
}

// ── Card Rendering ──
function addOrUpdateCard(mmEvent) {
    const data = mmEvent.mmEvent || mmEvent;
    const id = data.personId || data.person_id || 'unknown-' + Date.now();

    // Store original + current values
    if (!eventCards[id]) {
        eventCards[id] = {
            original: deepClone(mmEvent),
            current: deepClone(mmEvent),
        };
    } else {
        eventCards[id].original = deepClone(mmEvent);
        eventCards[id].current = deepClone(mmEvent);
    }

    renderCard(id);
    hideEmptyState();
}



function renderCard(id) {
    const data = eventCards[id];
    const mmEvent = data.current;

    // Support nested or flat person data
    const person = mmEvent.mmEvent || mmEvent;
    const name = (person.name && person.name.trim()) ? person.name : (person.person_name || 'Unknown');
    const imageUrl = person.image_url || 'https://via.placeholder.com/400x500/1e293b/94a3b8?text=No+Img';

    // Remove existing card if present
    const existingCard = document.getElementById(`card-${id}`);
    if (existingCard) existingCard.remove();

    // Create group container element
    const group = document.createElement('div');
    group.className = 'profile-group';
    group.id = `card-${id}`;

    // Count modifications
    const modifiedFields = getModifiedFields(id);

    group.innerHTML = `
        <!-- Card 1: Identity & Image -->
        <div class="glass-card identity-card">
            <div class="identity-image-wrapper">
                <img class="identity-image"
                     src="${imageUrl}"
                     alt="${name}"
                     onerror="this.src='https://via.placeholder.com/400x500/1e293b/94a3b8?text=No+Img'">
                <div class="identity-overlay">
                    <div class="identity-name">${escapeHtml(name)}</div>
                    <div class="identity-id">${escapeHtml(id)}</div>
                </div>
            </div>
            <button class="remove-group-btn" onclick="removeCard('${id}')" title="Remove profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <!-- Card 2: Attributes Editor -->
        <div class="glass-card attributes-card">
            <div class="modified-badge ${modifiedFields.length > 0 ? '' : 'hidden'}" id="badge-${id}">
                ${modifiedFields.length} modified
            </div>
            <div class="card-body-mini">
                <div class="attributes-grid" id="attrs-${id}">
                    ${renderAttributes(id)}
                </div>
            </div>

            <div class="card-footer-mini">
                <div class="footer-actions">
                    <button class="btn btn-outline-sm" onclick="resetCard('${id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                            <path d="M3 3v5h5"/>
                        </svg>
                        Reset
                    </button>
                    <button class="btn btn-primary-sm" onclick="sendUpdate('${id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                        Update
                    </button>
                </div>
            </div>
        </div>
    `;

    cardsGrid.prepend(group);
}

function renderAttributes(id) {
    const data = eventCards[id];
    const current = data.current;
    const original = data.original;

    return ATTRIBUTE_KEYS.map(key => {
        const label = ATTRIBUTE_LABELS[key];
        const currentVal = getNested(current, key) || '';
        const originalVal = getNested(original, key) || '';
        const isModified = currentVal !== originalVal;
        let options = [...ATTRIBUTE_OPTIONS[key]];

        // If the current value exists but isn't in the predefined options, add it
        // so the dropdown can display it (handles AI model values like "None", "20-25", "Brown", etc.)
        if (currentVal && !options.some(opt => opt.toLowerCase() === currentVal.toLowerCase())) {
            options.push(currentVal);
        }

        const optionsHtml = options.map(opt => {
            const selected = opt.toLowerCase() === (currentVal || '').toLowerCase() ? 'selected' : '';
            return `<option value="${opt}" ${selected}>${capitalize(opt)}</option>`;
        }).join('');

        return `
            <div class="attribute-field ${isModified ? 'modified' : ''}" id="field-${id}-${key}">
                <label class="attribute-label">${label}</label>
                <select class="attribute-select"
                        data-card-id="${id}"
                        data-attr-key="${key}"
                        onchange="onAttributeChange(this)">
                    <option value="">— Select —</option>
                    ${optionsHtml}
                </select>
            </div>
        `;
    }).join('');
}

// ── Event Handlers ──
function onAttributeChange(selectEl) {
    const cardId = selectEl.dataset.cardId;
    const attrKey = selectEl.dataset.attrKey;
    const newValue = selectEl.value;

    // Update current state
    setNested(eventCards[cardId].current, attrKey, newValue);

    // Toggle modified class
    const field = document.getElementById(`field-${cardId}-${attrKey}`);
    const isModified = newValue !== (getNested(eventCards[cardId].original, attrKey) || '');
    field.classList.toggle('modified', isModified);

    // Update footer count
    updateFooterCount(cardId);
}

function updateFooterCount(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;

    const modifiedFields = getModifiedFields(cardId);
    const badge = card.querySelector('.modified-badge');
    if (badge) {
        if (modifiedFields.length > 0) {
            badge.classList.remove('hidden');
            badge.textContent = `${modifiedFields.length} modified`;
        } else {
            badge.classList.add('hidden');
        }
    }
}

function getModifiedFields(cardId) {
    const data = eventCards[cardId];
    if (!data) return [];
    return ATTRIBUTE_KEYS.filter(key =>
        (getNested(data.current, key) || '') !== (getNested(data.original, key) || '')
    );
}

function resetCard(cardId) {
    const data = eventCards[cardId];
    if (!data) return;

    // Reset current to original
    data.current = deepClone(data.original);
    renderCard(cardId);
    showToast('Card reset to original values', 'info');
}

function removeCard(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    if (card) {
        card.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => {
            card.remove();
            delete eventCards[cardId];
            if (Object.keys(eventCards).length === 0) {
                showEmptyState();
            }
        }, 300);
    }
}

// ── Send Update API ──
// Flatten UI state into flat snake_case keys for the backend
function flattenForBackend(mmEvent) {
    const person = mmEvent.mmEvent || mmEvent;
    const flat = {};

    // Identity fields
    flat.personId = person.personId || person.person_id;
    flat.image_url = person.image_url;
    flat.name = (person.name && person.name.trim()) ? person.name : (person.person_name || '');

    // Map each attribute key to its flat snake_case value
    ATTRIBUTE_KEYS.forEach(key => {
        const val = getNested(person, key);
        if (val !== undefined && val !== null && val !== '') {
            // Extract the leaf key: 'hair.hair_color' → 'hair_color', 'gender' → 'gender'
            const leafKey = key.includes('.') ? key.split('.').pop() : key;
            flat[leafKey] = val;
        }
    });

    return flat;
}

async function sendUpdate(cardId) {
    const data = eventCards[cardId];
    if (!data) return;

    const payload = flattenForBackend(data.current);
    // Attach moderator email from the authenticated session
    const moderatorEmail = sessionStorage.getItem('mm_user_email');
    if (moderatorEmail) {
        payload.moderator = moderatorEmail;
    }
    const btn = document.querySelector(`#card-${cardId} .btn-primary-sm`);

    // Show loading
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<div class="spinner"></div> Sending…';
    btn.disabled = true;

    try {
        const res = await fetch(CONFIG.UPDATE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            showToast('Update sent successfully!', 'success');
            // Remove the card from UI after successful update
            removeCard(cardId);
        } else {
            const errText = await res.text();
            throw new Error(errText || `HTTP ${res.status}`);
        }
    } catch (err) {
        console.error('Update failed:', err);
        showToast(`Update failed: ${err.message}`, 'error');
    } finally {
        // Only restore button if card still exists (removeCard may have removed it)
        const card = document.getElementById(`card-${cardId}`);
        if (card && btn) {
            btn.innerHTML = originalHtml;
            btn.disabled = false;
        }
    }
}

// ── Toast Notifications ──
function showToast(message, type = 'info') {
    const icons = {
        success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
        error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
        info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${icons[type] || icons.info}<span>${escapeHtml(message)}</span>`;

    toastContainer.appendChild(toast);

    // Auto-remove after 4s
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ── Sample Data ──
function loadSampleData() {
    const nestedSample = {
        "personId": "936aa95e-9fef-481c-9fd7-9701cddf5f1c",
        "name": "Arjun Kumar",
        "image_url": "https://raw.githubusercontent.com/akshayagv/Match_making_atrributes_ui/main/asian_male_40_45_profile_1773064619577.png", // Fallback to a placeholder if this doesn't exist yet in user's repo, but I'll use the generated one's path in the UI
        "gender": "Male",
        "age_group": "Adult",
        "age_range": "40-45",
        "ethnicity": "Asian",
        "emotion": "Neutral",
        "skin_color": "Brown",
        "hair": {
            "hair_height": "Below neck but above shoulders",
            "hair_color": "Black",
            "hair_style": "Straight",
            "hair_length": "Short",
            "hair_part": "None",
            "hair_volume": "Medium",
            "head_hair": "Present",
            "balding": "None"
        },
        "eye": {
            "eye_color": "Brown",
            "eye_size": "Normal",
            "eye_direction": "Forward",
            "pupil_visibility": "Fully visible"
        },
        "face_geometry": {
            "forehead_height": "High",
            "jawline": "Sharp",
            "prominent_cheekbones": "No"
        },
        "facial_features": {
            "face_structure": "Symmetric",
            "face_shape": "Oval",
            "face_size": "Medium",
            "nose_size": "Medium",
            "nose_shape": "Straight",
            "eyebrow_thickness": "Thick",
            "mouth_state": "Closed",
            "teeth_visible": "No",
            "lip_stick": "None",
            "beard": "None",
            "mustache": "None"
        },
        "accessories": {
            "eyewear": "PrescriptionGlasses",
            "headwear": "None",
            "earrings": "None",
            "visible_piercings": "None",
            "tattoo": "None"
        },
        "body": {
            "body_shape": "Slim",
            "height_estimate": "Average",
            "pose": "Sitting",
            "body_orientation": "Front",
            "arm_position": "Down"
        },
        "clothing": {
            "attire_style": "Casual",
            "upper_garment": "Shirt",
            "lower_garment": "Trousers",
            "full_dress": "None",
            "clothing_color": "Black",
            "clothing_pattern": "Solid",
            "sleeve_length": "Long"
        },
        "environment": {
            "location_type": "Indoor",
            "background_type": "Plain"
        }
    };

    // Use the absolute path for the generated image for local preview
    nestedSample.image_url = "https://raw.githubusercontent.com/akshayagv/Match_making_atrributes_ui/main/asian_male_40_45_profile_1773064619577.png";

    // Add the new flat profile
    const flatSample = {
        "personId": "bc7b2b96-17ec-441a-a5a4-6c24a4b48580",
        "image_url": "https://i.pinimg.com/736x/e1/18/86/e118861161ba0f6ba8d5bddd83a630eb.jpg",
        "name": "Priya Singh",
        "ethnicity": "Asian",
        "emotion": "Neutral",
        "ageGroup": "Adult",
        "attributeGender": "Female",
        "skinColor": "Brown",
        "headHair": "Present",
        "hairColor": "Black",
        "hairStyle": "Straight",
        "hairLength": "Long",
        "hairHeight": "Below shoulders but above chest",
        "hairPart": "Center",
        "hairVolume": "Medium",
        "balding": "None",
        "eyeColor": "Brown",
        "eyeSize": "Normal",
        "eyeDirection": "Forward",
        "pupilVisibility": "Fully visible",
        "foreHeadHeight": "Low",
        "jawline": "Sharp",
        "prominentCheekbones": "No",
        "faceShape": "Oval",
        "faceSize": "Medium",
        "faceStructure": "Symmetric",
        "noseSize": "Medium",
        "noseShape": "Straight",
        "eyebrowThickness": "Thin",
        "mouthState": "Closed",
        "teethVisible": "No",
        "beard": "None",
        "mustache": "None",
        "lipStick": "None",
        "eyewear": "None",
        "headwear": "None",
        "earrings": "Yes",
        "visiblePiercings": "No",
        "tattoo": "None",
        "bodyShape": "Slim",
        "heightEstimate": "Average",
        "pose": "Standing",
        "bodyOrientation": "Front",
        "armPosition": "Folded",
        "attireStyle": "Traditional",
        "upperGarment": "Blouse",
        "lowerGarment": "Skirt",
        "fullDress": "Saree",
        "clothingColor": "White",
        "clothingPattern": "Printed",
        "sleeveLength": "Short",
        "locationType": "Outdoor",
        "backgroundType": "Urban"
    };

    enqueueEvent(nestedSample);
    enqueueEvent(flatSample);
    showToast('Sample events added to sidebar', 'info');
}

// ── Helpers ──
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function capitalize(str) {
    return str.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function hideEmptyState() {
    emptyState.style.display = 'none';
}

function showEmptyState() {
    emptyState.style.display = 'flex';
}

// ── Auth State ──
let generatedOtp = null;
let pendingEmail = null;

// ── Auth DOM refs ──
const emailScreen = document.getElementById('emailScreen');
const otpScreen = document.getElementById('otpScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const emailInput = document.getElementById('emailInput');
const emailVerifyBtn = document.getElementById('emailVerifyBtn');
const emailError = document.getElementById('emailError');
const emailSpinner = document.getElementById('emailSpinner');
const otpInputs = document.querySelectorAll('.otp-digit');
const otpVerifyBtn = document.getElementById('otpVerifyBtn');
const otpError = document.getElementById('otpError');
const otpEmailDisplay = document.getElementById('otpEmailDisplay');
const otpResendBtn = document.getElementById('otpResendBtn');
const profileAvatar = document.getElementById('profileAvatar');
const profileAvatarLetter = document.getElementById('profileAvatarLetter');
const profileDropdown = document.getElementById('profileDropdown');
const profileDropdownLetter = document.getElementById('profileDropdownLetter');
const profileDropdownEmail = document.getElementById('profileDropdownEmail');
const logoutBtn = document.getElementById('logoutBtn');

// ── Screen Management ──
function showScreen(screenId) {
    emailScreen.classList.add('hidden');
    otpScreen.classList.add('hidden');
    dashboardScreen.classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

// ── Email Verification ──
async function handleEmailVerify() {
    const email = emailInput.value.trim().toLowerCase();
    if (!email || !email.includes('@')) {
        showAuthError(emailError, 'Please enter a valid email address');
        return;
    }

    // Show loading
    emailVerifyBtn.disabled = true;
    emailSpinner.classList.remove('hidden');
    emailError.classList.add('hidden');

    try {
        const res = await fetch(CONFIG.EMAIL_VERIFY_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.status === 'success' && data.verified) {
            pendingEmail = email;
            showOtpScreen(email);
        } else {
            showAuthError(emailError, 'This email is not authorized. Please contact admin.');
        }
    } catch (err) {
        console.error('Email verify failed:', err);
        const errorMsg = err.message || 'Unknown error';
        showAuthError(emailError, `Connection failed: ${errorMsg}. Check console for details.`);
    } finally {
        emailVerifyBtn.disabled = false;
        emailSpinner.classList.add('hidden');
    }
}

function showOtpScreen(email) {
    // Show OTP screen
    if (otpEmailDisplay) {
        otpEmailDisplay.textContent = email;
    }
    showScreen('otpScreen');

    // Clear OTP inputs
    otpInputs.forEach(inp => {
        inp.value = '';
        inp.classList.remove('filled');
    });
    otpInputs[0].focus();
}

// ── OTP Verification (any 4-digit number is accepted) ──
function handleOtpVerify() {
    const enteredOtp = Array.from(otpInputs).map(inp => inp.value).join('');

    if (enteredOtp.length === 4) {
        // Any 4 digits → success
        sessionStorage.setItem('mm_user_email', pendingEmail);
        enterDashboard(pendingEmail);
    }
}

function enterDashboard(email) {
    showScreen('dashboardScreen');

    // Update profile icon
    const letter = email.charAt(0).toUpperCase();
    profileAvatarLetter.textContent = letter;
    profileDropdownLetter.textContent = letter;
    profileDropdownEmail.textContent = email;

    // Connect WebSocket only after auth
    connectWebSocket();
}

// ── OTP Input Auto-focus Behavior ──
function setupOtpInputs() {
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value.replace(/\D/g, ''); // Only digits
            e.target.value = val.charAt(0) || '';

            if (val && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }

            // Toggle filled class
            e.target.classList.toggle('filled', !!val);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                otpInputs[index - 1].focus();
                otpInputs[index - 1].value = '';
                otpInputs[index - 1].classList.remove('filled');
            }
            if (e.key === 'Enter') {
                handleOtpVerify();
            }
        });

        // Handle paste
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 4);
            pasted.split('').forEach((char, i) => {
                if (otpInputs[i]) {
                    otpInputs[i].value = char;
                    otpInputs[i].classList.add('filled');
                }
            });
            if (pasted.length > 0) {
                const focusIdx = Math.min(pasted.length, otpInputs.length - 1);
                otpInputs[focusIdx].focus();
            }
        });
    });
}

// ── Profile Dropdown ──
function setupProfileDropdown() {
    profileAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('hidden');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!profileDropdown.classList.contains('hidden') &&
            !profileDropdown.contains(e.target) &&
            e.target !== profileAvatar) {
            profileDropdown.classList.add('hidden');
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('mm_user_email');
        generatedOtp = null;
        pendingEmail = null;

        // Disconnect WebSocket
        if (ws) {
            ws.close();
            ws = null;
        }
        clearTimeout(wsReconnectTimer);

        // Reset and show email screen
        emailInput.value = '';
        emailError.classList.add('hidden');
        profileDropdown.classList.add('hidden');
        showScreen('emailScreen');
        showToast('Logged out successfully', 'info');
    });
}

// ── Auth Error Helper ──
function showAuthError(el, msg) {
    el.textContent = msg;
    el.classList.remove('hidden');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    loadSampleBtn.addEventListener('click', loadSampleData);

    // Setup auth event listeners
    emailVerifyBtn.addEventListener('click', handleEmailVerify);
    emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleEmailVerify();
    });
    otpVerifyBtn.addEventListener('click', handleOtpVerify);
    otpResendBtn.addEventListener('click', () => {
        if (pendingEmail) {
            showOtpScreen(pendingEmail);
            showToast('New OTP generated!', 'success');
        }
    });
    setupOtpInputs();
    setupProfileDropdown();

    // Auth gate: check if already logged in
    const savedEmail = sessionStorage.getItem('mm_user_email');
    if (savedEmail) {
        enterDashboard(savedEmail);
    } else {
        showScreen('emailScreen');
    }
});
