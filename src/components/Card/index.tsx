import React, {useState} from "react";
import {ExternalLink} from "react-external-link";
import {FileTextOutlined} from "@ant-design/icons";

import Button from "../Button";
import "./styles.css";
import {ModalComponent} from "../Modal";

interface IProps {
    human: {
        id: number;
        name: string;
        image: string;
        fullDescription?: string;
    };
    vote: (id: number) => void;
    voteStatus: string;
    isAuthUser: boolean;
}

export const Card = (props: IProps) => {
    const {human, vote, voteStatus, isAuthUser} = props;
    const {id, name, image, fullDescription} = human;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOnClick = () => {
        showModal();
    };

    return (
        <div className="card">
            <img src={image} alt="" className="card-image"/>
            <div className="card-name">{name}</div>
            <ExternalLink href={fullDescription} className="programm">
                <FileTextOutlined/> Полная программа
            </ExternalLink>
            {voteStatus === "Started" && isAuthUser && (
                <Button onClick={handleOnClick} type="vote">
                    Проголосовать
                </Button>
            )}
            <ModalComponent
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            ></ModalComponent>
        </div>
    );
};

//<Button  onClick={() => vote(id)
