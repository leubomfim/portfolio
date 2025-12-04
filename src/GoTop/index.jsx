import { useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { usePortContext } from "../contexts/context";
import * as S from "./styles";

export const GoTop = () => {
  const { menu, setMenu, width } = usePortContext();
  useEffect(() => {
    if (width > 660) {
      setMenu(false);
    }
  }, [width, setMenu]);
  return (
    <>
      {menu && (
        <S.Container
          onClick={() => setMenu((m) => !m)}
          menu={menu}
          href="#"
          title="Go to top"
          aria-label="Go to top"
        >
          <MdOutlineKeyboardArrowUp />
        </S.Container>
      )}
      {!menu && (
        <S.Container href="#" title="Go to top" aria-label="Go to top">
          <MdOutlineKeyboardArrowUp />
        </S.Container>
      )}
    </>
  );
};
