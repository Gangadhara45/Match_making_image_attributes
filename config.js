
// const API_BASE_URL = 'http://127.0.0.1:8002'; // e.g. 'http://localhost:8000' or 'https://api.yourdomain.com'
const API_BASE_URL = 'https://enterprise-mediafirewall-ai.millionvisions.ai';

const WS_BASE_URL = API_BASE_URL.replace(/^http/, 'ws');

window.CONFIG = {
  WS_ENDPOINT: `${WS_BASE_URL}/api/v1/basic/ws/image-attributes`,
  UPDATE_ENDPOINT: `${API_BASE_URL}/api/v1/basic/profile/update-attributes`,
  EMAIL_VERIFY_ENDPOINT: `${API_BASE_URL}/api/v1/basic/email/verify`,
};