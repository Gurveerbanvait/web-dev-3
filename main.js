// Tabbed content

// HTML Element For Input

// Menu Button
document.getElementById("1b").addEventListener("click", oneBtnClicked);
document.getElementById("2b").addEventListener("click", twoBtnClicked);
document.getElementById("3b").addEventListener("click", threeBtnClicked);
document.getElementById("4b").addEventListener("click", fourBtnClicked);

function oneBtnClicked() {
  document.getElementById("1bo").innerHTML = `<h2>The Goats achievements</h2>
    <img  class="centerimage" src="img/goats.jpeg" alt="goats" height="300" />
    <p id="cool">What Have the goats achieved?<p/>
    `;
}

function twoBtnClicked() {
  document.getElementById("1bo").innerHTML = `<h2>Messis Achievements</h2>
    <img class="centerimage" src="img/messi.jpg" alt="mesi" height="300"/>
    <p id="cool">ALL TITLES
    Titles and season
    1x World Cup winner
    2022	Argentina	Argentina
    1x Copa América winner
    20/21	Argentina	Argentina
    3x The Best FIFA Men's Player
    2022
    2019
    2009
    8x Winner Ballon d'Or
    2023
    2021
    2019
    2015
    2012
    2011
    2010
    2009
    3x UEFA Best Player in Europe
    2015
    2011
    2009
    4x Champions League winner
    14/15	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    08/09	FC Barcelona	FC Barcelona
    05/06	FC Barcelona	FC Barcelona
    3x FIFA Club World Cup winner
    2016	FC Barcelona	FC Barcelona
    2012	FC Barcelona	FC Barcelona
    2010	FC Barcelona	FC Barcelona
    6x Golden Boot winner
    18/19	FC Barcelona	FC Barcelona - 36 Goals
    17/18	FC Barcelona	FC Barcelona - 34 Goals
    16/17	FC Barcelona	FC Barcelona - 37 Goals
    12/13	FC Barcelona	FC Barcelona - 46 Goals
    11/12	FC Barcelona	FC Barcelona - 50 Goals
    09/10	FC Barcelona	FC Barcelona - 34 Goals
    10x Spanish champion
    18/19	FC Barcelona	FC Barcelona
    17/18	FC Barcelona	FC Barcelona
    15/16	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    12/13	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    09/10	FC Barcelona	FC Barcelona
    08/09	FC Barcelona	FC Barcelona
    05/06	FC Barcelona	FC Barcelona
    04/05	FC Barcelona	FC Barcelona
    2x French champion
    22/23	Paris Saint-Germain	Paris Saint-Germain
    21/22	Paris Saint-Germain	Paris Saint-Germain
    1x French Super Cup winner
    22/23	Paris Saint-Germain	Paris Saint-Germain
    2x Olympic medalist
    2009	Argentina Olympic Team	Argentina Olympic Team
    2008	Argentina Olympic Team	Argentina Olympic Team
    1x CONMEBOL-UEFA Cup of Champions winner
    21/22
    1x World Cup runner-up
    2014	Argentina	Argentina
    6x Second highest goal scorer
    21/22	Argentina	Argentina - 7 Goals
    16/17	FC Barcelona	FC Barcelona - 11 Goals
    14/15	FC Barcelona	FC Barcelona - 43 Goals
    13/14	FC Barcelona	FC Barcelona - 28 Goals
    10/11	FC Barcelona	FC Barcelona
    07/08	FC Barcelona	FC Barcelona
    1x Silver Boot
    18/19
    6x Player of the Tournament
    22/23	Leagues Cup	Leagues Cup
    21/22	2022 World Cup	2022 World Cup
    21/22	CONMEBOL-UEFA Cup of Champions	Finalissima
    20/21	Copa América 2021	Copa América 2021
    14/15	Copa América 2015	Copa América 2015
    13/14	World Cup 2014	World Cup 2014
    8x Best assist provider
    19/20	FC Barcelona	FC Barcelona
    17/18	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    14/15	Argentina	Argentina
    14/15	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    3x Uefa Supercup winner
    15/16	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    09/10	FC Barcelona	FC Barcelona
    3x Copa América runner-up
    15/16	Argentina	Argentina
    14/15	Argentina	Argentina
    06/07	Argentina	Argentina
    5x Top scorer
    14/15	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    1x Leagues Cup Winner
    2023	Leagues Cup	Leagues Cup
    7x Spanish cup winner
    20/21	FC Barcelona	FC Barcelona
    17/18	FC Barcelona	FC Barcelona
    16/17	FC Barcelona	FC Barcelona
    15/16	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    08/09	FC Barcelona	FC Barcelona
    8x Spanish Super Cup winner
    18/19	FC Barcelona	FC Barcelona
    16/17	FC Barcelona	FC Barcelona
    13/14	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    09/10	FC Barcelona	FC Barcelona
    06/07	FC Barcelona	FC Barcelona
    05/06	FC Barcelona	FC Barcelona
    1x Under-20 World Cup champion
    2005	Argentina U20	Argentina U20
    23x Top goal scorer
    22/23	Leagues Cup	Leagues Cup - 10 Goals
    20/21	Copa América 2021	Copa América 2021 - 4 Goals
    20/21	LaLiga	LaLiga - 30 Goals
    19/20	LaLiga	LaLiga - 25 Goals
    18/19	UEFA Champions League	UEFA Champions League - 12 Goals
    18/19	LaLiga	LaLiga - 36 Goals
    17/18	LaLiga	LaLiga - 34 Goals
    16/17	Copa del Rey	Copa del Rey - 5 Goals
    16/17	LaLiga	LaLiga - 37 Goals
    15/16	Copa del Rey	Copa del Rey - 5 Goals
    14/15	UEFA Champions League	UEFA Champions League - 10 Goals
    13/14	Copa del Rey	Copa del Rey - 5 Goals
    12/13	LaLiga	LaLiga - 46 Goals
    11/12	FIFA Club World Cup	FIFA Club World Cup - 2 Goals
    11/12	UEFA Champions League	UEFA Champions League - 14 Goals
    11/12	LaLiga	LaLiga - 50 Goals
    10/11	UEFA Champions League	UEFA Champions League - 12 Goals
    10/11	Copa del Rey	Copa del Rey - 7 Goals
    09/10	UEFA Champions League	UEFA Champions League - 8 Goals
    09/10	LaLiga	LaLiga - 34 Goals
    08/09	Copa del Rey	Copa del Rey - 6 Goals
    08/09	UEFA Champions League	UEFA Champions League - 9 Goals
    04/05	U20-Weltmeisterschaft 2005	U20-Weltmeisterschaft 2005 - 6 Goals
    10x Player of the Year
    18/19	FC Barcelona	FC Barcelona
    17/18	FC Barcelona	FC Barcelona
    16/17	LaLiga	LaLiga
    14/15	FC Barcelona	FC Barcelona
    12/13	FC Barcelona	FC Barcelona
    11/12	FC Barcelona	FC Barcelona
    10/11	FC Barcelona	FC Barcelona
    09/10	FC Barcelona	FC Barcelona
    08/09	FC Barcelona	FC Barcelona
    08/09	FC Barcelona	FC Barcelona
    4x TM-Player of the season
    2021	Spain	Spain
    2020	Spain	Spain
    2019	Spain	Spain
    2018	Spain	Spain
    <p/>
    `;
}

