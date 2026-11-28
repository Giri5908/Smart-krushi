const $ = (id) => document.getElementById(id);
const translations = {
  en: {
    workspace:"WORKSPACE",overview:"Overview",weather:"Weather",marketPrices:"Current market prices",crop:"Crop advisor",soil:"Soil health",aiPlannerNav:"AI Season Planner",profit:"Profit calculator",pests:"Pest guide",schemes:"Govt. schemes",
    grow:"Grow with confidence",growText:"Small steps today can build a healthier harvest tomorrow.",farmWorkspace:"YOUR FARM WORKSPACE",goodDay:"Good day, farmer",welcomeText:"Make informed decisions with simple tools for your farm.",seasonReady:"A BETTER WAY TO FARM",heroTitle:"Plan well. Grow more.<br>Harvest with confidence.",heroText:"Bring weather, crop planning and farm calculations together in one place.",exploreTools:"Explore farm tools",weatherStatus:"Weather status",cropPlanning:"Crop planning",planAhead:"Plan ahead",cropPlanningSub:"Find crops for your conditions",soilCheck:"Soil check",testYourSoil:"Test your soil",soilSub:"Understand pH and nutrients",farmEconomics:"Farm economics",knowYourNumbers:"Know your numbers",profitSub:"Estimate cost and returns",quickAccess:"QUICK ACCESS",farmTools:"Your farm tools",toolsNote:"Practical tools, all in one place",weatherForecast:"Weather forecast",weatherCardText:"Check local conditions",cropAdvisor:"Crop advisor",cropCardText:"Explore suitable crops",soilCalculator:"Soil health check",soilCardText:"Review soil readings",profitEstimator:"Profit estimator",profitCardText:"Estimate your farm returns",localConditions:"LOCAL CONDITIONS",weatherDashboard:"Weather dashboard",liveData:"LIVE DATA",getWeather:"Get weather",humidity:"Humidity",wind:"Wind",rain:"Rain",weatherNote:"Forecasts are guidance only. Check local advisories before farm operations.",planningAssistant:"PLANNING ASSISTANT",cropRecommendation:"Crop recommendation",cropIntro:"Choose your conditions to see crops that may be worth exploring.",soilType:"Soil type",waterAvailability:"Water availability",season:"Season",findCrops:"Find crop ideas",cropResultHint:"Your crop ideas will appear here.",cropDisclaimer:"Indicative ideas only. Confirm local suitability, seed variety and sowing window with a KVK or agriculture officer.",soilInsights:"SOIL INSIGHTS · SHC GUIDE",soilHealthCalculator:"Soil health calculator",soilIntro:"Enter values from your Soil Health Card report to check parameter status and indicative fertilizer guidance.",soilEcLabel:"EC (dS/m)",soilOcLabel:"Organic Carbon (%)",soilMicroToggle:"Optional: Secondary & Micro-nutrients (S, Zn, Fe, Cu, Mn, B)",analyzeSoil:"Calculate soil health & fertilizer",soilHint:"Your soil summary will appear here.",soilPortalNote:"Need an official Soil Health Card or STCR calculation?",openShcPortal:"Official Soil Health Portal ↗",soilDisclaimer:"Indicative educational ranges modeled on Soil Health Card parameters. Nutrient categories vary by soil, crop, and lab method—follow your official Soil Health Card or KVK recommendation.",farmEconomicsLabel:"FARM ECONOMICS",profitCalculator:"Profit calculator",profitIntro:"Estimate a crop's income after your listed expenses.",landArea:"Land area (acres)",yieldPerAcre:"Yield per acre (kg)",pricePerKg:"Selling price (₹/kg)",totalCosts:"Total costs (₹)",calculateProfit:"Calculate estimate",estimatedRevenue:"Estimated revenue",estimatedProfit:"Estimated net result",profitDisclaimer:"An estimate, not a price guarantee. Excludes costs you have not entered and market fluctuations.",seasonPlanner:"AI SEASON PLANNER",aiSeasonPlanner:"AI Farming Season Planner",aiPlannerIntro:"AI guide on what to do in farming across the full crop cycle, plus daily advice in Telugu.",selectCrop:"Crop",generatePlan:"Get AI Plan",aiPlannerDisclaimer:"AI guidance provides general seasonal schedules. Adjust sowing, fertilizer and irrigation with your local KVK or agriculture officer.",plantProtection:"PLANT PROTECTION",pestGuide:"Pest & symptom guide",pestIntro:"Choose what you notice on the plant to read possible causes and safer next steps.",observedSymptom:"Observed symptom",viewGuidance:"View guidance",pestHint:"Guidance will appear here.",pestDisclaimer:"Symptoms can have several causes. Confirm with a local agricultural expert before applying any treatment or pesticide.",supportForFarmers:"SUPPORT FOR FARMERS",governmentSchemes:"Government schemes & resources",schemeKisan:"Official information and beneficiary services for eligible farmer families.",schemeInsurance:"Crop insurance information, notifications and farmer services.",schemeSoil:"Learn about soil testing and soil health card services.",schemeDisclaimer:"Eligibility, benefits and application windows can change. Verify details on the official portal or with your agriculture department.",footerText:"Built to make farm information easier to explore.",backTop:"Back to top ↑",farmerAccount:"FARMER ACCOUNT",welcomeBack:"Welcome back",authIntro:"Create a local demo profile or sign in on this device.",login:"Login",register:"Register",fullName:"Full name",mobileNumber:"Mobile number",password:"Password",logout:"Log out",authWarning:"Demo only: profile details are stored in this browser. Do not use a real password or sensitive personal information. This is not secure production authentication."
  },
  te: {
    workspace:"పని ప్రదేశం",overview:"సారాంశం",weather:"వాతావరణం",marketPrices:"మార్కెట్ ధరలు",crop:"పంట సలహా",soil:"నేల ఆరోగ్యం",aiPlannerNav:"AI సీజన్ ప్లానర్",profit:"లాభాల లెక్క",pests:"చీడపీడల గైడ్",schemes:"ప్రభుత్వ పథకాలు",
    grow:"ధైర్యంగా సాగు చేయండి",growText:"ఈరోజు చిన్న అడుగులు రేపటి మంచి పంటకు దారి తీస్తాయి.",farmWorkspace:"మీ వ్యవసాయ వేదిక",goodDay:"నమస్కారం రైతు గారూ",welcomeText:"మీ వ్యవసాయానికి సరళమైన సాధనాలతో సమాచార నిర్ణయాలు తీసుకోండి.",seasonReady:"వ్యవసాయానికి మెరుగైన మార్గం",heroTitle:"మంచి ప్రణాళిక. మెరుగైన దిగుబడి.<br>నమ్మకంగా పంట కోయండి.",heroText:"వాతావరణం, పంట ప్రణాళిక, వ్యవసాయ లెక్కలు ఒకే చోట.",exploreTools:"వ్యవసాయ సాధనాలు చూడండి",weatherStatus:"వాతావరణ స్థితి",cropPlanning:"పంట ప్రణాళిక",planAhead:"ముందుగా ప్రణాళిక",cropPlanningSub:"మీ పరిస్థితులకు తగిన పంటలు చూడండి",soilCheck:"నేల పరీక్ష",testYourSoil:"మీ నేలను పరీక్షించండి",soilSub:"pH మరియు పోషకాలను తెలుసుకోండి",farmEconomics:"వ్యవసాయ ఆర్థికం",knowYourNumbers:"మీ లెక్కలు తెలుసుకోండి",profitSub:"ఖర్చు, ఆదాయం అంచనా",quickAccess:"త్వరిత ప్రాప్తి",farmTools:"మీ వ్యవసాయ సాధనాలు",toolsNote:"అన్ని ఉపయోగకరమైన సాధనాలు ఒకేచోట",weatherForecast:"వాతావరణ సూచన",weatherCardText:"స్థానిక పరిస్థితులు చూడండి",cropAdvisor:"పంట సలహా",cropCardText:"తగిన పంటలను చూడండి",soilCalculator:"నేల ఆరోగ్య పరీక్ష",soilCardText:"నేల వివరాలు పరిశీలించండి",profitEstimator:"లాభాల అంచనా",profitCardText:"వ్యవసాయ ఆదాయం అంచనా",localConditions:"స్థానిక పరిస్థితులు",weatherDashboard:"వాతావరణ డాష్‌బోర్డ్",liveData:"ప్రత్యక్ష సమాచారం",getWeather:"వాతావరణం చూడండి",humidity:"తేమ",wind:"గాలి",rain:"వర్షం",weatherNote:"ఇవి సూచనలు మాత్రమే. వ్యవసాయ పనులకు ముందు స్థానిక సూచనలు పరిశీలించండి.",planningAssistant:"ప్రణాళిక సహాయకుడు",cropRecommendation:"పంట సిఫార్సు",cropIntro:"పంట ఆలోచనల కోసం మీ పరిస్థితులను ఎంచుకోండి.",soilType:"నేల రకం",waterAvailability:"నీటి లభ్యత",season:"సీజన్",findCrops:"పంటలు సూచించండి",cropResultHint:"మీ పంట సూచనలు ఇక్కడ కనిపిస్తాయి.",cropDisclaimer:"ఇవి ప్రాథమిక సూచనలు మాత్రమే. స్థానిక KVK లేదా వ్యవసాయ అధికారిని సంప్రదించండి.",soilInsights:"నేల వివరాలు · SHC గైడ్",soilHealthCalculator:"నేల ఆరోగ్య కాలిక్యులేటర్",soilIntro:"మీ సాయిల్ హెల్త్ కార్డ్ నివేదికలోని విలువలను నమోదు చేసి పోషక స్థితి, ఎరువుల అంచనా చూడండి.",soilEcLabel:"EC (dS/m)",soilOcLabel:"సేంద్రీయ కర్బనం (%)",soilMicroToggle:"ఐచ్ఛికం: ద్వితీయ, సూక్ష్మ పోషకాలు (S, Zn, Fe, Cu, Mn, B)",analyzeSoil:"నేల ఆరోగ్యం & ఎరువులు లెక్కించండి",soilHint:"నేల సారాంశం ఇక్కడ కనిపిస్తుంది.",soilPortalNote:"అధికారిక సాయిల్ హెల్త్ కార్డు లేదా STCR సిఫార్సు కావాలా?",openShcPortal:"అధికారిక SHC పోర్టల్ ↗",soilDisclaimer:"ఇవి సాయిల్ హెల్త్ కార్డు ప్రమాణాల ఆధారంగా సూచనాత్మక అంచనాలు మాత్రమే. అధికారిక నివేదిక లేదా KVK సలహాను అనుసరించండి.",farmEconomicsLabel:"వ్యవసాయ ఆర్థికం",profitCalculator:"లాభాల కాలిక్యులేటర్",profitIntro:"ఖర్చుల తర్వాత పంట ఆదాయాన్ని అంచనా వేయండి.",landArea:"భూమి విస్తీర్ణం (ఎకరాలు)",yieldPerAcre:"ఎకరాకు దిగుబడి (కిలోలు)",pricePerKg:"అమ్మకపు ధర (₹/కిలో)",totalCosts:"మొత్తం ఖర్చులు (₹)",calculateProfit:"లెక్కించండి",estimatedRevenue:"అంచనా ఆదాయం",estimatedProfit:"అంచనా నికర ఫలితం",profitDisclaimer:"ఇది అంచనా మాత్రమే. నమోదు చేయని ఖర్చులు, మార్కెట్ మార్పులు ఇందులో లేవు.",seasonPlanner:"AI సీజన్ ప్లానర్",aiSeasonPlanner:"AI వ్యవసాయ సీజన్ ప్లానర్",aiPlannerIntro:"పంట సాగులో ఏ సమయంలో ఏమి చేయాలో AI మార్గదర్శకం మరియు తెలుగులో రోజువారీ సలహా.",selectCrop:"పంట",generatePlan:"AI ప్లాన్ చూడండి",aiPlannerDisclaimer:"AI సూచనలు సాధారణ సీజన్ ప్రణాళికలు మాత్రమే. స్థానిక KVK లేదా వ్యవసాయ అధికారి సలహాతో మార్పులు చేసుకోండి.",plantProtection:"మొక్కల రక్షణ",pestGuide:"చీడపీడలు మరియు లక్షణాలు",pestIntro:"మొక్కపై కనిపించే లక్షణాన్ని ఎంచుకుని సూచనలు చూడండి.",observedSymptom:"కనిపించిన లక్షణం",viewGuidance:"సూచనలు చూడండి",pestHint:"సూచనలు ఇక్కడ కనిపిస్తాయి.",pestDisclaimer:"ఒకే లక్షణానికి అనేక కారణాలు ఉండవచ్చు. మందులు వాడే ముందు వ్యవసాయ నిపుణుడిని సంప్రదించండి.",supportForFarmers:"రైతులకు మద్దతు",governmentSchemes:"ప్రభుత్వ పథకాలు మరియు వనరులు",schemeKisan:"అర్హులైన రైతు కుటుంబాల కోసం అధికారిక సమాచారం, సేవలు.",schemeInsurance:"పంట బీమా సమాచారం మరియు రైతు సేవలు.",schemeSoil:"నేల పరీక్ష మరియు సాయిల్ హెల్త్ కార్డు సేవలు.",schemeDisclaimer:"అర్హతలు, ప్రయోజనాలు మారవచ్చు. అధికారిక పోర్టల్‌లో నిర్ధారించండి.",footerText:"వ్యవసాయ సమాచారాన్ని సులభంగా అందించడానికి రూపొందించబడింది.",backTop:"పైకి వెళ్లండి ↑",farmerAccount:"రైతు ఖాతా",welcomeBack:"మళ్లీ స్వాగతం",authIntro:"ఈ పరికరంలో డెమో ప్రొఫైల్ సృష్టించండి లేదా లాగిన్ అవ్వండి.",login:"లాగిన్",register:"నమోదు",fullName:"పూర్తి పేరు",mobileNumber:"మొబైల్ నంబర్",password:"పాస్‌వర్డ్",logout:"లాగ్ అవుట్",authWarning:"డెమో మాత్రమే: వివరాలు ఈ బ్రౌజర్‌లో నిల్వ ఉంటాయి. నిజమైన పాస్‌వర్డ్ లేదా సున్నితమైన వివరాలు ఉపయోగించవద్దు."
  },
  hi: {
    workspace:"कार्य क्षेत्र",overview:"अवलोकन",weather:"मौसम",marketPrices:"बाजार भाव",crop:"फसल सलाहकार",soil:"मिट्टी का स्वास्थ्य",aiPlannerNav:"AI सीज़न प्लानर",profit:"लाभ कैलकुलेटर",pests:"कीट मार्गदर्शिका",schemes:"सरकारी योजनाएँ",
    grow:"आत्मविश्वास से खेती करें",growText:"आज के छोटे कदम कल बेहतर फसल दे सकते हैं।",farmWorkspace:"आपका कृषि कार्यक्षेत्र",goodDay:"नमस्ते किसान",welcomeText:"खेती के लिए सरल साधनों से सोच-समझकर निर्णय लें।",seasonReady:"खेती का बेहतर तरीका",heroTitle:"अच्छी योजना। बेहतर उपज।<br>आत्मविश्वास से फसल लें।",heroText:"मौसम, फसल योजना और खेती की गणना एक ही जगह।",exploreTools:"कृषि साधन देखें",weatherStatus:"मौसम की स्थिति",cropPlanning:"फसल योजना",planAhead:"पहले से योजना बनाएँ",cropPlanningSub:"अपनी स्थिति के अनुसार फसलें देखें",soilCheck:"मिट्टी जाँच",testYourSoil:"मिट्टी की जाँच करें",soilSub:"pH और पोषक तत्व समझें",farmEconomics:"खेती का अर्थशास्त्र",knowYourNumbers:"अपना हिसाब जानें",profitSub:"लागत और आय का अनुमान",quickAccess:"त्वरित पहुँच",farmTools:"आपके कृषि साधन",toolsNote:"उपयोगी साधन, एक ही जगह",weatherForecast:"मौसम पूर्वानुमान",weatherCardText:"स्थानीय मौसम देखें",cropAdvisor:"फसल सलाहकार",cropCardText:"उपयुक्त फसलें देखें",soilCalculator:"मिट्टी स्वास्थ्य जाँच",soilCardText:"मिट्टी के आँकड़े देखें",profitEstimator:"लाभ अनुमान",profitCardText:"खेती की आय का अनुमान",localConditions:"स्थानीय स्थिति",weatherDashboard:"मौसम डैशबोर्ड",liveData:"लाइव डेटा",getWeather:"मौसम देखें",humidity:"नमी",wind:"हवा",rain:"बारिश",weatherNote:"पूर्वानुमान केवल मार्गदर्शन है। खेती के काम से पहले स्थानीय सलाह देखें।",planningAssistant:"योजना सहायक",cropRecommendation:"फसल सुझाव",cropIntro:"फसल के विकल्प देखने के लिए अपनी स्थिति चुनें।",soilType:"मिट्टी का प्रकार",waterAvailability:"पानी की उपलब्धता",season:"मौसम",findCrops:"फसल सुझाव पाएँ",cropResultHint:"फसल सुझाव यहाँ दिखाई देंगे।",cropDisclaimer:"ये केवल प्रारंभिक सुझाव हैं। स्थानीय कृषि विज्ञान केंद्र या कृषि अधिकारी से पुष्टि करें।",soilInsights:"मिट्टी की जानकारी · SHC गाइड",soilHealthCalculator:"मिट्टी स्वास्थ्य कैलकुलेटर",soilIntro:"पोषक तत्वों की स्थिति और अनुमानित उर्वरक सलाह देखने के लिए अपने सॉइल हेल्थ कार्ड के मान दर्ज करें।",soilEcLabel:"EC (dS/m)",soilOcLabel:"ऑर्गेनिक कार्बन (%)",soilMicroToggle:"वैकल्पिक: द्वितीयक और सूक्ष्म पोषक तत्व (S, Zn, Fe, Cu, Mn, B)",analyzeSoil:"मिट्टी स्वास्थ्य व उर्वरक निकालें",soilHint:"मिट्टी का सारांश यहाँ दिखाई देगा।",soilPortalNote:"अधिकारिक सॉइल हेल्थ कार्ड या STCR गणना चाहिए?",openShcPortal:"अधिकारिक SHC पोर्टल ↗",soilDisclaimer:"ये सॉइल हेल्थ कार्ड मानकों पर आधारित केवल शैक्षिक अनुमान हैं। अंतिम उपयोग के लिए अपने आधिकारिक कार्ड या KVK की सलाह मानें।",farmEconomicsLabel:"खेती का अर्थशास्त्र",profitCalculator:"लाभ कैलकुलेटर",profitIntro:"खर्च घटाकर फसल की आय का अनुमान लगाएँ।",landArea:"भूमि क्षेत्र (एकड़)",yieldPerAcre:"प्रति एकड़ उपज (किग्रा)",pricePerKg:"बिक्री मूल्य (₹/किग्रा)",totalCosts:"कुल लागत (₹)",calculateProfit:"अनुमान निकालें",estimatedRevenue:"अनुमानित आय",estimatedProfit:"अनुमानित शुद्ध परिणाम",profitDisclaimer:"यह अनुमान है, कीमत की गारंटी नहीं। दर्ज न किए गए खर्च और बाजार बदलाव शामिल नहीं हैं।",seasonPlanner:"AI सीज़न प्लानर",aiSeasonPlanner:"AI कृषि सीज़न प्लानर",aiPlannerIntro:"खेती के पूरे चक्र के लिए AI मार्गदर्शन और तेलुगु में दैनिक कृषि सलाह।",selectCrop:"फसल",generatePlan:"AI प्लान देखें",aiPlannerDisclaimer:"AI मार्गदर्शन सामान्य मौसमी उदाहरण हैं। स्थानीय कृषि विज्ञान केंद्र या अधिकारी की सलाह से निर्णय लें।",plantProtection:"पौधों की सुरक्षा",pestGuide:"कीट और लक्षण मार्गदर्शिका",pestIntro:"पौधे पर दिखने वाला लक्षण चुनें और संभावित कारण पढ़ें।",observedSymptom:"दिखने वाला लक्षण",viewGuidance:"सलाह देखें",pestHint:"सलाह यहाँ दिखाई देगी।",pestDisclaimer:"एक लक्षण के कई कारण हो सकते हैं। उपचार या कीटनाशक से पहले कृषि विशेषज्ञ से पुष्टि करें।",supportForFarmers:"किसानों के लिए सहायता",governmentSchemes:"सरकारी योजनाएँ और संसाधन",schemeKisan:"पात्र किसान परिवारों के लिए आधिकारिक जानकारी और सेवाएँ।",schemeInsurance:"फसल बीमा की जानकारी और किसान सेवाएँ।",schemeSoil:"मिट्टी जाँच और सॉइल हेल्थ कार्ड सेवाओं की जानकारी।",schemeDisclaimer:"पात्रता और लाभ बदल सकते हैं। आधिकारिक पोर्टल पर पुष्टि करें।",footerText:"कृषि जानकारी को आसानी से उपलब्ध कराने के लिए बनाया गया।",backTop:"ऊपर जाएँ ↑",farmerAccount:"किसान खाता",welcomeBack:"वापस स्वागत है",authIntro:"इस डिवाइस पर डेमो प्रोफ़ाइल बनाएँ या लॉगिन करें।",login:"लॉगिन",register:"रजिस्टर",fullName:"पूरा नाम",mobileNumber:"मोबाइल नंबर",password:"पासवर्ड",logout:"लॉग आउट",authWarning:"केवल डेमो: विवरण इसी ब्राउज़र में सहेजे जाते हैं। असली पासवर्ड या संवेदनशील जानकारी न डालें।"
  }
};
let currentLanguage = "en";
const droneTranslations = {
  en: {
    droneFeatures:"AI Agriculture Drone Features",droneEyebrow:"SMART FIELD OPERATIONS",droneIntro:"Explore ways aerial imagery and AI can help farmers inspect fields and plan targeted action.",
    droneHealthTitle:"Crop health mapping",droneHealthText:"Highlight unusual crop patterns from aerial images to guide closer field scouting.",
    droneCountTitle:"Plant count and gap checks",droneCountText:"Review crop stand density and locate areas that may need replanting or inspection.",
    droneHotspotTitle:"Stress hotspot scouting",droneHotspotText:"Mark patches of possible pest, disease, weed, or nutrient stress for expert review.",
    droneWaterTitle:"Irrigation checks",droneWaterText:"Use field patterns to prioritize areas for on-ground moisture and irrigation checks.",
    droneSprayTitle:"Precision treatment planning",droneSprayText:"Identify candidate treatment zones for review; verify product labels and local rules before spraying.",
    droneMapTitle:"Field mapping and progress",droneMapText:"Create visual field records to compare crop development across scouting visits.",
    droneNotice:"Demo preview: this dashboard does not connect to a drone, process aerial imagery, or control flight and spraying. Connect a compatible drone and validated analysis service to enable live features.",
    droneGuideLink:"Open the plant photo guide",
    droneHealthStage:"Crop monitoring",droneCountStage:"Stand check",droneHotspotStage:"Stress scouting",droneWaterStage:"Moisture check",droneSprayStage:"Treatment zone",droneMapStage:"Field record",
    droneDemoDisclaimer:"Demo purpose only: this illustrative preview shows aerial scouting concepts. This dashboard does not connect to a drone or process live flight imagery."
  },
  te: {
    droneFeatures:"AI వ్యవసాయ డ్రోన్ సదుపాయాలు",droneEyebrow:"స్మార్ట్ పొల నిర్వహణ",droneIntro:"పొలాన్ని పరిశీలించి, అవసరమైన చర్యలను ప్రణాళిక చేయడానికి వైమానిక చిత్రాలు, AI ఎలా సహాయపడతాయో చూడండి.",
    droneHealthTitle:"పంట ఆరోగ్య మ్యాపింగ్",droneHealthText:"వైమానిక చిత్రాల్లో అసాధారణ పంట నమూనాలను గుర్తించి, పొలంలో మరింతగా పరిశీలించాల్సిన ప్రాంతాలను సూచించండి.",
    droneCountTitle:"మొక్కల లెక్కింపు, ఖాళీ ప్రదేశాల గుర్తింపు",droneCountText:"పంట మొక్కల సాంద్రతను పరిశీలించి, మళ్లీ నాటడం లేదా తనిఖీ అవసరమయ్యే ప్రాంతాలను గుర్తించండి.",
    droneHotspotTitle:"ఒత్తిడి ప్రాంతాల పరిశీలన",droneHotspotText:"చీడపీడలు, వ్యాధులు, కలుపు లేదా పోషక లోపం ఉండవచ్చని కనిపించే ప్రాంతాలను నిపుణుల పరిశీలన కోసం గుర్తించండి.",
    droneWaterTitle:"నీటిపారుదల తనిఖీలు",droneWaterText:"పొలంలోని నమూనాల ఆధారంగా నేల తేమ, నీటిపారుదలపై క్షేత్రస్థాయి తనిఖీ అవసరమైన ప్రాంతాలకు ప్రాధాన్యత ఇవ్వండి.",
    droneSprayTitle:"ఖచ్చితమైన చికిత్స ప్రణాళిక",droneSprayText:"చికిత్స అవసరమయ్యే ప్రాంతాలను పరిశీలన కోసం గుర్తించండి. పిచికారీకి ముందు మందు లేబుల్‌, స్థానిక నియమాలు తప్పనిసరిగా తనిఖీ చేయండి.",
    droneMapTitle:"పొల మ్యాపింగ్, పురోగతి నమోదు",droneMapText:"వేర్వేరు పరిశీలనల సమయంలో పంట ఎదుగుదలను పోల్చడానికి పొలానికి సంబంధించిన దృశ్య రికార్డులు రూపొందించండి.",
    droneNotice:"డెమో నమూనా: ఈ డ్యాష్‌బోర్డ్ ప్రస్తుతం డ్రోన్‌కు అనుసంధానించబడలేదు; వైమానిక చిత్రాలను విశ్లేషించదు, డ్రోన్ ప్రయాణం లేదా పిచికారీని నియంత్రించదు. ప్రత్యక్ష సదుపాయాల కోసం అనుకూల డ్రోన్‌, ధృవీకరించిన విశ్లేషణ సేవను అనుసంధానించాలి.",
    droneGuideLink:"మొక్క ఫోటో మార్గదర్శిని తెరవండి",
    droneHealthStage:"పంట పర్యవేక్షణ",droneCountStage:"మొక్కల సాంద్రత",droneHotspotStage:"ఒత్తిడి గుర్తింపు",droneWaterStage:"తేమ తనిఖీ",droneSprayStage:"చికిత్స ప్రాంతం",droneMapStage:"పొల రికార్డు",
    droneDemoDisclaimer:"డెమో ప్రయోజనం కోసం మాత్రమే: ఇది వైమానిక పర్యవేక్షణ నమూనా చిత్రం. ఈ డ్యాష్‌బోర్డ్ ప్రత్యక్ష డ్రోన్ లేదా ఉపగ్రహ సేవలకు అనుసంధానించబడలేదు."
  },
  hi: {
    droneFeatures:"AI कृषि ड्रोन सुविधाएँ",droneEyebrow:"स्मार्ट खेत संचालन",droneIntro:"जानें कि हवाई तस्वीरें और AI खेत का निरीक्षण करने तथा लक्षित कार्रवाई की योजना बनाने में कैसे मदद कर सकते हैं।",
    droneHealthTitle:"फसल स्वास्थ्य मानचित्रण",droneHealthText:"हवाई तस्वीरों में असामान्य फसल पैटर्न पहचानकर खेत में नज़दीकी निरीक्षण के क्षेत्रों को चिह्नित करें।",
    droneCountTitle:"पौधों की गिनती और खाली जगहों की जाँच",droneCountText:"फसल घनत्व देखें और उन क्षेत्रों को पहचानें जहाँ दोबारा रोपाई या निरीक्षण की ज़रूरत हो सकती है।",
    droneHotspotTitle:"तनाव वाले क्षेत्रों की जाँच",droneHotspotText:"संभावित कीट, रोग, खरपतवार या पोषक तत्वों की कमी वाले हिस्सों को विशेषज्ञ समीक्षा के लिए चिह्नित करें।",
    droneWaterTitle:"सिंचाई जाँच",droneWaterText:"खेत के पैटर्न से उन जगहों को प्राथमिकता दें जहाँ मिट्टी की नमी और सिंचाई की ज़मीनी जाँच करनी है।",
    droneSprayTitle:"सटीक उपचार योजना",droneSprayText:"समीक्षा के लिए संभावित उपचार क्षेत्र पहचानें। छिड़काव से पहले उत्पाद का लेबल और स्थानीय नियम जाँचें।",
    droneMapTitle:"खेत का नक्शा और प्रगति",droneMapText:"अलग-अलग निरीक्षणों में फसल की बढ़त की तुलना के लिए खेत के दृश्य रिकॉर्ड बनाएँ।",
    droneNotice:"डेमो: यह डैशबोर्ड अभी किसी ड्रोन से जुड़ा नहीं है, हवाई तस्वीरों का विश्लेषण नहीं करता और उड़ान या छिड़काव नियंत्रित नहीं करता। लाइव सुविधाओं के लिए संगत ड्रोन और प्रमाणित विश्लेषण सेवा जोड़नी होगी।",
    droneGuideLink:"पौधे की फोटो मार्गदर्शिका खोलें",
    droneHealthStage:"फसल निगरानी",droneCountStage:"पौध जाँच",droneHotspotStage:"तनाव पहचान",droneWaterStage:"नमी जाँच",droneSprayStage:"उपचार क्षेत्र",droneMapStage:"खेत रिकॉर्ड",
    droneDemoDisclaimer:"केवल डेमो उद्देश्य के लिए: यह चित्र ड्रोन निरीक्षण की अवधारणा दिखाता है। यह डैशबोर्ड किसी लाइव ड्रोन या इमेजिंग सेवा से जुड़ा नहीं है।"
  }
};
const machineryTranslations = {
  en: {
    farmMachinery:"Farm Machinery Guide",machineryEyebrow:"TOOLS FOR EVERY FARMING STAGE",machineryIntro:"Explore common machines by the farm job they help with.",
    tractorTitle:"Tractors and power tillers",tractorText:"Prepare land, pull compatible implements, and transport farm materials. Choose power and size for your acreage and terrain.",landPrep:"Land preparation",
    planterTitle:"Seed drills and planters",planterText:"Place seeds in rows at a more even spacing and depth. Match the machine to crop, seed size, and row spacing.",sowingStage:"Sowing",
    transplanterTitle:"Rice transplanters",transplanterText:"Help transplant nursery-raised rice seedlings in rows. Field leveling, seedling mat preparation, and operator training matter.",transplantStage:"Transplanting",
    sprayerTitle:"Crop sprayers",sprayerText:"Apply approved crop inputs with suitable nozzles and calibration. Wear protective equipment and follow the product label.",cropCareStage:"Crop care",
    irrigationTitle:"Pumps and irrigation systems",irrigationText:"Move water to fields using pumps, pipes, sprinklers, or drip lines selected for the water source and crop.",irrigationStage:"Irrigation",
    harvestTitle:"Harvesters and threshers",harvestText:"Harvest or separate grain from crop residue. Check crop compatibility, field access, moisture, and service availability.",harvestStage:"Harvest and post-harvest",
    machineryNotice:"Before hiring or buying, compare total cost, field size, crop suitability, fuel or power needs, safety features, spare parts, and local servicing. Check current assistance with your state agriculture department.",
    demoTag:"DEMO",viewDemo:"View demo ↗",demoPreviewBadge:"DEMO ILLUSTRATION",prevMachine:"← Previous",nextMachine:"Next →",
    machineryDemoDisclaimer:"Demo purpose only: this illustrative preview shows typical machinery usage. Compare local models, rental rates, and KVK guidance before hiring or buying."
  },
  te: {
    farmMachinery:"వ్యవసాయ యంత్రాల మార్గదర్శిని",machineryEyebrow:"వ్యవసాయంలోని ప్రతి దశకు యంత్రాలు",machineryIntro:"పొలంలో చేసే పనుల ఆధారంగా సాధారణ వ్యవసాయ యంత్రాలను తెలుసుకోండి.",
    tractorTitle:"ట్రాక్టర్లు, పవర్ టిల్లర్లు",tractorText:"భూమిని సిద్ధం చేయడానికి, పనిముట్లను లాగడానికి, వ్యవసాయ సరుకులను తరలించడానికి ఉపయోగపడతాయి. భూమి విస్తీర్ణం, నేల స్వభావానికి తగిన శక్తి, పరిమాణాన్ని ఎంచుకోండి.",landPrep:"భూమి తయారీ",
    planterTitle:"విత్తన డ్రిల్లు, విత్తే యంత్రాలు",planterText:"విత్తనాలను వరుసల్లో సమానమైన దూరం, లోతులో వేయడానికి సహాయపడతాయి. పంట, విత్తన పరిమాణం, వరుసల మధ్య దూరానికి సరిపోయే యంత్రాన్ని ఎంచుకోండి.",sowingStage:"విత్తడం",
    transplanterTitle:"వరి నాటే యంత్రాలు",transplanterText:"నారుమడిలో పెంచిన వరి నారును వరుసల్లో నాటడానికి సహాయపడతాయి. పొలం చదును, నారు మ్యాట్‌ తయారీ, ఆపరేటర్‌ శిక్షణ అవసరం.",transplantStage:"నాట్లు వేయడం",
    sprayerTitle:"పంట పిచికారీ యంత్రాలు",sprayerText:"సరైన నాజిల్‌, మోతాదు సర్దుబాటుతో అనుమతించిన పంట ఉత్పత్తులను పిచికారీ చేయండి. రక్షణ పరికరాలు ధరించి, ఉత్పత్తి లేబుల్‌ను పాటించండి.",cropCareStage:"పంట సంరక్షణ",
    irrigationTitle:"పంపులు, నీటిపారుదల వ్యవస్థలు",irrigationText:"నీటి వనరు, పంటకు తగిన పంపులు, పైపులు, స్ప్రింక్లర్లు లేదా డ్రిప్‌ లైన్లతో పొలానికి నీటిని అందించండి.",irrigationStage:"నీటిపారుదల",
    harvestTitle:"కోత యంత్రాలు, నూర్పిడి యంత్రాలు",harvestText:"పంటను కోయడానికి లేదా ధాన్యాన్ని అవశేషాల నుంచి వేరు చేయడానికి ఉపయోగిస్తారు. పంటకు అనుకూలత, పొలానికి చేరుకునే సౌలభ్యం, తేమ, మరమ్మతు సేవలను తనిఖీ చేయండి.",harvestStage:"కోత, కోత తర్వాత పనులు",
    machineryNotice:"యంత్రాన్ని అద్దెకు తీసుకునే లేదా కొనుగోలు చేసే ముందు మొత్తం ఖర్చు, పొలం విస్తీర్ణం, పంటకు అనుకూలత, ఇంధనం లేదా విద్యుత్ అవసరం, భద్రత, విడిభాగాలు, స్థానిక మరమ్మతు సేవలను పోల్చండి. ప్రస్తుత ప్రభుత్వ సహాయం కోసం రాష్ట్ర వ్యవసాయ శాఖను సంప్రదించండి.",
    demoTag:"డెమో",viewDemo:"డెమో చూడండి ↗",demoPreviewBadge:"డెమో నమూనా చిత్రం",prevMachine:"← ముందుది",nextMachine:"తర్వాతి →",
    machineryDemoDisclaimer:"డెమో ప్రయోజనం కోసం మాత్రమే: ఇది సాధారణ యంత్ర వినియోగాన్ని చూపే నమూనా చిత్రం. కొనుగోలు లేదా అద్దెకు ముందు స్థానిక మోడల్స్, అద్దె ధరలు, KVK సలహాను పరిశీలించండి."
  },
  hi: {
    farmMachinery:"कृषि मशीनरी मार्गदर्शिका",machineryEyebrow:"खेती के हर चरण के लिए उपकरण",machineryIntro:"खेती के काम के अनुसार आम कृषि मशीनों की जानकारी देखें।",
    tractorTitle:"ट्रैक्टर और पावर टिलर",tractorText:"भूमि तैयार करने, उपयुक्त औज़ार खींचने और कृषि सामग्री ढोने में उपयोगी। अपने खेत के क्षेत्रफल और जमीन के अनुसार शक्ति व आकार चुनें।",landPrep:"भूमि की तैयारी",
    planterTitle:"सीड ड्रिल और प्लांटर",planterText:"बीजों को कतारों में समान दूरी और गहराई पर बोने में मदद करते हैं। फसल, बीज के आकार और कतार की दूरी के अनुसार मशीन चुनें।",sowingStage:"बुवाई",
    transplanterTitle:"धान रोपाई मशीनें",transplanterText:"नर्सरी में तैयार धान के पौधों को कतारों में रोपने में मदद करती हैं। समतल खेत, पौधों की मैट और ऑपरेटर का प्रशिक्षण ज़रूरी है।",transplantStage:"रोपाई",
    sprayerTitle:"फसल स्प्रेयर",sprayerText:"उपयुक्त नोज़ल और सही कैलिब्रेशन से अनुमोदित कृषि उत्पादों का छिड़काव करें। सुरक्षा उपकरण पहनें और उत्पाद लेबल का पालन करें।",cropCareStage:"फसल देखभाल",
    irrigationTitle:"पंप और सिंचाई प्रणालियाँ",irrigationText:"जल स्रोत और फसल के अनुसार पंप, पाइप, स्प्रिंकलर या ड्रिप लाइन से खेत तक पानी पहुँचाएँ।",irrigationStage:"सिंचाई",
    harvestTitle:"हार्वेस्टर और थ्रेशर",harvestText:"फसल काटने या अनाज को अवशेष से अलग करने के लिए उपयोगी। फसल से मेल, खेत तक पहुँच, नमी और सेवा उपलब्धता जाँचें।",harvestStage:"कटाई और कटाई के बाद",
    machineryNotice:"किराये या खरीद से पहले कुल लागत, खेत का आकार, फसल के साथ अनुकूलता, ईंधन या बिजली की ज़रूरत, सुरक्षा, पुर्ज़े और स्थानीय मरम्मत सेवा की तुलना करें। सरकारी सहायता की जानकारी राज्य कृषि विभाग से लें।",
    demoTag:"डेमो",viewDemo:"डेमो देखें ↗",demoPreviewBadge:"डेमो चित्र",prevMachine:"← पिछला",nextMachine:"अगला →",
    machineryDemoDisclaimer:"केवल डेमो उद्देश्य के लिए: यह चित्र मशीन के सामान्य उपयोग को दिखाता है। किराये या खरीद से पहले स्थानीय मॉडल, दरें और KVK सलाह जाँचें।"
  }
};
function t(key){ return translations[currentLanguage]?.[key] || droneTranslations[currentLanguage]?.[key] || machineryTranslations[currentLanguage]?.[key] || translations.en[key] || droneTranslations.en[key] || machineryTranslations.en[key] || key; }
function applyLanguage(lang){
  currentLanguage = lang;
  document.documentElement.lang = lang === "te" ? "te" : lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value.includes("<br>")) el.innerHTML = value; else el.textContent = value;
  });
  renderAiSeasonPlan();
  if (typeof activeDemoPreview === "object" && activeDemoPreview) renderDemoModal(activeDemoPreview.group, activeDemoPreview.key);
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
    const weatherConditionsTe = { 0: "నిర్మలమైన ఆకాశం", 1: "ప్రధానంగా నిర్మలం", 2: "కొంత మేఘావృతం", 3: "మేఘావృతం", 45: "పొగమంచు", 48: "మంచు పొగమంచు", 51: "తేలికపాటి చిరుజల్లు", 53: "చిరుజల్లు", 55: "దట్టమైన చిరుజల్లు", 61: "తేలికపాటి వర్షం", 63: "వర్షం", 65: "భారీ వర్షం", 71: "తేలికపాటి మంచు", 73: "మంచు", 75: "భారీ మంచు", 80: "వర్షపు జల్లులు", 81: "వర్షపు జల్లులు", 82: "భారీ జల్లులు", 95: "ఉరుములతో కూడిన వర్షం", 96: "వడగళ్లతో ఉరుములతో కూడిన వర్షం", 99: "తీవ్రమైన ఉరుములతో కూడిన వర్షం" };
    latestWeather = { temp: Math.round(c.temperature_2m), wind: Math.round(c.wind_speed_10m), rain: c.precipitation, condition: info[0], conditionTe: weatherConditionsTe[c.weather_code] || "ప్రస్తుత వాతావరణ పరిస్థితులు", city: place.name };
    $("weatherTemp").textContent=`${latestWeather.temp}°`;
    $("weatherCondition").textContent=info[0];
    $("weatherPlace").textContent=`${place.name}${place.admin1?", "+place.admin1:""} · Feels like ${Math.round(c.apparent_temperature)}°C`;
    $("weatherSymbol").textContent=info[1];
    $("humidityValue").textContent=`${c.relative_humidity_2m}%`;
    $("windValue").textContent=`${latestWeather.wind} km/h`;
    $("rainValue").textContent=`${latestWeather.rain} mm`;
    if ($("weatherSummary")) $("weatherSummary").textContent=`${latestWeather.temp}° · ${info[0]}`;
    if ($("weatherLocation")) $("weatherLocation").textContent=place.name;
    $("weatherNote").textContent=`Updated from Open-Meteo. ${data.current.time.replace("T"," ")} local time.`;
    renderAiSeasonPlan();
  }catch(err){$("weatherCondition").textContent=err.message;$("weatherPlace").textContent="Check spelling or try a nearby city.";if ($("weatherSummary")) $("weatherSummary").textContent="Unavailable";}
}
$("weatherForm").addEventListener("submit",e=>{e.preventDefault();loadWeather($("weatherCity").value.trim());});
loadWeather("Visakhapatnam");

