
const questionsAndAnswers = [
    { question: "What is your name?", answer: "I am your Healthify chatbot." },
    { question: "How can I use this chatbot?", answer: "Click or type any question to get an answer!" },
    { question: "What can you do?", answer: "I can provide answers to your predefined questions." },
    { question: "Who created you?", answer: "I was created by a team of talented developers!" },
    { question: "How to contact support?", answer: "You can email us at fahad@example.com." }
];


const questionList = document.getElementById('questionList');
questionsAndAnswers.forEach((item) => {
    const button = document.createElement('button');
    button.textContent = item.question;
    button.addEventListener('click', () => displayConversation(item.question, item.answer));
    questionList.appendChild(button);
});


function displayConversation(question, answer) {
    const chatbotBody = document.getElementById('chatbotBody');

    
    const userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = question;
    chatbotBody.appendChild(userMessage);

    
    const botMessage = document.createElement('p');
    botMessage.className = 'bot-message';
    botMessage.textContent = answer;
    chatbotBody.appendChild(botMessage);

   
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}


function handleCustomQuestion() {
    const userInput = document.getElementById('userInput');
    const question = userInput.value.trim();

    if (question) {
        
        displayConversation(question, getBotResponse(question));
        userInput.value = ''; 
    }
}

function getBotResponse(question) {
    const lowerCaseQuestion = question.toLowerCase();

    // Common greetings and polite phrases
    if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
        return "Hello! How can I assist you with healthcare-related queries today?";
    } else if (lowerCaseQuestion.includes("help")) {
        return "Sure! Let me know your healthcare-related concern.";
    } else if (lowerCaseQuestion.includes("thank you") || lowerCaseQuestion.includes("thanks")) {
        return "You're welcome! I'm here to help.";

    // Healthcare-related questions and answers
    } else if (lowerCaseQuestion.includes("symptoms of covid")) {
        return "Common symptoms of COVID-19 include fever, cough, and difficulty breathing. If you suspect you have COVID-19, seek medical advice.";
    } else if (lowerCaseQuestion.includes("what is a healthy diet")) {
        return "A healthy diet includes fruits, vegetables, whole grains, lean protein, and low-fat dairy while minimizing added sugars and saturated fats.";
    } else if (lowerCaseQuestion.includes("how much water should i drink daily")) {
        return "It is recommended to drink about 8-10 cups (2-2.5 liters) of water daily for most adults.";
    } else if (lowerCaseQuestion.includes("how to manage stress")) {
        return "Stress can be managed through regular exercise, relaxation techniques like meditation, proper sleep, and talking to a therapist if needed.";
    } else if (lowerCaseQuestion.includes("kaise ho")) {
        return "Mai badiya, tum batao!";
    } else if (lowerCaseQuestion.includes("what are common symptoms of diabetes")) {
        return "Increased thirst, frequent urination, fatigue, and blurred vision. Solution: Regular exercise, balanced diet, and monitor blood sugar levels.";
    } else if (lowerCaseQuestion.includes("what is bmi")) {
        return "BMI stands for Body Mass Index, a measure of body fat based on your weight in relation to your height.";
    } else if (lowerCaseQuestion.includes("what are the signs of a heart attack")) {
        return "Signs of a heart attack include chest pain, shortness of breath, nausea, and discomfort in the arms, back, neck, or jaw.";
    } else if (lowerCaseQuestion.includes("how to improve mental health")) {
        return "Improving mental health involves regular physical activity, maintaining social connections, seeking professional help when needed, and managing stress.";
    } else if (lowerCaseQuestion.includes("how to lower blood pressure")) {
        return "To lower blood pressure, reduce salt intake, exercise regularly, maintain a healthy weight, and avoid smoking and excessive alcohol.";
    } else if (lowerCaseQuestion.includes("what are the symptoms of diabetes")) {
        return "Symptoms of diabetes include excessive thirst, frequent urination, extreme fatigue, and blurred vision.";
    } else if (lowerCaseQuestion.includes("what is a fever")) {
        return "A fever is a temporary increase in body temperature, often due to an illness or infection.";
    } else if (lowerCaseQuestion.includes("how to prevent the flu")) {
        return "Prevent the flu by getting vaccinated annually, washing hands frequently, and avoiding close contact with sick individuals.";
    } else if (lowerCaseQuestion.includes("how to treat a cold")) {
        return "To treat a cold, stay hydrated, rest, and use over-the-counter remedies to alleviate symptoms like a runny nose or sore throat.";
    } else if (lowerCaseQuestion.includes("what is hypertension")) {
        return "Hypertension is high blood pressure, a condition that increases the risk of heart disease, stroke, and other health problems.";
    } else if (lowerCaseQuestion.includes("what are the signs of a stroke")) {
        return "Signs of a stroke include sudden numbness or weakness in the face, arm, or leg, trouble speaking, and difficulty seeing in one or both eyes.";
    } else if (lowerCaseQuestion.includes("how to boost the immune system")) {
        return "Boost your immune system by eating a balanced diet, exercising, getting enough sleep, and managing stress effectively.";
    } else if (lowerCaseQuestion.includes("how to treat a headache")) {
        return "Treat a headache with rest, hydration, over-the-counter pain relief, and by avoiding stress or triggers like bright lights.";
    } else if (lowerCaseQuestion.includes("what are the symptoms of anemia")) {
        return "Symptoms of anemia include fatigue, weakness, pale skin, shortness of breath, and dizziness.";
    } else if (lowerCaseQuestion.includes("what is cholesterol")) {
        return "Cholesterol is a waxy substance found in your blood, necessary for building cells but harmful in excess.";
    } else if (lowerCaseQuestion.includes("how to manage diabetes")) {
        return "Manage diabetes by monitoring blood sugar levels, eating a healthy diet, exercising regularly, and taking prescribed medications.";
    } else if (lowerCaseQuestion.includes("what is a balanced diet")) {
        return "A balanced diet includes the right proportions of carbohydrates, proteins, fats, vitamins, and minerals to meet your body’s needs.";
    } else if (lowerCaseQuestion.includes("how to treat a fever")) {
        return "Treat a fever by staying hydrated, resting, and using over-the-counter medications like acetaminophen or ibuprofen.";
    } else if (lowerCaseQuestion.includes("what are the symptoms of dehydration")) {
        return "Symptoms of dehydration include thirst, dry mouth, dark urine, dizziness, and fatigue.";
    } else if (lowerCaseQuestion.includes("what are the benefits of exercise")) {
        return "Regular exercise improves cardiovascular health, strengthens muscles, enhances mood, and helps maintain a healthy weight.";
    } else if (lowerCaseQuestion.includes("how to quit smoking")) {
        return "Quit smoking by seeking support, using nicotine replacement therapies, setting a quit date, and avoiding triggers.";
    } else if (lowerCaseQuestion.includes("what is an allergy")) {
        return "An allergy is an immune response to a substance (allergen) that is not harmful to most people, causing symptoms like sneezing or itching.";
    } else if (lowerCaseQuestion.includes("what are the symptoms of cancer")) {
        return "Cancer symptoms vary but can include unexplained weight loss, persistent fatigue, lumps, and abnormal bleeding.";
    } else if (lowerCaseQuestion.includes("what is asthma")) {
        return "Asthma is a condition in which your airways narrow and swell, leading to breathing difficulties, wheezing, and coughing.";

    // Newly added health management questions
    } else if (lowerCaseQuestion.includes("how to strengthen bones")) {
        return "Consume calcium-rich foods, get enough vitamin D, and do weight-bearing exercises.";
    } else if (lowerCaseQuestion.includes("how to avoid overeating")) {
        return "Eat slowly, control portion sizes, and avoid distractions during meals.";
    } else if (lowerCaseQuestion.includes("what are good sources of protein")) {
        return "Eggs, chicken, fish, lentils, beans, and nuts.";
    } else if (lowerCaseQuestion.includes("how to improve sleep quality")) {
        return "Maintain a consistent sleep schedule and create a calming bedtime routine.";
    } else if (lowerCaseQuestion.includes("what is the role of fiber in diet")) {
        return "Fiber aids digestion, prevents constipation, and helps control blood sugar.";
    } else if (lowerCaseQuestion.includes("how to maintain a healthy weight")) {
        return "Combine regular exercise with a balanced diet.";
    } else {
        return "I'm not sure about that. Can you please rephrase your question or ask something else related to healthcare?";
    }
}
