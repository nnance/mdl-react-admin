import React from 'react';
import logo from './logo.svg';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hello {props.name}, <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >Learn React</a>
        </p>
    </header>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;