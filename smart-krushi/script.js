const $ = (id) => document.getElementById(id);
const translations = {
  en: {
    workspace:"WORKSPACE",overview:"Overview",weather:"Weather",crop:"Crop advisor",soil:"Soil health",aiPlannerNav:"AI Season Planner",profit:"Profit calculator",pests:"Pest guide",schemes:"Govt. schemes",
    grow:"Grow with confidence",growText:"Small steps today can build a healthier harvest tomorrow.",farmWorkspace:"YOUR FARM WORKSPACE",goodDay:"Good day, farmer",welcomeText:"Make informed decisions with simple tools for your farm.",seasonReady:"A BETTER WAY TO FARM",heroTitle:"Plan well. Grow more.<br>Harvest with confidence.",heroText:"Bring weather, crop planning and farm calculations together in one place.",exploreTools:"Explore farm tools",weatherStatus:"Weather status",cropPlanning:"Crop planning",planAhead:"Plan ahead",cropPlanningSub:"Find crops for your conditions",soilCheck:"Soil check",testYourSoil:"Test your soil",soilSub:"Understand pH and nutrients",farmEconomics:"Farm economics",knowYourNumbers:"Know your numbers",profitSub:"Estimate cost and returns",quickAccess:"QUICK ACCESS",farmTools:"Your farm tools",toolsNote:"Practical tools, all in one place",weatherForecast:"Weather forecast",weatherCardText:"Check local conditions",cropAdvisor:"Crop advisor",cropCardText:"Explore suitable crops",soilCalculator:"Soil health check",soilCardText:"Review soil readings",profitEstimator:"Profit estimator",profitCardText:"Estimate your farm returns",localConditions:"LOCAL CONDITIONS",weatherDashboard:"Weather dashboard",liveData:"LIVE DATA",getWeather:"Get weather",humidity:"Humidity",wind:"Wind",rain:"Rain",weatherNote:"Forecasts are guidance only. Check local advisories before farm operations.",planningAssistant:"PLANNING ASSISTANT",cropRecommendation:"Crop recommendation",cropIntro:"Choose your conditions to see crops that may be worth exploring.",soilType:"Soil type",waterAvailability:"Water availability",season:"Season",findCrops:"Find crop ideas",cropResultHint:"Your crop ideas will appear here.",cropDisclaimer:"Indicative ideas only. Confirm local suitability, seed variety and sowing window with a KVK or agriculture officer.",soilInsights:"SOIL INSIGHTS",soilHealthCalculator:"Soil health calculator",soilIntro:"Enter values from a soil test report. This gives a simple educational reading.",analyzeSoil:"Analyze soil readings",soilHint:"Your soil summary will appear here.",soilDisclaimer:"Nutrient categories vary by soil, crop and lab method. Follow the recommendations on your official soil test card.",farmEconomicsLabel:"FARM ECONOMICS",profitCalculator:"Profit calculator",profitIntro:"Estimate a crop's income after your listed expenses.",landArea:"Land area (acres)",yieldPerAcre:"Yield per acre (kg)",pricePerKg:"Selling price (₹/kg)",totalCosts:"Total costs (₹)",calculateProfit:"Calculate estimate",estimatedRevenue:"Estimated revenue",estimatedProfit:"Estimated net result",profitDisclaimer:"An estimate, not a price guarantee. Excludes costs you have not entered and market fluctuations.",seasonPlanner:"AI SEASON PLANNER",aiSeasonPlanner:"AI Farming Season Planner",aiPlannerIntro:"AI guide on what to do in farming across the full crop cycle, plus daily advice in Telugu.",selectCrop:"Crop",generatePlan:"Get AI Plan",aiPlannerDisclaimer:"AI guidance provides general seasonal schedules. Adjust sowing, fertilizer and irrigation with your local KVK or agriculture officer.",plantProtection:"PLANT PROTECTION",pestGuide:"Pest & symptom guide",pestIntro:"Choose what you notice on the plant to read possible causes and safer next steps.",observedSymptom:"Observed symptom",viewGuidance:"View guidance",pestHint:"Guidance will appear here.",pestDisclaimer:"Symptoms can have several causes. Confirm with a local agricultural expert before applying any treatment or pesticide.",supportForFarmers:"SUPPORT FOR FARMERS",governmentSchemes:"Government schemes & resources",schemeKisan:"Official information and beneficiary services for eligible farmer families.",schemeInsurance:"Crop insurance information, notifications and farmer services.",schemeSoil:"Learn about soil testing and soil health card services.",schemeDisclaimer:"Eligibility, benefits and application windows can change. Verify details on the official portal or with your agriculture department.",footerText:"Built to make farm information easier to explore.",backTop:"Back to top ↑",farmerAccount:"FARMER ACCOUNT",welcomeBack:"Welcome back",authIntro:"Create a local demo profile or sign in on this device.",login:"Login",register:"Register",fullName:"Full name",mobileNumber:"Mobile number",password:"Password",logout:"Log out",authWarning:"Demo only: profile details are stored in this browser. Do not use a real password or sensitive personal information. This is not secure production authentication."
  },
  te: {
    workspace:"పని ప్రదేశం",overview:"సారాంశం",weather:"వాతావరణం",crop:"పంట సలహా",soil:"నేల ఆరోగ్యం",aiPlannerNav:"AI సీజన్ ప్లానర్",profit:"లాభాల లెక్క",pests:"చీడపీడల గైడ్",schemes:"ప్రభుత్వ పథకాలు",
    grow:"ధైర్యంగా సాగు చేయండి",growText:"ఈరోజు చిన్న అడుగులు రేపటి మంచి పంటకు దారి తీస్తాయి.",farmWorkspace:"మీ వ్యవసాయ వేదిక",goodDay:"నమస్కారం రైతు గారూ",welcomeText:"మీ వ్యవసాయానికి సరళమైన సాధనాలతో సమాచార నిర్ణయాలు తీసుకోండి.",seasonReady:"వ్యవసాయానికి మెరుగైన మార్గం",heroTitle:"మంచి ప్రణాళిక. మెరుగైన దిగుబడి.<br>నమ్మకంగా పంట కోయండి.",heroText:"వాతావరణం, పంట ప్రణాళిక, వ్యవసాయ లెక్కలు ఒకే చోట.",exploreTools:"వ్యవసాయ సాధనాలు చూడండి",weatherStatus:"వాతావరణ స్థితి",cropPlanning:"పంట ప్రణాళిక",planAhead:"ముందుగా ప్రణాళిక",cropPlanningSub:"మీ పరిస్థితులకు తగిన పంటలు చూడండి",soilCheck:"నేల పరీక్ష",testYourSoil:"మీ నేలను పరీక్షించండి",soilSub:"pH మరియు పోషకాలను తెలుసుకోండి",farmEconomics:"వ్యవసాయ ఆర్థికం",knowYourNumbers:"మీ లెక్కలు తెలుసుకోండి",profitSub:"ఖర్చు, ఆదాయం అంచనా",quickAccess:"త్వరిత ప్రాప్తి",farmTools:"మీ వ్యవసాయ సాధనాలు",toolsNote:"అన్ని ఉపయోగకరమైన సాధనాలు ఒకేచోట",weatherForecast:"వాతావరణ సూచన",weatherCardText:"స్థానిక పరిస్థితులు చూడండి",cropAdvisor:"పంట సలహా",cropCardText:"తగిన పంటలను చూడండి",soilCalculator:"నేల ఆరోగ్య పరీక్ష",soilCardText:"నేల వివరాలు పరిశీలించండి",profitEstimator:"లాభాల అంచనా",profitCardText:"వ్యవసాయ ఆదాయం అంచనా",localConditions:"స్థానిక పరిస్థితులు",weatherDashboard:"వాతావరణ డాష్‌బోర్డ్",liveData:"ప్రత్యక్ష సమాచారం",getWeather:"వాతావరణం చూడండి",humidity:"తేమ",wind:"గాలి",rain:"వర్షం",weatherNote:"ఇవి సూచనలు మాత్రమే. వ్యవసాయ పనులకు ముందు స్థానిక సూచనలు పరిశీలించండి.",planningAssistant:"ప్రణాళిక సహాయకుడు",cropRecommendation:"పంట సిఫార్సు",cropIntro:"పంట ఆలోచనల కోసం మీ పరిస్థితులను ఎంచుకోండి.",soilType:"నేల రకం",waterAvailability:"నీటి లభ్యత",season:"సీజన్",findCrops:"పంటలు సూచించండి",cropResultHint:"మీ పంట సూచనలు ఇక్కడ కనిపిస్తాయి.",cropDisclaimer:"ఇవి ప్రాథమిక సూచనలు మాత్రమే. స్థానిక KVK లేదా వ్యవసాయ అధికారిని సంప్రదించండి.",soilInsights:"నేల వివరాలు",soilHealthCalculator:"నేల ఆరోగ్య కాలిక్యులేటర్",soilIntro:"నేల పరీక్ష నివేదికలోని విలువలను నమోదు చేయండి.",analyzeSoil:"నేల వివరాలు విశ్లేషించండి",soilHint:"నేల సారాంశం ఇక్కడ కనిపిస్తుంది.",soilDisclaimer:"పోషకాల స్థాయిలు పంట, నేల, పరీక్షా విధానంపై ఆధారపడి ఉంటాయి. అధికారిక నివేదికను అనుసరించండి.",farmEconomicsLabel:"వ్యవసాయ ఆర్థికం",profitCalculator:"లాభాల కాలిక్యులేటర్",profitIntro:"ఖర్చుల తర్వాత పంట ఆదాయాన్ని అంచనా వేయండి.",landArea:"భూమి విస్తీర్ణం (ఎకరాలు)",yieldPerAcre:"ఎకరాకు దిగుబడి (కిలోలు)",pricePerKg:"అమ్మకపు ధర (₹/కిలో)",totalCosts:"మొత్తం ఖర్చులు (₹)",calculateProfit:"లెక్కించండి",estimatedRevenue:"అంచనా ఆదాయం",estimatedProfit:"అంచనా నికర ఫలితం",profitDisclaimer:"ఇది అంచనా మాత్రమే. నమోదు చేయని ఖర్చులు, మార్కెట్ మార్పులు ఇందులో లేవు.",seasonPlanner:"AI సీజన్ ప్లానర్",aiSeasonPlanner:"AI వ్యవసాయ సీజన్ ప్లానర్",aiPlannerIntro:"పంట సాగులో ఏ సమయంలో ఏమి చేయాలో AI మార్గదర్శకం మరియు తెలుగులో రోజువారీ సలహా.",selectCrop:"పంట",generatePlan:"AI ప్లాన్ చూడండి",aiPlannerDisclaimer:"AI సూచనలు సాధారణ సీజన్ ప్రణాళికలు మాత్రమే. స్థానిక KVK లేదా వ్యవసాయ అధికారి సలహాతో మార్పులు చేసుకోండి.",plantProtection:"మొక్కల రక్షణ",pestGuide:"చీడపీడలు మరియు లక్షణాలు",pestIntro:"మొక్కపై కనిపించే లక్షణాన్ని ఎంచుకుని సూచనలు చూడండి.",observedSymptom:"కనిపించిన లక్షణం",viewGuidance:"సూచనలు చూడండి",pestHint:"సూచనలు ఇక్కడ కనిపిస్తాయి.",pestDisclaimer:"ఒకే లక్షణానికి అనేక కారణాలు ఉండవచ్చు. మందులు వాడే ముందు వ్యవసాయ నిపుణుడిని సంప్రదించండి.",supportForFarmers:"రైతులకు మద్దతు",governmentSchemes:"ప్రభుత్వ పథకాలు మరియు వనరులు",schemeKisan:"అర్హులైన రైతు కుటుంబాల కోసం అధికారిక సమాచారం, సేవలు.",schemeInsurance:"పంట బీమా సమాచారం మరియు రైతు సేవలు.",schemeSoil:"నేల పరీక్ష మరియు సాయిల్ హెల్త్ కార్డు సేవలు.",schemeDisclaimer:"అర్హతలు, ప్రయోజనాలు మారవచ్చు. అధికారిక పోర్టల్‌లో నిర్ధారించండి.",footerText:"వ్యవసాయ సమాచారాన్ని సులభంగా అందించడానికి రూపొందించబడింది.",backTop:"పైకి వెళ్లండి ↑",farmerAccount:"రైతు ఖాతా",welcomeBack:"మళ్లీ స్వాగతం",authIntro:"ఈ పరికరంలో డెమో ప్రొఫైల్ సృష్టించండి లేదా లాగిన్ అవ్వండి.",login:"లాగిన్",register:"నమోదు",fullName:"పూర్తి పేరు",mobileNumber:"మొబైల్ నంబర్",password:"పాస్‌వర్డ్",logout:"లాగ్ అవుట్",authWarning:"డెమో మాత్రమే: వివరాలు ఈ బ్రౌజర్‌లో నిల్వ ఉంటాయి. నిజమైన పాస్‌వర్డ్ లేదా సున్నితమైన వివరాలు ఉపయోగించవద్దు."
  },
  hi: {
    workspace:"कार्य क्षेत्र",overview:"अवलोकन",weather:"मौसम",crop:"फसल सलाहकार",soil:"मिट्टी का स्वास्थ्य",aiPlannerNav:"AI सीज़न प्लानर",profit:"लाभ कैलकुलेटर",pests:"कीट मार्गदर्शिका",schemes:"सरकारी योजनाएँ",
    grow:"आत्मविश्वास से खेती करें",growText:"आज के छोटे कदम कल बेहतर फसल दे सकते हैं।",farmWorkspace:"आपका कृषि कार्यक्षेत्र",goodDay:"नमस्ते किसान",welcomeText:"खेती के लिए सरल साधनों से सोच-समझकर निर्णय लें।",seasonReady:"खेती का बेहतर तरीका",heroTitle:"अच्छी योजना। बेहतर उपज।<br>आत्मविश्वास से फसल लें।",heroText:"मौसम, फसल योजना और खेती की गणना एक ही जगह।",exploreTools:"कृषि साधन देखें",weatherStatus:"मौसम की स्थिति",cropPlanning:"फसल योजना",planAhead:"पहले से योजना बनाएँ",cropPlanningSub:"अपनी स्थिति के अनुसार फसलें देखें",soilCheck:"मिट्टी जाँच",testYourSoil:"मिट्टी की जाँच करें",soilSub:"pH और पोषक तत्व समझें",farmEconomics:"खेती का अर्थशास्त्र",knowYourNumbers:"अपना हिसाब जानें",profitSub:"लागत और आय का अनुमान",quickAccess:"त्वरित पहुँच",farmTools:"आपके कृषि साधन",toolsNote:"उपयोगी साधन, एक ही जगह",weatherForecast:"मौसम पूर्वानुमान",weatherCardText:"स्थानीय मौसम देखें",cropAdvisor:"फसल सलाहकार",cropCardText:"उपयुक्त फसलें देखें",soilCalculator:"मिट्टी स्वास्थ्य जाँच",soilCardText:"मिट्टी के आँकड़े देखें",profitEstimator:"लाभ अनुमान",profitCardText:"खेती की आय का अनुमान",localConditions:"स्थानीय स्थिति",weatherDashboard:"मौसम डैशबोर्ड",liveData:"लाइव डेटा",getWeather:"मौसम देखें",humidity:"नमी",wind:"हवा",rain:"बारिश",weatherNote:"पूर्वानुमान केवल मार्गदर्शन है। खेती के काम से पहले स्थानीय सलाह देखें।",planningAssistant:"योजना सहायक",cropRecommendation:"फसल सुझाव",cropIntro:"फसल के विकल्प देखने के लिए अपनी स्थिति चुनें।",soilType:"मिट्टी का प्रकार",waterAvailability:"पानी की उपलब्धता",season:"मौसम",findCrops:"फसल सुझाव पाएँ",cropResultHint:"फसल सुझाव यहाँ दिखाई देंगे।",cropDisclaimer:"ये केवल प्रारंभिक सुझाव हैं। स्थानीय कृषि विज्ञान केंद्र या कृषि अधिकारी से पुष्टि करें।",soilInsights:"मिट्टी की जानकारी",soilHealthCalculator:"मिट्टी स्वास्थ्य कैलकुलेटर",soilIntro:"मिट्टी जाँच रिपोर्ट के मान दर्ज करें।",analyzeSoil:"मिट्टी के आँकड़े जाँचें",soilHint:"मिट्टी का सारांश यहाँ दिखाई देगा।",soilDisclaimer:"पोषक स्तर मिट्टी, फसल और जाँच विधि के अनुसार बदलते हैं। आधिकारिक रिपोर्ट मानें।",farmEconomicsLabel:"खेती का अर्थशास्त्र",profitCalculator:"लाभ कैलकुलेटर",profitIntro:"खर्च घटाकर फसल की आय का अनुमान लगाएँ।",landArea:"भूमि क्षेत्र (एकड़)",yieldPerAcre:"प्रति एकड़ उपज (किग्रा)",pricePerKg:"बिक्री मूल्य (₹/किग्रा)",totalCosts:"कुल लागत (₹)",calculateProfit:"अनुमान निकालें",estimatedRevenue:"अनुमानित आय",estimatedProfit:"अनुमानित शुद्ध परिणाम",profitDisclaimer:"यह अनुमान है, कीमत की गारंटी नहीं। दर्ज न किए गए खर्च और बाजार बदलाव शामिल नहीं हैं।",seasonPlanner:"AI सीज़न प्लानर",aiSeasonPlanner:"AI कृषि सीज़न प्लानर",aiPlannerIntro:"खेती के पूरे चक्र के लिए AI मार्गदर्शन और तेलुगु में दैनिक कृषि सलाह।",selectCrop:"फसल",generatePlan:"AI प्लान देखें",aiPlannerDisclaimer:"AI मार्गदर्शन सामान्य मौसमी उदाहरण हैं। स्थानीय कृषि विज्ञान केंद्र या अधिकारी की सलाह से निर्णय लें।",plantProtection:"पौधों की सुरक्षा",pestGuide:"कीट और लक्षण मार्गदर्शिका",pestIntro:"पौधे पर दिखने वाला लक्षण चुनें और संभावित कारण पढ़ें।",observedSymptom:"दिखने वाला लक्षण",viewGuidance:"सलाह देखें",pestHint:"सलाह यहाँ दिखाई देगी।",pestDisclaimer:"एक लक्षण के कई कारण हो सकते हैं। उपचार या कीटनाशक से पहले कृषि विशेषज्ञ से पुष्टि करें।",supportForFarmers:"किसानों के लिए सहायता",governmentSchemes:"सरकारी योजनाएँ और संसाधन",schemeKisan:"पात्र किसान परिवारों के लिए आधिकारिक जानकारी और सेवाएँ।",schemeInsurance:"फसल बीमा की जानकारी और किसान सेवाएँ।",schemeSoil:"मिट्टी जाँच और सॉइल हेल्थ कार्ड सेवाओं की जानकारी।",schemeDisclaimer:"पात्रता और लाभ बदल सकते हैं। आधिकारिक पोर्टल पर पुष्टि करें।",footerText:"कृषि जानकारी को आसानी से उपलब्ध कराने के लिए बनाया गया।",backTop:"ऊपर जाएँ ↑",farmerAccount:"किसान खाता",welcomeBack:"वापस स्वागत है",authIntro:"इस डिवाइस पर डेमो प्रोफ़ाइल बनाएँ या लॉगिन करें।",login:"लॉगिन",register:"रजिस्टर",fullName:"पूरा नाम",mobileNumber:"मोबाइल नंबर",password:"पासवर्ड",logout:"लॉग आउट",authWarning:"केवल डेमो: विवरण इसी ब्राउज़र में सहेजे जाते हैं। असली पासवर्ड या संवेदनशील जानकारी न डालें।"
  }
};
let currentLanguage = "en";
function t(key){ return translations[currentLanguage]?.[key] || translations.en[key] || key; }
function applyLanguage(lang){
  currentLanguage = lang;
  document.documentElement.lang = lang === "te" ? "te" : lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value.includes("<br>")) el.innerHTML = value; else el.textContent = value;
  });
  renderAiSeasonPlan();
}
$("languageSelect").addEventListener("change", e => applyLanguage(e.target.value));

