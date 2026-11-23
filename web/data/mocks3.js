// IELTS Academic mock tests 7-10
window.MOCKS = window.MOCKS || [];

MOCKS.push({
  id: 7, title: "Food & Society",
  listening: [
    { part: 1, title: "Catering for an event", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Good afternoon, Fresh Table Catering."],
        ["M", "Hi, I'm organising a retirement party and need catering. It's for about sixty guests."],
        ["F", "Lovely. What date?"],
        ["M", "Friday the twenty-second of August."],
        ["F", "Would you like a buffet or a sit-down meal?"],
        ["M", "A buffet, please. And at least a third of the guests are vegetarian."],
        ["F", "No problem. Our standard buffet is fifteen pounds a head. Any allergies?"],
        ["M", "One guest has a nut allergy."],
        ["F", "We'll label everything clearly. What's the venue?"],
        ["M", "The Willow Hall, on Station Road."],
        ["F", "We'll arrive an hour before to set up. We'll need a deposit of twenty per cent."]
      ],
      qs: [
        { t: "gap", q: "Number of guests: about ________", a: ["60", "sixty"] },
        { t: "gap", q: "Type of meal: ________", a: ["buffet", "a buffet"] },
        { t: "gap", q: "Price per person: £________", a: ["15", "fifteen"] },
        { t: "gap", q: "Allergy: ________", a: ["nut", "nuts", "nut allergy"] },
        { t: "gap", q: "Deposit: ________ per cent", a: ["20", "twenty"] }
      ] },
    { part: 2, title: "A farmers' market", intro: "Choose the correct answer.",
      script: [
        ["M", "Welcome to the Oakley Farmers' Market. We started with just eight stalls six years ago, and now we have over forty. Every stallholder must grow, raise or bake the produce themselves, and all farms must be within thirty miles of the market. The market runs every Sunday from nine until one. The most popular stall is, perhaps unexpectedly, the mushroom grower, who often sells out by ten. New this year is a cooking demonstration at eleven each week, using seasonal produce from the stalls. We also accept card payments now at most stalls, which has increased sales considerably."]
      ],
      qs: [
        { t: "gap", q: "The market began with ________ stalls.", a: ["8", "eight"] },
        { t: "gap", q: "Farms must be within ________ miles.", a: ["30", "thirty"] },
        { t: "mc", q: "The most popular stall sells", o: ["bread", "mushrooms", "cheese"], a: 1 },
        { t: "gap", q: "Cooking demonstrations are at ________ o'clock.", a: ["11", "eleven"] },
        { t: "mc", q: "What has increased sales?", o: ["longer hours", "card payments", "advertising"], a: 1 }
      ] },
    { part: 3, title: "Nutrition project", intro: "Choose the correct answer.",
      script: [
        ["F", "Kai, I've read the articles on school meals for our nutrition project."],
        ["M", "Any useful findings?"],
        ["F", "One study found that free school meals improved test scores, but mainly for children from low-income families."],
        ["M", "Interesting. And what about food waste in schools?"],
        ["F", "Waste fell when children were allowed to serve themselves, rather than being given fixed portions."],
        ["M", "That's a practical recommendation. Should we include a cost analysis?"],
        ["F", "Our tutor said it's optional. I think we should leave it out and focus on health outcomes."],
        ["M", "Fair enough. Let's divide the work: you take the literature review and I'll do the recommendations."]
      ],
      qs: [
        { t: "mc", q: "Free school meals improved scores mainly for", o: ["all children", "low-income children", "older children"], a: 1 },
        { t: "mc", q: "Food waste fell when children", o: ["served themselves", "had smaller plates", "ate outside"], a: 0 },
        { t: "mc", q: "What do they decide about a cost analysis?", o: ["include it", "leave it out", "ask the tutor"], a: 1 },
        { t: "mc", q: "They will focus on", o: ["costs", "health outcomes", "taste"], a: 1 },
        { t: "mc", q: "Kai will write", o: ["the literature review", "the recommendations", "the introduction"], a: 1 }
      ] },
    { part: 4, title: "Lecture: the history of tea", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["M", "Tea originated in south-west China, where it was first used as a medicine before becoming an everyday drink. During the Tang dynasty, tea was pressed into bricks, which were easy to transport and were even used as currency. Tea reached Europe in the seventeenth century, brought by Dutch traders. In Britain, it was initially a luxury, heavily taxed, which led to widespread smuggling. When taxes were cut in 1784, tea became affordable for ordinary people. In the nineteenth century, the British established large plantations in India to reduce dependence on China. Today, India and China remain the largest producers."]
      ],
      qs: [
        { t: "gap", q: "Tea was first used as a ________.", a: ["medicine"] },
        { t: "gap", q: "Tea bricks were even used as ________.", a: ["currency", "money"] },
        { t: "gap", q: "Tea reached Europe through ________ traders.", a: ["dutch"] },
        { t: "gap", q: "High taxes in Britain led to ________.", a: ["smuggling"] },
        { t: "gap", q: "The British set up ________ in India.", a: ["plantations"] }
      ] }
  ],
  reading: [
    { title: "The Future of Protein",
      text: [
        "As the global population grows, so does demand for protein. Livestock farming already uses about three-quarters of agricultural land while providing less than a fifth of the world's calories. Scientists are therefore exploring alternative sources.",
        "Plant-based meat substitutes have become widely available, using ingredients such as soy and pea protein. After a period of rapid growth, sales in some countries have levelled off, with consumers citing price and taste as obstacles.",
        "Cultivated meat, grown from animal cells in bioreactors, could in theory produce real meat without raising animals. However, producing it at large scale remains very expensive, and it has been approved for sale in only a few countries.",
        "Insects are another option. Crickets and mealworms convert feed into protein far more efficiently than cattle and are already eaten by around two billion people worldwide. In Europe and North America, the main barrier is cultural rather than nutritional, so some companies grind insects into flour for use in pasta and snacks."
      ],
      qs: [
        { t: "gap", q: "Livestock farming uses about three-________ of agricultural land. (ONE WORD)", a: ["quarters"] },
        { t: "tfng", q: "Sales of plant-based meat have kept growing rapidly everywhere.", a: "F" },
        { t: "mc", q: "Consumers mention which obstacles to plant-based meat?", o: ["health and safety", "price and taste", "availability", "packaging"], a: 1 },
        { t: "tfng", q: "Cultivated meat is approved for sale in most countries.", a: "F" },
        { t: "gap", q: "About two ________ people already eat insects. (ONE WORD)", a: ["billion"] },
        { t: "tfng", q: "In Europe, the main barrier to eating insects is cultural.", a: "T" },
        { t: "tfng", q: "Insect flour is cheaper than wheat flour.", a: "NG" }
      ] },
    { title: "Urban Farming",
      text: [
        "Urban farming, the growing of food within cities, ranges from small community gardens to high-tech vertical farms. Vertical farms grow crops indoors in stacked layers under LED lights, often without soil, using a technique called hydroponics in which roots sit in nutrient-rich water.",
        "Advocates highlight several benefits. Vertical farms use up to 95 per cent less water than conventional farming, need no pesticides, and can grow produce year-round close to consumers, reducing transport.",
        "However, the energy needed for artificial lighting is substantial, and several high-profile vertical farming companies have gone bankrupt in recent years as energy prices rose. Most vertical farms grow only leafy greens and herbs, since staple crops such as wheat are not profitable under these conditions.",
        "Community gardens offer different benefits. While they rarely produce large quantities of food, studies associate them with improved mental health, stronger social connections and better diets among participants."
      ],
      qs: [
        { t: "gap", q: "Growing plants in nutrient-rich water is called ________. (ONE WORD)", a: ["hydroponics"] },
        { t: "tfng", q: "Vertical farms can use up to 95% less water.", a: "T" },
        { t: "mc", q: "Why have some vertical farm companies failed?", o: ["lack of demand", "high energy costs", "pest problems", "poor taste"], a: 1 },
        { t: "tfng", q: "Vertical farms commonly grow wheat.", a: "F" },
        { t: "tfng", q: "Community gardens produce most of the food in some cities.", a: "F" },
        { t: "mc", q: "Community gardens are associated with", o: ["higher incomes", "better mental health", "lower rents", "less traffic"], a: 1 }
      ] },
    { title: "Why We Eat Together",
      text: [
        "Sharing meals is one of the oldest human social activities. Anthropologists believe that cooking with fire, perhaps a million years ago, encouraged people to gather and eat together, strengthening group bonds.",
        "Research from several countries suggests that families who eat together regularly tend to have children with better diets and, in some studies, fewer behavioural problems. However, researchers caution that families who share meals may differ in other ways, such as income or working hours, making it difficult to prove cause and effect.",
        "In many countries, the share of meals eaten alone has risen, driven by longer working hours, smaller households and the growth of food delivery. In South Korea, eating alone has become so common that it has its own name, 'honbap'.",
        "Some communities are responding with initiatives such as shared community dinners and 'supper clubs' that bring strangers together, particularly to reduce loneliness among older people."
      ],
      qs: [
        { t: "tfng", q: "Cooking with fire may have encouraged communal eating.", a: "T" },
        { t: "tfng", q: "It has been proven that family meals cause better behaviour.", a: "F" },
        { t: "mc", q: "Which reason for eating alone is NOT mentioned?", o: ["longer working hours", "smaller households", "food delivery", "rising food prices"], a: 3 },
        { t: "gap", q: "In South Korea, eating alone is called '________'. (ONE WORD)", a: ["honbap"] },
        { t: "tfng", q: "Supper clubs are aimed only at young people.", a: "F" },
        { t: "tfng", q: "Eating alone is more common in Korea than anywhere else.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The bar chart shows average weekly spending (in dollars) on four food categories by households in one country in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "bar", title: "Weekly household food spending ($)", unit: "$", labels: ["Fresh produce", "Meat & fish", "Ready meals", "Takeaway"], series: [{ name: "2015", values: [32, 41, 14, 18] }, { name: "2025", values: [38, 35, 22, 34] }] } },
    t2: "In many countries, fast food is becoming more popular, and people are cooking less at home. What are the causes of this trend, and what effects does it have on individuals and society? Write at least 250 words."
  },
  speaking: {
    p1: ["What is your favourite food?", "Do you like cooking?", "How often do you eat out?", "Is there any food you disliked as a child but like now?"],
    p2: { topic: "Describe a special meal you had.", points: ["when and where it was", "who you were with", "what you ate", "and explain why it was special"] },
    p3: ["How have eating habits changed in your country?", "Should schools teach children to cook?", "Why are traditional foods important to a culture?"]
  }
});

MOCKS.push({
  id: 8, title: "History & Society",
  listening: [
    { part: 1, title: "Local history society", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["M", "Hello, is this the Bramley Local History Society?"],
        ["F", "Yes, I'm the secretary, Joan. How can I help?"],
        ["M", "I've just moved here and I'd like to join."],
        ["F", "Wonderful. Membership is twenty pounds a year, or thirty for a couple."],
        ["M", "Just me, so twenty. When do you meet?"],
        ["F", "On the first Tuesday of every month in the church hall, at half past seven."],
        ["M", "What's the next talk about?"],
        ["F", "The town's old railway, which closed in 1965. The speaker used to work as a signalman."],
        ["M", "Sounds great. Do you organise trips too?"],
        ["F", "Yes, in summer. This year we're visiting a castle in Wales."]
      ],
      qs: [
        { t: "gap", q: "Annual fee (single): £________", a: ["20", "twenty"] },
        { t: "gap", q: "Meetings: first ________ of each month", a: ["tuesday"] },
        { t: "gap", q: "Location: church ________", a: ["hall"] },
        { t: "gap", q: "The railway closed in ________", a: ["1965"] },
        { t: "gap", q: "Summer trip: a ________ in Wales", a: ["castle"] }
      ] },
    { part: 2, title: "Tour of an old factory", intro: "Choose the correct answer.",
      script: [
        ["F", "Welcome to Lowmoor Mill, once one of the largest cotton mills in the region. It opened in 1823 and employed over a thousand workers at its peak, many of them children. In those days, children as young as eight worked here, often crawling under machines to collect cotton waste, which was extremely dangerous. Working days lasted up to fourteen hours. The mill closed in 1958, mainly because of competition from cheaper imports. Today, the building houses a museum, artists' studios and a café. Before we start, please stay behind the yellow lines, as some of the original machines are still working for demonstrations."]
      ],
      qs: [
        { t: "gap", q: "The mill opened in ________.", a: ["1823"] },
        { t: "gap", q: "Children as young as ________ worked there.", a: ["8", "eight"] },
        { t: "gap", q: "Working days lasted up to ________ hours.", a: ["14", "fourteen"] },
        { t: "mc", q: "Why did the mill close?", o: ["a fire", "cheaper imports", "new laws"], a: 1 },
        { t: "mc", q: "Visitors must stay behind the yellow lines because", o: ["machines still work", "the floor is old", "it is private"], a: 0 }
      ] },
    { part: 3, title: "Using primary sources", intro: "Choose the correct answer.",
      script: [
        ["M", "Dr Lewis, I'm finding it hard to use primary sources for my history essay."],
        ["F", "What's the difficulty?"],
        ["M", "The diaries I found contradict each other about the strike in 1911."],
        ["F", "That's actually valuable. Contradictions tell you about different perspectives. Who wrote the diaries?"],
        ["M", "One was a factory owner and one a worker's wife."],
        ["F", "So of course they saw events differently. Analyse why, rather than deciding who was right."],
        ["M", "Should I also use newspaper reports?"],
        ["F", "Yes, but remember newspapers often had political loyalties. Check who owned them."],
        ["M", "Got it. Thank you."]
      ],
      qs: [
        { t: "mc", q: "The student's problem is that his sources", o: ["are too few", "contradict each other", "are unreadable"], a: 1 },
        { t: "gap", q: "The strike happened in ________.", a: ["1911"] },
        { t: "mc", q: "The tutor sees contradictions as", o: ["a problem", "valuable", "unimportant"], a: 1 },
        { t: "mc", q: "The tutor advises him to", o: ["decide who was right", "analyse why views differ", "ignore one diary"], a: 1 },
        { t: "mc", q: "With newspapers, he should check", o: ["their owners", "their price", "their length"], a: 0 }
      ] },
    { part: 4, title: "Lecture: the history of money", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["F", "Before money, people relied on barter, exchanging goods directly. Barter has an obvious problem: both people must want what the other has. Many societies used objects such as shells or salt as early money. The first coins appeared in Lydia, in modern Turkey, around 600 BC. Paper money was first used in China during the Song dynasty, partly because carrying heavy coins was inconvenient for merchants. For centuries, paper money could be exchanged for gold, but most countries abandoned this system in the twentieth century. Today, an increasing share of payments are digital, and some central banks are designing their own digital currencies."]
      ],
      qs: [
        { t: "gap", q: "Before money, people used ________.", a: ["barter", "bartering"] },
        { t: "gap", q: "Early money included shells or ________.", a: ["salt"] },
        { t: "gap", q: "The first coins appeared in ________.", a: ["lydia"] },
        { t: "gap", q: "Paper money began in ________.", a: ["china"] },
        { t: "gap", q: "Paper money used to be exchangeable for ________.", a: ["gold"] }
      ] }
  ],
  reading: [
    { title: "The Great Library of Alexandria",
      text: [
        "Founded in the third century BC in Alexandria, Egypt, the Great Library aimed to collect copies of all the world's books. Scholars from across the Mediterranean came to study there, and it became a centre for mathematics, astronomy and medicine.",
        "The library's rulers were aggressive collectors. According to one ancient account, ships arriving in Alexandria were searched for books, which were copied; the library kept the originals and returned the copies to the owners.",
        "Popular stories describe the library being destroyed in a single dramatic fire. Historians now believe the reality was more gradual. A fire during Julius Caesar's war in 48 BC may have damaged part of the collection, but the library seems to have declined over centuries due to reduced funding and political instability.",
        "Estimates of the number of scrolls range widely, from 40,000 to 400,000, and no complete catalogue survives. Nevertheless, the library remains a powerful symbol of the ambition to gather and preserve human knowledge."
      ],
      qs: [
        { t: "tfng", q: "The library aimed to collect copies of all known books.", a: "T" },
        { t: "tfng", q: "Owners of books seized from ships received the originals back.", a: "F" },
        { t: "mc", q: "Historians now think the library", o: ["burned in one night", "declined gradually", "was moved to Rome", "never existed"], a: 1 },
        { t: "gap", q: "A fire may have damaged part of the collection in ________ BC. (NUMBER)", a: ["48"] },
        { t: "tfng", q: "The exact number of scrolls is known.", a: "F" },
        { t: "tfng", q: "The library employed more than a hundred scholars.", a: "NG" }
      ] },
    { title: "The Invention of Time Zones",
      text: [
        "Until the nineteenth century, most towns set their clocks by the sun, so noon was when the sun was highest in the sky. As a result, clocks in towns only a few dozen kilometres apart showed different times.",
        "This caused few problems until the arrival of railways. Timetables became confusing when every station kept its own local time, and the risk of collisions increased. In 1847, British railways adopted a single standard time based on Greenwich, and most of the country soon followed.",
        "In North America, which spans a much larger area, railway companies introduced standard time zones in 1883. A year later, an international conference in Washington chose Greenwich as the prime meridian, the starting point for measuring longitude, although not all countries accepted it immediately; France continued to use Paris for several decades.",
        "Today, time zones are political as well as geographical. China, despite spanning roughly five geographical time zones, uses a single national time."
      ],
      qs: [
        { t: "tfng", q: "Before the 19th century, nearby towns often had different times.", a: "T" },
        { t: "mc", q: "What made standard time necessary?", o: ["telephones", "railways", "factories", "shipping"], a: 1 },
        { t: "gap", q: "British railways adopted standard time in ________. (NUMBER)", a: ["1847"] },
        { t: "tfng", q: "All countries immediately accepted Greenwich as the prime meridian.", a: "F" },
        { t: "gap", q: "France continued to use ________ for several decades. (ONE WORD)", a: ["paris"] },
        { t: "tfng", q: "China uses five official time zones.", a: "F" },
        { t: "tfng", q: "The Washington conference was attended by 25 countries.", a: "NG" }
      ] },
    { title: "Women in Early Science",
      text: [
        "The contributions of women to science have often been overlooked. In the nineteenth and early twentieth centuries, many universities did not allow women to study or receive degrees, and women who worked in science were frequently employed as assistants rather than as researchers.",
        "At Harvard College Observatory in the late 1800s, a group of women known as the 'Harvard computers' analysed thousands of photographs of stars. One of them, Henrietta Leavitt, discovered a relationship between the brightness of certain stars and how often they pulse, which later allowed astronomers to measure distances across the universe.",
        "Rosalind Franklin's X-ray images of DNA in the 1950s were crucial to the discovery of its double-helix structure. However, the Nobel Prize for the discovery was awarded in 1962 to three men; Franklin had died in 1958, and Nobel Prizes are not given after death.",
        "Historians today are working to recognise such contributions, and the proportion of women in many scientific fields has risen significantly, though gaps remain in areas such as physics and engineering."
      ],
      qs: [
        { t: "tfng", q: "Many universities once refused degrees to women.", a: "T" },
        { t: "gap", q: "The women at Harvard Observatory were called the Harvard '________'. (ONE WORD)", a: ["computers"] },
        { t: "mc", q: "Leavitt's discovery helped astronomers to", o: ["photograph stars", "measure distances", "find new planets", "build telescopes"], a: 1 },
        { t: "tfng", q: "Franklin shared the 1962 Nobel Prize.", a: "F" },
        { t: "tfng", q: "Women are now equally represented in physics.", a: "F" },
        { t: "tfng", q: "Leavitt was paid less than male astronomers.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The line graph shows the percentage of the population living in cities in four countries between 1950 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "line", title: "Urban population (% of total)", unit: "%", labels: ["1950", "1975", "2000", "2025"], series: [{ name: "Country A", values: [79, 83, 86, 88] }, { name: "Country B", values: [17, 21, 28, 37] }, { name: "Country C", values: [12, 17, 36, 66] }, { name: "Country D", values: [52, 62, 75, 82] }] } },
    t2: "Some people think that history is one of the most important school subjects. Others think that subjects like science and technology are more important for today's students. Discuss both views and give your own opinion. Write at least 250 words."
  },
  speaking: {
    p1: ["Did you enjoy history at school?", "Do you like visiting museums?", "Is there an old building in your town you like?", "Do you know much about your family history?"],
    p2: { topic: "Describe a historical place you have visited.", points: ["where it is", "when you went there", "what you saw", "and explain what you learned from the visit"] },
    p3: ["Why do people visit historical places?", "Should old buildings be preserved or replaced?", "How can young people be encouraged to learn about history?"]
  }
});

MOCKS.push({
  id: 9, title: "Psychology & Behaviour",
  listening: [
    { part: 1, title: "Joining a choir", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Hello, Harmony Community Choir, Lucy speaking."],
        ["M", "Hi Lucy, I'm interested in joining. I've never sung in a choir before."],
        ["F", "That's fine, we don't hold auditions. We rehearse on Monday evenings at the Grove School."],
        ["M", "What time?"],
        ["F", "From seven till nine, with a short tea break."],
        ["M", "Is there a fee?"],
        ["F", "Five pounds per session, but your first two sessions are free."],
        ["M", "Do I need to read music?"],
        ["F", "Not at all. We learn songs by ear, and we send recordings so you can practise at home."],
        ["M", "Great. Do you perform?"],
        ["F", "Yes, our next concert is in December, raising money for a children's hospital."]
      ],
      qs: [
        { t: "gap", q: "Rehearsal day: ________", a: ["monday", "monday evenings"] },
        { t: "gap", q: "Venue: the ________ School", a: ["grove"] },
        { t: "gap", q: "Cost per session: £________", a: ["5", "five"] },
        { t: "gap", q: "First ________ sessions are free", a: ["2", "two"] },
        { t: "gap", q: "Next concert: ________", a: ["december"] }
      ] },
    { part: 2, title: "Stress management workshop", intro: "Choose the correct answer.",
      script: [
        ["M", "Thanks for joining today's workshop on managing stress. First, a common myth: that all stress is bad. In fact, short-term stress can improve performance, for example before an exam. The problem is chronic stress, which continues for weeks or months. The single most effective strategy, according to research, is regular physical activity; even a twenty-minute walk helps. Breathing exercises are useful for immediate calm, and we'll practise one later. Many people try to reduce stress by checking their phones, but this often increases it. Finally, talking to someone you trust remains one of the most underrated tools."]
      ],
      qs: [
        { t: "mc", q: "The speaker says short-term stress", o: ["is always harmful", "can improve performance", "causes illness"], a: 1 },
        { t: "mc", q: "The main problem is stress that", o: ["is sudden", "continues for a long time", "affects sleep"], a: 1 },
        { t: "mc", q: "The most effective strategy is", o: ["breathing exercises", "physical activity", "meditation"], a: 1 },
        { t: "gap", q: "Even a ________-minute walk helps.", a: ["20", "twenty"] },
        { t: "mc", q: "Checking phones often", o: ["reduces stress", "increases stress", "has no effect"], a: 1 }
      ] },
    { part: 3, title: "Psychology experiment design", intro: "Choose the correct answer.",
      script: [
        ["F", "Omar, for our psychology experiment, I'd like to test whether background music affects memory."],
        ["M", "Good idea. What type of music?"],
        ["F", "Instrumental only. Songs with lyrics would make it a different experiment."],
        ["M", "How many participants?"],
        ["F", "At least forty, split into two groups, with and without music."],
        ["M", "We need to assign them randomly, otherwise the groups might differ."],
        ["F", "Yes. And we must get ethical approval before we start. The form takes about two weeks to be processed."],
        ["M", "Then let's submit it tomorrow. I'll write the consent form for participants."]
      ],
      qs: [
        { t: "mc", q: "What will the experiment test?", o: ["music and memory", "music and mood", "lyrics and reading"], a: 0 },
        { t: "mc", q: "What type of music will they use?", o: ["songs with lyrics", "instrumental", "classical only"], a: 1 },
        { t: "gap", q: "At least ________ participants.", a: ["40", "forty"] },
        { t: "mc", q: "Participants will be assigned", o: ["by age", "randomly", "by choice"], a: 1 },
        { t: "mc", q: "Omar will write", o: ["the ethics form", "the consent form", "the report"], a: 1 }
      ] },
    { part: 4, title: "Lecture: habits", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["M", "Today: how habits form. A habit has three parts: a cue, a routine and a reward. The cue triggers the behaviour, for example a time of day or a location. Over time, the behaviour becomes automatic and requires less conscious effort, which frees the brain for other tasks. Research suggests forming a new habit takes on average about sixty-six days, although this varies widely. One effective strategy is to link a new habit to an existing one, sometimes called habit stacking. Breaking bad habits is harder; experts recommend changing the environment, for instance keeping a phone in another room, rather than relying on willpower."]
      ],
      qs: [
        { t: "gap", q: "A habit has a cue, a routine and a ________.", a: ["reward"] },
        { t: "gap", q: "A cue can be a time or a ________.", a: ["location", "place"] },
        { t: "gap", q: "Forming a habit takes about ________ days.", a: ["66", "sixty-six", "sixty six"] },
        { t: "gap", q: "Linking habits is called habit ________.", a: ["stacking"] },
        { t: "gap", q: "To break bad habits, change your ________.", a: ["environment"] }
      ] }
  ],
  reading: [
    { title: "The Marshmallow Test Revisited",
      text: [
        "In the 1960s and 1970s, psychologist Walter Mischel offered young children a choice: eat one marshmallow immediately, or wait alone for around fifteen minutes and receive two. Follow-up studies found that children who waited longer tended to have better academic results years later.",
        "The findings became famous as evidence that self-control in childhood predicts later success. However, the original studies involved a small number of children, mostly from families connected to Stanford University.",
        "A larger study published in 2018, involving more than 900 children from more diverse backgrounds, found a much weaker link. Once factors such as family income and home environment were considered, the ability to wait added little predictive power.",
        "Other research suggests that children's decisions depend partly on trust. When researchers broke a promise to children before the test, the children waited far less, which makes sense if they had learned that adults' promises are unreliable."
      ],
      qs: [
        { t: "gap", q: "Children who waited received ________ marshmallows. (NUMBER)", a: ["2", "two"] },
        { t: "tfng", q: "The original study included children from many backgrounds.", a: "F" },
        { t: "gap", q: "The 2018 study involved more than ________ children. (NUMBER)", a: ["900"] },
        { t: "mc", q: "The 2018 study found the link was weaker after considering", o: ["age and gender", "income and home environment", "diet", "school type"], a: 1 },
        { t: "tfng", q: "Children waited less after an adult broke a promise.", a: "T" },
        { t: "tfng", q: "Mischel disagreed with the 2018 findings.", a: "NG" }
      ] },
    { title: "Why We Procrastinate",
      text: [
        "Procrastination, the voluntary delay of an intended task despite expecting to be worse off, is often seen as a time-management problem. Psychologists increasingly argue it is primarily an emotional one.",
        "According to this view, people delay tasks that make them feel anxious, bored or insecure. Putting the task off provides immediate relief, which rewards the avoidance and makes it more likely to happen again.",
        "Research has found that procrastinators who forgave themselves for delaying on one exam procrastinated less before the next. Self-criticism, by contrast, seems to increase negative feelings associated with the task.",
        "Practical strategies include breaking tasks into very small steps, deciding exactly when and where to start, and removing distractions. Some researchers recommend the 'two-minute rule': committing to work for just two minutes, which often leads to continuing for longer."
      ],
      qs: [
        { t: "tfng", q: "Psychologists increasingly see procrastination mainly as an emotional problem.", a: "T" },
        { t: "mc", q: "Why does procrastination repeat itself?", o: ["it is genetic", "delay brings immediate relief", "tasks get easier", "deadlines change"], a: 1 },
        { t: "tfng", q: "Students who forgave themselves procrastinated more later.", a: "F" },
        { t: "tfng", q: "Self-criticism reduces negative feelings about a task.", a: "F" },
        { t: "gap", q: "The 'two-________ rule' involves working briefly to get started. (ONE WORD)", a: ["minute"] },
        { t: "tfng", q: "Procrastination is more common in teenagers than adults.", a: "NG" }
      ] },
    { title: "The Power of Nudges",
      text: [
        "A 'nudge' is a small change in how choices are presented that influences behaviour without restricting options. The idea was popularised by economist Richard Thaler and legal scholar Cass Sunstein in their 2008 book.",
        "One famous example involves pension saving. When employees are automatically enrolled in a pension scheme but can opt out, participation rises dramatically compared with schemes that require people to sign up. The default option is powerful because many people simply stay with it.",
        "Other nudges include placing healthy food at eye level in canteens and sending letters telling people that most of their neighbours pay taxes on time, which has been shown to increase payment rates.",
        "Critics argue that nudges can be manipulative and that governments might use them to avoid stronger policies. A large review in 2022 also suggested that the average effect of nudges may be smaller than early studies claimed, once unpublished studies were taken into account."
      ],
      qs: [
        { t: "tfng", q: "Nudges restrict the choices people can make.", a: "F" },
        { t: "gap", q: "Thaler and Sunstein's book was published in ________. (NUMBER)", a: ["2008"] },
        { t: "mc", q: "Automatic pension enrolment increases participation because", o: ["it pays more", "people tend to stay with the default", "it is compulsory", "employers insist"], a: 1 },
        { t: "tfng", q: "Telling people that neighbours pay taxes on time increased payments.", a: "T" },
        { t: "tfng", q: "All critics believe nudges are useless.", a: "F" },
        { t: "tfng", q: "A 2022 review suggested nudge effects may be smaller than thought.", a: "T" },
        { t: "tfng", q: "Thaler won a Nobel Prize for his work on nudges.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The bar chart shows the average number of minutes per day people in one country spent on five leisure activities in 2025, by gender. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "bar", title: "Daily leisure time (minutes)", unit: "min", labels: ["TV & video", "Social media", "Exercise", "Reading", "Socialising"], series: [{ name: "Men", values: [148, 62, 34, 15, 41] }, { name: "Women", values: [126, 79, 25, 24, 47] }] } },
    t2: "Some people believe that success in life comes mainly from hard work and determination. Others believe that factors such as money and personal appearance are more important. Discuss both views and give your own opinion. Write at least 250 words."
  },
  speaking: {
    p1: ["Are you a patient person?", "What do you do to relax?", "Do you prefer to plan things or be spontaneous?", "Do you often feel stressed?"],
    p2: { topic: "Describe a habit you would like to develop.", points: ["what the habit is", "why you want to develop it", "what you have done so far", "and explain how it would improve your life"] },
    p3: ["Why is it difficult to change habits?", "Do people today have less self-control than in the past?", "Should governments try to change people's behaviour?"]
  }
});

MOCKS.push({
  id: 10, title: "Global Issues",
  listening: [
    { part: 1, title: "Renting an apartment", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["M", "Parkside Lettings, Tom speaking."],
        ["F", "Hi, I'm calling about the two-bedroom apartment on Elm Avenue."],
        ["M", "Yes, it's still available. The rent is nine hundred and seventy-five pounds a month."],
        ["F", "Does that include bills?"],
        ["M", "It includes water, but not electricity or internet."],
        ["F", "Is it furnished?"],
        ["M", "Partly. There's a sofa and beds, but no desks."],
        ["F", "Okay. Is there parking?"],
        ["M", "There's space for bicycles but no car parking, I'm afraid. The bus stop is two minutes away."],
        ["F", "Could I view it?"],
        ["M", "How about Wednesday at five thirty? You'll need to bring photo ID."]
      ],
      qs: [
        { t: "gap", q: "Street: ________ Avenue", a: ["elm"] },
        { t: "gap", q: "Monthly rent: £________", a: ["975", "nine hundred and seventy-five"] },
        { t: "gap", q: "Rent includes ________", a: ["water"] },
        { t: "gap", q: "The apartment does not have ________", a: ["desks", "a desk", "car parking"] },
        { t: "gap", q: "Bring photo ________ to the viewing", a: ["id", "identification"] }
      ] },
    { part: 2, title: "Charity fun run", intro: "Choose the correct answer.",
      script: [
        ["F", "Thank you for signing up for the City Fun Run in aid of clean water projects. The route is five kilometres, starting and finishing in Victoria Park. You can walk, jog or run, and there's no time limit. Registration costs twelve pounds, which covers your T-shirt and medal. We ask every participant to try to raise at least fifty pounds in sponsorship. Last year, the event raised enough to build three wells in Malawi. On the day, please arrive at least forty-five minutes early to collect your number. There will be water stations at the second and fourth kilometres."]
      ],
      qs: [
        { t: "gap", q: "The route is ________ km.", a: ["5", "five"] },
        { t: "mc", q: "Registration fee covers", o: ["a T-shirt and medal", "lunch", "transport"], a: 0 },
        { t: "gap", q: "Sponsorship target: £________", a: ["50", "fifty"] },
        { t: "gap", q: "Last year's event built ________ wells.", a: ["3", "three"] },
        { t: "gap", q: "Arrive at least ________ minutes early.", a: ["45", "forty-five", "forty five"] }
      ] },
    { part: 3, title: "Debate preparation", intro: "Choose the correct answer.",
      script: [
        ["M", "Chloe, our debate is on whether rich countries should cancel the debts of poorer countries. We're arguing in favour."],
        ["F", "Our strongest argument is that debt repayments take money away from health and education."],
        ["M", "Agreed. But the other side will say cancellation encourages irresponsible borrowing."],
        ["F", "We can respond that cancellation can be conditional, for example linked to spending on public services."],
        ["M", "Good. Should we use examples?"],
        ["F", "Definitely. The 2005 debt relief initiative is a good case: school enrolment rose in several countries afterwards."],
        ["M", "I'll prepare the opening speech, you do the rebuttal?"],
        ["F", "Perfect, I'm better at thinking on my feet."]
      ],
      qs: [
        { t: "mc", q: "Their strongest argument is that debt repayments", o: ["harm trade", "reduce health and education spending", "cause wars"], a: 1 },
        { t: "mc", q: "The opposing side will argue that cancellation", o: ["is too expensive", "encourages irresponsible borrowing", "is illegal"], a: 1 },
        { t: "mc", q: "Their response will be that cancellation can be", o: ["temporary", "conditional", "partial"], a: 1 },
        { t: "gap", q: "Example initiative year: ________", a: ["2005"] },
        { t: "mc", q: "Chloe will do", o: ["the opening speech", "the rebuttal", "the research"], a: 1 }
      ] },
    { part: 4, title: "Lecture: water scarcity", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["F", "Although water covers most of the planet, less than one per cent is fresh water that is easily accessible. Agriculture accounts for around seventy per cent of global freshwater use. Water scarcity has two forms: physical scarcity, where there isn't enough water, and economic scarcity, where water exists but infrastructure such as pipes is lacking. Solutions include desalination, which removes salt from seawater but requires a lot of energy, and reusing treated wastewater. Singapore, for example, recycles wastewater into drinking water. Reducing leaks is also important; in some cities, a third of treated water is lost through damaged pipes."]
      ],
      qs: [
        { t: "gap", q: "________ uses about 70% of fresh water.", a: ["agriculture", "farming"] },
        { t: "gap", q: "Economic scarcity: water exists but ________ is lacking.", a: ["infrastructure"] },
        { t: "gap", q: "Desalination requires a lot of ________.", a: ["energy"] },
        { t: "gap", q: "________ recycles wastewater into drinking water.", a: ["singapore"] },
        { t: "gap", q: "Some cities lose a ________ of water through leaks.", a: ["third"] }
      ] }
  ],
  reading: [
    { title: "The Economics of Happiness",
      text: [
        "For decades, economists measured national progress mainly through gross domestic product (GDP), the total value of goods and services produced. Yet GDP says nothing about how people actually feel about their lives.",
        "In 1974, economist Richard Easterlin observed that, although average incomes in the United States had risen substantially since the 1940s, reported happiness had not. This became known as the Easterlin Paradox.",
        "Later research has complicated the picture. Within countries, richer people are generally happier than poorer people, and some studies find that happiness continues to rise with income, though more slowly at higher levels. Comparisons with others also matter: people often judge their income relative to their neighbours.",
        "Some governments now measure well-being directly. Bhutan has promoted 'Gross National Happiness' since the 1970s, and New Zealand introduced a well-being budget in 2019, directing spending towards areas such as mental health and child poverty."
      ],
      qs: [
        { t: "tfng", q: "GDP measures how satisfied people are with their lives.", a: "F" },
        { t: "gap", q: "Easterlin made his observation in ________. (NUMBER)", a: ["1974"] },
        { t: "tfng", q: "Easterlin found happiness rose as fast as incomes.", a: "F" },
        { t: "tfng", q: "Within countries, richer people tend to be happier.", a: "T" },
        { t: "mc", q: "People often judge their income by comparing it with", o: ["the past", "their neighbours", "national averages", "prices"], a: 1 },
        { t: "gap", q: "New Zealand introduced a well-being ________ in 2019. (ONE WORD)", a: ["budget"] },
        { t: "tfng", q: "Bhutan is the happiest country in the world.", a: "NG" }
      ] },
    { title: "Migration and Cities",
      text: [
        "For the first time in history, more than half of the world's population lives in cities, and the share is expected to reach about two-thirds by 2050. Much of this growth comes from migration from rural areas, particularly in Africa and Asia.",
        "People move to cities mainly for economic opportunity. Wages in urban areas are generally higher, and cities offer better access to education and health care. Migrants also send money home to rural families; in some countries, these remittances form a significant part of the economy.",
        "Rapid urban growth, however, often outpaces the provision of housing and services. An estimated one billion people live in informal settlements, which may lack secure tenure, clean water or sanitation.",
        "Some urban planners argue that informal settlements should be upgraded rather than demolished, by providing roads, water and legal ownership. Projects in Brazil and Thailand have shown that residents often invest in improving their homes once they feel secure."
      ],
      qs: [
        { t: "tfng", q: "More than half the world's population now lives in cities.", a: "T" },
        { t: "gap", q: "By 2050, about two-________ may live in cities. (ONE WORD)", a: ["thirds"] },
        { t: "mc", q: "The main reason people move to cities is", o: ["climate", "economic opportunity", "family", "culture"], a: 1 },
        { t: "gap", q: "Money sent home by migrants is called ________. (ONE WORD)", a: ["remittances"] },
        { t: "tfng", q: "About one billion people live in informal settlements.", a: "T" },
        { t: "tfng", q: "Planners agree that informal settlements should be demolished.", a: "F" },
        { t: "tfng", q: "Residents invest in their homes once they feel secure.", a: "T" }
      ] },
    { title: "Antibiotic Resistance",
      text: [
        "Antibiotics have saved millions of lives since penicillin came into widespread use in the 1940s. However, bacteria can evolve resistance, and the overuse of antibiotics speeds up this process.",
        "Resistance develops through natural selection. When antibiotics are used, susceptible bacteria die, but a few with genetic mutations may survive and multiply. Bacteria can also share resistance genes with one another, spreading resistance between species.",
        "A major driver is the use of antibiotics in farming, where they have been given to healthy animals to promote growth. The European Union banned this practice in 2006, but it continues in some countries. Prescribing antibiotics for viral infections, such as colds, against which they have no effect, also contributes.",
        "Developing new antibiotics is scientifically difficult and offers pharmaceutical companies little profit, as new drugs are kept in reserve and used sparingly. Some governments are therefore experimenting with payment models that reward companies for developing antibiotics regardless of sales."
      ],
      qs: [
        { t: "tfng", q: "Penicillin came into widespread use in the 1940s.", a: "T" },
        { t: "mc", q: "Resistance spreads partly because bacteria", o: ["share genes", "grow faster", "change colour", "need less food"], a: 0 },
        { t: "gap", q: "The EU banned antibiotics for growth in ________. (NUMBER)", a: ["2006"] },
        { t: "tfng", q: "Antibiotics are effective against colds.", a: "F" },
        { t: "tfng", q: "New antibiotics are very profitable for companies.", a: "F" },
        { t: "tfng", q: "Some governments reward antibiotic development regardless of sales.", a: "T" }
      ] }
  ],
  writing: {
    t1: { prompt: "The table shows the percentage of the population with access to safe drinking water and the internet in five countries in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "table", title: "Access to services (% of population)", unit: "%", labels: ["Country A", "Country B", "Country C", "Country D", "Country E"], series: [{ name: "Safe water", values: [99, 94, 71, 58, 88] }, { name: "Internet", values: [96, 81, 45, 32, 74] }] } },
    t2: "Some people think that wealthy nations have a responsibility to help poorer nations with problems such as poverty and health care. To what extent do you agree or disagree? Write at least 250 words."
  },
  speaking: {
    p1: ["Do you follow the news?", "What kind of news interests you?", "Do you help with any charities?", "Would you like to live in another country?"],
    p2: { topic: "Describe a global problem you think is important.", points: ["what the problem is", "how you learned about it", "who it affects", "and explain why you think it is important"] },
    p3: ["Why do people in some countries have better lives than others?", "Can individuals help solve global problems?", "What will be the biggest challenge for the world in the next 50 years?"]
  }
});