// Soil Health Card (SHC) 12-parameter summary & indicative fertilizer estimator.
const cropNpkPerAcreKg = {
  rice: { n: 48, p: 24, k: 20, label: "Rice (Paddy)" },
  wheat: { n: 48, p: 24, k: 16, label: "Wheat" },
  maize: { n: 50, p: 24, k: 20, label: "Maize" },
  cotton: { n: 40, p: 20, k: 20, label: "Cotton" },
  groundnut: { n: 10, p: 20, k: 16, label: "Groundnut" },
  vegetables: { n: 45, p: 25, k: 25, label: "Vegetables / Chilli" },
  pulses: { n: 10, p: 20, k: 10, label: "Pulses" }
};
function analyzeSoilHealth(showValidationToast = false) {
  const cropKey = $("soilCrop")?.value || "rice";
  const area = +($("soilArea")?.value || 1);
  const ph = +$("soilPh").value;
  const ec = +($("soilEc")?.value ?? 0.45);
  const oc = +($("soilOc")?.value ?? 0.55);
  const n = +$("soilN").value;
  const p = +$("soilP").value;
  const k = +$("soilK").value;
  const s = +($("soilS")?.value || 0);
  const zn = +($("soilZn")?.value || 0);
  const fe = +($("soilFe")?.value || 0);
  const cu = +($("soilCu")?.value || 0);
  const mn = +($("soilMn")?.value || 0);
  const b = +($("soilB")?.value || 0);

  if (ph < 0 || ph > 14 || area <= 0 || [ec, oc, n, p, k, s, zn, fe, cu, mn, b].some(v => v < 0 || Number.isNaN(v))) {
    if (showValidationToast) showToast("Enter valid non-negative Soil Health Card values.");
    return;
  }

  const band3 = (val, low, high) => val < low ? { label: "Low", tone: "low", factor: 1.25 } : val > high ? { label: "High", tone: "high", factor: 0.75 } : { label: "Medium", tone: "ok", factor: 1.0 };
  const microStatus = (val, threshold) => val < threshold ? { label: "Deficient", tone: "low" } : { label: "Sufficient", tone: "ok" };

  const phStatus = ph < 5.5 ? { label: "Acidic", tone: "low" } : ph > 7.5 ? { label: "Alkaline", tone: "low" } : { label: "Neutral", tone: "ok" };
  const ecStatus = ec <= 1.0 ? { label: "Normal", tone: "ok" } : ec <= 2.0 ? { label: "Slightly Saline", tone: "warn" } : { label: "High Salinity", tone: "low" };
  const ocStatus = band3(oc, 0.5, 0.75);
  const nStatus = band3(n, 280, 560);
  const pStatus = band3(p, 10, 25);
  const kStatus = band3(k, 110, 280);

  const checks = [
    { code: "pH", val: ph.toFixed(1), ...phStatus },
    { code: "EC", val: `${ec.toFixed(2)}`, ...ecStatus },
    { code: "OC", val: `${oc.toFixed(2)}%`, ...ocStatus },
    { code: "N", val: `${Math.round(n)}`, ...nStatus },
    { code: "P", val: `${Math.round(p)}`, ...pStatus },
    { code: "K", val: `${Math.round(k)}`, ...kStatus },
    { code: "S", val: `${s.toFixed(1)}`, ...microStatus(s, 10) },
    { code: "Zn", val: `${zn.toFixed(2)}`, ...microStatus(zn, 0.6) },
    { code: "Fe", val: `${fe.toFixed(1)}`, ...microStatus(fe, 4.5) },
    { code: "Cu", val: `${cu.toFixed(2)}`, ...microStatus(cu, 0.2) },
    { code: "Mn", val: `${mn.toFixed(1)}`, ...microStatus(mn, 2.0) },
    { code: "B", val: `${b.toFixed(2)}`, ...microStatus(b, 0.5) }
  ];

  const okCount = checks.filter(c => c.tone === "ok" || c.tone === "high").length;
  const score = Math.round((okCount / checks.length) * 100);
  const scoreTier = score >= 80 ? "Good / Balanced" : score >= 55 ? "Moderate · Needs Targeted Care" : "Needs Soil Correction";

  // Indicative NPK + product conversion (DAP: 18% N, 46% P2O5; Urea: 46% N; MOP: 60% K2O)
  const base = cropNpkPerAcreKg[cropKey] || cropNpkPerAcreKg.rice;
  const reqN = base.n * nStatus.factor * area;
  const reqP = base.p * pStatus.factor * area;
  const reqK = base.k * kStatus.factor * area;
  const dapKg = Math.round(reqP / 0.46);
  const nFromDap = dapKg * 0.18;
  const ureaKg = Math.max(0, Math.round((reqN - nFromDap) / 0.46));
  const mopKg = Math.round(reqK / 0.60);

  const notes = [];
  if (ph < 5.5) notes.push("Acidic pH: check with a soil lab whether agricultural lime is needed.");
  else if (ph > 7.5) notes.push("Alkaline pH: consider gypsum (if sodic) and organic matter, per lab advice.");
  if (ec > 1.0) notes.push("Elevated EC: ensure good drainage and avoid excess saline irrigation water.");
  if (oc < 0.5) notes.push("Low Organic Carbon: incorporate 4–5 tonnes/acre FYM, compost, or green manure.");
  const deficientMicro = checks.slice(6).filter(c => c.tone === "low").map(c => c.code);
  if (deficientMicro.length) notes.push(`Deficient secondary/micro-nutrients (${deficientMicro.join(", ")}): confirm targeted dosage with your KVK.`);
  if (!notes.length) notes.push("Core soil parameters are within standard ranges—maintain organic matter and split NPK doses.");

  const result = $("soilResult");
  result.innerHTML = `
    <div class="soil-report">
      <div class="soil-report-head">
        <div>
          <strong>SHC Summary · ${base.label} (${area} ac)</strong>
          <span>${scoreTier}</span>
        </div>
        <span class="soil-score-pill">${score}/100</span>
      </div>
      <div class="soil-param-grid">
        ${checks.map(c => `<div class="soil-chip is-${c.tone}"><b>${c.code}</b><span>${c.val}</span><small>${c.label}</small></div>`).join("")}
      </div>
      <div class="soil-fert-box">
        <strong>Indicative fertilizer estimate (${area} ac · educational only)</strong>
        <div class="soil-fert-row">
          <div><span>Urea</span><b>${ureaKg} kg</b></div>
          <div><span>DAP</span><b>${dapKg} kg</b></div>
          <div><span>MOP</span><b>${mopKg} kg</b></div>
        </div>
      </div>
      <ul class="soil-advice-list">${notes.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}
$("soilForm").addEventListener("submit", e => { e.preventDefault(); analyzeSoilHealth(true); });
$("soilCrop")?.addEventListener("change", () => analyzeSoilHealth(false));
analyzeSoilHealth(false);

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

// Telugu copies of every planner instruction, kept beside the English source text.
const aiPlanTelugu = {
  rice: {
    timing: { kharif: "జూన్–జూలైలో నాట్లు వేయండి; పంట కాలం 120–145 రోజులు.", rabi: "నీటి పారుదల సౌకర్యం ఉన్న ప్రాంతాల్లో నవంబర్–డిసెంబరులో విత్తండి.", zaid: "కాలువ లేదా బోరు నీరు ఖాయంగా ఉన్నచోట ఫిబ్రవరి–మార్చిలో నాట్లు వేయండి." },
    sowing: "నారుమడిలో విత్తే ముందు విత్తన శుద్ధి చేయండి. 21–25 రోజుల నారును 20×15 సెం.మీ. దూరంలో, ఒక్కో గుంతకు 2–3 మొక్కల చొప్పున నాటండి.",
    fertilizer: "దమ్ము చేసినప్పుడు భాస్వరం, పొటాష్‌తో పాటు నత్రజనిలో మూడో వంతు వేయండి. మిగిలిన నత్రజనిని పిలకలు వేసే దశలో (25 రోజులు), అంకురం ఏర్పడే దశలో (50 రోజులు) విడతలుగా వేయండి.",
    water: "పైరు పెరుగుదల దశలో 2–5 సెం.మీ. మేర పలుచని నీరు ఉంచండి. కోతకు 10 రోజుల ముందు పొలం నుంచి నీటిని తీసివేయండి.",
    harvest: "80–85% గింజలు బంగారు పసుపు రంగుకు మారినప్పుడు కోయండి. తేమ సుమారు 20%కి తగ్గాక కోసి, నిల్వకు ముందు ధాన్యాన్ని 12–14% తేమ వచ్చేలా ఆరబెట్టండి."
  },
  cotton: {
    timing: { kharif: "వర్షాకాలం ప్రారంభమైన జూన్–జూలైలో విత్తండి; పంట కాలం 150–170 రోజులు.", rabi: "దక్షిణ ప్రాంతాల నీటి పారుదల భూముల్లో మాత్రమే అక్టోబర్–నవంబరులో విత్తండి.", zaid: "ఎంచుకున్న నీటి వనరులు ఉన్న ప్రాంతాల్లో ఫిబ్రవరి–మార్చిలో వేసవి పత్తి సాగు చేయండి." },
    sowing: "ధృవీకరించిన శుద్ధి చేసిన విత్తనాలు వాడండి. మంచి వర్షం కురిసిన తర్వాత 90×60 సెం.మీ. ఎడంలో, 4–5 సెం.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో పశువుల ఎరువు, పూర్తి భాస్వరం వేయండి. విత్తిన 30, 60, 90 రోజులకు నత్రజని, పొటాష్‌ను విడతలుగా వేయండి.",
    water: "కొమ్మలు ఏర్పడటం, పూత, కాయ పెరుగుదల దశల్లో తేమపై శ్రద్ధ పెట్టండి. భారీ వర్షాలప్పుడు నీరు నిలవకుండా చూడండి.",
    harvest: "కాయలు పూర్తిగా పగిలి ఎండిన తర్వాత పొడి ఉదయాల్లో 2–3 విడతలుగా ఏరండి. పత్తిని తేమ తగలకుండా నిల్వ చేయండి."
  },
  groundnut: {
    timing: { kharif: "జూన్–జూలైలో విత్తండి; పంట కాలం 105–120 రోజులు.", rabi: "వర్షాలు తగ్గిన తర్వాత అక్టోబర్–నవంబరులో విత్తండి.", zaid: "నీటి పారుదల ఉన్నచోట జనవరి–ఫిబ్రవరిలో వేసవి పంటగా విత్తండి." },
    sowing: "విత్తనాలకు ట్రైకోడెర్మా లేదా సిఫారసు చేసిన శిలీంధ్రనాశినితో శుద్ధి చేయండి. మెత్తని నేలలో 30×10 సెం.మీ. ఎడం, 4–5 సెం.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో ప్రాథమిక ఎన్‌పీకే ఎరువులు వేయండి. కాయ ఊరే లేదా పూత దశలో హెక్టారుకు 500 కిలోల జిప్సం వేయండి.",
    water: "పూత, కాయ ఊరే దశ, కాయ పెరుగుదల సమయంలో నేలలో తేలికపాటి తేమ ఉంచండి. పొలంలో నీరు నిలవనివ్వకండి.",
    harvest: "ఆకులు పసుపు రంగుకు మారి, 75% కాయల లోపలి పెంకుపై ముదురు గీతలు కనిపించినప్పుడు కోయండి. అఫ్లాటాక్సిన్ నివారణకు కాయలను బాగా ఆరబెట్టండి."
  },
  maize: {
    timing: { kharif: "జూన్–జూలైలో విత్తండి; పంట కాలం 95–110 రోజులు.", rabi: "తేలికపాటి చలిలో అక్టోబర్–నవంబరులో సాగు చేయండి.", zaid: "ఫిబ్రవరి–మార్చిలో స్వల్పకాలిక సంకర రకాలు విత్తండి." },
    sowing: "అధిక వర్షపు నీటి నుంచి మొక్కలను కాపాడేందుకు బోదెలపై 60×20 సె.మీ. ఎడంలో, 3–5 సె.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో భాస్వరం, పొటాష్‌తో పాటు నత్రజనిలో మూడో వంతు వేయండి. మొక్క మోకాలి ఎత్తుకు చేరినప్పుడు (30 రోజులు), పూతకు ముందు (50 రోజులు) మిగిలిన నత్రజనిని వేయండి.",
    water: "మోకాలి ఎత్తు, కంకి వచ్చే దశ, పట్టుసీల ఏర్పడే దశ, గింజ నిండే దశల్లో నీటి కొరత రానివ్వకండి. బోదె–కాలువల ద్వారా నీరు బయటకు వెళ్లేలా చూడండి.",
    harvest: "పొత్తులు గోధుమ రంగులో ఎండినప్పుడు, గింజ అడుగున నల్ల పొర ఏర్పడినప్పుడు కోయండి. గింజలు వలిచి 12% తేమ వచ్చేలా ఆరబెట్టండి."
  },
  wheat: {
    timing: { kharif: "అధిక వర్షాలు ఉండే వర్షాకాలంలో గోధుమ సాగు సిఫారసు చేయబడదు.", rabi: "నవంబర్ 1–25 మధ్య విత్తండి; పంట కాలం 120–135 రోజులు.", zaid: "మార్చి తర్వాత ఆలస్యంగా విత్తడం వల్ల వచ్చే అధిక ఉష్ణ ఒత్తిడిని నివారించండి." },
    sowing: "జీరో టిల్ లేదా సీడ్ డ్రిల్‌తో వరుసల మధ్య 20–22.5 సె.మీ. ఎడం, 4–5 సె.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో పూర్తి భాస్వరం, పొటాష్‌, సగం నత్రజని వేయండి. తొలి నీటిపారుదల తర్వాత మిగిలిన నత్రజనిని పైపాటుగా వేయండి.",
    water: "వేరు కిరీటం ఏర్పడే దశలో (21 రోజులు), పిలకలు వేసే దశ, బూటింగ్, పూత, గింజ పాలుపోసే దశల్లో నీరు పెట్టండి.",
    harvest: "గడ్డి బంగారు రంగుకు మారి గింజలు గట్టిపడినప్పుడు (సుమారు 14% తేమ) కోయండి. గింజలు రాలిపోకుండా జాగ్రత్త వహించండి."
  },
  chickpea: {
    timing: { kharif: "భారీ వర్షాలు పడే ప్రాంతాల్లో శనగ సాగును నివారించండి.", rabi: "అక్టోబర్ మధ్య నుంచి నవంబర్ మధ్య వరకు విత్తండి; పంట కాలం 100–115 రోజులు.", zaid: "వేసవి అధిక ఉష్ణోగ్రతలకు శనగ అనుకూలం కాదు." },
    sowing: "రైజోబియంతో శుద్ధి చేసిన విత్తనాలు వాడండి. మిగులు నేల తేమలో 30×10 సె.మీ. ఎడంలో, 6–8 సె.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో ప్రాథమిక ఎన్‌పీకే, గంధకం వేయండి. అవసరమైతే పూతకు ముందు 2% యూరియా లేదా డీఏపీ ద్రావణాన్ని ఆకులపై పిచికారీ చేయండి.",
    water: "తక్కువ నీటితోనే పండుతుంది. కొమ్మలు వచ్చే, కాయలు నిండే దశల్లో 1–2 తేలికపాటి తడులు ఇవ్వండి; నీటిని ముంచెత్తకండి.",
    harvest: "80% కాయలు గడ్డి రంగులోకి మారి, లోపల గింజలు కదిలే శబ్దం వచ్చినప్పుడు కోయండి. నూర్పిడికి ముందు ఎండలో ఆరబెట్టండి."
  },
  greengram: {
    timing: { kharif: "జూన్–జూలైలో విత్తండి; పంట కాలం 65–75 రోజులు.", rabi: "నవంబర్–డిసెంబరులో వరి కోత తర్వాత మాగాణి పంటగా విత్తండి.", zaid: "మార్చి–ఏప్రిల్‌లో 60–65 రోజుల వేసవి పంటగా విత్తండి." },
    sowing: "రైజోబియంతో విత్తన శుద్ధి చేసి, వరుసల మధ్య 30 సె.మీ., మొక్కల మధ్య 10 సె.మీ. ఎడంలో, 3–4 సె.మీ. లోతులో విత్తండి.",
    fertilizer: "విత్తే సమయంలో ప్రాథమిక నత్రజని–భాస్వరం–పొటాష్‌ (20:40:20 కిలోలు/హెక్టారు) వేయండి. ఆకులు ఎక్కువగా పెరిగేలా అధిక నత్రజని వేయకండి.",
    water: "విత్తే ముందు ఒకసారి నీరు పెట్టండి. వేసవిలో పూత, కాయలు ఏర్పడే దశల్లో 2–3 తేలికపాటి తడులు ఇవ్వండి.",
    harvest: "నల్లగా లేదా గోధుమ రంగుకు మారిన పక్వ కాయలను రెండు విడతలుగా ఏరండి. లేదా 80% కాయలు పక్వానికి రాగానే గింజలు రాలకముందు కోయండి."
  },
  watermelon: {
    timing: { kharif: "కాయలు కాసే సమయంలో అధిక వర్షాలు ఉండే కాలాన్ని నివారించండి.", rabi: "వెచ్చని తీర ప్రాంతాల్లో నవంబర్–డిసెంబరులో సాగు చేయండి.", zaid: "జనవరి–మార్చి ప్రధాన వేసవి సాగు కాలం; పంట కాలం 80–95 రోజులు." },
    sowing: "మల్చింగ్‌తో తేమ, కలుపు నియంత్రణకు 2.0×0.6 మీ. దూరంలో గుంతలు లేదా ఎత్తైన మడులపై ఒక్కో చోట 2–3 విత్తనాలు వేయండి.",
    fertilizer: "గుంతల్లో బాగా కుళ్లిన పశువుల ఎరువు, ప్రాథమిక ఎన్‌పీకే వేయండి. తీగ పెరుగుదల, కాయలు కాసే సమయంలో నత్రజని, పొటాష్‌ను వారానికోసారి ఇవ్వండి.",
    water: "పూత, కాయల పరిమాణం పెరిగే దశల్లో ప్రతి 2–3 రోజులకు బిందు సేద్యం చేయండి. తీపి పెరగడానికి కోతకు 7 రోజుల ముందు నీటిని తగ్గించండి.",
    harvest: "కాయ దగ్గరి పిలక ఎండినప్పుడు, నేలను తాకే వైపు మచ్చ క్రీమ్‌ పసుపు రంగులోకి మారినప్పుడు, తట్టినప్పుడు మందమైన శబ్దం వచ్చినప్పుడు కోయండి."
  }
};

function buildWeatherAlert(season, language = "en"){
  if (language === "te") {
    const seasonAlert = {
      kharif: "అకస్మాత్తుగా భారీ వర్షాలు పడితే పొలపు గట్లు, మురుగు కాలువలు తెరిచి ఉంచండి; వర్షానికి ముందు మందులు పిచికారీ చేయకండి.",
      rabi: "ఉదయం మంచు, పొగమంచు, ఆకస్మిక చలిని గమనించండి; మంచు లేదా చలి హెచ్చరికలప్పుడు తేలికగా నీరు పెట్టండి.",
      zaid: "మధ్యాహ్నం వేడి, పొడి గాలులు ఉండవచ్చు; ఉదయం లేదా సాయంత్రం నీరు పెట్టి, మల్చింగ్‌ వాడండి."
    }[season];
    if (!latestWeather) return seasonAlert;
    const liveParts = [`ప్రస్తుత వాతావరణం (${latestWeather.city}: ${latestWeather.temp}°C, ${latestWeather.conditionTe})`];
    if (latestWeather.rain > 0) liveParts.push("వర్షం పడుతోంది — పిచికారీ వాయిదా వేసి, నీరు బయటకు వెళ్లేలా చూడండి.");
    else if (latestWeather.temp >= 35) liveParts.push("ఎండ ఎక్కువగా ఉంది — ఉదయం 9 గంటలకు ముందుగా లేదా సాయంత్రం 5 తర్వాత నీరు పెట్టండి.");
    else if (latestWeather.wind >= 20) liveParts.push("గాలి వేగంగా ఉంది — మందు పక్క పంటలకు కొట్టుకుపోకుండా పిచికారీ చేయకండి.");
    else liveParts.push("పొలంలో పనులు చేసేందుకు వాతావరణం అనుకూలంగా ఉంది.");
    return `${liveParts.join(" · ")} ${seasonAlert}`;
  }
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
  const soilType = $("aiSoilType").value;
  const waterAvailability = $("aiWaterAvailability").value;
  const plan = aiCropPlans[cropKey] || aiCropPlans.rice;
  const language = currentLanguage === "te" ? "te" : "en";
  const soilNames = language === "te"
    ? { alluvial: "ఒండ్రు నేల", black: "నల్ల నేల", red: "ఎర్ర నేల", sandy: "ఇసుక నేల", clay: "బంకమట్టి నేల" }
    : { alluvial: "Alluvial", black: "Black", red: "Red", sandy: "Sandy", clay: "Clay" };
  const waterNames = language === "te"
    ? { high: "సమృద్ధిగా / హామీతో", medium: "మధ్యస్థం", low: "పరిమితం" }
    : { high: "Good / assured", medium: "Moderate", low: "Limited" };
  $("aiPlanContext").textContent = language === "te"
    ? `ఎంచుకున్న వివరాలు · నేల రకం: ${soilNames[soilType]} · నీటి లభ్యత: ${waterNames[waterAvailability]}`
    : `Selected conditions · Soil type: ${soilNames[soilType]} · Water availability: ${waterNames[waterAvailability]}`;
  const titles = aiStepLabels[language];
  const localizedPlan = language === "te" ? aiPlanTelugu[cropKey] : null;
  const items = [
    (localizedPlan?.timing[season] || plan.timing[season]) || (localizedPlan?.timing.kharif || plan.timing.kharif),
    localizedPlan?.sowing || plan.sowing,
    localizedPlan?.fertilizer || plan.fertilizer,
    localizedPlan?.water || plan.water,
    buildWeatherAlert(season, language),
    localizedPlan?.harvest || plan.harvest
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
$("aiSoilType")?.addEventListener("change", renderAiSeasonPlan);
$("aiWaterAvailability")?.addEventListener("change", renderAiSeasonPlan);
renderAiSeasonPlan();
renderTeluguDailyAdvice();

// The image-analysis API must be backed by a validated plant-health model.
const plantAnalysisEndpoint = "/api/analyze-plant";
let currentPlantImageUrl = "";
const demoPlantAnalyses = [
  {
    disease: "Early Leaf Spot (Sample Demo Case)",
    symptoms: [
      "Small circular brown-to-dark spots on older lower leaves",
      "Faint yellow halo around individual lesions",
      "Mild leaf yellowing near spot clusters"
    ],
    problem: "Sample illustration of a common foliar fungal pattern favored by humid morning dew and overhead irrigation.",
    severity: "Low to Moderate (Sample Demo)",
    solutions: [
      "Remove and dispose of heavily spotted lower leaves away from the field.",
      "Avoid overhead watering late in the evening to reduce leaf wetness.",
      "Improve crop spacing and airflow; consult a local KVK or agri-officer before choosing any fungicide."
    ],
    guidance: {
      en: [
        "Inspect 10–15 plants across the plot to see if spots are spreading to upper leaves.",
        "Keep field drainage clear and confirm exact treatment dosage with your local agriculture officer."
      ],
      te: [
        "పొలంలో 10–15 మొక్కలను పరిశీలించి మచ్చలు పై ఆకులకు వ్యాపిస్తున్నాయో లేదో చూడండి.",
        "సాయంత్రం వేళల్లో ఆకులపై నీరు చల్లడం తగ్గించి, మందు వాడే ముందు స్థానిక KVK లేదా వ్యవసాయ అధికారి సలహా తీసుకోండి."
      ]
    },
    confidence: 0.84
  },
  {
    disease: "Sucking Pest / Leaf Curl Stress (Sample Demo Case)",
    symptoms: [
      "Upward or downward curling along tender leaf margins",
      "Slightly puckered new shoots with tiny pale speckles",
      "Sticky residue or ants noticed near young stems"
    ],
    problem: "Sample illustration of sap-feeding insect stress (such as aphids, thrips, or whiteflies) on young foliage.",
    severity: "Moderate (Sample Demo)",
    solutions: [
      "Check the underside of curled leaves with a hand lens for small insects.",
      "Install yellow/blue sticky traps (6–8 per acre) for early monitoring.",
      "Use neem-based botanical spray or KVK-recommended control during calm morning/evening hours."
    ],
    guidance: {
      en: [
        "Avoid excess nitrogen top-dressing, which encourages soft growth preferred by sucking pests.",
        "Do not spray right before rain or during strong afternoon winds."
      ],
      te: [
        "ముడుచుకున్న ఆకుల అడుగు భాగాన్ని పరిశీలించి రసం పీల్చే పురుగులను తనిఖీ చేయండి.",
        "అధిక యూరియా వాడకాన్ని తగ్గించి, స్థానిక వ్యవసాయ అధికారి సూచించిన పిచికారీ పద్ధతిని పాటించండి."
      ]
    },
    confidence: 0.79
  },
  {
    disease: "Nutrient Deficiency / Interveinal Chlorosis (Sample Demo Case)",
    symptoms: [
      "Yellowing between green leaf veins on older or middle leaves",
      "Uniform pale tint without wet lesions or insect chewing holes",
      "Slower vegetative vigor in patchy field pockets"
    ],
    problem: "Sample illustration of possible micronutrient or macronutrient imbalance (such as Magnesium, Zinc, or Nitrogen) linked to soil pH.",
    severity: "Low (Sample Demo)",
    solutions: [
      "Compare symptoms with your recent Soil Health Card pH and nutrient readings.",
      "Apply well-decomposed compost or targeted foliar nutrition only if confirmed.",
      "Verify soil moisture—both waterlogging and drought can reduce root nutrient uptake."
    ],
    guidance: {
      en: [
        "Check soil pH first, as extreme pH can lock out nutrients even when present in soil.",
        "Use the Soil health calculator above or visit your nearby soil testing lab."
      ],
      te: [
        "ముందుగా నేల pH మరియు సాయిల్ హెల్త్ కార్డ్ వివరాలను సరిచూసుకోండి.",
        "నీరు నిల్వ ఉండకుండా చూసి, వ్యవసాయ అధికారి సూచన మేరకు పోషకాలను అందించండి."
      ]
    },
    confidence: 0.81
  }
];
function getDemoPlantAnalysis(file) {
  const seed = (file?.name?.length || 0) + (file?.size || 0);
  return demoPlantAnalyses[seed % demoPlantAnalyses.length];
}
function addPestResultSection(container, title, value) {
  if (!value) return;
  const section = document.createElement("section");
  section.className = "pest-result-section";
  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading);
  if (Array.isArray(value)) {
    const list = document.createElement("ul");
    value.forEach(text => { const li = document.createElement("li"); li.textContent = text; list.append(li); });
    section.append(list);
  } else {
    const text = document.createElement("p");
    text.textContent = value;
    section.append(text);
  }
  container.append(section);
}
function showPestMessage(message, state = "") {
  const result = $("pestResult");
  result.replaceChildren();
  result.classList.toggle("is-loading", state === "loading");
  const text = document.createElement("p");
  text.className = "pest-status";
  text.setAttribute("role", state === "error" ? "alert" : "status");
  text.textContent = message;
  result.append(text);
}
function renderPlantAnalysis(data, isDemo = false) {
  const result = $("pestResult");
  result.replaceChildren();
  result.classList.remove("is-loading");
  if (isDemo) {
    const notice = document.createElement("div");
    notice.className = "pest-demo-notice";
    notice.setAttribute("role", "status");
    const badge = document.createElement("strong");
    badge.textContent = "DEMO SAMPLE PREVIEW";
    const copy = document.createElement("span");
    copy.textContent = "Backend (/api/analyze-plant) is not connected on this static server, so a sample report is shown for demo preview. Always verify real symptoms with a KVK or agriculture officer.";
    notice.append(badge, copy);
    result.append(notice);
  }
  addPestResultSection(result, "Disease or pest detected", data.disease);
  addPestResultSection(result, "Symptoms observed", data.symptoms);
  addPestResultSection(result, "What may be happening", data.problem);
  addPestResultSection(result, "Severity", data.severity);
  addPestResultSection(result, "Recommended prevention and treatment", data.solutions);
  addPestResultSection(result, "Farmer guidance · English", data.guidance?.en);
  addPestResultSection(result, "రైతులకు సూచనలు · తెలుగు", data.guidance?.te);
  if (data.confidence != null) addPestResultSection(result, "Model confidence", `${Math.round(Number(data.confidence) * 100)}%`);
  if (!result.children.length) showPestMessage("The analysis service returned no usable findings. Please try another clear photo.", "error");
}
async function analyzePlantImage(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) return showPestMessage("Please choose an image file.", "error");
  if (file.size > 10 * 1024 * 1024) return showPestMessage("Please choose an image smaller than 10 MB.", "error");
  if (currentPlantImageUrl) URL.revokeObjectURL(currentPlantImageUrl);
  currentPlantImageUrl = URL.createObjectURL(file);
  $("plantImage").src = currentPlantImageUrl;
  $("plantImagePreview").hidden = false;
  showPestMessage("Analyzing the photo…", "loading");
  const formData = new FormData();
  formData.append("image", file, file.name || "plant-photo.jpg");
  try {
    const response = await fetch(plantAnalysisEndpoint, { method: "POST", body: formData });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 404 || response.status === 405 || response.status === 501) {
        renderPlantAnalysis(getDemoPlantAnalysis(file), true);
        return;
      }
      throw new Error(payload.error || `Analysis failed (${response.status}).`);
    }
    renderPlantAnalysis(payload.result || payload);
  } catch (error) {
    if (error instanceof TypeError) {
      renderPlantAnalysis(getDemoPlantAnalysis(file), true);
      return;
    }
    showPestMessage(error.message || "Could not analyze this photo. Please try again.", "error");
  }
}
$("plantCameraInput").addEventListener("change", e => { analyzePlantImage(e.target.files[0]); e.target.value = ""; });
$("plantGalleryInput").addEventListener("change", e => { analyzePlantImage(e.target.files[0]); e.target.value = ""; });
$("removePlantImage").addEventListener("click", () => {
  if (currentPlantImageUrl) URL.revokeObjectURL(currentPlantImageUrl);
  currentPlantImageUrl = "";
  $("plantImage").removeAttribute("src");
  $("plantImagePreview").hidden = true;
  showPestMessage("Choose a photo to see the analysis here.");
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
  $("authMessage").textContent="Demo profile created on this device.";showToast("Welcome to RythuMitra, "+name+"!");
 }else{
  const user=users[mobile];if(!user||user.password!==password){$("authMessage").textContent="Mobile number or password is incorrect.";return;}
  localStorage.setItem("smartKrushiUser",JSON.stringify({name:user.name,mobile:user.mobile}));$("authMessage").textContent="You are signed in on this device.";showToast("Welcome back, "+user.name+"!");
 }
 updateAccount();setTimeout(()=>$("authModal").hidden=true,700);
});
$("logoutButton").addEventListener("click",()=>{localStorage.removeItem("smartKrushiUser");updateAccount();$("authMessage").textContent="You have logged out.";showToast("Logged out.");});
updateAccount();

// Latest daily mandi observations sourced from AGMARKNET via a public API mirror.
const mandiApiBase = "https://api.dharun.dev/v1/mandi";
let marketRequestNumber = 0;
function marketField(record, ...names) {
  for (const name of names) {
    if (record[name] != null && record[name] !== "") return record[name];
  }
  const normalized = Object.fromEntries(Object.entries(record).map(([key, value]) => [key.toLowerCase().replace(/[^a-z0-9]/g, ""), value]));
  for (const name of names) {
    const value = normalized[name.toLowerCase().replace(/[^a-z0-9]/g, "")];
    if (value != null && value !== "") return value;
  }
  return "—";
}
function formatMarketPrice(value) {
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(number) ? `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(number)}` : "—";
}
function renderMarketPriceRows(records) {
  const body = $("marketPriceRows");
  body.replaceChildren();
  if (!records.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "No reported prices found for this selection. Try another commodity or state.";
    row.append(cell);
    body.append(row);
    return;
  }
  records.forEach(record => {
    const row = document.createElement("tr");
    const values = [
      marketField(record, "market", "market_name"),
      marketField(record, "district", "district_name"),
      marketField(record, "variety"),
      formatMarketPrice(marketField(record, "min_price", "min_price_rs_qtl", "min_price_rs_quintal")),
      formatMarketPrice(marketField(record, "modal_price", "modal_price_rs_qtl", "modal_price_rs_quintal")),
      formatMarketPrice(marketField(record, "max_price", "max_price_rs_qtl", "max_price_rs_quintal")),
      marketField(record, "arrival_date", "price_date", "date")
    ];
    values.forEach(value => { const cell = document.createElement("td"); cell.textContent = value; row.append(cell); });
    body.append(row);
  });
}
async function loadMarketPrices() {
  const requestNumber = ++marketRequestNumber;
  const state = $("marketState").value;
  const commodity = $("marketCommodity").value;
  const status = $("marketPriceStatus");
  const button = $("marketSearchButton");
  status.textContent = "Loading reported mandi prices…";
  button.disabled = true;
  const query = new URLSearchParams({ state, commodity, limit: "100" });
  try {
    const response = await fetch(`${mandiApiBase}?${query}`);
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error?.message || "Market price service is unavailable.");
    if (requestNumber !== marketRequestNumber) return;
    const records = Array.isArray(payload.data) ? payload.data : [];
    renderMarketPriceRows(records);
    const reportDate = records.length ? marketField(records[0], "arrival_date", "price_date", "date") : "—";
    status.textContent = records.length
      ? `${records.length} price record(s) · ${state} · ${commodity} · Latest report date: ${reportDate} · Prices in ₹ per quintal`
      : `No recent market reports found for ${commodity} in ${state}.`;
  } catch (error) {
    if (requestNumber !== marketRequestNumber) return;
    renderMarketPriceRows([]);
    status.textContent = `${error.message || "Could not load market prices."} Check your internet connection or try again.`;
  } finally {
    if (requestNumber === marketRequestNumber) button.disabled = false;
  }
}
$("marketPriceForm").addEventListener("submit", event => { event.preventDefault(); loadMarketPrices(); });
$("marketState").addEventListener("change", loadMarketPrices);
$("marketCommodity").addEventListener("change", loadMarketPrices);
loadMarketPrices();

// Shared demo image preview modal for Farm Machinery & Drone Features.
const demoPreviewCatalog = {
  machinery: {
    disclaimerKey: "machineryDemoDisclaimer",
    order: ["tractor", "planter", "transplanter", "sprayer", "irrigation", "harvester"],
    items: {
      tractor: {
        image: "assets/machinery-tractor.jpg",
        titleKey: "tractorTitle",
        textKey: "tractorText",
        stageKey: "landPrep",
        tips: {
          en: ["Suitable for ploughing, rotavating, harrowing, and farm trailer transport.", "Match tractor HP or power tiller width to plot size and soil hardness."],
          te: ["దుక్కి దున్నడం, రోటావేటర్‌తో మట్టి పొడి చేయడం, ట్రాలీ రవాణాకు అనుకూలం.", "పొలం పరిమాణం, నేల గట్టిదనానికి తగిన హార్స్‌పవర్ లేదా పవర్ టిల్లర్ ఎంచుకోండి."],
          hi: ["जुताई, रोटावेटर से मिट्टी भुरभुरी करने और ट्रॉली ढुलाई के लिए उपयोगी।", "खेत के आकार और मिट्टी के अनुसार सही हॉर्सपावर या पावर टिलर चुनें।"]
        }
      },
      planter: {
        image: "assets/machinery-planter.jpg",
        titleKey: "planterTitle",
        textKey: "planterText",
        stageKey: "sowingStage",
        tips: {
          en: ["Maintains uniform row-to-row spacing and seed depth for even germination.", "Calibrate seed and fertilizer metering plates before starting the field."],
          te: ["వరుసల మధ్య సమాన దూరం, లోతుతో విత్తనాలు నాటి మంచి మొలకెత్తడానికి తోడ్పడుతుంది.", "పొలంలో ప్రారంభించే ముందు విత్తనం, ఎరువుల మోతాదును సరిచేయండి."],
          hi: ["समान कतार दूरी और गहराई से अंकुरण बेहतर होता है और बीज की बचत होती है।", "बुवाई शुरू करने से पहले बीज और खाद की दर कैलिब्रेट करें।"]
        }
      },
      transplanter: {
        image: "assets/machinery-transplanter.jpg",
        titleKey: "transplanterTitle",
        textKey: "transplanterText",
        stageKey: "transplantStage",
        tips: {
          en: ["Reduces transplanting labor and keeps uniform hill spacing in paddy.", "Requires well-leveled puddled fields with shallow water and mat-type nursery."],
          te: ["వరి నాట్ల కూలీ ఖర్చును తగ్గించి, మొక్కల మధ్య సమాన దూరాన్ని ఉంచుతుంది.", "చదును చేసిన బురద పొలం, తక్కువ నీరు, మ్యాట్ నారుమడి అవసరం."],
          hi: ["धान रोपाई में श्रम बचाता है और पौधों की समान दूरी बनाए रखता है।", "समतल कीचड़ वाले खेत, हल्के पानी और मैट नर्सरी की ज़रूरत होती है।"]
        }
      },
      sprayer: {
        image: "assets/machinery-sprayer.jpg",
        titleKey: "sprayerTitle",
        textKey: "sprayerText",
        stageKey: "cropCareStage",
        tips: {
          en: ["Use flat-fan or hollow-cone nozzles depending on herbicide or foliar spray.", "Spray during calm morning/evening hours and wear gloves, mask, and goggles."],
          te: ["కలుపు లేదా పైరు మందులను బట్టి సరైన నాజిల్ ఎంచుకుని సమానంగా పిచికారీ చేయండి.", "గాలి తక్కువగా ఉన్న ఉదయం లేదా సాయంత్రం వేళల్లో రక్షణ కవచాలు ధరించి పిచికారీ చేయండి."],
          hi: ["खरपतवारनाशी या पत्तियों के छिड़काव के अनुसार सही नोज़ल चुनें।", "कम हवा में सुबह या शाम को सुरक्षा गियर पहनकर ही छिड़काव करें।"]
        }
      },
      irrigation: {
        image: "assets/machinery-irrigation.jpg",
        titleKey: "irrigationTitle",
        textKey: "irrigationText",
        stageKey: "irrigationStage",
        tips: {
          en: ["Drip and sprinkler systems reduce water evaporation and deliver uniform moisture.", "Clean inline filters and check pressure gauges regularly to avoid clogging."],
          te: ["డ్రిప్, స్ప్రింక్లర్ వ్యవస్థలు నీటి వృథాను తగ్గించి మొక్కలకు సమానంగా తేమను అందిస్తాయి.", "అడ్డుపడకుండా ఉండేందుకు ఫిల్టర్లను, ప్రెషర్ గేజ్‌లను తరచూ శుభ్రం చేయండి."],
          hi: ["ड्रिप और स्प्रिंकलर सिंचाई पानी की बचत कर फसलों को समान नमी देती है।", "जाम होने से बचाने के लिए फ़िल्टर और प्रेशर की नियमित जाँच करें।"]
        }
      },
      harvester: {
        image: "assets/machinery-harvester.jpg",
        titleKey: "harvestTitle",
        textKey: "harvestText",
        stageKey: "harvestStage",
        tips: {
          en: ["Cuts, threshes, and cleans grain quickly when crop reaches harvest moisture.", "Check field dryness and cutter-bar height to minimize grain loss."],
          te: ["పంట సరైన తేమకు చేరినప్పుడు వేగంగా కోత, నూర్పిడి, శుభ్రపరచడం పూర్తి చేస్తుంది.", "గింజల నష్టం తగ్గించేందుకు పొలం తేమ, కట్టర్ ఎత్తును సరిచూసుకోండి."],
          hi: ["सही नमी पर फसल की कटाई, गहाई और सफाई तेज़ी से पूरी करता है।", "दाने झड़ने से बचाने के लिए खेत की नमी और कटर ऊँचाई जाँचें।"]
        }
      }
    }
  },
  drone: {
    disclaimerKey: "droneDemoDisclaimer",
    order: ["health", "count", "hotspot", "water", "spray", "map"],
    items: {
      health: {
        image: "assets/drone-health.jpg",
        titleKey: "droneHealthTitle",
        textKey: "droneHealthText",
        stageKey: "droneHealthStage",
        tips: {
          en: ["Compare canopy vigor across large plots in minutes before walking the field.", "Follow up pale-green patches with leaf checks and soil nutrient testing."],
          te: ["పొలం మొత్తం తిరిగే ముందు కొన్ని నిమిషాల్లోనే పంట పచ్చదనం తేడాలను గుర్తించవచ్చు.", "లేత ఆకుపచ్చ భాగాలను ఆకులు, నేల పరీక్షలతో ప్రత్యక్షంగా తనిఖీ చేయండి."],
          hi: ["पूरे खेत में चलने से पहले कुछ मिनटों में फसल की हरियाली का अंतर देखें।", "हल्के हरे हिस्सों की पत्तियों और मिट्टी की जाँच करें।"]
        }
      },
      count: {
        image: "assets/drone-count.jpg",
        titleKey: "droneCountTitle",
        textKey: "droneCountText",
        stageKey: "droneCountStage",
        tips: {
          en: ["Spot uneven emergence or missing rows early enough for timely gap filling.", "Best captured 10–20 days after sowing or transplanting when rows are distinct."],
          te: ["విత్తనం నాటిన 10–20 రోజుల్లోనే ఖాళీ వరుసలను గుర్తించి మళ్లీ నాటుకోవచ్చు.", "వరుసలు స్పష్టంగా కనిపించే ప్రారంభ దశలో చిత్రాలు తీస్తే ఖచ్చితంగా ఉంటుంది."],
          hi: ["बुवाई या रोपाई के 10–20 दिनों में खाली जगहों की पहचान कर समय पर गैप फिलिंग करें।", "शुरुआती अवस्था में कतारें साफ दिखने पर सटीक जाँच होती है।"]
        }
      },
      hotspot: {
        image: "assets/drone-hotspot.jpg",
        titleKey: "droneHotspotTitle",
        textKey: "droneHotspotText",
        stageKey: "droneHotspotStage",
        tips: {
          en: ["Pinpoint localized yellowing or wilting before pests or disease spread further.", "Inspect leaf undersides in flagged hotspots or upload a close photo in the Pest guide."],
          te: ["చీడపీడలు లేదా తెగుళ్లు విస్తరించకముందే ప్రభావిత భాగాలను త్వరగా గుర్తించవచ్చు.", "గుర్తించిన ప్రాంతాల్లో ఆకుల అడుగు భాగాన్ని చూడండి లేదా చీడపీడల గైడ్‌లో ఫోటో అప్‌లోడ్ చేయండి."],
          hi: ["कीट या रोग फैलने से पहले प्रभावित हिस्सों की तुरंत पहचान करें।", "चिह्नित जगह पर पत्तियों के नीचे जाँचें या कीट मार्गदर्शिका में फोटो अपलोड करें।"]
        }
      },
      water: {
        image: "assets/drone-irrigation.jpg",
        titleKey: "droneWaterTitle",
        textKey: "droneWaterText",
        stageKey: "droneWaterStage",
        tips: {
          en: ["Identify dry edges, blocked emitters, or waterlogged low spots across the field.", "Schedule irrigation and clear drainage channels based on on-ground moisture checks."],
          te: ["పొలం అంచుల్లో ఎండిన భాగాలు, అడ్డుపడిన డ్రిప్పర్లు లేదా నీరు నిలిచే లోతట్టు ప్రాంతాలను గుర్తించండి.", "నేల తేమను సరిచూసి నీటిపారుదల, మురుగునీటి కాలువలను సర్దుబాటు చేయండి."],
          hi: ["खेत के सूखे किनारों, बंद ड्रिपर या जलभराव वाले निचले हिस्सों की पहचान करें।", "ज़मीनी नमी जाँचकर सिंचाई और जल निकासी की योजना बनाएँ।"]
        }
      },
      spray: {
        image: "assets/drone-spray.jpg",
        titleKey: "droneSprayTitle",
        textKey: "droneSprayText",
        stageKey: "droneSprayStage",
        tips: {
          en: ["Target only affected strips instead of blanket spraying the entire field.", "Always follow approved drone-spray labels, wind limits, and local aviation rules."],
          te: ["పొలం మొత్తం కాకుండా అవసరం ఉన్న భాగాల్లోనే పిచికారీ ప్రణాళిక చేయవచ్చు.", "అనుమతించిన మందుల లేబుల్, గాలి వేగం, స్థానిక డ్రోన్ నియమాలను తప్పనిసరిగా పాటించండి."],
          hi: ["पूरे खेत के बजाय केवल प्रभावित हिस्सों में लक्षित छिड़काव की योजना बनाएँ।", "अनुमोदित लेबल, हवा की गति और स्थानीय ड्रोन नियमों का पालन करें।"]
        }
      },
      map: {
        image: "assets/drone-map.jpg",
        titleKey: "droneMapTitle",
        textKey: "droneMapText",
        stageKey: "droneMapStage",
        tips: {
          en: ["Keep season-by-season visual maps of bunds, channels, and crop growth stages.", "Helpful for comparing yield outcomes across plots and crop varieties."],
          te: ["గట్లు, కాలువలు, పంట దశల చిత్రాలను సీజన్ వారీగా పోల్చి చూడటానికి ఉపయోగపడుతుంది.", "వేర్వేరు మడులు, రకాల దిగుబడి ఫలితాలను అంచనా వేయడానికి సహాయపడుతుంది."],
          hi: ["मेड़, नालियों और फसल वृद्धि के मौसम-वार दृश्य रिकॉर्ड सहेजकर रखें।", "विभिन्न प्लॉट और किस्मों की उपज तुलना करने में सहायक।"]
        }
      }
    }
  }
};
let activeDemoPreview = null;
function renderDemoModal(group, key) {
  const catalog = demoPreviewCatalog[group];
  const item = catalog?.items?.[key];
  if (!item) return;
  activeDemoPreview = { group, key };
  const title = t(item.titleKey);
  $("machineryModalImg").src = item.image;
  $("machineryModalImg").alt = title;
  $("machineryModalStage").textContent = t(item.stageKey);
  $("machineryModalTitle").textContent = title;
  $("machineryModalDesc").textContent = t(item.textKey);
  if ($("machineryModalDisclaimer")) $("machineryModalDisclaimer").textContent = t(catalog.disclaimerKey);
  const tipsList = $("machineryModalTips");
  tipsList.replaceChildren();
  const tips = item.tips[currentLanguage] || item.tips.en;
  tips.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    tipsList.append(li);
  });
}
function openDemoModal(group, key) {
  renderDemoModal(group, key);
  $("machineryModal").hidden = false;
}
function closeDemoModal() {
  $("machineryModal").hidden = true;
  activeDemoPreview = null;
}
function stepDemoModal(delta) {
  if (!activeDemoPreview) return;
  const order = demoPreviewCatalog[activeDemoPreview.group]?.order || [];
  if (!order.length) return;
  const currentIdx = order.indexOf(activeDemoPreview.key);
  const nextIdx = (currentIdx + delta + order.length) % order.length;
  renderDemoModal(activeDemoPreview.group, order[nextIdx]);
}
function bindDemoCards(selector, group, attr) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener("click", () => openDemoModal(group, card.dataset[attr]));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDemoModal(group, card.dataset[attr]);
      }
    });
  });
}
bindDemoCards(".machinery-card[data-machinery]", "machinery", "machinery");
bindDemoCards(".drone-feature-card[data-drone]", "drone", "drone");
$("closeMachineryModal")?.addEventListener("click", closeDemoModal);
$("machineryModal")?.addEventListener("click", e => {
  if (e.target === $("machineryModal")) closeDemoModal();
});
$("machineryPrevBtn")?.addEventListener("click", () => stepDemoModal(-1));
$("machineryNextBtn")?.addEventListener("click", () => stepDemoModal(1));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && $("machineryModal") && !$("machineryModal").hidden) closeDemoModal();
});

// Mobile navigation.
$("menuButton").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
$("closeSidebar")?.addEventListener("click",()=>$("sidebar").classList.remove("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{
 const target=link.getAttribute("href");
 document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===target));
 $("sidebar").classList.remove("open");
}));
