React-Native-Quiz-App

A repository egy React Native kvízalkalmazást mutat be.

Az alkalmazás kérdések és válaszok megjelenítésére szolgáló komponenseket tartalmaz, és JSON fájlt használ a kvíz tartalmának kezelésére. Ez megkönnyíti a kérdések frissítését és bővítését. 


Projekt Inicializálás - Quiz

A projekt inicializálása az Expo segítségével történt, amely egyszerű módot biztosít React Native alkalmazások fejlesztésére. Az alábbi lépéseket követtem a projekt beállításához:

Projekt létrehozása
A projektet a következő parancs segítségével inicializáltam:

bash
Kód másolása
expo init Quiz
Ez a parancs a régi JavaScript alapú sablont használja. Az Expo verzió, amit használtam: expo@51.0.35.

Navigáció beállítása
A navigációhoz szükséges csomagok telepítése az alábbi lépések szerint történt:

@react-navigation telepítése:
bash
npm install @react-navigation/native

További szükséges csomagok telepítése az Expo segítségével:

bash
npx expo install react-native-screens react-native-safe-area-context

Alternatívaként a fenti csomagok manuális telepítése:
bash
npm install react-native-screens react-native-safe-area-context

Stack navigáció támogatása:
bash
npm install @react-navigation/native-stack

Az újabb Expo verziók már a TypeScript nyelvet támogatják, és a következő paranccsal lehet létrehozni egy újabb projektet TypeScript-tel:

bash
npx create-expo-app@latest

Ez a bemutató rövid áttekintést nyújt arról, hogyan inicializáltam a Quiz projektet Expo használatával.

![Welcome](https://github.com/user-attachments/assets/88bc35e8-7b8d-451f-a921-3bdd5b9be566)

![Kérdések](https://github.com/user-attachments/assets/c8453312-2005-4517-b5d7-2287dbd8aece)

![Képernyőkép 2024-10-01 125911](https://github.com/user-attachments/assets/f91aa7ad-5431-4574-9817-aa1e23cc8d0f)
