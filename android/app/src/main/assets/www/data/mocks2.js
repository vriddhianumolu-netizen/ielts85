// IELTS Academic mock tests 4-6
window.MOCKS = window.MOCKS || [];

MOCKS.push({
  id: 4, title: "Environment",
  listening: [
    { part: 1, title: "Community tree-planting day", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["M", "Hi, I'm calling about the community tree-planting day. Is it still happening?"],
        ["F", "Yes, it's on Saturday the ninth of November. Would you like to register?"],
        ["M", "Please. My name's Peter Okafor. O-K-A-F-O-R."],
        ["F", "Thanks, Peter. We meet at the north gate of Millfield Park at nine a.m."],
        ["M", "Do I need to bring tools?"],
        ["F", "No, we provide spades. But please wear strong boots, because the ground is very muddy at the moment."],
        ["M", "How many trees are you planting?"],
        ["F", "Around four hundred, mostly oak and birch."],
        ["M", "And is lunch provided?"],
        ["F", "Yes, soup and bread, donated by a local bakery."]
      ],
      qs: [
        { t: "gap", q: "Date: Saturday ________ November", a: ["9", "9th", "ninth"] },
        { t: "gap", q: "Volunteer surname: ________", a: ["okafor"] },
        { t: "gap", q: "Meeting point: the ________ of Millfield Park", a: ["north gate"] },
        { t: "gap", q: "Volunteers should wear strong ________", a: ["boots"] },
        { t: "gap", q: "Number of trees: about ________", a: ["400", "four hundred"] }
      ] },
    { part: 2, title: "A recycling centre talk", intro: "Choose the correct answer.",
      script: [
        ["F", "Hello everyone, and welcome to the Eastfield Recycling Centre. The centre opened in 2019 and processes waste from about forty thousand homes. You'll see that we separate materials into five main streams. Glass is the easiest to recycle, as it can be melted down endlessly without losing quality. The hardest material for us is actually soft plastic, like food wrappers, which often jams our machines, so please don't put it in your home recycling bin. Garden waste is turned into compost, which residents can collect for free every Saturday. Our biggest challenge is contamination, for example food left in containers, which can ruin a whole load."]
      ],
      qs: [
        { t: "gap", q: "The centre serves about ________ homes.", a: ["40000", "40,000", "forty thousand"] },
        { t: "mc", q: "Which material is easiest to recycle?", o: ["paper", "glass", "metal"], a: 1 },
        { t: "mc", q: "Soft plastic causes problems because it", o: ["jams machines", "is toxic", "is too heavy"], a: 0 },
        { t: "gap", q: "Free compost can be collected every ________.", a: ["saturday"] },
        { t: "mc", q: "The centre's biggest challenge is", o: ["lack of staff", "contamination", "rising costs"], a: 1 }
      ] },
    { part: 3, title: "Choosing a dissertation topic", intro: "Choose the correct answer.",
      script: [
        ["F", "So, Ben, have you decided on your environmental science dissertation?"],
        ["M", "I'm torn between coastal erosion and air quality in cities."],
        ["F", "Which has better data available?"],
        ["M", "Air quality. The city has monitoring stations with hourly records going back fifteen years."],
        ["F", "That's a big advantage. Coastal erosion would require fieldwork, and the weather in winter could delay you."],
        ["M", "True. But I'm worried air quality is a bit common."],
        ["F", "You could make it original by focusing on school zones, comparing pollution at drop-off times."],
        ["M", "That's a great angle. I'll need permission to use the data though."],
        ["F", "Actually it's public. You just need to cite it correctly."]
      ],
      qs: [
        { t: "mc", q: "Why is air quality a good choice?", o: ["better data", "more interesting", "easier fieldwork"], a: 0 },
        { t: "gap", q: "Records go back ________ years.", a: ["15", "fifteen"] },
        { t: "mc", q: "A problem with coastal erosion is", o: ["lack of interest", "possible weather delays", "high cost"], a: 1 },
        { t: "mc", q: "To make the project original, Ben will focus on", o: ["school zones", "factories", "motorways"], a: 0 },
        { t: "mc", q: "To use the data, Ben needs to", o: ["get permission", "pay a fee", "cite it correctly"], a: 2 }
      ] },
    { part: 4, title: "Lecture: coral reefs", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["F", "Coral reefs cover less than one per cent of the ocean floor, yet they support around a quarter of all marine species. Corals are animals that live in partnership with tiny algae. The algae provide food through photosynthesis and give corals their colour. When water becomes too warm, corals expel the algae and turn white, a process called bleaching. If temperatures return to normal quickly, corals can recover, but repeated bleaching often kills them. Other threats include pollution from farms and overfishing. Scientists are now experimenting with breeding heat-resistant corals in laboratories and transplanting them onto damaged reefs."]
      ],
      qs: [
        { t: "gap", q: "Reefs support about a ________ of marine species.", a: ["quarter"] },
        { t: "gap", q: "Algae give corals their ________.", a: ["colour", "color"] },
        { t: "gap", q: "Losing algae and turning white is called ________.", a: ["bleaching"] },
        { t: "gap", q: "Pollution from ________ is a threat.", a: ["farms", "farming"] },
        { t: "gap", q: "Scientists breed ________-resistant corals.", a: ["heat"] }
      ] }
  ],
  reading: [
    { title: "Rewilding Europe",
      text: [
        "Rewilding is a conservation approach that aims to restore natural processes rather than manage landscapes for specific species. Instead of mowing meadows or controlling animal numbers, rewilders try to reintroduce key species and then allow nature to take its course.",
        "One of the best-known examples is the Oostvaardersplassen in the Netherlands, where large grazing animals such as deer, wild horses and cattle were introduced in the 1980s. At first, the project was praised for creating rich wetland habitat for birds. However, in harsh winters, large numbers of animals starved because there were no predators to control their populations, and public protests led to changes in management.",
        "In contrast, the return of beavers to parts of Britain has been widely welcomed by scientists. Beavers build dams that slow the flow of rivers, which can reduce flooding downstream and create ponds that support insects, fish and amphibians. Some farmers, though, complain that beaver dams flood their fields.",
        "Supporters argue that rewilding is cheaper than traditional conservation in the long term. Critics respond that it can conflict with farming and that releasing large predators, such as wolves, raises safety concerns that cannot simply be dismissed."
      ],
      qs: [
        { t: "mc", q: "Rewilding mainly aims to", o: ["protect one species", "restore natural processes", "create farmland", "control animals"], a: 1 },
        { t: "tfng", q: "Animals at Oostvaardersplassen starved partly because there were no predators.", a: "T" },
        { t: "tfng", q: "The Oostvaardersplassen project was criticised from the very start.", a: "F" },
        { t: "gap", q: "Beaver dams can reduce ________ downstream. (ONE WORD)", a: ["flooding", "floods"] },
        { t: "tfng", q: "All farmers in Britain support the return of beavers.", a: "F" },
        { t: "tfng", q: "Wolves have already been released in Britain.", a: "NG" },
        { t: "mc", q: "Supporters say rewilding is", o: ["cheaper in the long term", "faster", "popular with farmers", "safe for all visitors"], a: 0 }
      ] },
    { title: "The Hidden Cost of Fast Fashion",
      text: [
        "Over the past two decades, clothing production has roughly doubled, while the average number of times a garment is worn before being thrown away has fallen sharply. This trend, known as fast fashion, depends on cheap production and rapidly changing styles.",
        "The environmental cost is substantial. Producing a single cotton T-shirt can require around 2,700 litres of water, mostly to grow the cotton. Synthetic fabrics like polyester avoid this water use but are made from oil and release microfibres when washed.",
        "Much clothing donated to charity shops in wealthy countries is not resold locally but exported, often to markets in Africa. While this provides livelihoods for traders, a growing share of the clothes is of such poor quality that it ends up in landfill.",
        "Solutions include rental and second-hand platforms, repair services, and laws making manufacturers responsible for the disposal of their products. France, for example, has banned the destruction of unsold clothing. Ultimately, however, many experts argue that consumers simply need to buy fewer, better-quality items."
      ],
      qs: [
        { t: "tfng", q: "Clothing production has about doubled in twenty years.", a: "T" },
        { t: "tfng", q: "People now wear each garment more times than before.", a: "F" },
        { t: "gap", q: "A cotton T-shirt can use about ________ litres of water. (NUMBER)", a: ["2700", "2,700"] },
        { t: "mc", q: "A disadvantage of polyester is that it", o: ["uses much water", "releases microfibres", "is expensive", "cannot be dyed"], a: 1 },
        { t: "tfng", q: "Most donated clothes are sold in local charity shops.", a: "F" },
        { t: "gap", q: "France has banned the ________ of unsold clothing. (ONE WORD)", a: ["destruction"] }
      ] },
    { title: "Solar Power in Developing Regions",
      text: [
        "Around 700 million people worldwide still lack access to electricity, most of them in rural sub-Saharan Africa. Extending national power grids to remote villages is often too expensive, so off-grid solar systems have emerged as an alternative.",
        "Small solar home systems, typically a panel, a battery and a few lights, can now be bought for less than the cost of a year's supply of kerosene for lamps. Kerosene is not only expensive but also dangerous, producing smoke that damages health and causing house fires.",
        "A key innovation has been 'pay-as-you-go' financing. Customers pay a small deposit and then make daily or weekly payments by mobile phone. If they stop paying, the system is switched off remotely. After one to two years, the customer owns the system.",
        "Larger 'mini-grids' powered by solar energy can supply whole villages, allowing businesses such as grain mills and refrigerated shops to operate. However, mini-grids require careful planning, as their costs must be covered by enough paying customers."
      ],
      qs: [
        { t: "gap", q: "About ________ million people lack electricity. (NUMBER)", a: ["700", "seven hundred"] },
        { t: "tfng", q: "Extending national grids to villages is usually cheap.", a: "F" },
        { t: "tfng", q: "A solar home system can cost less than a year of kerosene.", a: "T" },
        { t: "mc", q: "Which danger of kerosene is mentioned?", o: ["explosions in shops", "fires in homes", "water pollution", "theft"], a: 1 },
        { t: "gap", q: "Pay-as-you-go payments are made by ________ phone. (ONE WORD)", a: ["mobile"] },
        { t: "tfng", q: "Customers own the system after one to two years.", a: "T" },
        { t: "tfng", q: "Mini-grids are always profitable.", a: "F" }
      ] }
  ],
  writing: {
    t1: { prompt: "The table below shows the sources of electricity in one country in 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "table", title: "Electricity sources (% of total)", unit: "%", labels: ["Coal", "Natural gas", "Nuclear", "Wind", "Solar", "Other"], series: [{ name: "2010", values: [45, 30, 15, 4, 1, 5] }, { name: "2025", values: [12, 33, 14, 22, 14, 5] }] } },
    t2: "Some people think that individuals can do little to protect the environment, and that only governments and large companies can make a difference. To what extent do you agree or disagree? Write at least 250 words."
  },
  speaking: {
    p1: ["Do you like spending time in nature?", "What is the weather like where you live?", "Do you recycle at home?", "Have you ever planted a tree?"],
    p2: { topic: "Describe an environmental problem in your area.", points: ["what the problem is", "what causes it", "how it affects people", "and explain what could be done to solve it"] },
    p3: ["Who should be responsible for protecting the environment?", "Are young people more environmentally aware than older people?", "Will electric cars solve pollution problems?"]
  }
});

