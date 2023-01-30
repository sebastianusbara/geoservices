import React, {useEffect, useState} from "react";
import Box from "reusables/Box";
import { Image, Text, Link } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import { NavMainMenuProps } from "reusables/types";
import TextLink from "reusables/TextLink";
import {
  selectedColor,
  defaultColor,
  options,
  explorationOptions,
  laboratoryOptions,
  softwareOptions,
} from "./constants";
import {useRouter} from "next/router";

export const MainMenu = ({ onChange, selected }: NavMainMenuProps) => {
  const handleSelect = (selectedMenu: string) => () => {
    if (onChange) {
      onChange(selectedMenu);
    }
  };

  return (
    <>
      <Box
        css={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Oil and Gas
        </Text>
      </Box>
      {options?.map((item) => (
        <a key={item?.name} href={item?.url} onMouseOver={handleSelect(item?.name)}>
          <Box
            css={{
              margin: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              css={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: selected === item?.name ? selectedColor : defaultColor,
                cursor: "pointer",
              }}
            >
              {item?.label}
            </Text>
            <BsArrowRight color="#EC1C24" />
          </Box>
        </a>
      ))}
    </>
  );
};

export const DefaultSubMenu = () => {
  const image1 = "/assets/bg-personlab1.png";

  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            PVT Analysis
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            Geo Lab
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            Geo Lab
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
    </Box>
  );
};

export const ExplorationSubMenu = () => {
  const image1 = "/assets/bg-machinery.png";

  return (
    <>
      <Box
        css={{
          margin: "10px 10px 15px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Exploration
        </Text>
      </Box>

      <Box css={{ display: "flex" }}>
        <Box
          css={{
            width: "70%",
            display: "grid",
            gridAutoRows: "min-content",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {explorationOptions?.map((option) => (
            <Box
              key={option?.name}
              css={{
                mx: "10px",
                mb: "15px",
              }}
            >
              <TextLink
                textCSS={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "22px",
                }}
                href={option.href}
              >
                {option.label}
              </TextLink>
            </Box>
          ))}
        </Box>
        <Box css={{ mx: "$14" }}>
          <Image
            src={image1}
            objectFit="fill"
            height={200}
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export const LaboratorySubMenu = () => {
    const image1 = "/assets/bg-machinery.png";
    const [product, setProductData] = useState([]);

    const apiToken =
        "2ec67e19c8e68e464b98e935cbc43d59ea77c11d983120eb3d234d097cd7aff18771692acaa390be0f09bae1a134c6205553c888c90a3a69687edc730d9e92106283f875b54b9530a41124eec5e7fa6410ba4685b12d5b879f2de1f4c87b280d1cf9f979b3b87a7f76fb8bed79acf4d8bf3ec2546666b60cd5c8c44619a79ad4";
    const callAPI = async (setProductData) => {
        try {
            const res = await fetch(`http://localhost:1337/api/geolabs?populate=deep`, {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            });
            const data = await res.json();
            setProductData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, []);

    console.log(product);

    return (
        <>
            <Box
                css={{
                    margin: "10px 10px 15px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    css={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "22px",
                    }}
                >
                    Geolab
                </Text>
            </Box>

            <Box css={{ display: "flex" }}>
                <Box
                    css={{
                        width: "70%",
                        display: "grid",
                        gridAutoRows: "min-content",
                        gridTemplateColumns: "1fr 1fr",
                    }}
                >
                    {laboratoryOptions?.map((option) => (
                        <Box
                            key={option?.name}
                            css={{
                                mx: "10px",
                                mb: "15px",
                            }}
                        >
                            <TextLink
                                textCSS={{
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                }}
                                href={option.href}
                            >
                                {option.label}
                            </TextLink>
                        </Box>
                    ))}
                </Box>
                <Box css={{ mx: "$14" }}>
                    <Image
                        src={image1}
                        objectFit="fill"
                        height={200}
                        containerCss={{
                            borderRadius: "0",
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

// export const SoftwareSubMenu = () => {
//   const image1 = "/assets/bg-machinery.png";
//
//   return (
//     <>
//       <Box
//         css={{
//           margin: "10px 10px 15px 10px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Link
//           css={{
//             fontStyle: "normal",
//             fontWeight: "700",
//             fontSize: "18px",
//             lineHeight: "22px",
//               color: 'black',
//               padding: '20px',
//           }}
//           href={'/oil_and_gas/software'}
//         >
//           Software
//         </Link>
//       </Box>
//
//       <Box css={{ display: "flex" }}>
//         <Box
//           css={{
//             width: "70%",
//             display: "grid",
//             gridAutoRows: "min-content",
//             gridTemplateColumns: "1fr 1fr",
//           }}
//         >
//           {softwareOptions?.map((option) => (
//             <Box
//               key={option?.name}
//               css={{
//                 mx: "10px",
//                 mb: "15px",
//               }}
//             >
//               <TextLink
//                 textCSS={{
//                   fontStyle: "normal",
//                   fontWeight: "400",
//                   fontSize: "18px",
//                   lineHeight: "22px",
//                 }}
//                 href={option.href}
//               >
//                 {option.label}
//               </TextLink>
//             </Box>
//           ))}
//         </Box>
//         <Box css={{ mx: "$14" }}>
//           <Image
//             src={image1}
//             objectFit="fill"
//             height={250}
//             containerCss={{
//               borderRadius: "0",
//             }}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// };

export const SoftwareSubMenu = () => {
    const image1 = "/assets/logo-paradigm.png";
    const image2 = "/assets/logo-petrosys.png";
    const image3 = "/assets/logo-kappa.png";

    return (
        <Box
            css={{
                display: "grid",
                gridAutoRows: "1fr",
                gridTemplateColumns: "1fr 1fr 1fr",
            }}
        >
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image1}
                    objectFit="cover"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Paradigm
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image2}
                    objectFit="contain"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Petrosys Data Management
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
            <Box css={{ mx: "20px" }}>
                <Image
                    src={image3}
                    objectFit="contain"
                    height={200}
                    containerCss={{
                        borderRadius: "0",
                        marginTop: 40
                    }}
                />
                <Box
                    css={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        css={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "22px",
                        }}
                    >
                        Kappa
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                </Box>
            </Box>
        </Box>
    );
};

const subMenu: { [x: string]: () => JSX.Element } = {
  default: DefaultSubMenu,
  exploration: ExplorationSubMenu,
  laboratory: LaboratorySubMenu,
  software: SoftwareSubMenu,
  training: () => <>training</>,
  wellAndServices: () => <>wellAndServices</>,
};

export const getSubMenu = (selected: string) => {
  return subMenu[selected] ?? subMenu["default"];
};

export default {
  MainMenu,
  getSubMenu,
};
