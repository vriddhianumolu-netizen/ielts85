// IELTS Academic mock tests 1-3 (original practice content)
// Question types: gap = type answer (a = accepted answers), mc = choose (a = index), tfng = T/F/NG (a = 'T'|'F'|'NG'), yng = Y/N/NG
window.MOCKS = window.MOCKS || [];

MOCKS.push({
  id: 1, title: "City Life",
  listening: [
    { part: 1, title: "Joining a sports centre", intro: "A woman phones a sports centre to ask about membership. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["M", "Good morning, Riverside Sports Centre, Daniel speaking. How can I help?"],
        ["F", "Hi, I'd like to join the centre. Could you take my details?"],
        ["M", "Of course. What's your surname, please?"],
        ["F", "It's Kowalski. That's K-O-W-A-L-S-K-I."],
        ["M", "Thank you. And which membership are you interested in? We have standard, off-peak and family."],
        ["F", "I work shifts, so off-peak sounds best."],
        ["M", "Off-peak costs thirty-two pounds a month and lets you use the centre before four p.m. on weekdays."],
        ["F", "Great. Is there a joining fee?"],
        ["M", "Normally yes, but this month it's free. You'll also need to book an induction session. The next one is on Thursday at ten fifteen."],
        ["F", "Thursday works. Where do I go?"],
        ["M", "Come to the reception desk and ask for the fitness studio. Oh, and please bring a towel. We're trying to reduce laundry."],
        ["F", "Sure. And the car park, is it free?"],
        ["M", "Yes, for up to three hours."]
      ],
      qs: [
        { t: "gap", q: "Surname: ________", a: ["kowalski"] },
        { t: "gap", q: "Type of membership: ________", a: ["off-peak", "off peak"] },
        { t: "gap", q: "Monthly cost: £________", a: ["32", "thirty-two", "thirty two"] },
        { t: "gap", q: "Induction day: ________ at 10.15", a: ["thursday"] },
        { t: "gap", q: "Bring a ________ to the induction", a: ["towel"] }
      ] },
    { part: 2, title: "Guide to a city museum", intro: "A guide talks to visitors. Choose the correct answer.",
      script: [
        ["F", "Welcome to the Harbour Museum. Before you set off, a few practical points. The museum was originally a customs house, built in 1846, and it only became a museum in 1972. The ground floor tells the story of the port's fishing industry, and that's where most families start. However, if you only have an hour, I'd recommend going straight to the second floor, where our new exhibition on shipbuilding has just opened. Photography is allowed everywhere except in the map room, because the old maps are sensitive to light. The café is on the first floor, and today it closes early, at three, for a private event. Finally, our free guided tour leaves from the main staircase every ninety minutes."]
      ],
      qs: [
        { t: "mc", q: "The museum building was first used as", o: ["a fish market", "a customs house", "a shipyard office"], a: 1 },
        { t: "mc", q: "Visitors with only one hour should visit", o: ["the ground floor", "the first floor", "the second floor"], a: 2 },
        { t: "mc", q: "Photography is not allowed in the map room because", o: ["the maps can be damaged by light", "the room is too small", "the maps are borrowed"], a: 0 },
        { t: "gap", q: "Today the café closes at ________ o'clock.", a: ["3", "three"] },
        { t: "gap", q: "Guided tours start every ________ minutes.", a: ["90", "ninety"] }
      ] },
    { part: 3, title: "Planning a group presentation", intro: "Two students, Maya and Tom, discuss their urban planning presentation. Choose the correct answer.",
      script: [
        ["F", "Tom, we need to choose a focus for the urban planning presentation. I was thinking about traffic congestion."],
        ["M", "Everyone will do traffic. What about green roofs? There's lots of recent research, and the city council has a pilot scheme."],
        ["F", "Good point. Green roofs it is. Should we interview someone from the council?"],
        ["M", "I emailed them, but they said nobody's free until next month. Maybe a survey of residents instead?"],
        ["F", "A survey takes time to analyse. I'd rather use the council's published data. It's reliable and already public."],
        ["M", "Fine. Then I'll design the slides, since you're better at statistics."],
        ["F", "Deal. And our tutor said the weakest part of last term's presentations was the conclusion. People just repeated the introduction."],
        ["M", "So we should end with recommendations, not a summary."],
        ["F", "Exactly."]
      ],
      qs: [
        { t: "mc", q: "Why do they reject traffic congestion as a topic?", o: ["It is too difficult", "Many other students will choose it", "There is no data on it"], a: 1 },
        { t: "mc", q: "Why will they not interview a council worker?", o: ["Nobody is available soon", "The council refused to help", "It is not allowed by the tutor"], a: 0 },
        { t: "mc", q: "What source of information will they use?", o: ["A resident survey", "Published council data", "Newspaper reports"], a: 1 },
        { t: "mc", q: "What will Tom do?", o: ["Analyse the statistics", "Write the conclusion", "Prepare the slides"], a: 2 },
        { t: "mc", q: "How will they end the presentation?", o: ["With a summary", "With recommendations", "With questions for the audience"], a: 1 }
      ] },
    { part: 4, title: "Lecture: urban heat islands", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["M", "Today's lecture is about the urban heat island effect. Cities are often several degrees warmer than the surrounding countryside, especially at night. The main cause is that materials like concrete and asphalt absorb heat during the day and release it slowly after sunset. A second factor is the lack of vegetation. Plants cool the air through a process called evaporation. Tall buildings also trap heat by blocking the wind. The effects are serious: higher energy use for air conditioning and more health problems, particularly for elderly people. Solutions include painting roofs white, which reflects sunlight, and planting trees along streets, which provide shade. Some cities are also creating so-called cool corridors, which allow fresh air to flow into the centre."]
      ],
      qs: [
        { t: "gap", q: "Cities are warmer than the countryside, especially at ________.", a: ["night"] },
        { t: "gap", q: "Plants cool the air through ________.", a: ["evaporation"] },
        { t: "gap", q: "Tall buildings block the ________.", a: ["wind"] },
        { t: "gap", q: "Health problems especially affect ________ people.", a: ["elderly", "old", "older"] },
        { t: "gap", q: "Trees along streets provide ________.", a: ["shade"] }
      ] }
  ],
  reading: [
    { title: "The Return of the Urban Bicycle",
      text: [
        "In the middle of the twentieth century, the bicycle almost disappeared from the streets of many European cities. Rising incomes made cars affordable, and planners redesigned roads to move motor traffic as quickly as possible. In Amsterdam, which is now famous for cycling, several historic neighbourhoods were scheduled for demolition to make way for highways.",
        "The reversal began in the 1970s. A combination of the oil crisis and public protests about road deaths, many of them children, persuaded Dutch authorities to rethink their priorities. Separate cycle lanes, protected from cars by kerbs, were built along main roads, and traffic in residential streets was deliberately slowed.",
        "Researchers now argue that infrastructure matters more than culture. When the city of Seville built a connected network of 80 kilometres of protected lanes in just a few years, cycling trips increased roughly elevenfold. Before this, Spain had no strong cycling tradition. The key, according to transport experts, is that the network must be continuous: a lane that suddenly ends forces cyclists back into traffic and discourages beginners.",
        "Bicycle-sharing schemes have also played a role, although their record is mixed. Early schemes in the 1960s failed because bicycles were stolen or damaged. Modern systems use docking stations and smartphone payment, which reduce theft. However, some dockless schemes have been criticised for leaving bicycles scattered across pavements.",
        "Not everyone welcomes the change. Some shopkeepers fear that removing parking spaces will reduce their sales, although studies in several cities suggest that cyclists visit local shops more often than drivers, even if they spend less on each visit."
      ],
      qs: [
        { t: "tfng", q: "In the mid-twentieth century, some Amsterdam neighbourhoods were planned to be destroyed for roads.", a: "T" },
        { t: "tfng", q: "The oil crisis was the only reason Dutch policy changed.", a: "F" },
        { t: "tfng", q: "Seville already had a strong cycling culture before building its lanes.", a: "F" },
        { t: "tfng", q: "Seville's cycle network cost less than its planners expected.", a: "NG" },
        { t: "gap", q: "Experts say a cycle network must be ________ to attract beginners. (ONE WORD)", a: ["continuous"] },
        { t: "mc", q: "Why did early bike-sharing schemes fail?", o: ["They were too expensive", "Bicycles were stolen or damaged", "Nobody knew how to use them", "Cities refused to fund them"], a: 1 },
        { t: "mc", q: "According to studies, compared with drivers, cyclists", o: ["spend more per visit", "rarely use local shops", "visit local shops more frequently", "prefer large supermarkets"], a: 2 }
      ] },
    { title: "Why We Remember Music",
      text: [
        "Many people find that a song they have not heard for decades can instantly bring back vivid memories. Neuroscientists have long been interested in why music seems to have such a strong connection to memory.",
        "One explanation involves the way the brain processes music. Listening to a song activates many regions at once: areas linked to hearing, movement, emotion and memory. Because the experience is stored across a wide network, it may be more resistant to damage. This could explain a remarkable observation in patients with Alzheimer's disease, who often recognise and even sing familiar songs long after they have lost the ability to recognise family members.",
        "Emotion also plays a part. Events that produce strong feelings are generally remembered better, and music is a powerful trigger for emotion. The period between roughly the ages of ten and thirty appears especially important; people typically remember more songs from these years than from any other time of life, a pattern psychologists call the 'reminiscence bump'.",
        "Some therapists now use personalised playlists in care homes. Early studies report that residents become calmer and more talkative, although researchers warn that the samples are small and that the long-term benefits remain uncertain."
      ],
      qs: [
        { t: "yng", q: "The writer suggests that memories stored across many brain areas may be harder to destroy.", a: "Y" },
        { t: "tfng", q: "Patients with Alzheimer's always lose musical memory before other memories.", a: "F" },
        { t: "gap", q: "Psychologists call the strong memory for songs from ages 10–30 the 'reminiscence ________'.", a: ["bump"] },
        { t: "tfng", q: "Most songs people remember were released when they were over forty.", a: "F" },
        { t: "tfng", q: "Personalised playlists are used in some care homes.", a: "T" },
        { t: "tfng", q: "The long-term benefits of playlist therapy have been proven.", a: "F" }
      ] },
    { title: "Desert Agriculture",
      text: [
        "Farming in deserts has traditionally been considered almost impossible, yet several countries now produce significant quantities of food in extremely dry regions. The most important innovation has been drip irrigation, developed in Israel in the 1960s. Instead of flooding fields, drip systems deliver small amounts of water directly to the roots of each plant through plastic tubes, reducing water loss through evaporation by as much as half.",
        "Another approach is the use of greenhouses that recycle moisture. In some coastal desert projects, seawater is evaporated using solar energy, and the resulting fresh water is used to cool the greenhouse and water the crops. Supporters claim such projects could feed millions, but critics point out that the initial building costs are very high and that most projects remain experimental.",
        "A third strategy is to choose crops naturally suited to dry conditions. Date palms, for example, tolerate heat and salty soil, while certain varieties of millet need far less water than wheat or rice. Agricultural scientists argue that, in the long term, changing what is grown may be more effective than changing how it is grown.",
        "However, desert farming carries environmental risks. Pumping groundwater faster than it is naturally replaced can exhaust underground supplies within a few decades, and poor irrigation can leave salt deposits that make soil infertile."
      ],
      qs: [
        { t: "mc", q: "What is the main advantage of drip irrigation?", o: ["It is cheap to install", "It reduces water lost to evaporation", "It works without electricity", "It removes salt from soil"], a: 1 },
        { t: "gap", q: "Some greenhouse projects use ________ energy to evaporate seawater. (ONE WORD)", a: ["solar"] },
        { t: "tfng", q: "Seawater greenhouse projects are already feeding millions of people.", a: "F" },
        { t: "tfng", q: "Date palms can grow in salty soil.", a: "T" },
        { t: "gap", q: "Certain types of ________ need much less water than wheat. (ONE WORD)", a: ["millet"] },
        { t: "tfng", q: "Israel exports most of its drip irrigation technology to Africa.", a: "NG" },
        { t: "mc", q: "Which risk of desert farming is mentioned?", o: ["Loss of groundwater", "Damage from sandstorms", "Insect plagues", "High labour costs"], a: 0 }
      ] }
  ],
  writing: {
    t1: { prompt: "The chart below shows the percentage of journeys to work made by four types of transport in one city in 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "bar", title: "Journeys to work by transport (%)", unit: "%", labels: ["Car", "Bus", "Bicycle", "Walking"], series: [{ name: "2005", values: [58, 22, 6, 14] }, { name: "2025", values: [41, 25, 19, 15] }] } },
    t2: "Some people believe that cities should ban cars from their centres completely. Others think this would cause more problems than it solves. Discuss both views and give your own opinion. Write at least 250 words."
  },
  speaking: {
    p1: ["Do you live in a house or an apartment?", "What do you like most about your neighbourhood?", "How do you usually travel to work or college?", "Has your city changed much in recent years?"],
    p2: { topic: "Describe a place in your city where you like to spend time.", points: ["where it is", "what it looks like", "how often you go there", "and explain why you like spending time there"] },
    p3: ["Why do some people prefer living in big cities?", "What can governments do to make cities more pleasant to live in?", "Do you think people will move back to the countryside in the future? Why?"]
  }
});

