const moviesData = [
            // 1. KUBRICK VAULT
            { id: "k1", title: "2001: A Space Odyssey", year: "1968", director: "Stanley Kubrick", category: "kubrick", genre: "Sci-Fi", rating: "8.3/10", runtime: "149 min", tag: "Kubrick", desc: "A landmark sci-fi journey evaluating human evolution and artificial intelligence.", plot: "After uncovering a mysterious monolith buried beneath the lunar surface, a crew of astronauts and the sentient supercomputer HAL 9000 embark on a voyage to Jupiter.", trivia: "Kubrick pioneered groundbreaking visual effects techniques without CGI, revolutionizing sci-fi cinema forever.", cast: "Keir Dullea, Gary Lockwood, William Sylvester" },
            { id: "k2", title: "A Clockwork Orange", year: "1971", director: "Stanley Kubrick", category: "kubrick", genre: "Crime", rating: "8.3/10", runtime: "136 min", tag: "Kubrick", desc: "Dystopian exploration of free will, morality, and state aversion conditioning.", plot: "In a futuristic Britain, charismatic delinquent Alex DeLarge is jailed and undergoes psychological conditioning to rehabilitate his violent tendencies.", trivia: "Withdrawn from British release by Kubrick himself following controversy and copycat crime concerns.", cast: "Malcolm McDowell, Patrick Magee, Michael Bates" },
            { id: "k3", title: "The Shining", year: "1980", director: "Stanley Kubrick", category: "kubrick", genre: "Horror", rating: "8.4/10", runtime: "146 min", tag: "Kubrick", desc: "Psychological horror masterpiece set in the isolated, snowbound Overlook Hotel.", plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.", trivia: "Kubrick famously demanded dozens of retakes for single scenes to build genuine claustrophobia and psychological strain.", cast: "Jack Nicholson, Shelley Duvall, Danny Lloyd" },
            { id: "k4", title: "Full Metal Jacket", year: "1987", director: "Stanley Kubrick", category: "kubrick", genre: "Drama", rating: "8.3/10", runtime: "116 min", tag: "Kubrick", desc: "A pragmatic boot camp drill instructor and Vietnam war combat sequence study.", plot: "Follows a pragmatic U.S. Marine from recruit training to bloody street fighting during the Tet Offensive in Vietnam.", trivia: "R. Lee Ermey was originally hired as a technical advisor before Kubrick cast him as Gunnery Sergeant Hartman due to his authentic outbursts.", cast: "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio" },
            { id: "k5", title: "Eyes Wide Shut", year: "1999", director: "Stanley Kubrick", category: "kubrick", genre: "Drama", rating: "7.5/10", runtime: "159 min", tag: "Kubrick", desc: "Kubrick's final mystery examining marriage, fidelity, and secret societies.", plot: "A New York City doctor embarks on a night-long odyssey of sexual and moral discovery after his wife admits to dangerous desires.", trivia: "Kubrick submitted his final cut to Warner Bros. just six days before his death in March 1999.", cast: "Tom Cruise, Nicole Kidman, Todd Field" },
            { id: "k6", title: "Barry Lyndon", year: "1975", director: "Stanley Kubrick", category: "kubrick", genre: "Drama", rating: "8.1/10", runtime: "185 min", tag: "Kubrick", desc: "Visually stunning 18th-century period drama following an ambitious Irish rogue.", plot: "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.", trivia: "Kubrick used special NASA-developed Carl Zeiss lenses with extreme fast apertures (f/0.7) to shoot scenes illuminated purely by candlelight.", cast: "Ryan O'Neal, Marisa Berenson, Patrick Magee" },
            { id: "k7", title: "Dr. Strangelove", year: "1964", director: "Stanley Kubrick", category: "kubrick", genre: "Comedy", rating: "8.4/10", runtime: "95 min", tag: "Kubrick", desc: "Brilliant Cold War political satire detailing nuclear paranoia and military absurdity.", plot: "An insane American general orders a bombing attack on the Soviet Union, triggering a political race to stop the nuclear holocaust.", trivia: "Peter Sellers played three entirely distinct roles in the film: Captain Mandrake, President Muffley, and Dr. Strangelove.", cast: "Peter Sellers, George C. Scott, Sterling Hayden" },
            { id: "k8", title: "Spartacus", year: "1960", director: "Stanley Kubrick", category: "kubrick", genre: "Action", rating: "7.9/10", runtime: "197 min", tag: "Kubrick", desc: "Epic historical drama chronicling the famous Roman gladiator slave rebellion.", plot: "The slave Spartacus leads a violent revolt against the corrupt Roman Republic while army general Crassus seeks to crush them.", trivia: "Kubrick was brought on after original director Anthony Mann was fired, leading to friction with star/producer Kirk Douglas.", cast: "Kirk Douglas, Laurence Olivier, Jean Simmons" },
            { id: "k9", title: "Paths of Glory", year: "1957", director: "Stanley Kubrick", category: "kubrick", genre: "Drama", rating: "8.4/10", runtime: "88 min", tag: "Kubrick", desc: "A harrowing anti-war masterpiece set in the trenches of World War I France.", plot: "After refusing to attack an impossible enemy position, a general accuses his soldiers of cowardice and selects three to face execution.", trivia: "Banned in France for almost twenty years due to its critical portrayal of the French military command during WWI.", cast: "Kirk Douglas, Ralph Meeker, Adolphe Menjou" },
            { id: "k10", title: "The Killing", year: "1956", director: "Stanley Kubrick", category: "kubrick", genre: "Crime", rating: "8.0/10", runtime: "85 min", tag: "Kubrick", desc: "Tight film-noir heist thriller following a high-stakes racetrack robbery.", plot: "A veteran convict assembles a team of meticulous criminals to pull off a multi-million dollar racetrack heist.", trivia: "Utilized a non-linear timeline narrative that deeply influenced Quentin Tarantino's approach to Reservoir Dogs and Pulp Fiction.", cast: "Sterling Hayden, Coleen Gray, Vince Edwards" },

            // 2. 1990s CLASSICS
            { id: "n1", title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino", category: "1990s", genre: "Crime", rating: "8.9/10", runtime: "154 min", tag: "1990s", desc: "Tarantino's multi-strand crime drama that defined 90s independent cinema.", plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", trivia: "Won the Palme d'Or at the 1994 Cannes Film Festival and re-energized John Travolta's career.", cast: "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis" },
            { id: "n2", title: "The Matrix", year: "1999", director: "Lana & Lilly Wachowski", category: "1990s", genre: "Sci-Fi", rating: "8.7/10", runtime: "136 min", tag: "1990s", desc: "Groundbreaking sci-fi introducing bullet time and cyber-philosophical themes.", plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", trivia: "Popularized the 'bullet time' visual effect and revolutionized action choreography in Hollywood.", cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss" },
            { id: "n3", title: "Fight Club", year: "1999", director: "David Fincher", category: "1990s", genre: "Drama", rating: "8.8/10", runtime: "139 min", tag: "1990s", desc: "An insomniac office worker and a devil-may-care soap maker form an underground club.", plot: "Disillusioned with consumer culture, an unnamed narrator forms an underground fight club that evolves into a radical anti-materialist movement.", trivia: "Initial box office disappointment that transformed into a massive cult classic on home video.", cast: "Brad Pitt, Edward Norton, Helena Bonham Carter" },
            { id: "n4", title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont", category: "1990s", genre: "Drama", rating: "9.3/10", runtime: "142 min", tag: "1990s", desc: "Inspiring drama of hope, friendship, and resilience inside Shawshank prison.", plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", trivia: "Adapted from a Stephen King novella; became the highest-rated movie on IMDb despite a modest theatrical run.", cast: "Tim Robbins, Morgan Freeman, Bob Gunton" },
            { id: "n5", title: "Goodfellas", year: "1990", director: "Martin Scorsese", category: "1990s", genre: "Crime", rating: "8.7/10", runtime: "145 min", tag: "1990s", desc: "Scorsese's fast-paced chronicle of high-level mob life and eventual downfall.", plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.", trivia: "Joe Pesci's famous 'How am I funny?' scene was mostly improvised based on a real interaction Pesci had in his youth.", cast: "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco" },
            { id: "n6", title: "The Silence of the Lambs", year: "1991", director: "Jonathan Demme", category: "1990s", genre: "Horror", rating: "8.6/10", runtime: "118 min", tag: "1990s", desc: "Psychological thriller featuring the iconic cannibalistic psychiatrist Hannibal Lecter.", plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.", trivia: "One of only three films in history to sweep the 'Big Five' Academy Awards (Picture, Director, Actor, Actress, Screenplay).", cast: "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney" },
            { id: "n7", title: "Se7en", year: "1995", director: "David Fincher", category: "1990s", genre: "Crime", rating: "8.6/10", runtime: "127 min", tag: "1990s", desc: "Dark Neo-noir thriller tracking a serial killer staging gruesome crime scenes.", plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.", trivia: "David Fincher fought the studio executives to preserve the infamous grim ending of the film.", cast: "Morgan Freeman, Brad Pitt, Kevin Spacey, Gwyneth Paltrow" },
            { id: "n8", title: "Saving Private Ryan", year: "1998", director: "Steven Spielberg", category: "1990s", genre: "Action", rating: "8.6/10", runtime: "169 min", tag: "1990s", desc: "Visceral WWII war film depicting the Normandy landings and a high-stakes search.", plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed.", trivia: "The opening 27-minute D-Day landing sequence cost $12 million and used over 1,500 real military re-enactors.", cast: "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns" },
            { id: "n9", title: "Jurassic Park", year: "1993", director: "Steven Spielberg", category: "1990s", genre: "Sci-Fi", rating: "8.2/10", runtime: "127 min", tag: "1990s", desc: "Blockbuster adventure featuring groundbreaking CGI and practical animatronic dinosaurs.", plot: "A pragmatic paleontologist visiting an almost-complete theme park is tasked with protecting two kids after a power failure unleashes cloned dinosaurs.", trivia: "Revolutionized computer graphics in cinema, shifting Hollywood away from stop-motion towards digital visual effects.", cast: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough" },
            { id: "n10", title: "L.A. Confidential", year: "1997", director: "Curtis Hanson", category: "1990s", genre: "Crime", rating: "8.2/10", runtime: "138 min", tag: "1990s", desc: "Slick neo-noir crime story revealing corrupt 1950s Los Angeles police tactics.", plot: "As corruption grows in 1950s Los Angeles, three policemen — one sinister, one optimistic, and one obsession-driven — investigate a series of murders.", trivia: "Both Russell Crowe and Guy Pearce were relatively unknown Australian actors when cast in the lead roles.", cast: "Kevin Spacey, Russell Crowe, Guy Pearce, Kim Basinger" },

            // 3. 2000s-2026s MODERN
            { id: "m1", title: "Inception", year: "2010", director: "Christopher Nolan", category: "modern", genre: "Sci-Fi", rating: "8.8/10", runtime: "148 min", tag: "2000s-2026s", desc: "Christopher Nolan's heist thriller exploring subconscious dream architecture.", plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", trivia: "Uses practical visual effects wherever possible, including a custom rotating corridor set for zero-gravity fights.", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy" },
            { id: "m2", title: "Dune: Part Two", year: "2024", director: "Denis Villeneuve", category: "modern", genre: "Sci-Fi", rating: "8.6/10", runtime: "166 min", tag: "2000s-2026s", desc: "Denis Villeneuve's epic continuation of Frank Herbert's sci-fi world.", plot: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", trivia: "Filmed extensively in the deserts of Abu Dhabi and Jordan using IMAX digital camera formats.", cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem" },
            { id: "m3", title: "The Dark Knight", year: "2008", director: "Christopher Nolan", category: "modern", genre: "Action", rating: "9.0/10", runtime: "152 min", tag: "2000s-2026s", desc: "Cinematic crime epic examining Batman's struggle against the chaotic Joker.", plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.", trivia: "Heath Ledger posthumously won the Academy Award for Best Supporting Actor for his transformative Joker role.", cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine" },
            { id: "m4", title: "Interstellar", year: "2014", director: "Christopher Nolan", category: "modern", genre: "Sci-Fi", rating: "8.7/10", runtime: "169 min", tag: "2000s-2026s", desc: "Emotional sci-fi masterpiece detailing wormhole travel to save humanity.", plot: "When Earth becomes uninhabitable, a team of ex-NASA pilots travel through a wormhole near Saturn to find a new home for mankind.", trivia: "Theoretical physicist Kip Thorne served as scientific consultant, ensuring realistic black hole visual simulations.", cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain" },
            { id: "m5", title: "Parasite", year: "2019", director: "Bong Joon Ho", category: "modern", genre: "Drama", rating: "8.5/10", runtime: "132 min", tag: "2000s-2026s", desc: "Social satire thriller detailing class divide between two South Korean families.", plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", trivia: "First non-English language film to win the Academy Award for Best Picture in Oscar history.", cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik" },
            { id: "m6", title: "Oppenheimer", year: "2023", director: "Christopher Nolan", category: "modern", genre: "Drama", rating: "8.9/10", runtime: "180 min", tag: "2000s-2026s", desc: "Biographical drama capturing J. Robert Oppenheimer and the Manhattan Project.", plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.", trivia: "Shot using large-format IMAX black-and-white film stock custom-manufactured specifically for the production.", cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr." },
            { id: "m7", title: "Whiplash", year: "2014", director: "Damien Chazelle", category: "modern", genre: "Drama", rating: "8.5/10", runtime: "106 min", tag: "2000s-2026s", desc: "Intense psychological drama of ambition and obsessive jazz drumming.", plot: "A promising young drummer enlists at a cut-throat music conservatory where his dreams of greatness are mentored by a ruthless instructor.", trivia: "Miles Teller actually played the drums in almost all his performance shots, suffering real calluses and blisters.", cast: "Miles Teller, J.K. Simmons, Melissa Benoist" },
            { id: "m8", title: "Mad Max: Fury Road", year: "2015", director: "George Miller", category: "modern", genre: "Action", rating: "8.1/10", runtime: "120 min", tag: "2000s-2026s", desc: "High-octane post-apocalyptic action spectacle filled with practical stuntwork.", plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a drifter named Max.", trivia: "Roughly 80% of the film's effects were real practical stunts, vehicles, and makeup rather than CGI.", cast: "Tom Hardy, Charlize Theron, Nicholas Hoult" },
            { id: "m9", title: "There Will Be Blood", year: "2007", director: "Paul Thomas Anderson", category: "modern", genre: "Drama", rating: "8.2/10", runtime: "158 min", tag: "2000s-2026s", desc: "Ruthless historical epic of ambition, greed, and oil drilling in early California.", plot: "A story of family, religion, hatred, oil, and madness, focusing on a turn-of-the-century prospector in the early days of business.", trivia: "Daniel Day-Lewis stayed in character throughout the entire multi-month shoot, winning the Best Actor Oscar.", cast: "Daniel Day-Lewis, Paul Dano, Ciarán Hinds" },
            { id: "m10", title: "Everything Everywhere All at Once", year: "2022", director: "Daniel Kwan & Daniel Scheinert", category: "modern", genre: "Sci-Fi", rating: "7.8/10", runtime: "139 min", tag: "2000s-2026s", desc: "Mind-bending multiverse adventure exploring family bonds and existentialism.", plot: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring alternate universes.", trivia: "The visual effects were created by a tiny core team of just 5 self-taught artists using basic software.", cast: "Michelle Yeoh, Ke Huy Quan, Jamie Lee Curtis, Stephanie Hsu" },

            // 4. TV SERIALS
            { id: "s1", title: "Twin Peaks", year: "1990", director: "David Lynch & Mark Frost", category: "serials", genre: "Drama", rating: "8.8/10", runtime: "2 Seasons + Return", tag: "Series", desc: "David Lynch's surreal mystery series that transformed television storytelling.", plot: "FBI Special Agent Dale Cooper travels to the small logging town of Twin Peaks to investigate the murder of homecoming queen Laura Palmer.", trivia: "Blended soap opera tropes with surrealist horror, shifting the landscape of 90s prime-time television.", cast: "Kyle MacLachlan, Michael Ontkean, Madchen Amick" },
            { id: "s2", title: "Breaking Bad", year: "2008", director: "Vince Gilligan", category: "serials", genre: "Crime", rating: "9.5/10", runtime: "5 Seasons", tag: "Series", desc: "The tragic transformation of Walter White into a ruthless methamphetamine lord.", plot: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine with a former student to secure his family's future.", trivia: "Widely regarded by television critics as one of the greatest and most consistently written series in history.", cast: "Bryan Cranston, Aaron Paul, Anna Gunn, Giancarlo Esposito" },
            { id: "s3", title: "The Sopranos", year: "1999", director: "David Chase", category: "serials", genre: "Crime", rating: "9.2/10", runtime: "6 Seasons", tag: "Series", desc: "Groundbreaking mob drama examining anxiety and criminal life in New Jersey.", plot: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life while attending therapy.", trivia: "Pioneered the golden age of prestige cable television drama and redefined complex antihero characters.", cast: "James Gandolfini, Lorraine Bracco, Edie Falco, Michael Imperioli" },
            { id: "s4", title: "The Wire", year: "2002", director: "David Simon", category: "serials", genre: "Crime", rating: "9.3/10", runtime: "5 Seasons", tag: "Series", desc: "Gritty urban sociological study of Baltimore institutions and drug trade.", plot: "The Baltimore drug scene is seen through the eyes of drug dealers and law enforcement across various institutional layers.", trivia: "Written by former crime reporter David Simon and former homicide detective Ed Burns.", cast: "Dominic West, Lance Reddick, Sonja Sohn, Idris Elba" },
            { id: "s5", title: "Succession", year: "2018", director: "Jesse Armstrong", category: "serials", genre: "Drama", rating: "8.9/10", runtime: "4 Seasons", tag: "Series", desc: "Sharp satirical drama of power struggles within a global media empire family.", plot: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down.", trivia: "The cast filmed scenes on location in real luxury locations and superyachts across Norway, Italy, and New York.", cast: "Brian Cox, Jeremy Strong, Sarah Snook, Kieran Culkin" },
            { id: "s6", title: "Chernobyl", year: "2019", director: "Craig Mazin", category: "serials", genre: "Drama", rating: "9.4/10", runtime: "5 Episodes", tag: "Series", desc: "Chilling miniseries dramatizing the 1986 Soviet nuclear power plant disaster.", plot: "In April 1986, an explosion at the Chernobyl nuclear power plant in the USSR becomes one of the world's worst man-made catastrophes.", trivia: "Creator Craig Mazin made all official historical documents and trial scripts freely available to back up accuracy.", cast: "Jared Harris, Stellan Skarsgård, Emily Watson" },
            { id: "s7", title: "Better Call Saul", year: "2015", director: "Vince Gilligan & Peter Gould", category: "serials", genre: "Crime", rating: "9.0/10", runtime: "6 Seasons", tag: "Series", desc: "Masterful prequel tracking small-time lawyer Jimmy McGill's descent into Saul Goodman.", plot: "The trials and tribulations of criminal lawyer Jimmy McGill in the time leading up to his fateful establishing of his strip-mall law office in Albuquerque.", trivia: "Received 53 Primetime Emmy Award nominations across its six-season run.", cast: "Bob Odenkirk, Rhea Seehorn, Jonathan Banks, Giancarlo Esposito" },
            { id: "s8", title: "True Detective (Season 1)", year: "2014", director: "Cary Joji Fukunaga", category: "serials", genre: "Crime", rating: "8.9/10", runtime: "8 Episodes", tag: "Series", desc: "Atmospheric Southern Gothic mystery featuring two troubled Louisiana detectives.", plot: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.", trivia: "Features an iconic 6-minute continuous long shot during a stash-house raid in Episode 4.", cast: "Matthew McConaughey, Woody Harrelson, Michelle Monaghan" },
            { id: "s9", title: "Severance", year: "2022", director: "Dan Erickson & Ben Stiller", category: "serials", genre: "Sci-Fi", rating: "8.7/10", runtime: "1 Season +", tag: "Series", desc: "Mind-bending workplace thriller about surgical separation of work and personal memories.", plot: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.", trivia: "Ben Stiller directed six out of the nine episodes in the acclaimed first season.", cast: "Adam Scott, Zach Cherry, Britt Lower, Patricia Arquette" },
            { id: "s10", title: "Fargo", year: "2014", director: "Noah Hawley", category: "serials", genre: "Crime", rating: "8.9/10", runtime: "5 Seasons", tag: "Series", desc: "Black comedy crime anthology inspired by the Coen brothers' cinematic universe.", plot: "Various chronicles of deception, intrigue, and murder in and around frozen Minnesota, all tied back to the Midwest.", trivia: "Each season features an entirely new era, setting, cast, and crime story while sharing thematic roots.", cast: "Billy Bob Thornton, Martin Freeman, Kirsten Dunst, Ewan McGregor" },

            // 5. ANIME & COMICS
            { id: "c1", title: "Neon Genesis Evangelion", year: "1995", director: "Hideaki Anno", category: "comics", genre: "Animation", rating: "8.5/10", runtime: "26 Episodes", tag: "Anime", desc: "Deconstructive mecha anime exploring psychological trauma and existentialism.", plot: "A teenage boy is recruited by his estranged father to pilot a giant bio-machine mech to defend Earth against celestial entities.", trivia: "Critically acclaimed for deconstructing classic anime tropes and delving into complex psychoanalysis.", cast: "Megumi Ogata, Megumi Hayashibara, Yuko Miyamura" },
            { id: "c2", title: "Spirited Away", year: "2001", director: "Hayao Miyazaki", category: "comics", genre: "Animation", rating: "8.6/10", runtime: "125 min", tag: "Anime", desc: "Hayao Miyazaki's Oscar-winning Studio Ghibli fantasy masterpiece.", plot: "A young girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.", trivia: "First non-English hand-drawn animated film to win the Academy Award for Best Animated Feature.", cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki" },
            { id: "c3", title: "Akira", year: "1988", director: "Katsuhiro Otomo", category: "comics", genre: "Sci-Fi", rating: "8.0/10", runtime: "124 min", tag: "Anime", desc: "Cyberpunk landmark depicting Neo-Tokyo motorcycle gangs and telekinetic powers.", plot: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging telekinetic psychopath.", trivia: "Hand-drawn at 24 frames per second with over 160,000 animation cels, setting a standard for anime animation.", cast: "Mitsuo Iwata, Nozomu Sasaki, Mami Koyama" },
            { id: "c4", title: "Ghost in the Shell", year: "1995", director: "Mamoru Oshii", category: "comics", genre: "Sci-Fi", rating: "7.9/10", runtime: "83 min", tag: "Anime", desc: "Philosophical cyberpunk anime examining consciousness, cybernetics, and identity.", plot: "A cyborg hatch-operator agent hunts a mysterious hacker known as the Puppet Master in a futuristic Japan.", trivia: "Directly inspired the Wachowskis when designing the visual style and themes of The Matrix.", cast: "Atsuko Tanaka, Akio Ōtsuka, Iemasa Kayumi" },
            { id: "c5", title: "Cowboy Bebop", year: "1998", director: "Shinichirō Watanabe", category: "comics", genre: "Animation", rating: "8.9/10", runtime: "26 Episodes", tag: "Anime", desc: "Stylish space-western anime featuring bounty hunters and an iconic jazz soundtrack.", plot: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners aboard the spaceship Bebop.", trivia: "Famous for its jazz/blues soundtrack composed by Yoko Kanno and performed by The Seatbelts.", cast: "Kōichi Yamadera, Unshō Ishizuka, Megumi Hayashibara" },
            { id: "c6", title: "Princess Mononoke", year: "1997", director: "Hayao Miyazaki", category: "comics", genre: "Animation", rating: "8.4/10", runtime: "134 min", tag: "Anime", desc: "Epic Ghibli conflict between industrial human progress and forest gods.", plot: "On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between forest gods and Iron Town.", trivia: "Miyazaki personally inspected and retouched roughly 80,000 of the film's 144,000 cels.", cast: "Yōji Matsuda, Yuriko Ishida, Yūko Tanaka" },
            { id: "c7", title: "Spider-Man: Into the Spider-Verse", year: "2018", director: "Bob Persichetti & Peter Ramsey", category: "comics", genre: "Animation", rating: "8.4/10", runtime: "117 min", tag: "Comic", desc: "Visually revolutionary comic-book animation introducing Miles Morales.", plot: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions.", trivia: "Invented new animation software to recreate comic-book printing dots (halftones) and line work in 3D space.", cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld" },
            { id: "c8", title: "Death Note", year: "2006", director: "Tetsurō Araki", category: "comics", genre: "Animation", rating: "8.9/10", runtime: "37 Episodes", tag: "Anime", desc: "Psychological cat-and-mouse game between a vigilante student and a genius detective.", plot: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world using a supernatural notebook.", trivia: "The original manga series sold over 30 million copies worldwide before its animated adaptation.", cast: "Mamoru Miyano, Kappei Yamaguchi, Shidou Nakamura" },
            { id: "c9", title: "Attack on Titan", year: "2013", director: "Tetsurō Araki & Yuichiro Hayashi", category: "comics", genre: "Animation", rating: "9.1/10", runtime: "89 Episodes", tag: "Anime", desc: "Dark fantasy epic following humanity's survival fight against giant humanoid Titans.", plot: "After his hometown is destroyed and his mother is killed, Eren Jaeger vows to cleanse the earth of the giant Titans.", trivia: "Became a global cultural phenomenon and one of the highest-rated animated shows in television history.", cast: "Yūki Kaji, Yui Ishikawa, Marina Inoue" },
            { id: "c10", title: "Fullmetal Alchemist: Brotherhood", year: "2009", director: "Yasuhiro Irie", category: "comics", genre: "Animation", rating: "9.1/10", runtime: "64 Episodes", tag: "Anime", desc: "Masterful alchemy epic of two brothers searching for the Philosopher's Stone.", plot: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes horribly wrong.", trivia: "Maintained the #1 spot on MyAnimeList's top anime rankings for over a decade.", cast: "Romi Park, Rie Kugimiya, Shin-ichiro Miki" }
        ];

        let currentCategory = 'all';
        let watchlist = JSON.parse(localStorage.getItem('cineArchive_watchlist') || '[]');
        let activeModalMovieId = null;

        document.addEventListener('DOMContentLoaded', () => {
            updateWatchlistCount();
            renderMovies();
        });

        function updateWatchlistCount() {
            const el = document.getElementById('watchlist-count');
            if (el) el.textContent = watchlist.length;
        }

        function toggleWatchlist(id, event) {
            if (event) event.stopPropagation();
            if (watchlist.includes(id)) {
                watchlist = watchlist.filter(item => item !== id);
            } else {
                watchlist.push(id);
            }
            localStorage.setItem('cineArchive_watchlist', JSON.stringify(watchlist));
            updateWatchlistCount();
            renderMovies();
            if (activeModalMovieId === id) {
                updateModalWatchlistBtn(id);
            }
        }

        function filterCategory(cat, btn) {
            currentCategory = cat;
            document.querySelectorAll('.header-nav .nav-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            renderMovies();
        }

        function handleSearch() {
            renderMovies();
        }

        function renderMovies() {
            const grid = document.getElementById('movie-grid');
            const searchInput = document.getElementById('search-input');
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

            // Filtering
            let filtered = moviesData.filter(movie => {
                const matchesCat = (currentCategory === 'all') ? true :
                                   (currentCategory === 'watchlist') ? watchlist.includes(movie.id) :
                                   movie.category === currentCategory;

                const matchesQuery = query === '' ? true :
                                     movie.title.toLowerCase().includes(query) ||
                                     movie.director.toLowerCase().includes(query) ||
                                     movie.cast.toLowerCase().includes(query) ||
                                     movie.desc.toLowerCase().includes(query);

                return matchesCat && matchesQuery;
            });

            if (filtered.length === 0) {
                if (currentCategory === 'watchlist') {
                    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">Your Watchlist is currently empty. Click "+ Watchlist" on any title to save it here!</div>`;
                } else {
                    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No titles found matching your selection.</div>`;
                }
                return;
            }

            grid.innerHTML = filtered.map(movie => {
                const isSaved = watchlist.includes(movie.id);
                return `
                <div class="card" onclick="openModal('${movie.id}')">
                    <div class="card-poster">
                        <span class="card-tag">⭐ ${movie.rating}</span>
                        <div class="card-title-poster">${movie.title}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">${movie.year}</div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="card-meta">
                                <span>${movie.director}</span>
                                <span>${movie.runtime || ''}</span>
                            </div>
                            <p class="card-desc">${movie.desc}</p>
                        </div>
                        <div class="card-footer-btns" onclick="event.stopPropagation()">
                            <button class="btn-small ${isSaved ? 'saved' : ''}" onclick="toggleWatchlist('${movie.id}', event)">
                                ${isSaved ? '✓ Saved' : '+ Watchlist'}
                            </button>
                            <button class="btn-small" onclick="openModal('${movie.id}')">Details</button>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }

        // MODAL FUNCTIONS
        function openModal(id) {
            const movie = moviesData.find(m => m.id === id);
            if (!movie) return;

            activeModalMovieId = id;
            document.getElementById('m-title').textContent = movie.title;
            document.getElementById('m-sub').textContent = `${movie.director} | ${movie.year} | ⭐ ${movie.rating} | ${movie.runtime || ''}`;
            document.getElementById('m-plot').textContent = movie.plot || movie.desc;
            document.getElementById('m-trivia').textContent = movie.trivia || 'N/A';
            document.getElementById('m-cast').textContent = movie.cast || 'N/A';

            updateModalWatchlistBtn(id);

            document.getElementById('modal-overlay').classList.add('active');
        }

        function updateModalWatchlistBtn(id) {
            const modalBtn = document.getElementById('modal-watchlist-btn');
            const isSaved = watchlist.includes(id);
            if (modalBtn) {
                modalBtn.textContent = isSaved ? '✓ Saved in Watchlist' : '+ Add to Watchlist';
                modalBtn.onclick = (e) => toggleWatchlist(id, e);
                if (isSaved) {
                    modalBtn.style.background = '#10b981';
                    modalBtn.style.borderColor = '#10b981';
                } else {
                    modalBtn.style.background = '#222938';
                    modalBtn.style.borderColor = 'var(--border-color)';
                }
            }
        }

        function closeModal(event) {
            if (event.target.id === 'modal-overlay') {
                activeModalMovieId = null;
                document.getElementById('modal-overlay').classList.remove('active');
            }
        }

        function closeModalDirect() {
            activeModalMovieId = null;
            document.getElementById('modal-overlay').classList.remove('active');
        }

        function surpriseMe() {
            if (moviesData.length === 0) return;
            const randomIndex = Math.floor(Math.random() * moviesData.length);
            openModal(moviesData[randomIndex].id);
        }