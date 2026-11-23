// Extra built-in practice sets for the prep tabs (no AI needed)
PRACTICE.listening.push(
  { part: 1, title: "Practice: renting a bicycle", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
    script: [
      ["M", "Good morning, City Cycle Hire. How can I help?"],
      ["F", "Hi, I'd like to rent a bike for the weekend."],
      ["M", "Sure. We have city bikes and electric bikes. City bikes are twelve pounds a day, electric ones are twenty-five."],
      ["F", "A city bike is fine. From Saturday morning to Sunday evening."],
      ["M", "That's two days, so twenty-four pounds. We also need a deposit of fifty pounds, which you get back when you return the bike."],
      ["F", "Do you provide helmets?"],
      ["M", "Yes, helmets and a lock are included. Could I have your name?"],
      ["F", "Emma Thornton. T-H-O-R-N-T-O-N."],
      ["M", "And a phone number?"],
      ["F", "07781 234 590."],
      ["M", "Great. Please collect the bike from our shop next to the museum, not the one at the station."]
    ],
    qs: [
      { t: "gap", q: "Type of bike: ________ bike", a: ["city"] },
      { t: "gap", q: "Total rental cost: £________", a: ["24", "twenty-four", "twenty four"] },
      { t: "gap", q: "Deposit: £________", a: ["50", "fifty"] },
      { t: "gap", q: "Customer surname: ________", a: ["thornton"] },
      { t: "gap", q: "Collect the bike from the shop next to the ________", a: ["museum"] }
    ] },
  { part: 1, title: "Practice: lost property office", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
    script: [
      ["F", "Lost property, Central Railway. How can I help?"],
      ["M", "I left my bag on a train yesterday."],
      ["F", "I'm sorry to hear that. What kind of bag is it?"],
      ["M", "A black backpack. Actually, it's dark blue, but it looks black."],
      ["F", "Dark blue. What was inside?"],
      ["M", "A laptop, a library book and a red umbrella."],
      ["F", "Which train were you on?"],
      ["M", "The 6.45 from Leeds. I got off at York."],
      ["F", "And where were you sitting?"],
      ["M", "In coach C, near the door."],
      ["F", "I'll check. If we find it, there's a handling fee of eight pounds."]
    ],
    qs: [
      { t: "gap", q: "Colour of the backpack: ________", a: ["dark blue"] },
      { t: "gap", q: "Contents: a laptop, a library book and a red ________", a: ["umbrella"] },
      { t: "gap", q: "Train time: ________ from Leeds", a: ["6.45", "6:45"] },
      { t: "gap", q: "Seat location: coach ________", a: ["c"] },
      { t: "gap", q: "Handling fee: £________", a: ["8", "eight"] }
    ] },
  { part: 2, title: "Practice: new community centre", intro: "Choose the correct answer.",
    script: [
      ["F", "Good evening, everyone. I'm delighted to tell you about the new Bayside Community Centre, which opens next month. The building was designed by local architects, and much of the furniture was made by students from the college. On the ground floor, there's a large hall for sports and events, and a café run by volunteers. Upstairs, you'll find three meeting rooms and a computer room. The computer room will be free for residents over sixty on weekday mornings. The most popular request in our survey was a children's play area, and I'm pleased to say this is in the garden at the back. Parking is limited, so we encourage you to walk or cycle; there are thirty bicycle spaces at the front entrance."]
    ],
    qs: [
      { t: "mc", q: "Much of the furniture was made by", o: ["local architects", "college students", "volunteers"], a: 1 },
      { t: "mc", q: "The café is run by", o: ["volunteers", "the college", "a private company"], a: 0 },
      { t: "mc", q: "The computer room is free on weekday mornings for", o: ["children", "students", "people over sixty"], a: 2 },
      { t: "mc", q: "The children's play area is", o: ["in the hall", "upstairs", "in the garden"], a: 2 },
      { t: "gap", q: "There are ________ bicycle spaces.", a: ["30", "thirty"] }
    ] },
  { part: 2, title: "Practice: city walking tour", intro: "Choose the correct answer.",
    script: [
      ["M", "Hello and welcome to the Old Town walking tour. The tour lasts about two hours and covers roughly three kilometres. Our first stop is the cathedral, which took over two hundred years to build. After that, we'll walk along the city walls, which offer the best views of the river. Please be careful, as the steps can be slippery after rain. Halfway through, we'll stop for twenty minutes at the market square, where you can buy snacks. The tour ends at the castle, but entry to the castle isn't included in your ticket. If you show your tour ticket, though, you'll get ten per cent off."]
    ],
    qs: [
      { t: "gap", q: "The tour lasts about ________ hours.", a: ["2", "two"] },
      { t: "mc", q: "The best river views are from", o: ["the cathedral", "the city walls", "the castle"], a: 1 },
      { t: "mc", q: "The stop at the market square lasts", o: ["10 minutes", "20 minutes", "30 minutes"], a: 1 },
      { t: "mc", q: "Entry to the castle is", o: ["included", "not included", "free for children"], a: 1 },
      { t: "gap", q: "Tour ticket holders get ________ per cent off castle entry.", a: ["10", "ten"] }
    ] },
  { part: 3, title: "Practice: marketing assignment", intro: "Choose the correct answer.",
    script: [
      ["F", "Amir, we need to choose a company for our marketing assignment."],
      ["M", "What about a big sportswear brand?"],
      ["F", "There's too much information about them. It'd be hard to say anything new. A small local business might be better."],
      ["M", "Good idea. My uncle runs a bakery. He might let us interview him."],
      ["F", "Perfect. We could analyse how he uses social media."],
      ["M", "Actually, he hardly uses it. Most customers find him by word of mouth."],
      ["F", "That's interesting in itself. We could recommend a social media strategy."],
      ["M", "Right. Should we include a customer survey?"],
      ["F", "Yes, but keep it short, maybe five questions, or people won't finish it."]
    ],
    qs: [
      { t: "mc", q: "Why do they reject the sportswear brand?", o: ["too expensive", "too much existing information", "no social media"], a: 1 },
      { t: "mc", q: "Which business will they study?", o: ["a bakery", "a café", "a gym"], a: 0 },
      { t: "mc", q: "How do most customers find the business?", o: ["social media", "advertising", "word of mouth"], a: 2 },
      { t: "mc", q: "What will they recommend?", o: ["a new location", "a social media strategy", "lower prices"], a: 1 },
      { t: "gap", q: "The survey will have about ________ questions.", a: ["5", "five"] }
    ] },
  { part: 3, title: "Practice: library project feedback", intro: "Choose the correct answer.",
    script: [
      ["M", "Dr Patel, could you give us feedback on our draft report about library use?"],
      ["F", "Of course. Your data collection was thorough. Observing for two full weeks was a good decision."],
      ["M", "Thanks. Was the literature review long enough?"],
      ["F", "Length isn't the problem. It's mostly description. You need to compare the studies and show where they disagree."],
      ["M", "I see. And the charts?"],
      ["F", "They're clear, but the second chart repeats the information in the table, so remove one of them."],
      ["M", "Should we add interviews with librarians?"],
      ["F", "That would strengthen it, but only if you can finish them within ten days. Otherwise, mention it as future research."]
    ],
    qs: [
      { t: "mc", q: "What does the tutor praise?", o: ["the data collection", "the conclusion", "the writing style"], a: 0 },
      { t: "mc", q: "What is wrong with the literature review?", o: ["too short", "too descriptive", "too old"], a: 1 },
      { t: "mc", q: "What should they do with the second chart?", o: ["make it bigger", "remove it or the table", "add colour"], a: 1 },
      { t: "gap", q: "Interviews must be finished within ________ days.", a: ["10", "ten"] },
      { t: "mc", q: "If they can't do interviews, they should", o: ["skip the topic", "mention them as future research", "ask for an extension"], a: 1 }
    ] },
  { part: 4, title: "Practice: lecture on bees and pollination", intro: "Write ONE WORD ONLY.",
    script: [
      ["F", "About three-quarters of the world's food crops depend at least partly on pollination by animals, mainly insects. Bees are the most important pollinators because their bodies are covered in hair, which collects pollen. Honeybees receive most of the attention, but wild bees are often more efficient at pollinating certain crops, such as tomatoes. In recent decades, bee populations have declined in many regions. The main causes are habitat loss, pesticides and disease. Farmers can help by planting strips of wild flowers along the edges of fields, which provide food when crops are not in flower. Cities can also play a role: parks and gardens often support a surprising variety of bee species."]
    ],
    qs: [
      { t: "gap", q: "Bees' bodies are covered in ________.", a: ["hair", "hairs"] },
      { t: "gap", q: "Wild bees are efficient at pollinating crops like ________.", a: ["tomatoes"] },
      { t: "gap", q: "One cause of decline is ________ loss.", a: ["habitat"] },
      { t: "gap", q: "Farmers can plant strips of wild ________.", a: ["flowers"] },
      { t: "gap", q: "Parks and ________ in cities support many bee species.", a: ["gardens"] }
    ] },
  { part: 4, title: "Practice: lecture on the history of maps", intro: "Write ONE WORD ONLY.",
    script: [
      ["M", "Maps are among the oldest forms of human communication. One of the earliest known maps, carved on a clay tablet, shows part of ancient Babylon. Greek scholars later used mathematics to estimate the size of the Earth with surprising accuracy. In medieval Europe, many maps were religious rather than practical, with Jerusalem placed at the centre. The age of exploration brought a new need for accurate maps for navigation. In 1569, Gerardus Mercator created a projection that allowed sailors to plot straight courses, although it greatly exaggerates the size of countries near the poles. Today, satellites provide data for digital maps that update almost instantly."]
    ],
    qs: [
      { t: "gap", q: "An early map was carved on a ________ tablet.", a: ["clay"] },
      { t: "gap", q: "Greek scholars used ________ to estimate the Earth's size.", a: ["mathematics", "maths", "math"] },
      { t: "gap", q: "Many medieval maps were ________ rather than practical.", a: ["religious"] },
      { t: "gap", q: "Mercator's projection helped ________ plot straight courses.", a: ["sailors"] },
      { t: "gap", q: "It exaggerates countries near the ________.", a: ["poles"] }
    ] }
);

