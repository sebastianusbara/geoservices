import React from "react";
import imgBackground from "assets/bg-energyevolution.png";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

const Sandbox = () => {
  const imageSrc = imgBackground.src;
  const height = "391px";
  const objectPosition = "0 -350px";
  const text = "Core Analysis";

  return (
    <Box css={{ width: "100%", position: "relative" }}>
      <Image
        src={imageSrc}
        objectFit="cover"
        height={height}
        containerCss={{
          width: "100%",
          borderRadius: "0",
        }}
        css={{
          zIndex: "-1",
          objectPosition: `${objectPosition}`,
          position: "relative",
        }}
      />
      <Text
        css={{
          position: "absolute",
          top: "40%",
          left: "140px",
          color: "$white",
          fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "80px",
          lineHeight: "76px",
        }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default Sandbox;
