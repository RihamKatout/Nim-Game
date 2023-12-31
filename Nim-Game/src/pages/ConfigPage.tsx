import React, { FC, useState } from "react";
import { Game, gameDefault } from "../App";
import TransparentButton from "../components/TransparentButton";

type ConfigProps = {
  setCurrentPage: (nextPage: string) => void;
  setGameSettings: (settings: any) => void;
  gameSettings: Game;
};

const ConfigPage: FC<ConfigProps> = ({
  setCurrentPage,
  setGameSettings,
  gameSettings,

}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={"/src/assets/configPage/configBackground.svg"}
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      />
      {/* add a pile */}
      <div
        style={{
          width: "13%",
          height: "6.5%",
          position: "absolute",
          top: "42%",
          left: "43.5%",
        }}
      >
        <TransparentButton
          onClick={() => {
            if (gameSettings.piles.length === 7) {
              alert("Can't add more than 7 piles!");
            } else
              setGameSettings(
                (prevSettings: Game): Game => ({
                  ...prevSettings,
                  piles: [...prevSettings.piles, 1],
                })
              );
          }}
        />
      </div>
      {/* start */}
      <div
        style={{
          width: "12.4%",
          height: "8.2%",
          position: "absolute",
          top: "60%",
          left: "52.7%",
        }}
      >
        <TransparentButton
          onClick={() => {
            if (gameSettings.piles.length === 0) {
              alert("There are no piles to start the game!");
            } else {
              setCurrentPage("GamePage");
            }
          }}
        />
      </div>
      {}
      {/* computer <-> 2players */}
      <div
        style={{
          width: "16.3%",
          height: "8.2%",
          position: "absolute",
          top: "60%",
          left: "35%",
        }}
      >
        <TransparentButton
          onClick={() => {
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                player2:
                  prevSettings.player2 === "computer" ? "player2" : "computer",
              })
            );
          }}
        />
      </div>
      {/* back */}
      <div
        style={{
          width: "9%",
          height: "8.2%",
          position: "absolute",
          top: "2.2%",
          left: "1.6%",
        }}
      >
        <TransparentButton
          onClick={() => {
            setCurrentPage("VersionsPage");
            setGameSettings(gameDefault);
          }}
        />
      </div>
      {/* easy */}
      <div
        style={{
          width: "7.8%",
          height: "6.5%",
          position: "absolute",
          top: "10%",
          left: "36%",
        }}
      >
        <TransparentButton
          onClick={() => {
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                difficulty: "easy",
              })
            );
          }}
        />
      </div>
      {/* medium */}
      <div
        style={{
          width: "8.4%",
          height: "6.5%",
          position: "absolute",
          top: "10%",
          left: "45.8%",
        }}
      >
        <TransparentButton
          onClick={() => {
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                difficulty: "medium",
              })
            );
          }}
        />
      </div>
      {/* hard */}
      <div
        style={{
          width: "7.8%",
          height: "6.5%",
          position: "absolute",
          top: "10%",
          left: "56.2%",
        }}
      >
        <TransparentButton
          onClick={() => {
            setGameSettings(
              (prevSettings: Game): Game => ({
                ...prevSettings,
                difficulty: "hard",
              })
            );
          }}
        />
      </div>
      {/* add to pile */}
      <div
        style={{
          width: "16%",
          height: "16%",
          position: "absolute",
          top: "21%",
          left: "40.86%",
          backgroundColor: "transparent",
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          flex: "0 0 20%",
          alignContent: "center",
        }}
      >
        {gameSettings.piles.map((numberOfStones: number, index: number) => {
          return (
            <button
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "transparent",
                // border: "0",
              }}
              onClick={() => {
                setGameSettings((prevSettings: Game): Game => {
                  const tmp = [...gameSettings.piles];
                  tmp[index]++;
                  if (tmp[index] === 11) tmp[index] = 1;
                  return {
                    ...prevSettings,
                    piles: [...tmp],
                  };
                });
              }}
            >
              {numberOfStones}
            </button>
          );
        })}
      </div>
      {/* text */}
      <div
        style={{
          width: "13%",
          height: "6.5%",
          position: "absolute",
          top: "48%",
          left: "43.5%",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <text>Click on the pile to increse it</text>
      </div>
      {gameSettings.player2 === "computer" && (
        <img
          src={"/src/assets/configPage/2players.svg"}
          style={{
            zIndex: "-1",
            position: "absolute",
            width: "12%",
            height: "8.2%",
            top: "60%",
            left: "37.1%",
          }}
        />
      )}
      {gameSettings.player2 === "player2" && (
        <img
          src={"/src/assets/configPage/computer.svg"}
          style={{
            zIndex: "-1",
            position: "absolute",
            width: "12%",
            height: "8.2%",
            top: "60%",
            left: "37.1%",
          }}
        />
      )}
    </div>
  );
};

export default ConfigPage;