MOCKS.push({
  id: 5, title: "Technology",
  listening: [
    { part: 1, title: "Phone repair shop", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["M", "FixIt Phone Repairs, how can I help?"],
        ["F", "Hi, my phone screen is cracked. How much would a replacement cost?"],
        ["M", "What model is it?"],
        ["F", "It's a Novo X8."],
        ["M", "For the X8, a screen replacement is eighty-nine pounds, including a six-month guarantee."],
        ["F", "How long does it take?"],
        ["M", "About two hours, if we have the part in stock, which we do."],
        ["F", "Great. Can I come today?"],
        ["M", "Yes, we close at half past six. Please back up your photos first, just in case."],
        ["F", "Will do. What's your address?"],
        ["M", "We're at 27 Cannon Street, opposite the bank."]
      ],
      qs: [
        { t: "gap", q: "Phone model: Novo ________", a: ["x8"] },
        { t: "gap", q: "Cost: £________", a: ["89", "eighty-nine", "eighty nine"] },
        { t: "gap", q: "Guarantee: ________ months", a: ["6", "six"] },
        { t: "gap", q: "Before visiting, back up your ________", a: ["photos", "pictures"] },
        { t: "gap", q: "Address: 27 ________ Street", a: ["cannon"] }
      ] },
    { part: 2, title: "Library digital services", intro: "Choose the correct answer.",
      script: [
        ["F", "Good afternoon. I'm going to introduce the library's digital services. Firstly, all members can borrow e-books for up to three weeks, and they return automatically, so there are never late fees. We also offer free access to an online language-learning platform with thirty languages. The most popular service, surprisingly, is not e-books but digital newspapers and magazines, which you can read on any device. For those who are less confident with technology, we run free Digital Help sessions on Monday mornings, where volunteers help with anything from email to video calls. Please note you'll need your library card number and a PIN to sign in. If you've forgotten your PIN, ask at the front desk."]
      ],
      qs: [
        { t: "gap", q: "E-books can be borrowed for up to ________ weeks.", a: ["3", "three"] },
        { t: "mc", q: "Why are there no late fees for e-books?", o: ["they return automatically", "they are free", "the library forgives them"], a: 0 },
        { t: "mc", q: "The most popular service is", o: ["e-books", "language learning", "digital newspapers and magazines"], a: 2 },
        { t: "gap", q: "Digital Help sessions take place on ________ mornings.", a: ["monday"] },
        { t: "mc", q: "If you forget your PIN, you should", o: ["reset it online", "ask at the front desk", "phone the library"], a: 1 }
      ] },
    { part: 3, title: "Research on social media use", intro: "Choose the correct answer.",
      script: [
        ["M", "Priya, how's the survey on social media going?"],
        ["F", "Good, we got three hundred responses, more than we expected. But almost all were from students aged eighteen to twenty-two."],
        ["M", "So the sample isn't representative of all ages."],
        ["F", "Exactly. We'll have to say our findings only apply to young adults."],
        ["M", "What's the most interesting result so far?"],
        ["F", "Participants who used social media mainly to message friends reported higher well-being than those who mostly scrolled through other people's posts."],
        ["M", "So how people use it matters more than how long."],
        ["F", "That's what it suggests. Next, I want to run some interviews to understand why."],
        ["M", "Good idea. Qualitative data will add depth."]
      ],
      qs: [
        { t: "gap", q: "Number of survey responses: ________", a: ["300", "three hundred"] },
        { t: "mc", q: "What is the problem with the sample?", o: ["too small", "mostly young adults", "mostly women"], a: 1 },
        { t: "mc", q: "Which group reported higher well-being?", o: ["those who messaged friends", "those who scrolled posts", "those who used it least"], a: 0 },
        { t: "mc", q: "The result suggests that what matters most is", o: ["time spent online", "type of use", "number of friends"], a: 1 },
        { t: "mc", q: "What will Priya do next?", o: ["run interviews", "send another survey", "write the conclusion"], a: 0 }
      ] },
    { part: 4, title: "Lecture: the history of computing", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["M", "Today, a brief history of computing. In the nineteenth century, Charles Babbage designed a mechanical machine called the Analytical Engine, and Ada Lovelace wrote what is considered the first program for it. Early electronic computers of the 1940s used vacuum tubes, which were large, unreliable and produced enormous heat. The invention of the transistor in 1947 changed everything, allowing machines to become smaller and faster. In the 1970s, the microprocessor placed an entire processing unit on a single chip, making personal computers possible. Today, researchers are developing quantum computers, which could solve certain problems that would take ordinary computers thousands of years."]
      ],
      qs: [
        { t: "gap", q: "Babbage's machine was ________, not electronic.", a: ["mechanical"] },
        { t: "gap", q: "Lovelace wrote the first ________.", a: ["program", "programme"] },
        { t: "gap", q: "Vacuum tubes produced a lot of ________.", a: ["heat"] },
        { t: "gap", q: "The ________ was invented in 1947.", a: ["transistor"] },
        { t: "gap", q: "The microprocessor put a processing unit on one ________.", a: ["chip"] }
      ] }
  ],
  reading: [
    { title: "Can Machines Be Creative?",
      text: [
        "For much of the twentieth century, creativity was seen as a uniquely human ability. Computers could calculate, but producing original music, art or writing was thought to require imagination that machines lacked.",
        "Recent advances in artificial intelligence have challenged this view. Systems trained on huge collections of text and images can now generate poems, paintings and even film scripts in seconds. In some blind tests, listeners have been unable to distinguish AI-composed pieces from those written by humans.",
        "Philosophers remain divided over whether this counts as true creativity. One view holds that creativity requires intention and understanding; since AI systems produce output by identifying statistical patterns, they merely recombine existing material. Others point out that human artists also learn by absorbing and recombining the work of others.",
        "Meanwhile, practical questions are becoming urgent. Artists have raised concerns about their work being used to train systems without permission or payment, and courts in several countries are now considering who, if anyone, owns the copyright to AI-generated works."
      ],
      qs: [
        { t: "tfng", q: "In the twentieth century, creativity was widely considered unique to humans.", a: "T" },
        { t: "tfng", q: "Listeners can always identify AI-composed music.", a: "F" },
        { t: "mc", q: "One philosophical view says AI lacks creativity because it", o: ["works too fast", "has no intention or understanding", "copies exactly", "is too expensive"], a: 1 },
        { t: "yng", q: "The writer claims human artists also learn by recombining others' work.", a: "NG" },
        { t: "tfng", q: "Some artists object to their work being used to train AI without payment.", a: "T" },
        { t: "tfng", q: "Courts have agreed that AI developers own AI-generated works.", a: "F" }
      ] },
    { title: "The Printing Press",
      text: [
        "Around 1440, Johannes Gutenberg developed a printing press using movable metal type in Mainz, Germany. Although printing with wooden blocks had existed in China for centuries, and movable type had been invented there and in Korea, Gutenberg's system was particularly well suited to European alphabets, which use relatively few characters.",
        "Gutenberg's key innovations included a hand mould that produced identical metal letters quickly, and an oil-based ink that stuck well to metal. His famous Bible, printed in about 1455, demonstrated the quality the new technology could achieve.",
        "The effects were dramatic. By 1500, presses were operating in more than 250 European cities, and millions of books had been printed. The cost of books fell, literacy gradually increased, and ideas could spread far faster than before.",
        "Historians link printing to major developments such as the Reformation and the Scientific Revolution, as reformers and scientists could share their ideas widely and accurately. Some authorities, however, saw printing as a threat and introduced systems of censorship."
      ],
      qs: [
        { t: "tfng", q: "Gutenberg was the first person to invent movable type.", a: "F" },
        { t: "mc", q: "Why did Gutenberg's system suit Europe well?", o: ["Paper was cheap", "Alphabets had few characters", "Kings supported printing", "Wood was rare"], a: 1 },
        { t: "gap", q: "Gutenberg used an ________-based ink. (ONE WORD)", a: ["oil"] },
        { t: "gap", q: "By 1500, presses operated in over ________ cities. (NUMBER)", a: ["250"] },
        { t: "tfng", q: "Literacy increased immediately and rapidly across Europe.", a: "F" },
        { t: "tfng", q: "Gutenberg became very wealthy from his invention.", a: "NG" },
        { t: "mc", q: "Some authorities responded to printing by", o: ["building libraries", "introducing censorship", "banning paper", "lowering taxes"], a: 1 }
      ] },
    { title: "Driverless Cars",
      text: [
        "Self-driving cars use a combination of cameras, radar and lidar, a system that measures distance using laser light, to build a detailed picture of their surroundings. Software then predicts the behaviour of other road users and decides how the vehicle should respond.",
        "Supporters argue that automated vehicles could dramatically reduce accidents, since the great majority of crashes involve human error such as distraction or tiredness. They could also give independence to people unable to drive, such as some elderly or disabled people.",
        "Progress, however, has been slower than many predicted. Self-driving systems perform well on clear, well-mapped roads but struggle with unusual situations, such as roadworks, heavy snow or a police officer directing traffic by hand. Robotaxi services now operate in some cities, but usually only within limited areas.",
        "There are also unresolved legal and ethical questions. If an automated car causes an accident, it is unclear whether the owner, the manufacturer or the software developer should be responsible."
      ],
      qs: [
        { t: "gap", q: "Lidar measures distance using ________ light. (ONE WORD)", a: ["laser"] },
        { t: "tfng", q: "Most car crashes involve human error.", a: "T" },
        { t: "mc", q: "Which group could benefit from driverless cars?", o: ["truck drivers", "people unable to drive", "police officers", "car mechanics"], a: 1 },
        { t: "tfng", q: "Progress has been faster than experts predicted.", a: "F" },
        { t: "tfng", q: "Self-driving cars have difficulty in heavy snow.", a: "T" },
        { t: "tfng", q: "Robotaxis operate across entire countries.", a: "F" },
        { t: "tfng", q: "The law clearly says manufacturers are responsible for accidents.", a: "F" }
      ] }
  ],
  writing: {
    t1: { prompt: "The bar chart below shows the percentage of people in different age groups who used three types of digital device daily in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "bar", title: "Daily device use by age group (%)", unit: "%", labels: ["16-24", "25-44", "45-64", "65+"], series: [{ name: "Smartphone", values: [98, 96, 88, 64] }, { name: "Laptop", values: [71, 68, 55, 32] }, { name: "Tablet", values: [34, 46, 41, 38] }] } },
    t2: "Some people believe that artificial intelligence will create more jobs than it destroys. Others think it will lead to widespread unemployment. Discuss both views and give your own opinion. Write at least 250 words."
  },
  speaking: {
    p1: ["How often do you use your phone?", "What apps do you use most?", "Do you think you spend too much time online?", "Did you use computers when you were young?"],
    p2: { topic: "Describe a piece of technology you find very useful.", points: ["what it is", "when you got it", "how you use it", "and explain why it is so useful to you"] },
    p3: ["How has technology changed the way people communicate?", "Should children have smartphones?", "What jobs might disappear because of technology?"]
  }
});