PRACTICE.reading.push(
  { title: "Practice: The Science of Laughter",
    text: [
      "Laughter is often thought of as a response to jokes, but research suggests that most laughter has little to do with humour. In one well-known study, researchers recorded over a thousand episodes of laughter in everyday conversations and found that only about one in five followed anything resembling a joke. Most laughter followed ordinary remarks such as 'See you later'.",
      "This suggests that laughter is primarily a social signal. People are about thirty times more likely to laugh when they are with others than when they are alone. Laughter appears to communicate friendliness and help groups bond.",
      "Laughter is not unique to humans. Chimpanzees and other apes produce a panting sound during play, and even rats emit high-pitched calls when tickled, although these are too high for humans to hear without special equipment.",
      "Some health claims about laughter are supported by evidence, such as a temporary increase in pain tolerance. Others, such as claims that laughter strengthens the immune system, are based on small studies and remain uncertain."
    ],
    qs: [
      { t: "tfng", q: "Most laughter in the study followed jokes.", a: "F" },
      { t: "gap", q: "People are about ________ times more likely to laugh with others. (NUMBER)", a: ["30", "thirty"] },
      { t: "mc", q: "According to the passage, laughter is mainly", o: ["a reaction to humour", "a social signal", "a sign of nervousness", "a learned habit"], a: 1 },
      { t: "tfng", q: "Humans can easily hear rats' laughter.", a: "F" },
      { t: "tfng", q: "Laughter can temporarily increase pain tolerance.", a: "T" },
      { t: "tfng", q: "Laughter therapy is widely used in hospitals.", a: "NG" }
    ] },
  { title: "Practice: The Decline of Handwriting",
    text: [
      "As keyboards and touchscreens have become universal, many schools have reduced the time spent teaching handwriting. In some countries, cursive writing, where letters are joined together, is no longer a compulsory part of the curriculum.",
      "Supporters of this change argue that typing is a more useful skill in the modern workplace and that time could be better spent on other subjects. However, a number of studies suggest that writing by hand may have benefits for learning.",
      "In one experiment, students who took lecture notes by hand remembered the conceptual content better than those who typed. Researchers suggested that because handwriting is slower, students had to summarise ideas in their own words, while typists tended to copy lectures word for word.",
      "Brain-imaging studies of young children have also found that forming letters by hand activates reading-related brain areas more strongly than typing. Nevertheless, researchers caution that these studies are relatively small, and that the best approach may be to teach both skills."
    ],
    qs: [
      { t: "tfng", q: "Cursive writing is no longer compulsory in some countries.", a: "T" },
      { t: "mc", q: "Supporters of reducing handwriting lessons say that", o: ["handwriting is harmful", "typing is more useful at work", "children dislike writing", "pens are expensive"], a: 1 },
      { t: "tfng", q: "Students who typed notes remembered concepts better.", a: "F" },
      { t: "gap", q: "Handwriting is slower, so students must ________ ideas. (ONE WORD)", a: ["summarise", "summarize"] },
      { t: "tfng", q: "The brain-imaging studies involved thousands of children.", a: "F" },
      { t: "yng", q: "The researchers suggest teaching both handwriting and typing.", a: "Y" }
    ] },
  { title: "Practice: Glaciers as Water Towers",
    text: [
      "Mountain glaciers store vast quantities of fresh water. In regions such as the Himalayas and the Andes, meltwater from glaciers feeds rivers that supply water to hundreds of millions of people, particularly during dry seasons when rainfall is low.",
      "Because of rising global temperatures, most of the world's glaciers are shrinking. In the short term, faster melting can actually increase the amount of water in rivers. Scientists call the point at which this extra meltwater reaches its maximum 'peak water'. After that, river flows decline as glaciers become smaller.",
      "For some river basins, peak water has probably already passed. For others, it is expected in the coming decades. The consequences could include water shortages for farming, reduced hydroelectric power and greater competition between countries that share rivers.",
      "Adaptation measures include building reservoirs to store water from wet seasons, improving irrigation efficiency and, in some Himalayan villages, creating artificial 'ice stupas', towers of ice that melt slowly in spring when water is most needed."
    ],
    qs: [
      { t: "tfng", q: "Glacier meltwater is especially important in dry seasons.", a: "T" },
      { t: "tfng", q: "Faster melting always reduces river water immediately.", a: "F" },
      { t: "gap", q: "The maximum meltwater point is called 'peak ________'. (ONE WORD)", a: ["water"] },
      { t: "mc", q: "Which consequence is NOT mentioned?", o: ["shortages for farming", "less hydroelectric power", "rising sea levels", "competition between countries"], a: 2 },
      { t: "gap", q: "Some villages build ice ________ to store water. (ONE WORD)", a: ["stupas"] },
      { t: "tfng", q: "Ice stupas are used in the Andes.", a: "NG" }
    ] },
  { title: "Practice: The Economics of Free Apps",
    text: [
      "Most of the apps on people's phones cost nothing to download. Yet the companies that make them spend large sums on development. This raises an obvious question: how do free apps make money?",
      "The most common model is advertising. Apps collect information about users' behaviour, which allows advertisers to target people who are more likely to be interested in their products. Targeted advertisements can be sold at far higher prices than general ones.",
      "A second model, known as 'freemium', offers a basic version for free while charging for premium features. Only a small percentage of users usually pay, often fewer than five per cent, but this can be enough if the app has millions of users.",
      "Critics argue that free apps encourage excessive data collection and may be designed to maximise the time users spend on them, using techniques such as endless scrolling and frequent notifications. Some governments have introduced privacy laws requiring companies to explain what data they collect and to obtain users' consent."
    ],
    qs: [
      { t: "mc", q: "The most common way free apps make money is", o: ["donations", "advertising", "selling hardware", "government grants"], a: 1 },
      { t: "tfng", q: "Targeted adverts are cheaper than general adverts.", a: "F" },
      { t: "gap", q: "Offering basic features free and charging for extras is called '________'. (ONE WORD)", a: ["freemium"] },
      { t: "tfng", q: "Usually fewer than five per cent of freemium users pay.", a: "T" },
      { t: "mc", q: "Critics say free apps may be designed to", o: ["save battery", "maximise time spent", "protect privacy", "reduce notifications"], a: 1 },
      { t: "tfng", q: "All governments have introduced privacy laws.", a: "F" }
    ] },
  { title: "Practice: Why Cities Need Trees",
    text: [
      "Urban trees are increasingly recognised as essential infrastructure rather than mere decoration. A single large tree can lower nearby air temperatures by several degrees through shade and the evaporation of water from its leaves.",
      "Trees also reduce flooding. Their leaves intercept rainfall, and their roots help water soak into the ground instead of running into overloaded drains. In addition, studies have linked views of greenery to faster recovery among hospital patients and lower stress levels among office workers.",
      "However, planting trees in cities is not straightforward. Roots can damage pavements and underground pipes, and some species release pollen that triggers allergies. Young trees also need regular watering for their first few years, and many die because maintenance budgets are too small.",
      "Experts therefore recommend choosing species carefully, planting a diverse mix to reduce the risk from disease, and involving local residents, who are more likely to care for trees they helped to plant."
    ],
    qs: [
      { t: "tfng", q: "Large trees can lower nearby temperatures by several degrees.", a: "T" },
      { t: "mc", q: "Trees reduce flooding because", o: ["they block rivers", "roots help water soak into the ground", "they absorb drains", "they raise the ground"], a: 1 },
      { t: "tfng", q: "Views of greenery have been linked to faster patient recovery.", a: "T" },
      { t: "gap", q: "Some tree species release ________ that causes allergies. (ONE WORD)", a: ["pollen"] },
      { t: "tfng", q: "Most young urban trees die from disease.", a: "NG" },
      { t: "mc", q: "Experts recommend planting", o: ["one strong species", "a diverse mix", "only fruit trees", "trees far from homes"], a: 1 }
    ] },
  { title: "Practice: The Invention of Paper Money",
    text: [
      "The first paper money appeared in China more than a thousand years ago. Merchants in the Tang dynasty began depositing heavy coins with trusted agents in exchange for written receipts, which could be carried more easily over long distances.",
      "By the eleventh century, the Song dynasty government had taken control of issuing paper notes. This allowed trade to expand, but it also created a new temptation: printing too much money. Later governments issued so many notes that their value collapsed, a problem known today as inflation.",
      "When the Venetian traveller Marco Polo visited China in the thirteenth century, he was astonished that people accepted paper in place of gold and silver. In Europe, paper money did not become common until several centuries later.",
      "Today, paper money itself is declining in many countries as digital payments grow. In Sweden, for example, cash is used in only a small share of shop purchases."
    ],
    qs: [
      { t: "tfng", q: "Paper money first appeared in China.", a: "T" },
      { t: "mc", q: "Merchants first used paper receipts because coins were", o: ["rare", "heavy", "dirty", "illegal"], a: 1 },
      { t: "gap", q: "Printing too much money caused ________. (ONE WORD)", a: ["inflation"] },
      { t: "tfng", q: "Marco Polo introduced paper money to Europe.", a: "NG" },
      { t: "tfng", q: "Paper money became common in Europe at the same time as in China.", a: "F" },
      { t: "tfng", q: "In Sweden, most shop purchases are made with cash.", a: "F" }
    ] },
  { title: "Practice: Sleep and Memory in Students",
    text: [
      "Many students believe that staying up all night to revise is an effective way to prepare for exams. Research on sleep and memory suggests the opposite.",
      "During sleep, the brain replays and strengthens information learned during the day, a process known as consolidation. In experiments, people who slept after learning a list of words remembered significantly more the next day than those who stayed awake for the same period.",
      "Sleep before learning matters too. One study found that students deprived of a night's sleep were about 40 per cent less able to form new memories the following day.",
      "Researchers recommend spreading revision over several weeks, testing oneself rather than simply rereading notes, and protecting sleep, especially in the days immediately before an exam."
    ],
    qs: [
      { t: "yng", q: "The writer believes all-night revision is effective.", a: "N" },
      { t: "gap", q: "Strengthening memories during sleep is called ________. (ONE WORD)", a: ["consolidation"] },
      { t: "tfng", q: "People who slept after learning remembered more words.", a: "T" },
      { t: "gap", q: "Sleep-deprived students were about ________ per cent less able to form memories. (NUMBER)", a: ["40", "forty"] },
      { t: "mc", q: "Researchers recommend", o: ["rereading notes", "testing yourself", "studying only at night", "revising in one day"], a: 1 },
      { t: "tfng", q: "Naps are as effective as a full night's sleep.", a: "NG" }
    ] },
  { title: "Practice: Volunteering and Well-being",
    text: [
      "Volunteering is usually seen as something people do to help others, but a growing body of research suggests that volunteers themselves benefit. Surveys in several countries have found that people who volunteer regularly report higher life satisfaction than those who do not.",
      "Some of the strongest evidence concerns older adults. Long-term studies have found that older volunteers tend to have better physical health and lower rates of depression. However, researchers caution that healthier people may simply be more likely to volunteer in the first place.",
      "Motivation also appears to matter. In one study, people who volunteered mainly to help others showed health benefits, while those who volunteered mainly for their own advantage, for example to improve their CV, did not.",
      "Organisations that rely on volunteers have struggled in recent years, as people have less free time. Short, flexible opportunities, such as one-off events or online volunteering, have become increasingly popular."
    ],
    qs: [
      { t: "tfng", q: "Regular volunteers report higher life satisfaction.", a: "T" },
      { t: "mc", q: "Why are researchers cautious about the health findings?", o: ["samples were tiny", "healthier people may volunteer more", "the surveys were old", "volunteers lied"], a: 1 },
      { t: "tfng", q: "Volunteering to improve one's CV showed the same health benefits.", a: "F" },
      { t: "tfng", q: "Volunteer organisations have found it easier to recruit recently.", a: "F" },
      { t: "gap", q: "Short, ________ volunteering opportunities have become popular. (ONE WORD)", a: ["flexible"] },
      { t: "tfng", q: "Online volunteering is more popular than in-person volunteering.", a: "NG" }
    ] }
);

