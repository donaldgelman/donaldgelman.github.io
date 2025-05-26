// Define a mapping of index to audio URL and playlist HTML
const modalData = [
  {audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Ambivalence.mp3", 
   labelInfo: "Ambivalence (Brussels, 1999-2011)",
   playlistHTML: `
      <li><a href="https://www.discogs.com/release/859209-Claire-Goldfarb-Or-Propos">Claire Goldfarb - Miroir renversé</a></li>
      <li><a href="https://www.discogs.com/release/1202993-Usk%C3%A9-Orchestra-Moli-Herzog-Remixes">Mondii - Watercolour Park</a></li>
      <li><a href="https://www.discogs.com/release/230815-The-Forsaken-Odes-Conglomerate-Tonal-Tutorial">The Forsaken Odes Conglomerate - Shambolic Decency (Hushed Up)</a></li>
      <li><a href="https://www.discogs.com/release/908751-Usk%C3%A9-Orchestra-Gaffe">Uské Orchestra - La cloche clitoris</a></li>
      <li><a href="https://www.discogs.com/release/230815-The-Forsaken-Odes-Conglomerate-Tonal-Tutorial">The Forsaken Odes Conglomerate - Dalai's shaggy phizog</a></li>
      <li><a href="https://www.discogs.com/release/45318-Subskan-Recoiless">Subskan - Tyrell's Downstroke</a></li>
      <li><a href="https://www.discogs.com/release/2855423-Don-Quishoote-Neptunian8-Subskan-Sons-of-RETROCITY">Don Quishoote - Machinal ritual (the Drum machine)</a></li>
      <li><a href="https://www.discogs.com/release/859209-Claire-Goldfarb-Or-Propos">Claire Goldfarb - Ton ventricule gauche boitille</a></li>
      <li><a href="https://www.discogs.com/release/230815-The-Forsaken-Odes-Conglomerate-Tonal-Tutorial">The Forsaken Odes Conglomerate - Tender Spot (Recorrer Mirando Sin Aliento)</a></li>
      <li><a href="https://www.discogs.com/release/231977-Various-Seal-Ph%C3%BCric-Phonic-Sins">Seal Phüric - O Sacrificio (Polygon Window - Quino-Phec)</a></li>
      <li><a href="https://www.discogs.com/release/147907-Usk%C3%A9-Orchestra-Moli-Herzog">Uské Orchestra - Loly Bobo</a></li>
      <li><a href="https://www.discogs.com/release/230815-The-Forsaken-Odes-Conglomerate-Tonal-Tutorial">The Forsaken Odes Conglomerate - The Clan of Pahoum Kle</a></li>
      <li><a href="https://www.discogs.com/release/2855423-Don-Quishoote-Neptunian8-Subskan-Sons-of-RETROCITY">Subskan - Le pourtour de murailles</a></li>
      <li><a href="https://www.discogs.com/release/45318-Subskan-Recoiless">Subskan - Oomah</a></li>
      <li><a href="https://www.discogs.com/release/2855423-Don-Quishoote-Neptunian8-Subskan-Sons-of-RETROCITY">Neptunian8 + Don Quishoote - Les zones actives</a></li>
      <li><a href="https://www.discogs.com/master/140187-The-Syncopated-Elevators-Legacy-An-Heliocentric-Saltbox">The Syncopated Elevators Legacy - embryo 3</a></li>
      <li><a href="https://www.discogs.com/release/230815-The-Forsaken-Odes-Conglomerate-Tonal-Tutorial">The Forsaken Odes Conglomerate - Shambling Shaby Mamy (t800 Toll)</a></li>
      <li><a href="https://www.discogs.com/release/231977-Various-Seal-Ph%C3%BCric-Phonic-Sins">Seal Phüric - Hype's Nose (L'opium Du Peuple)</a></li>
      <li><a href="https://www.discogs.com/release/45318-Subskan-Recoiless">Subskan - Spanking Godzilla's Mother (Ouch!)</a></li>
      <li><a href="https://www.discogs.com/master/18441-Passarani-Unspeakable-Future-Outbreaks">Passarani - Nno</a></li>
      <li><a href="https://www.discogs.com/release/859209-Claire-Goldfarb-Or-Propos">Claire Goldfarb - Uzai</a></li>
      <li><a href="https://www.discogs.com/master/18441-Passarani-Unspeakable-Future-Outbreaks">Passarani - Nul</a></li>
    `
  },
  {audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Elfcut.mp3", 
   labelInfo: "Elf Cut (Brussels, 1997-2000)",
   playlistHTML: `
  <li><a href="https://www.discogs.com/master/140173-Rawakari-Ikebana">Rawakari - Wind City</a></l>
	<li><a href="https://www.discogs.com/master/140183-Fat-Masonics-Lodge">Fat Masonics - Throw Him Out The Window</a></l>
	<li><a href="https://www.discogs.com/release/66904-The-Syncopated-Elevators-Legacy-Apostasy">The Syncopated Elevators Legacy - TV Wash</a></l>
	<li><a href="https://www.discogs.com/release/66903-Disappointed-Wannabees-Disappointed-Wannabees">Disappointed Wannabees - 4 Trio</a></l>
	<li><a href="https://www.discogs.com/master/140138-Lester-Lewitt-Kombinations-Hypothetiqs">Lester Lewitt - Cynical Cataplasm</a></l>
	<li><a href="https://www.discogs.com/release/192283-The-Syncopated-Elevators-Legacy-The-Siamese-Level">The Syncopated Elevators Legacy - The Siamese Level (Fat Collage Mix)</a></l>
	<li><a href="https://www.discogs.com/master/140152-Capitol-K-Capitol-K-EP">Capitol K - Song for Banana</a></l>
	<li><a href="https://www.discogs.com/master/140138-Lester-Lewitt-Kombinations-Hypothetiqs">Lester Lewitt - Humate</a></l>
	<li><a href="https://www.discogs.com/master/140183-Fat-Masonics-Lodge">Fat Masonics - Fat Masonics</a></l>
	<li><a href="https://www.discogs.com/release/66904-The-Syncopated-Elevators-Legacy-Apostasy">The Syncopated Elevators Legacy - The Blue Room</a></l>
	<li><a href="https://www.discogs.com/master/140173-Rawakari-Ikebana">Rawakari - Frame of Winter</a></l>
	<li><a href="https://www.discogs.com/release/66901-Lester-Lewitt-Lester-Lewitt-EP">Lester Lewitt - ...</a></l>
	<li><a href="https://www.discogs.com/release/192283-The-Syncopated-Elevators-Legacy-The-Siamese-Level">The Syncopated Elevators Legacy - The Siamese Level</a></l>
	<li><a href="https://www.discogs.com/master/140152-Capitol-K-Capitol-K-EP">Capitol K - Wisdom Teeth</a></l>
	<li><a href="https://www.discogs.com/master/140138-Lester-Lewitt-Kombinations-Hypothetiqs">Lester Lewitt - Waverly</a></l>
	<li><a href="https://www.discogs.com/master/140152-Capitol-K-Capitol-K-EP">Capitol K - Song for Belgium</a></l>
	<li><a href="https://www.discogs.com/release/66904-The-Syncopated-Elevators-Legacy-Apostasy">The Syncopated Elevators Legacy - Embryo</a></l>
	<li><a href="https://www.discogs.com/master/140183-Fat-Masonics-Lodge">Fat Masonics - Dream Seams...</a></li>
`
	},
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Immune.mp3",
    labelInfo: "Immune (Chicago, 2007-2017)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/786874-Panabrite-Disintegrating-Landscape">Panabrite - Disintegrating Landscape</a></li>
      <li><a href="https://www.discogs.com/master/407337-Cleared-Breaking-Day">Cleared - No Path To Claim</a></li>
      <li><a href="https://www.discogs.com/release/4469229-Lakes-Of-Grass-And-Gold-Svarte-Greiner-Landscape-Of-Open-Eyes">Lakes of Grass and Gold - Strands of Grass / Wake</a></li>
      <li><a href="https://www.discogs.com/release/5032673-Steven-R-Smith-Ulaan-Khol-EndingReturning">Steven R. Smith - The Known World</a></li>
      <li><a href="https://www.discogs.com/release/11407834-Pulse-Emitter-Meditative-Music-5">Pulse Emitter - Meditative Music 5</a></li>
      <li><a href="https://www.discogs.com/master/745681-Panabrite-Pavilion">Panabrite - Veil</a></li>
      <li><a href="https://www.discogs.com/release/7447178-Scott-Tuma-Eyrie">Scott Tuma - Yes, You</a></li>
      <li><a href="https://www.discogs.com/release/4469229-Lakes-Of-Grass-And-Gold-Svarte-Greiner-Landscape-Of-Open-Eyes">Svarte Greiner - Lightning Cut</a></li>
      <li><a href="https://www.discogs.com/master/229441-Rafael-Anton-Irisarri-Hopes-And-Past-Desires">Rafael Anton Irisarri - Hopes and Past Desires</a></li>
      <li><a href="https://www.discogs.com/master/453655-Evan-Caminiti-Night-Dust">Evan Caminiti - Returning Spirits</a></li>
      <li><a href="https://www.discogs.com/release/1970580-C-Joynes-Revenants-Prodigies-And-The-Restless-Dead">C Joynes - Bones For Dogs</a></li>
      <li><a href="https://www.discogs.com/master/281550-Scott-Tuma-Not-For-Nobody">Scott Tuma - Fishen</a></li>
      <li><a href="https://www.discogs.com/release/3896478-Minamo-Lawrence-English-A-Path-Less-Travelled">Minamo / Lawrence English - Springhead</a></li>
      <li><a href="https://www.discogs.com/master/1815382-Simon-Scott-Traba">Simon Scott - She Came From The Sea</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Merck.mp3",
    labelInfo: "Merck (Miami, 2000-2007)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/497214-Esem-Serial-Human">Esem - Swift Urban Departure From What Was Once an Innocent Soul</a></li>
      <li><a href="https://www.discogs.com/master/325913-Helios-Unomia">Helios - West Orange</a></li>
      <li><a href="https://www.discogs.com/release/661186-Tim-Koch-Faena">Tim Koch - Gulf Streams</a></li>
      <li><a href="https://www.discogs.com/release/23266-Ilkae-Pistachio-Island">Ilkae - Sink Lateral</a></li>
      <li><a href="https://www.discogs.com/release/23266-Ilkae-Pistachio-Island">Ilkae - Pancake Satellites</a></li>
      <li><a href="https://www.discogs.com/release/661186-Tim-Koch-Faena">Tim Koch - Macrome</a></li>
      <li><a href="https://www.discogs.com/master/1022916-Syndrone-Salmataxia">Syndrone - Cachexia</a></li>
      <li><a href="https://www.discogs.com/release/618510-Tstewart-Living-Exponentially">Tstewart - That Love</a></li>
      <li><a href="https://www.discogs.com/release/1697-Various-Aurora">Proem - Boring Alice</a></li>
      <li><a href="https://www.discogs.com/release/618510-Tstewart-Living-Exponentially">Tstewart - Living Exponentially</a></li>
      <li><a href="https://www.discogs.com/release/34702-Kristuit-Salu-vs-Morris-Nightingale-My-Mines-I">Kristuit Salu - Germain Fabric</a></li>
      <li><a href="https://www.discogs.com/release/651184-Anders-Ilar-Ludwijka">Anders Ilar - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/651184-Anders-Ilar-Ludwijka">Anders Ilar - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/1697-Various-Aurora">EU - Christmas</a></li>
      <li><a href="https://www.discogs.com/master/360600-Frank-Bill-MA0x">Frank & Bill - MA02</a></li>
      <li><a href="https://www.discogs.com/master/325913-Helios-Unomia">Helios - Samsara</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/QDKMedia.mp3",
    labelInfo: "Q.D.K. Media (Bonn, 1989-2013)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/1068901-Fetus-Productions-Intensive-Care-Unit">Fetus Productions - Drip</a></li>
      <li><a href="https://www.discogs.com/release/95010-Various-Electronic-Toys-2-A-Retrospective-Of-Early-Synthesizer-Music">Bruce Haack - Party Machine</a></li>
      <li><a href="https://www.discogs.com/release/3093998-Amanaz-Africa">Amanaz - Green Apple 1</a></li>
      <li><a href="https://www.discogs.com/release/670187-Fred-Weinberg-The-Weinberg-Method-Of-Non-Synthetic-Electronic-Rock">Fred Weinberg - Money Talks</a></li>
      <li><a href="https://www.discogs.com/release/1069355-Peter-Dasent-Braindead-Original-Soundtrack-Recording">Peter Dasent - A Walk in the Park</a></li>
      <li><a href="https://www.discogs.com/release/670187-Fred-Weinberg-The-Weinberg-Method-Of-Non-Synthetic-Electronic-Rock">Fred Weinberg - Aum Mau Mau</a></li>
      <li><a href="https://www.discogs.com/release/2039920-Various-Russ-Meyers-Lorna-Vixen-Faster-Pussycat-Kill-Kill-Original-Motion-Picture-Soundtracks">Igo Kantor - French Girl in Manhattan</a></li>
      <li><a href="https://www.discogs.com/release/1244789-Robert-McNaughton-Henry-Portrait-Of-A-Serial-Killer-Original-Motion-Picture-Soundtrack">Robert McNaughton - Dead Body Drone</a></li>
      <li><a href="https://www.discogs.com/release/3266643-Question-Mark-Be-Nice-To-The-People">Question Mark - Have You</a></li>
      <li><a href="https://www.discogs.com/release/5302048-Paul-Ngozi-The-Ghetto-">Paul Ngozi - Anasoni</a></li>
      <li><a href="https://www.discogs.com/release/5302048-Paul-Ngozi-The-Ghetto-">Paul Ngozi - In The Ghetto</a></li>
      <li><a href="https://www.discogs.com/release/1395191-Various-Russ-Meyers-Lorna-Vixen-Faster-Pussycat-Kill-Kill-Original-Motion-Picture-Soundtracks">James Griffith and Hal Hopper - Wham Bam Thank You Mam</a></li>
      <li><a href="https://www.discogs.com/release/326001-Bruce-Haack-Electric-Lucifer-Book-2">Bruce Haack - Stand Up Lazaras</a></li>
      <li><a href="https://www.discogs.com/release/62818-Various-Electronic-Toys-A-Retrospective-Of-70s-Synthesizer-Music">Dave Vorhaus - Mainframe Blues</a></li>
      <li><a href="https://www.discogs.com/master/119322-Various-Russ-Meyers-Lorna-Vixen-Faster-Pussycat-Kill-Kill-Original-Motion-Picture-Soundtracks">Kantor, Shefter, Sawtell - The Break</a></li>
      <li><a href="https://www.discogs.com/release/2417213-Various-Asian-Takeaways">Thu Su Yung - What A Sound</a></li>
      <li><a href="https://www.discogs.com/master/119322-Various-Russ-Meyers-Lorna-Vixen-Faster-Pussycat-Kill-Kill-Original-Motion-Picture-Soundtracks">James Griffith and Hal Hopper - The Escaped Prisoner</a></li>
      <li><a href="https://www.discogs.com/release/95010-Various-Electronic-Toys-2-A-Retrospective-Of-Early-Synthesizer-Music">Mort Garson - The Ride Of Aida</a></li>
      <li><a href="https://www.discogs.com/release/1069355-Peter-Dasent-Braindead-Original-Soundtrack-Recording">Peter Dasent - Grandmother's Kitchen</a></li>
      <li><a href="https://www.discogs.com/release/2498818-Various-Betty-Page-Private-Girl-Spicy-Music">Pete Thomas - Coolstuff</a></li>
      <li><a href="https://www.discogs.com/release/2498818-Various-Betty-Page-Private-Girl-Spicy-Music">Nino Nardini - Trouser Suit</a></li>
      <li><a href="https://www.discogs.com/release/2498818-Various-Betty-Page-Private-Girl-Spicy-Music">John Barry - Smokey Blues</a></li>
      <li><a href="https://www.discogs.com/release/1069355-Peter-Dasent-Braindead-Original-Soundtrack-Recording">Peter Dasent and Kate Swadling - The Stars and Moon</a></li>      
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/ucover.mp3",
    labelInfo: "U-Cover (Geel, 1999-2013)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/322913-Ontayso-Sense-Tim-Koch-Where-Have-You-Been-What-Have-You-Done-And-Why">Ontayso - Walk Your Way</a></li>
<li><a href="https://www.discogs.com/release/122056-Ontayso-Re-Mixed-Re-Worked-Re-Constructed-And-Re-Invented-Part-One">Ontayso - [untitled] (Kettel Remix)</a></li>
<li><a href="https://www.discogs.com/release/150542-Sense-Learning-To-Be">Sense - Hiadam</a></li>
<li><a href="https://www.discogs.com/master/78961-Joel-Tammik-Hetked">Joel Tammik - Tormis</a></li>
<li><a href="https://www.discogs.com/release/150542-Sense-Learning-To-Be">Sense - Flask</a></li>
<li><a href="https://www.discogs.com/release/297507-Ten-And-Tracer-Companion">Ten and Tracer - Spin Me Good Morning</a></li>
<li><a href="https://www.discogs.com/release/122056-Ontayso-Re-Mixed-Re-Worked-Re-Constructed-And-Re-Invented-Part-One">Ontayso - [untitled] (Cosmis Connection Remix)</a></li>
<li><a href="https://www.discogs.com/release/119678-Tim-Koch-Islandtones">Tim Koch - Acoustic Handshake</a></li>
<li><a href="https://www.discogs.com/release/297507-Ten-And-Tracer-Companion">Ten and Tracer - Get Set</a></li>
<li><a href="https://www.discogs.com/release/472663-Joel-Tammik-Eluline">Joel Tammik - Sume</a></li>
<li><a href="https://www.discogs.com/master/78961-Joel-Tammik-Hetked">Joel Tammik - Muutuda</a></li>
<li><a href="https://www.discogs.com/release/150542-Sense-Learning-To-Be">Sense - Naddan</a></li>
<li><a href="https://www.discogs.com/release/5125-Quench-A-Journey-Into-Electonix">Quench - Smoke</a></li>
<li><a href="https://www.discogs.com/release/5151-Llips-Versus-Starfish-Pool-Sweetwater">Llips. - Drowning</a></li>
<li><a href="https://www.discogs.com/release/5151-Llips-Versus-Starfish-Pool-Sweetwater">Starfish Pool - Mouthful</a></li>
      
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/YHRTapes.mp3",
    labelInfo: "YHR Tapes (Brighton, 1980-1983)",
    playlistHTML: `
     <li><a href="https://www.discogs.com/release/5124940-Cin%C3%A9ma-V%C3%A9rit%C3%A9-Rhythmus-Und-Ritual">Cinéma Vérité - Winterkollektion 41-42</a></li>
<li><a href="https://www.discogs.com/release/1340983-Andrew-Cox-Hydra">Andrew Cox - And The Birds Began To Sing</a></li>
<li><a href="https://www.discogs.com/release/5124940-Cin%C3%A9ma-V%C3%A9rit%C3%A9-Rhythmus-Und-Ritual">Cinéma Vérité - Mobile Räume</a></li>
<li><a href="https://www.discogs.com/release/1069468-MB-Cold-Tape">MB - [untitled]</a></li>
<li><a href="https://www.discogs.com/release/691586-Cluster-And-Farnbauer-Live-In-Vienna">Cluster and Farnbauer - Piano</a></li>
<li><a href="https://www.discogs.com/release/1942188-Asmus-Tietchens-Musik-Aus-Der-Grauzone">Asmus Tietchens - Clones</a></li>
<li><a href="https://www.discogs.com/release/1340975-R%C3%BCdiger-Lorenz-Earthrise">Rüdiger Lorenz - Dakar</a></li>
<li><a href="https://www.discogs.com/release/1942188-Asmus-Tietchens-Musik-Aus-Der-Grauzone">Asmus Tietchens - Unter Der Stadt</a></li>
<li><a href="https://www.discogs.com/release/5124940-Cin%C3%A9ma-V%C3%A9rit%C3%A9-Rhythmus-Und-Ritual">Cinéma Vérité - Dials</a></li> 
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/AMission.mp3",
    labelInfo: "A-Mission (Leeds, 1983-1985)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/294038-O-Yuki-Conjugate-Scene-In-Mirage">O Yuki Conjugate - Odomankoma</a></li>
      <li><a href="https://www.discogs.com/release/426169-Metgumbnerbone-Ligeliahorn">Metgumbnerbone - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/407696-Asmus-Tietchens-Seuchengebiete">Asmus Tietchens - Hydrophonie 2</a></li>
      <li><a href="https://www.discogs.com/release/588413-Possession-The-Thin-White-Arms-Obtusely-Angled-At-The-Elbow-Methodically-Dipping-And-Emerging">Possession - Recreation of the Past</a></li>
      <li><a href="https://www.discogs.com/release/1220086-Tom-Fazzini-Neck-To-Neck">Tom Fazzini - Cradle Song</a></li>
      <li><a href="https://www.discogs.com/release/588413-Possession-The-Thin-White-Arms-Obtusely-Angled-At-The-Elbow-Methodically-Dipping-And-Emerging">Possession - Control and the Subject</a></li>
      <li><a href="https://www.discogs.com/release/294038-O-Yuki-Conjugate-Scene-In-Mirage">O Yuki Conjugate - P2</a></li>
      <li><a href="https://www.discogs.com/release/1220086-Tom-Fazzini-Neck-To-Neck">Tom Fazzini - Excursion to Rothsay</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/EnglishMuffinRecords.mp3",
    labelInfo: "English Muffin Records (New York, 1999-2002)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/47454">Accelera Deck - Loop10</a></li>
      <li><a href="https://www.discogs.com/release/13024821">Lucky Dragons - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/47413">Accelera Deck - Further</a></li>
      <li><a href="https://www.discogs.com/release/16788">Bauri - Morgondagg</a></li>
      <li><a href="https://www.discogs.com/release/47413">Accelera Deck - Magnetic</a></li>
      <li><a href="https://www.discogs.com/release/13024821">Lucky Dragons - One Version Of 23 Yr Old American Boy</a></li>
      <li><a href="https://www.discogs.com/release/47413">Accelera Deck - Pulling Through</a></li>
      <li><a href="https://www.discogs.com/release/48202">V/Vm - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/16788">Bauri - Solvind</a></li>
      <li><a href="https://www.discogs.com/release/48202">V/Vm - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/47413">Accelera Deck - ;11</a></li>
      <li><a href="https://www.discogs.com/release/21752">Lucky Dragons - Theme From Sleep Through Me</a></li>
      <li><a href="https://www.discogs.com/release/47454">Accelera Deck - Eject</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Beaumonde.mp3",
    labelInfo: "Beau Monde (London, 1995-2001)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/786933-Tom-Silvester-Spin-Monkey">Tom Silvester - Monkey</a></li>
      <li><a href="https://www.discogs.com/release/72569-Ultra-Modern-Art-Absolute-Before-Obsolete">Ultra Modern Art - The Day The Angels Came</a></li>
      <li><a href="https://www.discogs.com/release/46820-Rithma-More-Funny-House-EP-2">Rithma - Adventures</a></li>
      <li><a href="https://www.discogs.com/master/191714-Uriel-Exploits">Uriel - Intermezzo</a></li>
      <li><a href="https://www.discogs.com/release/74875-Intentional-The-Black-Lagoon">Intentional - The Black Lagoon (Chazzes mix)</a></li>
      <li><a href="https://www.discogs.com/master/402935-Tom-S-All-U-Got-2-Do">Tom S - All U Got 2 Do Deep</a></li>
      <li><a href="https://www.discogs.com/master/191714-Uriel-Exploits">Uriel - Interface</a></li>
      <li><a href="https://www.discogs.com/master/2162707-Rithma-More-Funny-House-EP">Rithma - New Times of None</a></li>
      <li><a href="https://www.discogs.com/release/110461-Tha-Rebel-Crew-Just-A-Kid">Tha Rebel Crew - Just a Kid</a></li>
      <li><a href="https://www.discogs.com/release/74875-Intentional-The-Black-Lagoon">Intentional - The Black Lagoon (DJ Assassin mix)</a></li>
      <li><a href="https://www.discogs.com/master/191714-Uriel-Exploits">Uriel - Revers Omniverse</a></li>
      <li><a href="https://www.discogs.com/master/2162707-Rithma-More-Funny-House-EP">Rithma - The Thumpy Bass</a></li>
      <li><a href="https://www.discogs.com/release/110461-Tha-Rebel-Crew-Just-A-Kid">Tha Rebel Crew - Love Sun</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Frogman.mp3",
    labelInfo: "Frogman Records (Tokyo, 1994-2005)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/113703-Quadra-Sketch-From-A-Moment">Quadra - Spell of Rain</a></li>
      <li><a href="https://www.discogs.com/release/1079348-Hirofumi-Goto-Geo-Rhythm">Hirofumi Goto - OKOSO Zukin Type-B</a></li>
      <li><a href="https://www.discogs.com/release/1079367-The-Anazaworld-Potato-Sensations">The Anazaworld - Snow Snow Town</a></li>
      <li><a href="https://www.discogs.com/release/142362-Hitoshi-Ohishi-Metronomerampage">Hitoshi Ohishi - Turn From Blue</a></li>
      <li><a href="https://www.discogs.com/release/205438-Brothers-In-Raw-Live-At-Cocolo">Brothers in Raw - Cocolo Kara</a></li>
      <li><a href="https://www.discogs.com/release/215685-Kagami-Beatbang-EP">Kagami - Beat Bang Red</a></li>
      <li><a href="https://www.discogs.com/release/315362-Ryo-Arai-Again">Ryo Arai - Insolation</a></li>
      <li><a href="https://www.discogs.com/release/113703-Quadra-Sketch-From-A-Moment">Quadra - Ground Loop</a></li>
      <li><a href="https://www.discogs.com/release/142362-Hitoshi-Ohishi-Metronomerampage">Hitoshi Ohishi - More Wriggles + Pieces</a></li>
      <li><a href="https://www.discogs.com/release/81804-Various-Pulseman">Resistance D - Beatrice</a></li>
      <li><a href="https://www.discogs.com/release/1464079-Hulot-Deco">Hulot ft. Tavito Nanao - Stairway</a></li>
      <li><a href="https://www.discogs.com/release/317509-Susumu-Yokota-Baroque">Susumu Yokota - Gem Stones</a></li>
      <li><a href="https://www.discogs.com/release/142362-Hitoshi-Ohishi-Metronomerampage">Hitoshi Ohishi - Metronomerampage</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Japo.mp3",
    labelInfo: "Japo Records (Munich, 1970-1985)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/1390699-Christoph-Anders-Heiner-Goebbels-Alfred-Harth-Paul-Lovens-Rolf-Riehm-Annemarie-Roelofs-Es-Herrscht-U">Alfred Harth - Burrough's Haiku</a></li>
      <li><a href="https://www.discogs.com/release/1226852-Jack-DeJohnette-Pierre-Favre-Fredy-Studer-Dom-Um-Romao-David-Friedman-George-Gruntz-Percussion-Profi">George Gruntz - Movement 1</a></li>
      <li><a href="https://www.discogs.com/master/1584851-Herbert-Joos-The-Philosophy-Of-The-Fluegelhorn">Herbert Joos - The Philosophy of The Flugelhorn</a></li>
      <li><a href="https://www.discogs.com/release/2800696-Rena-Rama-Landscapes">Rena Rama - Enok</a></li>
      <li><a href="https://www.discogs.com/release/1226852-Jack-DeJohnette-Pierre-Favre-Fredy-Studer-Dom-Um-Romao-David-Friedman-George-Gruntz-Percussion-Profi">George Gruntz - Movement 5</a></li>
      <li><a href="https://www.discogs.com/master/1658145-OM-Rautionaha">OM - Stephanie</a></li>
      <li><a href="https://www.discogs.com/master/237764-Stephan-Micus-Implosions">Stephan Micus - Amarchaj (4 Shakuhachi)</a></li>
      <li><a href="https://www.discogs.com/release/2218141-Globe-Unity-Compositions">Globe Unity - Reflections</a></li>
      <li><a href="https://www.discogs.com/release/2800696-Rena-Rama-Landscapes">Rena Rama - Royal Song From Dahomey</a></li>
      <li><a href="https://www.discogs.com/release/2257922-OM-Cerberus">OM - Cerberus' Dance</a></li>
      <li><a href="https://www.discogs.com/master/155300-AMM-III-It-Had-Been-An-Ordinary-Enough-Day-In-Pueblo-Colorado">AMM III - Radio Activity</a></li>
      <li><a href="">Edward Vesala - Nan Madol</a></li>
      <li><a href="https://www.discogs.com/release/1226852-Jack-DeJohnette-Pierre-Favre-Fredy-Studer-Dom-Um-Romao-David-Friedman-George-Gruntz-Percussion-Profi">George Gruntz - Movement 5</a></li>
      <li><a href="https://www.discogs.com/release/873340-Stephan-Micus-Till-The-End-Of-Time">Stephan Micus - Till The End Of Time</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/NewAlbion.mp3",
    labelInfo: "New Albion (San Francisco, 1984-2012)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/2503189-Various-Nordisk-Sang-Music-Of-Norway">Eivind Groven - Tveitanvise</a></li>
      <li><a href="https://www.discogs.com/master/772337-Various-Austral-Voices">Ross Bolleter - Nallan Void</a></li>
      <li><a href="https://www.discogs.com/master/1630373-John-Abercrombie-George-Marsh-Mel-Graves-Upon-A-Time">George Marsh, Mel Graves - Moonfire</a></li>
      <li><a href="https://www.discogs.com/master/85725-Stephen-Scott-New-Music-For-Bowed-Piano">Stephen Scott - Resonant Resources</a></li>
      <li><a href="https://www.discogs.com/master/142836-Daniel-Lentz-Missa-Umbrarum">Daniel Lentz - O-ke-wa (North American Eclipse)</a></li>
      <li><a href="https://www.discogs.com/master/2471680-Ingram-Marshall-Alcatraz">Ingram Marshall - Solitary</a></li>
      <li><a href="https://www.discogs.com/master/651071-Morton-Subotnick-The-Key-To-Songs-Return">Morton Subotnick - Return - A Triumph of Reason Part 1</a></li>
      <li><a href="https://www.discogs.com/master/2471680-Ingram-Marshall-Alcatraz">Ingram Marshall - Escape</a></li>
      <li><a href="https://www.discogs.com/master/290811-Harold-Budd-With-Zeitgeist-She-Is-A-Phantom">Harold Budd with Zeitgeist - IN DELIUS' SLEEP</a></li>
      <li><a href="https://www.discogs.com/release/15796472-Ruth-Crawford-Johanna-Beyer-Sarah-Cahill-9-Preludes">Ruth Crawford - Intensivo (Sarah Cahill)</a></li>
      <li><a href="https://www.discogs.com/master/791517-Deep-Listening-Band-The-Ready-Made-Boomerang">Deep Listening Band - Geocentric</a></li>
      <li><a href="https://www.discogs.com/release/264845-Carl-Stone-Moms">Carl Stone - Gadberry's</a></li>
      <li><a href="https://www.discogs.com/master/772337-Various-Austral-Voices">Alistair Riddell - Fantasie</a></li>
      <li><a href="https://www.discogs.com/master/1630373-John-Abercrombie-George-Marsh-Mel-Graves-Upon-A-Time">John Abercrombie, George Marsh - In The Woods</a></li>
      <li><a href="https://www.discogs.com/release/4299640-Lou-Harrison-The-Perilous-Chapel">Lou Harrison - Fugue for Percussion</a></li>
      <li><a href="https://www.discogs.com/master/953626-Paul-Dresher-Night-Songs-Channels-Passing">Paul Dresher - Blue Night Setting</a></li>
      <li><a href="https://www.discogs.com/release/17977687-Leo-Ornstein-Sarah-Cahill-Fantasy-and-Metaphor">Leo Ornstein - Fantasy Piece #3 (Sarah Cahill)</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/RecycleOrDie.mp3",
    labelInfo: "Recycle Or Die (Offenbach Am Main, 1992-1997)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/60986-Various-Backlash-The-Recycle-Or-Die-Compilation">#9 Dream - La Lune De Miel (Kraut as Kraut Can Remix)</a></li>
      <li><a href="https://www.discogs.com/master/47269-Stevie-Be-Zet-Archaic-Modulation">Stevie Be Zet - African Marche</a></li>
      <li><a href="https://www.discogs.com/release/49190-Baked-Beans-Baked-Beans">Baked Beans - Bake Daga</a></li>
      <li><a href="https://www.discogs.com/release/60986-Various-Backlash-The-Recycle-Or-Die-Compilation">Ralf Hildenbeutel - Citation Collection</a></li>
      <li><a href="https://www.discogs.com/master/47269-Stevie-Be-Zet-Archaic-Modulation">Stevie Be Zet - Man in the Machine</a></li>
      <li><a href="https://www.discogs.com/release/57564-G-Tollmann-R-Hildenbeutel-Tollmannhildenbeutel">Gottfried Tollmann & Ralf Hildenbeutel - Today It's Business</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/VerticalForm.mp3",
    labelInfo: "Vertical Form (London, 1999-2004)",
    playlistHTML: `
     <li><a href="https://www.discogs.com/release/2779147-Rechenzentrum-Nelson">Rechenzentrum - Nelson Reprise</a></li>
<li><a href="https://www.discogs.com/release/34637-Kit-Clayton-Lateral-Forces-Surface-Fault">Kit Clayton - [untitled]</a></li>
<li><a href="https://www.discogs.com/release/35576-Piiri-GPU-Revised">Piiri - GPU (Farben's Hello Cello Mix)</a></li>
<li><a href="https://www.discogs.com/release/38591-PanAmerican-Renzo">Pan American - Runnin Dog (Reborn)</a></li>
<li><a href="https://www.discogs.com/release/2041137-World-Standard-Alabaster">World Standard - 干潮</a></li>
<li><a href="https://www.discogs.com/master/125870-Ein%C3%B3ma-Undir-Feiln%C3%B3tum">Einóma - Brot</a></li>
<li><a href="https://www.discogs.com/release/69927-Smyglyssna-Departures">Smyglyssna - What's That Smell?</a></li>
<li><a href="https://www.discogs.com/release/36099-PanAmerican-The-River-Made-No-Sound">Pan American - Settled</a></li>
<li><a href="https://www.discogs.com/release/2041137-World-Standard-Alabaster">World Standard - 魂の叫び</a></li>
<li><a href="https://www.discogs.com/release/38591-PanAmerican-Renzo">Pan American - Toy Triggers</a></li>
<li><a href="https://www.discogs.com/release/26258-Nick-Rapaccioli-Rapaccioli-EP-1">Nick Rapaccioli - Sci Fi</a></li>
<li><a href="https://www.discogs.com/release/34637-Kit-Clayton-Lateral-Forces-Surface-Fault">Kit Clayton - [untitled]</a></li>
<li><a href="https://www.discogs.com/master/125870-Ein%C3%B3ma-Undir-Feiln%C3%B3tum">Einóma - Glerborgir</a></li>
<li><a href="https://www.discogs.com/release/36099-PanAmerican-The-River-Made-No-Sound">Pan American - Raised Wall</a></li> 
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/ZeroGravity.mp3",
    labelInfo: "Zero Gravity (Tokyo, 1996-2017)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/283693-Toshimaru-Nakamura-No-Input-Mixing-Board">Toshimaru Nakamura - Nimb No. 2</a></li>
      <li><a href="https://www.discogs.com/release/322554-Trio-Rakant-Kokorosususu">Trio Rakant - Pure Silence Space (Unruffled)</a></li>
      <li><a href="https://www.discogs.com/release/1033661-Strange-Garden-Mumbo-Jumbo-Riutal-Of-The-Back-Yard">Strange Garden - 音霊 Ⅲ</a></li>
      <li><a href="https://www.discogs.com/release/1033659-Yoshimitsu-Ichiraku-The-Music-Of-Surround-Panner">Yoshimitsu Ichiraku - "M" for O Wind Instruments & Percussion</a></li>
      <li><a href="https://www.discogs.com/release/322548-Temdendam-Suay-Sounzer-Paranoun-Sound-Tracks-Of-Some-Films">Temdendam Suay - Sounzer Paranoun</a></li>
      <li><a href="https://www.discogs.com/release/322544-Masaaki-Kikuchi-Formula">Masaaki Kikuchi - Rhythmy</a></li>
      <li><a href="https://www.discogs.com/release/326406-Suzukiski-Kamakura">Suzukiski - Pivot</a></li>
      <li><a href="https://www.discogs.com/release/322544-Masaaki-Kikuchi-Formula">Masaaki Kikuchi - Eurodin</a></li>
      <li><a href="https://www.discogs.com/release/283693-Toshimaru-Nakamura-No-Input-Mixing-Board">Toshimaru Nakamura - Nimb No. 7</a></li>
      <li><a href="https://www.discogs.com/release/322548-Temdendam-Suay-Sounzer-Paranoun-Sound-Tracks-Of-Some-Films">Temdendam Suay - Running Around The Suiside</a></li>
      <li><a href="https://www.discogs.com/master/2479771-Kazunao-Nagata-The-World-Of-Electronic-Sound-3">Kazunao Nagata - Sunset & Organization's Flag</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Baroc.mp3",
    labelInfo: "BAROC (Cologne, 2014-2016)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/6359467-Unfinished-Portraits-Untitled">Unfinished Portraits - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/6359467-Unfinished-Portraits-Untitled">Unfinished Portraits - Untitled</a></li>
      <li><a href="https://www.discogs.com/master/1111677-Paperwork-What-Mary-Didnt-Know">Paperwork - What Mary Didn't Know</a></li>
      <li><a href="https://www.discogs.com/master/737871-Paperwork-Untitled">Paperwork - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/6628767-Foreign-Untitled">Foreign - Untitled</a></li>
      <li><a href="https://www.discogs.com/master/737871-Paperwork-Untitled">Paperwork - Untitled</a></li>
      <li><a href="https://www.discogs.com/master/747012-Subtyl-Untitled">Subtyl Untitled</a></li>
      <li><a href="https://www.discogs.com/release/5988218-L-Neils-Untitled">L Neils - Untitled</a></li>
      <li><a href="https://www.discogs.com/master/747012-Subtyl-Untitled">Subtyl - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/6359467-Unfinished-Portraits-Untitled">Unfinished Portraits - Untitled</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Clear.mp3",
    labelInfo: "Clear (London, 1994-1998)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/155945-The-Lithium-Project-Lithium-Project">The Lithium Project - Passo Fundo</a></li>
      <li><a href="https://www.discogs.com/release/5328-Reflection-The-Errornormous-World">Reflection - Cold Wind In The Bright Sun</a></li>
      <li><a href="https://www.discogs.com/master/18501-Jake-Slazenger-Makesaracket">Jake Slazenger - Stupid Wanker</a></li>
      <li><a href="https://www.discogs.com/master/18525-Doctor-Rockit-Whoosh">Doctor Rockit - Way Outta Here</a></li>
      <li><a href="https://www.discogs.com/master/6883-Plaid-Android">Plaid - Anything</a></li>
      <li><a href="https://www.discogs.com/release/5311-As-One-The-Message-In-Herbies-Shirts">As One - Epic</a></li>
      <li><a href="https://www.discogs.com/master/155945-The-Lithium-Project-Lithium-Project">The Lithium Project - Mars Plastic (3rd Eye)</a></li>
      <li><a href="https://www.discogs.com/release/1723-Doctor-Rockit-The-Music-Of-Sound">Doctor Rockit - Song Without Italian Words</a></li>
      <li><a href="https://www.discogs.com/release/5311-As-One-The-Message-In-Herbies-Shirts">As One - Hyeres</a></li>
      <li><a href="https://www.discogs.com/release/5328-Reflection-The-Errornormous-World">Reflection - Many Colours</a></li>
      <li><a href="https://www.discogs.com/release/1723-Doctor-Rockit-The-Music-Of-Sound">Doctor Rockit - Babykiss</a></li>
      <li><a href="https://www.discogs.com/release/5325-Metamatics-A-Metamatics-Production">Metamatics - Swimmer</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/GneissThings.mp3",
    labelInfo: "Gneiss Things (Ohio, 2007-2011)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/1357170-Emeralds-Live">Emeralds - 032208 Cleveland OH</a></li>
      <li><a href="https://www.discogs.com/release/1332812-Steve-Hauschildt-The-Summit">Steve Hauschildt - Precious Afterthoughts</a></li>
      <li><a href="https://www.discogs.com/release/1332826-Sam-Goldberg-Echoing-Department">Sam Goldberg - Echoing Dept</a></li>
      <li><a href="https://www.discogs.com/release/2218806-Pulse-Emitter-Sunset-Into-Night">Pulse Emitter - Night</a></li>
      <li><a href="https://www.discogs.com/master/185533-Emeralds-Emeralds">Emeralds - Overboard (Off The Deep End)</a></li>
      <li><a href="https://www.discogs.com/release/1332826-Sam-Goldberg-Echoing-Department">Sam Goldberg - Cold</a></li>
      <li><a href="https://www.discogs.com/master/986781-Oneohtrix-Point-Never-A-Pact-Between-Strangers">Oneohtrix Point Never - The Pretender</a></li>
      <li><a href="https://www.discogs.com/release/1332812-Steve-Hauschildt-The-Summit">Steve Hauschildt - Passing Cars</a></li>
      <li><a href="https://www.discogs.com/release/1357170-Emeralds-Live">Emeralds - 032208 Cleveland OH</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/K2O.mp3",
    labelInfo: "K2 O Records (Berlin, 1996-2003)",
    playlistHTML: `
     <li><a href="https://www.discogs.com/release/650516-Lazyfish-Alexandroid-OS">Alexandroid - Swim</a></li>
<li><a href="https://www.discogs.com/release/79839-Multicast-Further-Obliq-Perspectives">Crix Madine - Crix Madine's Theme</a></li>
<li><a href="https://www.discogs.com/release/19542-Shapes-Forms-Shapes-Forms">Shapes & Forms - Fractal</a></li>
<li><a href="https://www.discogs.com/release/191671-Clubsessel-Clubsessel">Clubsessel - Sprinklerzentrale</a></li>
<li><a href="https://www.discogs.com/release/98033-Andrew-Read-Anthony-Child-Guitar-Treatments">Andrew Read and Anthony Child - Guitar Treatment Pt. 6</a></li>
<li><a href="https://www.discogs.com/release/91521-Mewark-Little-One">Mewark - Inside</a></li>
<li><a href="https://www.discogs.com/release/105409-Lazyfish-Mewark-Lazyfish-Mewark">Lazyfish / Mewark - Eстественно</a></li>
<li><a href="https://www.discogs.com/release/172535-Psi-Performer-Art-Is-A-Division-Of-Pain-Remixed-1">Psi Performer - 1992 (Wechsel Garland's Small Parts Isolated und Zerstreut mix)</a></li>
<li><a href="https://www.discogs.com/release/172534-Psi-Performer-Art-Is-A-Division-Of-Pain-Remixed-2">Psi Performer - 1999 Re-interpretated By Stars Of The Lid</a></li>
<li><a href="https://www.discogs.com/release/81508-Zorn-Cruel-Summer">Zorn - Intro</a></li>
<li><a href="https://www.discogs.com/release/91506-Monophace-Random-Factor">Monophace - Wavestream</a></li>
<li><a href="https://www.discogs.com/release/43560-Dennis-DeSantis-Clock-Wise">Dennis DeSantis - Sugar</a></li>
<li><a href="https://www.discogs.com/release/172535-Psi-Performer-Art-Is-A-Division-Of-Pain-Remixed-1">Psi Performer - 1961 (Flowing remix)</a></li>
<li><a href="https://www.discogs.com/release/44946-Psi-Performer-Part-One">Psi Performer - Untitled</a></li> 
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/OrthlorngMusork.mp3",
    labelInfo: "Orthlorng Musork (San Francisco, 1999-2004)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/256594-Stephan-Mathieu-Ekkehard-Ehlers-Heroin-Remixes">Stephan Mathieu & Ekkehard Ehlers - Herz</a></li>
      <li><a href="https://www.discogs.com/release/231285-Alejandra-And-Aeron-Bousha-Blue-Blazes">Alejandra and Aeron - Learning From Mistakes, Good (not fun)</a></li>
      <li><a href="https://www.discogs.com/release/34636-Timeblind-Bloatware-EP">Timeblind - Extreme Air 1</a></li>
      <li><a href="https://www.discogs.com/release/231285-Alejandra-And-Aeron-Bousha-Blue-Blazes">Alejandra and Aeron - Juanita, King Chime and Florida Flash</a></li>
      <li><a href="https://www.discogs.com/release/155205-Full-Swing-Full-Swing-Edits">Yo La Tengo - Hoboken Beach Bums (Full Swing Edit)</a></li>
      <li><a href="https://www.discogs.com/release/140081-Sutekh-Fell">Sutekh - Gospel Train</a></li>
      <li><a href="https://www.discogs.com/release/212716-Eight-Frozen-Modules-The-Abduction-Of-Barry">Eight Frozen Modules - Micro-Iconic Feature</a></li>
      <li><a href="https://www.discogs.com/master/95111-AGF-Westernization-Completed">AGF - Uralow</a></li>
      <li><a href="https://www.discogs.com/release/34636-Timeblind-Bloatware-EP">Timeblind - Bramble</a></li>
      <li><a href="https://www.discogs.com/release/166124-Stephan-Mathieu-Full-Swing-EP">Stephan Mathieu - 11.55.330</a></li>
      <li><a href="https://www.discogs.com/release/231285-Alejandra-And-Aeron-Bousha-Blue-Blazes">Alejandra and Aeron - I Don't Know</a></li>
      <li><a href="https://www.discogs.com/release/155205-Full-Swing-Full-Swing-Edits">Akira Rabelais - ... (Full Swing Edit)</a></li>
      <li><a href="https://www.discogs.com/release/25438-Kit-Clayton-Latke">Kit Clayton - Tongue Under Lip</a></li>
      <li><a href="https://www.discogs.com/release/25438-Kit-Clayton-Latke">Kit Clayton - I Only Want Quiet</a></li>
      <li><a href="https://www.discogs.com/release/140081-Sutekh-Fell">Sutekh - Recession Clouds</a></li>
      <li><a href="https://www.discogs.com/release/212716-Eight-Frozen-Modules-The-Abduction-Of-Barry">Eight Frozen Modules - Learning To Socialize</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/SendingOrbs.mp3",
    labelInfo: "Sending Orbs (Groningen, 2005-2013)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/master/27300-Yagya-Rigning">Yagya - Rigning Einn</a></li>
      <li><a href="https://www.discogs.com/master/278027-Secede-Tryshasla">Secede - Kingdom of Hearts</a></li>
      <li><a href="https://www.discogs.com/release/2029315-Markus-Guentner-Doppelgaenger">Markus Guentner - Das Haus Steht Leer</a></li>
      <li><a href="https://www.discogs.com/master/278027-Secede-Tryshasla">Secede - Hospital Requiem</a></li>
      <li><a href="https://www.discogs.com/release/569174-Funckarma-Elaztiq-Bourbon-5">Funckarma - Lignite</a></li>
      <li><a href="https://www.discogs.com/release/777189-Blamstrain-Disfold">Blamstrain - The thing you hate me for is also a part of the rest of me you love</a></li>
      <li><a href="https://www.discogs.com/master/495515-Kettel-Secede-When-Can">Kettel & Secede - A New Factory</a></li>
      <li><a href="https://www.discogs.com/release/4901849-Kettel-Ibb-Obb-Original-Soundtrack">Kettel - Secret Pelle</a></li>
      <li><a href="https://www.discogs.com/release/777189-Blamstrain-Disfold">Blamstrain - Diacedita</a></li>
      <li><a href="https://www.discogs.com/master/499982-Yagya-Will-I-Dream-During-The-Process">Yagya - Wind and Thunder</a></li>
      <li><a href="https://www.discogs.com/release/569174-Funckarma-Elaztiq-Bourbon-5">Funckarma - Strip</a></li>
      <li><a href="https://www.discogs.com/master/495515-Kettel-Secede-When-Can">Kettel & Secede - Kirsten</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/WormInterface.mp3",
    labelInfo: "Worm Interface (London, 1994-2004)",
    playlistHTML: `
     <li><a href="https://www.discogs.com/release/278-Freeform-Heterarchy">Freeform - Culk</a></li>
<li><a href="https://www.discogs.com/release/292-Various-Alt-Frequencies">Dunderhead - Doditsu</a></li>
<li><a href="https://www.discogs.com/release/189-Tom-Jenkinson-Bubble-And-Squeak-EP">Tom Jenkinson - Bubble</a></li>
<li><a href="https://www.discogs.com/release/388-Himuro-Nichiyobi">Himuro - Open/Close</a></li>
<li><a href="https://www.discogs.com/release/389-Jake-Mandell-Parallel-Processes">Jake Mandell - Bottom Bracket</a></li>
<li><a href="https://www.discogs.com/release/279-Freeform-Elastic-Speakers">Freeform - Junction</a></li>
<li><a href="https://www.discogs.com/release/90086-Gimmik-Slow-Motion-Process">Gimmik - Powder Puff</a></li>
<li><a href="https://www.discogs.com/release/341-Baraki-Colony-Laspberry">Baraki - A Break</a></li>
<li><a href="https://www.discogs.com/release/147610-757-757">757 - Mescal Hal</a></li>
<li><a href="https://www.discogs.com/release/1386-Plasmalamp-Void-Travelling">Plasmalamp - Lenticular Clouds</a></li>
<li><a href="https://www.discogs.com/release/383-Various-Dragon-Disc-1">Astral Engineering - Drifting</a></li>
<li><a href="https://www.discogs.com/release/383-Various-Dragon-Disc-1">Astral Engineering - Terminus</a></li> 
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Charhizma.mp3",
    labelInfo: "charhizma (Vienna, 1999-2005)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/47382-The-Beige-Oscillator-DJ-Attach%C3%A9-Waiting-For-Wood">The Beige Oscillator & DJ Attaché - Good Solid Beat</a></li>
      <li><a href="https://www.discogs.com/release/1438760-Shabotinski-Bypass-Kill">Shabotinski - Rueckenwind</a></li>
      <li><a href="https://www.discogs.com/release/2229908-Serge-Baghdassarians-Boris-Baltschun-134611042509">Serge Baghdassarians & Boris Baltschun - 25.09</a></li>
      <li><a href="https://www.discogs.com/release/986981-Marina-Rosenfeld-The-Sheer-Frost-Orchestra-Drop-Hop-Drone-Scratch-Slide-A-For-Anything">Marina Rosenfeld - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/262710-Efzeg-W%C3%BCrm">Efzeg - Riss</a></li>
      <li><a href="https://www.discogs.com/release/47382-The-Beige-Oscillator-DJ-Attach%C3%A9-Waiting-For-Wood">The Beige Oscillator & DJ Attaché - Love in E Minor</a></li>
      <li><a href="https://www.discogs.com/release/718034-Martin-Siewert-Komfort-2000">Martin Siewert - Komfort 2000 Part 6</a></li>
      <li><a href="https://www.discogs.com/release/262710-Efzeg-W%C3%BCrm">Efzeg - Mindel Ena</a></li>
      <li><a href="https://www.discogs.com/release/986981-Marina-Rosenfeld-The-Sheer-Frost-Orchestra-Drop-Hop-Drone-Scratch-Slide-A-For-Anything">Marina Rosenfeld - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/1438760-Shabotinski-Bypass-Kill">Shabotinski - Ostermayer</a></li>
      <li><a href="https://www.discogs.com/release/47382-The-Beige-Oscillator-DJ-Attach%C3%A9-Waiting-For-Wood">The Beige Oscillator & DJ Attaché - It's Time Baby</a></li>
      <li><a href="https://www.discogs.com/release/606442-Margareth-Kammerer-To-Be-An-Animal-Of-Real-Flesh">Margareth Kammerer - Willow ... C'est Que J'aime</a></li>
      <li><a href="https://www.discogs.com/release/47382-The-Beige-Oscillator-DJ-Attach%C3%A9-Waiting-For-Wood">The Beige Oscillator & DJ Attaché - Hidden Track</a></li>
      <li><a href="https://www.discogs.com/release/1438760-Shabotinski-Bypass-Kill">Shabotinski - Lebanese Talk</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Defocus.mp3",
    labelInfo: "DeFocus (Guildford, 2000-2002)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/2990-CiM-Reference">CiM - view</a></li>
      <li><a href="https://www.discogs.com/release/290-Lackluster-R-U-Oho">Lackluster - Meanwhile (Rm Xb Yb Rothomstates)</a></li>
      <li><a href="https://www.discogs.com/master/321685-Various-Do-You-See">Aphelion - Touched</a></li>
      <li><a href="https://www.discogs.com/release/2990-CiM-Reference">CiM - fseek</a></li>
      <li><a href="https://www.discogs.com/release/5288-Aphelion-Click">Aphelion - Click</a></li>
      <li><a href="https://www.discogs.com/master/104573-Esem-Enveloped">Esem - Postledd</a></li>
      <li><a href="https://www.discogs.com/release/2990-CiM-Reference">CiM - by a river</a></li>
      <li><a href="https://www.discogs.com/release/2990-CiM-Reference">CiM - reference</a></li>
      <li><a href="https://www.discogs.com/release/5288-Aphelion-Click">Aphelion - Plateau</a></li>
      <li><a href="https://www.discogs.com/release/290-Lackluster-R-U-Oho">Lackluster - Meanwhile (Xhale Mix)</a></li>
      <li><a href="https://www.discogs.com/release/290-Lackluster-R-U-Oho">Lackluster - Meanwhile (Rm Xb Yb Rothomstates)</a></li>
      <li><a href="https://www.discogs.com/master/104565-Tim-Koch-Shorts-In-Alaska">Tim Koch - Just Blue</a></li>
      <li><a href="https://www.discogs.com/master/104565-Tim-Koch-Shorts-In-Alaska">Tim Koch - Bounce</a></li>
      <li><a href="https://www.discogs.com/master/104565-Tim-Koch-Shorts-In-Alaska">Tim Koch - Gills I'd Grow</a></li>
      <li><a href="https://www.discogs.com/master/321685-Various-Do-You-See">Mystery - Mystery One</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Hefty.mp3",
    labelInfo: "Hefty Records (Chicago, 1994-2011)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/889544-radicalfashion-Odori">Radicalfashion - Opening</a></li>
      <li><a href="https://www.discogs.com/release/5909719-Solo-Andata-Fyris-Swan">Solo Andata - Ballet of Hands</a></li>
      <li><a href="https://www.discogs.com/master/197445-Beneath-Autumn-Sky-Enki-Dus-Mono">Beneath Autumn Sky - A Recollection</a></li>
      <li><a href="https://www.discogs.com/master/35873-TRaumschmiere-Anti">T.Raumschmiere - Erlösung durch strom</a></li>
      <li><a href="https://www.discogs.com/release/5909719-Solo-Andata-Fyris-Swan">Solo Andata - Her Face Soft As Sleep</a></li>
      <li><a href="https://www.discogs.com/release/223540-Various-Immediate-Action">John Hughes - Set Me On The Couch (Twine Remix)</a></li>
      <li><a href="https://www.discogs.com/release/235101-Mondii-TP">Mondii - Bico</a></li>
      <li><a href="https://www.discogs.com/release/1086932-Various-History-Is-Bunk-Part-2">Spanova - Absentminded</a></li>
      <li><a href="https://www.discogs.com/release/221922-Euphone-Breaking-Parole-EP">Euphone - The Sun Theme</a></li>
      <li><a href="https://www.discogs.com/release/366581-The-Sea-And-Cake-John-McEntire-Window-Lights-Setup-For-Bed">The Sea and Cake - Window Lights</a></li>
      <li><a href="https://www.discogs.com/master/60962-John-McEntire-Music-From-The-Motion-Picture-Reach-The-Rock">Tortoise - In a Thimble</a></li>
      <li><a href="https://www.discogs.com/master/197439-Super-ESP-Super-ESP">Super E.S.P. - The Wisdom Tooth Of The East</a></li>
      <li><a href="https://www.discogs.com/master/526217-Euphone-Euphone">Euphone - Koko</a></li>
      <li><a href="https://www.discogs.com/master/182046-The-Aluminum-Group-Pelo">Aluminum Group - Pussy Reprise</a></li>
      <li><a href="https://www.discogs.com/release/889544-radicalfashion-Odori">Radicalfashion - Mask</a></li>
      <li><a href="https://www.discogs.com/release/1361914-Various-History-Is-Bunk-Part-1">Telefon Tel Aviv - Sound In A Dark Room (Ryuichi Sakamoto Remix)</a></li>
      <li><a href="https://www.discogs.com/master/107485-SavathSavalas-Folk-Songs-For-Trains-Trees-And-Honey">Savath+Savalas - Beginning</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Ladomat2000.mp3",
    labelInfo: "Ladomat 2000 (Hamburg, 1994-2006)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/314635-Workshop-Meiguiweisheng-Xiang">Workshop - Joina Ina</a></li>
<li><a href="https://www.discogs.com/release/62963-One-In-A-Billion-Soulfood-EP">One in a Billion - See the Light</a></li>
<li><a href="https://www.discogs.com/release/53340-Sensorama-Welcome-Insel">Sensorama - Helgoland</a></li>
<li><a href="https://www.discogs.com/release/72698-Sensorama-Projektor">Sensorama - Nachtportrait</a></li>
<li><a href="https://www.discogs.com/release/172696-Various-Hamburgeins">Glühen 4 - You Don't Know Me</a></li>
<li><a href="https://www.discogs.com/release/100786-Suguru-Kusumi-Usktot-EP">Suguru Kusumi - Usktot (Daniel Bell mix)</a></li>
<li><a href="https://www.discogs.com/release/42070-Sensorama-Love">Sensorama - Aeroplane City</a></li>
<li><a href="https://www.discogs.com/release/143171-Lawrence-Lawrence">Lawrence - Untitled</a></li>
<li><a href="https://www.discogs.com/release/38853-Sensorama-Zu-Gast-Auf-Der-Welcome-Insel">Sensorama - Aspirin (Global Communications Rmx)</a></li>
<li><a href="https://www.discogs.com/release/314635-Workshop-Meiguiweisheng-Xiang">Workshop - Brück Mauspfad</a></li>
<li><a href="https://www.discogs.com/release/172696-Various-Hamburgeins">Autosundmädchen - All The World Loves Lovers</a></li>
<li><a href="https://www.discogs.com/release/314635-Workshop-Meiguiweisheng-Xiang">Workshop - Brück Mauspfad</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/PsychonavigationRecords.mp3",
    labelInfo: "Psychonavigation Records (Dublin, 2000-2018)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/2799343-Obsil-Vicino">Obsil - Pendii</a></li>
      <li><a href="https://www.discogs.com/master/644929-Off-Land-Tidewater-Pulse">Off Land - Storm Passes</a></li>
      <li><a href="https://www.discogs.com/release/3098904-Karol-Gw%C3%B3%C5%BAd%C5%BA-Tamte-Czasy">Karol Gwóźdź - Bittkow</a></li>
      <li><a href="https://www.discogs.com/release/1316822-Gel-Sol-IZ">Gel-Sol - Secret Island</a></li>
      <li><a href="https://www.discogs.com/release/3504743-Roger-Doyle-Chalant-Memento-Mori">Roger Doyle - Chalant, Part 6</a></li>
      <li><a href="https://www.discogs.com/release/3504743-Roger-Doyle-Chalant-Memento-Mori">Roger Doyle - Chalant, Parts 1-3</a></li>
      <li><a href="https://www.discogs.com/master/1002176-Anodyne-Corrosion">Anodyne - When The Sky Fell Down</a></li>
      <li><a href="https://www.discogs.com/master/792789-Oliver-Lieb-Inside-Voices">Oliver Lieb - The Inner Core</a></li>
      <li><a href="https://www.discogs.com/master/792789-Oliver-Lieb-Inside-Voices">Oliver Lieb - Dreamfields</a></li>
      <li><a href="https://www.discogs.com/release/1380865-Ciaran-Byrne-Nine-Lives-Causeway">Ciaran Byrne - Pyrite Eventide</a></li>
      <li><a href="https://www.discogs.com/master/649344-Lorenzo-Montan%C3%A0-Leema-Hactus">Lorenzo Montanà - Nordland EQ</a></li>
      <li><a href="https://www.discogs.com/release/1065998-Enrico-Coniglio-Areavirus-Topofonie-Vol1">Lorenzo Coniglio - Velme Incl. Ground One</a></li>
      <li><a href="https://www.discogs.com/master/1046560-Lingua-Lustra-Uhadi">Lingua Lustra - Uhadi</a></li>
      <li><a href="https://www.discogs.com/master/644929-Off-Land-Tidewater-Pulse">Off Land - Never Been</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/TransonicRecords.mp3",
    labelInfo: "Transonic Records (Tokyo, 1994-2014)",
    playlistHTML: `
     <li><a href="https://www.discogs.com/release/7036039-ARM-Armedphone-Tour">Arm - 01</a></li>
<li><a href="https://www.discogs.com/release/7036039-ARM-Armedphone-Tour">Arm - 02</a></li>
<li><a href="https://www.discogs.com/release/1020829-Inoyama-Land-%E3%82%A4%E3%83%8E%E3%83%A4%E3%83%9E%E3%83%A9%E3%83%B3%E3%83%89-Music-For-Myxomycetes-%E5%A4%89%E5%BD%A2%E8%8F%8C%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E9%9F%B3%E6%A5%BD">Inoyama Land - Hair Air</a></li>
<li><a href="https://www.discogs.com/release/1020829-Inoyama-Land-%E3%82%A4%E3%83%8E%E3%83%A4%E3%83%9E%E3%83%A9%E3%83%B3%E3%83%89-Music-For-Myxomycetes-%E5%A4%89%E5%BD%A2%E8%8F%8C%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E9%9F%B3%E6%A5%BD">Inoyama Land - Morn</a></li>
<li><a href="https://www.discogs.com/release/345035-Nina-Noho-Ambient-Classics-1990-1992">Nina-Noho - Shinjuku</a></li>
<li><a href="https://www.discogs.com/release/3761988-Pre-Hikashu-Pre-Hikashu">Pre Hikashu - 1997年秋[RAVEN]</a></li>
<li><a href="https://www.discogs.com/release/3228902-%E5%B9%B3%E9%87%8E%E5%A8%81%E9%A6%AC%E9%9B%84-%E8%A1%9D%E6%92%83%E3%81%AEUFO">平野威馬雄 – 衝撃のUFO</a></li>
<li><a href="https://www.discogs.com/release/923781-Palomatic-Trill">Palomatic - Flutter</a></li>
<li><a href="https://www.discogs.com/release/345035-Nina-Noho-Ambient-Classics-1990-1992">Nina-Noho - Opening</a></li>
<li><a href="https://www.discogs.com/release/1020829-Inoyama-Land-%E3%82%A4%E3%83%8E%E3%83%A4%E3%83%9E%E3%83%A9%E3%83%B3%E3%83%89-Music-For-Myxomycetes-%E5%A4%89%E5%BD%A2%E8%8F%8C%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E9%9F%B3%E6%A5%BD">Inoyama Land - Candy</a></li>
<li><a href="https://www.discogs.com/release/21477223-Unreal-1994-1997">Unreal - Loner's Theme</a></li>
<li><a href="https://www.discogs.com/release/7036039-ARM-Armedphone-Tour">Arm - 62</a></li>
<li><a href="https://www.discogs.com/release/7036039-ARM-Armedphone-Tour">Arm - 63</a></li>
<li><a href="https://www.discogs.com/release/7036039-ARM-Armedphone-Tour">Arm - 64</a></li>
<li><a href="https://www.discogs.com/release/226936-Pacific-231-Tropical-Songs-Gold">Pacific 231 - Have A Nice Trip!</a></li> 
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/XOR.mp3",
    labelInfo: "X-OR (The Hague, 1990-2013)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/4368017-Wiek-Hijmans-One-Hour">Wiek Hijmans - One Hour (Part II)</a></li>
<li><a href="https://www.discogs.com/release/4368017-Wiek-Hijmans-One-Hour">Wiek Hijmans - One Hour (Part III)</a></li>
<li><a href="https://www.discogs.com/release/505802-Various-International-Live-Electronic-Music-Incorporated">John Bischoff, Tim Perkis - Deck Pulse</a></li>
<li><a href="https://www.discogs.com/release/875580-Huib-Emmer-Full-Colour-Ghost">Huib Emmer - Lo</a></li>
<li><a href="https://www.discogs.com/release/2431368-Luc-Houtkamp-The-Songlines">Luc Houtkamp - Korthals XIV</a></li>
<li><a href="https://www.discogs.com/release/1559423-Maarten-Altena-Ensemble-Generations">Maarten Altena Ensemble - No. 6 (From Nachtvlinders)</a></li>
<li><a href="https://www.discogs.com/release/336249-Gilius-van-Bergeijk-Volume-One">Gilius van Bergeijk - en Lied Van Schijn En Weezen</a></li>
<li><a href="https://www.discogs.com/release/875580-Huib-Emmer-Full-Colour-Ghost">Huib Emmer - Their Bodies No Longer Theirs</a></li>
<li><a href="https://www.discogs.com/release/2881724-Paul-Termos-Misha-Mengelberg-Paul-Termos-Sessions-Volume-I">Paul Termos & Misha Mengelberg - Koekoek</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Din.mp3",
    labelInfo: "DIN (Berlin, 1996-2002)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/1980439">Arovane - Scapen Te</a></li>
      <li><a href="https://www.discogs.com/release/1678110">Log - Out 2</a></li>
      <li><a href="https://www.discogs.com/release/1980439">Arovane - Thaem Nue</a></li>
      <li><a href="https://www.discogs.com/release/3122">PS - Freak Walk</a></li>
      <li><a href="https://www.discogs.com/release/338064">Traktor - Various Traktor Retraktored</a></li>
      <li><a href="https://www.discogs.com/release/3131">Arovane - No. 8 (AMX)</a></li>
      <li><a href="https://www.discogs.com/release/1980439">Arovane - Revart Amx</a></li>
      <li><a href="https://www.discogs.com/release/1678110">Log - Out 1</a></li>
      <li><a href="https://www.discogs.com/release/3121">Dynamo - Außen Vor 2</a></li>
      <li><a href="https://www.discogs.com/release/3132">Monolake - Occam</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/FarEastExperimentalSounds.mp3",
    labelInfo: "Far East Experimental Sounds (Tokyo, 1999-2001)",
    playlistHTML: `
      <li><a href="https://www.discogs.com/release/4548359">Taka Sato - '94.4.9</a></li>
      <li><a href="https://www.discogs.com/release/1271592">Woodman - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/1271592">Woodman - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/1271592">Woodman - Untitled</a></li>
      <li><a href="https://www.discogs.com/release/717823">Manabu Yuasa - Nekomata</a></li>
      <li><a href="https://www.discogs.com/release/717823">Hado-Ho - Star Liner (Dub Sonic Sound System Mix)</a></li>
      <li><a href="https://www.discogs.com/release/1038646">Woodman - A Touch Of Only You Brands Dreamy Towel</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/Gefriem.mp3",
    labelInfo: "Gefriem (Cologne, 1992-2000)",
    playlistHTML: `
    <li><a href="https://www.discogs.com/release/310537">Don't Dolby - Buchenhüll</a></li>
    <li><a href="https://www.discogs.com/release/310470">Schlammpeitziger - Selbstgeburt Odijk</a></li>
    <li><a href="https://www.discogs.com/release/310537">Don't Dolby - Lift</a></li>
    <li><a href="https://www.discogs.com/release/247225">Blutsiphon - Finest Of</a></li>
    <li><a href="https://www.discogs.com/release/247225">Blutsiphon - Flitschler</a></li>
    <li><a href="https://www.discogs.com/release/310470">Master's Cosmic Music - The Circles Of Relax</a></li>
    <li><a href="https://www.discogs.com/release/197148">Sack Und Blumm - Toy Grooves</a></li>
    <li><a href="https://www.discogs.com/release/366640">Marcus Schmickler - Lupo</a></li>
    <li><a href="https://www.discogs.com/release/310470">Schlammpeitziger - Kartoffelackerdiscoesotech</a></li>
    <li><a href="https://www.discogs.com/release/366640">F.X. Randomiz - Dotter</a></li>
    <li><a href="https://www.discogs.com/release/197148">Sack Und Blumm - Die Fünfte Dengelophonie</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/HamsterRecordsAndTapes.mp3",
    labelInfo: "Hamster Records And Tapes (London, 1982-1989)",
    playlistHTML: `
    <li><a href="https://www.discogs.com/release/753026">Terry Burrows - Loop #1</a></li>
    <li><a href="https://www.discogs.com/release/427224">Asmus Tietchens - Columbine Lunair</a></li>
    <li><a href="https://www.discogs.com/release/396507">Asmus Tietchens & Terry Burrows - Untitled</a></li>
    <li><a href="https://www.discogs.com/release/1715822">R. Stevie Moore - The Most Powerful Statement In History</a></li>
    <li><a href="https://www.discogs.com/release/1715822">R. Stevie Moore - Defeating The Purpose (Live)</a></li>
    <li><a href="https://www.discogs.com/release/1962166">The Loch Ness Monster - 2D Sex</a></li>
    <li><a href="https://www.discogs.com/release/985873">Enski Boski - Skid Row</a></li>
    <li><a href="https://www.discogs.com/release/427224">Controlled Bleeding - Untitled</a></li>
    <li><a href="https://www.discogs.com/release/3327995">Jung Analysts - Here's Lucifer</a></li>
    <li><a href="https://www.discogs.com/release/396507">Asmus Tietchens & Terry Burrows - Untitled</a></li>
    <li><a href="https://www.discogs.com/release/908645">Berbel Nobodius - Brushwood Epitaph</a></li>
    <li><a href="https://www.discogs.com/release/908645">Berbel Nobodius - Primeval Awakening</a></li>
    <li><a href="https://www.discogs.com/release/3327995">Jung Analysts - Some Loops</a></li>
    <li><a href="https://www.discogs.com/release/1962166">The Loch Ness Monster - Mind The Gap</a></li>
    <li><a href="https://www.discogs.com/release/427224">Yoneten - Gefahrlichter Neuer Negersong</a></li>
    <li><a href="https://www.discogs.com/release/1715822">R. Stevie Moore - Splem Jeague 3</a></li>
    <li><a href="https://www.discogs.com/release/1715822">R. Stevie Moore - The Crystal Chandelier</a></li>
    `
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/IntransitiveRecordings.mp3",
    labelInfo: "Intransitive Recordings (Cambridge MA, 1997-2012)",
    playlistHTML: `
        <li><a href="https://www.discogs.com/release/478482">Howard Stelzer & Jason Talbot - Blank</a></li>
    <li><a href="https://www.discogs.com/release/464960">Haco / View Masters - Theremin Radio 00</a></li>
    <li><a href="https://www.discogs.com/release/561763">JGrzinich / Seth Nehil- Pneuma</a></li>
    <li><a href="https://www.discogs.com/release/457459">Kapotte Muziek - Enhanced Room Acoustics 4</a></li>
    <li><a href="https://www.discogs.com/release/1345717">Nerve Net Noise - Breath</a></li>
    <li><a href="https://www.discogs.com/release/1984171">Lethe - Untitled</a></li>
    <li><a href="https://www.discogs.com/release/520222">Brume - Anastomose, Part 3</a></li>
    <li><a href="https://www.discogs.com/release/3278566">C. Spencer Yeh - Drone</a></li>
    <li><a href="https://www.discogs.com/release/105578">Gal - Lv, Nv</a></li>
    <li><a href="https://www.discogs.com/release/457460">Roel Meelkop - Untitled</a></li>
    <li><a href="https://www.discogs.com/release/134105">Lionel Marchetti - Trois</a></li>
    <li><a href="https://www.discogs.com/release/105578">Gal - Tong-Hua Yie-Shi</a></li>
    <li><a href="https://www.discogs.com/release/105578">Gal - 57A</a></li>
    <li><a href="https://www.discogs.com/release/131520">Jim Haynes - ::</a></li>
`
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/jarmusic.mp3",
    labelInfo: "Jarmusic (Berlin, 1982-2007)",
    playlistHTML: `
    <li><a href="https://www.discogs.com/release/23009075">American Night - Far Away</a></li>
    <li><a href="https://www.discogs.com/release/23009075">American Night - Free Man</a></li>
    <li><a href="https://www.discogs.com/release/11066954">Modern Art - Oriental Towers</a></li>
    <li><a href="https://www.discogs.com/release/2121338">Cleaners From Venus - A Blue Wave</a></li>
    <li><a href="https://www.discogs.com/release/2432002">Parts Unknown - Squids Can Fly</a></li>
    <li><a href="https://www.discogs.com/release/23009075">American Night - Time</a></li>
    <li><a href="https://www.discogs.com/release/23009075">American Night - Trance</a></li>
    <li><a href="https://www.discogs.com/release/2432002">Poison Dwarfs - Delay In The Cupboard</a></li>
    <li><a href="https://www.discogs.com/release/1608021">The Creams - Nasty Soap For Dogs #8</a></li>
    <li><a href="https://www.discogs.com/release/1795883">The Deep Freeze Mice - This Is Terrible</a></li>
    <li><a href="https://www.discogs.com/release/5935386">Wilde Spiele - Ich geh' wieder Weg</a></li>
    <li><a href="https://www.discogs.com/release/1184185">Milovan Srdenovic - Rednecks / Vampires</a><i/li>
    <li><a href="https://www.discogs.com/release/2432228">Jar - Don't Know</a></li>
    <li><a href="https://www.discogs.com/release/11066954">Livers Of Angels - Pavilion</a></li>
    <li><a href="https://www.discogs.com/release/1608021">The Creams - 70s Tea Room</a></li>
    <li><a href="https://www.discogs.com/release/1795883">Tge Deep Freeze Mice - A Trillion Sprods</a></li>
    <li><a href="https://www.discogs.com/release/7910978">Cleaners From Venus - Union Lads</a></li>
`
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/KonvexKonkav.mp3",
    labelInfo: "Konvex | Konkav (Frankfurt, 2000-2015)",
    playlistHTML: `
    <li><a href="https://www.discogs.com/release/177590">Blake C. - Pulau</a></li>
    <li><a href="https://www.discogs.com/release/71694">M. Rahn - Cloudmachine</a></li>
    <li><a href="https://www.discogs.com/release/69381">Multipliar - Christmas Time</a></li>
    <li><a href="https://www.discogs.com/release/177590">Blake C. - MH674</a></li>
    <li><a href="https://www.discogs.com/release/101293">Codec - Handle With Care</a></li>
    <li><a href="https://www.discogs.com/release/55885">Jeff Bennett - Anothering</a></li>
    <li><a href="https://www.discogs.com/release/88458">Martin Jarl - Majikbum</a></li>
    <li><a href="https://www.discogs.com/release/101293">Codec - Tiefenschärfe</a></li>
    <li><a href="https://www.discogs.com/release/69381">Crane A.K. - Jack Fresh D.C.</a></li>
    <li><a href="https://www.discogs.com/release/69381">M. Rahn - Puffy Nipples</a></li>
`
  },
  {
    audioUrl: "https://pub-de0f53c245634c89944c7a233bfb40cb.r2.dev/LevelRecords.mp3",
    labelInfo: "Level Records (Dusseldorf, 2004-2013)",
    playlistHTML: `
    <li><a href="https://www.discogs.com/release/1345008">Anders Ilar - Hillside</a></li>
    <li><a href="https://www.discogs.com/release/864444">Antonelli Electr. - Wood Turns Electric</a></li>
    <li><a href="https://www.discogs.com/release/1212326">Fax - Remix Of Paracaidas By Fax (Level Edit)</a></li>
    <li><a href="https://www.discogs.com/release/1212326">Ekkohaus - The End In View</a></li>
    <li><a href="https://www.discogs.com/release/439749">Fax - Bajotierra</a></li>
    <li><a href="https://www.discogs.com/release/2563999">Ziggy Kinder - Funstones</a></li>
    <li><a href="https://www.discogs.com/release/1420755">Kaitaro - Washer</a></li>
    <li><a href="https://www.discogs.com/release/1569657">Modul - Friends</a></li>
    <li><a href="https://www.discogs.com/release/531190">Antonelli Electr. - Snowflake Funk</a></li>
    <li><a href="https://www.discogs.com/release/8686457">Golden Parachutes - Fireworks</a></li>
`
  }



]
