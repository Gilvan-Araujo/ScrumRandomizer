import { Button, Checkbox, Input, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as S from "../styles/style";

type ListItemProps = {
  name: string;
  checked: boolean;
};

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [randomName, setRandomName] = useState("");
  const [listOfNames, setListOfNames] = useState<ListItemProps[]>([
    { name: "Edu", checked: false },
    { name: "Eudes", checked: false },
    { name: "Gui", checked: false },
    { name: "Jhonatã", checked: false },
    { name: "Lucas", checked: false },
    { name: "Victor", checked: false },
  ]);

  useEffect(() => {
    const localStorageList = localStorage.getItem("listOfNames");

    if (localStorageList) {
      const parsedList = JSON.parse(localStorageList);

      const sortedList = parsedList.sort(
        (a: { name: number }, b: { name: number }) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
      );

      setListOfNames(sortedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfNames", JSON.stringify(listOfNames));
  }, [listOfNames]);

  return (
    <div>
      <Head>
        <title>Scrum Randomizer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <Input
          aria-label="empty textarea"
          placeholder="Vazio"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              name !== "" &&
                setListOfNames([...listOfNames, { name, checked: false }]);

              setName("");
            }
          }}
        />

        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            name !== "" &&
              setListOfNames([...listOfNames, { name, checked: false }]);

            setName("");
          }}
        >
          Adicionar
        </Button>

        {listOfNames.length > 0 && (
          <S.ListContainer>
            {listOfNames.map((item, index) => (
              <S.ListItem key={`${item.name}-${index}`}>
                <div>
                  <Checkbox
                    color="secondary"
                    checked={item.checked}
                    onChange={() => {
                      const newListOfNames = [...listOfNames];
                      newListOfNames[index].checked =
                        !newListOfNames[index].checked;
                      setListOfNames(newListOfNames);
                    }}
                  />

                  <S.CustomText>{item.name}</S.CustomText>
                </div>

                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    const newListOfNames = [...listOfNames];
                    newListOfNames.splice(index, 1);
                    setListOfNames(newListOfNames);
                  }}
                >
                  X
                </Button>
              </S.ListItem>
            ))}
          </S.ListContainer>
        )}

        <S.Row>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              const newListOfNames = [...listOfNames];

              const listOfUncheckedNames = newListOfNames.filter(
                (item) => !item.checked
              );

              const randomIndex = Math.floor(
                Math.random() * listOfUncheckedNames.length
              );

              setRandomName(listOfUncheckedNames[randomIndex].name);
            }}
          >
            Randomizar
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              const newListOfNames = listOfNames.map((item) => ({
                ...item,
                checked: false,
              }));
              setListOfNames(newListOfNames);
              setRandomName("");
            }}
          >
            Resetar
          </Button>
        </S.Row>

        <Typography>{randomName}</Typography>
      </S.Container>
    </div>
  );
};

export default Home;
