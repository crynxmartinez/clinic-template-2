# 👁️ Basilan Eye Center

**Clinic ID:** `clinic2`  
**Location:** Isabela City, Basilan, Philippines  
**Type:** Eye Clinic / Optometry  
**Platform:** MyMedPH

## 📋 **CLINIC INFO**

| Field | Value |
|-------|-------|
| Clinic Name | Basilan Eye Center |
| Phone | +63 917 345 6789 |
| Email | info@basilaneye.com |
| Address | 456 Vision Avenue, Isabela City, Basilan, Philippines |

## 🔧 **CONFIGURATION**

Edit `config.js` to update clinic details:
```javascript
const CLINIC_ID = 'clinic2';
const CLINIC_NAME = 'Basilan Eye Center';
```

### **3. Customize Branding** (Optional)
- Update logo in `config.js`
- Modify colors
- Edit contact information

### **4. Deploy**
Upload to your hosting or domain:
- www.my-clinic.com
- or my-clinic.mighteeth.com (subdomain)

---

## 📁 **FILES**

| File | Purpose | User Access |
|------|---------|-------------|
| `config.js` | Clinic configuration | N/A |
| `index.html` | Clinic homepage | Public |
| `booking.html` | Patient booking | Public |
| `login.html` | Staff login | Staff only |
| `admin.html` | Clinic management | Admin only |
| `doctor.html` | Doctor portal | Doctor only |
| `staff.html` | Staff portal | Staff only |

---

## 🔐 **SECURITY**

### **Data Isolation**
- ALL Firebase queries filtered by `CLINIC_ID`
- Users must have matching `clinicId` to access
- No cross-clinic data visibility

### **Authentication**
- Firebase Authentication required for staff portals
- Role-based access control
- Clinic access verification on login

---

## 🎯 **USER ROLES**

### **Admin**
- Manage doctors and staff
- View all appointments
- Manage services
- View analytics
- Access: `admin.html`

### **Doctor**
- View personal appointments
- Manage personal services
- Set working hours
- View personal analytics
- Access: `doctor.html`

### **Staff**
- Assist assigned doctor
- Manage doctor's appointments
- View doctor's schedule
- Access: `staff.html`

---

## 📊 **FEATURES**

### **Booking System**
- Patient self-booking
- Doctor selection (filtered by clinic)
- Date/time selection
- Service selection
- Email confirmation

### **Kanban Board**
- Drag & drop appointments
- 6 stages: Booked → Approve → Appointment → Completed → Cancelled → Missed
- GHL integration (updates tags)

### **Services Management**
- Clinic-wide services (admin)
- Doctor personal services
- Pricing and duration

### **Analytics**
- Appointment statistics
- Performance metrics
- Patient tracking

---

## 🔧 **CONFIGURATION**

### **Firebase**
Already configured in each file. No changes needed unless using different Firebase project.

### **GHL Integration**
Update GHL credentials in files if needed:
- `GHL_API_KEY`
- `GHL_LOCATION_ID`

---

## 🚀 **DEPLOYMENT CHECKLIST**

- [ ] Copy template to new folder
- [ ] Update `CLINIC_ID` in config.js
- [ ] Update `CLINIC_NAME` in config.js
- [ ] Customize branding (optional)
- [ ] Create clinic in Super Admin portal
- [ ] Create clinic admin user
- [ ] Deploy to domain/hosting
- [ ] Test booking flow
- [ ] Test staff login
- [ ] Verify data isolation

---

## 📝 **NOTES**

- Each clinic is completely independent
- Shared Firebase database with filtered access
- Super Admin can see all clinics
- Clinics cannot see each other's data

---

## 🆘 **SUPPORT**

Contact system administrator for:
- Adding new users
- Changing clinic configuration
- Technical issues

---

**Version:** 1.0  
**Last Updated:** Nov 25, 2024
