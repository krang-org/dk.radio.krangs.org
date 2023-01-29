window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Casper Lowe",
      "url": "./commercials/da-DK/aviation-aerospace/casper-lowe/16749332910810/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Stark Kreiger And Morar",
      "url": "./commercials/da-DK/ranching/stark-kreiger-and-morar/16749331443660/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Berge Corkery",
      "url": "./commercials/da-DK/transportationg-trucking-railroad/berge-corkery/16749336815570/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Torphy And Sons",
      "url": "./commercials/da-DK/judiciary/torphy-and-sons/16749332098170/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Hartmann Inc",
      "url": "./commercials/da-DK/food-beverages/hartmann-inc/16749321076060/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Auer Durgan And Cronin",
      "url": "./commercials/da-DK/philanthropy/auer-durgan-and-cronin/16749331226470/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Kulas Group",
      "url": "./commercials/da-DK/executive-office/kulas-group/16749329440930/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Gulgowski Kirlin And Hilpert",
      "url": "./commercials/da-DK/legislative-office/gulgowski-kirlin-and-hilpert/16749322200380/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Wilkinson Adams And Bode",
      "url": "./commercials/da-DK/music/wilkinson-adams-and-bode/16749327742740/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Bradtke Wehner And Buckridge",
      "url": "./commercials/da-DK/pharmaceuticals/bradtke-wehner-and-buckridge/16749324137330/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Wintheiser Veum And Collins",
      "url": "./commercials/da-DK/hospitality/wintheiser-veum-and-collins/16749331915730/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Carter Zboncak And Hill",
      "url": "./commercials/da-DK/management-consulting/carter-zboncak-and-hill/16749334403040/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Blanda Kerluke",
      "url": "./commercials/da-DK/machinery/blanda-kerluke/16749330277730/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Bins Llc",
      "url": "./commercials/da-DK/alternative-dispute-resolution/bins-llc/16749329118160/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Cassin And Sons",
      "url": "./commercials/da-DK/commercial-real-estate/cassin-and-sons/16749316906660/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Weber Bruen And Friesen",
      "url": "./commercials/da-DK/marketing-and-advertising/weber-bruen-and-friesen/16749321402650/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Mcclure And Sons",
      "url": "./commercials/da-DK/sporting-goods/mcclure-and-sons/16749330514450/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Marks And Sons",
      "url": "./commercials/da-DK/business-supplies-and-equipment/marks-and-sons/16749319415480/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Dicki Inc",
      "url": "./commercials/da-DK/investment-banking/dicki-inc/16749327128470/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Gusikowski Mraz And Stamm",
      "url": "./commercials/da-DK/consumer-services/gusikowski-mraz-and-stamm/16749320910600/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Feeney Moore And Monahan",
      "url": "./commercials/da-DK/music/feeney-moore-and-monahan/16749338381630/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Padberg Beahan And Morissette",
      "url": "./commercials/da-DK/chemicals/padberg-beahan-and-morissette/16749338650690/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Marvin O Reilly",
      "url": "./commercials/da-DK/alternative-dispute-resolution/marvin-o-reilly/16749331615450/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Collier Rosenbaum And Gibson",
      "url": "./commercials/da-DK/wireless/collier-rosenbaum-and-gibson/16749333536750/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Weissnat Bernier And Medhurst",
      "url": "./commercials/da-DK/logistics-and-supply-chain/weissnat-bernier-and-medhurst/16749326663410/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Leffler Sauer",
      "url": "./commercials/da-DK/pharmaceuticals/leffler-sauer/16749319486190/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Padberg Schamberger And Bauch",
      "url": "./commercials/da-DK/biotechnology/padberg-schamberger-and-bauch/16749320705940/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Blick Kozey",
      "url": "./commercials/da-DK/think-tanks/blick-kozey/16749325898580/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Labadie And Sons",
      "url": "./commercials/da-DK/civil-engineering/labadie-and-sons/16749320811720/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Raynor Brown And Rosenbaum",
      "url": "./commercials/da-DK/luxury-goods-jewelry/raynor-brown-and-rosenbaum/16749325195330/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "West Considine And Nader",
      "url": "./commercials/da-DK/real-estate/west-considine-and-nader/16749330717670/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Kuhic Group",
      "url": "./commercials/da-DK/higher-education/kuhic-group/16749329613790/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Champlin Llc",
      "url": "./commercials/da-DK/think-tanks/champlin-llc/16749335982000/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Cummerata And Sons",
      "url": "./commercials/da-DK/dairy/cummerata-and-sons/16749323756640/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Klein Corkery",
      "url": "./commercials/da-DK/civil-engineering/klein-corkery/16749319911030/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Gislason Inc",
      "url": "./commercials/da-DK/capital-markets/gislason-inc/16749339137130/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Conroy O Connell And Erdman",
      "url": "./commercials/da-DK/machinery/conroy-o-connell-and-erdman/16749337572940/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Kessler Rempel And Gibson",
      "url": "./commercials/da-DK/venture-capital-private-equity/kessler-rempel-and-gibson/16749320635940/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Bogan Stracke",
      "url": "./commercials/da-DK/environmental-services/bogan-stracke/16749323974910/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Runolfsson Inc",
      "url": "./commercials/da-DK/farming/runolfsson-inc/16749335167800/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Bergstrom Llc",
      "url": "./commercials/da-DK/consumer-electronics/bergstrom-llc/16749338870540/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Kris Kessler And Lockman",
      "url": "./commercials/da-DK/religious-institutions/kris-kessler-and-lockman/16749322691380/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Von Veum And Schmidt",
      "url": "./commercials/da-DK/government-administration/von-veum-and-schmidt/16749324876770/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Ratke Prosacco",
      "url": "./commercials/da-DK/international-trade-and-development/ratke-prosacco/16749337002280/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Bayer Howell And Frami",
      "url": "./commercials/da-DK/religious-institutions/bayer-howell-and-frami/16749326378020/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Kshlerin Group",
      "url": "./commercials/da-DK/internet/kshlerin-group/16749318807610/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Bins Kshlerin And Kassulke",
      "url": "./commercials/da-DK/food-production/bins-kshlerin-and-kassulke/16749324217420/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Gutmann Stehr",
      "url": "./commercials/da-DK/international-affairs/gutmann-stehr/16749336358320/commercial.mp3",
      "artist": "International Affairs",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Roob Rodriguez And Pfeffer",
      "url": "./commercials/da-DK/railroad-manufacture/roob-rodriguez-and-pfeffer/16749325786870/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Langworth Mante",
      "url": "./commercials/da-DK/entertainment/langworth-mante/16749332670660/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Torp Berge And Ryan",
      "url": "./commercials/da-DK/performing-arts/torp-berge-and-ryan/16749326095520/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Stamm Inc",
      "url": "./commercials/da-DK/religious-institutions/stamm-inc/16749327285730/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Fisher Group",
      "url": "./commercials/da-DK/publishing/fisher-group/16749328259090/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Swift Inc",
      "url": "./commercials/da-DK/legal-services/swift-inc/16749333366170/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Blanda Wuckert And Harber",
      "url": "./commercials/da-DK/alternative-dispute-resolution/blanda-wuckert-and-harber/16749325977730/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Schaefer Hansen",
      "url": "./commercials/da-DK/industrial-automation/schaefer-hansen/16749325020400/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Wisozk Cole And Kertzmann",
      "url": "./commercials/da-DK/religious-institutions/wisozk-cole-and-kertzmann/16749333185150/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Sauer Parisian And Connelly",
      "url": "./commercials/da-DK/political-organization/sauer-parisian-and-connelly/16749334893740/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Watsica Group",
      "url": "./commercials/da-DK/media-production/watsica-group/16749320112620/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Beahan Mitchell And Greenfelder",
      "url": "./commercials/da-DK/sports/beahan-mitchell-and-greenfelder/16749321301570/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Denesik Crooks And Miller",
      "url": "./commercials/da-DK/performing-arts/denesik-crooks-and-miller/16749321574150/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Schultz And Sons",
      "url": "./commercials/da-DK/broadcast-media/schultz-and-sons/16749334976810/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Schaden And Sons",
      "url": "./commercials/da-DK/alternative-dispute-resolution/schaden-and-sons/16749332001140/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Brekke Lakin",
      "url": "./commercials/da-DK/commercial-real-estate/brekke-lakin/16749335813830/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Steuber Mraz And Wisoky",
      "url": "./commercials/da-DK/law-practice/steuber-mraz-and-wisoky/16749326917320/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Bogisich Inc",
      "url": "./commercials/da-DK/airlines-aviation/bogisich-inc/16749330363960/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Mcglynn Rogahn",
      "url": "./commercials/da-DK/automotive/mcglynn-rogahn/16749317760710/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Armstrong And Sons",
      "url": "./commercials/da-DK/marketing-and-advertising/armstrong-and-sons/16749328081210/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Muller Klein",
      "url": "./commercials/da-DK/civil-engineering/muller-klein/16749318289270/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Mcglynn Boehm",
      "url": "./commercials/da-DK/civic-social-organization/mcglynn-boehm/16749327913950/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Ryan And Sons",
      "url": "./commercials/da-DK/real-estate/ryan-and-sons/16749337386560/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Nader Schinner And Baumbach",
      "url": "./commercials/da-DK/newspapers/nader-schinner-and-baumbach/16749337738650/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Hodkiewicz Gulgowski And Macejkovic",
      "url": "./commercials/da-DK/ranching/hodkiewicz-gulgowski-and-macejkovic/16749337120790/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Greenholt Llc",
      "url": "./commercials/da-DK/market-research/greenholt-llc/16749335241940/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Trantow Cummings And Breitenberg",
      "url": "./commercials/da-DK/real-estate/trantow-cummings-and-breitenberg/16749329349520/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Crooks Mayer And Mosciski",
      "url": "./commercials/da-DK/health-wellness-and-fitness/crooks-mayer-and-mosciski/16749322932490/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Green Zboncak And Sipes",
      "url": "./commercials/da-DK/import-and-export/green-zboncak-and-sipes/16749334266710/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Christiansen Mitchell",
      "url": "./commercials/da-DK/philanthropy/christiansen-mitchell/16749321233940/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Wisoky Pfeffer",
      "url": "./commercials/da-DK/logistics-and-supply-chain/wisoky-pfeffer/16749333938510/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Bode Morissette And Kshlerin",
      "url": "./commercials/da-DK/building-materials/bode-morissette-and-kshlerin/16749321748530/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Lubowitz Langosh",
      "url": "./commercials/da-DK/computer-networking/lubowitz-langosh/16749318528420/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Sanford Group",
      "url": "./commercials/da-DK/civil-engineering/sanford-group/16749321877550/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Reinger Llc",
      "url": "./commercials/da-DK/philanthropy/reinger-llc/16749329044140/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Conn Rohan",
      "url": "./commercials/da-DK/real-estate/conn-rohan/16749330138870/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Bergnaum O Kon And Will",
      "url": "./commercials/da-DK/shipbuilding/bergnaum-o-kon-and-will/16749323591050/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Rath Llc",
      "url": "./commercials/da-DK/wine-and-spirits/rath-llc/16749327435610/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Wehner Prosacco",
      "url": "./commercials/da-DK/computer-networking/wehner-prosacco/16749328357610/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Pollich Group",
      "url": "./commercials/da-DK/biotechnology/pollich-group/16749322840540/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Bogisich Llc",
      "url": "./commercials/da-DK/construction/bogisich-llc/16749333279220/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Moore Harvey",
      "url": "./commercials/da-DK/sports/moore-harvey/16749325345910/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Dooley Miller And Stanton",
      "url": "./commercials/da-DK/public-relations-and-communications/dooley-miller-and-stanton/16749326277780/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Block Skiles And Bartell",
      "url": "./commercials/da-DK/international-trade-and-development/block-skiles-and-bartell/16749333073230/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Wolf Nienow And Schroeder",
      "url": "./commercials/da-DK/translation-and-localization/wolf-nienow-and-schroeder/16749317232430/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Hahn Bernhard And Jacobs",
      "url": "./commercials/da-DK/fine-art/hahn-bernhard-and-jacobs/16749327662670/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Christiansen Sipes And Thompson",
      "url": "./commercials/da-DK/recreational-facilities-and-services/christiansen-sipes-and-thompson/16749338293780/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Mills Keebler And Morar",
      "url": "./commercials/da-DK/shipbuilding/mills-keebler-and-morar/16749323514070/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Wilkinson Hill And Volkman",
      "url": "./commercials/da-DK/outsourcing-offshoring/wilkinson-hill-and-volkman/16749323836110/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Bogan Rath",
      "url": "./commercials/da-DK/fine-art/bogan-rath/16749332271060/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Schultz White And Frami",
      "url": "./commercials/da-DK/mental-health-care/schultz-white-and-frami/16749318100070/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Botsford Hirthe",
      "url": "./commercials/da-DK/information-services/botsford-hirthe/16749339024420/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Feeney And Sons",
      "url": "./commercials/da-DK/paper-forest-products/feeney-and-sons/16749329265680/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Conroy Spencer",
      "url": "./commercials/da-DK/outsourcing-offshoring/conroy-spencer/16749327033440/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Legros Llc",
      "url": "./commercials/da-DK/commercial-real-estate/legros-llc/16749331135600/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Torphy Nikolaus And Mckenzie",
      "url": "./commercials/da-DK/insurance/torphy-nikolaus-and-mckenzie/16749319833780/commercial.mp3",
      "artist": "Insurance",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Block O Hara",
      "url": "./commercials/da-DK/computer-games/block-o-hara/16749338207630/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Collins Will And Keebler",
      "url": "./commercials/da-DK/plastics/collins-will-and-keebler/16749320185650/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Turcotte Group",
      "url": "./commercials/da-DK/shipbuilding/turcotte-group/16749327217000/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Daniel Hills",
      "url": "./commercials/da-DK/executive-office/daniel-hills/16749334809880/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Cummings Rohan",
      "url": "./commercials/da-DK/furniture/cummings-rohan/16749334480640/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Kunde And Sons",
      "url": "./commercials/da-DK/maritime/kunde-and-sons/16749320460140/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Hauck Boyle And Herzog",
      "url": "./commercials/da-DK/sporting-goods/hauck-boyle-and-herzog/16749328767130/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Kirlin And Sons",
      "url": "./commercials/da-DK/government-relations/kirlin-and-sons/16749320292790/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Vandervort Llc",
      "url": "./commercials/da-DK/individual-family-services/vandervort-llc/16749319651670/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Corkery Llc",
      "url": "./commercials/da-DK/veterinary/corkery-llc/16749331359270/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Howell Wintheiser And Mayert",
      "url": "./commercials/da-DK/packaging-and-containers/howell-wintheiser-and-mayert/16749320547300/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Flatley Inc",
      "url": "./commercials/da-DK/financial-services/flatley-inc/16749337493940/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Kuhn And Sons",
      "url": "./commercials/da-DK/shipbuilding/kuhn-and-sons/16749322609750/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Willms Orn And Mann",
      "url": "./commercials/da-DK/performing-arts/willms-orn-and-mann/16749335441960/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Wyman Rau",
      "url": "./commercials/da-DK/wholesale/wyman-rau/16749331753790/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Kovacek Larkin",
      "url": "./commercials/da-DK/internet/kovacek-larkin/16749322335250/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Marquardt And Sons",
      "url": "./commercials/da-DK/hospitality/marquardt-and-sons/16749319729680/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Mayert Beer And Funk",
      "url": "./commercials/da-DK/investment-banking/mayert-beer-and-funk/16749330621010/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Hoppe Inc",
      "url": "./commercials/da-DK/legal-services/hoppe-inc/16749324054930/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Barrows Connelly",
      "url": "./commercials/da-DK/biotechnology/barrows-connelly/16749329524310/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Mann Brakus",
      "url": "./commercials/da-DK/hospital-health-care/mann-brakus/16749330784440/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Kirlin Group",
      "url": "./commercials/da-DK/international-affairs/kirlin-group/16749332423140/commercial.mp3",
      "artist": "International Affairs",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Monahan Heathcote And Bauch",
      "url": "./commercials/da-DK/museums-and-institutions/monahan-heathcote-and-bauch/16749317414960/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Emard Rogahn",
      "url": "./commercials/da-DK/industrial-automation/emard-rogahn/16749332180570/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Hayes Volkman And Harber",
      "url": "./commercials/da-DK/professional-training-coaching/hayes-volkman-and-harber/16749324487490/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Ernser And Sons",
      "url": "./commercials/da-DK/accounting/ernser-and-sons/16749336067730/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Huels And Sons",
      "url": "./commercials/da-DK/broadcast-media/huels-and-sons/16749323406510/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Rogahn Considine",
      "url": "./commercials/da-DK/printing/rogahn-considine/16749332831520/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Koch Erdman",
      "url": "./commercials/da-DK/civil-engineering/koch-erdman/16749324307380/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Konopelski Kohler",
      "url": "./commercials/da-DK/international-trade-and-development/konopelski-kohler/16749318455560/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Stamm Llc",
      "url": "./commercials/da-DK/performing-arts/stamm-llc/16749327994120/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Anderson Smith And Murphy",
      "url": "./commercials/da-DK/public-policy/anderson-smith-and-murphy/16749326743850/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Medhurst Feeney",
      "url": "./commercials/da-DK/printing/medhurst-feeney/16749328854180/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Hansen Armstrong And Rau",
      "url": "./commercials/da-DK/military/hansen-armstrong-and-rau/16749326184790/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Williamson Lesch And Zboncak",
      "url": "./commercials/da-DK/facilities-services/williamson-lesch-and-zboncak/16749327536980/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Turcotte Llc",
      "url": "./commercials/da-DK/luxury-goods-jewelry/turcotte-llc/16749321157150/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Cronin Murphy And Ondricka",
      "url": "./commercials/da-DK/banking/cronin-murphy-and-ondricka/16749321665520/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Cormier Weissnat And Roberts",
      "url": "./commercials/da-DK/staffing-and-recruiting/cormier-weissnat-and-roberts/16749319573180/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Will Quitzon And Hoppe",
      "url": "./commercials/da-DK/food-beverages/will-quitzon-and-hoppe/16749318914720/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Harber Mann And Luettgen",
      "url": "./commercials/da-DK/internet/harber-mann-and-luettgen/16749320995680/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Doyle Cassin",
      "url": "./commercials/da-DK/law-practice/doyle-cassin/16749338787260/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Stroman Kessler",
      "url": "./commercials/da-DK/banking/stroman-kessler/16749318740280/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Lynch Rutherford And Kunde",
      "url": "./commercials/da-DK/writing-and-editing/lynch-rutherford-and-kunde/16749323131810/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Daugherty Group",
      "url": "./commercials/da-DK/paper-forest-products/daugherty-group/16749320383730/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Larkin Gaylord",
      "url": "./commercials/da-DK/restaurants/larkin-gaylord/16749317494440/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Haley Group",
      "url": "./commercials/da-DK/performing-arts/haley-group/16749338460990/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Kessler Zboncak And Schaden",
      "url": "./commercials/da-DK/pharmaceuticals/kessler-zboncak-and-schaden/16749333821850/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Mayer O Hara",
      "url": "./commercials/da-DK/graphic-design/mayer-o-hara/16749323017540/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Kessler Daniel And Muller",
      "url": "./commercials/da-DK/aviation-aerospace/kessler-daniel-and-muller/16749316813210/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Mann Schmitt And Boyer",
      "url": "./commercials/da-DK/renewables-environment/mann-schmitt-and-boyer/16749329200360/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Muller Olson",
      "url": "./commercials/da-DK/public-policy/muller-olson/16749337314820/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Feest Roob",
      "url": "./commercials/da-DK/wholesale/feest-roob/16749337914820/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Collier And Sons",
      "url": "./commercials/da-DK/cosmetics/collier-and-sons/16749321973260/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Greenfelder Reinger And Oberbrunner",
      "url": "./commercials/da-DK/writing-and-editing/greenfelder-reinger-and-oberbrunner/16749325451960/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Stoltenberg Inc",
      "url": "./commercials/da-DK/environmental-services/stoltenberg-inc/16749318213380/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Luettgen Dickinson And Kutch",
      "url": "./commercials/da-DK/railroad-manufacture/luettgen-dickinson-and-kutch/16749322076850/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Schmidt O Keefe And Braun",
      "url": "./commercials/da-DK/translation-and-localization/schmidt-o-keefe-and-braun/16749323237200/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Anderson Nolan And Weissnat",
      "url": "./commercials/da-DK/newspapers/anderson-nolan-and-weissnat/16749335069000/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Williamson Conn",
      "url": "./commercials/da-DK/wine-and-spirits/williamson-conn/16749323314310/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Hermiston Becker",
      "url": "./commercials/da-DK/public-policy/hermiston-becker/16749336462700/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Botsford Davis",
      "url": "./commercials/da-DK/research/botsford-davis/16749318610140/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Thompson Group",
      "url": "./commercials/da-DK/philanthropy/thompson-group/16749330058120/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Howe Altenwerth",
      "url": "./commercials/da-DK/architecture-planning/howe-altenwerth/16749329950720/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Schowalter Huel And Schroeder",
      "url": "./commercials/da-DK/transportationg-trucking-railroad/schowalter-huel-and-schroeder/16749326810150/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Parker Group",
      "url": "./commercials/da-DK/music/parker-group/16749332586580/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Kshlerin Llc",
      "url": "./commercials/da-DK/law-enforcement/kshlerin-llc/16749326495320/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Bechtelar Schaefer And Corwin",
      "url": "./commercials/da-DK/government-administration/bechtelar-schaefer-and-corwin/16749326572830/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Goyette Group",
      "url": "./commercials/da-DK/aviation-aerospace/goyette-group/16749332513440/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Greenholt Abshire",
      "url": "./commercials/da-DK/design/greenholt-abshire/16749334173920/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Beahan Towne And Sawayn",
      "url": "./commercials/da-DK/civic-social-organization/beahan-towne-and-sawayn/16749328693340/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Zieme And Sons",
      "url": "./commercials/da-DK/import-and-export/zieme-and-sons/16749319066670/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Johns Group",
      "url": "./commercials/da-DK/events-services/johns-group/16749324964460/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Pouros Group",
      "url": "./commercials/da-DK/museums-and-institutions/pouros-group/16749336728230/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Mayert Labadie",
      "url": "./commercials/da-DK/professional-training-coaching/mayert-labadie/16749322516810/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Huel Lockman",
      "url": "./commercials/da-DK/hospital-health-care/huel-lockman/16749336626440/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Abbott Jones",
      "url": "./commercials/da-DK/mining-metals/abbott-jones/16749331832840/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }    
  ]
});

