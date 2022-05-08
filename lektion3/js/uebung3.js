/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein


  let pizza = {
    art: "Pizza Al Noor",
    belag: "Tomatensoße, Käse, Salami, Schinken, Paprika, frische Champions, Zwiebeln",
    skala: 10,
    gerneIsst: true
  }

  console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  //ToDo: füge ab hier in den debugs Deinen Code ein

  let ghibli = {
    name: "Studio Ghibli",
    gruendung: 1985,
    medium: "Anime"
  }

  console.debug(Object.keys(ghibli))
  console.debug(Object.values(ghibli))
  console.debug(Object.entries(ghibli))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein

  let kuenstler = {
    vorname: "Stan",
    nachname: "Lee",
    geboren: 1922,
    gestorben: 2018,
    taetigkeit: "Autor",
    LieblingsWerk: "Amazing Fantasy #15",
    quote: "With great power there  must also come great responsibility!"
  }

  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()