const today = new Date();
$("todayDate").textContent = today.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
function showToast(message){const el=$("toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600);}

// Weather: Open-Meteo public APIs; no API key required.
let latestWeather = null;
const weatherCodes = {0:["Clear sky","☀"],1:["Mainly clear","🌤"],2:["Partly cloudy","⛅"],3:["Overcast","☁"],45:["Fog","🌫"],48:["Rime fog","🌫"],51:["Light drizzle","🌦"],53:["Drizzle","🌦"],55:["Dense drizzle","🌧"],61:["Light rain","🌦"],63:["Rain","🌧"],65:["Heavy rain","🌧"],71:["Light snow","🌨"],73:["Snow","🌨"],75:["Heavy snow","❄"],80:["Rain showers","🌦"],81:["Rain showers","🌧"],82:["Heavy showers","⛈"],95:["Thunderstorm","⛈"],96:["Thunderstorm with hail","⛈"],99:["Severe thunderstorm","⛈"]};
async function loadWeather(city){
  $("weatherCondition").textContent="Loading weather…";
  try{
    const geo=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    if(!geo.ok) throw new Error("Could not find location");
    const place=(await geo.json()).results?.[0];
    if(!place) throw new Error("Location not found. Try a nearby town or city.");
    const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`);
    if(!res.ok) throw new Error("Weather service is unavailable");
    const data=await res.json(), c=data.current, info=weatherCodes[c.weather_code]||["Current conditions","🌤"];
    latestWeather = { temp: Math.round(c.temperature_2m), wind: Math.round(c.wind_speed_10m), rain: c.precipitation, condition: info[0], city: place.name };
    $("weatherTemp").textContent=`${latestWeather.temp}°`;
    $("weatherCondition").textContent=info[0];
    $("weatherPlace").textContent=`${place.name}${place.admin1?", "+place.admin1:""} · Feels like ${Math.round(c.apparent_temperature)}°C`;
    $("weatherSymbol").textContent=info[1];
    $("humidityValue").textContent=`${c.relative_humidity_2m}%`;
    $("windValue").textContent=`${latestWeather.wind} km/h`;
    $("rainValue").textContent=`${latestWeather.rain} mm`;
    $("weatherSummary").textContent=`${latestWeather.temp}° · ${info[0]}`;
    $("weatherLocation").textContent=place.name;
    $("weatherNote").textContent=`Updated from Open-Meteo. ${data.current.time.replace("T"," ")} local time.`;
    renderAiSeasonPlan();
  }catch(err){$("weatherCondition").textContent=err.message;$("weatherPlace").textContent="Check spelling or try a nearby city.";$("weatherSummary").textContent="Unavailable";}
}
$("weatherForm").addEventListener("submit",e=>{e.preventDefault();loadWeather($("weatherCity").value.trim());});
loadWeather("Visakhapatnam");

// Crop suggestions are simple educational heuristics, not a precision agronomy model.
const cropData = {
  kharif:{alluvial:["Rice","Maize","Pulses"],black:["Cotton","Soybean","Pigeon pea"],red:["Groundnut","Millets","Pigeon pea"],sandy:["Pearl millet","Groundnut","Cowpea"],clay:["Rice","Pigeon pea","Sesame"]},
  rabi:{alluvial:["Wheat","Chickpea","Mustard"],black:["Chickpea","Safflower","Wheat"],red:["Chickpea","Sorghum","Linseed"],sandy:["Mustard","Chickpea","Barley"],clay:["Wheat","Lentil","Peas"]},
  zaid:{alluvial:["Green gram","Vegetables","Zaid rice (where suitable)"],black:["Sesame","Green gram","Sunflower"],red:["Groundnut","Green gram","Vegetables"],sandy:["Watermelon","Cowpea","Vegetables"],clay:["Green gram","Fodder crops","Vegetables"]}
};
$("cropForm").addEventListener("submit",e=>{
  e.preventDefault();const soil=$("cropSoil").value,water=$("cropWater").value,season=$("cropSeason").value;
  let picks=[...cropData[season][soil]];
  if(water==="low") picks=picks.filter(c=>/millet|groundnut|cowpea|chickpea|pigeon pea|sesame|safflower|green gram|sorghum/i.test(c));
  if(!picks.length) picks=["Drought-tolerant millets","Pulses (check local variety)"];
  $("cropResults").innerHTML=`<div><strong>Suggested crops to explore</strong><ul>${picks.map(c=>`<li>${c}</li>`).join("")}</ul><span>Check local rainfall, irrigation, seed availability and current extension advice before deciding.</span></div>`;
});

// Soil readings: broad educational ranges only.
$("soilForm").addEventListener("submit",e=>{
  e.preventDefault();const ph=+$("soilPh").value,n=+$("soilN").value,p=+$("soilP").value,k=+$("soilK").value;
  if(ph<0||ph>14||[n,p,k].some(v=>v<0)){showToast("Enter valid soil test values.");return;}
  const phText=ph<5.5?"Acidic":ph>7.5?"Alkaline":"Near-neutral to mildly alkaline";
  const phAdvice=ph<5.5?"Ask a soil lab or agriculture officer whether liming is suitable.":ph>7.5?"Check micronutrient availability and use a lab-guided amendment plan.":"Maintain organic matter and follow crop-specific nutrient recommendations.";
  const nutrient=(v,low,high)=>v<low?"Low":v>high?"High":"Moderate";
  $("soilResult").innerHTML=`<div><strong>Soil reading summary</strong><ul><li>pH: ${phText} (${ph})</li><li>Nitrogen: ${nutrient(n,280,560)}</li><li>Phosphorus: ${nutrient(p,22,56)}</li><li>Potassium: ${nutrient(k,140,336)}</li></ul><span>${phAdvice} NPK bands shown are rough examples, not a fertilizer prescription.</span></div>`;
});

// Farm economics estimate.
function calculateProfit(){
  const area=+$("farmArea").value,yieldPer=+$("farmYield").value,price=+$("farmPrice").value,costs=+$("farmCosts").value;
  if([area,yieldPer,price,costs].some(v=>v<0)||area===0){showToast("Please enter valid non-negative values and area above zero.");return;}
  const revenue=area*yieldPer*price,net=revenue-costs;
  $("revenueValue").textContent=money(revenue);
  $("profitValue").textContent=(net<0?"−":"")+money(Math.abs(net));
  $("profitValue").style.color=net<0?"#b45b4b":"#2d6843";
}
$("profitForm").addEventListener("submit",e=>{e.preventDefault();calculateProfit();});calculateProfit();

// AI Farming Season Planner (6-step guidance + daily farming advice in Telugu).
const aiStepLabels = {
  en: ["Crop cultivation timing", "Seed sowing guidance", "Fertilizer schedule", "Water management", "Weather alerts", "Harvesting time"],
  te: ["పంట సాగు సమయం", "విత్తన నాటు మార్గదర్శకం", "ఎరువుల షెడ్యూల్", "నీటి నిర్వహణ", "వాతావరణ హెచ్చరికలు", "పంట కోత సమయం"],
  hi: ["फसल बुवाई समय", "बीज बोने का मार्गदर्शन", "उर्वरक अनुसूची", "जल प्रबंधन", "मौसम चेतावनी", "कटाई का समय"]
};

const aiCropPlans = {
  rice: {
    timing: { kharif: "June–July transplanting; 120–145 day crop.", rabi: "Nov–Dec sowing in irrigated tracts.", zaid: "Feb–Mar transplanting where assured canal/bore water exists." },
    sowing: "Treat seeds before nursery sowing; transplant 21–25 day seedlings at 20×15 cm spacing (2–3 seedlings/hill).",
    fertilizer: "Basal P & K + 1/3 N at puddling; split remaining Nitrogen at active tillering (25 days) and panicle initiation (50 days).",
    water: "Maintain 2–5 cm shallow standing water during vegetative growth; drain field 10 days before harvest.",
    harvest: "Harvest when 80–85% of grains turn golden yellow and moisture drops to ~20%; dry grains to 12–14% before storage."
  },
  cotton: {
    timing: { kharif: "June–July onset of monsoon; 150–170 day duration.", rabi: "Oct–Nov only in southern irrigated zones.", zaid: "Feb–Mar irrigated summer cotton in select basins." },
    sowing: "Use certified treated seeds; sow at 90×60 cm spacing and 4–5 cm depth after good soaking rain.",
    fertilizer: "Apply FYM + full Phosphorus at sowing; split Nitrogen & Potash at 30, 60 and 90 days after sowing.",
    water: "Critical stages: square formation, flowering and boll development. Avoid waterlogging during heavy rains.",
    harvest: "Pick fully burst dry bolls in 2–3 clean rounds during dry mornings; store seed cotton away from moisture."
  },
  groundnut: {
    timing: { kharif: "June–July; 105–120 day duration.", rabi: "Oct–Nov post-monsoon.", zaid: "Jan–Feb irrigated Zaid sowing." },
    sowing: "Treat kernels with Trichoderma/fungicide; sow at 30×10 cm spacing at 4–5 cm depth in friable soil.",
    fertilizer: "Basal NPK + Gypsum (500 kg/ha) at pegging/flowering stage for strong pod filling.",
    water: "Maintain light moisture during flowering, pegging and pod development; avoid heavy standing water.",
    harvest: "Harvest when leaves turn yellow and 75% pods show dark inner shell veins; dry pods well to prevent aflatoxin."
  },
  maize: {
    timing: { kharif: "June–July; 95–110 day crop.", rabi: "Oct–Nov mild winter crop.", zaid: "Feb–Mar short-duration hybrids." },
    sowing: "Sow on ridges at 60×20 cm spacing and 3–5 cm depth to protect young plants from excess rain.",
    fertilizer: "Basal P & K + 1/3 N at sowing; top-dress Nitrogen at knee-high (30 days) and tasseling (50 days).",
    water: "Most sensitive at knee-high, tasseling, silking and grain-filling stages; provide ridge-furrow drainage.",
    harvest: "Harvest when husks dry brown and kernels develop a black layer at the base; shell and dry to 12% moisture."
  },
  wheat: {
    timing: { kharif: "Not recommended in wet monsoon.", rabi: "Nov 1–25 optimum sowing; 120–135 day crop.", zaid: "Avoid late heat stress after March." },
    sowing: "Line sow at 20–22.5 cm row spacing and 4–5 cm depth using zero-till or seed drill.",
    fertilizer: "Apply full P & K + half Nitrogen at sowing; top-dress remaining half Nitrogen right after first (CRI) irrigation.",
    water: "Irrigate at Crown Root Initiation (21 days), tillering, booting, flowering and milking stages.",
    harvest: "Harvest when straw turns golden and grains become hard (~14% moisture); avoid shattering losses."
  },
  chickpea: {
    timing: { kharif: "Avoid heavy monsoon regions.", rabi: "Mid-Oct to mid-Nov; 100–115 days.", zaid: "Not suited to peak summer heat." },
    sowing: "Use Rhizobium-treated seed; sow 30×10 cm spacing at 6–8 cm depth on residual soil moisture.",
    fertilizer: "Apply starter NPK + Sulphur at sowing; foliar spray 2% urea/DAP at pre-flowering if needed.",
    water: "Needs minimal water: 1–2 light irrigations at branching and pod-filling stages; never flood.",
    harvest: "Harvest when 80% pods turn straw-brown and seeds rattle inside; thresh after sun-drying."
  },
  greengram: {
    timing: { kharif: "June–July; 65–75 days.", rabi: "Nov–Dec rice-fallow relay crop.", zaid: "Mar–Apr ideal 60–65 day Zaid crop." },
    sowing: "Treat seed with Rhizobium; sow in lines at 30×10 cm spacing and 3–4 cm depth.",
    fertilizer: "Apply basal starter N-P-K (20:40:20 kg/ha) at sowing; avoid excess nitrogen that causes leafy growth.",
    water: "Provide pre-sowing irrigation + 2–3 light irrigations at flowering and pod development in Zaid.",
    harvest: "Pick mature black/brown pods in 2 pickings or harvest when 80% pods mature before shattering."
  },
  watermelon: {
    timing: { kharif: "Avoid heavy rain fruiting.", rabi: "Nov–Dec warm coastal belts.", zaid: "Jan–Mar prime Zaid season; 80–95 days." },
    sowing: "Sow 2–3 seeds per pit/raised bed at 2.0×0.6 m spacing with mulching for moisture & weed control.",
    fertilizer: "Rich FYM + basal NPK in pits; weekly fertigation/top-dressing of Nitrogen & Potash during vine growth & fruiting.",
    water: "Drip irrigation every 2–3 days during flowering and fruit sizing; reduce water 7 days before harvest for sweetness.",
    harvest: "Harvest when tendril near fruit dries, underside spot turns creamy yellow, and tapping sounds dull."
  }
};

function buildWeatherAlert(season){
  const seasonAlert = {
    kharif: "Keep field bunds and drainage channels clear for sudden heavy monsoon showers; avoid spraying before rain.",
    rabi: "Watch for morning dew, fog and sudden cold waves; irrigate lightly during frost/cold alerts.",
    zaid: "High afternoon heat & dry winds expected; irrigate early morning/evening and use mulching."
  }[season];
  if (!latestWeather) return seasonAlert;
  const liveParts = [`Live (${latestWeather.city}: ${latestWeather.temp}°C, ${latestWeather.condition})`];
  if (latestWeather.rain > 0) liveParts.push("Rain detected — postpone pesticide spraying and clear drainage.");
  else if (latestWeather.temp >= 35) liveParts.push("High heat — schedule irrigation before 9 AM or after 5 PM.");
  else if (latestWeather.wind >= 20) liveParts.push("Gusty winds — avoid foliar spraying to prevent drift.");
  else liveParts.push("Conditions steady for field operations.");
  return `${liveParts.join(" · ")} ${seasonAlert}`;
}

function renderAiSeasonPlan(){
  const grid = $("aiPlanGrid");
  if (!grid) return;
  const season = $("aiSeason").value;
  const cropKey = $("aiCrop").value;
  const plan = aiCropPlans[cropKey] || aiCropPlans.rice;
  const titles = aiStepLabels[currentLanguage] || aiStepLabels.en;
  const items = [
    plan.timing[season] || plan.timing.kharif,
    plan.sowing,
    plan.fertilizer,
    plan.water,
    buildWeatherAlert(season),
    plan.harvest
  ];
  grid.innerHTML = items.map((text, idx) => `
    <article class="ai-plan-card ${idx === 4 ? "alert-card" : ""}">
      <div class="ai-plan-head">
        <span class="ai-step-num">${idx + 1}</span>
        <strong>${titles[idx]}</strong>
      </div>
      <p>${text}</p>
    </article>
  `).join("");
}

const dailyTeluguAdvice = [
  "ఉదయం 9 గంటలలోపు లేదా సాయంత్రం 5 గంటల తర్వాత మాత్రమే పంటకు నీరు పెట్టండి; మధ్యాహ్నం ఎండలో నీరు ఆవిరైపోతుంది.",
  "విత్తనం నాటే ముందు తప్పకుండా విత్తన శుద్ధి (Seed Treatment) చేయండి — ఇది వేరుకుళ్ళు మరియు ఆరంభ దశ తెగుళ్లను తగ్గిస్తుంది.",
  "నేల పరీక్ష (Soil Health Card) ప్రకారమే యూరియా మరియు డి.ఎ.పి. వాడండి; అవసరానికి మించి నత్రజని వేస్తే చీడపీడలు పెరుగుతాయి.",
  "పొలంలో వాన నీరు నిల్వ ఉండకుండా మురుగునీటి కాలువలను ఎప్పటికప్పుడు శుభ్రంగా ఉంచండి.",
  "వారానికి కనీసం రెండుసార్లు ఆకుల అడుగు భాగాన్ని పరిశీలించండి — రసం పీల్చే పురుగులను ప్రారంభ దశలోనే అరికట్టవచ్చు.",
  "పిచికారీ (Spray) చేసే ముందు గాలి వేగం మరియు వర్ష సూచనను తనిఖీ చేయండి; వర్షం వచ్చే ముందు మందులు చల్లవద్దు.",
  "పంట మార్పిడి (Crop Rotation) మరియు పచ్చిరొట్ట ఎరువులు వేయడం వల్ల నేల సారం పెరిగి రసాయన ఖర్చు తగ్గుతుంది.",
  "వేసవి మరియు జైద్ పంటలలో మల్చింగ్ (Mulching) వాడితే నేల తేమ నిలిచి నీటి ఆదా అవుతుంది మరియు కలుపు తగ్గుతుంది.",
  "పంట కోత తర్వాత ధాన్యాన్ని బాగా ఆరబెట్టి తేమ 12% లోపు ఉన్నప్పుడే గోదాంలో నిల్వ చేయండి.",
  "సందేహాలు ఉన్నప్పుడు సమీప కృషి విజ్ఞాన కేంద్రం (KVK) లేదా మండల వ్యవసాయ అధికారి సలహా తీసుకోండి."
];
let teluguTipIndex = today.getDate() % dailyTeluguAdvice.length;
function renderTeluguDailyAdvice(){
  if ($("dailyTeluguTip")) $("dailyTeluguTip").textContent = dailyTeluguAdvice[teluguTipIndex];
}
$("nextTeluguTip")?.addEventListener("click", () => {
  teluguTipIndex = (teluguTipIndex + 1) % dailyTeluguAdvice.length;
  renderTeluguDailyAdvice();
});
$("aiPlannerForm")?.addEventListener("submit", e => { e.preventDefault(); renderAiSeasonPlan(); });
$("aiSeason")?.addEventListener("change", renderAiSeasonPlan);
$("aiCrop")?.addEventListener("change", renderAiSeasonPlan);
renderAiSeasonPlan();
renderTeluguDailyAdvice();

// Symptom guide is a learning aid, not automated diagnosis.
const pestGuidance={
 holes:["Chewed leaves or holes","Possible causes include caterpillars, beetles or other chewing insects. Inspect both sides of leaves and look for larvae or fresh frass. Use field scouting and ask a local KVK about crop-specific integrated pest management."],
 yellow:["Yellowing leaves","Possible causes include waterlogging, nutrient imbalance, root stress or pests. Check whether older or younger leaves are affected, inspect drainage and compare with a soil test before applying fertilizer."],
 spots:["Brown or black spots","Possible causes include fungal or bacterial leaf diseases, spray injury or nutrient stress. Avoid working in wet foliage, remove heavily affected plant material where appropriate, and seek a local diagnosis before treatment."],
 curl:["Curled or sticky leaves","Possible causes include aphids, whiteflies, mites or virus-related symptoms. Inspect new growth and leaf undersides. Use yellow sticky traps for monitoring where recommended and seek expert identification."],
 wilt:["Sudden wilting","Possible causes include water stress, root damage, stem borers or soil-borne disease. Check soil moisture and roots, and see whether one plant or a whole patch is affected. Get a field diagnosis promptly."]
};
$("identifyPest").addEventListener("click",()=>{
 const item=pestGuidance[$("pestSelect").value];
 $("pestResult").innerHTML=`<div><strong>${item[0]}</strong><p style="margin:5px 0 0">${item[1]}</p></div>`;
});

// Local-only demo account. Not secure authentication; never use for production.
let authMode="login";
function setAuthMode(mode){
 authMode=mode;
 document.querySelectorAll(".auth-tab").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
 $("nameField").hidden=mode!=="register";
 $("authName").required=mode==="register";
 $("authSubmit").textContent=t(mode);
 $("authTitle").textContent=mode==="login"?t("welcomeBack"):t("register");
 $("authMessage").textContent="";
}
document.querySelectorAll(".auth-tab").forEach(b=>b.addEventListener("click",()=>setAuthMode(b.dataset.mode)));
function getUser(){try{return JSON.parse(localStorage.getItem("smartKrushiUser")||"null");}catch{return null;}}
function updateAccount(){
 const user=getUser();
 $("accountName").textContent=user?.name||"Farmer account";
 $("accountStatus").textContent=user?user.mobile:"Sign in to save your profile";
 $("avatar").textContent=(user?.name||"F").charAt(0).toUpperCase();
 $("logoutButton").hidden=!user;
}
function openAuth(){const user=getUser();$("authModal").hidden=false;$("authMobile").value=user?.mobile||"";$("authPassword").value="";$("authMessage").textContent="";setAuthMode("login");}
$("accountButton").addEventListener("click",openAuth);$("accountTop").addEventListener("click",openAuth);
$("closeModal").addEventListener("click",()=>$("authModal").hidden=true);
$("authModal").addEventListener("click",e=>{if(e.target===$("authModal"))$("authModal").hidden=true;});
$("authForm").addEventListener("submit",e=>{
 e.preventDefault();const mobile=$("authMobile").value.trim(),password=$("authPassword").value;
 let users={};try{users=JSON.parse(localStorage.getItem("smartKrushiUsers")||"{}");}catch{}
 if(authMode==="register"){
  const name=$("authName").value.trim();if(!name){$("authMessage").textContent="Enter your name.";return;}
  if(users[mobile]){$("authMessage").textContent="An account with this mobile number already exists.";return;}
  users[mobile]={name,mobile,password};localStorage.setItem("smartKrushiUsers",JSON.stringify(users));localStorage.setItem("smartKrushiUser",JSON.stringify({name,mobile}));
  $("authMessage").textContent="Demo profile created on this device.";showToast("Welcome to Smart Krushi, "+name+"!");
 }else{
  const user=users[mobile];if(!user||user.password!==password){$("authMessage").textContent="Mobile number or password is incorrect.";return;}
  localStorage.setItem("smartKrushiUser",JSON.stringify({name:user.name,mobile:user.mobile}));$("authMessage").textContent="You are signed in on this device.";showToast("Welcome back, "+user.name+"!");
 }
 updateAccount();setTimeout(()=>$("authModal").hidden=true,700);
});
$("logoutButton").addEventListener("click",()=>{localStorage.removeItem("smartKrushiUser");updateAccount();$("authMessage").textContent="You have logged out.";showToast("Logged out.");});
updateAccount();

// Mobile navigation.
$("menuButton").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
$("closeSidebar")?.addEventListener("click",()=>$("sidebar").classList.remove("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{
 const target=link.getAttribute("href");
 document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===target));
 $("sidebar").classList.remove("open");
}));
