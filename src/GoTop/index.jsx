import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import * as S from './styles';

export const GoTop = () => {
  return (
    <S.Container href="#" title="Go to top" aria-label="Go to top">
      <MdOutlineKeyboardArrowUp />
    </S.Container>
  );
};
