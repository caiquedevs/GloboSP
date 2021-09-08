import { useState, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsTheme from 'store/modules/theme/actions';

import { VscColorMode, VscChromeClose } from 'react-icons/vsc';
import { BiMenuAltLeft } from 'react-icons/bi';

import { Row, Card, Logo } from 'components';
import { Container, Menu } from './styles';
import { darkMode, lightMode } from 'styles/colors';

import useScrollHandler from 'hooks/useScroll';
import typesMenu from 'utils/menu';

type mode = typeof darkMode | typeof lightMode;

interface RootState {
  themeReducer: { theme: mode; active: boolean };
  authReducer: { isLoggedIn: boolean };
}

interface HeaderProps {
  mode?: 'fixed';
}

function Header({ mode }: HeaderProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const scroll = useScrollHandler();

  const { isLoggedIn } = useSelector((state: RootState) => state.authReducer);
  const listMenu = isLoggedIn ? typesMenu.isLoggedIn : typesMenu.default;

  const [toogleMenu, setToogleMenu] = useState(false);

  const handleClickShowMenu = () => {
    setToogleMenu(true);
  };

  const handleClickHiddenMenu = () => {
    setToogleMenu(false);
  };

  const handleClickLogin = () => {
    history.push('/login');
  };

  const handleClickChangeTheme = () => {
    dispatch(actionsTheme.changeTheme());
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <nav className={mode || scroll > 100 ? 'fixed shadow' : ''}>
        <Row flex="1" direction="column">
          {!toogleMenu ? (
            <button type="button" onClick={handleClickShowMenu}>
              <BiMenuAltLeft size="35px" />
            </button>
          ) : (
            <button type="button" onClick={handleClickHiddenMenu}>
              <VscChromeClose size="28px" />
            </button>
          )}

          {toogleMenu && (
            <Menu open={toogleMenu} onBlur={handleClickHiddenMenu}>
              {listMenu.map((item) => (
                <Card key={item.name} className="card" padding="10px 30px" radius="0px" bg="transparent">
                  <Link to={item.url} onClick={handleClickLogin}>
                    {item.name}
                  </Link>
                </Card>
              ))}
            </Menu>
          )}
        </Row>

        <Row flex="1" justify="center" className="row-logo">
          <Logo size="28px" />
        </Row>

        <Row flex="1" align="center" justify="flex-end" gap="10px">
          <button type="button" className="btn-mode" onClick={handleClickChangeTheme}>
            <VscColorMode size="23px" />
          </button>
        </Row>
      </nav>
    </Container>
  );
}

export default memo(Header);
