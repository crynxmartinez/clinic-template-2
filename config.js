// ============================================
// CLINIC CONFIGURATION
// ============================================
// 
// IMPORTANT: Change these values for each clinic deployment

const CLINIC_ID = 'clinic2';              // MUST match the clinicId in Firebase
const CLINIC_NAME = 'Basilan Eye Center';   // Display name for the clinic

// CLINIC BRANDING (Optional)
const CLINIC_LOGO = 'assets/logo.png';
const CLINIC_PRIMARY_COLOR = '#7c3aed'; // Purple
const CLINIC_SECONDARY_COLOR = '#ec4899'; // Pink

// CLINIC CONTACT (Optional - for homepage)
const CLINIC_CONTACT = {
    phone: '+63 917 345 6789',
    email: 'info@basilaneye.com',
    address: '456 Vision Avenue, Isabela City, Basilan, Philippines'
};

// ========================================
// DO NOT MODIFY BELOW THIS LINE
// ========================================

// Validation check
if (CLINIC_ID === 'CHANGE_ME') {
    console.error('⚠️ WARNING: CLINIC_ID not configured! Please update config.js');
    console.error('Current CLINIC_ID:', CLINIC_ID);
}

// Export for use in other files
window.CLINIC_CONFIG = {
    id: CLINIC_ID,
    name: CLINIC_NAME,
    logo: CLINIC_LOGO,
    primaryColor: CLINIC_PRIMARY_COLOR,
    secondaryColor: CLINIC_SECONDARY_COLOR,
    ...CLINIC_CONTACT
};

console.log('✅ Clinic Config Loaded:', CLINIC_NAME, '(' + CLINIC_ID + ')');
