# Smart Krushi — Smart Farming Dashboard

A responsive, front-end smart farming dashboard built with plain HTML, CSS and JavaScript.

## Features
- English, Telugu and Hindi interface (language selector at top right)
- Current weather lookup using Open-Meteo geocoding and forecast APIs (no API key)
- Rule-based crop ideas from soil type, water availability and season
- Educational soil pH and NPK reading summary
- Farm revenue and net-result estimator
- Month-by-month general farming calendar
- Common pest/symptom learning guide
- Links to official PM-KISAN, PMFBY and Soil Health Card portals
- Local demo farmer registration/login
- Responsive desktop and mobile layout

## Run the website
1. Extract `smart-krushi.zip`.
2. Open the `smart-krushi` folder.
3. Double-click `index.html` to open it in Chrome or Edge.
4. For the best development workflow, open the folder in Visual Studio Code and use the **Live Server** extension:
   - Open `index.html`.
   - Right-click and choose **Open with Live Server**.
5. Internet access is needed for live weather data and the optional Google Fonts. The rest of the dashboard works locally.

## Files
- `index.html` — page structure
- `style.css` — dashboard styling and responsive layout
- `script.js` — interactions, translations and calculations

## Important limitations and safety notes
- This is a front-end learning/demo project. It does not have a real backend or secure authentication.
- Demo registration stores the entered mobile number and password in browser `localStorage` as plain text. Use only fake test details. Do not enter a real password or sensitive information.
- To launch publicly, replace demo login with a secure backend (for example, Django/Node + database), password hashing, HTTPS, server-side validation, rate limiting and privacy controls.
- Crop suggestions, soil nutrient bands, pest notes and calendar tasks are broad educational examples, not agronomic prescriptions or automated diagnoses. Local soil, climate, crop variety and season matter. Confirm decisions with a Krishi Vigyan Kendra (KVK), agriculture department or qualified agronomist.
- Weather is fetched from Open-Meteo. Forecasts can change and should not be treated as a guarantee.
- Scheme links point to official portals, but eligibility and application details may change.

## Suggested next upgrades
- Add a secure Django backend and farmer profile database.
- Add verified Andhra Pradesh crop calendars and KVK contacts.
- Add official market-price feeds and localized weather alerts.
- Add image-based pest detection only after integrating a validated model and expert-reviewed dataset.