MOCKS.push({
  id: 2, title: "Science & Health",
  listening: [
    { part: 1, title: "Booking a health check", intro: "A man books an appointment at a clinic. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Greenfield Medical Clinic, Sarah speaking."],
        ["M", "Hello, I'd like to book a general health check, please."],
        ["F", "Certainly. Your full name?"],
        ["M", "Arjun Mehta. M-E-H-T-A."],
        ["F", "And your date of birth?"],
        ["M", "The fourteenth of March, 1994."],
        ["F", "We have Tuesday afternoon or Friday morning available."],
        ["M", "Friday morning, please. I have meetings all Tuesday."],
        ["F", "Friday at eight forty then. Please don't eat anything for twelve hours before, because we'll take a blood test."],
        ["M", "Can I drink coffee?"],
        ["F", "Only water, I'm afraid. And bring a list of any medicines you take. The check costs sixty-five pounds, but it's covered if you have workplace insurance."],
        ["M", "I do. My company uses BrightCare."],
        ["F", "Perfect. Bring your insurance card."]
      ],
      qs: [
        { t: "gap", q: "Patient's surname: ________", a: ["mehta"] },
        { t: "gap", q: "Appointment day: ________", a: ["friday", "friday morning"] },
        { t: "gap", q: "Time: ________", a: ["8.40", "8:40", "eight forty"] },
        { t: "gap", q: "Before the test, the patient may only drink ________", a: ["water"] },
        { t: "gap", q: "Insurance company: ________", a: ["brightcare", "bright care"] }
      ] },
    { part: 2, title: "Volunteer programme at a hospital", intro: "A coordinator describes a volunteer programme. Choose the correct answer.",
      script: [
        ["F", "Thank you all for coming to this information evening. Our hospital volunteer programme has been running for eleven years and we now have over three hundred volunteers. The role most people ask about is the patient companion, where you simply sit and talk with patients who have few visitors. However, the area where we most urgently need help is actually the garden, which has become overgrown. All volunteers must complete a half-day training session, and you'll need a background check, which we pay for. We ask for a minimum commitment of four hours a week for six months. Many volunteers tell us the biggest benefit is not experience for their CV, but the friendships they make with other volunteers."]
      ],
      qs: [
        { t: "gap", q: "The programme has been running for ________ years.", a: ["11", "eleven"] },
        { t: "mc", q: "Where is help most urgently needed?", o: ["patient companion", "the garden", "the reception desk"], a: 1 },
        { t: "mc", q: "Who pays for the background check?", o: ["the volunteer", "the hospital", "the government"], a: 1 },
        { t: "gap", q: "Minimum commitment: four hours a week for ________ months.", a: ["6", "six"] },
        { t: "mc", q: "According to volunteers, the biggest benefit is", o: ["improving their CV", "making friends", "learning medical skills"], a: 1 }
      ] },
    { part: 3, title: "Discussing a biology experiment", intro: "Two students, Leo and Hana, discuss their experiment. Choose the correct answer.",
      script: [
        ["M", "Hana, the plants in group B grew much more slowly than we predicted."],
        ["F", "I noticed. I don't think it was the light, because both groups were by the same window."],
        ["M", "Maybe the soil? We used a different bag for group B."],
        ["F", "That's possible, but I suspect it's the watering. I was away for three days and I'm not sure anyone watered them."],
        ["M", "Ah. That's a flaw in our method. Should we repeat the experiment?"],
        ["F", "We don't have time before the deadline. I think we should report the problem honestly in the limitations section."],
        ["M", "Agreed. The tutor values that more than perfect results anyway. What about the graphs?"],
        ["F", "A line graph would show growth over time better than a bar chart."],
        ["M", "Okay, I'll make the line graph tonight."]
      ],
      qs: [
        { t: "mc", q: "What does Hana think caused the slow growth?", o: ["light", "soil", "watering"], a: 2 },
        { t: "mc", q: "Why won't they repeat the experiment?", o: ["There is not enough time", "The tutor said no", "They have no more plants"], a: 0 },
        { t: "mc", q: "Where will they mention the problem?", o: ["in the introduction", "in the limitations section", "in an email to the tutor"], a: 1 },
        { t: "mc", q: "What does the tutor value?", o: ["perfect results", "honest reporting", "long reports"], a: 1 },
        { t: "mc", q: "Which type of graph will they use?", o: ["bar chart", "pie chart", "line graph"], a: 2 }
      ] },
    { part: 4, title: "Lecture: the science of sleep", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["F", "This morning we'll look at sleep. Adults need between seven and nine hours a night, yet surveys suggest a third of adults regularly get less. Sleep happens in cycles of about ninety minutes. Deep sleep is when the body repairs tissue, while dream sleep, also called REM sleep, appears to help us process emotions and consolidate memory. One of the biggest modern threats to sleep is light from screens, which suppresses a hormone called melatonin. Interestingly, the timing of sleep also matters: teenagers naturally fall asleep later, which is why some researchers argue that schools should start later in the morning. Lack of sleep is linked to poor concentration, weight gain and a weaker immune system."]
      ],
      qs: [
        { t: "gap", q: "Deep sleep is when the body repairs ________.", a: ["tissue", "tissues"] },
        { t: "gap", q: "Dream sleep helps to consolidate ________.", a: ["memory", "memories"] },
        { t: "gap", q: "Screen light suppresses the hormone ________.", a: ["melatonin"] },
        { t: "gap", q: "Some researchers say ________ should start later.", a: ["schools", "school"] },
        { t: "gap", q: "Lack of sleep weakens the ________ system.", a: ["immune"] }
      ] }
  ],
  reading: [
    { title: "The Placebo Effect",
      text: [
        "A placebo is a treatment with no active ingredient, such as a sugar pill. Remarkably, patients who receive placebos often report real improvements, particularly in conditions involving pain, nausea or anxiety. This phenomenon, known as the placebo effect, has puzzled doctors for centuries.",
        "Modern research suggests that expectation is central. When patients believe a treatment will work, the brain can release natural painkillers called endorphins. Brain scans have shown measurable changes in pain-processing regions after a placebo is given. The context also matters: more expensive placebos tend to work better than cheap ones, and injections usually produce stronger effects than pills.",
        "Perhaps most surprising are 'open-label' placebos, where patients are told honestly that the pill contains no medicine. In several small trials, patients with chronic back pain still reported less pain than a control group. Researchers believe the ritual of taking a pill may itself trigger a response.",
        "The placebo effect creates a challenge for drug testing. New medicines must perform better than a placebo, not simply better than no treatment. Interestingly, placebo responses in some American pain trials have grown stronger over the past twenty-five years, making it harder for new drugs to prove their value. The reason for this increase is not yet understood."
      ],
      qs: [
        { t: "tfng", q: "Placebos are most effective for conditions such as pain and anxiety.", a: "T" },
        { t: "gap", q: "Believing in a treatment can cause the brain to release ________. (ONE WORD)", a: ["endorphins"] },
        { t: "tfng", q: "Cheap placebos are usually more effective than expensive ones.", a: "F" },
        { t: "tfng", q: "In open-label trials, patients know they are taking a placebo.", a: "T" },
        { t: "tfng", q: "Open-label placebos have been tested on thousands of patients.", a: "F" },
        { t: "mc", q: "Why does the placebo effect make drug testing difficult?", o: ["Drugs must beat a placebo", "Placebos are expensive", "Patients refuse placebos", "Doctors cannot measure pain"], a: 0 },
        { t: "tfng", q: "Scientists have explained why placebo responses are increasing in the US.", a: "F" }
      ] },
    { title: "Honeybees and Decision-Making",
      text: [
        "When a honeybee colony becomes too large, the old queen leaves with about half of the workers to form a new colony. The swarm gathers on a tree branch while a few hundred scout bees search for a suitable home, usually a hollow tree.",
        "Each scout that finds a promising site returns and performs a 'waggle dance' to advertise it. The better the site, the longer and more enthusiastically the scout dances, which recruits more bees to inspect it. Over time, support for weaker sites fades, because scouts advertising them dance less and eventually stop.",
        "The decision is made not by reaching total agreement but by reaching a threshold. When around fifteen scouts are present at the same site at once, they begin producing a special sound that prepares the whole swarm for flight. The process usually takes one or two days, and the swarm chooses the best available site in most cases.",
        "Biologist Thomas Seeley has suggested that human committees could learn from bees. He recommends that leaders avoid stating their own preference at the start, encourage open debate, and combine independent opinions, all features of the bees' method."
      ],
      qs: [
        { t: "gap", q: "The swarm waits on a ________ while scouts search. (TWO WORDS)", a: ["tree branch", "branch"] },
        { t: "mc", q: "How does a scout show a site is very good?", o: ["It brings food back", "It dances longer and more energetically", "It leads the queen there", "It produces a special smell"], a: 1 },
        { t: "tfng", q: "All scouts must agree before the swarm moves.", a: "F" },
        { t: "gap", q: "About ________ scouts at one site trigger the move. (NUMBER)", a: ["15", "fifteen"] },
        { t: "tfng", q: "Swarms sometimes take more than a week to decide.", a: "NG" },
        { t: "mc", q: "Seeley advises human leaders to", o: ["make quick decisions", "keep their opinion to themselves at first", "vote secretly", "use smaller groups"], a: 1 }
      ] },
    { title: "Microplastics in the Ocean",
      text: [
        "Microplastics are pieces of plastic smaller than five millimetres. Some are manufactured at this size, such as the beads once common in face washes, but most are formed when larger items break down under sunlight and waves.",
        "They have now been found in almost every marine environment studied, from Arctic sea ice to the deepest ocean trenches. Small sea creatures such as plankton mistake them for food, and the particles can then pass up the food chain to fish and, potentially, to humans.",
        "The health effects on people remain uncertain. Laboratory studies show that microplastics can carry harmful chemicals, but the doses used in such experiments are often much higher than real-world exposure. Scientists stress that more research is needed before firm conclusions can be drawn.",
        "Reducing the problem is difficult because microplastics are almost impossible to remove once they are in the sea. Experts therefore focus on prevention: better waste collection in coastal countries, filters on washing machines, which release synthetic fibres from clothing, and bans on unnecessary plastic products. Several countries have already banned microbeads in cosmetics."
      ],
      qs: [
        { t: "gap", q: "Microplastics are less than ________ millimetres in size. (NUMBER)", a: ["5", "five"] },
        { t: "tfng", q: "Most microplastics are originally made in their small size.", a: "F" },
        { t: "tfng", q: "Microplastics have been found in Arctic sea ice.", a: "T" },
        { t: "tfng", q: "It has been proven that microplastics cause disease in humans.", a: "F" },
        { t: "gap", q: "Washing machines release synthetic ________ from clothes. (ONE WORD)", a: ["fibres", "fibers"] },
        { t: "tfng", q: "Cleaning microplastics from the ocean is relatively easy.", a: "F" },
        { t: "tfng", q: "Microbead bans have reduced ocean plastic by half.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The line graph shows the average number of hours of sleep per night reported by three age groups in one country between 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "line", title: "Average hours of sleep per night", unit: "h", labels: ["2000", "2005", "2010", "2015", "2020", "2025"], series: [{ name: "Teenagers", values: [8.4, 8.1, 7.7, 7.3, 7.0, 6.9] }, { name: "Adults 25-60", values: [7.4, 7.3, 7.1, 7.0, 6.9, 7.0] }, { name: "Over 60", values: [6.8, 6.9, 7.0, 7.1, 7.2, 7.2] }] } },
    t2: "In many countries, people are living longer than ever before. Is this a positive or negative development for society? Write at least 250 words."
  },
  speaking: {
    p1: ["How many hours do you usually sleep?", "Do you do any exercise?", "Did you play sports when you were a child?", "Is healthy food expensive where you live?"],
    p2: { topic: "Describe a time when you made a change to have a healthier lifestyle.", points: ["what the change was", "when you made it", "how difficult it was", "and explain how you felt about it"] },
    p3: ["Why do many people find it hard to live healthily?", "Should governments tax unhealthy food?", "How has technology affected people's health?"]
  }
});

MOCKS.push({
  id: 3, title: "Work & Education",
  listening: [
    { part: 1, title: "Enrolling on an evening course", intro: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
      script: [
        ["F", "Westbridge College, enrolments. How can I help?"],
        ["M", "I'd like to enrol on an evening course in photography."],
        ["F", "We have beginners' and intermediate. Have you studied photography before?"],
        ["M", "No, never."],
        ["F", "Then beginners. It runs on Wednesday evenings for ten weeks, from seven to nine."],
        ["M", "And the fee?"],
        ["F", "It's one hundred and forty pounds, or one hundred and twenty for students."],
        ["M", "I'm not a student, so the full fee. Do I need my own camera?"],
        ["F", "Any camera is fine, even a phone for the first few weeks. The course takes place in the Arden Building, room 12."],
        ["M", "Could you spell Arden?"],
        ["F", "A-R-D-E-N."],
        ["M", "Thanks. And how do I pay?"],
        ["F", "Online, by card, through our website."]
      ],
      qs: [
        { t: "gap", q: "Level: ________", a: ["beginners", "beginner", "beginners'"] },
        { t: "gap", q: "Number of weeks: ________", a: ["10", "ten"] },
        { t: "gap", q: "Fee to pay: £________", a: ["140", "one hundred and forty"] },
        { t: "gap", q: "Building: ________ Building", a: ["arden"] },
        { t: "gap", q: "Room number: ________", a: ["12", "twelve"] }
      ] },
    { part: 2, title: "Starting at a new company", intro: "An HR manager talks to new employees. Choose the correct answer.",
      script: [
        ["M", "Welcome to Norland Software. Over the next week you'll each have a mentor, an experienced colleague who will answer everyday questions. Your manager will still set your objectives. We have a flexible working policy: you can work from home on two days a week once you've completed your three-month probation period. Lunch in the staff canteen is subsidised, so it costs about half the normal price. Please note the building is closed at weekends, so if you ever need to work then, you must do it from home. Finally, every Friday afternoon there is a learning session, where staff present something new they've learned. Attendance is optional, but highly recommended."]
      ],
      qs: [
        { t: "mc", q: "Who sets new employees' objectives?", o: ["their mentor", "their manager", "HR"], a: 1 },
        { t: "mc", q: "When can staff start working from home?", o: ["immediately", "after one month", "after probation"], a: 2 },
        { t: "gap", q: "Home working is allowed on ________ days a week.", a: ["2", "two"] },
        { t: "mc", q: "Canteen food costs", o: ["nothing", "about half price", "the normal price"], a: 1 },
        { t: "mc", q: "The Friday learning sessions are", o: ["compulsory", "optional", "only for managers"], a: 1 }
      ] },
    { part: 3, title: "Feedback on an essay", intro: "A tutor and a student discuss an essay. Choose the correct answer.",
      script: [
        ["F", "Come in, Raj. I've read your essay on online learning."],
        ["M", "Thanks. I was worried it was too long."],
        ["F", "The length is fine. Your main weakness is that you make strong claims without evidence. For example, you say online learning is 'always' less effective. That's not supported."],
        ["M", "I see. Should I add more statistics?"],
        ["F", "Not necessarily more statistics. Better to cite two or three good studies and discuss them critically."],
        ["M", "Okay. What about the structure?"],
        ["F", "The structure is clear, actually it's the best part. But your vocabulary is a little informal in places. Avoid words like 'stuff' and 'a lot'."],
        ["M", "Right. When should I resubmit?"],
        ["F", "By the end of next week."]
      ],
      qs: [
        { t: "mc", q: "What was Raj worried about?", o: ["the length", "the topic", "the deadline"], a: 0 },
        { t: "mc", q: "What is the main weakness of the essay?", o: ["poor grammar", "claims without evidence", "unclear structure"], a: 1 },
        { t: "mc", q: "The tutor suggests Raj should", o: ["add many statistics", "discuss a few studies critically", "interview experts"], a: 1 },
        { t: "mc", q: "What is the best part of the essay?", o: ["the vocabulary", "the conclusion", "the structure"], a: 2 },
        { t: "mc", q: "Raj must resubmit", o: ["tomorrow", "by the end of next week", "next month"], a: 1 }
      ] },
    { part: 4, title: "Lecture: the four-day work week", intro: "Complete the notes. Write ONE WORD ONLY.",
      script: [
        ["M", "Today I'll discuss trials of the four-day working week. In most trials, employees work eighty per cent of their previous hours but receive full pay, in return for maintaining their productivity. The largest trial, in the UK, involved about sixty companies. The majority chose to continue afterwards. Employees reported less stress and better sleep, and companies found that staff were less likely to resign, which reduced recruitment costs. However, the model is harder to apply in sectors like healthcare, where shifts must be covered continuously. Critics also note that the trials were voluntary, so participating firms may have been especially suitable. More research across different industries is therefore needed."]
      ],
      qs: [
        { t: "gap", q: "Employees work 80% of hours but receive full ________.", a: ["pay", "salary"] },
        { t: "gap", q: "They must maintain their ________.", a: ["productivity"] },
        { t: "gap", q: "Staff were less likely to ________, reducing recruitment costs.", a: ["resign", "leave", "quit"] },
        { t: "gap", q: "The model is difficult in ________ because shifts need continuous cover.", a: ["healthcare", "health"] },
        { t: "gap", q: "The trials were ________, so firms may have been especially suitable.", a: ["voluntary"] }
      ] }
  ],
  reading: [
    { title: "The Origins of the University",
      text: [
        "The word 'university' comes from the Latin universitas, meaning a community or corporation. The first European universities, such as Bologna, founded in 1088, were not buildings but associations of students and teachers who organised themselves to protect their interests.",
        "In Bologna, students held considerable power. They hired professors, set their salaries and could fine them for arriving late or skipping difficult topics. In Paris, by contrast, the university was controlled by the teachers, a model that eventually became more common across Europe.",
        "Teaching relied heavily on the lecture, partly because books were extremely expensive before the invention of the printing press. A teacher would read a text aloud and explain it while students copied notes. Examinations were usually oral, and students had to defend their arguments in public debate.",
        "Universities were not the first institutions of advanced learning. Centres such as Nalanda in India and al-Qarawiyyin in Morocco had taught students for centuries. However, the European model of self-governing institutions that award degrees has had the widest global influence."
      ],
      qs: [
        { t: "gap", q: "Universitas originally meant a community or ________. (ONE WORD)", a: ["corporation"] },
        { t: "tfng", q: "The first universities began as organisations of people rather than buildings.", a: "T" },
        { t: "tfng", q: "In Bologna, students could fine professors.", a: "T" },
        { t: "tfng", q: "The Paris model, where teachers had control, became less common over time.", a: "F" },
        { t: "mc", q: "Why were lectures so important?", o: ["Students could not read", "Books were very expensive", "Teachers were paid per lecture", "Churches required them"], a: 1 },
        { t: "tfng", q: "Nalanda had more students than Bologna.", a: "NG" },
        { t: "tfng", q: "The European university model has influenced the world more than others.", a: "T" }
      ] },
    { title: "The Gig Economy",
      text: [
        "The term 'gig economy' describes work arranged through digital platforms, where people are paid for individual tasks, such as deliveries or rides, rather than receiving a regular salary. Supporters highlight flexibility: workers can choose when and how much to work, which suits students, parents and people with other jobs.",
        "Critics, however, argue that this flexibility often comes at a cost. Gig workers are usually classified as self-employed, which means they may not receive sick pay, holiday pay or pensions. Their income can also be unpredictable, as platforms can change payment rates with little warning.",
        "Legal challenges have begun to change the situation in some countries. In 2021, the UK Supreme Court ruled that drivers for one major platform should be classified as 'workers', entitling them to the minimum wage and paid holidays. Spain introduced a law in the same year presuming that delivery riders are employees.",
        "Economists disagree about the overall size of the gig economy. Estimates vary widely because many people use gig work only occasionally to top up another income, and official surveys often fail to capture this."
      ],
      qs: [
        { t: "mc", q: "Supporters of the gig economy mainly praise its", o: ["high pay", "flexibility", "pensions", "job security"], a: 1 },
        { t: "tfng", q: "Gig workers classified as self-employed may not receive sick pay.", a: "T" },
        { t: "tfng", q: "Platforms must give months of notice before changing rates.", a: "F" },
        { t: "gap", q: "The UK Supreme Court ruled in ________ that some drivers are 'workers'. (NUMBER)", a: ["2021"] },
        { t: "gap", q: "Spain's law presumes delivery riders are ________. (ONE WORD)", a: ["employees"] },
        { t: "tfng", q: "Economists agree that the gig economy employs about 10% of workers.", a: "F" }
      ] },
    { title: "Learning a Second Language as an Adult",
      text: [
        "It is widely believed that children learn languages more easily than adults. Research partly supports this: people who begin learning a language before adolescence are more likely to achieve a native-like accent. A large online study of grammar knowledge also suggested that the ability to learn grammar to native level declines after about the age of seventeen.",
        "However, adults have real advantages. They can understand explicit grammar explanations, use learning strategies deliberately and draw on a wider vocabulary in their first language. In classroom settings over short periods, adults often progress faster than children.",
        "Motivation and amount of exposure appear to matter more than age for most practical purposes. Adults who use the language daily, especially in real conversations, tend to improve steadily. Researchers also emphasise the value of 'spaced repetition', reviewing new words at increasing intervals, which helps move vocabulary into long-term memory.",
        "In short, while adults may rarely sound exactly like native speakers, they can reach a very high level of fluency and accuracy, which is what most learners actually need."
      ],
      qs: [
        { t: "tfng", q: "Starting a language before adolescence makes a native accent more likely.", a: "T" },
        { t: "gap", q: "One study suggests grammar-learning ability declines after age ________. (NUMBER)", a: ["17", "seventeen"] },
        { t: "tfng", q: "In short classroom courses, adults often learn faster than children.", a: "T" },
        { t: "mc", q: "According to the passage, what matters most for practical success?", o: ["starting age", "motivation and exposure", "intelligence", "the teacher's accent"], a: 1 },
        { t: "gap", q: "Reviewing words at increasing intervals is called spaced ________. (ONE WORD)", a: ["repetition"] },
        { t: "yng", q: "The writer believes adults cannot become highly fluent.", a: "N" },
        { t: "tfng", q: "Bilingual adults earn higher salaries.", a: "NG" }
      ] }
  ],
  writing: {
    t1: { prompt: "The table below shows the percentage of graduates from one university who found work in five sectors in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: { type: "table", title: "Graduate employment by sector (%)", unit: "%", labels: ["Technology", "Education", "Finance", "Healthcare", "Creative arts"], series: [{ name: "2015", values: [18, 24, 21, 22, 15] }, { name: "2025", values: [33, 17, 19, 23, 8] }] } },
    t2: "Some people think that universities should focus on preparing students for employment. Others believe universities should provide knowledge for its own sake. Discuss both views and give your own opinion. Write at least 250 words."
  },
  speaking: {
    p1: ["Do you work or are you a student?", "What do you enjoy about your work or studies?", "Would you like to change your job in the future?", "Do you prefer working alone or in a team?"],
    p2: { topic: "Describe a teacher or mentor who helped you a lot.", points: ["who this person is", "how you met them", "what they taught you", "and explain why they were important to you"] },
    p3: ["What makes a good teacher?", "Will online learning replace traditional classrooms?", "Should education be free for everyone?"]
  }
});
