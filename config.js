/* ================================================================
   Matchmaking Attributes UI — Central Configuration
   ================================================================
   Edit API_BASE_URL to point to your backend.
   Leave it as '' to use the Vite dev proxy (recommended for dev).
   In production, set it to the full backend URL, e.g.:
     'https://api.yourdomain.com'
   ================================================================ */

const API_BASE_URL = 'http://127.0.0.1:8002'; // e.g. 'http://localhost:8000' or 'https://api.yourdomain.com'

// Derive WebSocket base URL from HTTP base URL (http→ws, https→wss)
const WS_BASE_URL = API_BASE_URL.replace(/^http/, 'ws');

const CONFIG = {
  WS_ENDPOINT: `${WS_BASE_URL}/api/v1/basic/ws/image-attributes`,
  UPDATE_ENDPOINT: `${API_BASE_URL}/api/v1/basic/profile/update-attributes`,
};