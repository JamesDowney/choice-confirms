const choice = {
    111: {
        // https://kol.coldfront.net/thekolwiki/index.php/Malice_in_Chains
        'Serve your sentence': 1,
        'Rise and revolt': 2,
        'Plot a cunning escape': 3,
    },
    113: {
        // https://kol.coldfront.net/thekolwiki/index.php/Knob_Goblin_BBQ
        'Kiss the chef': 1,
        'Kick the chef': 2,
        'Abscond with some goodies': 3,
    },
    139: {
        // https://kol.coldfront.net/thekolwiki/index.php/Bait_and_Switch
        'Take the bait and go wreak havoc': 1,
        'Gaffle some bait for later': 2,
        'Wake the cadet up and fight him': 3,
    },
    140: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Thin_Tie-Dyed_Line
        'The Munitions Yurt': 1,
        'The Rations Yurt': 2,
        'The Barracks Yurt': 3,
    },
    141: {
        // https://kol.coldfront.net/thekolwiki/index.php/Blockin%27_Out_the_Scenery
        'The Chill-Out Yurt': 1,
        'The Rations Yurt': 2,
        'The H.A.S.H. Yurt': 3,
    },
    142: {
        // https://kol.coldfront.net/thekolwiki/index.php/Blockin%27_Out_the_Scenery
        'The Chill-Out Yurt': 1,
        'The Rations Yurt': 2,
        'The Lookout Tower': 3,
    },
    143: {
        // https://kol.coldfront.net/thekolwiki/index.php/Catching_Some_Zetas
        'Take the bombs and wreak some havoc': 1,
        'Keep the bombs to use later': 2,
        'Wake up the pledge and throw down': 3,
    },
    144: {
        // https://kol.coldfront.net/thekolwiki/index.php/One_Less_Room_Than_In_That_Movie
        'Supply Room': 1,
        'Munitions Dump': 2,
        "Officer's Lounge": 3,
    },
    145: {
        // https://kol.coldfront.net/thekolwiki/index.php/Fratacombs
        'Wander this way': 1,
        'Wander that way': 2,
        'Wander the other way': 3,
    },
    146: {
        // https://kol.coldfront.net/thekolwiki/index.php/Fratacombs
        'Wander this way': 1,
        'Wander that way': 2,
        'Screw this, head to the roof': 3,
    },
    153: {
        // https://kol.coldfront.net/thekolwiki/index.php/Turn_Your_Head_and_Coffin
        'Investigate the fancy coffin': 1,
        'Check out the pine box': 2,
        'Look in the wet one': 3,
        'Leave them all be': 4,
    },
    155: {
        // https://kol.coldfront.net/thekolwiki/index.php/Skull,_Skull,_Skull
        'Check behind the first one': 1,
        'Look inside the second one': 2,
        "See what's under the third one": 3,
        'Leave the skulls alone': 4,
    },
    157: {
        // https://kol.coldfront.net/thekolwiki/index.php/Urning_Your_Keep
        'Investigate the first urn': 1,
        'Check out the second one': 2,
        "See what's behind Urn #3": 3,
        'Turn Away': 4,
    },
    163: {
        // https://kol.coldfront.net/thekolwiki/index.php/Melvil_Dewey_Would_Be_Ashamed
        'Hork the gray-bound volume': 1,
        'Yoink the green-bound tome': 2,
        'Gaffle the purple-bound book': 3,
        'Leave without taking anything': 4,
    },
    178: {
        // https://kol.coldfront.net/thekolwiki/index.php/Hammering_the_Armory
        'Dig through the stuff': 1,
        'Blow this popsicle stand': 2,
    },
    182: {
        // https://kol.coldfront.net/thekolwiki/index.php/Random_Lack_of_an_Encounter
        'Investigate the crew quarters': 1,
        'Check the cargo hold': 2,
        'Head down to the galley': 3,
        'Gallivant down to the head': 4,
    },
    496: {
        // https://kol.coldfront.net/thekolwiki/index.php/Crate_Expectations_(Tavern_Cellar)
        'Smash the crates': 1,
        'Burn the crates': 2,
    },
    502: {
        // https://kol.coldfront.net/thekolwiki/index.php/Arboreal_Respite
        'Follow the old road': 1,
        'Explore the stream': 2,
        'Brave the dark thicket': 3,
    },
    503: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Road_Less_Traveled
        'Follow the ruts': 1,
        'Knock on the cottage door': 2,
        'Talk to the hunter': 3,
    },
    505: {
        // https://kol.coldfront.net/thekolwiki/index.php/Consciousness_of_a_Stream
        'March to the marsh': 1,
        'Squeeze into the cave': 2,
        'Go further upstream': 3,
    },
    506: {
        // https://kol.coldfront.net/thekolwiki/index.php/Through_Thicket_and_Thinnet
        'Follow the even darker path': 1,
        'Investigate the dense foliage': 2,
        'Follow the coin': 3,
        'Give up and go back': 4,
    },
    513: {
        // https://kol.coldfront.net/thekolwiki/index.php/Staring_Down_the_Barrel
        'Smash the barrel': 1,
        'Freeze the Barrel': 2,
    },
    514: {
        // https://kol.coldfront.net/thekolwiki/index.php/1984_Had_Nothing_on_This_Cellar
        'Dump out the crate.': 1,
        'Stink them out': 2,
    },
    515: {
        // https://kol.coldfront.net/thekolwiki/index.php/A_Rat%27s_Home...
        'Kick over the castle': 1,
        'Scare the rats off': 2,
    },
    523: {
        // https://kol.coldfront.net/thekolwiki/index.php/Death_Rattlin%27
        'Open up the closed one': 1,
        'Crawl inside the open one': 2,
        'Dig through the rubble on the ground': 3,
        'Open the rattling one': 4,
        'Leave the drawers alone': 5,
    },
    611: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Horror..._(A-Boo_Peak)
        'Elemental resistance test': 1,
        'Flee the scene': 2,
    },
    669: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Fast_and_the_Furry-ous
        'Crawl Through the Heating Duct': 1,
        "Check out the Furry's Figurine Collection": 2,
        'Leave Through a Mousehole': 3,
    },
    670: {
        // https://kol.coldfront.net/thekolwiki/index.php/You_Don%27t_Mess_Around_with_Gym
        'Grab a Dumbbell': 1,
        'Work Out': 2,
        'Rifle the Gym Bag': 3,
        'Check out the Mirror': 4,
        'Leave through the Basement Window': 5,
    },
    671: {
        // https://kol.coldfront.net/thekolwiki/index.php/Out_in_the_Open_Source
        'Check out the Dumbwaiter': 1,
        'Mess with the Computer Equipment': 2,
        "Check the Neckbeard's Giant Cargo Shorts": 3,
        'Crawl through the Heating Vent': 4,
    },
    672: {
        // https://kol.coldfront.net/thekolwiki/index.php/There%27s_No_Ability_Like_Possibility
        'Rifle the Wallet-Purse-Leprechaun': 1,
        'Read the Magazine-Orangutan-lamp': 2,
        'Go out the Way You Came In': 3,
    },
    673: {
        // https://kol.coldfront.net/thekolwiki/index.php/Putting_Off_Is_Off-Putting
        'Look Under a Pile of Junk': 1,
        'Roll in a Pile of Junk': 2,
        'Get out of Pile of Junk': 3,
    },
    674: {
        // https://kol.coldfront.net/thekolwiki/index.php/Huzzah!
        'Exploreth the Writing Desk': 1,
        'Turn on Ye Olde Television Set': 2,
        'Seek the Egress Anon': 3,
    },
    675: {
        // https://kol.coldfront.net/thekolwiki/index.php/Melon_Collie_and_the_Infinite_Lameness
        'End His Suffering': 1,
        'Change up the Music': 2,
        'Snag some Candles': 3,
        'Gimme Steam': 4,
    },
    676: {
        // https://kol.coldfront.net/thekolwiki/index.php/Flavor_of_a_Raver
        'Pick a Fight': 1,
        'Breathe Deeply': 2,
        'Raid the Crate': 3,
        'Check Behind the Giant Poster': 4,
    },
    677: {
        // https://kol.coldfront.net/thekolwiki/index.php/Copper_Feel
        'Harrumph in Disdain': 1,
        'Investigate the Whirligigs and Gimcrackery': 2,
        'Grab a Gear': 3,
        'Go through the Crack': 4,
    },
    678: {
        // https://kol.coldfront.net/thekolwiki/index.php/Yeah,_You%27re_for_Me,_Punk_Rock_Giant
        "Get the Punk's Attention": 1,
        'Dig Through His Drawers': 2,
        'Check behind the trash can': 3,
        'Look Behind the Poster': 4,
    },
    875: {
        // https://kol.coldfront.net/thekolwiki/index.php/Welcome_To_Our_ool_Table
        'Hustle the ghost': 1,
        'Hustle over to the other table and practice': 2,
        'Hustle away': 3,
    },
    888: {
        // https://kol.coldfront.net/thekolwiki/index.php/Take_a_Look,_it%27s_in_a_Book!_(Rise)
        'Read "The Rise of the House of Spookyraven"': 1,
        'Read "The Better Haunted Homes and Conservatories Cookbook"': 2,
        'Read "Ancient Forbidden Unspeakable Evil, a Love Story"': 3,
        "Reading is for losers. I'm outta here.": 4,
    },
    889: {
        // https://kol.coldfront.net/thekolwiki/index.php/Take_a_Look,_it%27s_in_a_Book!_(Fall)
        'Read "The Fall of the House of Spookyraven"': 1,
        'Read "To Serve Man... Delicious Cocktails"': 2,
        'Read "Ancient Forbidden Unspeakable Yoga, a Beginner\'s Guide"': 3,
        'Read the dictionary': 4,
        "Reading is for losers. I'm outta here.": 5,
    },
    923: {
        // https://kol.coldfront.net/thekolwiki/index.php/All_Over_the_Map
        'Head toward the blackberry patch': 1,
        "Visit the blacksmith's cottage": 2,
        'Go to the black gold mine': 3,
        'Check out the black church': 4,
    },
    924: {
        // https://kol.coldfront.net/thekolwiki/index.php/You_Found_Your_Thrill
        'Attack the bushes': 1,
        "Visit the cobbler's house": 2,
        'Head toward the buzzing sound': 3,
    },
    925: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Blackest_Smith
        'How about a sword?': 1,
        'A shield, maybe?': 2,
        'A helmet, please.': 3,
        'I would like pants.': 4,
        'Nothing, thank you.': 5,
    },
    926: {
        // https://kol.coldfront.net/thekolwiki/index.php/Be_Mine
        'Go left': 1,
        'Go right': 2,
        'Go down': 3,
        'Never mine. I mean mind.': 4,
    },
    927: {
        // https://kol.coldfront.net/thekolwiki/index.php/Sunday_Black_Sunday
        'Attend the Mass': 1,
        'Dive into the orchestra pit': 2,
        'Sneak out the black back, black Jack': 3,
    },
    928: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Blackberry_Cobbler
        'Make some slippers': 1,
        'Make some moccasins': 2,
        'Make some combat boots': 3,
        'Make some galoshes': 4,
        'Make like a tree and leave the house': 5,
    },
    1026: {
        // https://kol.coldfront.net/thekolwiki/index.php/Home_on_the_Free_Range
        'Look under the bed': 1,
        'Investigate the noisy drawer': 2,
        'Leave through a vent': 3,
    },
    1308: {
        // https://kol.coldfront.net/thekolwiki/index.php/On_a_Downtown_Train
        'Factory District Stop (2 Adventures)': 1,
        'Warehouse District Stop (Free!)': 2,
        'Just ride the rails (9 Adventures)': 6,
        'Visit the Breakfast Counter': 7,
        Nevermind: 8,
    },
    1427: {
        // https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_Junction
        'Fight the Screambat': 1,
        'Grab the meat': 2,
    },
    1433: {
        // https://kol.coldfront.net/thekolwiki/index.php/Sneaky,_Sneaky_(Frat_Warrior_Fatigues)
        'Visit the Yurts': 1,
        'Visit the yurt full of crates': 2,
        'Stop by the signpost for further directions': 3,
    },
    1434: {
        // https://kol.coldfront.net/thekolwiki/index.php/Sneaky,_Sneaky_(War_Hippy_Fatigues)
        'Visit a dorm room': 1,
        'Go into the fratacombs': 2,
        'Check out the hallway': 3,
    },
}

module.exports = { choice }
