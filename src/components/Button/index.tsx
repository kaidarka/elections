import React from 'react';
import { Button as BaseButton } from "antd";
import classNames from 'classnames';
import './styles.css';


interface IProps {
    children: string | React.ReactNode;
    className?: 'log-in' | 'vote' | 'default' | 'link';
    type?: 'log-in' | 'vote' | 'default' | 'link';
}



const Button = (props: IProps) => {
    const { children, className, type = 'default' } = props;
    return (
        <BaseButton className={classNames(className, type)} >
            {children}
        </BaseButton>
    );
};

export default Button;
