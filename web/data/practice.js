// Practice content for the four prep tabs
window.PRACTICE = {
  listening: [
    { part: 1, title: "Practice: hotel booking", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Seaview Hotel, reservations. How may I help?"],
        ["M", "I'd like to book a double room for three nights, from the fifth of May."],
        ["F", "Certainly. Sea view or garden view? Sea view is twenty pounds extra per night."],
        ["M", "Garden view is fine. What's the price?"],
        ["F", "One hundred and ten pounds per night, including breakfast. May I have your name?"],
        ["M", "David Brennan. B-R-E-N-N-A-N."],
        ["F", "And will you be arriving by car?"],
        ["M", "No, by train."],
        ["F", "Then you can use our free shuttle from the station. It leaves every half hour."]
      ],
      qs: [
        { t: "gap", q: "Number of nights: ________", a: ["3", "three"] },
        { t: "gap", q: "Room view: ________", a: ["garden", "garden view"] },
        { t: "gap", q: "Price per night: £________", a: ["110", "one hundred and ten"] },
        { t: "gap", q: "Surname: ________", a: ["brennan"] },
        { t: "gap", q: "The shuttle leaves every ________", a: ["half hour", "30 minutes", "thirty minutes"] }
      ] },
    { part: 4, title: "Practice: lecture on volcanoes", intro: "Write ONE WORD ONLY.",
      script: [
        ["M", "Volcanoes form where molten rock, called magma, rises to the surface. Most are found along the edges of tectonic plates, especially around the Pacific, an area known as the Ring of Fire. Not all eruptions are explosive. When magma is runny, lava flows gently, as in Hawaii. When magma is thick and full of gas, pressure builds up and eruptions can be violent. Despite the danger, millions of people live near volcanoes because volcanic soil is extremely fertile. Scientists monitor volcanoes using instruments that detect small earthquakes and changes in the shape of the ground."]
      ],
      qs: [
        { t: "gap", q: "Molten rock underground is called ________.", a: ["magma"] },
        { t: "gap", q: "Many volcanoes are around the ________ Ocean.", a: ["pacific"] },
        { t: "gap", q: "Thick magma full of ________ causes violent eruptions.", a: ["gas"] },
        { t: "gap", q: "People live near volcanoes because the soil is ________.", a: ["fertile"] },
        { t: "gap", q: "Scientists detect small ________.", a: ["earthquakes"] }
      ] }
  ],
  reading: [
    { title: "Practice: The Secret Life of Sleep in Animals",
      text: [
        "All animals studied so far appear to need some form of sleep, but the way they sleep varies enormously. Dolphins, which must surface to breathe, sleep with only one half of their brain at a time, keeping one eye open to watch for predators.",
        "Giraffes sleep for less than five hours a day, often in short naps of a few minutes, while some bats sleep for nearly twenty hours. Scientists believe these differences are linked to diet and danger: animals that eat low-energy food like grass need to spend more time feeding, and animals at risk of being hunted cannot afford long, deep sleep.",
        "Even simple animals such as jellyfish, which have no brain, show periods of reduced activity that resemble sleep. This suggests that sleep evolved very early in the history of life and serves a basic function that is still not fully understood."
      ],
      qs: [
        { t: "tfng", q: "Dolphins sleep with half of their brain at a time.", a: "T" },
        { t: "tfng", q: "Giraffes sleep for more than eight hours a day.", a: "F" },
        { t: "mc", q: "Differences in sleep are linked to", o: ["size and colour", "diet and danger", "age and climate", "brain size"], a: 1 },
        { t: "tfng", q: "Jellyfish have small brains.", a: "F" },
        { t: "tfng", q: "Bats are the animals that sleep the most.", a: "NG" },
        { t: "gap", q: "Sleep probably evolved very ________ in the history of life. (ONE WORD)", a: ["early"] }
      ] },
    { title: "Practice: The Rise of Remote Work",
      text: [
        "Before 2020, only a small share of employees worked from home regularly. The pandemic forced millions to try it, and many companies discovered that productivity did not fall as much as feared.",
        "Remote work offers clear benefits: no commuting, more flexibility and access to a wider pool of workers. However, some managers worry about weaker team relationships and less spontaneous innovation, which often comes from informal conversations in the office.",
        "As a result, many organisations have adopted hybrid models, with employees spending two or three days in the office. Surveys suggest that most workers prefer this arrangement, although disagreements between staff and management over the number of office days remain common."
      ],
      qs: [
        { t: "tfng", q: "Before 2020, most employees worked from home regularly.", a: "F" },
        { t: "tfng", q: "Productivity fell sharply during remote work.", a: "F" },
        { t: "mc", q: "Managers worry that remote work reduces", o: ["salaries", "spontaneous innovation", "working hours", "office costs"], a: 1 },
        { t: "gap", q: "Many organisations use ________ models. (ONE WORD)", a: ["hybrid"] },
        { t: "tfng", q: "Most workers prefer hybrid arrangements.", a: "T" }
      ] }
  ],
  writingT1: [
    { prompt: "The bar chart shows the number of visitors (in thousands) to three museums in one city over four years. Summarise the main features and make comparisons.",
      chart: { type: "bar", title: "Museum visitors (thousands)", unit: "k", labels: ["2022", "2023", "2024", "2025"], series: [{ name: "Science", values: [120, 150, 175, 210] }, { name: "History", values: [180, 170, 160, 155] }, { name: "Art", values: [90, 95, 130, 140] }] } },
    { prompt: "The line graph shows average monthly rainfall (mm) in two cities. Summarise the main features and make comparisons.",
      chart: { type: "line", title: "Monthly rainfall (mm)", unit: "mm", labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"], series: [{ name: "City X", values: [80, 65, 40, 10, 35, 90] }, { name: "City Y", values: [20, 30, 120, 310, 180, 25] }] } },
    { prompt: "The table shows the percentage of households owning different appliances in 1995 and 2025. Summarise the main features and make comparisons.",
      chart: { type: "table", title: "Households owning appliances (%)", unit: "%", labels: ["Washing machine", "Dishwasher", "Microwave", "Air conditioner"], series: [{ name: "1995", values: [78, 18, 52, 9] }, { name: "2025", values: [97, 49, 91, 41] }] } }
  ],
  writingT2: [
    "Some people think that children should start school at a very early age. Others believe they should not begin until they are older. Discuss both views and give your opinion.",
    "In many countries, the gap between rich and poor is increasing. What problems does this cause, and what solutions can you suggest?",
    "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?",
    "Nowadays, many people choose to work from home. Do the advantages of this outweigh the disadvantages?",
    "Some people say that the best way to improve public health is by increasing the number of sports facilities. Others say this would have little effect. Discuss both views and give your opinion.",
    "Governments should spend money on railways rather than roads. To what extent do you agree or disagree?",
    "Many museums charge for admission, while others are free. Do you think the advantages of charging people outweigh the disadvantages?",
    "Some people believe that famous people's private lives should be kept private. Others think that the media has a right to report on them. Discuss both views and give your opinion.",
    "Space exploration is a waste of money that should be spent on solving problems on Earth. To what extent do you agree or disagree?",
    "In some countries, young people are encouraged to take a year off between finishing school and starting university. Discuss the advantages and disadvantages.",
    "Advertising encourages people to buy things they do not need. To what extent do you agree or disagree?",
    "More and more people are using online translation tools. Some say learning foreign languages is therefore no longer necessary. To what extent do you agree?"
  ],
  speakingCards: [
    { topic: "Describe a book you enjoyed reading.", points: ["what the book was", "when you read it", "what it was about", "and explain why you enjoyed it"] },
    { topic: "Describe a person you admire.", points: ["who the person is", "how you know them", "what they have done", "and explain why you admire them"] },
    { topic: "Describe a time you helped someone.", points: ["who you helped", "what the situation was", "how you helped", "and explain how you felt"] },
    { topic: "Describe a skill you would like to learn.", points: ["what the skill is", "why you want to learn it", "how you would learn it", "and explain how it would help you"] },
    { topic: "Describe a memorable celebration.", points: ["what was celebrated", "where it took place", "who was there", "and explain why it was memorable"] },
    { topic: "Describe a website or app you use often.", points: ["what it is", "how you found it", "what you use it for", "and explain why you like it"] },
    { topic: "Describe a difficult decision you made.", points: ["what the decision was", "when you made it", "what you considered", "and explain how you feel about it now"] },
    { topic: "Describe a beautiful place in nature.", points: ["where it is", "how you got there", "what you saw", "and explain why it was beautiful"] },
    { topic: "Describe an achievement you are proud of.", points: ["what you achieved", "when it happened", "how you achieved it", "and explain why you are proud of it"] },
    { topic: "Describe a gift you gave to someone.", points: ["what the gift was", "who you gave it to", "why you chose it", "and explain how the person reacted"] },
    { topic: "Describe a time you were late for something.", points: ["what you were late for", "why you were late", "what happened", "and explain how you felt"] },
    { topic: "Describe a film that made you think.", points: ["what the film was", "when you watched it", "what it was about", "and explain why it made you think"] },
    { topic: "Describe a time you learned something from a mistake.", points: ["what the mistake was", "when it happened", "what the result was", "and explain what you learned"] },
    { topic: "Describe a sport or game you enjoy.", points: ["what it is", "how you learned it", "who you play with", "and explain why you enjoy it"] },
    { topic: "Describe an interesting conversation you had.", points: ["who it was with", "where it happened", "what you talked about", "and explain why it was interesting"] },
    { topic: "Describe a plan you have for the future.", points: ["what the plan is", "when you want to do it", "what you need to do", "and explain why it is important to you"] }
  ],
  vocab: [
    ["mitigate", "to make something less severe", "Planting trees can mitigate the effects of urban heat."],
    ["detrimental", "harmful", "Lack of sleep is detrimental to concentration."],
    ["unprecedented", "never done or known before", "The city saw unprecedented growth in cycling."],
    ["substantial", "large in size or importance", "There has been a substantial rise in remote work."],
    ["exacerbate", "to make a problem worse", "Overfishing exacerbates damage to coral reefs."],
    ["alleviate", "to reduce pain or a problem", "Free meals may alleviate child poverty."],
    ["paramount", "more important than anything else", "Safety is paramount in self-driving cars."],
    ["inevitable", "certain to happen", "Some job losses due to automation are inevitable."],
    ["fluctuate", "to rise and fall irregularly", "Tourist numbers fluctuated over the period."],
    ["plummet", "to fall very quickly", "Visitor numbers plummeted in 2020."],
    ["surge", "a sudden large increase", "There was a surge in online shopping."],
    ["marginal", "very small", "There was only a marginal increase in spending."],
    ["proponent", "a supporter of an idea", "Proponents of rewilding stress its low cost."],
    ["advocate", "to publicly support", "Many experts advocate a four-day week."],
    ["contend", "to argue or claim", "Critics contend that nudges are manipulative."],
    ["undermine", "to weaken gradually", "Constant notifications undermine concentration."],
    ["foster", "to encourage development", "Group projects foster teamwork."],
    ["ubiquitous", "found everywhere", "Smartphones have become ubiquitous."],
    ["viable", "able to work successfully", "Vertical farming is not yet economically viable."],
    ["disparity", "a large difference", "There is a disparity between urban and rural incomes."],
    ["sustainable", "able to continue without damage", "We need more sustainable forms of transport."],
    ["incentive", "something that encourages action", "Tax breaks are an incentive to recycle."],
    ["deteriorate", "to become worse", "Air quality deteriorated over the decade."],
    ["profound", "very great or intense", "The printing press had a profound impact."],
    ["consequently", "as a result", "Costs fell; consequently, more people bought books."],
    ["nonetheless", "in spite of that", "The data is limited; nonetheless, the trend is clear."],
    ["predominantly", "mainly", "Respondents were predominantly young adults."],
    ["albeit", "although", "Prices rose, albeit slowly."],
    ["comprise", "to consist of", "The test comprises four sections."],
    ["notable", "worth noticing", "The most notable change was in solar power."],
    ["prevalent", "common at a particular time", "Obesity is increasingly prevalent."],
    ["scrutiny", "careful examination", "The study's methods came under scrutiny."],
    ["tangible", "real and able to be seen", "The policy brought tangible benefits."],
    ["inherent", "existing as a natural part", "There are risks inherent in desert farming."],
    ["curb", "to control or limit", "Governments should curb plastic waste."],
    ["thrive", "to grow or develop well", "Small businesses thrive in walkable streets."],
    ["hinder", "to make progress difficult", "Poor infrastructure hinders development."],
    ["pivotal", "of central importance", "Teachers play a pivotal role in society."],
    ["trajectory", "the path of development", "The upward trajectory continued until 2019."],
    ["compelling", "very convincing", "There is compelling evidence for exercise."]
  ],
  phrases: [
    "It is widely acknowledged that…",
    "This trend can largely be attributed to…",
    "A case in point is…",
    "From my perspective, the drawbacks outweigh the benefits.",
    "That's a tricky question, but I'd say…",
    "Off the top of my head, I'd probably say…",
    "Overall, the most striking feature is…",
    "By contrast, the figure for X remained relatively stable.",
    "There was a dramatic increase, peaking at…",
    "Admittedly, there are some drawbacks; however…",
    "To put it another way…",
    "I've never really thought about it, but…",
    "This is not to say that…",
    "On balance, I firmly believe that…"
  ],
  tips: {
    listening: [
      "Read the questions before the audio starts and predict the type of answer (number, name, noun).",
      "Spelling counts. Practise spelling names and places letter by letter.",
      "Watch for distractors: speakers often say one answer and then correct it.",
      "Answers come in order. If you miss one, move on immediately.",
      "Check word limits: 'ONE WORD ONLY' means 'the park' is wrong if the answer is 'park'."
    ],
    reading: [
      "Skim each passage in 2 minutes first to get the main idea of each paragraph.",
      "TRUE = the passage says the same. FALSE = it says the opposite. NOT GIVEN = there is no information.",
      "Look for synonyms: questions rarely use the same words as the passage.",
      "Spend about 20 minutes per passage. Don't get stuck on one question.",
      "For gap-fills, the answer must fit grammatically and be copied exactly from the text."
    ],
    writing: [
      "Task 1: write an overview sentence describing the main trends. Without it, you can't score above Band 6 for Task Achievement.",
      "Task 1: never give your opinion. Describe and compare the data only.",
      "Task 2 is worth twice as much as Task 1. Spend 40 minutes on it.",
      "Make your position clear in the introduction and conclusion for opinion essays.",
      "For Band 8+, use a wide range of accurate structures and precise, less common vocabulary naturally."
    ],
    speaking: [
      "Extend every Part 1 answer with a reason or an example (2–3 sentences).",
      "In Part 2, use the 1 minute to write keywords, not full sentences. Talk for the full 2 minutes.",
      "Part 3 is about ideas: give opinions, compare past and present, and discuss consequences.",
      "Fillers like 'That's an interesting question' are fine. Long silences are not.",
      "Don't memorise answers. Examiners notice, and it lowers your score."
    ]
  }
};