MOCKS.push({
  id: 6, title: "Travel & Culture",
  listening: [
    { part: 1, title: "Booking a walking holiday", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Highland Trails, good morning."],
        ["M", "Hello, I'm interested in your walking holidays in Scotland."],
        ["F", "We have a five-day and a seven-day tour. Which would you like?"],
        ["M", "Seven days, please, in June if possible."],
        ["F", "The June tour starts on the fourteenth. The price is eight hundred and fifty pounds per person, which includes accommodation and breakfast."],
        ["M", "What about luggage?"],
        ["F", "Your luggage is transported to each hotel by van, so you only carry a small backpack."],
        ["M", "And how fit do I need to be?"],
        ["F", "You should be comfortable walking about eighteen kilometres a day."],
        ["M", "That's fine. What's the nearest airport?"],
        ["F", "Inverness. We collect guests from there."]
      ],
      qs: [
        { t: "gap", q: "Length of tour: ________ days", a: ["7", "seven"] },
        { t: "gap", q: "Start date: June ________", a: ["14", "14th", "fourteenth"] },
        { t: "gap", q: "Price per person: £________", a: ["850", "eight hundred and fifty"] },
        { t: "gap", q: "Daily walking distance: about ________ km", a: ["18", "eighteen"] },
        { t: "gap", q: "Pick-up airport: ________", a: ["inverness"] }
      ] },
    { part: 2, title: "Festival information", intro: "Choose the correct answer.",
      script: [
        ["M", "Welcome to this year's Lantern Festival. The festival celebrates its twentieth anniversary this year. The main event, the lantern parade, starts at the river bridge at seven p.m. and ends in the town square. Children under twelve can take part in a free lantern-making workshop in the afternoon, but places are limited, so book early at the information tent. Food stalls are located along the riverside, and this year all stalls use reusable plates to reduce waste. Please note that the town centre will be closed to cars from four p.m., so we strongly recommend using the free shuttle buses from the station."]
      ],
      qs: [
        { t: "gap", q: "This is the festival's ________ anniversary.", a: ["20th", "twentieth"] },
        { t: "mc", q: "The parade starts at", o: ["the town square", "the river bridge", "the station"], a: 1 },
        { t: "mc", q: "Book the workshop at", o: ["the information tent", "online", "the town hall"], a: 0 },
        { t: "mc", q: "Food stalls this year use", o: ["paper plates", "reusable plates", "no plates"], a: 1 },
        { t: "gap", q: "The centre is closed to cars from ________ p.m.", a: ["4", "four"] }
      ] },
    { part: 3, title: "Tourism case study", intro: "Choose the correct answer.",
      script: [
        ["F", "Sam, for our tourism case study, I suggest we look at Venice."],
        ["M", "It's a famous example of overtourism, but has it been studied too much?"],
        ["F", "Maybe. What about a smaller place, like Hallstatt in Austria? It has fewer than a thousand residents but receives about a million visitors a year."],
        ["M", "That's a striking ratio. What measures have they introduced?"],
        ["F", "They limited the number of tour buses and introduced time slots for coaches."],
        ["M", "We should assess whether those measures worked."],
        ["F", "Agreed. The difficulty is that most sources are in German."],
        ["M", "I studied German at school, so I can manage the main reports."]
      ],
      qs: [
        { t: "mc", q: "Why does Sam hesitate about Venice?", o: ["it is too far", "it has been studied a lot", "it has little data"], a: 1 },
        { t: "gap", q: "Hallstatt receives about one ________ visitors a year.", a: ["million"] },
        { t: "mc", q: "Hallstatt limited the number of", o: ["hotels", "tour buses", "restaurants"], a: 1 },
        { t: "mc", q: "What will the students evaluate?", o: ["whether measures worked", "resident opinions", "hotel prices"], a: 0 },
        { t: "mc", q: "Who will read the German reports?", o: ["the woman", "Sam", "a translator"], a: 1 }
      ] },
    { part: 4, title: "Lecture: the Silk Road", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["F", "The Silk Road was not a single road but a network of trade routes linking China with the Mediterranean. Although silk gave the network its name, many other goods were traded, including spices, glass and paper. Very few merchants travelled the whole route; instead, goods passed through many hands, increasing in price at each stage. Camels were essential for crossing deserts because they can survive long periods without water. Perhaps the most important exchange was not goods but ideas. Religions, languages and technologies spread along the routes. The network declined after sea routes became cheaper and safer from the fifteenth century."]
      ],
      qs: [
        { t: "gap", q: "The Silk Road was a ________ of routes.", a: ["network"] },
        { t: "gap", q: "Goods traded included spices, glass and ________.", a: ["paper"] },
        { t: "gap", q: "Prices rose at each ________.", a: ["stage"] },
        { t: "gap", q: "________ were essential for crossing deserts.", a: ["camels"] },
        { t: "gap", q: "The network declined as ________ routes became cheaper.", a: ["sea"] }
      ] }
  ],
  reading: [
    { title: "Why Languages Disappear",
      text: [
        "Of the roughly 7,000 languages spoken today, linguists estimate that nearly half are endangered, meaning they are unlikely to be learned by the next generation. A language usually dies not because its speakers are lost, but because they gradually switch to a more dominant language for economic or social reasons.",
        "The process often follows a pattern. First, parents decide that a regional or national language offers their children better opportunities. Children become bilingual, then increasingly use the dominant language, and eventually the original language is spoken only by elderly people.",
        "The loss matters for several reasons. Each language contains unique knowledge, for example names for local plants and their medicinal uses. Languages also encode different ways of describing the world: some languages describe directions only with compass terms such as north and south, rather than left and right.",
        "Revival is possible but difficult. Hebrew, once used mainly in religious contexts, became the everyday language of millions in the twentieth century. Welsh and Maori have also seen growth thanks to schools teaching in these languages and media broadcasting."
      ],
      qs: [
        { t: "gap", q: "About ________ languages are spoken today. (NUMBER)", a: ["7000", "7,000"] },
        { t: "tfng", q: "Languages usually die because all speakers die suddenly.", a: "F" },
        { t: "tfng", q: "The decision to stop passing on a language often starts with parents.", a: "T" },
        { t: "mc", q: "Which example of unique knowledge is given?", o: ["recipes", "names of medicinal plants", "songs", "family histories"], a: 1 },
        { t: "tfng", q: "Some languages use compass directions instead of left and right.", a: "T" },
        { t: "gap", q: "________ became an everyday language for millions in the 20th century. (ONE WORD)", a: ["hebrew"] },
        { t: "tfng", q: "Welsh is now spoken by the majority of people in Wales.", a: "NG" }
      ] },
    { title: "The Science of Jet Lag",
      text: [
        "Jet lag occurs when travellers cross several time zones and their internal body clock no longer matches local time. This clock, located in a part of the brain called the suprachiasmatic nucleus, regulates sleep, hunger and body temperature over a roughly 24-hour cycle.",
        "Most people find travelling east harder than travelling west. Flying west lengthens the day, and the body clock adjusts more easily to a longer day than a shorter one. On average, the body adjusts by about one hour per day.",
        "Light is the most powerful signal for resetting the clock. Experts therefore recommend seeking daylight at the right time: after flying east, morning light helps, while after flying west, evening light is better. Some travellers take melatonin, although the evidence for its effectiveness is mixed.",
        "Common advice such as drinking plenty of water and avoiding alcohol on the flight may make travellers feel better generally, but does not reset the body clock itself."
      ],
      qs: [
        { t: "mc", q: "The body clock does NOT regulate", o: ["sleep", "hunger", "body temperature", "eyesight"], a: 3 },
        { t: "tfng", q: "Most people find flying east easier.", a: "F" },
        { t: "gap", q: "The body adjusts by about one ________ per day. (ONE WORD)", a: ["hour"] },
        { t: "mc", q: "After flying east, travellers should seek", o: ["morning light", "evening light", "darkness", "midday sun"], a: 0 },
        { t: "tfng", q: "Melatonin is proven to cure jet lag.", a: "F" },
        { t: "tfng", q: "Drinking water resets the body clock.", a: "F" }
      ] },
    { title: "Museums in the Digital Age",
      text: [
        "Museums have traditionally been places where valuable objects are protected and displayed. In recent years, however, many have digitised their collections, making high-resolution images freely available online.",
        "Some curators initially feared that online access would reduce visitor numbers. In practice, evidence suggests the opposite: people who view collections online are often inspired to see the real objects. The experience of standing in front of an original artwork appears to remain valuable.",
        "Digital technology is also changing exhibitions themselves. Interactive screens, virtual reality reconstructions of ancient sites and audio guides on visitors' own phones have become common. Critics worry that screens can distract from the objects, turning museums into entertainment centres.",
        "Another debate concerns the return of objects taken during colonial periods. Digitisation has made it easier for communities to discover where their cultural heritage is held, increasing pressure on museums to return items. Several European museums have recently returned objects to countries in Africa."
      ],
      qs: [
        { t: "tfng", q: "Many museums now offer free online images of their collections.", a: "T" },
        { t: "tfng", q: "Online access has greatly reduced museum visitor numbers.", a: "F" },
        { t: "mc", q: "Critics fear that screens in museums may", o: ["be too expensive", "distract from objects", "break easily", "confuse children"], a: 1 },
        { t: "gap", q: "Some museums use virtual ________ to reconstruct ancient sites. (ONE WORD)", a: ["reality"] },
        { t: "tfng", q: "Digitisation has increased pressure to return colonial-era objects.", a: "T" },
        { t: "tfng", q: "All European museums have returned their colonial-era objects.", a: "F" },
        { t: "tfng", q: "Museum entrance fees have risen because of digitisation costs.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The line graph shows the number of international tourist arrivals (in millions) in four regions between 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "line", title: "International tourist arrivals (millions)", unit: "m", labels: ["2000", "2005", "2010", "2015", "2020", "2025"], series: [{ name: "Europe", values: [390, 450, 490, 610, 240, 720] }, { name: "Asia-Pacific", values: [110, 155, 205, 285, 60, 330] }, { name: "Americas", values: [130, 135, 150, 195, 70, 220] }, { name: "Africa", values: [26, 35, 50, 54, 19, 75] }] } },
    t2: "International tourism has brought enormous benefits to many places, but it has also caused problems. Do the advantages of international tourism outweigh the disadvantages? Write at least 250 words."
  },
  speaking: {
    p1: ["Do you like travelling?", "Where did you go on your last holiday?", "Do you prefer travelling alone or with others?", "What is a traditional festival in your country?"],
    p2: { topic: "Describe a trip you remember well.", points: ["where you went", "who you went with", "what you did there", "and explain why you remember it so well"] },
    p3: ["Why do people like to travel abroad?", "How can tourism damage local culture?", "Is it important to preserve traditional customs?"]
  }
});