PRACTICE.writingT1.push(
  { prompt: "The bar chart shows the percentage of students in one country who chose four types of after-school activity in 2015 and 2025. Summarise the main features and make comparisons.",
    chart: { type: "bar", title: "After-school activities (% of students)", unit: "%", labels: ["Sports", "Music", "Coding", "Drama"], series: [{ name: "2015", values: [46, 22, 6, 14] }, { name: "2025", values: [38, 18, 24, 12] }] } },
  { prompt: "The line graph shows the price of three fruits (in rupees per kg) in one market from January to June. Summarise the main features and make comparisons.",
    chart: { type: "line", title: "Fruit prices (₹ per kg)", unit: "₹", labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], series: [{ name: "Mango", values: [220, 200, 160, 110, 80, 90] }, { name: "Apple", values: [140, 145, 150, 160, 170, 175] }, { name: "Banana", values: [50, 50, 52, 55, 55, 58] }] } },
  { prompt: "The table shows the average daily water use (litres per person) in five cities. Summarise the main features and make comparisons.",
    chart: { type: "table", title: "Daily water use (litres per person)", unit: "L", labels: ["City A", "City B", "City C", "City D", "City E"], series: [{ name: "Household", values: [150, 95, 210, 60, 120] }, { name: "Garden", values: [40, 10, 85, 5, 30] }] } },
  { prompt: "The bar chart shows the number of books borrowed (in thousands) from a library, by type, in three years. Summarise the main features and make comparisons.",
    chart: { type: "bar", title: "Library loans (thousands)", unit: "k", labels: ["Fiction", "Non-fiction", "Children's", "E-books"], series: [{ name: "2015", values: [62, 40, 35, 8] }, { name: "2020", values: [48, 31, 30, 41] }, { name: "2025", values: [44, 27, 33, 66] }] } },
  { prompt: "The line graph shows the percentage of households with internet access in three regions between 2005 and 2025. Summarise the main features and make comparisons.",
    chart: { type: "line", title: "Households with internet (%)", unit: "%", labels: ["2005", "2010", "2015", "2020", "2025"], series: [{ name: "Urban", values: [30, 52, 74, 88, 95] }, { name: "Suburban", values: [22, 41, 63, 80, 91] }, { name: "Rural", values: [5, 14, 33, 58, 76] }] } }
);