function threeBtnClicked() {
  document.getElementById("1bo").innerHTML = `<h2>Ronaldos Achievements</h2>
    <img class="centerimage" src="img/ronaldo.jpg" alt="ron" height="300"/>
    <p id="cool">1x European champion
    2016	Portugal	Portugal
    3x The Best FIFA Men's Player
    2017	Real Madrid	Real Madrid
    2016	Real Madrid	Real Madrid
    2008	Manchester United	Manchester United
    5x Winner Ballon d'Or
    2017
    2016
    2014
    2013
    2008
    4x UEFA Best Player in Europe
    2017	Real Madrid	Real Madrid
    2016	Real Madrid	Real Madrid
    2014	Real Madrid	Real Madrid
    2008	Manchester United	Manchester United
    5x Champions League winner
    17/18	Real Madrid	Real Madrid
    16/17	Real Madrid	Real Madrid
    15/16	Real Madrid	Real Madrid
    13/14	Real Madrid	Real Madrid
    07/08	Manchester United	Manchester United
    4x FIFA Club World Cup winner
    2018	Real Madrid	Real Madrid
    2017	Real Madrid	Real Madrid
    2015	Real Madrid	Real Madrid
    2009	Manchester United	Manchester United
    5x World Cup participant
    2022	Portugal	Portugal
    2018	Portugal	Portugal
    2014	Portugal	Portugal
    2010	Portugal	Portugal
    2006	Portugal	Portugal
    4x Euro participant
    2021	Portugal	Portugal
    2016	Portugal	Portugal
    2012	Portugal	Portugal
    2008	Portugal	Portugal
    4x Golden Boot winner
    14/15	Real Madrid	Real Madrid - 48 Goals
    13/14	Real Madrid	Real Madrid - 31 Goals
    10/11	Real Madrid	Real Madrid - 41 Goals
    07/08	Manchester United	Manchester United - 31 Goals
    1x Olympics participant
    2004	Portugal Olympic Team	Portugal Olympic Team
    3x English Champion
    08/09	Manchester United	Manchester United
    07/08	Manchester United	Manchester United
    06/07	Manchester United	Manchester United
    2x Italian champion
    19/20	Juventus FC	Juventus FC
    18/19	Juventus FC	Juventus FC
    2x Spanish champion
    16/17	Real Madrid	Real Madrid
    11/12	Real Madrid	Real Madrid
    1x English FA Cup winner
    2004	Manchester United	Manchester United
    1x Italian cup winner
    20/21	Juventus FC	Juventus FC
    2x English League Cup winner
    2009	Manchester United	Manchester United
    2006	Manchester United	Manchester United
    2x English Super Cup winner
    2008	Manchester United	Manchester United
    2007	Manchester United	Manchester United
    2x Italian Super Cup winner
    20/21	Juventus FC	Juventus FC
    18/19	Juventus FC	Juventus FC
    1x Winner UEFA Nations League
    2019	UEFA Nations League Finals	UEFA Nations League Finals
    1x Euro runner-up
    2004	Portugal	Portugal
    7x Second highest goal scorer
    15/16	Real Madrid	Real Madrid - 35 Goals
    15/16	Portugal	Portugal - 3 Goals
    12/13	Real Madrid	Real Madrid - 34 Goals
    12/13	Real Madrid	Real Madrid - 7 Goals
    11/12	Real Madrid	Real Madrid
    09/10	Manchester United	Manchester United
    08/09	Manchester United	Manchester United - 18 Goals
    1x Champions League runner-up
    08/09	Manchester United	Manchester United
    1x Portuguese Super Cup winner
    2003	Sporting CP	Sporting CP
    14x Footballer of the Year
    2020	Italy	Italy
    2019	Italy	Italy
    2018	Portugal	Portugal
    2017	Portugal	Portugal
    2016	Portugal	Portugal
    2015	Portugal	Portugal
    2013	Portugal	Portugal
    2012	Portugal	Portugal
    2011	Portugal	Portugal
    2009	Portugal	Portugal
    2008	Portugal	Portugal
    2008	England	England
    2007	Portugal	Portugal
    2007	England	England
    2x Striker of the Year
    20/21	Juventus FC	Juventus FC
    15/16	Real Madrid	Real Madrid
    1x Confederations Cup participant
    2017	Portugal	Portugal
    1x Best assist provider
    06/07	Manchester United	Manchester United
    3x Uefa Supercup winner
    17/18	Real Madrid	Real Madrid
    16/17	Real Madrid	Real Madrid
    14/15	Real Madrid	Real Madrid
    1x Euro Under-17 participant
    2002	Portugal U17	Portugal U17
    1x FIFA Puskás Award
    2009
    2x Spanish cup winner
    13/14	Real Madrid	Real Madrid
    10/11	Real Madrid	Real Madrid
    2x Spanish Super Cup winner
    17/18	Real Madrid	Real Madrid
    12/13	Real Madrid	Real Madrid
    2x English FA Cup runner-up
    06/07	Manchester United	Manchester United
    04/05	Manchester United	Manchester United
    15x Champions League participant
    21/22	Manchester United	Manchester United
    20/21	Juventus FC	Juventus FC
    19/20	Juventus FC	Juventus FC
    18/19	Juventus FC	Juventus FC
    15/16	Real Madrid	Real Madrid
    14/15	Real Madrid	Real Madrid
    12/13	Real Madrid	Real Madrid
    11/12	Real Madrid	Real Madrid
    10/11	Real Madrid	Real Madrid
    09/10	Real Madrid	Real Madrid
    07/08	Manchester United	Manchester United
    06/07	Manchester United	Manchester United
    05/06	Manchester United	Manchester United
    04/05	Manchester United	Manchester United
    03/04	Manchester United	Manchester United
    1x Uefa Cup participant
    02/03	Sporting CP	Sporting CP
    1x Europa League participant
    22/23	Manchester United	Manchester United
    1x FIFA Club World Cup participant
    2009	Manchester United	Manchester United
    19x Top goal scorer
    20/21	EURO 2020	EURO 2020 - 5 Goals
    20/21	Serie A	Serie A - 29 Goals
    18/19	UEFA Nations League Finals	UEFA Nations League Finals - 3 Goals
    17/18	FIFA Club World Cup	FIFA Club World Cup - 2 Goals
    17/18	UEFA Champions League	UEFA Champions League - 15 Goals
    16/17	FIFA Club World Cup	FIFA Club World Cup - 4 Goals
    16/17	UEFA Champions League	UEFA Champions League - 12 Goals
    15/16	UEFA Champions League	UEFA Champions League - 16 Goals
    14/15	UEFA Champions League	UEFA Champions League - 10 Goals
    14/15	LaLiga	LaLiga - 48 Goals
    13/14	LaLiga	LaLiga - 31 Goals
    13/14	UEFA Champions League	UEFA Champions League - 17 Goals
    12/13	UEFA Champions League	UEFA Champions League - 12 Goals
    11/12	EURO 2012	EURO 2012 - 3 Goals
    10/11	Copa del Rey	Copa del Rey - 7 Goals
    10/11	LaLiga	LaLiga - 40 Goals
    07/08	UEFA Champions League	UEFA Champions League - 8 Goals
    07/08	Premier League	Premier League - 31 Goals
    04/05	FA Cup	FA Cup - 4 Goals
    8x Player of the Year
    20/21	Juventus FC	Juventus FC
    19/20	Juventus FC	Juventus FC
    18/19	Juventus FC	Juventus FC
    13/14	Real Madrid	Real Madrid
    12/13	Real Madrid	Real Madrid
    07/08	Manchester United	Manchester United
    07/08	Manchester United	Manchester United
    06/07	Manchester United	Manchester United
    2x TM-Player of the season
    2019	Italy	Italy
    2017	Spain	Spain<p/>
    `;
}

