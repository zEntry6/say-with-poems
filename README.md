# Sanctuary - A Digital Poetry Space

> *"Every poem is a letter sent without an address, hoping to find the right heart."*

Sanctuary is a simple yet meaningful digital space where people can share their words in the form of poetry. This website is not just about displaying text, but serves as a quiet medium to convey messages from heart to heart.

## ✨ Philosophy

This website was built on the belief that poetry is a bridge between hearts. There is no complicated login system, no profiles to be made – only a direct connection between the sender, the receiver, and the poem between them.

## 🎨 Key Features

- **Send Poems Without Registration**: Just fill in the sender and receiver's names, then write your poem
- **Minimalist Design**: Harmonious black and white tones
- **Poetry Gallery**: A space where all submitted poems can be read and felt
- **Responsive Design**: Accessible and comfortable across various devices
- **Real-time Updates**: New poems instantly appear in the gallery

## 🛠 Technology

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Firebase Firestore
- **Icons**: Lucide React
- **Fonts**: Crimson Text (for poems), Inter (for UI)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/poetry-sanctuary.git
   cd poetry-sanctuary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a new project at [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database
   - Copy your Firebase configuration into `src/services/firebase.js`
   - Replace the `firebaseConfig` with your own:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

4. **Set Firestore Rules**
   Ensure the Firestore rules allow read/write access for the 'poems' collection:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /poems/{document} {
         allow read, write: if true;
       }
     }
   }
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
poetry-sanctuary/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Website icon
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header component with branding
│   │   ├── PoetryForm.jsx  # Form to submit poems
│   │   ├── PoetryCard.jsx  # Card to display a poem
│   │   └── PoetryGallery.jsx # Gallery of all poems
│   ├── services/
│   │   └── firebase.js     # Firebase config and service
│   ├── styles/
│   │   └── globals.css     # Global styles and custom CSS
│   ├── App.jsx            # Main application component
│   └── main.jsx           # React entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🎯 Important Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Firestore Database
3. Create a collection named `poems`
4. Set rules for public access (adjust as needed for security)

### Environment Variables (Optional)
For better security, you can use environment variables:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## 🌟 Recommended Additional Features

### 1. **Mood-based Categories**
- Add categories like longing, happy, sad, hopeful
- Filter poems based on these moods

### 2. **Anonymous Heart Reactions**
- Heart button to appreciate a poem without commenting
- Simple counter to show appreciation

### 3. **Daily Poetry Highlights**
- Display "Poem of the Day"
- Automatically rotates every 24 hours

### 4. **Gentle Notifications**
- Subtle notification when a new poem is posted
- Non-intrusive toast notifications

### 5. **Export & Share**
- Button to save a poem as an image
- Share on social media with beautiful design

### 6. **Poetry Themes**
- Visual themes based on time of day (morning, afternoon, night)
- Smooth color transitions according to time

### 7. **Reading Mode**
- Special reading mode with darker background
- Font size adjustments for comfort

### 8. **Search & Discovery**
- Simple keyword search
- Minimal, non-intrusive tag system

## 💝 Contributions

This project is open to contributions that align with its philosophy of simplicity and intimacy. Every contribution should preserve the site's essence as a quiet and meaningful space.

## 📜 License

MIT License – Free to use for any positive purpose.

---

*"Made with ♥ for those who believe in the power of words"*