function fourBtnClicked() {
  document.getElementById("1bo").innerHTML = `<h2>Neymars Achievements</h2>
    <img class="centerimage" src="img/neymar.png" alt="neymar" height="300"/>
    <p id="cool">Titles and season
    2x South American Footballer of the Year
    2012	Santos FC	Santos FC
    2011	Santos FC	Santos FC
    1x Champions League winner
    14/15	FC Barcelona	FC Barcelona
    1x FIFA Club World Cup winner
    2016	FC Barcelona	FC Barcelona
    3x World Cup participant
    2022	Brazil	Brazil
    2018	Brazil	Brazil
    2014	Brazil	Brazil
    2x Olympics participant
    2016	Brazil Olympic Team	Brazil Olympic Team
    2012	Brazil	Brazil
    2x Copa América participant
    2015	Brazil	Brazil
    2011	Brazil	Brazil
    5x French champion
    22/23	Paris Saint-Germain	Paris Saint-Germain
    21/22	Paris Saint-Germain	Paris Saint-Germain
    19/20	Paris Saint-Germain	Paris Saint-Germain
    18/19	Paris Saint-Germain	Paris Saint-Germain
    17/18	Paris Saint-Germain	Paris Saint-Germain
    2x Spanish champion
    15/16	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    3x French cup winner
    20/21	Paris Saint-Germain	Paris Saint-Germain
    19/20	Paris Saint-Germain	Paris Saint-Germain
    17/18	Paris Saint-Germain	Paris Saint-Germain
    2x French league cup winner
    19/20	Paris Saint-Germain	Paris Saint-Germain
    17/18	Paris Saint-Germain	Paris Saint-Germain
    4x French Super Cup winner
    22/23	Paris Saint-Germain	Paris Saint-Germain
    20/21	Paris Saint-Germain	Paris Saint-Germain
    19/20	Paris Saint-Germain	Paris Saint-Germain
    18/19	Paris Saint-Germain	Paris Saint-Germain
    1x Olympic medalist
    2016	Brazil Olympic Team	Brazil Olympic Team
    1x Second highest goal scorer
    09/10	Santos FC	Santos FC
    1x Champions League runner-up
    19/20	Paris Saint-Germain	Paris Saint-Germain
    1x Footballer of the Year
    2011	Brazil	Brazil
    1x Copa Libertadores winner
    10/11	Santos FC	Santos FC
    1x Recopa Sudamericana winner
    11/12	Santos FC	Santos FC
    2x Player of the Tournament
    20/21	Copa América 2021	Copa América 2021
    12/13	Confederations Cup 2013	Confederations Cup 2013
    1x Under-17 World Cup participant
    2010	Brazil U17	Brazil U17
    1x Uefa Supercup winner
    15/16	FC Barcelona	FC Barcelona
    1x Under-20 South American Championship winner
    2011	Brazil U20	Brazil U20
    1x Confederations Cup winner
    2013	Brazil	Brazil
    1x FIFA Puskás Award
    2011
    1x Copa América runner-up
    20/21	Brazil	Brazil
    2x League Player of the Year
    2018	Paris Saint-Germain	Paris Saint-Germain
    2018	Paris Saint-Germain	Paris Saint-Germain
    1x Brazilian cup winner
    2010	Santos FC	Santos FC
    3x Spanish cup winner
    16/17	FC Barcelona	FC Barcelona
    15/16	FC Barcelona	FC Barcelona
    14/15	FC Barcelona	FC Barcelona
    1x Spanish Super Cup winner
    13/14	FC Barcelona	FC Barcelona
    8x Champions League participant
    22/23	Paris Saint-Germain	Paris Saint-Germain
    21/22	Paris Saint-Germain	Paris Saint-Germain
    20/21	Paris Saint-Germain	Paris Saint-Germain
    18/19	Paris Saint-Germain	Paris Saint-Germain
    17/18	Paris Saint-Germain	Paris Saint-Germain
    16/17	FC Barcelona	FC Barcelona
    15/16	FC Barcelona	FC Barcelona
    13/14	FC Barcelona	FC Barcelona
    2x FIFA Club World Cup participant
    2016	FC Barcelona	FC Barcelona
    2012	Santos FC	Santos FC
    4x Top goal scorer
    14/15	UEFA Champions League	UEFA Champions League - 10 Goals
    14/15	Copa del Rey	Copa del Rey - 7 Goals
    11/12	Copa Libertadores	Copa Libertadores - 8 Goals
    09/10	Copa do Brasil	Copa do Brasil - 11 Goals<p/>
    `;
}
